//ОТКРЫТИЕ/ЗКРЫТИЕ ГАМБУРГЕР-МЕНЮ
(function mobileMenu() {

      
    const navBar = document.querySelector('.nav');
    const navList = document.querySelector('.nav__list');

    const navBtn = document.querySelector('.nav__btn');
    const navItems = document.querySelectorAll('.nav__item');
    const wrap = document.querySelector('.wrapper');

    let op = 0;



    navBtn.addEventListener('click', function () {



        if (navBar.classList.contains('active')) {
            closeMenu();

        } else {
            openMenu();

        }
    });

    for (const navItem of navItems) {
        navItem.addEventListener('click', function () {

            if (navBar.classList.contains('active')) {
                closeMenu();
            };

        });
    }

    function closeMenu() {

        setTimeout(function closeOpac() {

            if (op > 0) {

                op -= 0.2;
                navList.style.opacity = op;

                setTimeout(closeOpac(), 1500);
            } else {

                navBar.classList.remove('active');
                wrap.style.height = 'auto';
            }


        }, 50);


    };

    function openMenu() {

        navBar.classList.add('active');
        wrap.style.height = '100%';
        setTimeout(function openOpac() {


            if (op <= 1) {
                op += 0.2;
                navList.style.opacity = op;

                setTimeout(openOpac(), 1500);
            }

        }, 50);




    };


}());