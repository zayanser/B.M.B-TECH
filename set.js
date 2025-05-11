const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVVAzZmUxdGplaHd6TGhaK0NkcWFYT0ZzSFFTa09yN3VCdktqOE1YQm5HYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic09DZ3RVVWFLVnV1VTBjNGRQcW9ROENYWFhhbkdjSTM3MDN5OGNCLzJTOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlTjVlZUx5Y3N1NHdzLzBOYXM4em1SRWk1RlhrQXJhVHkzdHBQMHJOOVVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtVFdQc25ra1hLVGRUWGpEbkJsTlNLTERaU2JJZGZYc1Vpb1YyVDZScUJNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtITTE4c21tWTlHVVlJREViR3Z4dmxlWFdDVElHRnJWL3k1K0lSbmt5RVk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRCVHlwQXZZN2pybHFqMXpaQ1Z6enhYR29FVlJ0UUQwY0FvWHl3aGpoRjg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBoekU4cUZVSGFvMlhQOHlaRC9rZUdHbVFVS09DK1RYSHdtYWUvVFZGdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTm9yRmdLbi9UdENlcTRwRU9USmRLQlZwR2ZQdXBmMGZudnQ2aGhzZWJRcz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlZNGRNQ0lwYjE2eGtRY0ZJdUo0eFB2eUViS2d3bGxicm9COUdEUFJuVjJNemFjU0VkeGVaV2lucjdhU1FCMk5zdEJ3MHJ5VXp6MDF2Z3IzL251NERnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQsImFkdlNlY3JldEtleSI6ImFkelNxM2prdSszRzdJVkdPY2RXV1pYS3dWeEZEb0JURzZLMjJ5YVdrRkk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU1NzExNzgyNjY5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjQ2QUUxN0IzOTI1ODcxNzk2MkRDODcwMThDNTE3QUYxIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDY4NzEzNjV9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NTcxMTc4MjY2OUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI1QkRCRDk4RDFGNjE3ODBGMUIzOUM1MjUyREI5N0I3RiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ2ODcxMzY3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrcjF4MWNfU1MzbW1HMk9qM2gtU1pnIiwicGhvbmVJZCI6IjBkMDU2NWY2LTMzYzUtNDI0MC05Zjc3LTJjODU4NGZhNGM4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlV3drMitPVTdFWGdiYWlydU9aQU1ibjg1ZE09In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicVpCd0RsdmtFWWYvdlQ2QnNIdElwbFZTZzQ0PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlEzN0RSQjlXIiwibWUiOnsiaWQiOiIyNTU3MTE3ODI2Njk6MjFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQi5NLkItWE1EIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQdmR6S3NDRUxISS9NQUdHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI0TFg0a0dzdDRHQXpNcERISkhqWERJTC9ndi9vV1R2dHpreCtRQkdCMGtBPSIsImFjY291bnRTaWduYXR1cmUiOiJSN3NkUXhwMWpVUXFmRVNWbmdRSG1VTlFCM0krdXd0bTJ1ODVqTDNhaC9wWmIzRlVrbEcvMjVzOVltMEJrcVMwUWpTaTZScm5xTHN3cVRObHM3RWpBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZ2FxRlJZb0Z1MExNNysrTUdrcUFsMnpNY2dWTWVuSzBvbzZ2SUNRR1RZKzBoRTkzVWhoUGxvK095bEdzMUpCTUZ2c3VkYi9aSzRzb1ZtREJYVVM1QkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTE3ODI2Njk6MjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZUMxK0pCckxlQmdNektReHlSNDF3eUMvNEwvNkZrNzdjNU1ma0FSZ2RKQSJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0Njg3MTM1OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFINFcifQ==',
    PREFIXE: process.env.PREFIX || "*",
    OWNER_NAME: process.env.OWNER_NAME || "B.M.B-TECH",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 𝙱.𝙼.𝙱-𝚇𝙼𝙳 ke",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'B.M.B-TECH',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/17c83719a1b40e02971e4.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    ANTICALL : process.env.ANTICALL || 'yes',   
    AUTO_BIO : process.env.AUTO_BIO || 'yes',               
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTI_DELETE_MESSAGE || 'yes',
    AUTO_REACT : process.env.AUTO_REACT || 'yes',
    AUTO_REACT : process.env.AUTO_REACT || 'yes',              
    AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
    AUTO_READ : process.env.AUTO_READ || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

