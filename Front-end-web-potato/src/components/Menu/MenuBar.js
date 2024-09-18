
import { FaBook } from 'react-icons/fa';
import { FaImage } from 'react-icons/fa';
import { FaFolderOpen } from 'react-icons/fa';
import { IoIosRocket } from 'react-icons/io';
import { IoCodeSlash } from 'react-icons/io5';
import { FaHeartbeat } from 'react-icons/fa';

const MenuBar = (props) => {
    return (
        <div className="menu-bar-content">
            <div className="img-detect">
                <img src="https://www.researchgate.net/publication/364508413/figure/fig6/AS:11431281120261383@1676463740581/The-leaf-detection-results-by-YOLO-v3-which-is-trained-with-our-rectangle-annotation-data.jpg" />
            </div>
            <div className="text-menu">
                <h3>Potato detection</h3>
                <span>object detection</span>
            </div>
            <div className="bar-content">
                <div className="item-option active">
                    <div class="icon">
                        <FaBook />
                    </div>
                    <span class="text">Overview</span>
                </div>
                <div className="item-option">
                    <div class="icon">
                        <FaImage />
                    </div>
                    <span class="text">Images</span>
                </div>
                <div className="item-option">
                    <div class="icon">
                        <FaFolderOpen />
                    </div>
                    <span class="text">Dataset</span>
                </div>
                <div className="item-option">
                    <div class="icon">
                        <IoIosRocket />
                    </div>
                    <span class="text">Model</span>
                </div>
                <div className="item-option">
                    <div class="icon">
                        <IoCodeSlash />
                    </div>
                    <span class="text">API Docs</span>
                </div>
                <div className="item-option">
                    <div class="icon">
                        <FaHeartbeat />
                    </div>
                    <span class="text">Analytics</span>
                </div>
            </div>
        </div>
    );
};

export default MenuBar;
