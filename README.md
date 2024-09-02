## health check

curl -X GET http://localhost:3000/health-check/database

## create user

curl -X POST http://localhost:3000/user -H "Content-Type: application/json" -d '{"email":"felipe.soares.fernandes@gmail.com", "firstname":"Felipe", "lastname":"Fernandes"}'

## create category

curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"":"", "":"", "":""}'

## create description

curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"":"", "":"", "":""}'

## create operation

curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"":"", "":"", "":""}'

## create transaction

curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"":"", "":"", "":""}'
