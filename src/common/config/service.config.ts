import { isProduction } from "src/utils";

export function appendServiceApiEndpoint(url: string): string {
    return isProduction() ? `https://dinotestfunctions.azurewebsites.net/${url}` : `http://localhost:7071/${url}`;
}
