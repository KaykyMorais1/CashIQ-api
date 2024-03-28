"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const login_controller_1 = require("./modules/login/login.controller");
const routes = (0, express_1.Router)();
exports.routes = routes;
// Exemplos
// routes.post("/departamentos", new CreateDepController().handle);
routes.get("/users", new login_controller_1.LoginController().teste);
//# sourceMappingURL=routes.js.map