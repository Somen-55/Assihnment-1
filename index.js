const express = require('express');
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(express.static('public'));
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

app.post('/is-prime', (req, res) => {
  const { number } = req.body;

  if (typeof number !== 'number') {
    return res.status(400).json({ error: 'Please send a valid number.' });
  }

  const result = isPrime(number);
  res.json({ number, isPrime: result });
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});