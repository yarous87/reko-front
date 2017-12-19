import bsn from 'bootstrap.native';

import { Post } from '../services/post.service';

//Post.getPosts().then(posts => console.log(posts));

class Create {
    constructor() {
        this.btn = document.querySelector('#add-new');
        this.form = document.querySelector('#post-modal');
        this.modal = new bsn.Modal(this.form, {
            backdrop: false
        });
        
        this.btn.addEventListener('click', this.handleClick);
    }

    handleClick = e => {
        this.openModal()
            .then(this.save)
            .then(
                () => alert('Post dodany')
            );
    }

    openModal() {
        let promiseResolve, promiseReject;

        const onClose = e => {
            promiseReject()
        };

        const onSubmit = e => {
            e.preventDefault();

            promiseResolve();
            this.modal.hide();
        };

        const removeListeners = () => {
            this.form.removeEventListener('hidden.bs.modal', onClose);
            this.form.removeEventListener('submit', onSubmit);
        }

        return new Promise((resolve, reject) => {
            promiseResolve = resolve;
            promiseReject = reject;

            this.form.addEventListener('hidden.bs.modal', onClose);
            this.form.addEventListener('submit', onSubmit);

            this.modal.show();
        })
            .then(
                removeListeners,
                () => {
                    removeListeners();

                    return Promise.reject();
                }
            )
        

        
    }

    save = () => {
        const data = {
            title: this.form.title.value,
            content: this.form.content.value
        };

        this.form.title.value = '';
        this.form.content.value = '';

        return Post.createPost(data)
            .then(response => {
                if (response) {
                    return response;
                }

                return Promise.reject();
            });
    }
}

export { Create };