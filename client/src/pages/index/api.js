import axios from 'axios';
import url from  '@/url';

function getList(data) {
    return axios({
        methods: 'get',
        url: url.mock + '/index/articlelist'
    })
}

export { getList };