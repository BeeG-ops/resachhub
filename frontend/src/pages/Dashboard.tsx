import React from 'react';
import { ConsultationForm } from '../components/ConsultationForm';
import { useAuth } from '../hooks/useAuth';

const Dashboard: React.FC = () => {
    const { user } = useAuth();

    return (
        <div>
            <h1>Welcome to Your Dashboard, {user?.name}</h1>
            <h2>Manage Your Consultations</h2>
            <ConsultationForm />
        </div>
    );
};

export default Dashboard;