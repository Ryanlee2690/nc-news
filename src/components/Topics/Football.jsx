import { useEffect, useState } from "react";

import { getFootballArticles } from "../../utils/api";

const Football = () => {

        const [articles, setArticles] = useState([]);
    
    
        useEffect(() => {
            getFootballArticles().then((articlesFromApis) => {
                setArticles(articlesFromApis)
    
            });
        }, [])
    
        return(
            <main className='Articles'>
                {console.log(articles)}
                {articles.map((article) => {
                    return (
                        
                        <li className='card'>
                          <div className="Articles_list">
                            <h1>{article.title}</h1>
                            <p>{article.topic}</p>
                            <p>Created By: {article.author}</p>
                            <p>Comments: {article.comment_count}</p>
                            <p>Votes: {article.votes}</p>
                            <button>View this article</button>
                            </div>
    
                            
                         </li>
                         
                    )
                })}
            </main>
        )
        }

    
    export default Football