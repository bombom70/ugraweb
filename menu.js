document.addEventListener("DOMContentLoaded", () => {
    const stateMenu = [
        {
            title: "Прямая трансляция",
            children: []
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
            children: []
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
            const spanEl = document.createElement("span");
            menuEl.classList.add(`menu-item-${depth}`);
            spanEl.classList.add(`menu-title-${depth}`);
            spanEl.textContent = title;
            menuEl.append(spanEl);
            element.append(menuEl);
            if (children?.length > 0) {
                spanEl.classList.add("arrow");
                return generateMenu(children, menuEl, depth + 1);
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

});