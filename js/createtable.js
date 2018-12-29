
function tableCreate() {
  //body reference
  var body = document.getElementsByTagName("body")[0];

  // create elements <table> and a <tbody>
  var tbl = document.createElement("table");

  var tblBody = document.createElement("tbody");
  var headings = ["Datum","Event","Florian","Vera","Julius","Thore"]

  timeOpt = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };

  var calDates = loadFile("data/date.txt").split(",")
  var calEvents = loadFile("data/event.txt").split(",")



  document.write("<br>")

  // create header

  // document.write(tblID);
  // cells creation
  for (var j = 0; j < calDates.length; j++) {
    // table row creation
    var row = document.createElement("tr");

    for (var i = 0; i < headings.length; i++) {
      // make header
      if (j == 0) {
        var cell = document.createElement("th");
        var cellText = document.createTextNode(headings[i]);

        // change class of headings
        if (i == 0) {
          cell.setAttribute("class", "left");
        } else if (i == 1) {
          cell.setAttribute("class","event");
        } else {
          cell.setAttribute("class","member")
        }

      } else {
        var rowID = calDates[j-1];

        var cell = document.createElement("td");
        if (i == 0){
          // write date to first column of matrix
          // increment date by one
          cell.setAttribute("id",rowID)
          cell.setAttribute("class","tabDate")
          tomorrow = new Date(rowID);
          var cellText = document.createTextNode(tomorrow.toLocaleDateString("de-DE",timeOpt));
        } else if (i == 1) {
          cell.setAttribute("id",rowID);
          cell.setAttribute("class","tabEvent")
          var cellText = document.createTextNode(calEvents[j-1])
        } else {
          cell.setAttribute("id","opt_"+headings[i]+"_"+rowID);
          cell.setAttribute("class","tabOpt");
          var cellText = document.createElement('button');
          // var optin = document.createTextNode(0);
          // cellText.appendChild(optin);
          cellText.innerHTML = 0;

          cellText.setAttribute("id","check_"+headings[i]+"_"+rowID);
          cellText.setAttribute("class","tabCheck");
          cellText.setAttribute("onclick","changeStatus(this.id)")
        }

      }
      // create element <td> and text node
      //Make text node the contents of <td> element
      // put <td> at end of the table row

      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    //row added to end of table body
    tblBody.appendChild(row);
  }

  // append the <tbody> inside the <table>
  tbl.appendChild(tblBody);
  // put <table> in the <body>
  body.appendChild(tbl);
  // tbl border attribute to
  // tbl.setAttribute("border", "2");
  tbl.setAttribute("class","presence")
  tbl.setAttribute("id","tbl_training")

}
