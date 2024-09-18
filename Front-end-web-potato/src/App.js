import { Outlet, Link } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className="app-container">
            <div className="header-container">
                <Header />
            </div>
            <div className="main-container">
                <div className="slidenav-container"></div>
                <div className="app-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default App;
