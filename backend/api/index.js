// This is a minimal Vercel Serverless Function handler for diagnosis

const express = require('express');
const serverless = require('serverless-http');

const app = express();

module.exports = serverless(app);
