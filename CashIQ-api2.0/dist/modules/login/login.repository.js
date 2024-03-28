"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRepository = void 0;
const database_config_1 = require("../../infrastructure/database/database.config");
class LoginRepository {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const db = new database_config_1.DatabaseConfig();
            try {
                const result = yield db.query("SELECT * FROM [USER]");
                console.log(result);
            }
            catch (error) {
                console.error("Erro ao executar a consulta:", error);
            }
        });
    }
}
exports.LoginRepository = LoginRepository;
//# sourceMappingURL=login.repository.js.map