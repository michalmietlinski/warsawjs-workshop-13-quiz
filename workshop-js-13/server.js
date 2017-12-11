const express = require('express')
const bodyParser = require('body-parser')

const app = express();
const HTTP_PORT = 3000

app.post( '/api/questions', ( req, res ) => {
    res.json( [{
        id: "1",
        title: "best car?",
        answers: [{
            id: "1",
            content: "ford"
        }, {
            id: "2",
            content: "fiat"
        }, {
            id: "3",
            content: "tesla"
        }, {
            id: "4",
            content: "GM"
        }]
    },
    {
        id: "2",
        title: "Worst car?",
        answers: [{
            id: "1",
            content: "mazda"
        }, {
            id: "2",
            content: "polonez"
        }, {
            id: "3",
            content: "bugatti"
        }, {
            id: "4",
            content: "ferrari"
        }]
    }
    ]
  )
} )

app.listen(HTTP_PORT, () => {
    console.log( `app listen on port ${  HTTP_PORT }` )
} )