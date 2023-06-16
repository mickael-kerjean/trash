FROM alpine:latest
RUN uname -m && \
    uname -a && \
    uname -i
RUN apk add git && \
    git clone --depth 1 https://github.com/mickael-kerjean/filestash

