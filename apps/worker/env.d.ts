declare namespace NodeJS {
  interface ProcessEnv {
    PORT: string;
    MONGO_URI: string;
    REDIS_URL: string;
    JWT_SECRET: string;
  }
}
