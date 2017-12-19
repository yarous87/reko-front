import moment from 'moment';

import { Post } from '../services/post.service';

class List {
    constructor() {
        this.list = document.querySelector('#post-archive');

        this.list.addEventListener('click', this.handleClick);

        this.getPosts().then(posts =>{
            posts.forEach(post => {
                this.renderPost(post);
            });
        });

        Post.on('post.added', this.renderPost);
    }

    getPosts() {
        return Post.getPosts();
    }

    renderPost = (post) => {
        this.list.innerHTML = this.list.innerHTML + `
            <article class="post" data-id="${post.id}">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <button class="btn btn-default remove">Usuń</button>
            </article>
            `;
    }

    handleClick = e => {
        if (e.target.classList.contains('remove')) {
            const article = e.target.closest('article');
            const postId = article.dataset.id;

            this.removePost(postId).then(() => {
                article.remove();
            });
        }
    }

    removePost(postId) {
        return Post.deletePost(postId)
            .then(response => {
                if (response) {
                    return response;
                }

                return Promise.reject();
            });
    } 
}

export { List };