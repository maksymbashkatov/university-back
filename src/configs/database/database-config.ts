import { DataSourceOptions } from 'typeorm';

export const databaseConfiguration = (
  isMigrationRun = true,
): DataSourceOptions => {
  const ROOT_PATH: string = process.cwd();
  const n_e = process.env.NODE_ENV;
  const file_extension =
    n_e === 'production' ? 'js' : n_e === 'development' ? 'ts' : '';
  const migrationsPath = `${ROOT_PATH}/src/**/migrations/*.${file_extension}`;
  const entitiesPath = `${ROOT_PATH}/src/**/*.entity.${file_extension}`;

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
    synchronize: true,
    logging: true,
  };
};
