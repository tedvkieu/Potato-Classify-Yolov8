const Pest = (props) => {
    const { showPestDiseaseDetail, handleClickShowPest } = props;
    return (
        <div
            className={`text-disease mt-3 ${
                showPestDiseaseDetail ? 'show' : ''
            }`}>
            <span className="title">Bệnh Pest (Bệnh sâu hại):</span>
            <p>
                Tác nhân gây bệnh:
                <span className="highlight">
                    Sâu (các loài côn trùng khác nhau)
                </span>
                <p>Dấu hiệu nhận biết trên cây khoai tây:</p>
                <span className="title">
                    Trên lá:
                    <br />
                </span>
                <p>
                    Các dấu hiệu thường thấy bao gồm các lỗ thủng trên lá, lá bị
                    vàng và héo. Sâu hại có thể gây ra sự biến dạng của lá và
                    làm giảm diện tích quang hợp của cây.
                    <br />
                    Sâu ăn lá thường để lại các dấu vết, có thể là những đốm nâu
                    hoặc các mảnh lá bị ăn mất, gây ảnh hưởng đến sức khỏe cây
                    trồng.
                </p>
                <span className="title">
                    Quá trình phát triển và mức độ gây hại:
                </span>
                <p>
                    Bệnh sâu hại phát triển mạnh trong điều kiện ấm áp, ẩm ướt,
                    đặc biệt khi có nhiều thực phẩm sẵn có. <br />
                    Sâu có thể lây lan nhanh chóng qua gió, nước, hoặc khi di
                    chuyển từ cây này sang cây khác. Sự phát triển của sâu hại
                    có thể làm giảm đáng kể năng suất và chất lượng củ.
                </p>
                <span className="title">Thiệt hại:</span>
                <p>
                    Sâu hại có thể làm giảm năng suất cây khoai tây, gây thiệt
                    hại đáng kể cho sản lượng và chất lượng củ. Cây bị nhiễm sâu
                    nặng có thể còi cọc, không đủ sức chống chọi với các yếu tố
                    bên ngoài.
                </p>
                <span className="title">
                    Biện pháp phòng ngừa và kiểm soát chung:
                </span>
                <p>
                    Sử dụng biện pháp thủ công: Kiểm tra thường xuyên và loại bỏ
                    sâu hại bằng tay hoặc sử dụng bẫy. <br />
                    Sử dụng thuốc bảo vệ thực vật: Sử dụng các loại thuốc diệt
                    sâu chuyên dụng và phun đúng thời điểm. <br />
                    Luân canh cây trồng: Thay đổi cây trồng hàng năm để ngăn
                    chặn sự tích tụ của sâu hại. <br />
                    Vệ sinh đồng ruộng: Dọn dẹp tàn dư cây trồng và giữ sạch khu
                    vực trồng để giảm nguy cơ sâu hại lây lan.
                </p>
            </p>
        </div>
    );
};

export default Pest;
