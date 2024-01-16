FROM quay.io/USMAN-SER/sharkmd
RUN git clone https://github.com/USMAN-SER/Shark-Md /root/USMAN-SER
WORKDIR /root/USMAN-SER/
RUN npm install npm@latest
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]
