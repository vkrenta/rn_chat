module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    'no-var': 'warn',
    eqeqeq: ['warn', 'smart'],
    'no-console': 'warn',
  },
};
