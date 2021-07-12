const express = require('express');
const path = require('path');
const apiMocker = require('mocker-api');
// 1
const app = express();

apiMocker(app, path.resolve('./mocker/mocker.js'));
app.listen(80);
