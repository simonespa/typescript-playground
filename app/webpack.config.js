const path = require('path');

module.exports = (environmentVariables, options) => {
  const isProdMode = options.mode === 'production';

  const config = {
    target: 'node',
    entry: './src/index.ts',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2'
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            /src/,
            /node_modules\/sounds-home\/src/,
            /node_modules\/sounds-play\/src/
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    debug: true,
                    useBuiltIns: 'usage',
                    corejs: '3',
                    targets: {
                      node: '10'
                    }
                  }
                ],
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.json']
    }
  }

  const serverConfig = {
    name: 'Server Bundle',
    target: 'node',
    entry: './src/server.js',
    output: {
      filename: 'server.js',
      path: path.resolve(__dirname, 'dist'),
      libraryTarget: 'commonjs2'
    },
    externals: {
      config: 'config',
      cluster: 'cluster',
      os: 'os',
      fs: 'fs',
      express: 'express',
      'express-handlebars': 'express-handlebars',
      React: 'react',
      "react-dom/server": 'react-dom/server',
      "react-router-dom": 'react-router-dom',
      winston: "winston",
      luxon: 'luxon'
    },
    devtool: false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            /src/,
            /node_modules\/sounds-home\/src/,
            /node_modules\/sounds-play\/src/
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    debug: true,
                    useBuiltIns: 'usage',
                    corejs: '3',
                    targets: {
                      node: '10'
                    }
                  }
                ],
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    plugins: [new CleanWebpackPlugin({
      verbose: true
    })]
  };

  const clientConfig = {
    name: 'Client Bundle',
    target: 'web',
    entry: {
      'sounds-web': './src/client.jsx'
    },
    output: {
      path: path.join(__dirname, 'assets'),
      filename: isProdMode ? 'js/[name].[contenthash].js' : 'js/[name].js',
      library: 'SoundsWeb',
      libraryTarget: 'var'
    },
    externals: {
      React: 'react',
      'react-dom': 'react-dom',
      'react-router-dom': 'react-router-dom'
    },
    devtool: isProdMode ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          include: [
            /src/,
            /node_modules\/sounds-home\/src/,
            /node_modules\/sounds-play\/src/
          ],
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                [
                  '@babel/preset-env',
                  {
                    modules: false,
                    debug: true,
                    useBuiltIns: 'usage',
                    corejs: '3',
                    targets: {
                      browsers: ['last 2 versions', 'iOS >= 9', 'safari >= 10', 'not dead']
                    }
                  }
                ],
                '@babel/preset-react'
              ]
            }
          }
        }
      ]
    },
    resolve: {
      extensions: ['.js', '.jsx', '.json']
    },
    plugins: [
      new CleanWebpackPlugin(),
      new ManifestPlugin({
        seed: {},
        map(file) {
          const newFile = file;
          newFile.name = file.name.replace(/\.[a-f0-9]{10}\./, '.');
          return newFile;
        },
        fileName: 'manifest.json'
      })
    ]
  };

  if (!isProdMode) {
    serverConfig.plugins.push(
      new NodemonPlugin({
        watch: path.resolve(__dirname, 'dist'),
        script: './dist/server.js'
      })
    );
  }

  clientConfig.optimization = {
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '-'
    }
  };
  
  return [serverConfig, clientConfig];
};