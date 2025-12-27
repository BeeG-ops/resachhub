export interface Consultation {
    id: string;
    userId: string;
    date: Date;
    status: 'scheduled' | 'completed' | 'canceled';
}