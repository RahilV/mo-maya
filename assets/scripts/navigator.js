window.onload = () => {
    const Slider = function (pages, pagination) {
        let slides = [],
            btns = [],
            count = 0,
            current = 0,
            touchstart = 0,
            animation_state = false;

        const init = () => {
            document.getElementById('logo').style.animation = "logogo 1.2s forwards";
            document.getElementById('page2').style.visibility = "hidden";
            document.getElementById('page3').style.visibility = "hidden";
            document.getElementById('page4').style.visibility = "hidden";
            slides = pages.children;
            count = slides.length;
            for (let i = 0; i < count; i++) {
                slides[i].style.bottom = -(i * 100) + '%';
                let btn = document.createElement('li');
                btn.dataset.slide = i;
                btn.addEventListener('click', btnClick)
                btns.push(btn);
                pagination.appendChild(btn);
            }
            btns[0].classList.add('active');
        }
        const toProjectSection = () => {
            // we create text
            document.getElementById('wefoot1text').classList.add("animate");
            document.getElementById('wefoot1text').classList.remove("unanimate");

            // we create left arrow
            document.getElementById('arrowleft').classList.add("arrowleftanimate");
            document.getElementById('arrowleft').classList.remove("arrowleftunanimate");

            // we creat right arrow
            document.getElementById('arrowright').classList.add("arrowrightanimate");
            document.getElementById('arrowright').classList.remove("arrowrightunanimate");

            // proj left arrow
            document.getElementById('leftProject').classList.add("projarrowanim");
            document.getElementById('leftProject').classList.remove("projarrowunanim");

            // proj right arrow
            document.getElementById('rightProject').classList.add("projarrowanim");
            document.getElementById('rightProject').classList.remove("projarrowunanim");
        }

        const toWeCreatSection = () => {
            // we create text
            document.getElementById('wefoot1text').classList.add("unanimate");
            document.getElementById('wefoot1text').classList.remove("animate");

            // we create left arrow
            document.getElementById('arrowleft').classList.add("arrowleftunanimate");
            document.getElementById('arrowleft').classList.remove("arrowleftanimate");

            // we create right arrow
            document.getElementById('arrowright').classList.add("arrowrightunanimate");
            document.getElementById('arrowright').classList.remove("arrowrightanimate");

            // proj left arrow
            document.getElementById('leftProject').classList.add("projarrowunanim");
            document.getElementById('leftProject').classList.remove("projarrowanim");

            // proj right arrow
            document.getElementById('rightProject').classList.add("projarrowunanim");
            document.getElementById('rightProject').classList.remove("projarrowanim");
        }
        const loadTypeAnim = () => {
            // typing animation scale up animation
            document.getElementById('typeanim').play();
            document.getElementById('type').classList.add("showtype");
            document.getElementById('type').classList.remove("hidetype");
        }

        const hideTypeAnim = () => {
            // typing animation scale up animation
            document.getElementById('type').classList.add("hidetype");
            document.getElementById('typeanim').stop();
        }

        const loadFooterAnim = () => {
            document.getElementById('social1').classList.add("fallanimation");
            document.getElementById('social2').classList.add("fallanimation");
            document.getElementById('social3').classList.add("fallanimation");
            document.getElementById('social1').classList.remove("raiseanimation");
            document.getElementById('social2').classList.remove("raiseanimation");
            document.getElementById('social3').classList.remove("raiseanimation");
            document.getElementById('footsocial1').classList.add("footersocialanim");
            document.getElementById('footsocial2').classList.add("footersocialanim");
            document.getElementById('footsocial3').classList.add("footersocialanim");
        }
        const loadSocialLinksAnim = () => {
            document.getElementById('social1').classList.add("raiseanimation");
            document.getElementById('social2').classList.add("raiseanimation");
            document.getElementById('social3').classList.add("raiseanimation");
            document.getElementById('social1').classList.remove("fallanimation");
            document.getElementById('social2').classList.remove("fallanimation");
            document.getElementById('social3').classList.remove("fallanimation");
            document.getElementById('footsocial1').classList.remove("footersocialanim");
            document.getElementById('footsocial2').classList.remove("footersocialanim");
            document.getElementById('footsocial3').classList.remove("footersocialanim");
        }

        const hideproj = () => {
            document.getElementById('work').classList.add("hideprojects");
            document.getElementById('work').classList.remove("showprojects");
        }
        const showproj = () => {
            document.getElementById('work').classList.remove("hideprojects");
            document.getElementById('work').classList.add("showprojects");
        }
        const gotoNum = (index) => {
            if ((index != current) && !animation_state) {
                if(current == 0 && index == 1){
                    loadTypeAnim();
                    var evt = new KeyboardEvent("keydown", {
                        bubbles : true, cancelable : true, key : "z", shiftKey : true, keyCode : 90
                    });
                    document.getElementById('hero').dispatchEvent(evt);
                    document.getElementById('scrollicon').style.animation = "goaway 0.5s forwards";
                    document.getElementById('logo').style.animation = "logocome 1.2s forwards";
                    document.getElementById('page2').style.visibility = "visible";
                }
                else if (current == 1 && index == 2){
                    toProjectSection();
                    hideTypeAnim();
                    document.getElementById('page3').style.visibility = "visible";
                }
                else if (current == 2 && index == 1){
                    toWeCreatSection();
                    loadTypeAnim();
                }
                else if(current ==2 && index == 3){
                    loadFooterAnim();
                    hideproj();
                    setTimeout(function() {
                        document.getElementById("nav").style.bottom = "7vh";
                      }, 575);
                    document.getElementById('page2').style.visibility = "hidden";
                    document.getElementById('page3').style.visibility = "hidden";
                    document.getElementById('page4').style.visibility = "visible";
                    document.getElementById('footer').style.animation = "showfooter 1s forwards"
                }
                else if(current == 3 && index == 2){
                    showproj();
                    loadSocialLinksAnim();
                    document.getElementById("nav").style.bottom = "0";
                    document.getElementById('page2').style.visibility = "visible";
                    document.getElementById('page3').style.visibility = "visible";
                    document.getElementById('footer').style.animation = "hidefooter 1s forwards"
                }
                else if (current == 1 && index == 0){
                    console.log(index);
                    var evt = new KeyboardEvent("keydown", {bubbles : true, cancelable : true, key : "z", shiftKey : true, keyCode : 90});
                    document.getElementById('hero').dispatchEvent(evt);
                    document.getElementById('scrollicon').style.animation = "comeaway 0.5s forwards";
                    document.getElementById('logo').style.animation = "logogo 1.2s forwards";
                    hideTypeAnim();
                }
                animation_state = true;
                setTimeout(() => animation_state = false, 500);
                btns[current].classList.remove('active');
                current = index;
                btns[current].classList.add('active');
                for (let i = 0; i < count; i++) {
                    slides[i].style.bottom = (current - i) * 100 + '%';
                }
            }
        }

        const gotoNext = () => current < count - 1 ? gotoNum(current + 1) : false;
        const gotoPrev = () => current > 0 ? gotoNum(current - 1) : false;
        const btnClick = (e) => gotoNum(parseInt(e.target.dataset.slide));
        pages.ontouchstart = (e) => touchstart = e.touches[0].screenY;
        console.log(touchstart);
        // pages.ontouchmove = (e) => console.log(e.changedTouches[0]);
        pages.ontouchmove = (e) => touchstart < e.changedTouches[0].screenY ? gotoPrev() : gotoNext();
        // console.log(ontouchmove);
        pages.onmousewheel = pages.onwheel = (e) => e.deltaY < 0 ? gotoPrev() : gotoNext();

        init();
    }

    let pages = document.querySelector('.pages');
    let pagination = document.querySelector('.pagination');
    let slider = new Slider(pages, pagination)
}