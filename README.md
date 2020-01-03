# docker-study

## Windows 설치

1. [Docker Desktop 설치](https://www.docker.com/products/docker-desktop)
1. [VM 설정 참고](https://docs.docker.com/docker-for-windows/troubleshoot/#virtualization)
1. [기본 설정 변수 "ErrorActionPreference" 오류 참고](
https://blog.gaerae.com/2019/04/docker-for-windows-troubleshooting.html#6)

## Node 웹 앱 도커라이징

https://nodejs.org/ko/docs/guides/nodejs-docker-webapp/

* Node 버전 : 12 (LTS)
* npm install : RUN npm ci --only=production
  > [CI 모드 설명](https://blog.npmjs.org/post/171556855892/introducing-npm-ci-for-faster-more-reliable)

## Scripts

### build
```bash
docker build -t docker-study .
```

### background run
```bash
docker run -p 3000:3000 -d docker-study
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
```