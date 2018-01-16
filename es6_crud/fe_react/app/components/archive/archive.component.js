import React from 'react';

import { PostService } from '../../services/post.service';

class Archive extends React.Component {
    constructor() {
        super();

        this.state = {
            posts: new Array(),
            loading: true
        }
    }

    componentDidMount() {
        PostService.getPosts().then(
            posts => this.setState({
                loading: false,
                posts
            })
        )
    }

    render() {
        const {
            loading,
            posts
        } = this.state;

        const loadingJSX = <div className="archive__loading"></div>;
        //const postsJSX = posts.map(post => <Post data={post} />);

        return (
            <div className="archive">
                
            </div>
        )
    }
}

export { Archive }