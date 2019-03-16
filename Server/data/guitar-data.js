const Guitar = require('../models/Guitar');

module.exports = {
    getById: async (guitarId) => {
        try {
            const guitar = await Guitar.findById(guitarId);
            return { guitar, message: "Found!" };
        } catch (err) {
            console.log(err);
            throw new Error("Guitar does not exists!");
        }
    }
}