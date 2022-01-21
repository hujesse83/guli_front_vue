import request from "@/utils/request";
export default {
  //2 获取统计数据
  getDataSta(queryObj) {
    return request({
      url: `/staservice/sta/getRegisterInfo/`,
      method: "post",
      data: queryObj
    });
  }
};
