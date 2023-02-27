const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        menuItem = document.querySelectorAll('.menu__link');
    
        hamburger.addEventListener('click', () =>{
            hamburger.classList.toggle('hamburger__active');
            menu.classList.toggle('menu__active');
        });

        menuItem.forEach(item => {
            item.addEventListener('click', () => {
                hamburger.classList.toggle('hamburger__active');
                menu.classList.toggle('menu__active');
            })
        })


    // closeElem.addEventListener('click', () =>{
    //     hamburger.classList.remove('hamburger__active');
    // })
    