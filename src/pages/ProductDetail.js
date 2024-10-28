import { Link, useParams } from 'react-router-dom'

export default function ProductDetailPage(){
  const params = useParams();
  const productId = params.productId

  return <>
    <h1>Product DEtails</h1>
    <h2>{productId}</h2>
    <p><Link to=".." relative='path'>Back</Link></p>
  </>
}
