import { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect(() => {
        getArticles().then((articlesFromApis) => {
            console.log(articlesFromApis)
            setArticles(articlesFromApis)

        })
    }, [])
    return(
        <main className='Articles'>
            {console.log(articles)}
            {articles.map((article) => {
                return (
                    <div className='card'>
                    <ul>
                      <div className="Articles_list">
                        <h1>{article.title}</h1>
                        <p>{article.topic}</p>
                        <p>Created By: {article.author}</p>
                        <p>Comments: {article.comment_count}</p>
                        <p>Votes: {article.votes}</p>
                        <button>View this article</button>
                        </div>

                        
                     </ul>
                     </div>
                )
            })}
        </main>
    )
}

export default Articles