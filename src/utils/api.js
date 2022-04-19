import axios from 'axios';

const newsApi = axios.create({
    baseURL: 'https://nc-news-f-end.herokuapp.com/api/',
});

export const getArticles = () => {
    return newsApi.get('/articles').then(({ data }) => {
        console.log(data.articles)
        return data.articles
    })
}