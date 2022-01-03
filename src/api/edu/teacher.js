import request from "@/utils/request";
const TEACHER_SERVICE = "/eduservice/teacher";
export default {
  getTeacherListPage(current, limit, teacherQuery) {
    return request({
      url: TEACHER_SERVICE + `/pageTeacherCondition/${current}/${limit}`,
      method: "post",
      data: teacherQuery
    });
  },
  deleteTeacherId(id) {
    return request({
      url: TEACHER_SERVICE + `/delete/${id}`,
      method: "delete"
    });
  },
  addTeacher(teacher) {
    return request({
      url: TEACHER_SERVICE + "/addTeacher",
      method: "post",
      data: teacher
    });
  },
  getTeacherInfo(id) {
    return request({
      url: TEACHER_SERVICE + `/getTeacher/${id}`,
      method: "get"
    });
  },
  updateTeacherInfo(teacher) {
    return request({
      url: TEACHER_SERVICE + `/updateTeacher`,
      method: "post",
      data: teacher
    });
  },
  getAllTeacher() {
    return request({
      url: TEACHER_SERVICE + `/all`,
      method: "get"
    });
  }
};
