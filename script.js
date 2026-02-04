const careers = [
    {
        name: "Công nghệ thông tin",
        field: "CNTT",
        school: "ĐH Công nghệ - ĐHQG Hà Nội",
        block: "A00, A01",
        desc: "Lập trình, phần mềm, AI"
    },
    {
        name: "Kỹ thuật phần mềm",
        field: "CNTT",
        school: "ĐH Bách Khoa Hà Nội",
        block: "A00, A01",
        desc: "Phát triển ứng dụng, hệ thống"
    },
    {
        name: "Y đa khoa",
        field: "Y dược",
        school: "ĐH Y Hà Nội",
        block: "B00",
        desc: "Bác sĩ điều trị"
    },
    {
        name: "Dược học",
        field: "Y dược",
        school: "ĐH Dược Hà Nội",
        block: "B00",
        desc: "Nghiên cứu và phân phối thuốc"
    },
    {
        name: "Quản trị kinh doanh",
        field: "Kinh tế",
        school: "ĐH Kinh tế Quốc dân",
        block: "A00, D01",
        desc: "Quản lý, khởi nghiệp"
    },
    {
        name: "Marketing",
        field: "Kinh tế",
        school: "ĐH Thương Mại",
        block: "D01",
        desc: "Truyền thông, thương hiệu"
    },
    {
        name: "Sư phạm Toán",
        field: "Sư phạm",
        school: "ĐH Sư phạm Hà Nội",
        block: "A00",
        desc: "Giảng dạy toán học"
    },
    {
        name: "Ngôn ngữ Anh",
        field: "Xã hội",
        school: "ĐH Ngoại Ngữ - ĐHQG",
        block: "D01",
        desc: "Biên phiên dịch, giáo dục"
    },
    {
        name: "Thiết kế đồ họa",
        field: "Nghệ thuật",
        school: "ĐH Mỹ thuật Công nghiệp",
        block: "H00",
        desc: "Thiết kế, sáng tạo"
    },
    {
        name: "Kiến trúc",
        field: "Kỹ thuật",
        school: "ĐH Kiến trúc Hà Nội",
        block: "V00",
        desc: "Thiết kế công trình"
    }
];

const careerList = document.getElementById("careerList");
const searchInput = document.getElementById("searchInput");
const blockFilter = document.getElementById("blockFilter");

function displayCareers(list) {
    careerList.innerHTML = "";
    list.forEach(c => {
        careerList.innerHTML += `
            <div class="career">
                <h3>${c.name}</h3>
                <span><strong>Nhóm:</strong> ${c.field}</span><br>
                <span><strong>Trường:</strong> ${c.school}</span><br>
                <span><strong>Khối:</strong> ${c.block}</span>
                <p>${c.desc}</p>
            </div>
        `;
    });
}

function filterCareers() {
    const keyword = searchInput.value.toLowerCase();
    const block = blockFilter.value;

    const result = careers.filter(c =>
        (c.name.toLowerCase().includes(keyword) ||
         c.school.toLowerCase().includes(keyword)) &&
        (block === "" || c.block.includes(block))
    );

    displayCareers(result);
}

searchInput.addEventListener("keyup", filterCareers);
blockFilter.addEventListener("change", filterCareers);

displayCareers(careers);