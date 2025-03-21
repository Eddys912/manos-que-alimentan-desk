declare namespace NodeJS {
  interface ProcessEnv {
    DB_USER: string;
    DB_HOST: string;
    DB_NAME: string;
    DB_PASSWORD: string;
    DB_PORT: string;
    PORT: string;
    JWT_SECRET: string;
  }
}
