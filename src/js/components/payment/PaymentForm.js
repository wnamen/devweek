import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import $ from "jquery";

class PaymentForm extends React.Component {

  render(){

    return(
      <div class="offset-by-two four columns text-center">
        <form id="billingModalForm">
          <Input id="cardNumberField" type="text" name="number" placeholder="Credit Card Number" onChange={this.handleChange}/>
          <div class="billingDates sixteen">
            <Input id="cardMonthField" type="text" name="exp_month" placeholder="Exp. Month" class="eight columns" onChange={this.handleChange}/>
            <Input id="cardYearField" type="text" name="exp_year" placeholder="Exp. Year" class="eight columns" onChange={this.handleChange}/>
          </div>
          <div class="billingDates sixteen">
            <Input id="cardZipCodeField" type="text" name="zip_code" placeholder="Zip Code" class="eight columns" onChange={this.handleChange}/>
            <Input id="cardCVCField" type="text" name="cvc" placeholder="CVC" class="eight columns" onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}

export default PaymentForm
