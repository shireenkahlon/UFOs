// import the data from data.js
const tableData = data;
  // First, clear out any existing data
var tbody = d3.select("tbody");
 // First, clear out any existing data 
function buildTable(data) {
    tbody.html("");
// Next, loop through each object in the data
// and append a row and cells for each value in the rowdata.forEach((dataRow) => {
    data.forEach((dataRow) {
        let row=tbody.append('tr')
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) {
            let cell = row.append('td')
            cell.text(val)
        }
        );

    }
    );
}