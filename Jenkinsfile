pipeline {
    agent any

    stages{
        stage('test some stuff') {
            steps {
                sh '''
                    docker version
                    docker info
                    docker compose version
                    curl --version
                    docker ps -a
                    docker compose ps
                '''
            }
        }

        stage('build') {
            steps {
                sh 'docker-compose -f docker-compose.prod.yml build --no-cache'
            }
        }

        stage('deploy'){
            steps {
                sh 'docker-compose -f docker-compose.prod.yml up -d'
            }
        }
    }
}