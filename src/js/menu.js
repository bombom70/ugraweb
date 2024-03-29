export default () => {
    document.addEventListener("DOMContentLoaded", () => {
        const stateMenu = [
            {
                title: "Прямая трансляция",
                children: [
                    {
                        title: "О Ханты-Мансийске"
                    },
                    {
                        title: "История кубка мира"
                    },
                    {
                        title: "Информация для участников"
                    }
                ]
            },
            {
                title: "Ханты-Мансийск",
                children: []
            },
            {
                title: "Новости",
                children: []
            },
            {
                title: "Участники",
                children: []
            },
            {
                title: "Основная информация",
                children: [
                    {
                        title: "О Ханты-Мансийске"
                    },
                    {
                        title: "История кубка мира"
                    },
                    {
                        title: "Информация для участников"
                    }
                ]
            },
            {
                title: "Результаты",
                children: []
            },
            {
                title: "Медиа",
                children: []
            },
            {
                title: "Контакты",
                children: [
                    {
                        title: "История кубка мира"
                    },
                    {
                        title: "Информация для участников"
                    }
                ]
            }
        ];
        const burgerMenu = document.querySelector(".burger-menu");
        const burgerWrapper = document.querySelector(".burger-wrapper");
        const btnBurgerMenu = document.querySelector(".btn-burger-wrapper");
        const btnСlose = document.querySelector(".btn-close");
        const headerMenu = document.querySelector(".header-menu");
        const main = document.querySelector(".main");
        const footer = document.querySelector(".footer");
        const generateMenu = (state, element, depth = 1) => {
            state.forEach(data => {
                const { title, children } = data;
                const menuEl = document.createElement("div");
                const aEl = document.createElement("a");
                menuEl.classList.add(`menu-item-${depth}`);
                aEl.classList.add(`menu-title-${depth}`);
                aEl.textContent = title;
                menuEl.append(aEl);
                element.append(menuEl);
                if (children?.length > 0) {
                    const arrow = document.createElement("div");
                    arrow.classList.add("arrow");
                    const subMenu = document.createElement("div");
                    subMenu.classList.add("sub-menu-mob");
                    aEl.append(arrow);
                    menuEl.append(subMenu);
                    return generateMenu(children, subMenu, depth + 1);
                }
            });
        };
        generateMenu(stateMenu, burgerMenu);

        btnBurgerMenu.addEventListener("click", () => {
            if (burgerWrapper.classList.contains("isShow")) {
                burgerWrapper.classList.remove("isShow");
                headerMenu.classList.remove("show-header-menu");
                main.style.display = 'block';
                footer.style.display = 'block';
                return;
            } else {
                main.style.display = 'none';
                footer.style.display = 'none';
                headerMenu.classList.add("show-header-menu");
                burgerWrapper.classList.add("isShow");
            }
        });

        btnСlose.addEventListener("click", () => {
            const asd = document.querySelector(".isShow");
            asd.classList.remove("isShow");
            main.style.display = 'block';
            footer.style.display = 'block';
        });

        const items = document.querySelectorAll(".menu-item-1");
        [...items].forEach(item => {
            item.addEventListener("click", () => {
                const arrowEl = item.querySelector(".arrow");
                const subMenu = item.querySelector(".sub-menu-mob");
                if (arrowEl === null || subMenu === null) {
                    return;
                }
                if (item.classList.contains("open")) {
                    item.classList.remove("open");
                    subMenu.classList.remove("activeSubMenu");
                    arrowEl.style.transform = "rotate(360deg)";
                    return;
                }
                item.classList.add("open");
                subMenu.classList.add("activeSubMenu");
                arrowEl.style.transform = "rotate(180deg)";
            });
        });

        const slider = () => {
            const carousel = document.querySelector(".carousel");
            const wrapper = document.querySelector(".carrousel-wrapper");
            const items = document.querySelectorAll(".carousel__item");
            const prevBtn = document.querySelector(".switcher_prev");
            const nextBtn = document.querySelector(".switcher_next");
            let width = wrapper.offsetWidth;
            let index;
            let offset;
            if (width === 1100) {
                index = Math.round(width / 200);
                offset = 233;
            } else {
                index = Math.round(width / 250) - 1;
                offset = 250;
            }
            let offsetFlex = offset;
            let counter = index;

            prevBtn.addEventListener("click", () => {
                nextBtn.style.backgroundImage = "url(img/next.svg)";
                nextBtn.style.transform = "rotate(360deg)";
                if (index - 1 === counter) {
                    prevBtn.style.backgroundImage = "url(img/prev.svg)";
                    prevBtn.style.transform = "rotate(360deg)";
                }
                if (index === counter) {
                    prevBtn.disabled = true;
                    return;
                }
                index -= 1;
                offset -= 250;
                carousel.style.left = -offset + 250 + 'px';
            });

            nextBtn.addEventListener("click", () => {
                prevBtn.style.transform = "rotate(180deg)";
                prevBtn.style.backgroundImage = "url(img/next.svg)";

                if (index === items.length - 2) {
                    nextBtn.style.transform = "rotate(180deg)";
                    nextBtn.style.backgroundImage = "url(img/prev.svg)";
                }
                if (index === items.length - 1) {
                    nextBtn.disabled = true;
                    return;
                }
                index += 1;
                offset += offsetFlex;
                carousel.style.left = -offset + offsetFlex + 'px';
            });
        }
        slider();
    });
}