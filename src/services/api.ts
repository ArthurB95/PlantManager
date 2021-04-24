import axios from 'axios';

//LAN: json-server ./src/services/server.json --host 192.168.0.17 --port 3333 --delay 700
//LOCAL: json-server ./src/services/server.json --host 127.0.0.1 --port 3333 --delay 700
//LAN: http://192.168.0.17:3333

const api = axios.create({
  baseURL: 'http://192.168.0.17:3333'
});

export default api;