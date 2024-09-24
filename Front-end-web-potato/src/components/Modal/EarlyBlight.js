const EarlyBlight = (props) => {
    const { showEarlyDiseaseDetail, handleClickShowEarly } = props;
    return (
        <>
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
                        Các vết đốm xuất hiện ban đầu thường ở các lá già, thấp
                        hơn, hoặc những lá gần mặt đất. Vết bệnh có hình tròn
                        hoặc bầu dục, đường kính từ 1-2 cm, màu nâu hoặc đen{' '}
                        <br />
                        Đặc trưng của vết bệnh là có các vòng tròn đồng tâm
                        giống như hình mắt bò. Đây là dấu hiệu quan trọng để
                        phân biệt với các bệnh khác. <br />
                        Các lá bị nhiễm bệnh nặng sẽ khô héo, chuyển màu vàng và
                        rụng sớm.
                    </p>
                    <span className="title">
                        Quá trình phát triển và mức độ gây hại:
                    </span>
                    <p>
                        Bệnh thường phát triển trong điều kiện ấm áp và khô, đặc
                        biệt là khi nhiệt độ từ 24-29°C. <br />
                        Nấm lây lan qua bào tử, chủ yếu phát tán qua gió và
                        nước. Bệnh dễ xuất hiện khi có mưa nhiều hoặc tưới nước
                        không đúng cách. Early blight gây hại chủ yếu bằng cách
                        làm giảm diện tích lá của cây, ảnh hưởng đến quá trình
                        quang hợp, làm cây suy yếu và giảm năng suất.
                    </p>
                    <span className="title">Thiệt hại:</span>
                    <p>
                        Bệnh có thể làm cây khoai tây bị còi cọc, giảm năng suất
                        đáng kể. Cây bị bệnh sớm sẽ không đủ lá để quang hợp,
                        làm giảm kích thước và chất lượng củ.
                    </p>
                    <span className="title">
                        Biện pháp phòng ngừa và kiểm soát chung:
                    </span>
                    <p>
                        Sử dụng giống kháng bệnh: Chọn giống khoai tây có khả
                        năng kháng bệnh tốt là biện pháp hiệu
                        <br />
                        quả. Quản lý độ ẩm: Tránh tưới quá nhiều nước và đảm bảo
                        không khí lưu thông tốt để giảm độ ẩm xung quanh cây.{' '}
                        <br />
                        Phun thuốc bảo vệ thực vật: Sử dụng các loại thuốc diệt
                        nấm chuyên dụng, và phun thuốc đúng thời điểm, trước khi
                        bệnh lây lan mạnh.
                        <br /> Luân canh cây trồng: Trồng xen kẽ khoai tây với
                        các cây khác để tránh sự lây lan của nấm từ mùa này sang
                        mùa khác.
                        <br /> Vệ sinh đồng ruộng: Sau mùa thu hoạch, cần dọn
                        sạch tàn dư cây trồng, tránh để lại nguồn bệnh cho mùa
                        sau.
                    </p>
                </p>
            </div>
        </>
    );
};

export default EarlyBlight;
