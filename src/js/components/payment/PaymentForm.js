import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import $ from "jquery";

class PaymentForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    let card = this.props.card;
    card[e.target.name] = parseInt(e.target.value);
    this.props.handleCardChanges(card);
	}

  render(){

    return(
      <div class="offset-by-two four columns text-center">
        <form id="billingModalForm">
          <Input id="cardNumberField" type="text" name="number" placeholder="Credit Card Number" onChange={this.handleChange}/>
          <div class="billingDates sixteen">
            <Input id="cardMonthField" type="text" name="expMonth" placeholder="Exp. Month" class="eight columns" onChange={this.handleChange}/>
            <Input id="cardYearField" type="text" name="expYear" placeholder="Exp. Year" class="eight columns" onChange={this.handleChange}/>
          </div>
          <div class="billingDates sixteen">
            <Input id="cardZipCodeField" type="text" name="zip" placeholder="Zip Code" class="eight columns" onChange={this.handleChange}/>
            <Input id="cardCVCField" type="text" name="cvv" placeholder="CVV" class="eight columns" onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default PaymentForm
