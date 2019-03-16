const getAll = 'http://localhost:5000/guitar/all'

const getAllService = {
    getAllGuitars: () => {
        return fetch(getAll);
    }
}

export default getAllService;