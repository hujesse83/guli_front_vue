import request from "@/utils/request";
const COURSE_SERVICE = "/eduservice/course";
export default {
  addCourseInfo(courseInfo) {
    return request({
      url: COURSE_SERVICE + `/addCourseInfo`,
      method: "post",
      data: courseInfo
    });
  },
  getCourseInfo(id) {
    return request({
      url: COURSE_SERVICE + `/getCourseInfo/${id}`,
      method: "get"
    });
  },
  updateCourseInfo(courseInfo) {
    return request({
      url: COURSE_SERVICE + `/updateCourseInfo`,
      method: "post",
      data: courseInfo
    });
  }
};
