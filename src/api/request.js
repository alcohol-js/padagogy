import axios from "axios";

const ins = axios.create();

ins.interceptors.response.use(function (resp) {
  console.log(resp);
  if (resp.data.code != 0) {
    return null;
  } else {
    // console.log("成功", resp.data.data);
    return resp.data.data;
  }
  // return resp;
});

export default ins;

// {
//   id
// 	username: whl,
// 	password_get_info,
// 	wenzhangshoucang:[id]
// }

// userid wenzhangid
