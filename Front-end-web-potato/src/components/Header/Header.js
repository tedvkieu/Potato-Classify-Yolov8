import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavDropdown } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    return (
        <div class="container header-text pt-3">
            <div class="row">
                <div class="col-md-12 text-center">
                    <h3 class="animate-charcter">Potato Diseage Classify</h3>
                </div>
            </div>
        </div>
    );
};

export default Header;
