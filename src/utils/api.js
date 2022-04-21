import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-f-end.herokuapp.com/api/',
});

export const getArticles = () => {

    let path = '/articles'
    return newsApi.get(path).then(({ data }) => {
     return data.articles
    })
}
export const getTopicArticles = (topics) => {

    let path = `/articles?topic=${topics}`
    return newsApi.get(path).then(({ data }) => {
     return data.articles
    })
}

export const getSingleArticle = (article_id) => {

    let path = `/articles/${article_id}`

  return newsApi.get(path).then(({ data }) => {
      return data.article
  })
}


