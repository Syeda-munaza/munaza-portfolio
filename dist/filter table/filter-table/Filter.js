// Get the input element and the table
const input = document.getElementById("myInput");
const table = document.getElementById("mytable");

// Add an event listener to detect input changes
input.addEventListener("keyup", function () {
  // Get the filter text and convert it to lowercase
  const filter = input.value.toLowerCase();

  // Get all rows of the table except the header
  const rows = table.getElementsByTagName("tr");

  // Loop through table rows to check for matches
  for (let i = 1; i < rows.length; i++) {
    const nameCell = rows[i].getElementsByTagName("td")[0]; // Get the first cell (Name)

    if (nameCell) {
      const nameText = nameCell.textContent || nameCell.innerText;

      // Show the row if the name matches the filter
      if (nameText.toLowerCase().indexOf(filter) > -1) {
        rows[i].style.display = "";
      } else {
        rows[i].style.display = "none"; // Hide the row if it doesn't match
      }
    }
  }
});
