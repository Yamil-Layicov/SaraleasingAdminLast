import axios from 'axios';


const instance = axios.create({
  baseURL: 'https://api.saraleasing.az/api/',
});

export default instance;