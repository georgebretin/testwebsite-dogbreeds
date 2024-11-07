// JavaScript to highlight the table based on selected breed
function highlightTable() {
    // Remove highlight from all tables
    document.querySelectorAll('.dog-table').forEach(table => {
        table.classList.remove('highlighted-table');
    });

    // Get the selected breed from the dropdown
    const selectedBreed = document.getElementById('breed').value;
    
    // Highlight the table for the selected breed
    if (selectedBreed !== "none") {
        const selectedTable = document.getElementById(`${selectedBreed}-table`);
        if (selectedTable) {
            selectedTable.classList.add('highlighted-table');
        }
    }
}
