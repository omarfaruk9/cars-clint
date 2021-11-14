import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";


// Initialize firebase app
initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");

    const [isLoding, setIsLoading] = useState(true);

    // Create new user with Gmail 
    const registerNewUser = (email, password, name, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                handleAdduser(result.user?.email, result.user?.displayName)
                handleName(name)
                // console.log(result.user);
                history.push('/login')
                setError('');
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // add user database 
    const handleAdduser = (email, userName) => {
        // alert(email, userName, method)
        const newUser = { email, userName };

        fetch(`https://frozen-anchorage-07301.herokuapp.com/users`, {
            method: 'POST',
            headers: {
                'context-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    // login user 
    const loginUser = (email, password, location, history) => {
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setError('')
            })
            .catch((error) => {
                setError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // users state 
    useEffect(() => {
        const unsubscrub = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscrub;
    }, []);

    const handleName = (name) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: "https://www.kindpng.com/picc/m/163-1636340_user-avatar-icon-avatar-transparent-user-icon-png.png"
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            // An error occurred
            // ...
        });
    }

    // log out user 
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        handleName,
        registerNewUser,
        loginUser,
        isLoding,
        logOut,
    }
}
export default useFirebase;