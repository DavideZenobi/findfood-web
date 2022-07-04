/**
 * GET ENDPOINTS
 */

export const getProduct = (input: any): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/${encodeURIComponent(input)}`)
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
export const getProductsWithPrice = (text: string): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/text=${encodeURIComponent(text)}`)
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

export const getProductsWithPriceV2 = (text: string): Promise<any> => {
    return fetch(`http://localhost:8080/api/product/V2?text=${encodeURIComponent(text)}`)
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



/**
 * POST AND PUT ENDPOINTS
 */

 export const addView = (productId: number): Promise<any> => {

    const requestOptions = {
        method: 'PUT'
    };

    return fetch(`http://localhost:8080/api/product/${encodeURIComponent(productId)}/view`, requestOptions)
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