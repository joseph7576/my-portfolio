pipeline {
    agent any

    stages{
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