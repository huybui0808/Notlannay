  function copyCode() {
                var codeText = document.getElementById("myCode").innerText;
                navigator.clipboard
                    .writeText(codeText)
                    .then(function () {
                        alert("Đã sao chép toàn bộ lệnh!");
                    })
                    .catch(function (err) {
                        console.error("Lỗi khi sao chép: ", err);
                    });
            }