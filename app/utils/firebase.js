import firebase from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyA1VIJEbI1JRTPkNuJUEtoa_FyH1gxUHZE',
	authDomain: 'tenedores-8d5fe.firebaseapp.com',
	projectId: 'tenedores-8d5fe',
	storageBucket: 'tenedores-8d5fe.appspot.com',
	messagingSenderId: '72161736016',
	appId: '1:72161736016:web:f0b29f8cf35623ee61a855',
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
