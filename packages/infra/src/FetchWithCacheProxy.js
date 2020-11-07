// Proxy design pattern with added cache
// To be class
// Be sure to have this as singelton in the public app

// Remote to: public/App & modules/footer

class fetchAPI {
    makeFetch(url) {
        console.log("Calling External API makeFetch v1...")

        switch (url) {
            case "domain/user/1":
                return new Promise(function (resolve, reject) {
                    resolve({
                        language: "EN",
                        name: "Pippa Malmgren",
                        account: "10.000 USD"
                    })
                });
            case "domain/user/2":
                return {
                    language: "EN",
                    name: "Peter Thiel",
                    account: "5.000 USD"
                }
            case "domain/bootstrap/1":
                return {
                    country: "US"
                }
            case "domain/bootstrap/2":
                return {
                    country: "US"
                }
            default:
                return "404"
        }


        //return response;
    }
}

export function fetchAPIProxy() {
    this.api = new fetchAPI()
    this.cache = {}

    this.makeFetchWithAPIProxy = async function (url) {
        if (this.cache[url] == null) {
            this.cache[url] = await this.api.makeFetch(url)
        }

        return this.cache[url]
    }
}
