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
        script {
          def url = sh(script:'doctl sls fn get sample/hello --url',returnStdout:true).trim();
          sh(script:"curl $url?name=Jenkins");
        }
      }
    }
    stage('Get URL for goodbye') {
      steps {
        script {
          def url = sh(script:'doctl sls fn get sample/goodbye --url',returnStdout:true).trim();
          sh(script:"curl $url?name=Jenkins");
        }
      }
    }
  }
  post {
    always {
      sh 'doctl sls uninstall'
    }
  }
}
