import React from 'react';
import TagIndexItem from './tag_index_item';


class TagIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let tag_lists = this.props.tags.map( tag => {
            return (
                <TagIndexItem 
                    key={key}
                    tag={tag}
                />
            )
        })
        return (
            <div className="tags-index">
                <h3>Tags</h3>
                <div></div>
                <div>
                    {tag_lists}
                </div>
            </div>
        )
    }
}

export default TagIndex;