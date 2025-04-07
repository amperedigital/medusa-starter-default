import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(process.env.NODE_ENV || "development", process.cwd());

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL!,
    redisUrl: process.env.REDIS_URL!,
    http: {
      storeCors: process.env.STORE_CORS || "",
      adminCors: process.env.ADMIN_CORS || "",
      authCors: process.env.AUTH_CORS || "",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    workflows: {
      resolve: "@medusajs/workflows",
      options: {
        redisUrl: process.env.REDIS_URL!,
        redisTls: true, // ✅ put TLS here
      },
    },
    stock_location: false,
    inventory: false,
    pricing: false,
    product_variant: false,
    tax: false,
    shipping_profile: false,
    shipping_option: false,
  },
});
