const express = require('express');
const app = express();
const port = 3000;

const allVendors = [
  {
    userId: '1',
    username: 'vendor_one',
    catalogs: [
      { slug: 'apparel' },
      { slug: 'art' },
      { slug: 'electronics' }
    ]
  },
  {
    userId: '2',
    username: 'vendor_two',
    catalogs: [
      { slug: 'apparel' },
      { slug: 'home-goods' }
    ]
  },
  {
    userId: '3',
    username: 'vendor_three',
    catalogs: [
      { slug: 'electronics' },
      { slug: 'sports' }
    ]
  },
  {
    userId: '4',
    username: 'vendor_four',
    catalogs: [
      { slug: 'toys' },
      { slug: 'art' }
    ]
  },
  {
    userId: '5',
    username: 'vendor_five',
    catalogs: [
      { slug: 'books' },
      { slug: 'electronics' },
      { slug: 'gardening' }
    ]
  },
  {
    userId: '6',
    username: 'vendor_six',
    catalogs: [
      { slug: 'kitchen' },
      { slug: 'apparel' }
    ]
  },
  {
    userId: '7',
    username: 'vendor_seven',
    catalogs: [
      { slug: 'art' },
      { slug: 'jewelry' },
      { slug: 'electronics' }
    ]
  },
  {
    userId: '8',
    username: 'vendor_eight',
    catalogs: [
      { slug: 'furniture' },
      { slug: 'sports' }
    ]
  },
  {
    userId: '9',
    username: 'vendor_nine',
    catalogs: [
      { slug: 'beauty' },
      { slug: 'electronics' }
    ]
  },
  {
    userId: '10',
    username: 'vendor_ten',
    catalogs: [
      { slug: 'automotive' },
      { slug: 'home-goods' }
    ]
  }
];

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.post("/send", (req, res)=>{
  const query = req.query.q;
  console.log("query:", query);
  const vendor = allVendors.filter((vendor)=> vendor.username === query)
  if (Object.keys(vendor).length == 0) {
    res.send(`No such object found`)  
  } else {
    res.send(vendor)
  }
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
