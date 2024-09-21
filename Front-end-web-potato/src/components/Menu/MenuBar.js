import { FaBook, FaImage, FaFolderOpen } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { IoCodeSlash } from 'react-icons/io5';
import { FaHeartbeat } from 'react-icons/fa';
import { useState } from 'react';

const MenuBar = (props) => {
    const {activeIndex, handleItemClick}= props;

    const menuItems = [
        { icon: <FaBook />, text: 'Overview' },
        { icon: <FaImage />, text: 'History' },
        { icon: <FaFolderOpen />, text: 'Dataset' },
        { icon: <IoIosRocket />, text: 'Model' },
        { icon: <IoCodeSlash />, text: 'API Docs' },
        { icon: <FaHeartbeat />, text: 'Analytics' },
    ];

    return (
        <div className="menu-bar-content">
            <div className="img-detect">
                <img
                    src="https://www.researchgate.net/publication/364508413/figure/fig6/AS:11431281120261383@1676463740581/The-leaf-detection-results-by-YOLO-v3-which-is-trained-with-our-rectangle-annotation-data.jpg"
                    alt="Detection"
                />
            </div>

            <div className="text-menu">
                <h3>Potato detection</h3>
                <span>object detection</span>
            </div>
            <div className="bar-content">
                {menuItems.map((item, index) => (
                    <div
                        key={index}
                        className={`item-option ${
                            activeIndex === index ? 'active' : ''
                        }`}
                        onClick={() => handleItemClick(index)} // Xử lý click cho item
                    >
           
                        <div className="icon">{item.icon}</div>
                        <span className="text">{item.text}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MenuBar;
