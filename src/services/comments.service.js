import {axiosService} from "./axios.service";
import {urls} from "../constants";


const commentsService = {
    getAll: () => axiosService.get(urls.comments),
    getAllPostComments: (postId) => axiosService.get(`${urls.comments}?postId=${postId}`)
}

export {commentsService}
