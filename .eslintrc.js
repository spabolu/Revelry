module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    '@react-native-community',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'react-native'],
  rules: {
    'react/jsx-filename-extension': [
      1,
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] },
    ],
    'no-use-before-define': [
      'error',
      { functions: true, classes: true, variables: false },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/no-unstable-nested-components': ['off'],
    'react-native/no-inline-styles': 'off',
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'react',
            importNames: ['default'],
            message:
              'Please avoid default import from React. Instead of `import React from "react"`, use named imports. For example, if you want to import useState, use `import { useState } from "react"`.',
          },
        ],
      },
    ],
  },
};
