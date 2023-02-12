// import { assert } from 'console';
// import data from '../../feed.json';

const getLocalFeed = () => {

    let output = fetch('../../feed.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            let title = data[i].title;
            let link = data[i].link;
            let date = data[i].date;
            let contentSnippet = data[i].contentSnippet;

            $('#output-spot').append("<div class='card news-card'>" +
                 "<h4 class='card-header' id='title'>" + title + "</h4>" +
                 "<ul class='list-group-flush'>" +
                    "<li class='list-group-item'>" + link + "</li>" +
                    "<li class='list-group-item'> "+ date + "</li>" +
                    "<li class='list-group-item'>" + contentSnippet + "</li>" +
                 "</ul>" +
            "</div>")
            
        }
    })
}


const createCard = (data) => {
    const newCard = document.createElement('div');
    newCard.classList.add('card')
    const createHeader = document.createElement('div')
    createHeader.classList.add('card-header');
    createHeader.textContent += data.title;
    newCard.appendChild(createHeader)
    
}
getLocalFeed()