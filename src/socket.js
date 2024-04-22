import { io } from "socket.io-client";
const URL = process.env.NODE_ENV=== 'production' ? 'https://artify-server-3fzh.onrender.com' : 'http://localhost: 5000'
export const socket = io(URL);