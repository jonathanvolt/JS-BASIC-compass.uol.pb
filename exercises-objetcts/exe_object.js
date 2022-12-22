
let address = {
    street: 'rua azul',
    city: 'Osasco',
    zipcode: 1515
};

function showAdress(address){
    for (let key in address)
    console.log(key, address[key]);
}

showAdress(address);