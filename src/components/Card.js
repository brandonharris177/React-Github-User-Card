import React from 'react';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsToCard.name)
        return (
            <>
                <h2>{this.props.propsToCard.name}</h2>
                <img src = {this.props.propsToCard.avatar_url} alt = {`a picture of ${this.props.propsToCard.name}`} />
                <span>{this.props.propsToCard.login}</span>
                <span>{this.props.propsToCard.location}</span>
                <span>{this.props.propsToCard.url}</span>
                <span>{this.props.propsToCard.followers}</span>
                <span>{this.props.propsToCard.following}</span>
                <span>{this.props.propsToCard.bio}</span>
            </>
        )
    }
}

export default CreateCard