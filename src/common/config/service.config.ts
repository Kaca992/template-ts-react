import { isProduction } from "../../utils";

export function appendServiceApiEndpoint(url: string): string {
    return isProduction() ? `https://dinotestfunctions.azurewebsites.net/${url}` : `http://localhost:7071/${url}`;
}
