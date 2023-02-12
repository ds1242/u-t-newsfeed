// Import json data created with data-fetch
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

                    + "<ul class='list-group-flush'>"
                    + "<li class='list-group-item'><a href=" 
                    + link
                    + "alt='hyperlink for more information>"
                    + title
                    + "</a>"
                    + "<li class='list-group-item'> "
                    + date
                    + "</li>"
                    + "<li class='list-group-item'>"
                    + "<p class='card-text'>"
                    + contentSnippet
                    + "</p>"
                    + "</li>"
                    + "</ul>"
                    + "</div>"
                )

            }
        })
}


// Update class to set the news as a grid
const setGrid = (event) => {
    event.preventDefault()
    let elements = document.getElementsByClassName('card')

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('col-sm-6') ){
            return;
        } else {
            elements[i].classList.add('col-sm-6')
            elements[i].classList.remove('col-12')
        }
        
    }
}

// update class to set news as a list
const setList = (event) => {
    event.preventDefault()
    let elements = document.getElementsByClassName('card')

    for (let i = 0; i < elements.length; i++) {
        if (elements[i].classList.contains('col-12') ){
            return;
        } else {
            elements[i].classList.remove('col-sm-6')
            elements[i].classList.add('col-12')
        }
        
    }
}

// run load of data information after dom loads
document.addEventListener("DOMContentLoaded", function () {
    getLocalFeed();
});

// add event listeners to change layout style
const listButton = document.getElementById('list-button');
const gridButton = document.getElementById('grid-button');

//setup event listeners to trigger on their clicks and run the correct functions
listButton.addEventListener('click', setList)
gridButton.addEventListener('click', setGrid);


