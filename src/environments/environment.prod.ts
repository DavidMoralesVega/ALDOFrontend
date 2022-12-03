const config = {
	protocol: 'http',
	host: 'localhost',
	port: 3000,
	api: 'api/v1'
};

export const point = {
	server: `${config.protocol}://${config.host}:${config.port}/${config.api}`,
	domain: `${config.protocol}://${config.host}`
};

export const environment = {
	production: true,
	zephyrus: {
		// category
		category: `${point.server}/category`,
		post: `${point.server}/post`
	}
};
