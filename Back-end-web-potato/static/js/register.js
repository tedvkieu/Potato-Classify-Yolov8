
/* ---------------------------Xử lý mật khẩu trang Register ----------------------------*/
// document
//     .getElementById('registerForm')
//     .addEventListener('submit', function (event) {
//         console.log('ok');
//         var password1 = document.getElementById('password').value;
//         var password2 = document.getElementById('password1').value;
//         var email = document.getElementById('email').value;

//         var xhr = new XMLHttpRequest();
//         xhr.open('POST', '/check_email', true);
//         xhr.setRequestHeader('Content-Type', 'application/json');
//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 var response = JSON.parse(xhr.responseText);

//                 if (
//                     password1.length < 8 ||
//                     !/[!@#$%^&*(),.?":{}|<>0-9]/.test(password1) ||
//                     !/[A-Za-z]/.test(password1)
//                 ) {
//                     Swal.fire({
//                         title: 'Error!',
//                         text: 'Mật khẩu không hợp lệ. Mật khẩu phải có ít nhất 8 kí tự và chứa ít nhất một kí tự đặc biệt và một chữ số.',
//                         icon: 'error',
//                         confirmButtonText: 'Retype',
//                     });
//                     event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu nếu mật khẩu không hợp lệ
//                 } else {
//                     if (password1 !== password2) {
//                         Swal.fire({
//                             title: 'Error!',
//                             text: 'Mật khẩu không khớp. Vui lòng nhập lại.',
//                             icon: 'error',
//                             confirmButtonText: 'Retype',
//                         });

//                         event.preventDefault(); // Ngăn chặn việc gửi biểu mẫu nếu mật khẩu không khớp
//                     }
//                 }
//             }
//         };
//         xhr.send(JSON.stringify({ email: email }));
//     });

document.getElementById('password1').addEventListener('blur', function () {
    console.log('ok');
    var password1 = document.getElementById('password').value;
    var password2 = document.getElementById('password1').value;
    var email = document.getElementById('email').value;
    console.log(email)
if(email){
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/check_email', true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function () {
        if (xhr.status === 200) {
            //var response = JSON.parse(xhr.responseText);

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
                document.getElementById('password').value = '';
                document.getElementById('password1').value = '';
            } else {
                if (password1 !== password2) {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Mật khẩu không khớp. Vui lòng nhập lại.',
                        icon: 'error',
                        confirmButtonText: 'Retype',
                    });
                    document.getElementById('password').value = '';
                    document.getElementById('password1').value = '';
                }
            }
        }
    };
    }
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
        document.getElementById('password').value = '';
        document.getElementById('password1').value = '';
    } else {
        if (password1 !== password2) {
            Swal.fire({
                title: 'Error!',
                text: 'Mật khẩu không khớp. Vui lòng nhập lại.',
                icon: 'error',
                confirmButtonText: 'Retype',
            });
            document.getElementById('password').value = '';
            document.getElementById('password1').value = '';
        }
    }

    xhr.send(JSON.stringify({ email: email }));
    }
});

document.getElementById('email').addEventListener('blur', function () {
    var email = this.value;
if(email){
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        Swal.fire({
            title: 'Oops...',
            text: 'Email không đúng định dạng. Vui lòng kiểm tra lại.',
            icon: 'error',
            confirmButtonText: 'OK',
        });
        document.getElementById('email').value = '';
        return;
    } else {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '/check_email', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onload = function () {
            if (xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.exists) {
                    Swal.fire({
                        title: 'Oops...',
                        text: 'Email đã tồn tại. Vui lòng sử dụng một email khác.',
                        icon: 'warning',
                        confirmButtonText: 'Retype',
                    });
                    document.getElementById('email').value = '';
                }
            }
        };
        xhr.send(JSON.stringify({ email: email }));
    }
    }
});
