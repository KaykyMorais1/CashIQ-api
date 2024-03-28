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
exports.DatabaseConfig = void 0;
const mssql_1 = require("mssql");
class DatabaseConfig {
    constructor() { }
    configDb() {
        return __awaiter(this, void 0, void 0, function* () {
            const sqlConfig = {
                user: process.env.SQL_USER,
                password: process.env.SQL_PASSWORD,
                database: process.env.SQL_DATABASE,
                server: process.env.SQL_HOST,
                pool: {
                    max: 10,
                    min: 0,
                    idleTimeoutMillis: 30000,
                },
                options: {
                    encrypt: true,
                    trustServerCertificate: true,
                },
            };
            return sqlConfig;
        });
    }
    connectDb() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pool = yield new mssql_1.ConnectionPool(yield this.configDb()).connect();
                console.log("Conectado!");
                this.pool = pool;
            }
            catch (err) {
                console.log("ERRO: ", err);
            }
        });
    }
    query(sqlQuery) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if (!this.pool) {
                    yield this.connectDb();
                }
                const request = this.pool.request();
                const result = yield request.query(sqlQuery);
                return result.recordset;
            }
            catch (error) {
                console.error('Erro ao executar a consulta:', error);
                throw error;
            }
        });
    }
}
exports.DatabaseConfig = DatabaseConfig;
//# sourceMappingURL=database.config.js.map