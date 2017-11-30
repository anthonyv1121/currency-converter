import React from "react";
import PropTypes from 'prop-types';

const InputCurrency = ({currency, id, value, name, onChangeHandler, children}) => {
    const {sign, code} = currency;
    return   <div>
                {children}
                <div className="input-group">
                    <span className="input-group-addon">{sign}</span>
                    <input type="number" value={value} className="form-control" aria-describedby={id} step="1" pattern="\d\.\d{2}"  name={name}
                    onChange ={(e) => onChangeHandler(e, e.target.getAttribute('name'))}/>
                    <span className="input-group-addon" id={id}>{code}</span>
                </div>
            </div>

       
  
}
// SelectCurrency.propTypes = {
//     currencies: PropTypes.array.isRequired,
//     onSelectCurrency: PropTypes.func.isRequired
// }

export default InputCurrency;


