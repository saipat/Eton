import React from 'react';

class NotebookDropdown extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            notebooks: props.notebooks
        };
    }

    render(){
        console.log(this.state);
        let lists = this.state.notebooks.map((notebook,index) => {
            return (

                <li key={index} className="list-name"><i className="fa fa-book"></i>{notebook.name}</li>
            )
        });
        return(
                <div>
                    {lists}
                </div>
            
        );
    }
}

export default NotebookDropdown;