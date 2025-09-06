module.exports = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "3000",
				pathname: "/**",
			},
		],
		domains: ['images.ctfassets.net'],
	},
};
