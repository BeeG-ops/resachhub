export class SchedulingService {
    private consultations: { id: number; userId: number; date: Date; status: string }[] = [];
    private nextId: number = 1;

    scheduleConsultation(userId: number, date: Date): { id: number; userId: number; date: Date; status: string } {
        const consultation = {
            id: this.nextId++,
            userId,
            date,
            status: 'scheduled'
        };
        this.consultations.push(consultation);
        return consultation;
    }

    cancelConsultation(id: number): boolean {
        const index = this.consultations.findIndex(consultation => consultation.id === id);
        if (index !== -1) {
            this.consultations[index].status = 'canceled';
            return true;
        }
        return false;
    }

    getConsultations(): { id: number; userId: number; date: Date; status: string }[] {
        return this.consultations;
    }
}