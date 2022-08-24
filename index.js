import express from 'express';
import axios from 'axios';

const app = express();
const PORT = 8000;

const url = 'https://api.github.com/users/martin1606';

app.listen(PORT);
console.log(`Ouvindo port ${PORT}`);

app.route('/img').get((req,res) => {
    axios.get(url)
    .then(result => res.send(`<h1 style="color: gray;">Imagem do Usuario</h1><img src="${result.data.avatar_url}"/>`))
    .catch(err => console.error(err));
})

app.route('/').get((req,res) => {
    axios.get(url)
    .then(result => res.send(result.data))
    .catch(e => console.error(e))
})