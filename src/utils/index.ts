export function isProduction() {
    return process && process.env && process.env.NODE_ENV === "production";
}
