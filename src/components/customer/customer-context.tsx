'use client';

import type { CustomerToken } from '@/lib/shopify/types';
import React, { createContext, useContext  } from 'react';

type CustomerContextType = {
  accessToken: string;
  expiresIn: string;
  idToken: string;
  refreshToken: string;
  email: string|null;
};

const CustomerContext = createContext<CustomerContextType | undefined>(undefined);

// Updated
export function CustomerProvider({
  children,
  customerPromise
}: {
  children: React.ReactNode;
  customerPromise: Promise<CustomerToken | undefined>;
}) {

  const value = {...customerPromise, email: null};

  return <CustomerContext.Provider value={value}>{children}</CustomerContext.Provider>;
}

// Updated
export function useCustomer() {
  const context = useContext(CustomerContext);
  if (context === undefined) {
    throw new Error('useCustomer must be used within a CustomerProvider');
  }
  return context;
}