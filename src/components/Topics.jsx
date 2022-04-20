import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import { Link } from 'react-router-dom'

const Topics = () => {
    return(
        <div>
         <CardGroup className='Topics'>
         <Link to='/articles/topic/cooking'><Card className='Topic_card Cooking'>
    <Card.Img className='Topic_images' variant="top" src="https://www.kindpng.com/picc/m/549-5496622_cooking-svg-png-icon-free-download-onlinewebfonts-.png" />
    <Card.Body>
      <Card.Title>Cooking</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  <Link to='/articles/topic/coding'>
   <Card className='Topic_card Coding'>
    <Card.Img className='Topic_images' variant="top" src="https://thumbs.dreamstime.com/b/icon-coding-programming-site-layout-vector-icons-white-background-trendy-linear-icon-icon-website-print-logo-168199368.jpg" />
    <Card.Body>
      <Card.Title>Coding</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
  <Link to='/articles/topic/football'><Card className='Topic_card Football'>
    <Card.Img variant="top" className='Topic_images' src="https://live.staticflickr.com/4876/32438497118_c15f2ba51e_b.jpg" />
    <Card.Body>
      <Card.Title>Football</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
  </Card>
  </Link>
</CardGroup>
        </div>
    )
}

export default Topics