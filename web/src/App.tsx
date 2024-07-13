import { useAccount, useConnect, useDisconnect, useBalance } from 'wagmi'
import { BookTrip1 } from './book-trip1'
import { BookTrip2 } from './book-trip2'
import { PublishDriversLocation } from './publish-drivers-location'
import { CompleteTrip } from './complete-trip'

function App() {
  const account = useAccount()
  const { connectors, connect, status, error } = useConnect()
  const { disconnect } = useDisconnect()
  
  return (
    <div>
    <>
      <div>
        <div>
          status: {account.status}
          <br />
          addresses: {JSON.stringify(account.addresses)}
          <br />
          chainId: {account.chainId}
        </div>

        {account.status === 'connected' && (
          <button type="button" onClick={() => disconnect()}>
            Disconnect
          </button>
        )}
      </div>

      <div>
        {connectors.map((connector) => (
          <button
            key={connector.uid}
            onClick={() => connect({ connector })}
            type="button"
          >
            {connector.name}
          </button>
        ))} {status} | {error?.message}
      </div>
    </>
    <a href="https://stylus-testnet-explorer.arbitrum.io/address/0x54FE1cdcC7124AeAcaadbd52889c848e78F1B720">0x54FE1cdcC7124AeAcaadbd52889c848e78F1B720</a>
    <hr></hr>
    <PublishDriversLocation />
    <hr></hr>
    <BookTrip1 />
    <BookTrip2 />
    <hr></hr>
    <CompleteTrip />
    </div>
  )
}

export default App
