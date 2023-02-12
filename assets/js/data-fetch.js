const express = require('express');
const Parser = require('rss-parser');
const fs = require('fs');

const app = express();
const dataToWrite = [];
const feedUrl = 'https://volumes.lib.utk.edu/news/feed/'

let parser = new Parser({
    headers: { 'User-Agent': 'Chrome' }
});

const writeToFile = (data) => {
    try {
        fs.writeFileSync('../../feed.json', JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }
}

const fetchRssFeed = async (feedUrl) => {
    let feed = await parser.parseURL(feedUrl);

    return feed.items.map(item => {
        let itemData = {
            title: item.title,
            link: item.link,
            date: item.pubDate,
            contentSnippet: item.contentSnippet
        }
        dataToWrite.push(itemData);
        return { title: item.title };
    })
}


app.get('/api/news', async (req, res) => {
    await fetchRssFeed(feedUrl)
        .then(data => {
            res.status(200).json(data);
        })
        .catch(err => {
            res.status(500).json({
                status: 'error',
                message: 'No news found'
            })
        })
        writeToFile(dataToWrite)
});

app.listen(3000, () => {
    console.log("Server is running on port 3000")
});
