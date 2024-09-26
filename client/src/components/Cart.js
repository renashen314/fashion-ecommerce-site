import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCart = async() => {
    const {data} = await axios.get('/api/cart')
    return data
}

export default function Cart() {
    const {data: cartItem, isLoading, error } = useQuery({
        queryKey:['cart'],
        queryFn: fetchCart,
    })

    if(isLoading) return <div>Loading Cart...</div>
    if(error) return <div>Error loading cart: {error.message} </div>

    return (
        <div>
            <h1>Your Cart</h1>
            <ul>
                {cartItem.map((item) => ( 
                    <li key={item.id}>
                        ${item.name} - ${item.price} x ${item.quantity}
                    </li>
                ))}
            </ul>
        </div>
    )
}