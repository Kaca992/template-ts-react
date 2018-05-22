import { fetcher } from "../utils/fetcher";
import { IParticipant } from "common/data";

export function getParticipants(): Promise<IParticipant[]> {
    return fetcher(`api/participant`,
        { hasResult: true },
        {
            method: 'GET'
        });
}
