import { Link } from "react-router-dom"
export default function HomePage(){
  return <>
  <h2>My HomePage</h2>
  <p>Go to the <Link to='/products'>my products page</Link></p>  
  </>
}