pipeline {
  agent any
  environment {
    DIGITALOCEAN_ACCESS_TOKEN=credentials('do-api-token')
  }
  stages {
    stage('Install') {
      steps {
        sh 'doctl sls install'
      }
    }
    stage('Connect') {
      steps {
        sh 'doctl sls connect'
      }
    }
    stage('Deploy') {
      steps {
        sh 'doctl sls deploy .'
      }
    }
    stage('Get URL for hello') {
      steps {
        sh 'doctl sls fn get sample/hello --url'
      }
    }
    stage('Get URL for goodbye') {
      steps {
        sh 'doctl sls fn get sample/goodbye --url'
      }
    }
  }
  post {
    always {
      sh 'doctl sls uninstall'
    }
  }
}
