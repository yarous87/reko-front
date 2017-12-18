import express from 'express';
import bodyParser from 'body-parser';

import { auth } from './middlewares/auth';
import { router } from './controllers';

//process.on('unhandledRejection', up => { throw up; });

var app = express();

app.use(bodyParser.json());
app.use(auth);
app.use(router);

app.listen(8081, () => console.log('Example app listening on port 3000!'));