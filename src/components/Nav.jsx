import { Link } from 'react-router-dom'

const Nav = () => {
    return(
        <nav className='Nav'>
            <Link to='/'>Home</Link> | <Link to='/topics'>Topics</Link> | <Link to='/articles'>Articles</Link> 
        </nav>
    )
}

export default Nav