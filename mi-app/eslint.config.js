import js from '@eslint/js';

export default [
    js.configs.recommended,
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: 2020,
            sourceType: "module",
            globals: {
                window: "readonly",
                document: "readonly",
                navigator: "readonly"
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true
                }
            }
        },
        rules: {
            "no-unused-vars": "warn"
        }
    }
];