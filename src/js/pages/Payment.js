import React, { Component }       from "react";
import cryptico                   from "cryptico";
import getPK                      from "rsa-pem-from-mod-exp";
import axios                      from "axios";

import UserInfo                   from "../components/payment/UserInfo";
import PaymentForm                from "../components/payment/PaymentForm";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.handleEncryption = this.handleEncryption.bind(this);
  }

  componentDidMount = () => {
    axios.get('https://sandbox.dev.clover.com/v2/merchant/SNRBNE29W2JEC/pay/key?access_token=e6acce96-0242-7cfe-39e0-02d47c424296')
      .then(response => this.handleEncryption(response))
      .catch(error => console.log(error));
  }

  handleEncryption = (response) => {
    console.log(response.data);
    let modulus = response.data.modulus;
    let exponent = response.data.exponent;
    console.log(modulus);
    console.log(exponent);
    let key = getPK(response.data.modulus, response.data.exponent);
    console.log(key);

    this.setState({
      key: key,
    })
  }

  render = () => {

    return (
      <div class="gray-light-background">
        <div class="sixteen inline-block">
          <UserInfo />
          <PaymentForm />
        </div>
      </div>
    )
  }
};

export default Payment;
