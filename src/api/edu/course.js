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
  },
  getPublishCourseInfo(id) {
    return request({
      url: COURSE_SERVICE + `/getPublishCourseInfo/${id}`,
      method: "get"
    });
  },
  publihCourse(id) {
    return request({
      url: COURSE_SERVICE + `/publishCourse/${id}`,
      method: "post"
    });
  },
  getListCourse() {
    return request({
      url: COURSE_SERVICE,
      method: "get"
    });
  },
  getCoursePageList(current, limit, courseQuery) {
    return request({
      url: COURSE_SERVICE + `/pageCourseCondition/${current}/${limit}`,
      method: "post",
      data: courseQuery
    });
  },
  deleteCourseById(courseId){
        return request({
          url: COURSE_SERVICE + `/delete/${courseId}`,
          method: "delete",
        });
  }
};
