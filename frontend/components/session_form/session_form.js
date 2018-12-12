import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            erros: []
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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

     /* Please {this.props.formType} or {this.props.navLink} */ 
    // < img src = "/assets/eton_logo.png"
    // alt = "eton_logo"
    // className = "eton-logo" / >
    render(){
        return (
            <div className="session-form">
                <div className="create-user">
                    
                     < img src = "/assets/eton_logo.png"
                     alt = "eton_logo"
                     className = "eton-logo-form" / >
                     <h1>Eton</h1>
                    < h3 className = "tag-line" > We help you remember < /h3>
                    < button className = "demo-user-btn" onClick = {this.props.demoUserLogin}>
                         <span>Continue with demo user</span>
                    </button>
                </div>

                <p className="middle-or">or</p>

                <form onSubmit={this.handleSubmit} className="form-css">
                    <input type="text" value={this.state.email} onChange={this.update("email")} placeholder="email" className="user-inputs"/>
                    <br />
                    <input type="password" value={this.state.password} onChange={this.update("password")} placeholder="password" className="user-inputs"/>
                    <br />
                    <br />
                    <input type="submit" value={this.props.formType} className="demo-user-btn" id="form-type"/>
                </form>

                < p className = "sign-message" > By creating an account, you are agreeing to our <span> Terms of Service </span> and <span>Privacy Policy</span >.</p>
            </div>
        )
    }


}

export default SessionForm;