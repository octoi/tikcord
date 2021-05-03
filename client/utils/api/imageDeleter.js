import axios from 'axios';
import API_KEY from './env';

export default function deleteImage(url) {
    return new Promise((resolve, reject) => {

        axios({ method: "POST", url })
            .then(() => {
                resolve();
            })
            .catch(err => {
                console.log(err)
                reject();
            })

    });
}