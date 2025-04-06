import { loadEnv, defineConfig } from "@medusajs/framework/utils";

loadEnv(); // Always load env vars

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL!,
    redisUrl: process.env.REDIS_URL!,
    http: {
      storeCors: process.env.STORE_CORS || "", // fallback empty string
      adminCors: process.env.ADMIN_CORS || "",
      authCors: process.env.AUTH_CORS || "",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },
  modules: {
    workflows: false,
    stockLocation: false,
    inventory: false,
    pricing: false,
    productVariant: false,
    tax: false,
    shippingProfile: false,
    shippingOption: false,
  },
});
