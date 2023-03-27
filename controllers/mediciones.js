const { queryRun } = require('../db/query');
const getUserQuery = async (req, res) => {
    const results  = await queryRun("select * from Users");
    res.json({
        results,
    });
}
const sensoresquery = async (req, res) => {
const results  = await queryRun("select * from sensores order by id desc limit 1");
res.json({
    results,
});
}
module.exports = {
    sensoresquery,
    getUserQuery
};