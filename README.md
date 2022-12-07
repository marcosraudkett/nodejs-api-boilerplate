# NodeJS-API
A simple NodeJS API broilerplate using MongoDb & ExpressJs.

## Getting started

### Environment variables
Make a copy of `.env.example` as `.env`:
```
cp .env.example .env
```

### Docker 💪🏽

Start with docker-compose:
```
docker-compose up -d
```

### Locally:
```
...to be added...
```

## Endpoints
* GET `/api/contacts` list all
* POST `/api/contacts` add new
* GET `/api/contacts/{id}` retreive single 
* PUT `/api/contacts/{id}` update 
* DELETE `/api/contacts/{id}` delete

You can change the port under index.js!<br><br>

## Installation

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
git clone https://github.com/marcosraudkett/NodeJS-API-Broilerplate.git
```

## Development server

Install all dependencies using npm install<br>
Run by using command npm start
```
npm install
npm start
```