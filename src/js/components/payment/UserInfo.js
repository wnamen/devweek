import React, { Component } from "react";
import { Button, Input } from "react-materialize";
import $ from "jquery";

// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class UserInfo extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    let user = this.props.user;
    user[e.target.name] = parseInt(e.target.value);
    this.props.handleUserChanges(user);
	}

  render(){
    //RENDER LOGIC HERE

    return(
      <div class="offset-by-two four columns">
        <form id="billingModalForm">
          <Input id="cellphoneField" type="text" name="cellphone" placeholder="Cell Phone Number" onChange={this.handleChange}/>
          <Input id="paymentAmountField" type="text" name="payment" placeholder="Payment Amount" onChange={this.handleChange}/>
          <div class="billingDates sixteen">
            <Input id="paymentDayField" type="text" name="begin_day" placeholder="Day" class="eight" onChange={this.handleChange}/>
            <Input id="paymentMonthField" type="text" name="begin_month" placeholder="Month" class="eight" onChange={this.handleChange}/>
          </div>
          <div class="billingDates sixteen">
            <Input id="paymentEndMonthField" type="text" name="exp_month" placeholder="Exp. Month" class="eight" onChange={this.handleChange}/>
            <Input id="paymentEndYearField" type="text" name="exp_year" placeholder="Exp. Year" class="eight" onChange={this.handleChange}/>
          </div>
        </form>
      </div>
    )
  }
}
