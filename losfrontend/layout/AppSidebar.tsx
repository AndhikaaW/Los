import { Button } from 'primereact/button';
import AppMenu from './AppMenu';
import { LogOut} from 'lucide-react';
// import { Button } from 'react-bootstrap';

const AppSidebar = () => {
    return (
        <div className='flex flex-column justify-content-between h-full pb-3'>
            <AppMenu />
            <Button
                icon={<LogOut className="mr-2" size={16} />}
                label="Logout"
                className="p-button-rounded-sm p-button-danger p-button-text"
                onClick={() => window.location.href='/auth/login'}
            />
        </div>
    );
};

export default AppSidebar;
