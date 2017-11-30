import React from 'react';
import image from '../images/cash-calculator.svg'
import data from './data/Data';
import SelectCurrency from './components/SelectCurrency';
import InputCurrency from './components/InputCurrency';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      currencies: data.currencies,
      currencyA: data.currencies[0],
      currencyB: data.currencies[1],
      currencyAval: data.currencies[0].sellRate,
      currencyBval: data.currencies[1].sellRate,
    }
    this.onSelectCurrency = this.onSelectCurrency.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  onSelectCurrency(code){
   // console.log(`onSelectCurrency ${code}`);
   const {currencies, currencyAval} = this.state;
    const currency = currencies.filter(currency => currency.code === code);
    this.setState({
      currencyB: currency[0],
      currencyBval: currency[0].sellRate * currencyAval
    })
  }
  onChangeHandler(e, inputName){
    const {currencyA, currencyB} = this.state;
    if(inputName === 'A'){
      const newAValue = e.target.value;
      this.setState({
        currencyAval: newAValue,
        currencyBval: newAValue * currencyB.sellRate
      })
    }
   else{
      const newBValue = e.target.value;
      this.setState({
        currencyAval: newBValue / currencyB.sellRate,
        currencyBval: newBValue
      })
    }
    console.log(inputName);
    
  }
  render(){
    const  {currencies, currencyA, currencyB, currencyAval, currencyBval} = this.state;
    return (
      <div>
        <header>
          <img src={image} />
          <h1>Currency Converter</h1>
        </header>
        <div className="content">
          <div className="row row-select-currency">
            <div className="col-md-6 col-md-offset-3">
              <h2>Select Currency</h2>
              <p>
                {
                  //Select currency
                }
               <SelectCurrency currencies = {currencies} onSelectCurrency = {this.onSelectCurrency}/>

              </p>
            </div>
          </div>
          
          <div className="row">
            <div className="col-sm-6 currency-from-input">
              <InputCurrency currency={currencyA} id='basic-addon2' value={currencyAval} name="A" onChangeHandler={this.onChangeHandler}>
              <h3 className={"currency-flag " + currencyA.code}>{currencyA.name}</h3>
              </InputCurrency>
             </div>
            
            <div className="col-sm-6 currency-to-input">
              <InputCurrency currency={currencyB} id='basic-addon3' value={currencyBval} name="B" onChangeHandler={this.onChangeHandler}>
              <h3 className={"currency-flag " + currencyB.code}>{currencyB.name}</h3>
              </InputCurrency>
            </div>
          </div>

          <div className="row">
            <div className="col-sm-12">
              {
                  //Update to currently selected currency
              }
              <p>
                Exchange Rate {`${currencyA.sign} ${currencyA.sellRate} ${currencyA.code}`} = 
                {`${currencyB.sign} ${currencyB.sellRate} ${currencyB.code}`}
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;