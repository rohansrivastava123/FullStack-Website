import express from 'express'
const app = express();
// example that user requests : - localhost:3000/articles/learn-node
// example that user requests : - localhost:3000/articles/learn-node/upvote
let articlesInfo = [{name:'learn-react',upvotes:0},{name:'learn-node',upvotes:10},{name:'mongodb',upvotes:100}]

app.use(express.json()) //converts the data that is in json format then it gets is converted to req.body

app.put('/api/articles/:name/upvote', (req, res) => {
    const { name } = req.params;
    const article = articlesInfo.find(a => a.name === name);
    if (article) {
        article.upvotes += 1;
        res.send(`The ${name} article now has ${article.upvotes} upvotes`)
    }
    else {
        res.send('article does not exist')
    }
})

app.listen(8000, () => {
    console.log('server is listening on port 8000')
})