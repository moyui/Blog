import axios from 'axios';
import url from '@/url';

function getNavBar(data) {
    return axios({
        methods: 'get',
        url: url.mock + '/navbar'
    })
}

export { getNavBar };