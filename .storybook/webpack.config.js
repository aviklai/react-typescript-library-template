module.exports = ({ config, mode }) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [require.resolve('ts-loader') , require.resolve("react-docgen-typescript-loader")]
    });
    config.module.rules.push({
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
    });
    config.resolve.extensions.push('.ts', '.tsx');
    return config;
  };