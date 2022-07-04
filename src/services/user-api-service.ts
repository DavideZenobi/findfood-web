export const registerUserAndShop = (input: any): Promise<any> => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };

    return fetch(`http://localhost:8080/api/users`, requestOptions)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
            return response;
        } else {
            return response;
        }
    });
}