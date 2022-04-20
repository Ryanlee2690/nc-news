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
export const getCookingArticles = () => {

    let path = '/articles?topic=cooking'
    return newsApi.get(path).then(({ data }) => {
     return data.articles
    })
}
export const getFootballArticles = () => {

    let path = '/articles?topic=football'
    return newsApi.get(path).then(({ data }) => {
     return data.articles
    })
}
export const getCodingArticles = () => {

    let path = '/articles?topic=coding'
    return newsApi.get(path).then(({ data }) => {
     return data.articles
    })
}
