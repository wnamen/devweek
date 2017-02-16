import React, { Component }       from "react";
import cryptico                   from "cryptico";
import getPK                      from "rsa-pem-from-mod-exp";
import axios                      from "axios";

import UserInfo                   from "../components/payment/UserInfo";
import PaymentForm                from "../components/payment/PaymentForm";

class Payment extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modulus: "",
      exponent: "",
      prefix: "",
      orderId: "",
      card: {
        number: "",
        cvv: "234",
        expMonth: "",
        expYear: "",
        zip: ""
      },
      user: {
        cellphone: "",
        payment: 1000,
        begin_day: "",
        begin_month: "",
        exp_month: "",
        exp_year: ""
      }
    }
    this.handleEncryption = this.handleEncryption.bind(this);
    this.handleCardChanges = this.handleCardChanges.bind(this);
    this.handleUserChanges = this.handleUserChanges.bind(this);
    this.handleSetUp = this.handleSetUp.bind(this);
  }

  componentDidMount = () => {
    let orderData = {
      "state": "open",
      "total": 1000
    }

    axios.post('https://apisandbox.dev.clover.com/v3/merchants/SNRBNE29W2JEC/orders?access_token=e6acce96-0242-7cfe-39e0-02d47c424296', orderData)
      .then(response => this.setState({orderId: response.data.id}))
      .catch(error => console.log(error))

    axios.get('https://sandbox.dev.clover.com/v2/merchant/SNRBNE29W2JEC/pay/key?access_token=e6acce96-0242-7cfe-39e0-02d47c424296')
      .then(response => this.setState({modulus:response.data.modulus, exponent:response.data.exponent, prefix:response.data.prefix}))
      .catch(error => console.log(error));
  }

  handleEncryption = (response) => {
    let modulus = this.state.modulus;
    let exponent = this.state.exponent;
    let prefix = this.state.prefix;
    let card = this.state.card.number;

    let key = getPK(modulus, exponent);
    console.log(key);

    let encryptionInfo = {
      key: key,
      prefix: prefix,
      card: card
    }

    axios.get('/api/encryption/test', encryptionInfo)
      .then(response => this.handleSetUp(response))
      .catch(error => console.log(error))
  }

  handleCardChanges = (card) => {
    this.setState(card)
  }

  handleUserChanges = (user) => {
    this.setState(user)
  }

  handleSetUp = (encryptedCard) => {

    let cloverData = {
      "orderId": this.state.orderId,
      "taxAmount": 0,
      "zip": this.state.card.zip,
      "expMonth": this.state.card.expMonth,
      "cvv": this.state.card.cvv,
      "amount": this.state.user.payment,
      "currency": "usd",
      "last4": "1111",
      "expYear": this.state.card.expYear,
      "first6": "411111",
      "cardEncrypted": `${encryptedCard}`
    }

    axios.post('https://sandbox.dev.clover.com/v2/merchant/SNRBNE29W2JEC/pay?access_token=e6acce96-0242-7cfe-39e0-02d47c424296', cloverData)
      .then(response => this.confirmWithUser(response))
      .catch(error => console.log(error))
  }

  confirmWithUser = (response) => {
    let message = {
      to: "17632760478",
      from: "19044067216",
      body: "Your auto-payment has been set up!"
    }

    axios.post('https://api.flowroute.com/v2/messages', message)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  render = () => {
    console.log(this.state);

    return (
      <div class="gray-light-background">
        <div style={{"margin-top":"5em", "padding-top":"3em", "height":"55vh"}} class="sixteen inline-block electric-blue-light-background ">
          <UserInfo handleUserChanges={this.handleUserChanges} userInfo={this.state.user}/>
          <PaymentForm handleCardChanges={this.handleCardChanges} paymentInfo={this.state.card}/>
          <div class="lgnBtn settingsBtn smoothBkgd electric-blue-background white cardSave" onClick={this.handleEncryption}>Create Auto-Payment</div>
        </div>
      </div>
    )
  }
};

export default Payment;
