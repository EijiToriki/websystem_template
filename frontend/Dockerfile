FROM node:16-alpine3.17

WORKDIR /frontend
COPY . .

RUN npm install axios --save
RUN npm install @mui/icons-material
RUN npm install @mui/material @emotion/react @emotion/styled
RUN npm install react-router-dom
RUN npm install @react-email/render @sendgrid/mail
RUN npm install --save-dev @babel/plugin-proposal-private-property-in-object

CMD ["npm", "run", "start"]