import { post } from '../data/crud';

class CreateGuitarService {
    constructor(){
        this.baseUrl = 'http://localhost:5000/guitar';
        this.createUrl = `${this.baseUrl}/create`;
    }

    create(credentials){
        return post(this.createUrl, credentials);
    }
}

export default CreateGuitarService;