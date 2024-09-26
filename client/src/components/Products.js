import { useQuery } from "@tanstack/react-query";
import axios from 'axios'
import {AddToCartButton} from "./AddToCartButton"

//Function to fetch data
const fetchProducts = async () => {
    const { data } = await axios.get('/api/products')
    return data
}

export default function Products() {
    const {data: products, isLoading, error} = useQuery({
        queryKey: ['products'], 
        queryFn: fetchProducts,
    })

    if(isLoading) return<div>Loading products...</div>
    if(error) return <div>Error loading products: {error.message}</div>

    return (
        <div>
          <h1>Products</h1>
          <ul>
            {products.map(product => (
              <li key={product.id}>
                {product.name} - ${product.price}
                <AddToCartButton product={product} />
              </li>
            ))}
          </ul>
        </div>
      );
}