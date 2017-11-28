import customAxios from '../network/axios';

const checkIfLoggedIn = async () => {
    let payload = {
        loggedIn: false,
        id: ''
    };

    try {
        const currentUserResponse = await customAxios.get('/users/me');

        if (currentUserResponse && currentUserResponse.status === 200) {
            payload = {
                loggedIn: true,
                id: currentUserResponse.data._id
            };
        }
    } catch (err) {
        console.log('Error checking for user\n', err);
    }

    return payload;
}

export default checkIfLoggedIn;