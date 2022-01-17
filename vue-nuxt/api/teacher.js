import request from '@/utils/request'
const FRONT_TEACHER = "/eduservice/teacherfront";
export default {
    //分页讲师查询的方法
  getTeacherList(page,limit) {
    return request({
      url: FRONT_TEACHER + `/getTeacherFrontList/${page}/${limit}`,
      method: 'get'
    })
  },
  //讲师详情的方法
  getTeacherInfo(id) {
    return request({
      url: FRONT_TEACHER + `/getTeacherFrontInfo/${id}`,
      method: 'get'
    })
  }

}
