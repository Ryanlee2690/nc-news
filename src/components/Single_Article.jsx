import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getSingleArticle } from "../utils/api"

const Single_Article = () => {

    const [article, setArticle] = useState([]);
    const { article_id } = useParams()

    useEffect(() => {
        getSingleArticle(article_id)
        .then((articleFromApi) => {

            setArticle(articleFromApi)
        })
    }, [article_id])
let date = article.created_at

let formattedDate = date
    console.log(article)
    return (
        <article>
        <h1>{article.title}</h1>
        <h3>By {article.author}</h3>

        <p>{article.body}</p>

        <p>Date Created: {formattedDate}</p>
        <footer>comments go here</footer>
        </article>
    )
}

export default Single_Article