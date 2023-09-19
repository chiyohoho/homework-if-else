var bai1Input1Value = document.querySelector("#bai1_input_1")
var bai1Input2Value = callElement("#bai1_input_2")
var bai1Input3Value = callElement("#bai1_input_3")
var showContent = callElement("#content")
var btnBaiTap1 = callElement("#bai_1")
var btnBaiTap1LowToHigh = callElement("#btn_body_content_lowtohigh")
console.log("check input 1: ", bai1Input1Value)
//------ Function Call Element
var bai1Array = [
    {
        number: ""
    }
]
//------ Function Call Element
function callElement(object) {
    return document.querySelector(object)
}

//------ Function Show Bài tập 1
function showBaiTap1() {
    var str = ""
    bai1Array.map((item) => {
        str += `
        <div class="title" style="margin-bottom: 20px;">
                <span><i class="fa-solid fa-sort" style="margin-right: 15px;"></i>Sắp xếp theo thứ tự</span>
            </div>

            <div id="show_body_content" class="body_content">
                <input type="text" placeholder="Nhập số thứ 1" id="bai1_input_1" class="bai1_input">
                <input type="text" placeholder="Nhập số thứ 2" id="bai1_input_2" class="bai1_input">
                <input type="text" placeholder="Nhập số thứ 3" id="bai1_input_3" class="bai1_input">
                <div class="show_buttons">
                    <span id="btn_body_content_lowtohigh" class="btn_sort">Sắp xếp theo thứ tự tăng dần</span>
                    <span id="btn_body_content_hightolow" class="btn_sort">Sắp xếp theo thứ tự giảm dần</span>
                </div>
            </div>

            <div id="show_body_result" class="body_result">
                <span id="bai1_result" class="show_bai1_result"><i class="fa-solid fa-arrow-up-1-9"></i></span>
            </div>
        `
    })
    showContent.innerHTML = str
}
btnBaiTap1.addEventListener("click", showBaiTap1)

//------ Sort low to high BT 1
function sortLowToHigh() {
    var bai1Number1 = Number(bai1Input1Value.value);
    var bai1Number2 = Number(bai1Input2Value.value);
    var bai1Number3 = Number(bai1Input3Value.value);

    console.log("check number 1 :", bai1Number1)
    console.log("check number 2 :", bai1Number2)
    console.log("check number 3 :", bai1Number3)
}
sortLowToHigh()
