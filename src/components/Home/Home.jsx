import './Home.css'
import Header from '../Header/Header.jsx'
import CardPizza from '../CardPizza/CardPizza.jsx'
// import { pizzas } from './pizzas.js'
import { useEffect, useState } from 'react'

const Home = () => {
  const [pizzas, setPizzas] = useState([])
  useEffect(() => {
    getPizzas()
  }, [])
  const getPizzas = async () => {
    const res = await fetch('http://localhost:5000/api/pizzas')
    const data = await res.json()
    setPizzas(data)
  }
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row'>
          {pizzas.map((pizza) => (
            <div className='col-12 col-md-4 mb-5 mt-4' key={pizza.id}>
              <CardPizza
                name={pizza.name}
                price={pizza.price}
                ingredients={pizza.ingredients}
                img={pizza.img}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
