pipeline {
  agent any
  environment {
    DIGITALOCEAN_ACCESS_TOKEN=credentials('do-api-token')
  }
  stages {
    stage('Deploy') {
      steps {
        sh 'doctl sls deploy .'
      }
    }
    stage('Get URL') {
      steps {
        sh 'doctl sls fn get sample/hello --url'
      }
    }
  }
}
