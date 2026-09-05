document.addEventListener("DOMContentLoaded", function () {

    const menuButton =
        document.querySelector(".menu-button");

    const nav =
        document.querySelector(".nav");


    /*
     * スマートフォン用メニュー
     */

    if (!menuButton || !nav) {
        return;
    }


    /*
     * メニューを閉じる処理
     */

    function closeMenu() {

        nav.classList.remove("active");

        menuButton.classList.remove("active");

        menuButton.setAttribute(
            "aria-expanded",
            "false"
        );

        menuButton.setAttribute(
            "aria-label",
            "メニューを開く"
        );

    }


    /*
     * メニューを開く / 閉じる
     */

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                nav.classList.toggle("active");


            menuButton.classList.toggle(
                "active",
                isOpen
            );


            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );


            menuButton.setAttribute(
                "aria-label",
                isOpen
                    ? "メニューを閉じる"
                    : "メニューを開く"
            );

        }
    );


    /*
     * メニュー内のリンクをクリックしたら閉じる
     */

    const navLinks =
        nav.querySelectorAll("a");


    navLinks.forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                closeMenu();

            }
        );

    });


    /*
     * メニューの外側をクリックしたら閉じる
     */

    document.addEventListener(
        "click",
        function (event) {

            const clickedInsideNav =
                nav.contains(event.target);

            const clickedMenu =
                menuButton.contains(event.target);


            if (
                !clickedInsideNav &&
                !clickedMenu
            ) {

                closeMenu();

            }

        }
    );


    /*
     * ESCキーでメニューを閉じる
     */

    document.addEventListener(
        "keydown",
        function (event) {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );

});
