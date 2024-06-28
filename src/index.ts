import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";

export interface ConnectionDetails {
  host: string;
  port: number;
  user: string;
  password: string;
  database: string;
}

export function getDbClient(connectionDetails: ConnectionDetails) {
  const pool = new Pool(connectionDetails);
  return drizzle(pool);
}

export * from "./schema";
