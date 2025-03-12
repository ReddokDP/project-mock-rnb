import js from '@eslint/js';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import prettierConfig from 'eslint-config-prettier';

export default [
    js.configs.recommended,

    {
        files: ['**/*.ts', '**/*.tsx'],
        languageOptions: {
            globals: {
                fetch: 'readonly',
                document: 'readonly',
                __dirname: 'readonly',
            },
            parser: typescriptParser,
            parserOptions: {
                project: './tsconfig.json',
            },
        },
        plugins: { '@typescript-eslint': typescriptPlugin },
        rules: {
            ...typescriptPlugin.configs.recommended.rules,
        },
    },

    {
        files: ['**/*.jsx', '**/*.tsx'],
        plugins: { react: reactPlugin, 'react-hooks': reactHooksPlugin },
        rules: {
            ...reactPlugin.configs.recommended.rules,
            ...reactHooksPlugin.configs.recommended.rules,
            'react/react-in-jsx-scope': 'off',
        },
        languageOptions: {
            globals: {
                fetch: 'readonly',
                document: 'readonly',
                __dirname: 'readonly',
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
    },

    prettierConfig,

    {
        ignores: ['build/**'],
    },
];
