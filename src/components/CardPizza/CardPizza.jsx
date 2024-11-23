import Card from 'react-bootstrap/Card'
import { Button } from 'react-bootstrap'

const CardPizza = ({ name, price, desc, ingredients, img }) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant='top' src={img} />
      <Card.Body>
        <Card.Title>Pizza {name}</Card.Title>
        <div className='texto'>
          <div className='precio'>${price}</div>
          <div className='descripcion'>{desc}</div>
          <ul className='ingredientes'>🍕Ingredientes: {ingredients.map((ingredient) => <li key={ingredients}>{ingredient}</li>)}</ul>
        </div>
        <div className='botones d-flex justify-content-between'>
          <Button variant='light'>Ver más 👀</Button>
          <Button variant='dark'>Añadir 🛒</Button>
        </div>
      </Card.Body>
    </Card>
  )
}

export default CardPizza
