module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    [
      'module-resolver',
      {
        root: ['./src/'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@components': './src/components',
          '@assets': './src/assets',
          '@init': './src/init',
          '@locales': './src/locales',
          '@screens': './src/screens',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@constants': './src/constants',
          '@modals': './src/modals',
          '@theme': './src/theme',
        },
      },
    ],
  ],
};
