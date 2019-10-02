# NodeJS-API
NodeJS &amp; MongoDb API

### API Endpoints
* GET `/api/elements` list all elements
* POST `/api/elements` add a new element
* GET `/api/elements/{id}` retreive a single element
* PUT `/api/elements/{id}` update an element 
* DELETE `/api/elements/{id}` delete an element

Example: http://localhost:8083/{API_ENDPOINT} <br>
You can change the port under index.js!<br><br>

Demo:
http://34.230.50.209:8083/api

Demo: http://node-api.demo.marcosraudkett.com:8080

### Installation

MongoDb Installation:
https://docs.mongodb.com/manual/administration/install-community/

MongoDb Mac OSX Installation:
```
brew tap mongodb/brew
brew install mongodb-community@4.2
```

Before running the development server do not forget to run the MongoDb (Mac OSX):
```
mongod --config /usr/local/etc/mongod.conf
```

```
git clone https://github.com/marcosraudkett/NodeJS-API.git
```

### Development server

Install all dependencies using npm install<br>
Run by using command npm start
```
npm install
npm start
```

### Dependencies
```
"dependencies": {
  "express": "^4.17.1",
  "jsdom": "^15.1.1",
  "mongodb": "^3.3.2",
  "mongoose": "^5.7.1"
},
```


### Example responses
* GET `/api/elements` Response:
```json
{
    "status": "success",
    "message": "elements retrieved successfully",
    "data": [
        {
            "width": 275,
            "main": true,
            "editing": true,
            "_id": "5d9219f8e248cf5ccef07163",
            "create_date": "2019-09-30T15:06:32.135Z",
            "title": "My New App 2",
            "prompt": "New Prompt",
            "colwidths": "86",
            "__v": 0
        }
    ]
}
```

* POST `/api/elements` Response:
```json
{
    "message": "New element created!",
    "data": {
        "width": 275,
        "main": true,
        "editing": true,
        "_id": "5d9219f8e248cf5ccef07163",
        "create_date": "2019-09-30T15:06:32.135Z",
        "title": "My New App 2",
        "prompt": "New Prompt",
        "colwidths": "86",
        "__v": 0
    }
}
```
