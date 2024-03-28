import { DatabaseConfig } from "../../infrastructure/database/database.config";

export class LoginRepository {
  async getAllUsers() {
    const db = new DatabaseConfig();
    try {
      const result = await db.query("SELECT * FROM [USER]");
      console.log(result);
    } catch (error) {
      console.error("Erro ao executar a consulta:", error);
    }
  }
}
