module.exports = {
	plugins: [
		require('postcss-normalize')({
			forceImport: true
		}),
		require('postcss-utilities'),
		require('postcss-flexbugs-fixes'),
		require('autoprefixer')()
	]
};
