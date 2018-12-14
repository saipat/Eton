import React from 'react';

class Notebook extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            currentUser: this.props.currentUser
        };

        
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }

    render(){
        return (
            "Working????"
        );
    }
}

export default Notebook;

