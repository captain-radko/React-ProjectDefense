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
    },

    addToCart: (guitar) => {
        let guitarsAsJson = window.localStorage.getItem("guitars") || JSON.stringify([]);
        const guitars = JSON.parse(guitarsAsJson);
        guitars.push(guitar);
        window.localStorage.setItem("guitars", JSON.stringify(guitars));
    },

    removeFromCart: (guitar) => {
        let guitarsAsJson = window.localStorage.getItem("guitars") || JSON.stringify([]);
        const guitars = JSON.parse(guitarsAsJson);
        const index = guitars.findIndex((currentguitar) => currentguitar._id === guitar._id)
        guitars.splice(index, 1);
        window.localStorage.setItem("guitars", JSON.stringify(guitars));

        return true;
    }
}

export default guitarService;