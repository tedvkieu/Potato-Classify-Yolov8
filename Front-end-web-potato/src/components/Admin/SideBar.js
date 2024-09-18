import 'react-pro-sidebar/dist/css/styles.css';
import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent,
} from 'react-pro-sidebar';

import {
    FaTachometerAlt,
    FaGem,
    FaList,
    FaGithub,
    FaRegLaughWink,
    FaHeart,
} from 'react-icons/fa';
import { DiReact } from 'react-icons/di';
import { Link, useNavigate } from 'react-router-dom';
import sidebarBg from '../../assets/bg2.jpg';
import './SideBar.scss';

const SideBar = (props) => {
    const navigate = useNavigate();
    const { image, collapsed, toggled, handleToggleSidebar } = props;
    return (
        <>
            <ProSidebar
                image={sidebarBg}
                collapsed={collapsed}
                toggled={toggled}
                breakPoint="md"
                onToggle={handleToggleSidebar}>
                <SidebarHeader>
                    <div
                        style={{
                            padding: '24px',
                            textTransform: 'uppercase',
                            fontWeight: 'bold',
                            fontSize: 14,
                            letterSpacing: '1px',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>
                        <DiReact size={'3em'} color={'00bfff'} />
                        <span onClick={() => navigate('/')}>Kieu ne </span>
                    </div>
                </SidebarHeader>

                <SidebarContent>
                    <Menu iconShape="circle">
                        <MenuItem icon={<FaTachometerAlt />}>
                            Dashboard
                            <Link to="/admin" />
                        </MenuItem>
                    </Menu>
                    <Menu iconShape="circle">
                        <SubMenu icon={<FaGem />} title="Features">
                            <MenuItem>
                                Quan Ly Users
                                <Link to="/admin/manage-user" />
                            </MenuItem>
                            <MenuItem>
                                Quan Ly Bai Quiz
                                <Link to="/admin/manage-quizzes" />
                            </MenuItem>
                            <MenuItem> Quan Ly Cau Hoi</MenuItem>
                        </SubMenu>
                    </Menu>
                </SidebarContent>

                <SidebarFooter style={{ textAlign: 'center' }}>
                    <div
                        className="sidebar-btn-wrapper"
                        style={{
                            padding: '20px 24px',
                        }}>
                        <a
                            href="https://github.com/tedvkieu"
                            target="_blank"
                            className="sidebar-btn"
                            rel="noopener noreferrer">
                            <FaGithub />
                            <span
                                style={{
                                    whiteSpace: 'nowrap',
                                    textOverflow: 'ellipsis',
                                    overflow: 'hidden',
                                }}>
                                &#165; Duong Van Kieu
                            </span>
                        </a>
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </>
    );
};

export default SideBar;
