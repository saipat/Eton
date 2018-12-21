import React from 'react';
import tagReducer from '../../reducers/tag_reducer';
import  { Link } from 'react-router-dom';

class TagIndexItem extends React.Component{
    constructor(props){
        super(props);

        // this.groupTags = this.groupTags.bind(this);
    }

    // groupTags(){
    //     // let fLetter = this.props.tag.tag_name.slice(0, 1).toUpperCase();
    //     // let obj = {};
    //     // let obj[fLetter] = [];
    //     // fLetter.push();
    //     // return fLetter;
    // }

    render(){
        return (
            <div className="tags-item">
                <h2 className="tag-letter">{this.props.tag.tag_name.slice(0,1).toUpperCase()}</h2>
                <div className="tag-links">
                    <Link to="/notes" className="tag-name">{this.props.tag.tag_name}</Link>
                    <button className="tag-trash" onClick={() => this.props.deleteTag(this.props.tag.id)}><i className="fa fa-trash-o"></i></button>
                </div>
                
            </div>
        )
    }
}

export default TagIndexItem;