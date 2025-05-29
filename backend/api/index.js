// This is a minimal Vercel Serverless Function handler for diagnosis

const express = require('express');
const serverless = require('serverless-http');

console.log('Before Express initialization');
const app = express();
console.log('After Express initialization');

module.exports = serverless(app);

console.log('Before exporting serverless handler');
console.log('After exporting serverless handler');
