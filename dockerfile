FROM node

WORKDIR /

COPY . /

RUN npm install playwright

RUN npx playwright install-deps

RUN npx playwright test wks-login