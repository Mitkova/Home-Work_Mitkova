function createTable() {
	var columns, rows, table, row, e;

	columns = document.getElementById('columns').value;
	rows = document.getElementById('rows').value;
	table = document.createElement('table');

	for (var i = 1; i <= rows; i++) {
		row = document.createElement('tr');

		for (var j = 1; j <= columns; j++) {
			colElem = document.createElement('td');
			colElem.appendChild(document.createTextNode('Row-' + i + ' Column-' + j));
			row.appendChild(colElem);
		}
		table.appendChild(row);
	}
	document.body.appendChild(table);
	table.setAttribute("border", "1");

}