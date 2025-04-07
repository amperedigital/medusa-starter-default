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
    workflows: false, // 🧠 FULLY DISABLED
    product: {
      resolve: "@medusajs/product",
      options: {
        redisUrl: process.env.REDIS_URL!,
        redisTls: process.env.REDIS_TLS === "true", // ✅ Important for real Redis SSL
      },
    },
    customer: {
      resolve: "@medusajs/customer",
      options: {
        redisUrl: process.env.REDIS_URL!,
        redisTls: process.env.REDIS_TLS === "true",
      },
    },
    stock_location: false,
    inventory: false,
    product_variant: false,
    tax: false,
    shipping_profile: false,
    shipping_option: false,
    promotion: false,
    cart: false,
    pricing: false, // 🧠 ADD THIS FOR EXTRA SAFETY
  },
});
