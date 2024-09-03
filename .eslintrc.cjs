module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react-hooks/recommended",
    "prettier",
    'plugin:prettier/recommended',
	],
  
	ignorePatterns: [
		"dist",
		".eslintrc.cjs",
		"dist/",
		"postcss.config.cjs",
		".eslintrc.cjs",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["only-warn", "react-refresh"],
	overrides: [
		// Force ESLint to detect .tsx files
		{ files: ["*.js?(x)", "*.ts?(x)"] },
	],
	rules: {
		 "@typescript-eslint/no-explicit-any": "off",
	},
}
