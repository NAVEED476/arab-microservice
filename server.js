const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3001;

app.use(cors());

// Sample data for the table
const tableData = [
  { id: 1, name: 'Item 1', quantity: 10, price: 20 },
  { id: 2, name: 'Item 2', quantity: 15, price: 25 },
  { id: 3, name: 'Item 3', quantity: 8, price: 15 },
  { id: 4, name: 'Item 4', quantity: 12, price: 30 },
  { id: 5, name: 'Item 5', quantity: 18, price: 22 },
  { id: 6, name: 'Item 1', quantity: 10, price: 20 },
  { id: 7, name: 'Item 2', quantity: 15, price: 25 },
  { id: 9, name: 'Item 3', quantity: 8, price: 15 },
  { id: 10, name: 'Item 4', quantity: 12, price: 30 },
  { id: 11, name: 'Item 5', quantity: 18, price: 22 },
  { id: 12, name: 'Item 1', quantity: 10, price: 20 },
  { id: 13, name: 'Item 2', quantity: 15, price: 25 },
  { id: 14, name: 'Item 3', quantity: 8, price: 15 },
  { id: 15, name: 'Item 4', quantity: 12, price: 30 },
  { id: 16, name: 'Item 5', quantity: 18, price: 22 },
  { id: 17, name: 'Item 1', quantity: 10, price: 20 },
  { id: 18, name: 'Item 2', quantity: 15, price: 25 },
  { id: 19, name: 'Item 3', quantity: 8, price: 15 },
  { id: 20, name: 'Item 4', quantity: 12, price: 30 },
  { id: 21, name: 'Item 5', quantity: 18, price: 22 },
  { id: 22, name: 'Item 1', quantity: 10, price: 20 },
  { id: 24, name: 'Item 2', quantity: 15, price: 25 },
  { id: 25, name: 'Item 3', quantity: 8, price: 15 },
];

app.get('/api/table', (req, res) => {
  res.json(tableData);
});

// Sample data for the pie chart
const pieChartData = [
  { label: 'Category A', value: 30 },
  { label: 'Category B', value: 20 },
  { label: 'Category C', value: 15 },
  { label: 'Category D', value: 25 },
  { label: 'Category E', value: 10 },
];

app.get('/api/pie-chart', (req, res) => {
  res.json(pieChartData);
});

// Sample data for the graph
const graphData = [
  { x: 'Jan', y: 10 },
  { x: 'Feb', y: 15 },
  { x: 'Mar', y: 8 },
  { x: 'Apr', y: 12 },
  { x: 'May', y: 18 },
  { x: 'Jun', y: 10 },
  { x: 'Jul', y: 15 },
  { x: 'Aug', y: 8 },
  { x: 'Sep', y: 12 },
  { x: 'Oct', y: 18 },
  { x: 'Nov', y: 12 },
  { x: 'Dec', y: 18 },
];

app.get('/api/graph', (req, res) => {
  res.json(graphData);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
});