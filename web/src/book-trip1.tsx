import * as React from 'react'
import { 
  type BaseError, 
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import { abi } from './abi.ts'
import { readContract } from '@wagmi/core'
import { config } from './wagmi.ts'
import { GeocabAddress } from './addresses.ts'

export function BookTrip1() {
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
    // const result = await readContract(config, {
    //   abi,
    //   address: GeocabAddress,
    //   functionName: 'number',
    // })
    // console.log({ result });
    const result = await readContract(config, {
      abi,
      address: GeocabAddress,
      functionName: 'estimateTrip',
      args: [
            {lat: BigInt(940783947759187132416), lon: BigInt(0)}, 
            {lat: BigInt(940783947759187132416), lon: BigInt(0)}
          ], 
    })
    console.log("Price:" , result , "gwei");
    
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <div><div>
          FromLat:<input name="fromLat" placeholder="940783947759187132415" defaultValue="940783947759187132415" required />
          FromLon:<input name="fromLon" placeholder="0" defaultValue="0" required />
      </div>
      <div>
        ToLat:<input name="toLat" placeholder="940783947759187132416" defaultValue="940783947759187132416" required />
        ToLon:<input name="toLon" placeholder="0" defaultValue="0" required />
        </div>
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Get trip price'} 
      </button>
      </div>
      <hr></hr>
      {hash && <div>💰 Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed. 💰</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}