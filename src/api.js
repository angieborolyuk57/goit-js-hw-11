import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '40349690-1733ca14f63c11d59cbaf9c83';

export async function getSearch(searchValue, pageNew) {
const params = new URLSearchParams({
    key: API_KEY,
    q: searchValue,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: pageNew,
    per_page: 40,
})
    
   return await axios.get(`${BASE_URL}?${params}`);
     
}