// import required essentials
const http = require('http');
const express = require('express');
var cors = require('cors');

// import from `routes` folder
const raidRouter = require('./routes/raid');
const authRouter = require('./routes/auth');

// create new app
const app = express();
app.use(express.json());

// use it before all route definitions
// allowing below URL to access these APIs end-points
// you can replace this URL(http://localhost:8100) with your
// application URL from where you are calling these APIs
app.use(cors()); //{origin: 'http://localhost:8100'}

/* this '/items' URL will have two end-points: 
→ localhost:3000/items/ (this returns array of objects) 
→ localhost:3000/items/:id (this returns single object)
*/
app.use('/raid', raidRouter);
app.use('/auth', authRouter);

// default URL to API
app.use('/', function(req, res) {
    res.send('API for https://hpt-blue-archive.netlify.app/');
});

const server = http.createServer(app);
const port = 3000;
server.listen(port);
console.debug('Server listening on port ' + port);