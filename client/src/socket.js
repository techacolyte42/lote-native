window.navigator.userAgent = 'ReactNative'; 
import io from 'socket.io-client/socket.io'; 
const socket = io.connect(); 
export default socket; 
