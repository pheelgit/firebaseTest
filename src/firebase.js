// Import the functions you need from the SDKs you need
import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyA1p--FzXWhlEs3gGql5JbIFobIZyni73k",
	authDomain: "test-todos-fc7f3.firebaseapp.com",
	databaseURL:
		"https://test-todos-fc7f3-default-rtdb.europe-west1.firebasedatabase.app",
	projectId: "test-todos-fc7f3",
	storageBucket: "test-todos-fc7f3.appspot.com",
	messagingSenderId: "226476163139",
	appId: "1:226476163139:web:25151ababbb846d4bb14f6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
