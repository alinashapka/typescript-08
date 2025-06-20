export interface Contact {
    id: string;
    name: string;
    number: string;
};

export interface NewContact {
  name: string;
  number: string;
};

export interface Contact extends NewContact {
  id: string;
};

export interface ContactsState {
    items: Contact[];
    loading: boolean;
    error: boolean;
};

export interface AuthState {
    user: User;
    token: string | null;
    isLoggedIn: boolean;
    isRefreshing: boolean;
};

export interface User {
    name: string | null;
    email: string | null;
};

export interface AuthResponse {
    user: User;
    token: string;
};

export interface RefreshResponse {
    name: string;
    email: string;
};