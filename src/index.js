const express =  require('express');
const app =  express();
const port =  process.env.PORT  ||  8080

app.get('/', (req, res) => {
    return res.status(200).json({ nome:  'Eduardo Salgado' });
});

let server = app.listen(port, () => {
    console.log(`Application running on ${port}`);
});
module.exports  = server;