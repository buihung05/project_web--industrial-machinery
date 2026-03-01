// js thông tin sản phẩm//
const modal = document.getElementById("modal");
const buttons = document.querySelectorAll(".xemthongtin");
const cancelBtn = document.querySelector(".cancel1-btn");

const tenmay = document.getElementById("tenmay");
const congsuat = document.getElementById("congsuat");
const xuatxu = document.getElementById("xuatxu");
const baohanh = document.getElementById("baohanh");

buttons.forEach(button => {
    button.addEventListener("click", function() {

        tenmay.textContent = this.dataset.ten;
        congsuat.textContent = "Công suất: " + this.dataset.congxuat;
        xuatxu.textContent = "Xuất xứ: " + this.dataset.xuatxu;
        baohanh.textContent = "Bảo hành: " + this.dataset.baohanh;

        modal.style.display = "flex";
    });
});

cancelBtn.addEventListener("click", function() {
    modal.style.display = "none";
});


// js ani ảnh//
const productImages = document.querySelectorAll(".product-img");
const imageModal = document.getElementById("imageModal");
const mainImage = document.getElementById("mainImage");
const thumbnails = document.getElementById("thumbnails");
const closeBtn = imageModal.querySelector(".cancel2-btn");
const prevBtn = imageModal.querySelector(".prev");
const nextBtn = imageModal.querySelector(".next");

let currentIndex = 0;
let imageList = [];

productImages.forEach(img => {
    img.addEventListener("click", function() {

        imageList = this.dataset.images.split(",");
        currentIndex = 0;

        showImage();
        loadThumbnails();

        imageModal.style.display = "flex";
    });
});

function showImage() {
    mainImage.src = imageList[currentIndex];
}

function loadThumbnails() {
    thumbnails.innerHTML = "";

    imageList.forEach((src, index) => {
        const thumb = document.createElement("img");
        thumb.src = src;

        thumb.addEventListener("click", function() {
            currentIndex = index;
            showImage();
        });

        thumbnails.appendChild(thumb);
    });
}

prevBtn.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
    showImage();
});

nextBtn.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % imageList.length;
    showImage();
});

closeBtn.addEventListener("click", function() {
    imageModal.style.display = "none";
});

// js search //

document.addEventListener("DOMContentLoaded", function () {

    let searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", function () {

        let keyword = this.value.toLowerCase();
        let items = document.querySelectorAll(".item");
        let found = false;

        items.forEach(function (item) {

            let title = item.querySelector("h3").textContent.toLowerCase();

            if (title.includes(keyword)) {
                item.style.display = "";
                found = true;
            } else {
                item.style.display = "none";
            }

        });

        let noResult = document.getElementById("noResult");

        if (!found && keyword !== "") {
            noResult.style.display = "block";
        } else {
            noResult.style.display = "none";
        }

    });

});