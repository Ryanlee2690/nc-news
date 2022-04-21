import { useEffect, useState } from "react";



const Comments = (article) => {

    const [comments, setComments] = useState([]);




    useEffect(() => { if (article.article) {
        fetch(`https://nc-news-f-end.herokuapp.com/api/articles/${article.article}/comments`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data, '<=== Data');
                setComments(data.comments)
        }) }
    ;
}, [article.article])



    return(
        <main className='Comments'>
        {comments.map((comments) => {
            return (
                
                <li className='card'>
                  <div className="Articles_list">
                    <p>{comments.body}</p>
                    <p>{comments.author}</p>
                    <p>Likes: {comments.votes}</p>
                    </div>

                    
                 </li>
                 
            )
        })}
    </main>
    )

}

export default Comments




