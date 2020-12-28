import React from "react";
import { RegStyle } from "./Reg-styled";
import Footer from "../footer/footer";
import { Link, withRouter } from "react-router-dom";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

export class RegPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      fullName: null,
      email: null,
      address: null,
      errors: {
        fullName: "",
        email: "",
        address: "",
        contact: "",
      },
    };
    this.handleNewChange = this.handleNewChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
handleNewChange(event) {
  this.setState({value: event.target.value})
}

  handleNameChange = (e) => {
    this.setState({ fullName: e.target.value})
  };

  handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    let errors = this.state.errors;

    switch (name) {
      case "fullName":
        errors.fullName =
          value.length < 5 ? "Please Input your Full Name" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "address":
        errors.address =
          value.length < 10 ? "Please enter a detailed address!" : "";
        break;
      case "contact":
        errors.contact =
          value.length === /[a-zA-Z]/
            ? " "
            : "Please enter a valid phone number";
        break;

      default:
        break;
    }

    this.setState({ errors, [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    alert('this form was submitted:' + this.state.value)
    this.props.history.push('/home')
  };


  render() {
    const errors  = this.state;
    return (
      <div>
        <RegStyle>
        <div className="Home-div">
          <div className="Reg-div">
            <h3>
              register to start <br></br>selling on 3reen
            </h3>
          </div>
          <div className="Svg-div">
            <svg
              className="First-svg"
              viewBox="0 0 241 241"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <circle
                cx="120.5"
                cy="120.5"
                r="118"
                stroke="white"
                stroke-width="5"
                />
            </svg>
            <svg
              className="Second-div"
              viewBox="0 0 134 138"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              >
              <path
                d="M119.111 14.0695H87.9933C84.8667 6.10686 76.6778 0.34082 67 0.34082C57.3222 0.34082 49.1333 6.10686 46.0067 14.0695H14.8889C6.7 14.0695 0 20.2474 0 27.7981V123.899C0 131.45 6.7 137.627 14.8889 137.627H119.111C127.3 137.627 134 131.45 134 123.899V27.7981C134 20.2474 127.3 14.0695 119.111 14.0695ZM67 14.0695C71.0944 14.0695 74.4445 17.1584 74.4445 20.9338C74.4445 24.7092 71.0944 27.7981 67 27.7981C62.9056 27.7981 59.5556 24.7092 59.5556 20.9338C59.5556 17.1584 62.9056 14.0695 67 14.0695ZM81.8889 110.17H29.7778V96.4414H81.8889V110.17ZM104.222 82.7128H29.7778V68.9841H104.222V82.7128ZM104.222 55.2555H29.7778V41.5268H104.222V55.2555Z"
                fill="white"
                />
            </svg>
          </div>
          <div className="form-div">
            <p>
              To become a part of the 3reen Shop, <br></br>please fill out and
              submit the form below.
            </p>
            <form onSubmit={this.handleSubmit} className="div-form">
              <div className="form-divs">
                <label htmlFor="FullName">Name</label>
                <input
                  className="form-input"
                  type="text"
                  value={this.value} onChange={this.handleNewChange}
                  placeholder="FullName"
                  name="fullName"
                  required
                  />
          {this.state.errors.fullName.length < 5 &&  (
      <span className="error">{this.state.errors.fullName}</span>
      )}
              </div>
              <div className="form-divs">
                <label>Email</label>
                <input
                  className="form-input"
                  type="email"
                  onChange={this.handleChange}
                  placeholder="info@3reen.com"
                  name="email"
                  required
                  />
             {this.state.errors.email.length > 0 && (
      <span className="error">{this.state.errors.email}</span>
      )}
              </div>
              <div className="form-divs">
                <label>Address</label>
                <input
                  className="form-input"
                  type="address"
                  onChange={this.handleChange}
                  placeholder="222 niel srt.."
                  name="address"
                  required
                  />
                {this.state.errors.address.length > 0 && (
                  <span className="error">{this.state.errors.address}</span>
                  )}
              </div>
              <div className="form-divs">
                <label>Contact </label>
                <input
                  className="form-input"
                  type="tel"
                  onChange={this.handleChange}
                  placeholder="09039676776"
                  name="contact"
                  required  
                  />
                
              </div>
              <div className="Sex-div">
                <label className="form-label">Sex</label>
                <label for="Male"> Male</label>
                <input
                  className="form-input"
                  type="Checkbox"
                  onChange={this.handleChange}
                  name="Male"
                  value="Male"
                  id="Male"
                  noValidate
                  />
                  <label for="Female"> Female</label>
                <input
                  className="form-input"
                  type="Checkbox"
                  onChange={this.handleChange}
                  name="Female"
                  value="Female"
                  id="Female"
                  />
              </div>

              <div className="form-divs">
                <label>Brief Brand </label>
                <textarea className="brief-div" required></textarea>
              </div>
              <div >
                <button type="Submit" className='Button'> Register Now</button>
              </div>
            </form>
          </div>
          <Footer />
        </div>
      </RegStyle>
      </div>
    )
  };
}

export default withRouter(RegPage);
