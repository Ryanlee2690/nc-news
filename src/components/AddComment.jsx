import React, { useState } from 'react'

const AddComment = (article_id) => {

    let actualId = article_id.article_id

    const [optimisticUsername, setOptimisticUsername] = useState()
    const [optimisticComments, setOptimisticComments] = useState()
    const [opstimisticVotes, setOptimisticVotes] = useState()
    

    const [newComment, setNewComment] = useState("");
    const [newUsername, setNewUsername] = useState("");
    
    
    
    
    
    const handleSubmit = (e) => {
        
        e.preventDefault();


        setOptimisticUsername((currentUsername) => currentUsername = newUsername);
        setOptimisticComments((currentComment) => currentComment = newComment);
        setOptimisticVotes((currentVotes) => currentVotes = 'Likes : 0')
        
        fetch(`https://nc-news-f-end.herokuapp.com/api/articles/${actualId}/comments`, {
            method: "POST",
            body: JSON.stringify({
                body: newComment,
                username: newUsername
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        
    }
    

    
    return (
        <div>

         <p>Post your comment</p>
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              value={newUsername}
              placeholder="Username"
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <input
              type="text"
              value={newComment}
              placeholder="Comment"
              onChange={(e) => setNewComment(e.target.value)}
            />
    
            <button type="submit" disabled={optimisticComments !== undefined} >Create</button>


            <li className='card'>
                  <div className="Articles_list">
                    <p>{optimisticComments}</p>
                    <p>{optimisticUsername}</p>
                    <p>{opstimisticVotes}</p>
                    </div>

                    
                 </li>
    

          </form>
        </div>
      );

}

export default AddComment