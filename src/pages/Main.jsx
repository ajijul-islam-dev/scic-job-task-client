import { Outlet } from 'react-router-dom';
import { Nav } from '../Components/Navbar/Nav';
import { Footer } from '../Components/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;