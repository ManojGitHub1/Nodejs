const express = require('express');
const path = require('path')

const app = express();
const publicPath = path.join(__dirname, 'public')

// use method and static gives .html extension in url so we use get
// app.use(express.static(publicPath));

app.set('view engine', 'ejs')

app.get('',(_, res) => {
    res.sendFile(`${publicPath}/index.html`)
})

app.get('/about',(_, res) => {
    res.sendFile(`${publicPath}/about.html`)
})

app.get('/help',(_, res) => {
    res.sendFile(`${publicPath}/help.html`)
})

// 404 page
app.get('*',(_, res) => {
    res.sendFile(`${publicPath}/pnf.html`)
})

app.get('/profile',(_, res) => {
    const user={
        name:'Peter',
        email:'test@gmail.com',
        country:'USA'
    }
    res.render(__dirname+'/views/profile.ejs', {user});
})



app.listen(4000);
