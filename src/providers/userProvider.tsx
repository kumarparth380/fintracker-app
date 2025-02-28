import { User, UserContextType } from '@/types/user';
import {
  getStoredUser,
  removeStoredUser,
  setStoredUser,
} from '@/utils/localStorage';
import { createContext, useEffect, useState } from 'react';

interface UserProviderProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined,
);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const storedUser = getStoredUser();
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const updateUser = (fields: Partial<User>) => {
    setUser((prevUser) => {
      const updatedUser = { ...prevUser, ...fields };
      setStoredUser(updatedUser);
      return updatedUser;
    });
  };

  const clearUser = () => {
    setUser(null);
    removeStoredUser();
  };

  return (
    <UserContext.Provider value={{ user, updateUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};
