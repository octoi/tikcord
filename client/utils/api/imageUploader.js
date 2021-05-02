import API_KEY from './env'; // create an env.js file 
const END_POINT = "https://api.imgbb.com/1/upload"; // img db api url

export default function uploadImage(imageData) {
    return new Promise((resolve, reject) => {
        const url = `${END_POINT}?key=${API_KEY}&image=${escape(imageData)}`

        fetch(url, { method: "POST" }).then(res => res.json().then(data => {
            console.log(data)
        })).catch(e => {
            console.log(e.message)
        })

    });
}