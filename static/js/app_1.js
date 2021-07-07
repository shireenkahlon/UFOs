// import the data from data.js
const tableData = data;
var tbody = d3.select("tbody");
 // clear out any existing data 
function buildTable(data) {
    tbody.html("");
// Loop through each object in the data
// and append a row and cells for each value in the rowdata.forEach((dataRow) => {
    data.forEach(function(dataRow) {
        let row=tbody.append('tr')
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach(function(val) {
            let cell = row.append('td')
            cell.text(val)
        }
        );

    }
    );
}
function handleClick() {
    // Grab the datetime value from the filter
    let date = d3.select('#datetime').property('value')
    let filteredData = tableData
    // Check to see if a date was entered and filter the
    // data using that date.
    if (date) {
        filteredData=filteredData.filter(row => row.datetime === date)
    // Rebuild the table using the filtered data
    buildTable(filteredData);
    }
}
// Attach an event to listen for the form button
d3.select('#filter-btn').on('click', handleClick);
// Build the table when the page loads
buildTable(tableData);