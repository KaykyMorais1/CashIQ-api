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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const env_1 = __importDefault(require("./environments/env"));
const database_config_1 = require("./infrastructure/database/database.config");
const login_service_1 = require("./modules/login/login.service");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = (0, express_1.default)();
        const loginService = new login_service_1.LoginService();
        const db = new database_config_1.DatabaseConfig();
        dotenv_1.default.config();
        Object.keys(env_1.default).forEach((key) => {
            process.env[key] = env_1.default[key];
        });
        app.use((0, cors_1.default)());
        db.connectDb();
        app.use(express_1.default.json());
        app.use(routes_1.routes);
        app.listen(process.env.APP_PORT, () => console.log("Server is running"));
        app.get('/', (req, res) => {
            res.send('Hello World!');
        });
        loginService.getUsers();
    });
}
bootstrap();
//# sourceMappingURL=app.js.map