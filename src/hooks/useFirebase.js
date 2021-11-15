import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import initializeAuthentication from "../pages/Login/Firebase/Firebase.init";


// Initialize firebase app
initializeAuthentication();

const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [error, setError] = useState("");
    const [isAdmin, setIsAdmin] = useState(false);
    // console.log(isAdmin);
    const [isLoding, setIsLoading] = useState(true);



    // Create new user with Gmail 
    const registerNewUser = (email, password, name, location, history) => {
        // console.log(email, name);
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                handleName(name)
                handleAdduser(email, name)
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
        // console.log(email, userName);
        const newUser = { email, userName }
        // console.log(newUser);
        fetch("https://frozen-anchorage-07301.herokuapp.com/users", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then()
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

    useEffect(() => {
        fetch(`https://frozen-anchorage-07301.herokuapp.com/admin/${user.email}`)
            .then(res => res.json())
            .then(result => {
                console.log(result);
                setIsAdmin(result)
                // console.log(result.admin);
            })
    }, [user.email]);

    return {
        user,
        handleName,
        registerNewUser,
        loginUser,
        isLoding,
        logOut,
        isAdmin
    }
}
export default useFirebase;