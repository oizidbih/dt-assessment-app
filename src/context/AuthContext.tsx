import { createContext, useContext, useState, type ReactNode } from 'react';

export type UserRole = 'admin' | 'focal_point' | 'assessor' | 'executive' | 'jury';

export interface User {
    id: string;
    name: string;
    role: UserRole;
    email: string;
}

interface AuthContextType {
    user: User | null;
    login: (role: UserRole) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const login = (role: UserRole) => {
        // Mock user data based on role
        const mockUser: User = {
            id: '1',
            name: `Mock ${role.replace('_', ' ').toUpperCase()}`,
            role: role,
            email: `${role}@mcit.gov.qa`,
        };
        setUser(mockUser);
    };

    const logout = () => {
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
