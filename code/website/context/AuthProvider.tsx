import { createUserWithEmailAndPassword, signOut, signInWithEmailAndPassword, getAuth, UserCredential, updateProfile } from '@firebase/auth';
import { collection, addDoc } from 'firebase/firestore';
import React, { ReactElement, useState, useContext, useEffect } from 'react'
import { auth, firestore } from '../firebase';

interface Props {
    children: Array<ReactElement> | ReactElement;
}

interface Context {
    loading: boolean,
    user: UserCredential["user"] | undefined | null,
    logIn: (email: string, password: string) => Promise<void>,
    register: (displayName: string, email: string, password: string) => Promise<void>,
    signOut: () => Promise<void>
}

const AuthContext = React.createContext<Context>({
    loading: true,
    user: null,
    logIn: async (email, password) => { },
    register: async (displayName, email, password) => { },
    signOut: async () => { },
});

export default function AuthProvider({ children }: Props): ReactElement {
    const [user, setUser] = useState<UserCredential["user"] | undefined>(undefined);
    const [loading, setIsLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(async user => {
            setIsLoading(true);
            try {
                if (user) {
                    setUser(user);
                } 
            } catch (err) { }
            setIsLoading(false)
        });
    }, [])

    const logIn: (email: string, password: string) => Promise<void> =
        async (email, password) => {
            const cred = await signInWithEmailAndPassword(auth, email, password)
            setIsLoading(true);
            const { user: userAuth } = cred;
            setUser(userAuth);
            setIsLoading(false);
        }

    const register: (displayName: string, email: string, password: string) => Promise<void> =
        async (displayName, email, password) => {
            setIsLoading(true);
            const cred = await createUserWithEmailAndPassword(auth, email, password);
            const { user } = cred;
            await updateProfile(user, {
                displayName
            });

            setUser(user);

            await addDoc(collection(firestore, "users", user.uid), {
                charities: []
            });

            setIsLoading(false); 
        }

    const logOut: () => Promise<void> = async () => {
        await signOut(auth);
        setUser(undefined);
    }

    if (loading) return <></>;

    return (
        <AuthContext.Provider value={{ loading, user, logIn, register, signOut: logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth: () => Context = () => useContext(AuthContext);
