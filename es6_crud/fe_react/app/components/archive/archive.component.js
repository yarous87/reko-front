import React from 'react';

import { PostService } from '../../services/post.service';

import { Post } from '../post/post.component';

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

    

    remove = (postId) => {
        const {
            posts
        } = this.state;
        
        PostService.deletePost(postId).then(
            () => {
                this.setState({
                    posts: posts.filter(post => post.id !== postId)
                })
            }
        )
    }

    render() {
        const {
            loading,
            posts
        } = this.state;

        const loadingJSX = <div className="archive__loading"></div>;
        const postsJSX = posts.map(post => <Post 
            data={post}
            remove={this.remove} 
            key={post.id} />);

        return (
            <div className="archive">
                { loading ? loadingJSX : postsJSX }
            </div>
        )
    }
}

export { Archive }