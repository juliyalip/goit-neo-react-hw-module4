const BASE_URL = "https://api.unsplash.com/search/photos/";

const ACCESS_KEY = "gYss9EaNvZOkz4jN-sRNbgw5gJrlcEJWLFDFiBrIEng";
import axios from "axios";

export async function getImages(query, page = 1) {
    const { data } = await axios.get(BASE_URL, {
        params: {
            query,
            page,
            per_page: 10,
            client_id: ACCESS_KEY,
        },
    });
    return data.results;
}
