const Webpack = require('webpack');
const WebpackDevServer = require('../../../lib/Server');
const webpackConfig = require('./webpack.config');


const compiler = Webpack(webpackConfig);
const devServerOptions = Object.assign({}, webpackConfig.devServer,{
	stats:{
		colors: true
	}
}); 

const server = new WebpackDevServer(compiler, devServerOptions);


server.listen(8080, '127.0.0.1', ()=>{
	console.log('Starting server on localhost:8080')
});