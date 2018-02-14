const express = require('express');
//const { renderFull } = require('./dist/assets/bundle.js');
const { renderToString } = require('react-dom/server');
const MasterPage = require('./master-page.jsx');

const logger = (req, res, next) => {
    console.log(`${req.method} request for '${req.url}'`)
    next();
}

const localRender = (req, res, next) => {
    let content = renderToString(<MasterPage />);
    res.status(200).send(content);
}

const app = express()
    .use(logger)
    .use(localRender);

app.listen(3000, () =>
    console.log(`App running at 'http://localhost:3000'`)
)