/**
 * GET ENDPOINTS
 */

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



export const getShopsWithPriceByProductId = (productId: any, page: any): Promise<any> => {
    return fetch(`http://localhost:8080/api/shop/search?productId=${encodeURIComponent(productId)}&page=${encodeURIComponent(page)}`)
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