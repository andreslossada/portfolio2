  const parent = document.getElementById("parent");

  // -------------------------------------------------
  window.addEventListener("DOMContentLoaded", (event) => {
    const articleItems = document.querySelectorAll("section article");
    // const articleBackDrop = document.querySelector(
    //   "#article-backdrop"
    // ) as HTMLElement;

    setTimeout(() => {
      const firstItem = articleItems[0] as HTMLElement;
      const left = firstItem.offsetLeft;
      const top = firstItem.offsetTop;

      articleBackDrop.style.transition = "none";
      articleBackDrop.style.setProperty("--left", `${left}px`);
      articleBackDrop.style.setProperty("--top", `${top}px`);
      articleBackDrop.style.opacity = "0";
      articleBackDrop.style.visibility = "hidden";

      setTimeout(() => {
        articleBackDrop.style.transition = "";
      }, 50);
    }, 100);

    articleItems.forEach((item: HTMLElement, index) => {
      item.addEventListener("mouseenter", () => {
        // parent.classList.add("backdrop-blur-[1px]");

        const { width, height } = item.getBoundingClientRect();
        const left = item.offsetLeft;
        const top = item.offsetTop;
        articleBackDrop.style.setProperty("--left", `${left}px`);
        articleBackDrop.style.setProperty("--top", `${top}px`);
        articleBackDrop.style.setProperty("--width", `${width}px`);
        articleBackDrop.style.setProperty("--height", `${height}px`);

        switch (index) {
          case 0:
            articleBackDrop.style.backgroundColor = "#eab308";
            break;
          case 1:
            articleBackDrop.style.backgroundColor = "#3b82f6";
            break;
          case 2:
            articleBackDrop.style.backgroundColor = "#1e40af";
            break;
          default:
            articleBackDrop.style.backgroundColor = "#eab308";
        }

        articleBackDrop.style.opacity = "1";
        articleBackDrop.style.visibility = "visible";
      });

      item.addEventListener("mouseleave", () => {
        // parent.classList.remove("backdrop-blur-[1px]");

        articleBackDrop.style.opacity = "0";
        articleBackDrop.style.visibility = "hidden";
      });
    });

    window.addEventListener("DOMContentLoaded", (event) => {
      const articleItems = document.querySelectorAll("section article");

      articleItems.forEach((item) => {
        item.classList.add("transition");
      });
    });
  });

  // -------------------------------------------------
  // LINES GRID
  // window.onload = function () {
  //   document.documentElement.style.setProperty("--color", colorObj["letter-n"]);
  //   document.documentElement.style.setProperty(
  //     "--color2",
  //     colorObj["letter-d"]
  //   );
  // };
  // -------------------------------------------------