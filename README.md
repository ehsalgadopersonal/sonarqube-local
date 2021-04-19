# SONARQUBE LOCAL

# Dependencias

1. Dock and docker-compose
2. Node 12 or higher

## Commands

`npm run sonar:up`

1. Uses docker-compose to run a Sonarqube locally 
2. Open `http://localhost:9000/` to see if Sonaqube is running correctly

`npm run sonar`

1. Runs tests and sends project quality information to sonarqube (including test coverage)

PS: We should run this command only when you are sure sonaqube is already running on docker.  

