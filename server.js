const app = require('express')();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const NodeCache = require("node-cache");
const myCache = new NodeCache();
const MockData = require('./MockData/MockData');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let Data = [];
Data = myCache.get('Data');

if (Data === undefined) {
    myCache.set("Data", MockData, 0);
    Data = myCache.get('Data');
}

app.get('/api/products/:SearchText', (req, res) => {
    if (Data.length > 0) {
        const tempData = Data.filter(x => x.title.toLowerCase() === req.params.SearchText);
        if (tempData.length > 0) {
            res.send({ Message: 'We Have Result', Product: tempData[0] });
        } else {
            const emptyObj = {
                id: 'Not Found',
                title: 'Not Found',
                body: 'Not Found',
                userId: 'Not Found'
            };
            res.send({ Message: 'No Result', Product: emptyObj });
        }
    } else {
        const emptyObj = {
            id: 'Not Found',
            title: 'Not Found',
            body: 'Not Found',
            userId: 'Not Found'
        };
        res.send({ Message: 'No Result', Product: emptyObj });
    }
});

app.get('/api/products/:userToken/:Counter', (req, res) => {
    const tempCounter = parseInt(req.params.Counter);
    const tempUserData = myCache.get(req.params.userToken);
    let tempData = [...Data];
    if (tempUserData === undefined) {
        if (Data.length > (tempCounter + 10)) {
            tempData = tempData.slice(tempCounter, tempCounter + 10);
            myCache.set(req.params.userToken, tempCounter + 10, 86400);
            res.send({ Message: 'we got more data', DataToAdd: tempData, Counter: tempCounter + 10 });
        } else {
            tempData = tempData.slice(tempCounter, Data.length);
            myCache.set(req.params.userToken, Data.length, 86400);
            res.send({ Message: 'no more data', DataToAdd: tempData, Counter: 0 });
        }
    } else {
        if (Data.length > tempUserData + 10) {
            tempData = tempData.slice(tempCounter, tempCounter + 10);
            myCache.set(req.params.userToken, tempCounter + 10, 86400);
            res.send({ Message: 'we got more data', DataToAdd: tempData, Counter: tempCounter + 10 });
        } else {
            tempData = tempData.slice(tempCounter, Data.length);
            myCache.set(req.params.userToken, Data.length, 86400);
            res.send({ Message: 'no more data', DataToAdd: tempData, Counter: 0 });
        }
    }


});


app.get('/api/products', function (req, res) {
    if (Data === undefined || Data === null) {
        res.send({ Message: 'there is no data', Data: [], Counter: -1, DataToAdd: [] });
    } else {
        if (Data.length > 0 && Data.length < 11) {
            res.send({ Message: 'no more data', Data: Data, Counter: 0, DataToAdd: [] });
        } else if (Data.length > 10) {
            let tempData = [...Data];
            tempData = tempData.slice(0, 10);
            res.send({ Message: 'we got more data', Data: tempData, Counter: 10, DataToAdd: [] });
        }
    }
});

http.listen(65500, function () {
    console.log('listening on *:65500');
});