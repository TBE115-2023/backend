
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
            orderBy='id'
        }
    } = req
    const limiteSuperior = (page)*elements;
    const limiteInferior = (page-1) * elements + 1
const results  = await queryRun(`select * from Mediciones order by ${orderBy} desc limit ${limiteInferior},${limiteSuperior}`);
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

module.exports = {
    sensoresquery,
    getUserQuery,
    logsErrores
};