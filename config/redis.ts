import Ioredis from "ioredis"
import * as dotenv from "dotenv";

dotenv.config();

export const io_redis = new Ioredis({
    host: process.env.REDIS_HOST,
    port: parseInt(`${process.env.REDIS_PORT}`)
});