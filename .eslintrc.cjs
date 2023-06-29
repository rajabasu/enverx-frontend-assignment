module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': 'warn',
    'prefer-const': 'warn',
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'no-unused-vars': [
      'warn',
      {
        varsIgnorePattern: 'React',
      },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    'arrow-parens': ['error', 'always'],
    'no-empty-function': 'error',
  },
};
