export function setupMockFetch() {
    // setupJest.js or similar file
    const globalAny: any = global;
    // tslint:disable-next-line:no-var-requires
    globalAny.fetch = require('jest-fetch-mock');
}
