  
const buttonElem = document.querySelector('button');    
buttonElem.addEventListener('click',nasaAPI);

function nasaAPI(){
     fetch(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
    .then(res => {
        if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
    })
    .then(data => {
        console.log(data);
        document.querySelector('h2').innerHTML = data.title;
        document.querySelector('h3').innerHTML = data.date;
        document.querySelector('img').src = data.url;
        document.querySelector('.explaining-picture').innerHTML = data.explanation;
        document.querySelector('.copyright').innerHTML = data.copyright;
    })
    .catch(err => {
        console.error('Fetch error:', err);
    });

}