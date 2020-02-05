# Docker

## Windows 설치

1. [Docker Desktop 설치](https://www.docker.com/products/docker-desktop)
1. [VM 설정 참고](https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization)
1. [기본 설정 변수 "ErrorActionPreference" 오류 참고](
https://blog.gaerae.com/2019/04/docker-for-windows-troubleshooting.html#6)

## Node 웹 앱 도커라이징

https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/

* Node 버전 : 12 (LTS)
* npm install : RUN npm ci
  > [CI 모드란?](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

## Docker-Compose를 이용한 다중 환경 구성하기

* https://docs.docker.com/compose/
* [React,MongoDB,Express,Nginx 도커 개발 환경 구성하기](https://javaexpert.tistory.com/1013)
* [도커 컴포즈를 활용하여 완벽한 개발 환경 구성하기](https://www.44bits.io/ko/post/almost-perfect-development-environment-with-docker-and-docker-compose)
* [간단한 Docker + Mongodb/Redis/Nginx 설정](https://gompro.postype.com/post/1735800)

> 현재.env 파일 이동과 app DB 생성은 수동 처리 필요


## Docker 명령어 정리

### Compose 실행 & 중단
```bash
docker-compose up --build # --build는 내부 Dockerfile 변경시 다시 빌드 실행
docker-compose down
```

### build
```bash
docker build -t docker-study:tag .
```

### background run & stop
```bash
docker run --name node -p 3000:3000 docker-study:0.0.1
docker stop node
```

### etc
``` bash
# 이미지 확인
docker images 

# 컨테이너 ID 확인
docker ps

# 앱 로그 출력
docker logs <container id>

# 컨테이너 접근
docker exec -it <container id> /usr/app

# 이미지 및 컨테이너 전체 삭제
docker rmi $(docker images -q) --force
```

## 참고 문서

* [가장 빨리 만나는 Docker](http://pyrasis.com/docker.html)
* [Docker 로 Node.js 배포하기](https://seokjun.kim/docker-nginx-node/)
* [Github action 을 이용해서 AWS ECS 배포 자동화](https://velog.io/@q00/Github-action-aws-ecs-Github-CICD-55k38sf8ik)
* [[Github Action]AWS S3에 React 프로젝트 배포하기](https://velog.io/@loakick/Github-Action-AWS-S3%EC%97%90-React-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EB%B0%B0%ED%8F%AC%ED%95%98%EA%B8%B0)