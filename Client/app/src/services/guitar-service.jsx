const baseUrl = 'http://localhost:5000/guitar'

const guitarService = {
    getAllGuitars: () => {
        return fetch(`${baseUrl}/all`);
    },

    getGuitarById: (id) => {
        return fetch(`${baseUrl}/details/${id}`)
    }
}

export default guitarService;