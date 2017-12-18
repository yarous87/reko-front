import express from 'express';

import { Post } from '../models/post';

const router = express.Router();

router.get('/', (req, res) => {
    Post.findAll().then(products => {
        res.json(products);
    });
});

router.get('/:postId', (req, res) => {
    const { 
        postId 
    } = req.params; 

    Post.find(postId).then(product => {
        res.json(product);
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

        Post.create(data).then(product => {
            res.json(product);
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
        
        Post.update(postId, data).then(product => {
            res.json(product);
        });
    } else {
        res.json(null);
    }
});

router.delete('/delete/:postId', (req, res) => {
    const {
        postId
    } = req.params;

    Post.delete(postId).then(product => {
        res.json(product);
    });
});

export { router as posts };