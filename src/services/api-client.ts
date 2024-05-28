import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '94eb2b4cac114dd1ae87c66778d45a41',

    }
})