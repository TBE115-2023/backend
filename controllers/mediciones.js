var moment = require('moment');
const { queryRun } = require('../db/query');
const getUserQuery = async (req, res) => {
    const results  = await queryRun("select * from Users");
    res.json({
        results,
    });
}
const sensoresquery = async (req, res) => {
    const {
        query:{
            page=1,
            elements=1000,
            orderBy='id',
            pagination='true',
            single= 'false',
        }
    } = req
    const limiteSuperior = (page)*elements;
    const limiteInferior = (page-1) * elements + 1
    // const paginationQuery = pagination === 'true'?  `limit ${limiteInferior},${limiteSuperior}` : 'limit 1' //con paginado
    const paginationQuery = pagination === 'true'?  '' : 'limit 1'
const results  = await queryRun(`select * from Mediciones order by ${orderBy} desc ${paginationQuery}`);
res.json(
    results,
);
}

const logsErrores = async (req, res)=>{
    const results = await queryRun(`select * from LOG order by id desc`)
    res.json(
        results
    )
}

const ultimoControl = async (req, res)=>{
    const results = await queryRun('select * from CONTROL order by id desc limit 1')
    res.json(results[0] ?? {})
}

const escribirControl = async (req, res)=>{
    const {
        body:{
            body:{
                bomba,
                iluminacion,
                extractor
            }
        }
    } = req
    const fecha = moment().format('YYYY-MM-DD HH:mm:ss')
    console.log('req.body :>> ', req.body.body);
    try {
        await queryRun(`INSERT INTO TBE.CONTROL (FECHA, BOMBAAGUA, ILUMINACION, EXTRACTOR) VALUES('${fecha}', ${bomba}, ${iluminacion}, ${extractor}) `)
    } catch (error) {
        return res.status(400).json('No se pudo guardar la configuración')
    }
    return res.status(201).json('Configuración guardada con éxito')
}

module.exports = {
    sensoresquery,
    getUserQuery,
    logsErrores,
    ultimoControl,
    escribirControl
};