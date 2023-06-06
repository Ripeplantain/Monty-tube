// import axios from 'axios';

// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

// const options = {
//   params: {
//     maxResults: 50,
//     order: 'date'
//   },
//   headers: {
//     'X-RapidAPI-Key': import.meta.VITE_YOUTUBE_API_KEY,
//     'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
//   },
// };

// export const fetchApiData = async (url) => {
//   const { data } = await axios.get(`${BASE_URL}/${url}`, options);

//   return data;
// };

import axios from "axios";

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: '50',
    order: 'date'
  },
  headers: {
    'X-RapidAPI-Key': import.meta.env.VITE_YOUTUBE_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchApiData = async (url) => {
    try{
        const {data} = await axios.get(`${BASE_URL}/${url}`, options);
        console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}
