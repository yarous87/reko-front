import { FetchService } from './fetch.service';

const URLS = {
    list: '/api/posts',
    single: '/api/posts/',
    create: '/api/posts/new',
    update: '/api/posts/update/',
    delete: '/api/posts/delete/'
};

class PostService extends FetchService {
    getPosts() {
        return this.get(URLS.list);
    }

    getPost(postId) {
        return this.get(URLS.single + postId);
    }

    createPost(data) {
        return this.post(URLS.create, data)
            .then(post => {
                if (post) {
                    this.fire('post.added', post);
                }

                return post;
            });
    }

    updatePost(postId, data) {
        return this.put(URLS.update + postId, data);
    }

    deletePost(postId) {
        return this.delete(URLS.delete + postId);
    }
}

const PostServiceInstance = new PostService();

export { PostServiceInstance as PostService }; 