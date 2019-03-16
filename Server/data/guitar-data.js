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
    },

    delete: async (id) => {
        try {
            await Guitar.findByIdAndRemove(id);
            return { message: 'Deleted!' };
        } catch (err) {
            console.log(err);
            throw new Error('Failed to delete guitar!');
        }
    },

    edit: async (id, newGuitarInput) => {
        try {
            const guitar = await Guitar.findById(id);

            Object.keys(newGuitarInput).forEach(newProp => {
                guitar[newProp] = newGuitarInput[newProp];
            });

            await guitar.save();
            return { msg: 'Edited successfully' };
        } catch (err) {
            console.log(err);
            throw new Error('Failed to edit guitar');
        }
    }
}