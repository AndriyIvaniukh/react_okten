import {axiosService} from "./axios.service";
import {urls} from "../constants";


const postsService = {
    getAll: (page, limit = 2) => axiosService.get(urls.posts,
        {
            params: {
                _start: (page - 1) * limit,
                _limit: limit
            }
        }
    ),
    getById: (id) => axiosService.get(`${urls.posts}/${id}`),
    getAllUserPosts: (userId) => axiosService.get(`${urls.posts}?userId=${userId}`)
}

export {postsService};
