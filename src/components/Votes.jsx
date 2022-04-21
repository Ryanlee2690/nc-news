import { useState } from "react";
const Votes = ({votes, article}) => {



    const [optimisticVotes, setOptimisticVotes] = useState(0)

    const increaseVotes = () => {
        setOptimisticVotes((currentVotes) => currentVotes + 1);
        fetch(`https://nc-news-f-end.herokuapp.com/api/articles/${article}`, {
            method: 'PATCH',
            body: JSON.stringify({ inc_votes: 1 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
       }

       const decreaseVotes = () => {
        setOptimisticVotes((currentVotes) => currentVotes - 1);
        fetch(`https://nc-news-f-end.herokuapp.com/api/articles/${article}`, {
            method: 'PATCH',
            body: JSON.stringify({ inc_votes: -1 }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
       }
    return (
        <div>
        <p>Votes: {votes + optimisticVotes}</p>
        <button onClick={increaseVotes}>Love it</button> - <button onClick={decreaseVotes}>Hate it</button>
        </div>
    )
}

export default Votes