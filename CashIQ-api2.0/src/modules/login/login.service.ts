const sql = require('mssql');
import { LoginRepository } from './login.repository';
import { User } from './user.model';

export class LoginService {
    
    authenticateUser(user: any) {
        sql.connect()
    }

    getUsers() {
        console.log("teste")
        const repository = new LoginRepository();
        repository.getAllUsers();
    }

}