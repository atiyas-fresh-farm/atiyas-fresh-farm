'use client'

import { getAuthorizationUrl, getLogoutUrl } from "@/components/customer/actions";
import { createContext, useContext, useState, useEffect } from 'react';
//import { useRouter } from 'next/navigation';

type customerTokenType = {
  accessToken: string;
  expiresIn: number;
  idToken: string;
  refreshToken: string;
}

type AuthContextType = {
  isAuthenticated: boolean;
  loginUrl: null|string;
  logoutUrl: null|string;
  accessToken: null|string;
  expiresIn: null|number;
  idToken: null|string;
  refreshToken: null|string;
  setCustomerToken: (customerToken: customerTokenType) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [ isAuthenticated, setIsAuthenticated ] = useState(false);
  const [ loginUrl, setLoginUrl ] = useState<string | null>(null);
  const [ logoutUrl, setLogoutUrl ] = useState<string | null>(null);
  const [ accessToken, setAccessToken ] = useState<string | null>(null);
  const [ expiresIn, setExpiresIn ] = useState<number | null>(null);
  const [ idToken, setIdToken ] = useState<string | null>(null);
  const [ refreshToken, setRefreshToken ] = useState<string | null>(null);

  //const router = useRouter();

  useEffect(() => {
    // Check if the user is authenticated on component mount
    checkAuthStatus();
    getAuthUrls();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/check');
      if (response.ok) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (error) {
      console.error('Error checking auth status:', error);
      setIsAuthenticated(false);
    }
  };

  const getAuthUrls = async () => {
    try {
      setLoginUrl(await getAuthorizationUrl());
      setLogoutUrl(await getLogoutUrl());
    } catch (error) {
      console.error('Error getting auth URLs:', error);
    }
  };

  const setCustomerToken = (customerToken: customerTokenType) => {
    setAccessToken(customerToken.accessToken);
    setExpiresIn(customerToken.expiresIn);
    setIdToken(customerToken.idToken);
    setRefreshToken(customerToken.refreshToken);
    setIsAuthenticated(true);
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUrl, logoutUrl, accessToken, expiresIn, idToken, refreshToken, setCustomerToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};