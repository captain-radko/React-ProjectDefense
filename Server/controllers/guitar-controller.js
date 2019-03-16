const { guitarData } = require('./../data')

module.exports = {
    getById: (req, res) => {
        const guitarId = req.params.guitarId;

        guitarData.getById(guitarId)
        .then(data => {
            res.success(
                true,
                data.msg,
                data.guitar,
                200
            );
        }).catch(err => {
            res.success(
                false,
                err.message,
                null,
                404
            );
        });
    }
}