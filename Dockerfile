FROM node:18.16.0-alpine AS builder
WORKDIR /insurancereact/
COPY . .
RUN npm ci && npm run build 

FROM nginx:1.25-alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /insurancereact/build .
ENTRYPOINT ["sh", "-c", "nginx -g 'daemon off;'"]
