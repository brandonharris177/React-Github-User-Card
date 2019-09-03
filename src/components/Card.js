import React from 'react';
import {Card} from 'semantic-ui-react';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        // console.log(this.props.propsToCard.name)
        return (
            <>
            <Card>
                <div className = "image">
                    <img src = {this.props.propsToCard.avatar_url} alt = {`a picture of ${this.props.propsToCard.name}`} />
                </div>
                <div className = "content">
                    <div className="header">{this.props.propsToCard.name}</div>
                    <div>{this.props.propsToCard.login}</div>
                    <div>{this.props.propsToCard.url}</div>
                    <div className = "description">{this.props.propsToCard.bio}</div>
                    <div className = "extra content">
                        <i className= "user icon"></i>
                        <span>{this.props.propsToCard.followers}</span>
                        <i className= "user icon"></i>
                        <span>{this.props.propsToCard.following}</span>
                        <span className = "right floated">{this.props.propsToCard.location}</span>
                    </div>
                </div>
            </Card>
            </>
        )
    }
}

export default CreateCard