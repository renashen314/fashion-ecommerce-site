import { useQueryClient, useMutation } from "@tanstack/react-query";
import axios from 'axios'

const addToCart = async (product) => {
    const {data} = await axios.post('/api/cart', product)
    return data
}

function AddToCartButton({product}) {
    const queryClient = useQueryClient()
    // useMutation hook to handle adding products to the cart
    const mutation = useMutation(addToCart, {
        onSuccess: () => {
            // After a successful mutation, refetch the cart data
            queryClient.invalidateQueries('cart')
        }
    })
    return (
        <button onClick={()=>mutation.mutate(product)}>
            Add to Cart
        </button>
    )
}