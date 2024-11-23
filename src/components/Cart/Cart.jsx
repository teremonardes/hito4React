import { pizzaCart } from '../Home/pizzas'
import { useState } from 'react'

const Cart = () => {
  const [cart, setCart] = useState(pizzaCart)

  const increaseQuantity = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id
        ? { ...pizza, count: pizza.count + 1 }
        : pizza
    ))
  }
  const decreaseQuantity = (id) => {
    setCart(cart.map((pizza) =>
      pizza.id === id && pizza.count > 0
        ? { ...pizza, count: pizza.count - 1 }
        : pizza
    ))
  }

  const calculateTotal = () => {
    const total = cart.reduce((total, pizza) => total + pizza.price * pizza.count, 0)
    return total.toLocaleString()
  }
  const filteredCart = cart.filter((pizza) => pizza.count > 0)
  return (
    <div className='container mx-auto'>
      <h1>Detalles del pedido:</h1>
      <div className='d-flex row col-12 mb-4 flex-md-row align-items-center px-5'>
        {filteredCart.map((pizza) => (
          <div key={pizza.id} className=' d-flex align-items-center justify-content-between border p-3 rounded shadow-sm mb-3'>
            <div className='d-flex align-items-center '>
              <img src={pizza.img} className='img-fluid rounded' style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
              <h3 className='mx-2 text-capitalize'>{pizza.name}</h3>
            </div>
            <div className='d-flex align-items-center '>
              <h3 className='mx-2'>${pizza.price}</h3>
              <button className='btn btn-outline-danger btn-sm' onClick={() => decreaseQuantity(pizza.id)}>-</button>
              <span className='mx-2'>{pizza.count}</span>
              <button className='btn btn-outline-info btn-sm' onClick={() => increaseQuantity(pizza.id)}>+</button>
            </div>

          </div>
        ))}
      </div>
      <div className='mb-5 px-5 text-center'>
        <h3>Total: ${calculateTotal()}</h3>
        <button className='btn btn-dark'>Pagar</button>
      </div>

    </div>
  )
}

export default Cart
