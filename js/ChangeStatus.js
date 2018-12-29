function changeStatus(id) {
  var my_status = document.getElementById(id).innerHTML;
  // document.getElementById("test").innerHTML = my_status;
  if (my_status == 0) {
     document.getElementById(id).innerHTML = 1;
  } else if (my_status == 1) {
    document.getElementById(id).innerHTML = 0;
  }
}
