"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginService = void 0;
const sql = require('mssql');
const login_repository_1 = require("./login.repository");
class LoginService {
    authenticateUser(user) {
        sql.connect();
    }
    getUsers() {
        console.log("teste");
        const repository = new login_repository_1.LoginRepository();
        repository.getAllUsers();
    }
}
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map