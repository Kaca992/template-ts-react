import { IParticipantInfo } from "./appDataStructures";
import { fetcher } from "../utils/fetcher";

export function getParticipants(surveyId: number): Promise<IParticipantInfo[]> {
    return fetcher(`api/participants/${surveyId}`, { hasResult: true }, null);
}
