import request from "@/utils/request";
const VIDEO_SERVICE = "/eduservice/video";
export default {
  addVideo(video) {
    return request({
      url: VIDEO_SERVICE + `/addVideo`,
      method: "post",
      data: video
    });
  },
  updateVideo(video) {
    return request({
      url: VIDEO_SERVICE + `/updateVideo`,
      method: "post",
      data: video
    });
  },
  deleteVideo(videoId) {
    return request({
      url: VIDEO_SERVICE + `/delete/${videoId}`,
      method: "delete"
    });
  },
  getVideoById(videoId) {
    return request({
      url: VIDEO_SERVICE + `/${videoId}`,
      method: "get"
    });
  }
};
