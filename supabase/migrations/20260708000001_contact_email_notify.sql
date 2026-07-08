-- ============================================
-- Email notification on new contact message
-- ============================================
-- Fires an email (via Resend) whenever a row is inserted into
-- public.contact_messages. The Resend API key and the recipient
-- address are read from Supabase Vault so no secrets live in this
-- migration. See the accompanying one-time setup below (run in the
-- SQL Editor, NOT committed):
--
--   create extension if not exists pg_net;
--   select vault.create_secret('re_your_api_key', 'resend_api_key');
--   select vault.create_secret('you@example.com', 'contact_notify_email');
--
-- The message is always saved even if the email fails to send.

-- 1. HTTP transport used to call the Resend API
create extension if not exists pg_net;

-- 2. Trigger function
create or replace function public.notify_new_contact_message()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
declare
  api_key text;
  notify_to text;
begin
  select decrypted_secret into api_key
  from vault.decrypted_secrets
  where name = 'resend_api_key';

  select decrypted_secret into notify_to
  from vault.decrypted_secrets
  where name = 'contact_notify_email';

  -- Not configured yet: skip silently, the message row is still saved.
  if api_key is null or notify_to is null then
    return new;
  end if;

  perform net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || api_key,
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Portfolio Contact <onboarding@resend.dev>',
      'to', jsonb_build_array(notify_to),
      'reply_to', new.email,
      'subject', 'New portfolio message from ' || new.name,
      'text',
        'Name: ' || new.name || chr(10) ||
        'Email: ' || new.email || chr(10) || chr(10) ||
        new.message
    )
  );

  return new;
end;
$$;

-- 3. Trigger
drop trigger if exists on_contact_message_created on public.contact_messages;

create trigger on_contact_message_created
  after insert on public.contact_messages
  for each row
  execute function public.notify_new_contact_message();
