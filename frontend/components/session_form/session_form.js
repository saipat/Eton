import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
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
        //  const user = Object.assign({}, this.state);
         this.props.processForm(this.state);
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="form-css">
                    <h1>Hello!</h1>
                    Please {this.props.formType} or {this.props.navLink}
                    {/* {this.props.errors} */}
                    <label>
                        Email:
                        <input type="text" value={this.state.email} onChange={this.update("email")}/>
                    </label>
                    <br />
                    <br />
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }


}

export default SessionForm;