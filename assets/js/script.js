// import { assert } from 'console';
// import data from '../../feed.json';

const getLocalFeed = () => {

    fetch('../../feed.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                let title = data[i].title;
                let link = data[i].link;
                let date = data[i].date;
                let contentSnippet = data[i].contentSnippet;

                $('#output-spot').append("<div class='card news-card'>"
                    + "<div class='card-header'>"
                    + "<div class='card-body'>"
                    + "<h4 class='card-title' id='title'><a href=" 
                    + link
                    + "alt='hyperlink for more information>"
                    + title
                    + "</a>"
                    + "</h4>"
                    + "</div>"
                    + "<ul class='list-group-flush'>"
                    + "<li class='list-group-item'> "
                    + date
                    + "</li>"
                    + "<li class='list-group-item'>"
                    + contentSnippet
                    + "</li>"
                    + "</ul>"
                    + "</div>"
                    + "</div>"
                )

            }
        })
}


document.addEventListener("DOMContentLoaded", function () {
    getLocalFeed();
});

const listButton = document.getElementById('list-button');
const gridButton = document.getElementById('grid-button');



