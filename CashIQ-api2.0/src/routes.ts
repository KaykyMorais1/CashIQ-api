import { Router } from "express";
import { LoginController } from "./modules/login/login.controller";

const routes = Router();

// Exemplos
// routes.post("/departamentos", new CreateDepController().handle);
routes.get("/users", new LoginController().teste);
// routes.delete("/departamentos/:id", new DeleteDepController().handle);
// routes.put("/departamentos/:id", new UpdateDepController().handle);

export { routes };