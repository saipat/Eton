import React from 'react';
import TagIndexItem from './tag_index_item';


class TagIndex extends React.Component {
    constructor(props) {
        super(props);
        this.organizeTags = this.organizeTags.bind(this);
    }

    componentDidMount(){
        this.props.fetchTags();
    }

    organizeTags(obj, letter){
        let indexItem = obj[letter].map(tag => {
            return <TagIndexItem
                key={tag.id}
                tag={tag}
                deleteTag={this.props.deleteTag}
                fetchCurrentTag={this.props.fetchCurrentTag}
                props={this.props}
            />
        });
        return indexItem;
    }

    render() {

        let obj = {};
        let collection = [];
        this.props.tags.forEach( tag => {
            let firstLetter = tag.tag_name.slice(0, 1).toLowerCase();
            if(!collection[firstLetter]){
                obj[firstLetter] = [tag];
                collection.push(firstLetter);
            } else {
                obj[firstLetter].push(tag);
            }
        });

        let tag_lists = collection.sort().map( letter => {
            return <div className="tags-item">
                        <h2 className="tag-letter">{letter.toUpperCase()}</h2>
                        <div>
                            {this.organizeTags(obj, letter)}
                        </div>
                </div>
            
        });

        return (
            <div className="tags-index">
                <h3>Tags</h3>
                <div></div>
                <div className="tags_lists">
                    {tag_lists}
                </div>
            </div>
        )
    }
}

export default TagIndex;