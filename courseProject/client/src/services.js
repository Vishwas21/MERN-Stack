import axios from "axios";

function callAPI(apiName, type, scb, ecb, reqBody) {
    let url = `http://localhost:5000/api/${apiName}`;

    if (get("auth")) {
        axios.interceptors.request.use(function (config) {
            config.headers["x-auth-token"] = get("auth");
            return config;
        });
    }

    switch (type) {
        case "post":
            axios
                .post(url, reqBody)
                .then(responseData => {
                    scb(responseData);
                })
                .catch(err => {
                    ecb(err);
                });
            break;
        case "get":
            axios
                .get(url)
                .then(responseData => {
                    scb(responseData);
                })
                .catch(err => {
                    ecb(err);
                });
            break;
    }
}

function get(key) {
    return localStorage.getItem(key);
}

function set(key, value) {
    localStorage.setItem(key, value);
}

// export default callAPI;      // default export

export { callAPI, get, set }; // named export
