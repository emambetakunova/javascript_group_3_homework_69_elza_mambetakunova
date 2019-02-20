import axios from 'axios';


const instance = axios.create({
    baseURL: 'https://fasfood-elza.firebaseio.com/' // Your URL here!
});


export default instance;