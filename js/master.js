function generateID() {
  var setID;
  var _selectIndex = 0;
  var newSelectBox = document.createElement("select");
  newSelectBox.setAttribute("id","select-"+_selectIndex++);
}


function loadFile(filePath) {
  var result = null;
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("GET", filePath, false);
  xmlhttp.send();
  if (xmlhttp.status==200) {
    result = xmlhttp.responseText;
  }
  return result;
}


function writeFile(myObject, filePath) {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.open("POST", "data/member_attendance.txt",false);
  xmlhttp.setRequestHeader("Content-Type", "application/");
  xmlhttp.send(myObject);
}

// loop over collection
function locToInner(my_collection){
  var my_array = [];
  for (var i = 0; i < my_collection.length; i++) {
    my_array.push(my_collection[i].innerHTML);
  }
  return my_array;
}


function storeData() {

  // works only for 'tbl_training' table
  var tbl = document.getElementById("tbl_training");

  // get table headers.
  var tbl_head = tbl.getElementsByClassName('member');
  var tbl_members = locToInner(tbl_head);

  // // get array index of matching column
  // var tbl_col_index = tbl_head_elements.indexOf(my_column)

  // // returns 'undefined' if the element was not in the colum
  // if (tbl_col_index == -1) {
  //   return "specified column does not exist in the table. Eingaben konnten nicht gespeichert werden.";
  // }

  var tbl_attend_all = locToInner(tbl.getElementsByClassName("tabCheck"));
  var tbl_attend_len = tbl_attend_all.length / tbl_members.length;
  var tbl_out = []

  for (var i = 0; i < tbl_members.length; i++) {
    var tbl_tmp = [];
    tbl_tmp.push(tbl_attend_all.slice(i*tbl_attend_len,(i+1)*tbl_attend_len)); // temporary variable to store extracts from loop

    tbl_out.push(tbl_tmp)
  }

  // parse to json objects

  var my_obj = {
    members:tbl_members,
    attendance:tbl_out
  };

  var my_json = JSON.stringify(my_obj);


  localStorage.setItem("member_attendance.json", my_json);
  writeFile(my_json, 'data')
  alert("Eingaben gespeichert.")


}
