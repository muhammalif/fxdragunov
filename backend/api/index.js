// This is a minimal Vercel Serverless Function handler for diagnosis

module.exports = (req, res) => {
  console.log('Minimal handler received request');
  res.status(200).send('Minimal Backend API is running!');
};
