import { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import AppMenu from './AppMenu';
import { ChevronDown, LogOut, Menu, User } from 'lucide-react';
// import { Button } from 'react-bootstrap';

const AppSidebar = () => {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        const userInfo = localStorage.getItem('user-info');
        if (userInfo) {
            const parsedUserInfo = JSON.parse(userInfo);
            setUser({ name: parsedUserInfo.name });
        }
    }, []);

    // console.log(user);

    const handleLogout = () => {
        window.location.href = '/auth/login';
    };

    return (
        <div className='flex flex-column justify-content-between h-full pb-3'>
            <AppMenu />

            <div className="mt-auto">

                {user && (
                    <div
                        className="flex align-items-center justify-content-between p-2 border-round-lg" style={{ backgroundColor: '#FAF0F0' }}>
                        <div className='flex align-items-center pl-4'>
                            <User className="mr-2" size={20} />
                            <span>{user.name}</span>
                        </div>
                        <div>
                            <Button
                                icon={<LogOut className="mr-2" size={16} />}
                                className="p-button-rounded-sm p-button-danger p-button-text"
                                onClick={handleLogout}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AppSidebar;
