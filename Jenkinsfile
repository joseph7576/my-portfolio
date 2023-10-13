pipeline {
    agent any

    stages{
        stage('test some stuff') {
            steps {
                // ssh -o StrictHostKeyChecking=no -i $SSH_PRIVATE_KEY joe@65.109.197.224
                sshagent(credentials: ['vps_joeho']) {
                    sh 'ssh -o StrictHostKeyChecking joe@65.109.197.224 sh script.sh'
                }
            }
        }

    }
}