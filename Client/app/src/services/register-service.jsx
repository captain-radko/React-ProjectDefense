import { post } from '../data/crud';

class RegisterService {
    constructor(){
        this.baseUrl = 'http://localhost:5000/auth';
        this.registerUrl = `${this.baseUrl}/signup`;
    }

    register(credentials){
        return post(this.registerUrl, credentials);
    }
}

export default RegisterService;