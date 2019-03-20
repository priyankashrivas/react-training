import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com/',
    headers:{
        Authorization:'Client-ID ebbd5aa283e95526fb6a4ee3eba5ce40e471563b159443f88dc8d395537ac924'
    }
});