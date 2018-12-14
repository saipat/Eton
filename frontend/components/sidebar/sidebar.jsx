import React from 'react';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: this.props.currentUser,
            logout: this.props.logout
        };
    }

    componentDidMount() {
        this.props.fetchNotebooks();
    }



    render() {
        if (this.props.notebooks === undefined) {
            return null;
        }
        let notebooks = Object.values(this.props.notebooks);
        return (
            <div className="sidebar">
                <h3>{this.state.currentUser.email}</h3>
            </div>
        )
    }

}

export default Sidebar;
