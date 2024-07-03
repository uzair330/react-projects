// // currencyFetcher.js
// import currencyapi from '@everapi/currencyapi-js'

// function useCurrency(currencies,base_currency) {
//     // const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=PKR&base_currency=USD`

//     const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=${currencies}&base_currency=${base_currency}`


//     fetch(url)
//     .then((res)=>res.json())
//     // .then((res)=>res.data[currencies].value)
// // console.log(res);


    
// }

// export default useCurrency


// currencyFetcher.js
// import currencyapi from '@everapi/currencyapi-js';

// async function useCurrency(currencies, base_currency) {
//   try {
//     const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=${currencies}&base_currency=${base_currency}`;

//     const response = await fetch(url);
//     const data = await response.json();

//     // Handle the data as needed (e.g., store it in state or log it)
//     console.log(data);

//     // Return the relevant data if required
//     return data;
//   } catch (error) {
//     console.error('Error fetching currency data:', error);
//     // Handle the error (e.g., show an error message)
//   }
// }

// export default useCurrency;


import {useEffect, useState} from "react"


function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        // const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=${currencies}&base_currency=${base_currency}
        fetch(`https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=${currency}`)
        // .then((res) => res.json())
        .then((res) => setData(res[currency].value))
        console.log("This data",data);
    }, [currency])
    console.log(data);
    return data
}

export default useCurrencyInfo;