import * as React from 'react'
import { 
  type BaseError, 
  useWaitForTransactionReceipt, 
  useWriteContract
} from 'wagmi'
import { sendTransaction } from '@wagmi/core'
import { parseEther, parseGwei } from 'viem'
import { config } from './wagmi.ts'
import { GeocabAddress } from './addresses.ts'

import { abi } from './abi.ts'
 
export function BookTrip2() {
  const { 
    data: hash,
    error,   
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const fromLat = formData.get('fromLat') as string 
    let result = writeContract({
      address: GeocabAddress,
      abi,
      functionName: 'bookTrip',
      args: [
        {lat: BigInt(940783947759187132416), lon: BigInt(0)}, 
        {lat: BigInt(940783947759187132416), lon: BigInt(0)}
      ],
      value: parseGwei("1")
    })
    
    // const result2 = await sendTransaction(config, {
    //   to: GeocabAddress,
    //   value: parseGwei("1"),
    // })
    
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      {/* <input name="fromLat" placeholder="940783947759187132416" defaultValue="940783947759187132416" required />
      <input name="fromLon" placeholder="0" defaultValue="0" required />
      <input name="toLat" placeholder="940783947759187132416" defaultValue="940783947759187132416" required />
      <input name="toLon" placeholder="0" defaultValue="0" required /> */}
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Book Trip'} 
      </button>
      {hash && <div>🤝 Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed. 🤝</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}