const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.send('Welcome to Stock Portfolio Analysis API!');
});

// Endpoint 1

function calculateReturn(boughtAt, marketPrice, quantity) {
  return (marketPrice - boughtAt) * quantity;
}

app.get('/calculate-returns', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let marketPrice = parseFloat(req.query.marketPrice);
  let quantity = parseInt(req.query.quantity);
  let result = calculateReturn(boughtAt, marketPrice, quantity);
  res.send(result.toString());
});

// Endpoint 2

function totalReturn(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-returns', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = totalReturn(stock1, stock2, stock3, stock4);
  res.send(result.toString());
});

// Endpoint 3

function returnPercentage(boughtAt, returns) {
  return (returns / boughtAt) * 100;
}

app.get('/calculate-return-percentage', (req, res) => {
  let boughtAt = parseFloat(req.query.boughtAt);
  let returns = parseFloat(req.query.returns);
  let result = returnPercentage(boughtAt, returns);
  res.send(result.toString());
});

// Endpoint 4

function stockReturnPercentage(stock1, stock2, stock3, stock4) {
  return stock1 + stock2 + stock3 + stock4;
}

app.get('/total-return-percentage', (req, res) => {
  let stock1 = parseFloat(req.query.stock1);
  let stock2 = parseFloat(req.query.stock2);
  let stock3 = parseFloat(req.query.stock3);
  let stock4 = parseFloat(req.query.stock4);
  let result = stockReturnPercentage(stock1, stock2, stock3, stock4);
  res.send(result.toString());
});

// Endpoint 5

function stockStatus(returnPercentage) {
  if (returnPercentage > 0) {
    return 'Profit';
  } else {
    return 'Loss';
  }
}

app.get('/status', (req, res) => {
  let returnPercentage = parseFloat(req.query.returnPercentage);
  let result = stockStatus(returnPercentage);
  res.send(result.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
