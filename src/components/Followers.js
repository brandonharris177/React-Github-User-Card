import React from 'react';

class FollowersCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsToFollowers)
        return (
            <>
                {this.props.propsToFollowers.map(follower => 
                    <div key = {follower.id}>
                        <img src = {follower.avatar_url} alt = {`a picture of ${follower.login}`} />
                        <span>{follower.login}</span>
                    </div>
                )}
            </>
        )
    }
}

export default FollowersCards