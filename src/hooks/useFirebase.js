import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import initializeAuthentication from "../firebase.init";



initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    // google signin
    const signInWithGoogle = () => {
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false));

    }



    const handleEmailPassRegistration = (email, password, name) => {
        setIsLoading(true);

        if (password.length < 6) {
            setError('password mest be at least 6 characters')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                const newUser = { email, displayName: name }; //result.user,
                setUser(newUser);
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {
                    setError(error.message);
                })

                saveUser(email);


            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }



    const emailPasswordSignIn = (email, password) => {
        setIsLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // log out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        })

    }, [auth])

    useEffect(() => {
        fetch(`https://desolate-scrubland-90880.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const saveUser = (email) => {
        // const { reset } = useForm();
        const user = { email };
        fetch('https://desolate-scrubland-90880.herokuapp.com/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)


        })
    }


    return {
        user,
        admin,
        error,
        signInWithGoogle,
        logout,
        handleEmailPassRegistration,
        emailPasswordSignIn,
        isLoading


    }
}
export default useFirebase;