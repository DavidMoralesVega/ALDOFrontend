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
	production: false,
	zephyrus: {
		auth: `${point.server}/auth`,
		// category
		category: `${point.server}/category`,
		post: `${point.server}/post`,
		departamentLaw: `${point.server}/departament-law`,
		resolutions: `${point.server}/resolutions`,
		requestWritten: `${point.server}/request-written`,
		recognition: `${point.server}/recognition`,
		contract: `${point.server}/contract`,
		library: `${point.server}/library`,
		fileArchive: `${point.server}/fileArchive`,
		proceeding: `${point.server}/proceeding`
	}
};
