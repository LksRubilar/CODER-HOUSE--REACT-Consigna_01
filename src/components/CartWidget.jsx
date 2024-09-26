import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
    <img className="cart" src={cart} alt="" />
    <span>(3)</span>
  
    </>
  )  
}
export default CartWidget