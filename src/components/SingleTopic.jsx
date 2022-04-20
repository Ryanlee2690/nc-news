import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopicArticles } from "../utils/api";
import { useParams } from "react-router-dom"


const Coding = () => {
    const [articles, setArticles] = useState([]);
    const { topic } = useParams()
    
    
    useEffect(() => {
        getTopicArticles(topic)
        .then((topicFromApi) => {
            console.log(topicFromApi,'<=== Topicfromapi')

            setArticles(topicFromApi)
        })
    }, [topic])

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

                        <button> <Link to={`/articles/${article.article_id}`}>Read Article</Link></button>

                        </div>

                        
                     </li>
                     
                )
            })}
        </main>
    )
}

export default Coding