export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
        MAPBOX?: string;
    }
  }
}