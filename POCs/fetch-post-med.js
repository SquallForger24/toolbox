fetch('http://192.168.206.105:8080/shop/customer/updateAddress.html',{
        method: 'POST',
        mode: 'same-origin',
        credentials: 'same-origin',
        headers: {
                'Content-Type':'application/x-www-form-urlencoded'
        },
        body: 'customerId=&billingAddress=false&firstName=testd&lastName=testbc&company=&address=5545+TEST+ST&city=CITY&country=AL&stateProvince=TR&postalCode=88888&phone=5555555555&submitAddress=Change+address'})
