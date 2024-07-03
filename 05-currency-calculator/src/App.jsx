import React, { useEffect, useState } from 'react'
import InputBox from './components/InputBox';

function App() {
 const [currencies,setCurrencies] = useState("PKR")
 const [base_currency,setBase_currency] = useState("USD")
 const [CurrencyCodes, setCurrencyCodes] = useState("USD")




    const url = `https://api.currencyapi.com/v3/latest?apikey=cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o&currencies=${currencies}&base_currency=${base_currency}`;
    const fetchData = async () => {
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          // Handle the data (e.g., update state, display exchange rates, etc.)
          console.log(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
      fetchData();



      useEffect(() => {
        const apiCall = async () => {
          const api_url = "https://api.currencyapi.com/v3/latest";
          const api_key = "cur_live_ockIu3QKolfOneefIcJQ7EuV4X1r34PNDogVz56o";
          
    
          try {
            const response = await fetch(`${api_url}?apikey=${api_key}&currencies`);
            if (response.ok) {
              const data = await response.json();
              const codes = Object.values(data.data).map(currency => currency.code);
              setCurrencyCodes(codes);
            } else {
              console.error(`Failed to retrieve data: ${response.status}`);
            }
          } catch (error) {
            console.error(`Error: ${error}`);
          }
        };
    
        apiCall();
      }, []);
    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-gradient-to-r from-slate-900 to-slate-700"
            
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                           
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                currency={CurrencyCodes}
                                
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                currency={base_currency}
                                
                            />
                        </div>
                        <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );

}

export default App
