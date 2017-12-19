import express from 'express';

import { Post } from '../models/post';

const router = express.Router();

router.get('/', (req, res) => {
    Post.findAll().then(posts => {
        res.json(posts);
    });
});

router.get('/:postId', (req, res) => {
    const { 
        postId 
    } = req.params; 

    Post.find(postId).then(post => {
        res.json(post);
    });
});

router.post('/new', (req, res) => {
    const {
        title,
        content
    } = req.body;
    
    if (title && content) {
        const data = {
            title,
            content
        };

        Post.create(data).then(post => {
            res.json(post);
        });
    } else {
        res.json(null);
    }
});

router.put('/update/:postId', (req, res) => {
    const {
        postId
    } = req.params;
    const { 
        title,
        content
    } = req.body;

    if (title || content) {
        const data = {};

        title ? data.title = title : null;
        content ? data.content = content : null;
        
        Post.update(postId, data).then(post => {
            res.json(post);
        });
    } else {
        res.json(null);
    }
});

router.delete('/delete/:postId', (req, res) => {
    const {
        postId
    } = req.params;

    Post.delete(postId).then(post => {
        res.json(post);
    });
});

export { router as posts };