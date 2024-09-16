import "./Popup.css";
import { prove } from 'tlsn-js';

export default function() {
  return (
    <div>
        <button onClick={() => {
          prove('https://rickandmortyapi.com/api/character/2', {
            method: 'GET',
            websocketProxyUrl: 'wss://notary.pse.dev/proxy?token=rickandmortyapi.com',
            notaryUrl: 'https://notary.pse.dev/v0.1.0-alpha.5/', 
          }
          )}}>
          prove swapi
        </button>
    </div>
  )
}
