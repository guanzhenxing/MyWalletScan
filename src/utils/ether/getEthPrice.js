import axios from "axios";

const getEthPrice = async () => {
    try {
        const options = {
            method: 'GET',
            url: 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD',
        }
        let response = await axios.request(options)
        return response.data['ethereum']['usd']
    } catch (e) {
        console.log(e)
        return "/"
    }

}


export default getEthPrice
