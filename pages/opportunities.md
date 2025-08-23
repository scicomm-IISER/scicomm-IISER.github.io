---
title: "Academic Internships and Openings"
permalink: /opportunities/
---

**POSITION** column is *clickable* and takes you to the respective website.

Color Codes:
<table>
  <tr>
    <td class="IN">Undegraduate Internship</td>
  </tr>
  <tr>
    <td class="PH">PhD Position</td>
  </tr>
  <tr>
    <td class="PD">Postdoctoral Position</td>
  </tr>
</table>

**❓** in the deadline indicates one of three things:
- there are multiple deadlines, or
- applications are accepted on a rolling basis, or
- the deadline could not be retrieved.

Columns are *sortable*.

<table id="opp-table" class="sortable">
  <thead>
    <tr>
      <th class="position">Position</th>
      <th class="date">Deadline</th>
    </tr>
  </thead>
  <tbody>
  </tbody>
</table>

<script src="/assets/js/sorttable.js"></script>
<script>
var table = document.getElementById("opp-table").getElementsByTagName('tbody')[0];
function isDateInFuture(dateToCheck) {
  const today = new Date(); // Get the current date and time

  // To compare only by day, month, and year (ignoring time),
  // set the hours, minutes, seconds, and milliseconds to 0 for both dates.
  dateToCheck.setHours(0, 0, 0, 0);
  today.setHours(0, 0, 0, 0);

  // Compare the two dates. If dateToCheck is less than today, it's in the past.
  return dateToCheck >= today;
}

fetch("{{ site.openings-sheet }}")
  .then(res => res.text())
  .then(tsv => {
    let data = tsv.split("\n").map(r => r.split("\t")).slice(1);
	data.forEach(function(line) {
      const deadline = new Date(line[1]);
      console.log(line[0]);
      console.log(deadline);
      if (line[0] != "" && (isDateInFuture(deadline) || line[1] == "")) {
          var row = table.insertRow();
          var cell = row.insertCell();
          if (line[2] != "" ) {
              cell.classList.add(line[2]);
          }
          cell.classList.add("position");
          const newLink = document.createElement('a');
          newLink.href = line[3];
          newLink.target = '_blank'; // Optional: opens in a new tab
          newLink.textContent = line[0];
          cell.appendChild(newLink)
          var cell = row.insertCell();
          if (line[2] != "" ) {
              cell.classList.add(line[2]);
          }
          cell.classList.add("date");
          if (line[1] == "") {
              cell.innerHTML = "❓";
          } else {
              cell.innerHTML = line[1];
          }
      }

	});
  });
</script>

