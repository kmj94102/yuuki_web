const viedoList = [
    "https://www.youtube.com/embed/XVHrqGHkhnI",
    "https://www.youtube.com/embed/CHW7eWzbuCo",
    "https://www.youtube.com/embed/wl5YCR-zoRI",
    "https://www.youtube.com/embed/bOpmOch5JrI",
    "https://www.youtube.com/embed/FCypgZsdQ9U"
]
const imageList = [
    "image/image01.jpeg",
    "image/image03.jpeg",
    "image/image04.jpeg",
    "image/image05.jpeg",
    "image/image06.jpeg",
    "image/image07.jpeg",
    "image/image08.jpeg",
    "image/image02.jpeg",
    "image/image09.jpeg",
    "image/image10.jpeg",
]
var viedoPosition = 0
var imagePosition = 0

document.addEventListener("DOMContentLoaded", function() {
    resizeIframe();
    setImages();
    setMobileImages();
    setViedoTabs();

    document.getElementById("next").addEventListener("click", nextVideoClick);
    document.getElementById("prev").addEventListener("click", prevVideoClick);

    document.getElementById("bigImageNext").addEventListener("click", nextImageClick);
    document.getElementById("bigImagePrev").addEventListener("click", prevImageClick);

    const container = document.getElementById("bigImageContainer");
    container.addEventListener("click", function(){
        container.style.display = 'none';
    });

    const galleryItems = document.querySelectorAll(".gallery");
    galleryItems.forEach(item => {
        item.addEventListener("click", galleryItemClick);
    });

    let navigation = document.getElementById('navigation');
    document.querySelector('.menuToggle').addEventListener("click", function(){
        this.classList.toggle('active');
        navigation.classList.toggle('active');
    });

});

window.addEventListener('resize', resizeIframe);

function resizeIframe() {
    var $videoIframe = document.querySelector('#video-container');
    responsiveHeight = $videoIframe.offsetWidth * 0.5625;
    $videoIframe.style.height = responsiveHeight + "px";
}

function changeVideo(item) {
    var iframe = document.getElementById("video");
    iframe.src = item;
}

function nextVideoClick() {
    var item = '';
    if(viedoPosition < viedoList.length - 1) {
        item = viedoList[++viedoPosition];
    } else {
        viedoPosition = 0
        item = viedoList[viedoPosition];
    }
    changeVideo(item);
}

function prevVideoClick() {
    var item = '';
    if(viedoPosition > 0) {
        item = viedoList[--viedoPosition];
    } else {
        viedoPosition = viedoList.length - 1;
        item = viedoList[viedoPosition];
    }
    changeVideo(item);
}

function changeImage(item) {
    var image = document.getElementById("bigImage");
    image.src = item;
}

function prevImageClick(event) {
    event.stopPropagation();
    if(imagePosition > 0) {
        item = imageList[--imagePosition];
    } else {
        imagePosition = imageList.length - 1;
        item = imageList[imagePosition];
    }
    changeImage(item);
}

function nextImageClick(event) {
    event.stopPropagation();
        var item = '';
        if(imagePosition < imageList.length - 1) {
            item = imageList[++imagePosition];
        } else {
            imagePosition = 0
            item = imageList[imagePosition];
        }
    changeImage(item);
}

function galleryItemClick() {
    const container = document.getElementById("bigImageContainer");
    const indexValue = this.getAttribute('data-index');
    imagePosition = parseInt(indexValue);
    changeImage(imageList[imagePosition]);
    container.style.display = 'flex';
}

function setImages() {
    const galleryItems = document.querySelectorAll(".gallery");
    galleryItems.forEach((gallery, index) => {
        gallery.src = imageList[index];
    });
}

function setMobileImages() {
    const container = document.getElementById("mobileImage");
    imageList.forEach(item => {
        const image = document.createElement("img");
        image.src = item;
        container.appendChild(image);
    });
}

function setViedoTabs() {
    const viedoTab = document.getElementById("viedo_tab");
    viedoList.forEach((_, index) => {
        const tab = document.createElement('div');
        tab.classList.add('tab');
    
        if (index === 0) {
            tab.classList.add('active');
        }
    
        viedoTab.appendChild(tab);
    });

    const tabs = document.querySelectorAll('.tab');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', function() {
            // 모든 탭의 active 클래스 제거
            tabs.forEach(t => {
                t.classList.remove('active');
            });

            // 클릭된 탭에만 active 클래스 추가
            this.classList.add('active');
            viedoPosition = index;
            changeVideo(viedoList[viedoPosition]);
        });
    });
}