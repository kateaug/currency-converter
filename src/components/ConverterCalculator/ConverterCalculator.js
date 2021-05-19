import { useState, useEffect } from 'react';
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
    const [showResults, setShowResults] = useState(false);
    const [isError, setIsError] = useState(false); 
    const [loading, setLoading] = useState(true);

    
  useEffect(() => {
   
    client.convertFrom(function (error, data) {

        if (error) { setIsError(true) };
              
        let options = [];     
        for (var key in data.to ) {
          options.push(data.to[key].quotecurrency);

        };
     
        let rates = [];
        for (var key1 in data.to ) {
          rates.push(data.to[key1].mid);
        };


        setCurrencyOptions([data.from, ...options]);
        setFromCurrency(data.from);
    
        const firstCurrency = options[0];   
        setToCurrency(firstCurrency);
        
        const firstRate = rates[0];
        setExchangeRate(firstRate);

        setLoading(false);
    });
    
    
  }, []);

  useEffect(() => {

    if (fromCurrency != null && toCurrency != null) {

        client.convertFrom(function (error, data) {
          
              if (error) { setIsError(true) };
      
              const newRate = data.to.filter(rate => rate.quotecurrency === toCurrency);
             
              const updatedRate = newRate[0]?.mid; 
              setExchangeRate(updatedRate);
  
        });
  
    }

  }, [fromCurrency, toCurrency]);
 

  function onConvertCurrency (e) {
      e.preventDefault();

      const formValid = +amount >= 0 && fromCurrency && toCurrency;
      
      if (!formValid) {
         return;
      };

      setResult(+amount * exchangeRate);  
      setShowResults(true);  

   };

 
  const onInputChange = e => {
       setAmount(e.target.value);
       setShowResults(false);
  };

  const onSelectFromCurrencyChange = e => {
        setFromCurrency(e.target.value);
        setShowResults(false);
        setAmount(0);

  };

  const onSelectToCurrencyChange = e => {
        setToCurrency(e.target.value);
        setShowResults(false);
        setAmount(0);
  };

  const converter =   
        <>
            <Rates>
            <Option>
                <span>Amount</span> 
                <Input 
                    type='number' 
                    pattern='[+-]?\d+(?:[.,]\d+)?'
                    value={amount} 
                    onChange={onInputChange} 
                />
            </Option>
            
            <Option>
                <span>From</span> 
                <CurrencySelector 
                  selectedCurrency={fromCurrency}
                  onChangeCurrency={onSelectFromCurrencyChange}
                  currencyOptions={currencyOptions}
                />
            </Option>

            <Option>
                <span>To</span> 
                <CurrencySelector 
                  selectedCurrency={toCurrency}
                  onChangeCurrency={onSelectToCurrencyChange}
                  currencyOptions={currencyOptions}
                />
            </Option>
            </Rates>

            <Conversion>
                <Button type='submit' disabled={!amount ? true : false}><strong>Convert</strong></Button>
                
                    {showResults ? (
                        <>
                        <Result>
                            <ResultEquls>  
                                <span>{parseFloat(amount)?.toFixed(2)}</span>
                                <span>{fromCurrency}</span>
                                <span>=</span>
                            </ResultEquls>
                            <ResultEquls>
                                <span><strong>{result? result.toFixed(6) : null}</strong></span>
                                <span><strong>{toCurrency ? toCurrency : null}</strong></span>
                            </ResultEquls>
                        </Result>
                        </>
                    ) : null} 
            </Conversion>
        </>

  
    return (
        <>
            {loading ? <Spinner /> : (
                <Container onSubmit={onConvertCurrency}>
                {isError ? <Error /> : converter} 
                </Container>    
            )}
        </>
    )
};

