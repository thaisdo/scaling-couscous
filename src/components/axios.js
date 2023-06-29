import axios from "axios";

const instance = axios.create({
    //api (cloud function) url
    baseURL: 'http://127.0.0.1:5001/website-b9c42/us-central1/api' 
});

export default instance;