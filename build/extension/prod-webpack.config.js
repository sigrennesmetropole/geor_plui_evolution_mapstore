
const path = require("path");

const createExtensionWebpackConfig = require('../../MapStore2/build/createExtensionWebpackConfig');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const { name } = require('../../config');
const commons = require('./commons');

// the build configuration for production allow to create the final zip file, compressed accordingly
const plugins = [
    new FileManagerPlugin({
        events: {
            onEnd: {
                copy: [
                    { source: path.resolve(__dirname, "..", "..", "assets", "translations"), destination: 'dist/translations' },
                    { source: path.resolve(__dirname, "..", "..", "assets", "index.json"), destination: 'dist/index.json' },
                ],
                archive: [
                    { 
                        source: 'dist', destination: `dist/${name}.zip`,

                    },
                ],
            },
        },
    })
];

const fileLoader = {
    test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: "[name].[ext]"
        }
    }]
};

const urlLoader = {
    test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/,
    use: [{
        loader: 'url-loader',
        options: {
            mimetype: "application/font-woff"
        }
    }]
};


const {module: moduleObj, ...extensionConfig} = createExtensionWebpackConfig({ prod: true, name, ...commons, plugins});

module.exports = { ...extensionConfig, module: {...moduleObj, rules: [...moduleObj.rules, fileLoader, urlLoader]}};
