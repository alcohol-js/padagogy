import request from "./request";

//提交投稿文章
export async function subContrib(data) {
  return await request({
    url: "/api/api/insert_sh_art.php",
    method: "post",
    data,
  });
}

//获取我的投稿
/**
 *
 * @param {*} id 用户id
 * @param {*} page 当前显示页码
 * @param {*} limit 页容量
 */
export async function getMyContrib(id, page, limit) {
  return await request({
    url: "/api/api/show_sh_article.php",
    method: "get",
    params: {
      id,
      page,
      limit,
    },
  });
}

//获取我的发布
/**
 *
 * @param {*} id 用户id
 * @param {*} page 当前显示页码
 * @param {*} limit 页容量
 */
export async function getMyRel(id, page, limit) {
  return await request({
    url: "",
    method: "get",
    params: {
      id,
      page,
      limit,
    },
  });
}
