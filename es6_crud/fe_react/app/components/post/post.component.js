import React from 'react';

const Post = function(props) {
    const {
        data: {
            id,
            title
        },
        remove
    } = props;
    
    return (
        <article className="post">
            <h3>{title}</h3>

            <button className="btn" onClick={() => remove(id)}>
                Usuń
            </button>
        </article>
    );
}

export { Post };