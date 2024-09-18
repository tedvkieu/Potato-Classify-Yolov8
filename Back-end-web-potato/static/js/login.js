// Bắt sự kiện khi người dùng click vào nút "Login Google"
document.querySelector('.n8 a').addEventListener('click', function (event) {
    // Loại bỏ thuộc tính "required" khỏi trường mật khẩu
    document.getElementById('password').removeAttribute('required');
});
