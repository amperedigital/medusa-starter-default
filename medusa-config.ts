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
    product: { resolve: "@medusajs/product" },
    promotion: { resolve: "@medusajs/promotion" },
    tax: { resolve: "@medusajs/tax" },
    pricing: { resolve: "@medusajs/pricing" },
    inventory: { resolve: "@medusajs/inventory" },
    stock_location: { resolve: "@medusajs/stock-location" },
    workflows: { resolve: "@medusajs/workflows" },
    cart: { resolve: "@medusajs/cart" },
  },
});
