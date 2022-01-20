import request from "@/utils/request";
export default {
  //2 获取统计数据
  getDataSta(begin, end) {
    return request({
      url: `/staservice/sta/getRegisterInfo/${begin}/${end}`,
      method: "get"
    });
  }
};
