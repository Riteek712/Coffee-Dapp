import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import abi from "./contractJson/coffee.json"
import './App.css'
import Buy from './components/Buy'
import Memos from './components/Memos'

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null
  })
  const [account, setAccount] = useState('Not Connected!'
  )
  useEffect(
    () => {
      const template = async () =>{
        const contractAddress = '0x313CAd19264785A60c4d035fe19C40b3B7323c7B';
        const contractAbi = abi.abi;
        //Metamast part
      try{
        const {ethereum} = window;
        const account = await ethereum.request({
          method:"eth_requestAccounts"
        })
        window.ethereum.on(
          "accountsChanged",
          () =>{
            window.location.reload();
          }
        )
        setAccount(account)
        const provider = new ethers.providers.Web3Provider(ethereum)//Read the blockchain.
        const signer = provider.getSigner();//To write on the Blockchain.

        const contract = new ethers.Contract(
          contractAddress,
          contractAbi,
          signer
        );
        setState({
          provider,
          signer,
          contract
        })
        console.log(contract)
      }catch(error){
        alert(error);
      }
      }
      template();
    }, []
  )
  return (
    <div className='App'>
      <div>
        Connected Account: {account}
      </div>
      <Buy state ={state}/>
      <Memos state={state}/>
    </div>
  )
}

export default App
