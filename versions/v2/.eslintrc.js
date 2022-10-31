/**
 * ESLINT configuration for React Typscript
 */
module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jsx-a11y/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TODO: add more rules?
    // 0 = 'off', 1 = 'warn', 2 = 'error'
    'no-console': 1,
    'no-unreachable': 2,
    'no-unreachable-loop': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react/tsx-filename-extension': [2, { extensions: ['.tsx'] }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-unused-vars': 1,
    '@typescript-eslint/strict-boolean-expressions': [
      1,
      {
        allowString: false,
        allowNumber: false,
      },
    ],
  },
};
