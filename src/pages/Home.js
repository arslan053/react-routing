import { Link, useNavigate } from "react-router-dom"
export default function HomePage(){
  const navigate = useNavigate();

  function handleNavigate(){
    navigate('/products') // navigating programatically(imparative)
  }

  return <>
    <h2>My HomePage</h2>
    <p>Go to the <Link to='/products'>my products page</Link></p>  
    <button onClick={handleNavigate}>Products</button>

  </>
}
