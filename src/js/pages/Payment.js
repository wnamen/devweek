import React, { Component }       from "react";

import UserInfo                     from "../components/payment/UserInfo"
import PaymentForm                     from "../components/payment/PaymentForm"

const Payment = () => {

  return (
    <div class="gray-light-background">
      <div class="sixteen inline-block">
        <UserInfo />
        <PaymentForm />
      </div>
    </div>

  );
};

export default Payment;
