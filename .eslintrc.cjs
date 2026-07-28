module.exports = {
  root: true,
  env: { browser: true, es2021: true, node: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: { react: { version: 'detect' } },
  rules: {
    'react/react-in-jsx-scope': 'off',
    // O projeto não utiliza a biblioteca prop-types por opção de design
    // (mantém as dependências enxutas); as props são documentadas via
    // JSDoc/nomes descritivos nos próprios componentes.
    'react/prop-types': 'off',
  },
};
