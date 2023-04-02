import React, { useState, useEffect } from 'react'

const Memos = ({state}) => {
    const [memos, setMemos] = useState([]);
    const {contract} = state;
    useEffect(
        () =>{
            const memosMsg = async ()=>{
                const tmemos = await contract.getMemos();
                console.log(tmemos)
                setMemos(tmemos);
            }
            contract && memosMsg()
            
        }, [contract]
    )
  return <>(
    {
        memos.map(
            (memo)=>{
                return <div>
                <p>{memo.name}</p>
                <p>{memo.message}</p>
                <p>{memo.from}</p>
                <p>{new Date(memo.timestamp *1000).toLocaleString()}</p>
                </div>
            }

        )
    }

  )
  </>
}

export default Memos