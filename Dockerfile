FROM hub.tencentyun.com/savory-package/savory-package-vuetify AS VUETIFY_TOOL_CHAIN

COPY ./ /tmp/

WORKDIR /tmp

RUN npm install && npm run build



FROM nginx:1.17.5

MAINTAINER harriszhang@live.cn

COPY --from=VUETIFY_TOOL_CHAIN /tmp/dist /usr/share/nginx/html

COPY  default.conf /etc/nginx/conf.d
