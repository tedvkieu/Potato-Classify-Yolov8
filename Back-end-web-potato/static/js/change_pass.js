document
    .getElementById('current_password')
    .addEventListener('blur', function () {
        console.log('ok');

        var password = document.getElementById('current_password').value;
        var email = document.getElementById('email_user').value;
if(password && email){
        var requestData = {
            email: email,
            password: password,
        };
        // Gửi yêu cầu AJAX đến endpoint của bạn
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/check_password', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.valid) {
                    console.log('Password is valid'); // Thực hiện hành động tương ứng nếu mật khẩu hợp lệ
                } else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Current Password is invalid',
                        icon: 'error',
                        confirmButtonText: 'Retype',
                    });
                    document.getElementById('current_password').value = '';
                }
            } else {
                console.error('Request failed with status:', xhr.status); // Xử lý lỗi nếu có
            }
        };
        xhr.onerror = function () {
            console.error('Request failed'); // Xử lý lỗi nếu có
        };
        xhr.send(JSON.stringify(requestData));
        }
    });

document
    .getElementById('repeat_password')
    .addEventListener('blur', function () {

        var password1 = document.getElementById('new_password').value;
        var password2 = document.getElementById('repeat_password').value;
        if(password1){
        if (
            password1.length < 8 ||
            !/[!@#$%^&*(),.?":{}|<>0-9]/.test(password1) ||
            !/[A-Za-z]/.test(password1)
        ) {
            Swal.fire({
                title: 'Error!',
                text: 'Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một kí tự đặc biệt và một chữ số.',
                icon: 'error',
                confirmButtonText: 'Retype',
            });
            document.getElementById('new_password').value = '';
            document.getElementById('repeat_password').value = '';
        } else {
            if (password1 !== password2) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Mật khẩu không khớp. Vui lòng nhập lại.',
                    icon: 'error',
                    confirmButtonText: 'Retype',
                });
                document.getElementById('new_password').value = '';
                document.getElementById('repeat_password').value = '';
            }
        }
        }
    });
