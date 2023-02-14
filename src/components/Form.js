import React from "react";

class Form extends React.Component {
  state = {
    firtName: "",
    email: "",
  };

  //Fonction pour le input
  handelChange = (event) => {
    // console.log(event.target.value)
    // this.setState({ firtName: event.target.value });
    this.setState({ [event.target.name]: event.target.value });
  };

  //   handelChangeEmail = (event) => {
  //     // console.log(event.target.value)
  //     this.setState({ email: event.target.value });
  //   };
l
  render() {
    console.log(this.state);
    return (
      <div>
        Name: {this.state.firtName} & email: {this.state.email}
        <p>
          <input name="firtName" type="text" onChange={this.handelChange} />
        </p>
        <p>
          <input name="email" type="email" onChange={this.handelChange} />
        </p>
      </div>
    );
  }
}

export default Form;
