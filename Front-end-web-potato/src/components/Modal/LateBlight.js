const LateBlight = (props) => {
    const { showLateDiseaseDetail, handleClickShowLate } = props;
    return (
        <>
            <div
                className={`text-disease mt-3 ${
                    showLateDiseaseDetail ? 'show' : ''
                }`}>
                <span className="title">
                    Late blight (Bệnh mốc sương muộn):
                </span>
                <p>
                    Tác nhân gây bệnh:
                    <span class="highlight">Nấm Phytophthora infestans</span>
                    <p>Dấu hiệu nhận biết trên cây khoai tây:</p>
                    <span className="title">
                        Trên lá:
                        <br />
                    </span>
                    <p>
                        Bệnh bắt đầu bằng các vết đốm nhỏ, có màu xanh đậm hoặc
                        nâu, thường ở phần rìa lá hoặc giữa các gân lá. <br />
                        Khi ẩm ướt, vết bệnh mở rộng nhanh chóng, trở nên nhũn
                        nước và có màu đen, tạo ra viền màu tím hoặc xanh đậm.
                        <br /> Ở mặt dưới lá, có thể thấy một lớp mốc trắng hoặc
                        xám khi điều kiện ẩm ướt.
                        <br /> Vết bệnh lan rất nhanh, làm lá chết, hoại tử, và
                        cuối cùng là rụng sớm.
                    </p>
                    <span className="title">
                        Quá trình phát triển và mức độ gây hại:
                    </span>
                    <p>
                        Bệnh Late blight phát triển tốt trong điều kiện ẩm ướt,
                        lạnh, đặc biệt khi nhiệt độ từ 10-20°C.
                        <br />
                        Nấm Phytophthora infestans lây lan qua bào tử trong
                        không khí và nước. Nó có khả năng lây nhiễm rất nhanh,
                        và chỉ trong vài ngày bệnh có thể làm chết cả ruộng
                        khoai tây nếu không được kiểm soát.
                        <br /> Bệnh có khả năng gây dịch hại lớn, vì có thể phá
                        hủy cả lá, thân và củ khoai tây trong thời gian ngắn.
                    </p>
                    <span className="title">Thiệt hại:</span>
                    <p>
                        Late blight được coi là một trong những bệnh nguy hiểm
                        nhất đối với khoai tây. Nếu không được kiểm soát kịp
                        thời, nó có thể phá hủy toàn bộ mùa màng chỉ trong vòng
                        vài ngày, gây thất thoát lớn cho nông dân.
                        <br /> Bệnh này từng gây ra nạn đói lớn ở Ireland vào
                        thế kỷ 19, dẫn đến cái chết của hàng triệu người.
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
export default LateBlight;
