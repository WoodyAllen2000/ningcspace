import { PrismaClient } from "@prisma/client";

declare global {
    var prisma: PrismaClient | undefined;
}

export const db = globalThis.prisma || new PrismaClient();

// 避免开发环境下热重载时重复创建Prisma实例导致连接数过多的问题
if (process.env.NODE_ENV !== "production") {
    globalThis.prisma = db;
}