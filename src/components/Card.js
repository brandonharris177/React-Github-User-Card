import React from 'react';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsToCard.user.name)
        return (
            <>
                <h2>{this.props.propsToCard.user.name}</h2>
                <img src = {this.props.propsToCard.user.avatar_url} alt = {`a picture of ${this.props.propsToCard.user.name}`} />
                <span>{this.props.propsToCard.user.login}</span>
                <span>{this.props.propsToCard.user.location}</span>
                <span>{this.props.propsToCard.user.url}</span>
                <span>{this.props.propsToCard.user.followers}</span>
                <span>{this.props.propsToCard.user.following}</span>
                <span>{this.props.propsToCard.user.bio}</span>
            </>
        )
    }
}

export default CreateCard