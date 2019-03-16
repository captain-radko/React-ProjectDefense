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
    },

    edit: (req, res) => {
        const id = req.params.guitarId;

        guitarData.edit(id, req.body)
            .then(data => {
                res.success(
                    true,
                    data.msg,
                    null,
                    200
                );
            }).catch(err => {
                res.success(
                    false,
                    err.message,
                    null,
                    500
                );
            });
    },

    delete: (req, res) => {
        const id = req.params.guitarId;

        guitarData.delete(id)
            .then(msg => {
                res.success(
                    true,
                    msg,
                    null,
                    200
                );
            }).catch(err => {
                res.success(
                    false,
                    err.message,
                    null,
                    500
                );
            });
    }
}