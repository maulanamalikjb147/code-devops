pipeline {
    agent any

    environment {
        // BITBUCKET_CRED = credentials('gitlabcred')
        imagename = "registry.gitlab.com/candakurniawan/belajar-devops" // Ganti URL dan nama gambar sesuai dengan yang sesuai di GitLab Container Registry
    }
    //stage clone repo
    stages {
        stage('Clone Repository') {
            steps {
                checkout([$class: 'GitSCM',
                    branches: [[name: "${params.Branch}"]],
                    userRemoteConfigs: [[credentialsId: 'bitbucketcred',
                        url: "https://gitlab.com/candakurniawan/belajar-devops.git"]],
                    poll: true
                ])
            }
        }
    //stage build image
        stage('Build Image') {
            steps {
                script {
                    docker.build("${imagename}/${params['service-name']}:${params['versionimage']}", "./${params['service-name']}")
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

        stage('Update Repo Gitlab') {
            steps {
                script {
                    sh "cd /var/lib/jenkins/repogitlab/flux && git checkout main"
                    sh "cd /var/lib/jenkins/repogitlab/flux && git pull"
                    sh "cd /var/lib/jenkins/repogitlab/flux && git checkout ${params['Environment']}"
                    sh "cd /var/lib/jenkins/repogitlab/flux && git pull"
                    sh "sed -i '/        image: /s/.*/        image:/' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/deployment.yaml" //remove taging image
                    sh "sed -i -r 's#image:.*#image: ${imagename}/${params['service-name']}:${params['versionimage']}#' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/deployment.yaml" //change name image
                    sh "sed -i '/        namespace: /s/.*/        namespace:/' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/deployment.yaml" //remove namespace deployment
                    sh "sed -i -r 's#namespace:.*#namespace: ${params['Environment']}#' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/deployment.yaml" //change namespace deployment
                    sh "sed -i '/        namespace: /s/.*/        namespace:/' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/service.yaml" //remove namespace services
                    sh "sed -i -r 's#namespace:.*#namespace: ${params['Environment']}#' /var/lib/jenkins/repogitlab/flux/clusters/my-cluster/apps/${params['service-name']}/service.yaml" //change namespace deployment
                    sh "git config --global user.name 'JenkinsCI'"
                    sh "git config --global user.email 'jenkins@admin.com'"
                    sh "cd /var/lib/jenkins/repogitlab/flux && git add ."
                    sh "cd /var/lib/jenkins/repogitlab/flux && git commit -m 'Update from JenkinsCI'"   
                    sh "cd /var/lib/jenkins/repogitlab/flux && git push"
                    //sh "cd /var/lib/jenkins/repogitlab/flux && git merge main"
                }
            }
        }

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }
    }
}
