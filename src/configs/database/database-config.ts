import { DataSourceOptions } from 'typeorm';

export const databaseConfiguration = (
  isMigrationRun = true,
): DataSourceOptions => {
  const ROOT_PATH: string = process.cwd();
  const migrationsPath = `${ROOT_PATH}/src/**/migrations/*.ts`;
  const entitiesPath = `${ROOT_PATH}/src/**/*.entity.ts`;

  return {
    type: 'postgres',
    host: process.env.DATABASE_HOST,
    port: Number(process.env.DATABASE_PORT),
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [entitiesPath],
    migrations: [migrationsPath],
    migrationsTableName: 'migrations',
    migrationsRun: isMigrationRun,
    synchronize: false,
    logging: true,
  };
};
