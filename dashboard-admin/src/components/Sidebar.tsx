import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { 
    Home, 
    FileText, 
    ChevronDown, 
    LogOut, 
    Menu,
    X
} from 'lucide-react';
import logo from '../assets/logo.png';

const Sidebar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    const isActiveRoute = (path: string) => {
        return location.pathname === path || location.pathname.startsWith(path);
    };

    const MenuItems = () => (
        <>
            <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-center">
                    <img src={logo} alt="FXDragunov Logo" className="h-8" />
                </div>
            </div>

            <nav className="flex-1 p-4 space-y-2">
                <Link
                    to="/dashboard/home"
                    className={`flex items-center p-3 rounded-lg transition-all duration-200 group ${
                        isActiveRoute('/dashboard/home')
                            ? 'bg-white/20 text-white shadow-lg'
                            : 'text-blue-100 hover:bg-white/10 hover:text-white'
                    }`}
                >
                    <Home className="w-5 h-5 mr-3" />
                    Dashboard
                </Link>

                <div className="space-y-1">
                    <button
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                            isActiveRoute('/dashboard/articles')
                                ? 'bg-white/20 text-white shadow-lg'
                                : 'text-blue-100 hover:bg-white/10 hover:text-white'
                        }`}
                    >
                        <ChevronDown 
                            className={`w-5 h-5 mr-3 transition-transform duration-200 ${
                                isDropdownOpen ? 'rotate-180' : ''
                            }`} 
                        />
                        Data
                    </button>
                    
                    <div className={`ml-8 space-y-1 transition-all duration-200 ${
                        isDropdownOpen ? 'opacity-100 max-h-20' : 'opacity-0 max-h-0 overflow-hidden'
                    }`}>
                        <Link
                            to='/dashboard/articles'
                            className={`flex items-center p-2 pl-4 rounded-lg transition-all duration-200 ${
                                isActiveRoute('/dashboard/articles')
                                    ? 'bg-white/10 text-white'
                                    : 'text-blue-100 hover:bg-white/5 hover:text-white'
                            }`}
                        >
                            <FileText className='w-4 h-4 mr-3' />
                            Artikel
                        </Link>
                    </div>
                </div>
            </nav>

            <div className="p-4 border-t border-white/10">
                <button
                    onClick={handleLogout}
                    className='w-full flex items-center p-3 rounded-lg text-red-300 hover:bg-red-500/20 hover:text-red-200 transition-all duration-200'
                >
                    <LogOut className='w-5 h-5 mr-3' />
                    Keluar
                </button>
                <div className="mt-4 text-center">
                    <p className="text-xs text-blue-200/60">© 2024 FXDragunov Indonesia</p>
                </div>
            </div>
        </>
    );

    return (
        <>
            {/* Mobile menu button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-blue-600 text-white rounded-lg shadow-lg"
            >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Mobile sidebar overlay */}
            {isMobileMenuOpen && (
                <div 
                    className="lg:hidden fixed inset-0 bg-black/50 z-40"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Sidebar */}
            <div className={`fixed left-0 top-0 h-full w-64 bg-gradient-to-b from-blue-600 to-blue-800 shadow-2xl transform transition-transform duration-300 ease-in-out z-40 ${
                isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
            } lg:translate-x-0 flex flex-col`}>
                <MenuItems />
            </div>
        </>
    );
};

export default Sidebar;
