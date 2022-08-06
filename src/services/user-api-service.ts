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

export const login = (input: any): Promise<any> => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(input)
    };

    return fetch(`http://localhost:8080/login`, requestOptions)
    .then(function(response) {
        if(!response.ok) {
            console.log("Error with HTTP response");
            return response;
        } else {
            return response;
        }
    });
}

export const isAuthenticated = (): Promise<boolean> => {

    const requestOptions = {
        method: 'GET',
        credentials: 'same-origin',
        headers: new Headers ({ 
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'http://localhost:3000/' 
        }),
    };

    return fetch(`http://localhost:8080/login/me`, { credentials: 'same-origin'})
    .then(function(response) {
        return response.ok;
    });
}
