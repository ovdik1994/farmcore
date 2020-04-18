window.addEventListener("DOMContentLoaded", () => {
  tl = new TimelineLite();
  tl.to(".block2", 2, { x: "100%", ease: Power2.easeOut });
  tl.to(".block1 .logo img", 1, { opacity: 0 });
  tl.fromTo(".block1 p", 2, { opacity: 0, y: "-10%" }, { opacity: 1, y: 0 });
  tl.to(".block1", 0.8, { x: "-100%", ease: Power2.easeOut });
  tl.to(".block3", 0.8, { x: "100%", ease: Power2.easeOut });

  tl.fromTo(".header__logo", 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 0 });
  tl.fromTo(".header__title", 0.5, { opacity: 0, x: 0 }, { opacity: 1, x: 0 });
  tl.fromTo(
    ".header__features",
    0.1,
    { opacity: 0, y: 0 },
    { opacity: 1, y: 0 }
  );

  lax.setup(); // init

  const updateLax = () => {
    lax.update(window.scrollY);
    window.requestAnimationFrame(updateLax);
  };

  window.requestAnimationFrame(updateLax);

  let m = document.querySelector(".cursor");

  window.addEventListener("mousemove", (e) => {
    m.style.top = `${e.pageY}px`;
    m.style.left = `${e.pageX}px`;
  });
  window.addEventListener("mouseover", (e) => {
    item = e.target;
    if (item.classList.contains("mmm")) {
      m.classList.add("cursor-active");
      m.classList.remove("cursor-social");
      console.log(1);
    } else if (item.classList.contains("social")) {
      m.classList.add("cursor-social");
      m.classList.remove("cursor-active");
    } else {
      m.classList.remove("cursor-active");
      m.classList.remove("cursor-social");
    }
  });
});
