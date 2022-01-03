import request from "@/utils/request";
const COURSE_SERVICE = "/eduservice/course";
export default {
  addCourseInfo(courseInfo) {
    return request({
      url: COURSE_SERVICE + `/addCourseInfo`,
      method: "post",
      data: courseInfo
    });
  }
};
