import { UserReadebleError } from "../errors/UserReadebleError.js";

export class BaseApiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async _internalFetchJson(url, options) {
        try {
            let response = await fetch(url, options);
            if (response.status === 200) {
                return await response.json()
            } else if (response.status === 204) {
                return undefined;
            } else {
                let result = await response.json();
                throw new UserReadebleError(result.message);
            }
        } catch (e) {
            throw e;
        }

    }
}