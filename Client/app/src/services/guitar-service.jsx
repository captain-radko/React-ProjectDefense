const baseUrl = 'http://localhost:5000/guitar'

const guitarService = {
    getAllGuitars: () => {
        return fetch(`${baseUrl}/all`);
    },

    getGuitarById: (id) => {
        return fetch(`${baseUrl}/details/${id}`)
    },

    editGuitarById: (id, guitar) => {
        return fetch(`${baseUrl}/edit/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(guitar)
        });
    },


    deleteGuitar: (id) => {
        return fetch(`${baseUrl}/delete/${id}`, {
            method: 'DELETE'
        });
    }
}

export default guitarService;