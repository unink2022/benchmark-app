const prepareData = (row, filter = []) => {
    if (filter.includes(row['Metric Name'])) {
        const preparedData = {};
        preparedData.id = row['count'];
        preparedData.heading = row['Metric Name'];
        if (isNaN(row['Metric Count'])) {
            preparedData.metric = row['Metric Count'];
        } else {
            preparedData.metric = new Intl.NumberFormat().format(row['Metric Count']);
        }
        preparedData.percentile = row['Percentile'].toLowerCase().replace('th', '%');
        preparedData.performance = Math.round(row['Week-Over-Week Change'].replace('%', ''));
        return preparedData;
    }
    return null;
}

module.exports = prepareData; 