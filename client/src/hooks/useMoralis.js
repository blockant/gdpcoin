import { useState, useEffect, useCallback } from 'react'
import axios from "axios"
import { MoralisAPIKey, CoinmarketcapAPIKey } from "../constants"
import { financial } from '../utils'

const useMoralis = () => {
    const address = "0x1CE0c2827e2eF14D5C4f29a091d735A204794041"
    const [ avaxprice, setAvaxPrice ] = useState()

    const getCurrentAVAXPrice = useCallback(async () => {
            // const options = {
            //     method: 'GET',
            //     url: 'https://deep-index.moralis.io/api/v2/erc20/' + address + "/price?chain=bsc",
            //     headers: {accept: 'application/json', 'X-API-Key': MoralisAPIKey}
            // }            
            // const response = await axios.request(options)

            const response = await axios.get('https://api.coinbase.com/v2/prices/AVAX-USD/spot');
            
            if (response.status === 200) {
                const price = response.data.data.amount
                setAvaxPrice(financial(price, 2))
            } else {
                setAvaxPrice(0)
            }
    }, [ setAvaxPrice ])

    useEffect(() => {
        getCurrentAVAXPrice()
    })

    return { avaxprice }
}

export default useMoralis