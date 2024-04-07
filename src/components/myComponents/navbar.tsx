import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
  return <div className="fixed top-0 w-full h-12 flex items-center justify-between">
    <div className="flex w-[60%] justify-end gap-5">
      <span>Home</span>
      <span>About me</span>
      <span>Projects</span>
      <span>Blogs</span>
    </div>
     <ModeToggle />
  </div>
}