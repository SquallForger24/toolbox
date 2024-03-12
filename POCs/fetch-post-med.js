fetch('http://<IP>/updateInfo.html',{
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
                'Content-Type':'application/x-www-form-urlencoded'
        },
        body: 'customerId=&billingAddress=false'})
