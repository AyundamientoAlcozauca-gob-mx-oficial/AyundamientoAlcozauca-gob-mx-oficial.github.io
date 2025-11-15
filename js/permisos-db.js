// Base de datos de permisos estatica para GitHub Pages
const PERMISOS_DB = {
    'ALCO-56492': {
        folio: 'ALCO-56492',
        estatus: 'vigente',
        marca: 'KAWASAKI',
        linea: 'Z650 ABS',
        modelo: '2024',
        color: 'NEGRO',
        numeroSerie: 'ML5EREN15RDAB7448',
        numeroMotor: 'SIN NUMERO',
        fechaVigencia: '2025-11-23',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56493': {
        folio: 'ALCO-56493',
        estatus: 'vigente',
        marca: 'HONDA',
        linea: 'CIVIC',
        modelo: '2023',
        color: 'BLANCO',
        numeroSerie: 'JH1234567890123456',
        numeroMotor: 'R18A1234567',
        fechaVigencia: '2025-12-15',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56494': {
        folio: 'ALCO-56494',
        estatus: 'vencido',
        marca: 'TOYOTA',
        linea: 'COROLLA',
        modelo: '2020',
        color: 'GRIS',
        numeroSerie: 'JT1234567890123456',
        numeroMotor: '2ZR1234567',
        fechaVigencia: '2024-08-15',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56495': {
        folio: 'ALCO-56495',
        estatus: 'vigente',
        marca: 'NISSAN',
        linea: 'VERSA',
        modelo: '2022',
        color: 'AZUL',
        numeroSerie: 'NI1234567890123456',
        numeroMotor: 'HR16DE123456',
        fechaVigencia: '2026-03-20',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56496': {
        folio: 'ALCO-56496',
        estatus: 'vigente',
        marca: 'FORD',
        linea: 'FOCUS',
        modelo: '2021',
        color: 'ROJO',
        numeroSerie: 'FD1234567890123456',
        numeroMotor: 'DURATEC123456',
        fechaVigencia: '2026-01-15',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56497': {
        folio: 'ALCO-56497',
        estatus: 'vigente',
        marca: 'CHEVROLET',
        linea: 'AVEO',
        modelo: '2019',
        color: 'PLATA',
        numeroSerie: 'CH1234567890123456',
        numeroMotor: 'ECOTEC123456',
        fechaVigencia: '2024-05-10',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56498': {
        folio: 'ALCO-56498',
        estatus: 'vigente',
        marca: 'VOLKSWAGEN',
        linea: 'JETTA',
        modelo: '2018',
        color: 'NEGRO',
        numeroSerie: 'VW1234567890123456',
        numeroMotor: 'TSI123456',
        fechaVigencia: '2023-12-20',
        imagen: '/images/img-permiso-certificado.png'
    },
    'ALCO-56499': {
        folio: 'ALCO-56499',
        estatus: 'vigente',
        marca: 'KAWASAKI',
        linea: 'NINJA',
        modelo: '2024',
        color: 'VERDE',
        numeroSerie: 'ML5EXER12RDAD4045',
        numeroMotor: 'NA',
        fechaVigencia: '2025-12-09',
        imagen: '/images/img-permiso-certificado.png'
    },
        'ALCO-56500': {
        folio: 'ALCO-56499',
        estatus: 'vigente',
        marca: 'KAWASAKI',
        linea: 'NINJA',
        modelo: '2017',
        color: 'NARANJA',
        numeroSerie: 'JKAEXEK11HDA00420',
        numeroMotor: 'NA',
        fechaVigencia: '2025-12-16',
        imagen: '/images/img-permiso-certificado.png'
    }

    // Para agregar mas permisos, simplemente agrega una coma despues del ultimo objeto
    // y crea un nuevo objeto siguiendo el mismo formato:
    // 'ALCO-XXXXX': {
    //     folio: 'ALCO-XXXXX',
    //     estatus: 'vigente' o 'vencido',
    //     marca: 'MARCA_DEL_VEHICULO',
    //     linea: 'MODELO_DEL_VEHICULO',
    //     modelo: 'AÑO',
    //     color: 'COLOR_DEL_VEHICULO',
    //     numeroSerie: 'NUMERO_DE_SERIE',
    //     numeroMotor: 'NUMERO_DE_MOTOR',
    //     fechaVigencia: 'AAAA-MM-DD',
    //     imagen: '/images/img-permiso-certificado.png'
    // }
};

// Funcion para buscar un permiso por folio
function buscarPermiso(folio) {
    const folioMayusculas = folio.toUpperCase().trim();
    return PERMISOS_DB[folioMayusculas] || null;
}

// Funcion para obtener todos los folios disponibles
function obtenerFoliosDisponibles() {
    return Object.keys(PERMISOS_DB);
}

// Funcion para validar formato de folio
function validarFormatoFolio(folio) {
    const regex = /^ALCO-\d{5}$/;
    return regex.test(folio.toUpperCase().trim());
}