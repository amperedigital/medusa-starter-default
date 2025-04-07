import Redis from "ioredis";

const redisUrl = process.env.REDIS_URL!;
const redisTls = process.env.REDIS_TLS === "true";

const redisOptions = {
  tls: redisTls ? {} : undefined, // ⚡ enable empty TLS config if true
};

export const createRedisClient = () => {
  return new Redis(redisUrl, redisOptions);
};
