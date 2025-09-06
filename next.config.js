module.exports = {
	reactStrictMode: true,
	output: "standalone",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.ctfassets.net",
				port: "3000",
				pathname: "/l9muyz0wgeyb/**",
			},
		],
		domains: ['images.ctfassets.net'],
	},
};
