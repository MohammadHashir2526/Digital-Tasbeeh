var num = 0;
function count () {
  document.getElementById("numb").innerHTML = num;
  num++;
}
  function reset () {
    num = 0;
    document.getElementById("numb").innerHTML = num;
  }

count();
reset();