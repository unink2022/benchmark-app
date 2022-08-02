const express = require('express');
const router = express.Router();
const csv = require('csv-parser');
const fs = require('fs');
const prepareData = require('../utils/datahandler');


// GET overview widgets data
router.get('/', (req, res) => {

    const widgetData = [];
    let count = 0;

    fs.createReadStream('data.csv')
        .pipe(csv())
        .on('data', row => {

            // Fake ID
            row['count'] = count++;

            const filter = ['Users', 'Two or More Sessions', 'Internal Page Entries', 'Sessions > 1 Min'];
            const preparedData = prepareData(row, filter);

            if (preparedData !== null)
                widgetData.push(preparedData);


            // if (
            //     row['Metric Name'] === 'Users' ||
            //     row['Metric Name'] === 'Two or More Sessions' ||
            //     row['Metric Name'] === 'Internal Page Entries' ||
            //     row['Metric Name'] === 'Sessions > 1 Min'
            // ) {
            //     const preparedData = {};
            //     preparedData.id = count++;
            //     preparedData.heading = row['Metric Name'];
            //     if (isNaN(row['Metric Count'])) {
            //         preparedData.metric = row['Metric Count'];
            //     } else {
            //         preparedData.metric = new Intl.NumberFormat().format(row['Metric Count']);
            //     }
            //     preparedData.percentile = row['Percentile'].toLowerCase().replace("th", "%");
            //     preparedData.performance = Math.round(row['Week-Over-Week Change']);

            //     widgetData.push(preparedData)
            // }
        })
        .on('end', () => { res.status(200).json(widgetData) })
});

module.exports = router;