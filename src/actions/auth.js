// import { firebase, googleAuthProvider } from '../firebase/firebase';
import checkIfLoggedIn from '../authorization/check-if-logged-in';

export const login = (id) => {
    return {
        type: 'LOGGED_IN',
        id
    };
};

// export const startLogin = () => {
//     return () => {
//         return firebase.auth().signInWithPopup(googleAuthProvider);
//     };
// };

// export const startLogout = () => {
//     return () => {
//         return firebase.auth().signOut();
//     };
// };

export const logout = () => ({
    type: 'LOGOUT'
});