import express from 'express';

import { posts } from './posts';

const router = express.Router();

router.use('/api/posts', posts);

router.get('/api', (req, res) => {
    res.json({
        version: '0.1.alpha'
    });
});

export { router };