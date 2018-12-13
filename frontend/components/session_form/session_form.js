import React from 'react';
import { Link } from 'react-router-dom';
import { log } from 'util';

class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            page: this.props.location.pathname
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.demoUser = this.demoUser.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
         e.preventDefault();
         this.props.processForm(this.state);
    }

    demoUser(){
        const user = {
            email: 'demouser11@email',
            password: '123456'
        };
       
        this.props.demo(user);
    }

    renderErrors() {
    return(
      <ul className="render-errors">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );

  }

  componentWillUnmount () {
      this.props.clearAllErrors();
  }
 
    render(){
        let display;
        
        
        if (this.props.formType === 'Log In') {
            display = <p><span className = "span1">Don't have an account?</span><br /><Link to="/signup" className="span-link">Create Account</Link></p>

        }else{
            display = <p><span className = "span1">Already have an account ?< /span><br /><Link to="/login" className="span-link">Sign In</Link></p>
        }

        return (
            <div className="wrapper">
                < img src = "/assets/eton_fw_back.png"
                alt = "eton_background"
                className = "eton_background" / >
                <div className="session-form">
                <div className="create-user">
                     < img src = "/assets/eton_logo.png"
                     alt = "eton_logo"
                     className = "eton-logo-form" / >
                     <h1>Eton</h1>
                    <h3 className = "tag-line" > We help you remember < /h3>
                        < button className="demo-user-btn" onClick={this.demoUser}>
                            <span>Continue with demo user</span>
                        </button>
                </div>

                <p className="middle-or">or</p>

                <form onSubmit={this.handleSubmit} className="form-css">
                    <input type="email" value={this.state.email} onChange={this.update("email")} placeholder="email" className="user-inputs"/>
                    <br />
                    <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="password" className="user-inputs second"/>
                    <br />
                    <br />
                     {this.renderErrors()}
                    <input type="submit" value={this.props.formType} className="demo-user-btn" id="form-type"/>
                </form>

                < p className = "sign-message" > By creating an account, you are agreeing to our <span> Terms of Service </span> and <span>Privacy Policy</span >.</p>
                {display}
            </div>
            </div>
        )
    }


}

export default SessionForm;