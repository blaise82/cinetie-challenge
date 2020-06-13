import express from 'express';
import bodyParser from 'body-parser';
import router from './routes/index';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('welcome to the challenge'));
// app.use((req, res, next) => {
//   const err = new Error('Not found');
//   err.status = 404;
//   next(err);
// });

app.use(router);

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

export default app;
