import { type User } from 'firebase/auth'
import { createContext, type SetStateAction, useEffect } from 'react'
import { useState } from 'react'
import { createUserDocumentFromAuth, onAuthStateChangedListener } from '../utils/firebase/firebase.utils'

export interface UserContextType {
	currentUser: User | null,
	setCurrentUser: React.Dispatch<SetStateAction<User | null>>
}

export const UserContext = createContext<UserContextType>({
		currentUser: null,
		setCurrentUser: () => null
});

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [currentUser, setCurrentUser] = useState<User | null>(null)
	const value = { currentUser, setCurrentUser}
	
	useEffect(() => {
		const unsubscribe = onAuthStateChangedListener((user) => {
				console.log(user)
			
				if (user) {
	        createUserDocumentFromAuth(user);
				}
				
				setCurrentUser(user)
		})

		return unsubscribe;
	}, [])
	
	return <UserContext.Provider value={value}>
		{children}
	</UserContext.Provider>
}