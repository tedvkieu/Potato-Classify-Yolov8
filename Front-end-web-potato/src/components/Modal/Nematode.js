const Nematode = (props) => {
    const { showNematodeDiseaseDetail, handleClickShowNematode } = props;
    return (
        <>
            <div
                className={`text-disease mt-3 ${
                    showNematodeDiseaseDetail ? 'show' : ''
                }`}>
                <span className="title">Bệnh Nematode (Bệnh giun tròn):</span>
                <p>
                    Tác nhân gây bệnh:
                    <span className="highlight">
                        Nematode (Heterodera spp.)
                    </span>
                    <p>Dấu hiệu nhận biết trên cây khoai tây:</p>
                    <span className="title">
                        Trên lá:
                        <br />
                    </span>
                    <p>
                        Lá cây khoai tây bị nhiễm Nematode thường có dấu hiệu
                        chuyển sang màu vàng hoặc nâu, và có thể xuất hiện các
                        đốm nhỏ. Cây có thể bị còi cọc, lá héo và rụng sớm.
                        <br />
                        Sự phát triển của lá bị ảnh hưởng nghiêm trọng, dẫn đến
                        giảm năng suất và chất lượng củ.
                    </p>
                    <span className="title">
                        Quá trình phát triển và mức độ gây hại:
                    </span>
                    <p>
                        Nematode phát triển mạnh trong điều kiện ẩm ướt và đất
                        có độ pH thích hợp. <br />
                        Chúng lây lan qua đất, nước và cây trồng. Sự lây lan của
                        Nematode dễ xảy ra khi trồng khoai tây trên đất đã từng
                        bị nhiễm bệnh.
                    </p>
                    <span className="title">Thiệt hại:</span>
                    <p>
                        Bệnh có thể gây thiệt hại nghiêm trọng đến năng suất
                        khoai tây. Cây bị nhiễm nặng có thể giảm năng suất đáng
                        kể, làm giảm chất lượng củ và làm cho cây dễ bị nhiễm
                        các bệnh khác.
                    </p>
                    <span className="title">
                        Biện pháp phòng ngừa và kiểm soát chung:
                    </span>
                    <p>
                        Sử dụng giống kháng bệnh: Lựa chọn giống khoai tây có
                        khả năng kháng Nematode tốt. <br />
                        Luân canh cây trồng: Thay đổi loại cây trồng hàng năm để
                        làm giảm số lượng Nematode trong đất. <br />
                        Cải tạo đất: Sử dụng biện pháp cải tạo đất và vệ sinh
                        đồng ruộng để loại bỏ nguồn bệnh. <br />
                        Sử dụng thuốc trừ sâu: Sử dụng các loại thuốc trừ sâu
                        chuyên dụng để kiểm soát sự phát triển của Nematode.
                    </p>
                </p>
            </div>
        </>
    );
};
export default Nematode;
