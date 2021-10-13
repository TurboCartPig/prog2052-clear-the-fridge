import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import CompressionPlugin from "compression-webpack-plugin";
import path from "path";
import url from "url";
import zlib from "zlib";

export default (env, argv) => {
	const isProduction = argv.mode === "production";

	// Webpack plugins
	let plugins = [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new MiniCssExtractPlugin(),
	];

	// Add compression plugins in production
	if (isProduction) {
		plugins = plugins.concat([
			new CompressionPlugin({
				filename: "[path][base].gz",
				test: /\.(js|css|html)$/i,
				algorithm: "gzip",
			}),
			new CompressionPlugin({
				filename: "[path][base].br",
				test: /\.(js|css|html)$/i,
				algorithm: "brotliCompress",
				compressionOptions: {
					params: {
						[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
					},
				},
			}),
		]);
	}

	return {
		entry: "./src/main.tsx",
		output: {
			filename: "[name].bundle.js",
			path: path.resolve(
				path.dirname(url.fileURLToPath(import.meta.url)),
				"./dist"
			),
		},
		resolve: {
			extensions: [".tsx", ".ts", ".js"],
		},
		devtool: isProduction ? undefined : "inline-source-map",
		devServer: {
			static: "./dist",
		},
		optimization: {
			minimize: true,
			runtimeChunk: "single",
		},
		plugins: plugins,
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: "ts-loader",
					exclude: /node_modules/,
				},
				{
					test: /\.css$/i,
					use: [
						MiniCssExtractPlugin.loader,
						"css-loader",
						"postcss-loader",
					],
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
					type: "asset/resource",
				},
			],
		},
	};
};
