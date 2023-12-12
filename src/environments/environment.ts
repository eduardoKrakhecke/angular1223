import { env } from "../../env";

export const environment = {
  //produção
  production: true,
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  BASE_URL_WEBSOCKET: 'wss://ws.postman-echo.com/raw',
  BASE_URL_CEP: 'https://viacep.com.br/ws',
  firebaseConfig: {
    apiKey: env.FIREBASE_API_KEY,
    authDomain: env.FIREBASE_AUTH_DOMAIN,
    projectId: env.FIREBASE_PROJECTID,
    storageBucket: env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: env.FIREBASE_MESSAGING_SENDER_ID,
    appId: env.FIREBASE_APP_ID,
    measurementId: env.FIREBASE_MEASUREMENT_ID,
  }
};
