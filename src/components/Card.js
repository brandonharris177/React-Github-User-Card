import React from 'react';

class CreateCard extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props)
    }

    render() {
        return (
            <>
                <h2>{this.props.propsToCard.name}</h2>
            </>
        )
    }
}

export default CreateCard