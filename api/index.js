import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const port = process.env.PORT || 5500;
// when a random route is inputed
app.get('*', (req, res) => res.status(200).send({
   message: 'Welcome to Teamwork API.'
}));
app.listen(port, () => {
   console.log(`Server is successfully running on PORT ${port}`);
});
export default app;