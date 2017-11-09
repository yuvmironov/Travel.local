$(document).ready(function () {
        flag = 0;
        $(document).scroll(function () {
            if ($(document).scrollTop() == 200 & flag == 0) {
                flag = 1;
                alert("Какой-то текст");
            }
        });

    });