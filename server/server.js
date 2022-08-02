const express = require('express');
const overviewRoutes = require('./routes/overview');
const trafficRoutes = require('./routes/traffic');
const sitePerformanceRoutes = require('./routes/site-performance');


const setup = {
    port: 5000,
}

// express app
const app = express()

// middleware
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
})

// routes
app.use('/api/overview', overviewRoutes);
app.use('/api/traffic', trafficRoutes);
app.use('/api/site-performance', sitePerformanceRoutes);

app.listen(setup.port, () => {
    console.log(`listening on port ${setup.port}`);
})