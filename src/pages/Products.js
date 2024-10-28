import { Link } from "react-router-dom"

const PRODUCTS = [
  {id: 'p1', name: 'Product1'},
  {id: 'p2', name: 'Product2'},
  {id: 'p3', name: 'Product3'},
];

export default function MyProducts(){
  return <>
    <h2>My Products</h2>
    <ul>
      {PRODUCTS.map((product) => (
        <li key={product.id}>
          <Link to={product.id}>{product.name}</Link>
        </li>
      ))}
    </ul>
  </>
}
