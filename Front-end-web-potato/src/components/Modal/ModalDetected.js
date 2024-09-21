import { Button, Modal } from 'react-bootstrap';
import './ModalDetected.scss';
import { useEffect, useState } from 'react';
import {
    MdOutlineKeyboardArrowDown,
    MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

const ModalDetected = (props) => {
    const { show, setShow, previewImgDetect, responseInfo } = props;
    const [showEarlyDiseaseDetail, setShowEarlyDiseaseDetail] = useState(false);
    const [showLateDiseaseDetail, setShowLateDiseaseDetail] = useState(false);

    const handleClose = () => {
        setShow(false);
    };

    const handleClickShowEarly = () => {
        setShowEarlyDiseaseDetail(!showEarlyDiseaseDetail);
        setShowLateDiseaseDetail(false);
    };

    const handleClickShowLate = () => {
        setShowLateDiseaseDetail(!showLateDiseaseDetail);
        setShowEarlyDiseaseDetail(false);
    };

    useEffect(() => {}, []);
    return (
        <Modal
            show={show}
            onHide={handleClose}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered>
            <Modal.Header closeButton>
                <Modal.Title>Images Detected</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="img-preview-detect">
                    {previewImgDetect && previewImgDetect.length > 0 ? (
                        previewImgDetect.map((img, index) => (
                            <img key={index} src={img} alt="" />
                        ))
                    ) : (
                        <span>Preview Images</span>
                    )}
                    <div className="text-time">
                        Time: {new Date().toLocaleTimeString()}
                    </div>
                </div>
                <div className="info-disease mt-3">
                    {responseInfo && responseInfo.quantity > 0 ? (
                        <>
                            <div className="quantity-text">
                                Quality image: {responseInfo.quantity}
                            </div>
                            {responseInfo.kind.map((item, index) => (
                                <div key={index} className="row-result my-1">
                                    <span>Image {index + 1}</span> <br />
                                    <span>Type of Disease: {item}</span>
                                </div>
                            ))}
                        </>
                    ) : (
                        <div>Quality image: 0</div>
                    )}
                </div>

                {showEarlyDiseaseDetail === true ? (
                    <div
                        className={`text-disease mt-3 ${
                            showEarlyDiseaseDetail ? 'show' : ''
                        }`}>
                        <span className="title">
                            Early blight (Bệnh mốc sương sớm):
                        </span>
                        <p>
                            Tác nhân gây bệnh:
                            <span class="highlight">Nấm Alternaria solani</span>
                            <p>Dấu hiệu nhận biết trên cây khoai tây:</p>
                            <span className="title">
                                Trên lá:
                                <br />
                            </span>
                            <p>
                                Các vết đốm xuất hiện ban đầu thường ở các lá
                                già, thấp hơn, hoặc những lá gần mặt đất. Vết
                                bệnh có hình tròn hoặc bầu dục, đường kính từ
                                1-2 cm, màu nâu hoặc đen <br />
                                Đặc trưng của vết bệnh là có các vòng tròn đồng
                                tâm giống như hình mắt bò. Đây là dấu hiệu quan
                                trọng để phân biệt với các bệnh khác. <br />
                                Các lá bị nhiễm bệnh nặng sẽ khô héo, chuyển màu
                                vàng và rụng sớm.
                            </p>
                            <span className="title">
                                Quá trình phát triển và mức độ gây hại:
                            </span>
                            <p>
                                Bệnh thường phát triển trong điều kiện ấm áp và
                                khô, đặc biệt là khi nhiệt độ từ 24-29°C. <br />
                                Nấm lây lan qua bào tử, chủ yếu phát tán qua gió
                                và nước. Bệnh dễ xuất hiện khi có mưa nhiều hoặc
                                tưới nước không đúng cách. Early blight gây hại
                                chủ yếu bằng cách làm giảm diện tích lá của cây,
                                ảnh hưởng đến quá trình quang hợp, làm cây suy
                                yếu và giảm năng suất.
                            </p>
                            <span className="title">Thiệt hại:</span>
                            <p>
                                Bệnh có thể làm cây khoai tây bị còi cọc, giảm
                                năng suất đáng kể. Cây bị bệnh sớm sẽ không đủ
                                lá để quang hợp, làm giảm kích thước và chất
                                lượng củ.
                            </p>
                            <span className="title">
                                Biện pháp phòng ngừa và kiểm soát chung:
                            </span>
                            <p>
                                Sử dụng giống kháng bệnh: Chọn giống khoai tây
                                có khả năng kháng bệnh tốt là biện pháp hiệu
                                <br />
                                quả. Quản lý độ ẩm: Tránh tưới quá nhiều nước và
                                đảm bảo không khí lưu thông tốt để giảm độ ẩm
                                xung quanh cây. <br />
                                Phun thuốc bảo vệ thực vật: Sử dụng các loại
                                thuốc diệt nấm chuyên dụng, và phun thuốc đúng
                                thời điểm, trước khi bệnh lây lan mạnh.
                                <br /> Luân canh cây trồng: Trồng xen kẽ khoai
                                tây với các cây khác để tránh sự lây lan của nấm
                                từ mùa này sang mùa khác.
                                <br /> Vệ sinh đồng ruộng: Sau mùa thu hoạch,
                                cần dọn sạch tàn dư cây trồng, tránh để lại
                                nguồn bệnh cho mùa sau.
                            </p>
                        </p>
                    </div>
                ) : (
                    <></>
                )}

                {showLateDiseaseDetail === true ? (
                    <div
                        className={`text-disease mt-3 ${
                            showLateDiseaseDetail ? 'show' : ''
                        }`}>
                        <span className="title">
                            Late blight (Bệnh mốc sương muộn):
                        </span>
                        <p>
                            Tác nhân gây bệnh:
                            <span class="highlight">
                                Nấm Phytophthora infestans
                            </span>
                            <p>Dấu hiệu nhận biết trên cây khoai tây:</p>
                            <span className="title">
                                Trên lá:
                                <br />
                            </span>
                            <p>
                                Bệnh bắt đầu bằng các vết đốm nhỏ, có màu xanh
                                đậm hoặc nâu, thường ở phần rìa lá hoặc giữa các
                                gân lá. <br />
                                Khi ẩm ướt, vết bệnh mở rộng nhanh chóng, trở
                                nên nhũn nước và có màu đen, tạo ra viền màu tím
                                hoặc xanh đậm.
                                <br /> Ở mặt dưới lá, có thể thấy một lớp mốc
                                trắng hoặc xám khi điều kiện ẩm ướt.
                                <br /> Vết bệnh lan rất nhanh, làm lá chết, hoại
                                tử, và cuối cùng là rụng sớm.
                            </p>
                            <span className="title">
                                Quá trình phát triển và mức độ gây hại:
                            </span>
                            <p>
                                Bệnh Late blight phát triển tốt trong điều kiện
                                ẩm ướt, lạnh, đặc biệt khi nhiệt độ từ 10-20°C.
                                <br />
                                Nấm Phytophthora infestans lây lan qua bào tử
                                trong không khí và nước. Nó có khả năng lây
                                nhiễm rất nhanh, và chỉ trong vài ngày bệnh có
                                thể làm chết cả ruộng khoai tây nếu không được
                                kiểm soát.
                                <br /> Bệnh có khả năng gây dịch hại lớn, vì có
                                thể phá hủy cả lá, thân và củ khoai tây trong
                                thời gian ngắn.
                            </p>
                            <span className="title">Thiệt hại:</span>
                            <p>
                                Late blight được coi là một trong những bệnh
                                nguy hiểm nhất đối với khoai tây. Nếu không được
                                kiểm soát kịp thời, nó có thể phá hủy toàn bộ
                                mùa màng chỉ trong vòng vài ngày, gây thất thoát
                                lớn cho nông dân.
                                <br /> Bệnh này từng gây ra nạn đói lớn ở
                                Ireland vào thế kỷ 19, dẫn đến cái chết của hàng
                                triệu người.
                            </p>
                            <span className="title">
                                Biện pháp phòng ngừa và kiểm soát chung:
                            </span>
                            <p>
                                Sử dụng giống kháng bệnh: Chọn giống khoai tây
                                có khả năng kháng bệnh tốt là biện pháp hiệu
                                <br />
                                quả. Quản lý độ ẩm: Tránh tưới quá nhiều nước và
                                đảm bảo không khí lưu thông tốt để giảm độ ẩm
                                xung quanh cây. <br />
                                Phun thuốc bảo vệ thực vật: Sử dụng các loại
                                thuốc diệt nấm chuyên dụng, và phun thuốc đúng
                                thời điểm, trước khi bệnh lây lan mạnh.
                                <br /> Luân canh cây trồng: Trồng xen kẽ khoai
                                tây với các cây khác để tránh sự lây lan của nấm
                                từ mùa này sang mùa khác.
                                <br /> Vệ sinh đồng ruộng: Sau mùa thu hoạch,
                                cần dọn sạch tàn dư cây trồng, tránh để lại
                                nguồn bệnh cho mùa sau.
                            </p>
                        </p>
                    </div>
                ) : (
                    <></>
                )}
            </Modal.Body>
            <Modal.Footer>
                <div className="btn-show" onClick={handleClickShowEarly}>
                    {showEarlyDiseaseDetail ? (
                        <>
                            Hide Early Blight Disease Detail
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Early Blight Disease Detail
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <div className="btn-show" onClick={handleClickShowLate}>
                    {showLateDiseaseDetail ? (
                        <>
                            Hide Late Blight Disease Detail
                            <MdOutlineKeyboardArrowUp />
                        </>
                    ) : (
                        <>
                            Show Late Blight Disease Detail
                            <MdOutlineKeyboardArrowDown />
                        </>
                    )}
                </div>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalDetected;
