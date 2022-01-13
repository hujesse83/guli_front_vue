import request from "@/utils/request";
const CHAPTER_SERVICE = "/eduservice/chapter";
export default {
  // 根据courseId 获得所有章节+小节
  getAllChapterVideo(courseId) {
    return request({
      url: CHAPTER_SERVICE + `/getChapterVideo/${courseId}`,
      method: "get"
    });
  },
  addChapter(chapter) {
    return request({
      url: CHAPTER_SERVICE + `/addChapter`,
      method: "post",
      data: chapter
    });
  },
  getChapter(chapterId) {
    return request({
      url: CHAPTER_SERVICE + `/getChapterInfo/${chapterId}`,
      method: "get"
    });
  },
  updateChapter(chapter) {
    return request({
      url: CHAPTER_SERVICE + `/updateChapter`,
      method: "post",
      data: chapter
    });
  },
  deleteChapter(chapterId) {
    return request({
      url: CHAPTER_SERVICE + `/delete/${chapterId}`,
      method: "delete"
    });
  }
};
