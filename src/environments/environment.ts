const config = {
  protocol: 'http',
  host: 'localhost',
  port: 3000,
  api: 'api/v1',
};

export const point = {
  server: `${config.protocol}://${config.host}:${config.port}/${config.api}`,
  domain: `${config.protocol}://${config.host}:4200`,
};

export const environment = {
  production: false,
  zephyrus: {
    // adsi
    adsi: {
      adm_erp: `${point.server}/adm-erp`,
      adm_usuario: `${point.server}/adm-usuario`,
      adm_planta: `${point.server}/adm-planta`,
      adm_sistema: `${point.server}/adm-sistema`,
      adm_credencial: `${point.server}/adm-credencial`,
      adm_gestion: `${point.server}/adm-gestion`,
      adr_usersist: `${point.server}/adr-usersist`,
      adr_userscfc: `${point.server}/adr-userscfc`,
      adm_aprobador: `${point.server}/adm-aprobador`,
      adm_pais: `${point.server}/adm-pais`,
      adm_departamento: `${point.server}/adm-departamento`,
      adm_provincia: `${point.server}/adm-provincia`,
      adm_localidad: `${point.server}/adm-localidad`,
      adt_evento: `${point.server}/adt-evento`,
    },
    // sareh
  },
};
