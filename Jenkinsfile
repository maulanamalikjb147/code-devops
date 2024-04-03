pipeline {
    environment {
        imagename = "registry.gitlab.com/candakurniawan/belajar-devops"
        registryCredential = 'gitlabcred'
    }
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git(url: 'https://github.com/maulanamalikjb147/code-devops.git', branch: "${params.Branch}", credentialsId: 'tokengithub')
            }
        }
        stage('Building image') {
            steps {
                script {
                    dir("${params['service-name']}") {
                        sh "docker build --no-cache -t $imagename/${params['service-name']}:${params['versionimage']} ."
                    }
                }
            }
        }
        stage('Push to registry') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'gitlabcred', usernameVariable: 'GITLAB_REGISTRY_USERNAME', passwordVariable: 'GITLAB_REGISTRY_PASSWORD')]) {
                        sh "docker login -u $GITLAB_REGISTRY_USERNAME -p $GITLAB_REGISTRY_PASSWORD registry.gitlab.com"
                        sh "docker push ${imagename}/${params['service-name']}:${params['versionimage']}"
                        sh "docker rmi ${imagename}/${params['service-name']}:${params['versionimage']}"
                    }
                }
            }
        }
        stage('Clone Additional Repository') {
            steps {
                git(url: 'https://gitlab.com/candakurniawan/belajar-devops.git', branch: "${params['Environment']}", credentialsId: 'gitlabcred')
            }
        }
        stage('Update Manifest Kubernetes') {
            steps {
                dir(apps/"${params['service-name']}")
                sh "sed -i '/        image: /s/.*/        image: ${imagename}/${params['service-name']}:${params['versionimage']}/' deployment.yaml" //updateImage
                sh "sed -i 's/namespace: .*/namespace: ${params['Environment']}/' deployment.yaml" //updateNamespace
                sh "sed -i '/^ *name: /s/.*/  name: ${params['service-name']}/' deployment.yaml "
                sh "sed -i '/        image: /s/.*/        image: ${imagename}/${params['service-name']}:${params['versionimage']}/' service.yaml" //updateImage
                sh "sed -i 's/namespace: .*/namespace: ${params['Environment']}/' service.yaml" //updateNamespace
                sh "sed -i '/^ *name: /s/.*/  name: ${params['service-name']}/' service.yaml "
                sh "git config --global user.name 'JenkinsCI'"
                sh "git config --global user.email 'jenkins@admin.com'"
                sh "git add ."
                sh "git commit -m 'Update from JenkinsCI'"   
                sh "git push"
            }
        }
        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
    }
}
