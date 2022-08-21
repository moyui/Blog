module.exports = {
  plugins: ['react'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      globalReturn: true,
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended'
  ],
  globals: {
    sleep: true,
    prettyFormat: true
  },
  rules: {
    'prettier/prettier': 1,
    'space-before-function-paren': 0,
    'react/prop-types': 0,
    'react/no-find-dom-node': 0,
    'react/display-name': 0,
    'react/jsx-boolean-value': 0,
    'react/no-did-update-set-state': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/array-type': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-namespace': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/adjacent-overload-signatures': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 1,
    'no-console': 'off',
    'prefer-const': 0,
    'no-var': 1,
    'prefer-rest-params': 0
  }
};
