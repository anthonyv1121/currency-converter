import React from "react";
import PropTypes from 'prop-types';

const SelectCurrency = ({currencies, onSelectCurrency}) => {
  
    const filteredCurrencies = currencies.filter(c => c.code !== 'USD');

    return <select onChange ={(e) => onSelectCurrency(e.target.value)}>
        {
            filteredCurrencies.map(c => {
                const {code, name} = c;
                return <option key={code} value={code}>{name}</option>
            })
        }
    </select>
}
SelectCurrency.propTypes = {
    currencies: PropTypes.array.isRequired,
    onSelectCurrency: PropTypes.func.isRequired
}

export default SelectCurrency;


