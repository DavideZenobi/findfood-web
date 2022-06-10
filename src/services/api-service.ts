
//PRODUCTS ENDPOINTS


export const getProduct = (input: any): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/single?input=${encodeURIComponent(input)}`)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
}

// localhost:8080/api/product/productsWithPrice
export const getProductsWithPrice = (input: any): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/productsWithPrice?input=${encodeURIComponent(input)}`)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
}

//Get random products for the home page
export const getRandomProducts = (): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/random`)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
}

export const getAllShops = (): Promise<any> => {
    return  fetch("http://localhost:8080/api/shop/search")
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
        
}



export const getLabels = (): Promise<any> => {
    return fetch(`http://localhost:8080/api/label/`)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
}


// SHOPS ENDPOINTS

export const getShopsWithPriceByProductId = (productId: any): Promise<any> => {
    return fetch(`http://localhost:8080/api/shop/shopsByProductId?productId=${encodeURIComponent(productId)}`)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
        } else {
            return response.json();
        }
    })
    .catch(function(error) {
        console.log("Error fetching API: " + error);
    });
}