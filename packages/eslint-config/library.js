const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: ["eslint:recommended", "prettier", "plugin:prettier/recommended"],
	settings: {
		"import/resolver": {
			typescript: {
				project,
			},
		},
	},
	plugins: ["unicorn"],
	rules: {
		"prettier/prettier": [
			"error",
			{
				singleQuote: false,
				endOfLine: "auto",
			},
		],
		"unicorn/filename-case": [
			"error",
			{
				case: "kebabCase",
				ignore: ["/android", "/ios"],
			},
		],
	},
	ignorePatterns: [
		// Ignore dotfiles
		".*.js",
		"node_modules/",
		"dist/",
	],
	overrides: [
		{
			files: ["*.js?(x)", "*.ts?(x)"],
			plugins: [
				"@typescript-eslint",
				"unused-imports",
				"tailwindcss",
				"simple-import-sort",
			],
			extends: [
				"plugin:tailwindcss/recommended",
				"plugin:prettier/recommended",
			],
			parserOptions: {
				project,
			},
			rules: {
				"max-params": ["error", 3],

				"max-lines-per-function": ["error", 70],
				"react/destructuring-assignment": "off", // Vscode doesn't support automatically destructuring, it's a pain to add a new variable
				"react/require-default-props": "off", // Allow non-defined react props as undefined
				"@typescript-eslint/comma-dangle": "off", // Avoid conflict rule between Eslint and Prettier
				"@typescript-eslint/consistent-type-imports": "error", // Ensure `import type` is used when it's necessary
				"import/prefer-default-export": "off", // Named export is easier to refactor automatically
				"tailwindcss/classnames-order": [
					"warn",
					{
						officialSorting: true,
					},
				], // Follow the same ordering as the official plugin `prettier-plugin-tailwindcss`
				"simple-import-sort/imports": "error", // Import configuration for `eslint-plugin-simple-import-sort`
				"simple-import-sort/exports": "error", // Export configuration for `eslint-plugin-simple-import-sort`
				"@typescript-eslint/no-unused-vars": "off",
				"tailwindcss/no-custom-classname": "off",
				"unused-imports/no-unused-imports": "error",
				"unused-imports/no-unused-vars": [
					"error",
					{
						argsIgnorePattern: "^_",
						varsIgnorePattern: "^_",
						caughtErrorsIgnorePattern: "^_",
					},
				],
			},
		},
	],
};
