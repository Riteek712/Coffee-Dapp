import { ethers } from 'ethers';
import React from 'react'
0
const Buy = ({state}) => {
    const buyCoffee = async (event) =>{
        event.preventDefault();
        const {contract}= state;
        const name = document.querySelector('#name').value;
        const message = document.querySelector('#message').value;
        const amount = {value: ethers.utils.parseEther("0.001")}
        const transaction = await contract.buyChai(name, message, amount);
        await transaction.wait();
        console.log(`Transaction is Successfull.`)
        console.log(name, message);
    }
    return (
    <form onSubmit={buyCoffee}>
        <input id='name'></input>
        <input id='message'></input>
        <button>Pay</button>


    </form>
    )
}

export default Buy