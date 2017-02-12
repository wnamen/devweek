import React, { Component } from "react";
import { Input } from "react-materialize";
import $ from "jquery";

// IMPORT OTHER COMPONENTS AND DEPENDENCIES HERE

export default class Customizer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // COMPONENT STATE DECLARTION HERE
    }
  }
  //LOGIC HERE: CHECK OUT COMPONENT MOUNTING IF YOU WANT TO TRY IT OUT

  render(){
    //RENDER LOGIC HERE
    let data = [
      {
        keyword: "total",
        value: "$300.00"
      },
      {
        keyword: "total",
        value: "$300.00"
      },
      {
        keyword: "total",
        value: "$300.00"
      },
      {
        keyword: "minimum payment due",
        value: "$10.00"
      }
    ]
    let mappedKeywords;

    if (data !==undefined) {
      mappedKeywords = data.map((pair, index) => {
        return (
          <div class="custom-fields" key={index}>
            <Input value={pair.keyword}/>
            <Input value={pair.value} />
          </div>
        )
      })
    }

    return(
      <div class="text-center fpng">
        { mappedKeywords }
      </div>
    )
  }
}
