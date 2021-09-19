const navBut = document.querySelector('.navigation__header');
const actCont = document.querySelector('.activity__content_right');
const actProf = document.querySelector('.right-activity-content__profile');
const rightMinIcon = document.querySelector('.right-menu-header__minimize-icon');

function navOpen(ev) {
    if (window.innerWidth <= 768) {
        if (this.classList.contains('navigation__header_closed')) {
            // console.log(this);
            // console.log(window.innerWidth);
            this.classList.remove('navigation__header_closed');
            actCont.classList.remove('activity__content_right-closed');
            setTimeout(() => { actProf.classList.remove('right-activity-content__profile_closed'); }, 1000);
            rightMinIcon.classList.add('right-menu-header__minimize-icon_open');
        }
    }
}

function navClose(ev) {
    if (window.innerWidth <= 768) {
        if (rightMinIcon.classList.contains('right-menu-header__minimize-icon_open')) {
            console.log(this.classList);
            navBut.classList.add('navigation__header_closed');
            actCont.classList.add('activity__content_right-closed');
            actProf.classList.add('right-activity-content__profile_closed');
            rightMinIcon.classList.remove('right-menu-header__minimize-icon_open');
            event.stopPropagation();
        }
    }
}

function navCloseByProf(ev) {
    if (window.innerWidth <= 768) {
        navClose(ev);
    }
}

navBut.addEventListener('click', navOpen);
rightMinIcon.addEventListener('click', navClose);
actProf.addEventListener('click', navCloseByProf)
