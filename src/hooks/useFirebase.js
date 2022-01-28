import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../firebase.init";
import { useForm } from "react-hook-form";


initializeAuthentication();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const auth = getAuth()
    const googleProvider = new GoogleAuthProvider();


    // google signin
    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false));

    }

    // email password reg and signin

    const handleEmail = e => {
        setEmail(e.target.value);
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }

    const handleEmailPassRegistration = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password mest be at least 6 characters')
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                const user = result.user;
                setUser(user);
                saveUser(email);


            })
            .catch(error => {
                setError(error.message);
            })
            .finally(()=> setIsLoading(false));
    }



    const emailPasswordSignIn = (email, password,e) => {
        
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                setUser(user);
                // console.log(result);
                setError('');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(()=> setIsLoading(false));

            // e.preventDefault();
    }

    // log out
    const logout = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                setUser({});
            })
            .finally(() => setIsLoading(false))
    }


    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            setIsLoading(false);
        })

    }, [auth])

    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data => setAdmin(data.admin))
    },[user.email])

    const saveUser = (email) =>{
        // const { reset } = useForm();
        const user = {email};
        fetch('http://localhost:5000/users',{
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
            
        
        })
    }


    return {
        user,
        admin,
        error,
        signInWithGoogle,
        logout,
        handleEmailPassRegistration,
        handleEmail,
        handlePassword,
        emailPasswordSignIn,
        isLoading


    }
}
export default useFirebase;