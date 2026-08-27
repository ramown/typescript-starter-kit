import { loadEnvFile } from 'node:process';

try {
  loadEnvFile();
} catch (error) {
  const isMissingEnvFile = error instanceof Error && 'code' in error && error.code === 'ENOENT';

  if (!isMissingEnvFile) {
    throw error;
  }
}

export function getRequiredEnv(name: string): string {
  const value = process.env[name];

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 3000),

  // databaseUrl: getRequiredEnv('DATABASE_URL'),
};
