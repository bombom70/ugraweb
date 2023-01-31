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
    const btnBurgerMenu = document.querySelector(".btn__burger-menu");
    const btnСlose = document.querySelector(".btn-close");
    const headerMenu = document.querySelector(".header-menu");
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
                console.log(children);
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
            return;
        } else {
            headerMenu.classList.add("show-header-menu");
            burgerWrapper.classList.add("isShow");
        }
    });

    btnСlose.addEventListener("click", () => {
        const asd = document.querySelector(".isShow");
        asd.classList.remove("isShow");
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
});