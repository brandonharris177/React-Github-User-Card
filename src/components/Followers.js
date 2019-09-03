import React from 'react';
import {Card} from  "semantic-ui-react";

class FollowersCards extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.propsToFollowers)
        return (
            <>
                {this.props.propsToFollowers.map(follower => 
                    <Card key = {follower.id}>
                        <div className = "image">
                            <img src = {follower.avatar_url} alt = {`a picture of ${follower.login}`} />
                        </div>
                        <div className = "content">
                            <div className = "header">{follower.login}</div>
                        </div>
                    </Card>
                )}
            </>
        )
    }
}

export default FollowersCards