import axios from 'axios';
import API_KEY from './env'; // create an env.js file 
const END_POINT = "https://api.imgbb.com/1/upload"; // https://api.imgbb.com/ 

export default function uploadImage(imageData) {
    return new Promise((resolve, reject) => {

        let body = new FormData();
        body.set('key', API_KEY);
        body.set('image', imageData);

        axios({
            method: 'POST',
            url: END_POINT,
            data: body
        }).then(data => {
            resolve(data?.data?.data?.display_url);
        }).catch(err => {
            console.log(err)
            reject();
        })

    });
}