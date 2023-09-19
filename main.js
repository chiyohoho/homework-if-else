var showContent = callElement("#content")
//------Change BG Button-----------------------------------------
var changeBgButton = document.querySelectorAll(".menu_option")
var saveStatusChangeBG = {};
changeBgButton.forEach(function (button) {
    button.addEventListener("click", function () {
        if (button.classList.contains("active")) {
            button.classList.remove("active");
        } else {
            changeBgButton.forEach(function (s) {
                s.classList.remove("active");
            });
            button.classList.add("active");
        }
    })
})
//-----------------------------------------------------------

//------ Function Call Element
var bai1Array = []
var bai3SoChan = []
var bai3SoLe = []
//------ Function Call Element
function callElement(object) {
    return document.querySelector(object)
}
//--------- BÀI TẬP 1 ---------//
function showBaiTap1() {
    var str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-sort" style="margin-right: 15px;"></i>Sắp xếp theo thứ tự</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số thứ 1" id="bai1_input_1" class="bai1_input">
                <input type="number" placeholder="Nhập số thứ 2" id="bai1_input_2" class="bai1_input">
                <input type="number" placeholder="Nhập số thứ 3" id="bai1_input_3" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="sortLowToHigh()">Sắp xếp theo thứ tự tăng dần</span>
                    <span id="btn_body_content_hightolow" class="btn_sort" onclick="sortHighToLow()">Sắp xếp theo thứ tự giảm dần</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-arrow-down-1-9" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
function sortLowToHigh() {
    var bai1Input1Value = callElement("#bai1_input_1").value;
    var bai1Input2Value = callElement("#bai1_input_2").value;
    var bai1Input3Value = callElement("#bai1_input_3").value;
    var showResult = callElement("#bai1_result")
    var showIconSort = callElement("#icon_sort")
    var showResultSort = callElement("#show_body_result")

    if (bai1Input1Value && bai1Input2Value && bai1Input3Value) {
        bai1Array.length = 0;
        var bai1Number1 = {
            number: bai1Input1Value
        }

        var bai1Number2 = {
            number: bai1Input2Value
        }

        var bai1Number3 = {
            number: bai1Input3Value
        }
        bai1Array.push(bai1Number1, bai1Number2, bai1Number3)

        bai1Array = bai1Array.sort((a, b) => {
            return a.number - b.number
        })

        var showSortLowToHigh = bai1Array.map((item) => {
            return item.number;
        }).join(", ");
        showSortLowToHigh += ""
        showResult.innerHTML = showSortLowToHigh
        showIconSort.className = "fa-solid fa-arrow-trend-up"
        showIconSort.style.visibility = "visible"
        showResultSort.style.visibility = "visible"

    } else {
        alert("Không được để trống 3 ô trên")
    }
}
function sortHighToLow() {
    var valueNumber1 = callElement("#bai1_input_1").value
    var valueNumber2 = callElement("#bai1_input_2").value
    var valueNumber3 = callElement("#bai1_input_3").value
    var showResult = callElement("#bai1_result")
    var showIconSort = callElement("#icon_sort")
    var showResultSort = callElement("#show_body_result")

    if (valueNumber1 && valueNumber2 && valueNumber3) {
        bai1Array.length = 0;
        var number1 = {
            number: valueNumber1
        }
        var number2 = {
            number: valueNumber2
        }
        var number3 = {
            number: valueNumber3
        }
        bai1Array.push(number1, number2, number3)
        console.log("check array: ", bai1Array)

        bai1Array = bai1Array.sort((a, b) => {
            return b.number - a.number
        })

        var showSortHighToLow = bai1Array.map((item) => {
            return item.number;
        }).join(", ");
        showSortHighToLow += "";
        showResult.innerHTML = showSortHighToLow;
        showIconSort.className = "fa-solid fa-arrow-trend-down"
        showIconSort.style.visibility = "visible"
        showResultSort.style.visibility = "visible"
    } else {
        alert("Không được để trống 3 ô trên")
    }
}
//-----------------------------//

//--------- BÀI TẬP 2 ---------//
function showBaiTap2() {
    var str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-venus" style="margin-right: 15px;"></i>Văn mẫu xin lỗi</span>
            </div>

            <div id="show_body_content_2" class="body_content_2">
                <select name="xinloi" id="select_xinloi" class="dropdown_xinloi" style="margin-right: 20px;">
                    <option selected disabled hidden value="0">Vui lòng chọn 1 ngôn ngữ</option>
                    <option value="1">Xin lỗi bằng tiếng Anh</option>
                    <option value="2">Xin lỗi bằng tiếng Nhật</option>
                    <option value="3">Xin lỗi bằng tiếng Trung</option>
                    <option value="4">Xin lỗi bằng tiếng Hàn</option>
                </select>
                <span id="btn_xinloi" onclick="diXinLoi()">Bắt đầu xin lỗi</span>
            </div>

            <div id="show_body_result_2" class="body_result_2" style="visibility: hidden;">
                <i id="icon_sort" class="fa-solid fa-language" style="; font-size: 30px;"></i>
                <span id="bai2_result" class="show_bai2_result">1234</span>
            </div>
    `
    showContent.innerHTML = str
}
function diXinLoi() {
    var selectedValue = callElement("#select_xinloi").value;
    var showBodyResult = callElement("#show_body_result_2")
    var showContentXinLoi = callElement("#bai2_result")

    showBodyResult.style.visibility = "visible"
    if (selectedValue == 1) {
        showContentXinLoi.textContent = "I'm so Sorry"
    } else if (selectedValue == 2) {
        showContentXinLoi.textContent = "ごめんなさい"
    } else if (selectedValue == 3) {
        showContentXinLoi.textContent = "对不起"
    } else if (selectedValue == 4) {
        showContentXinLoi.textContent = "죄송합니다"
    } else {
        showContentXinLoi.textContent = "Cho tớ xin lỗi"
    }
}
//-----------------------------//

//--------- BÀI TẬP 3 ---------//
function showBaiTap3() {
    var str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-square-root-variable" style="margin-right: 15px;"></i>Đếm số chẵn và số lẻ</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập số thứ 1" id="bai1_input_1" class="bai1_input">
                <input type="number" placeholder="Nhập số thứ 2" id="bai1_input_2" class="bai1_input">
                <input type="number" placeholder="Nhập số thứ 3" id="bai1_input_3" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="demSo()">Bắt đầu đếm</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-solid fa-arrow-down-1-9" style="visibility: hidden"></i>
                <span id="bai1_result" class="show_bai1_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
function demSo() {
    var valueNumber1 = callElement("#bai1_input_1").value
    var valueNumber2 = callElement("#bai1_input_2").value
    var valueNumber3 = callElement("#bai1_input_3").value
    var showResult = callElement("#show_body_result")
    var result = callElement("#bai1_result")

    bai3SoChan.length = 0
    bai3SoLe.length = 0

    if (valueNumber1 && valueNumber2 && valueNumber3) {
        console.log("check value Number 1: ", valueNumber1)
        if ((valueNumber1 % 2) == 0) {
            var number1 = {
                number: valueNumber1
            }
            bai3SoChan.push(number1)
        } else {
            var number1 = {
                number: valueNumber1
            }
            bai3SoLe.push(number1)
        }

        if ((valueNumber2 % 2) == 0) {
            var number2 = {
                number: valueNumber2
            }
            bai3SoChan.push(number2)
        } else {
            var number2 = {
                number: valueNumber2
            }
            bai3SoLe.push(number2)
        }

        if ((valueNumber3 % 2) == 0) {
            var number3 = {
                number: valueNumber3
            }
            bai3SoChan.push(number3)
        } else {
            var number3 = {
                number: valueNumber3
            }
            bai3SoLe.push(number3)
        }

        showResult.style.visibility = "visible"
        result.textContent = `Có ${bai3SoChan.length} số chẵn và ${bai3SoLe.length} số lẻ`
    } else {
        alert("Vui lòng không để trống 3 ô trên")
    }
}
//-----------------------------//

//--------- BÀI TẬP 4 ---------//
function showBaiTap4() {
    var str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-triangle-exclamation" style="margin-right: 15px;"></i>Đoán hình tam giác</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" placeholder="Nhập chiều dài cạnh 1" id="bai1_input_1" class="bai1_input">
                <input type="number" placeholder="Nhập chiều dài cạnh 2" id="bai1_input_2" class="bai1_input">
                <input type="number" placeholder="Nhập chiều dài cạnh 3" id="bai1_input_3" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="timTamGiac()">Bắt đầu đếm</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-regular fa-hand-point-right" style="visibility: hidden"></i>
                <span id="bai4_result" class="show_bai4_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
function timTamGiac() {
    var canhTamGiac1 = Number(callElement("#bai1_input_1").value)
    var canhTamGiac2 = Number(callElement("#bai1_input_2").value)
    var canhTamGiac3 = Number(callElement("#bai1_input_3").value)

    var showResult = callElement("#show_body_result")
    var result = callElement("#bai4_result")
    var showIcon = callElement("#icon_sort")

    if (canhTamGiac1 && canhTamGiac2 && canhTamGiac3) {
        var canBacHaiCanh1 = canhTamGiac1 * canhTamGiac1;
        var canBacHaiCanh2 = canhTamGiac2 * canhTamGiac2;
        var canBacHaiCanh3 = canhTamGiac3 * canhTamGiac3;
        if ((canhTamGiac1 + canhTamGiac2) > canhTamGiac3 && (canhTamGiac1 + canhTamGiac3) > canhTamGiac2 && (canhTamGiac2 + canhTamGiac3) > canhTamGiac1) {
            if (canhTamGiac1 == canhTamGiac2 == canhTamGiac3) {
                result.textContent = "Đây là tam giác đều"
            } else if (canhTamGiac1 == canhTamGiac2 || canhTamGiac1 == canhTamGiac3 || canhTamGiac2 == canhTamGiac3) {
                result.textContent = "Đây là tam giác cân"
            } else if (canBacHaiCanh1 == canBacHaiCanh2 + canBacHaiCanh3 || canBacHaiCanh2 == canBacHaiCanh1 + canBacHaiCanh3 || canBacHaiCanh3 == canBacHaiCanh1 + canBacHaiCanh2) {
                result.textContent = "Đây là tam giác vuông"
            } else {
                result.textContent = "Đây là tam giác bình thường"
            }
            showResult.style.visibility = "visible"
            showIcon.style.visibility = "visible"
        } else {
            alert("Tổng 2 cạnh bất kỳ của 1 tam giác luôn lớn hơn cạnh còn lại")
            showResult.style.visibility = "hidden"
            showIcon.style.visibility = "hidden"
        }
    } else {
        alert("Vui lòng không để trống 3 ô trên")
    }
}
//-----------------------------//

//--------- BÀI TẬP 5 ---------//
function showBaiTap5() {
    var str = `
    <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-calendar-days" style="margin-right: 15px;"></i>Tính ngày tháng năm</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="number" max="999" placeholder="Nhập ngày" id="bai1_input_1" class="bai1_input">
                <input type="number" placeholder="Nhập tháng" id="bai1_input_2" class="bai1_input">
                <input type="number" placeholder="Nhập năm" id="bai1_input_3" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="timNgayHomQua()">Tìm ngày hôm qua</span>
                    <span id="btn_body_content_lowtohigh" class="btn_sort" onclick="()">Tìm ngày tiếp theo</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result" style="visibility: hidden">
                <i id="icon_sort" class="fa-regular fa-hand-point-right" style="visibility: hidden"></i>
                <span id="bai5_result" class="show_bai5_result"></span>
            </div>
    `
    showContent.innerHTML = str
}
function timNgayHomQua() {
    var day = Number(callElement("#bai1_input_1").value);
    var month = Number(callElement("#bai1_input_2").value);
    var year = Number(callElement("#bai1_input_3").value);

    var showResult = callElement("#show_body_result");
    var result = callElement("#bai5_result");

    var checkYear = false; // year = true = năm nhuận // year = false = năm bình thường

    if (day && month && year) {
        //Tính năm nhuận
        if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
            checkYear = true;
        }

        var checkDay;
        switch (month) {
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12:
                checkDay = 31;
                break;
            case 4:
            case 6:
            case 9:
            case 11:
                checkDay = 30;
                break;
            case 2:
                checkDay = checkYear ? 29 : 28;
                break;
            default:
                checkDay = 0;
        }

        if (checkDay === 0 || day < 1 || day > checkDay) {
            if (month === 4 || month === 6 || month === 9 || month === 11) {
                result.textContent = `Tháng ${month} của năm ${year} chỉ có 30 ngày`;
            }
            if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                result.textContent = `Tháng ${month} của năm ${year} chỉ có 31 ngày`;
            }
            if (month === 2) {
                if (checkYear) {
                    result.textContent = `Tháng ${month} của năm ${year} chỉ có 29 ngày`;
                } else {
                    result.textContent = `Tháng ${month} của năm ${year} chỉ có 28 ngày`;
                }
            }
        } else {
            if (day === 1) {
                if (month === 1) {
                    day = 31;
                    month = 12;
                    year -= 1;
                } else {
                    month -= 1;
                    day = checkDay;
                }
            } else {
                day -= 1;
                if (day === 0) {
                    if (month === 4 || month === 6 || month === 9 || month === 11) {
                        day = 30;
                    } else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
                        day = 31;
                        month -= 1;
                        if (month === 0) {
                            month = 12;
                            year -= 1;
                        }
                    } else {
                        if (month === 2) {
                            if (checkYear) {
                                day = 29;
                            } else {
                                day = 28;
                            }
                        }
                    }
                }
            }
            result.textContent = `Ngày ${day} tháng ${month} năm ${year}`;
        }
        showResult.style.visibility = "visible";

    } else {
        alert("Vui lòng không để trống 3 ô trên");
    }
}
//-----------------------------//