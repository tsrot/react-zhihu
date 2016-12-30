var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	watch:true,
	devtool:'source-map',
	// entry:{
	// 	'main':'./app/js/main.js'
	// },
	output:{
		filename: 'js/[name].js',
    	path: __dirname,
    	publicPath: "http://127.0.0.1:5000/", //服务器IP和端口
	},
	module:{
		loaders:[{
			test:/\.js$/,
			exclude:/node_modules/,
			loader:'babel',
			query:{
				presets:['es2015','react']
			}
		},{
			test:/\.css$/,
			loader:ExtractTextPlugin.extract('style','css?postcss')
		},{
			test: /\.(woff|woff2|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
			loader: 'file-loader?name=fonts/[name].[ext]'
		}]
	},
	postcss:[
		require('autoprefixer')
	],
	plugins:[
		new HtmlWebpackPlugin({template:__dirname+'/index.html'}),
		new ExtractTextPlugin('css/[name]-[hash].css',{allChunks: true})
	]
}
