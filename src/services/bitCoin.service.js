import { storageService } from '../services/storage.service.js'
import axios from 'axios'

export const bitCoinService = {
    getRate,
    getMarketPrice,
    getConfirmedTransactions

}


async function getRate(coins = 1) {
    const url = `https://blockchain.info/tobtc?currency=USD&value=1`
    let bitcoinRate = storageService.load('BITCOIN_KEY')
    if (!bitcoinRate) {
        bitcoinRate = await axios.get(url)
            .then(({ data }) => {
                console.log(data)
                bitcoinRate = data
                storageService.store('BITCOIN_KEY', bitcoinRate)
            })
            .catch(err => console.error(err))
    }

    return Promise.resolve(bitcoinRate * coins)

}


//         .then(({ data }) => {
//             let results = data.query.search.slice(0, 3)
//             results = results.map(result => ({
//                 title: result.title,
//                 desc: result.snippet,
//             }))
//             return results
//         })
//         .then(results => {
//             gWikiCache[keyword] = results
//             saveToStorage(WIKI_KEY, gWikiCache)
//             return results
//         })
//         .catch(err => console.error(err))
// }





function getMarketPrice() {

}

function getConfirmedTransactions() {

}

