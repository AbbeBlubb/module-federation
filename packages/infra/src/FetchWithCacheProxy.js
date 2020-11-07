// Proxy design pattern with added cache
// To be class
// Be sure to have this as singelton in the public app

// Remote to: public/App & modules/footer


function makeFetch(url) {
    switch (url) {
        case url:
        console.log("Request is made");
            
        case "domain.com/user/1":
            return new Promise(function (resolve, reject) {
                resolve(
                    JSON.stringify({
                        language: "EN",
                        name: "Pippa Malmgren",
                        account: "10.000 USD",
                        response: 200
                    })
                )
            });

        case "domain.com/user/2":
            return new Promise(function (resolve, reject) {
                resolve(
                    JSON.stringify({
                        language: "EN",
                        name: "Peter Thiel",
                        account: "5.000 USD",
                        response: 200
                    })
                )
            });

        case "domain.com/bootstrap/1":
            return new Promise(function (resolve, reject) {
                resolve(
                    JSON.stringify({
                        country: "US",
                        response: 200
                    })
                )
            });

        case "domain.com/bootstrap/2":
            return new Promise(function (resolve, reject) {
                resolve(
                    JSON.stringify({
                        country: "US",
                        response: 200
                    })
                )
            });

        default:
            return new Promise(function (resolve, reject) {
                reject(
                    JSON.stringify({
                        response: 404
                    })
                )
            });
    }
}


export class FetchProxy {
    constructor() {
        this.api = makeFetch;
        this.cache = {};
    }

    async get(url) {
        if (!this.cache[url]) {
            this.cache[url] = await this.api(url);
        } else {
            console.log("Cache used instead of request");
        }

        return this.cache[url];
    }
}
