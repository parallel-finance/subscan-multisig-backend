import './LoadEnv' // Must be the first import
import app from './Server'
import logger from './shared/Logger'
import { runCrawlers } from './crawler/getPolkadotData'
import { ENDPOINTS_MAP } from './types/networks'
import { WsProvider } from '@polkadot/api'
import { config } from 'dotenv'
import monk from 'monk'

config()

const db =  monk(String(process.env.MONGODB_URI))

db.then(() => {
  console.log('Connected correctly to server')
})

export const storage = db.get('multisig_calls')

const polkadot = ENDPOINTS_MAP.polkadot
const kusama = ENDPOINTS_MAP.kusama

// Start Crawlers here
runCrawlers((new WsProvider(polkadot.wss)), polkadot.types, storage)
runCrawlers((new WsProvider(kusama.wss)), kusama.types, storage)

// Start the server
const port = Number(process.env.PORT || 9000)
app.listen(port, () => {
  logger.info('Express server started on port: ' + port)
})
