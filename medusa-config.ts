import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL!,
    redisUrl: process.env.REDIS_URL!, // Still OK to keep rediss://
    http: {
      storeCors: process.env.STORE_CORS || "",
      adminCors: process.env.ADMIN_CORS || "",
      authCors: process.env.AUTH_CORS || "",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    workflows: false,
    product: false, // <-- DISABLE THIS ALSO TEMPORARILY
    stock_location: false,
    inventory: false,
    pricing: false,
    product_variant: false,
    tax: false,
    shipping_profile: false,
    shipping_option: false,
  },
});
