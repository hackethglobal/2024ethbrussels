import * as React from 'react'
import { 
  type BaseError, 
  useWaitForTransactionReceipt, 
  useWriteContract 
} from 'wagmi'
import { abi } from './abi.ts'
import { Wallet } from 'ethers'
import { parseEther } from 'viem'
import { config } from './wagmi.ts'
import { GeocabAddress } from './addresses.ts'

 
export function PublishDriversLocation() {
  const { 
    data: hash,
    error,   
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    const result = await writeContract({
      address: GeocabAddress,
      abi,
      functionName: 'publishDriverLocations',
      // args: [[
      //   {driver: GeocabAddress, 
      //   lat: BigInt(940783947759187132416), 
      //   lon: BigInt(0)} 
      // ]], 
      args: [publishDriversLocation],
    })
  } 

  const { isLoading: isConfirming, isSuccess: isConfirmed } = 
    useWaitForTransactionReceipt({ 
      hash, 
    }) 

  return (
    <form onSubmit={submit}>
      <button 
        disabled={isPending} 
        type="submit"
      >
        {isPending ? 'Confirming...' : 'Populate Drivers Location'} 
      </button>
      {hash && <div>🚕 Transaction Hash: {hash}</div>}
      {isConfirming && <div>Waiting for confirmation...</div>} 
      {isConfirmed && <div>Transaction confirmed. 🚕</div>} 
      {error && ( 
        <div>Error: {(error as BaseError).shortMessage || error.message}</div> 
      )} 
    </form>
  )
}


const MULT = 2 ** 64;

function getRandomInt(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

function calculateDriversLocation() {
  // wagmi.publishDriversLocation();
  // array of 3 elements
  const locations: any = [];
  
  for (let i = 0; i < 450; i++) {
    // London boundig box
    // 51.60626753931472, -0.27914068790075364
    // 51.37505908567797, 0.18703222847858303
    //const wallet = Wallet.createRandom();

    const lat = getRandomInt(51.37505908567797, 51.60626753931472);
    const lon = getRandomInt(-0.27914068790075364, 0.18703222847858303);
    // locations.push({
    //   lat: lat * MULT,
    //   lon: lon * MULT,
    //   address: wallet.address,
    // });

    // TODO: generate addresses for drivers
    locations.push([GeocabAddress, lat * MULT, lon * MULT]);

    // console.log(`lat: ${lat}, lon: ${lon}, address: ${wallet.address}`);
  }
  const wallet = Wallet.createRandom();
  locations.push([wallet.address, BigInt(940783947759187132416), BigInt(0)]);

  console.log(locations);
  // get contract

  return locations;
}

const publishDriversLocation = calculateDriversLocation();
