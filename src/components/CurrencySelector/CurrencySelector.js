import { Select } from './styles';


export const CurrencySelector = ({ selectedCurrency,onChangeCurrency, currencyOptions }) => {
    return (
      <Select>
        <select   
          value={selectedCurrency} 
          onChange={onChangeCurrency}>
            {currencyOptions.map((option, name) => (
               <option key={name} value={option}>{option}</option>
            ))}
        </select>
        <span/>
      </Select>
    )

};