import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  // Ignorar la carpeta dist
  { ignores: ['dist'] },

  {
    files: ['**/*.{js,jsx}'], // Aplica la configuración a los archivos .js y .jsx
    languageOptions: {
      ecmaVersion: 2020, // Utiliza ECMAScript 2020
      globals: globals.browser, // Define los globals para el entorno del navegador
      parserOptions: {
        ecmaVersion: 'latest', // Usar la versión más reciente de ECMAScript
        ecmaFeatures: { jsx: true }, // Habilitar soporte para JSX
        sourceType: 'module', // Utiliza módulos ES6
      },
    },
    settings: {
      react: { version: '18.3' }, // Configura la versión de React
    },
    plugins: {
      react, // Plugin para React
      'react-hooks': reactHooks, // Plugin para React Hooks
      'react-refresh': reactRefresh, // Plugin para React Refresh
    },
    rules: {
      ...js.configs.recommended.rules, // Reglas recomendadas de ESLint para JS
      ...react.configs.recommended.rules, // Reglas recomendadas de ESLint para React
      ...react.configs['jsx-runtime'].rules, // Reglas de JSX runtime de React
      ...reactHooks.configs.recommended.rules, // Reglas recomendadas de React Hooks
      'react/jsx-no-target-blank': 'off', // Desactiva la advertencia para `target="_blank"`
      'react-refresh/only-export-components': [
        'warn', // Muestra una advertencia si se usa exportaciones innecesarias
        { allowConstantExport: true },
      ],
      // Puedes añadir más reglas personalizadas aquí si es necesario
    },
  },
];