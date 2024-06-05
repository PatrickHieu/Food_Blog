document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn việc submit form ngay lập tức

    let password = document.getElementsByName('password')[0].value;
    let confirmPassword = document.getElementsByName('confirmPassword')[0].value;
    let messageElement = document.getElementById('message');

    if (password === confirmPassword) {
        messageElement.textContent = 'Password confirmed';
        messageElement.style.color = 'green';
        // Nếu bạn muốn thực sự submit form khi password khớp, bỏ comment dòng sau:
        // this.submit();
    } else {
        messageElement.textContent = 'Please check your password';
        messageElement.style.color = 'red';
    }
});
