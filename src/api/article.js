import request from "./request";

//获取文章列表
export async function getArtList(page = 1, limit = 10) {
  return await request.get("/api/api/article.php", {
    params: {
      page,
      limit,
    },
  });
}

//获取单页文章
export async function getArticle(id) {
  const resp = await request.get("/api/api/detail_article.php", {
    params: {
      id,
    },
  });
  console.log(resp);
  return resp;
}

//文章收藏
export async function collect(userId, articleId) {
  const a = await request.get("/api/api/collect.php", {
    params: {
      userId,
      articleId,
    },
  });
  console.log(a);
  return a;
}
