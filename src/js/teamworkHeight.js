//СЕКЦИЯ teamwork, ПОДЦЕПЛЯЕМ ВЫСОТУ БЛОКА ОТ ФОТО

export default function blockHeight() {
    

    const block = document.querySelector('.teamwork__block');
    const imgs = document.querySelectorAll('.teamwork__img');

    window.onload = findHeight;
    window.onresize = findHeight;


    function findHeight() {

        for (const img of imgs) {

            let imgHeight = img.offsetHeight;
            block.style.height = imgHeight + 'px';
        }
    };

};

blockHeight();

