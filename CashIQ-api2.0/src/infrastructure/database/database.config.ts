import { ConnectionPool, Request } from 'mssql';

export class DatabaseConfig {
  private pool: ConnectionPool;

  public constructor() {  }

  private async configDb() {
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
  }

  public async connectDb() {
    try {
      const pool = await new ConnectionPool(await this.configDb()).connect();
      console.log("Conectado!");
      this.pool = pool;
    } catch (err) {
      console.log("ERRO: ", err);
    }
  }

  async query(sqlQuery: string): Promise<any> {
    try {
      if (!this.pool) {
        await this.connectDb();
      }
      const request = this.pool.request();
      const result = await request.query(sqlQuery);
      return result.recordset;
    } catch (error) {
      console.error('Erro ao executar a consulta:', error);
      throw error;
    }
  }
}
