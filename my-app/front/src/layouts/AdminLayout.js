import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Sidebar from '../components/Sidebar';

const AdminLayout = ({ children }) => {
    return (
        <div>
            <Navigation />
            <Logo />
            <Sidebar />
            <main>{ children }</main>
        </div>
    );
};

export default AdminLayout;