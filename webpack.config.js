const webpack = require('webpack');
const path = require('path');
const argv = require('yargs').argv;

const fs   = require('fs');

// const chalk = require('chalk');

require('dotenv').config();

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const SvgStore = require('webpack-svgstore-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostCSSAssetsPlugin = require('postcss-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const glob = require('glob');

const APP_ENV = argv.env.mode === 'production'
  ? 'production'
  : 'development';
console.log('mode: ' + APP_ENV);

let dirs = {
  src: process.env.SRC_DIR,
  dist: process.env.DIST_DIR
};

let extractCss = new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: true,
});

// postcss settings

let postCssPlugins = [
  require("css-mqpacker")({
    sort: true
  }),
  require('autoprefixer')({
    browsers: ['> 1%', 'Last 2 versions']
  }),
  require('postcss-flexbugs-fixes'),
  require('postcss-input-range')(),
  require('postcss-inline-svg')({
    path: path.join(dirs.src)
  }),
];

if (APP_ENV === 'production') {
  postCssPlugins.push(
    // require('postcss-csso')({
    //   comments: false
    // })
  );
}

let htmlPagesGenerated = [];
let pages = glob.sync(path.join(dirs.src, 'pages', '**', '*.handlebars'), {
  ignore: path.join(dirs.src, 'pages', '_partials', '**', '*.handlebars')
});
pages.forEach((page) => {
  htmlPagesGenerated.push(
    new HtmlWebpackPlugin({
      template: page,
      filename: path.relative(path.join(dirs.src, 'pages'), page).replace('.handlebars', '.html'),
      publicPath: dirs.src
    })
  );
});


let webpackPlugins = [
  new CleanWebpackPlugin(path.join(dirs.dist, '**', '*')),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(APP_ENV),
  }),
      new HtmlWebpackPlugin({
        publicPath: dirs.src,
        filename: 'index.html',
        template: './src/pages/index.handlebars',
      }),
  extractCss,
  new SvgStore({
    prefix: 'icon-',
    svgoOptions: {
      plugins: [
        {removeTitle: true},
        {convertStyleToAttrs: true},
        {removeComments: true},
        {removeDesc: true},
        {removeMetadata: true},
        {removeStyleElement: true},
        {removeScriptElement: true},
        // {
        //   removeAttrs: {
        //     attrs: "(fill|stroke)"
        //   }
        // }
      ]
    }
  }),

  new CopyWebpackPlugin([
    {
      context: path.join(__dirname, dirs.src, 'static'),
      from: path.join('**', '*'),
      to: './'
    }
  ], {
    copyUnmodified: true
  }),
  new PostCSSAssetsPlugin({
    test: /\.css$/,
    log: true,
    plugins: postCssPlugins
  }),
  ...htmlPagesGenerated,
];

if (APP_ENV === 'production') {
  webpackPlugins.push(
    new webpack.optimize.UglifyJsPlugin()
  );
}

let publicPath = APP_ENV === 'development' ? '/' : './';
console.log(path.join(__dirname, dirs.src, 'app', 'app.js'), '========')
module.exports = {
  entry: {
    app: path.join(__dirname, dirs.src, 'app', 'app.js')
  },
  devtool: APP_ENV === 'development' ? 'inline-source-map' : false,
  output: {
    path: path.join(__dirname, dirs.dist),
    filename: 'js/[name].js',
    publicPath: publicPath
  },

  plugins: webpackPlugins,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
            }
          }
        ]
      },
      {
        test: /^(?!copy\!.*\.html$).*\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
     
      { test: /\.handlebars$/, loader: "handlebars-loader",
        options: {
          runtime: path.join(__dirname, './helpers')
          
        }},
    
      {
        test: /\.svg$/,
        use: 'svg-inline-loader'
      },
      {
        test: /\.(sass|scss|css)$/,
        use: extractCss.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {url: false}
            },
            {
              loader: "sass-loader",
              options: {
                minimize: true,
                data: '@import "app/_scss-core/core";',
                includePaths: [path.resolve(__dirname, path.join('.', dirs.src))]
              },
            }
          ]
        })
      }
    ]
  },
  resolve: {
    modules: ["node_modules"],
    alias: {
      Utilities: path.resolve(__dirname, path.join(dirs.src, 'app', 'utilities'))
    }
  },
  resolveLoader: {
    alias: {
      'copy': 'file-loader?name=[path][name].[ext]&context=./' + dirs.src + '/&publicPath=./',
    }
  }
};
