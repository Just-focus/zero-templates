/* eslint-disable no-undef */
module.exports = {
	root: true,
	settings: {
		react: {
			createClass: 'createReactClass', // Regex for Component Factory to use, default to "createReactClass"
			pragma: 'React', // Pragma to use, default to "React"
			fragment: 'Fragment', // Fragment to use (may be a property of <pragma>), default to "Fragment"
			version: 'detect'
		}
	},
	env: {
		browser: true,
		es2021: true
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
		// "project": "./tsconfig.eslint.json"
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'prettier/prettier': 'error'
	}
};
