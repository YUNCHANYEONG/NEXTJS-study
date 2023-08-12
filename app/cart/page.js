'use client'
import {age, name} from './data.js'
import Hi from './Hi.js'

export default function Cart() {
    return (
        <div>
            <Hi />
            <h4 className="title">Cart {age}</h4>
            <CartItem />
        </div>
    )
} 

function CartItem(props){
    return(
        <div className="cart-item">
            <p>상품명</p>
            <p>$40</p>
            <p>1개</p>
        </div>
    )
}