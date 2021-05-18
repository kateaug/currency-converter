import { useState, useEffect, useMemo } from 'react';
import { Container, Rates, Option, Conversion, Input, Button, Result, ResultEquls } from './styles';
import { Spinner } from '../Spinner/Spinner';
import { CurrencySelector } from '../CurrencySelector/CurrencySelector';
import { Error } from '../Error/Error';
import { client } from '../../client';


export const Converter = () => {
    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState('');
    const [toCurrency, setToCurrency] = useState('');
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState(0);
    const [isError, setIsError] = useState(true);
    
    const [loading, setLoading] = useState(true);

    
  useEffect(() => {
    ///remove this !!
    setLoading(false)

    // client.convertFrom(function (error, data) {
    //  console.log(data);
        
        
    //     let options = [];
    //     let rates = [];     
    //     for (var key in data.to ) {
    //      // console.log(data.to[key])
    //       options.push(data.to[key].quotecurrency);

    //       //options.push(data.to[key].quotecurrency);


    //     }

    //     let allrates = [];

    //     for (var key in data.to ) {
    //       rates.push(data.to[key].mid);
    //     //  console.log(rates)
    //     //   for (var key1 in data.to[key]) {
    //     //       console.log(data.to[key])
    //     //   }
    //     }

    
    //     const firstCurrency = options[0];
    //     console.log('first curr', firstCurrency);

    //     setCurrencyOptions([data.from, ...options]);
    //     //console.log([data.from, ...options])

    //     setFromCurrency(data.from)
    //     setToCurrency(firstCurrency)
        
    //     const firstRate = rates[0];
    //     console.log('exchange rate', rates[0]);

    //     setExchangeRate(firstRate);

    //     setLoading(false);
    // });
    
    
  }, [])
  

  useEffect(() => {

    if (fromCurrency != null && toCurrency != null) {
      // client.convertFrom(function(err, data){

      //   const newRate = data.to.filter(rate => rate.quotecurrency === toCurrency);
      //   console.log('new rate', newRate);
      //   const updatedRate = newRate[0]?.mid; 

       
      //   console.log('effect', updatedRate);
      //   setExchangeRate(updatedRate)
       
      //   //setExchangeRate(data.rates[toCurrency])
      //   console.log('effect', fromCurrency);
      //   console.log('effect', toCurrency);
      //   //console.log('effect rate', allrates[toCurrency]);

      // });

  }

  }, [fromCurrency, toCurrency]);
 

  async function onConvertCurrency (e) {
      e.preventDefault();

      const formValid = +amount >= 0 && fromCurrency && toCurrency;
      if (!formValid) {
         return;
      }

      console.log('click')

      setResult(+amount * exchangeRate);
      
  }


  const converter =   
            <>
            <Rates>
            <Option>
                <span>Amount</span> 
                <Input 
                    type='number' 
                    pattern='[+-]?\d+(?:[.,]\d+)?'
                    value={amount} 
                    onChange={(e) => setAmount(e.target.value)} 
                />
            </Option>
            
            <Option>
                <span>From</span> 
                <CurrencySelector 
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={e => setFromCurrency(e.target.value)}
                  currencyOptions={currencyOptions}
                />
            </Option>

            <Option>
                <span>To</span> 
                <CurrencySelector 
                  selectedCurrency={toCurrency}
                  onChangeCurrency={e => setToCurrency(e.target.value)}
                  currencyOptions={currencyOptions}
                />
            </Option>
          </Rates>

          <Conversion>
            <Button type='submit' disabled={!amount ? true : false}><strong>Convert</strong></Button>
                    <Result>
                        <ResultEquls>  
                            <span>33,00</span>
                            <span>PLN</span>
                            <span>=</span>
                        </ResultEquls>
                        <ResultEquls>
                            <span><strong>33,0000000</strong></span>
                            <span><strong>Plnnn</strong></span>
                        </ResultEquls>
                    </Result>
                
            
                {/* { result ? (
                    <>
                    <Result>
                        <ResultEquls>  
                            <span>{parseFloat(amount)?.toFixed(2)}</span>
                            <span>{fromCurrency}</span>
                            <span>=</span>
                        </ResultEquls>
                        <ResultEquls>
                            <span><strong>{result? result.toFixed(8) : null }</strong></span>
                            <span><strong>{toCurrency ? toCurrency : null }</strong></span>
                        </ResultEquls>
                    </Result>
                    </>
                    ) : null   
                }  */}

          </Conversion>
        </>

  
  return (
    <>
    { loading ? <Spinner /> : (
        <Container onSubmit={onConvertCurrency}>
           { isError ? <Error /> : converter } 
        </Container>    
    )}
   </>
)
};

