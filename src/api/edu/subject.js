import request from "@/utils/request";
const SUBJECT_SERVICE = "/eduservice/subject";
export default {
  getSubjectList() {
    return request({
      url: SUBJECT_SERVICE + `/getAllSubject`,
      method: "get"
    });
  }
};
