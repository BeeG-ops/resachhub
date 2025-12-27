export interface Consultation {
    id: string;
    userId: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}

export interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'user';
}