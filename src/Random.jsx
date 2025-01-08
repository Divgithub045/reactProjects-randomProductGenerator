import { useState } from 'react';
import './App.css'
function Random()

{
    const[title,setTitle] = useState("Product Title");
    const [image,setImage] = useState();
    const[times,setTimes]=useState(0);

    async function getProduct()
    {
        try {
            const res = await fetch('https://fakestoreapi.com/products');
            const data =await res.json();
            const randomNumber = Math.floor(Math.random()*data.length);
            const randomProduct =data[randomNumber];
            setTitle(randomProduct.title);
            setImage(randomProduct.image);
            setTimes(times+1);

            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div className="product-container">
            <h1>{title}</h1>
            <img src={image} alt="image" />
            <p className="message-text">You Have Hit the button {times} times</p>
            <button onClick={getProduct}>Generate Random</button>
        </div>

    )
}
export default Random;