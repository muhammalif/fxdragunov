
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Dashboard = () => {
    return (
        <div className="flex min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
            <Sidebar />
            <div className="flex-1 lg:ml-64">
                <div className="p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
