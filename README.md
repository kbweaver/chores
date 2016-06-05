# Chores

One day, this might be an online chore chart to use with your roommates, family, etc.

## Pre-requisites

* Docker

## Installation

```
docker-compose build
docker-compose run server rake db:create
docker-compose up
```

## Testing

```
docker-compose run client npm test
docker-compose run server rake test
```
