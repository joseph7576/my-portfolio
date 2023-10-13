pipeline {
    agent any

    stages{
        stage('One Stage Build & Deploy') {
            steps {
                // ssh -o StrictHostKeyChecking=no -i $SSH_PRIVATE_KEY joe@65.109.197.224
                sshagent(credentials: ['vps_joeho']) {
                    sh "ssh -o StrictHostKeyChecking=no joe@65.109.197.224 'bash -s' < script.sh"
                }
            }
        }

    }
}