import axios from 'axios';

const KEY="AIzaSyDw4rxZ4NlRe6sNXN4wXeo_jhiATLD0LWs";

export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        maxResults:25,
        key:KEY
    }


});