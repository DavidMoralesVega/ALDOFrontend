const config = {
	protocol: 'http',
	host: '192.168.1.101',
	// host: 'localhost',
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
		auth: `${point.server}/auth`,
		// category
		category: `${point.server}/category`,
		call: `${point.server}/calls`,
		post: `${point.server}/post`,

		departamentLaw: `${point.server}/departament-Law`,
		resolutions: `${point.server}/resolutions`,
		requestWritten: `${point.server}/request-written`,
		recognition: `${point.server}/recognition`,
		contract: `${point.server}/contract`,

		library: `${point.server}/library`,
		user: `${point.server}/auth`,
		legislature: `${point.server}/legislatura`,
		fileArchive: `${point.server}/fileArchive`,
		proceeding: `${point.server}/proceeding`,
		requestReports: `${point.server}/request-reports`
	}
};
