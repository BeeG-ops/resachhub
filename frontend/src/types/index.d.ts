export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface ConsultationFormData {
    userId: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}