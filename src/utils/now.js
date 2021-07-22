import axios from 'axios';

const nowApi = axios.get('https://dev93904.service-now.com/api/x_307427_neoxcode/jungle', {
  auth: {
    username: 'Happy',
    password: '1234'
  }
});


export default nowApi;