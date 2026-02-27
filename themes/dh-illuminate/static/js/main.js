/* DH Illuminate — Main JS */
(function () {
  "use strict";

  /* ── Navbar: scroll class + mobile hamburger ── */
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".navbar__hamburger");
  const nav = document.querySelector(".navbar__nav");

  if (navbar) {
    const onScroll = () => {
      navbar.classList.toggle("scrolled", window.scrollY > 20);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  if (hamburger && nav) {
    hamburger.addEventListener("click", () => {
      const open = hamburger.classList.toggle("open");
      nav.classList.toggle("open", open);
      hamburger.setAttribute("aria-expanded", open);
    });

    // Close on link click (mobile)
    nav.querySelectorAll(".navbar__link").forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      });
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      if (!navbar.contains(e.target)) {
        hamburger.classList.remove("open");
        nav.classList.remove("open");
        hamburger.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* ── Active nav link ── */
  const navLinks = document.querySelectorAll(".navbar__link");
  const path = window.location.pathname;
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href === "/" && path === "/") {
      link.classList.add("active");
    } else if (href !== "/" && path.startsWith(href)) {
      link.classList.add("active");
    }
  });

  /* ── Hero background pan ── */
  const heroBg = document.querySelector(".hero__bg");
  if (heroBg) {
    const img = new Image();
    img.onload = () => heroBg.classList.add("loaded");
    img.src = heroBg.style.backgroundImage
      .replace(/url\(["']?/, "")
      .replace(/["']?\)/, "");
  }

  /* ── Intersection Observer: fade-up cards ── */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.animationPlayState = "running";
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
  );

  document.querySelectorAll(".animate-fade-up").forEach((el) => {
    el.style.animationPlayState = "paused";
    io.observe(el);
  });

  /* ── TOC active-link tracking ── */
  const tocLinks = document.querySelectorAll(".post-toc nav a");
  if (tocLinks.length) {
    const headings = Array.from(
      document.querySelectorAll(".post-content h2, .post-content h3"),
    );

    const tocObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            tocLinks.forEach((link) => {
              link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${id}`,
              );
            });
          }
        });
      },
      {
        rootMargin: `-${getComputedStyle(document.documentElement).getPropertyValue("--navbar-height") || "72px"} 0px -70% 0px`,
      },
    );

    headings.forEach((h) => tocObserver.observe(h));
  }

  /* ── Reading progress bar ── */
  const article = document.querySelector(".post-content");
  if (article) {
    const bar = document.createElement("div");
    bar.style.cssText =
      "position:fixed;top:0;left:0;height:3px;background:linear-gradient(90deg,#f59e0b,#0d9488);z-index:9999;transition:width 0.1s linear;width:0;";
    document.body.appendChild(bar);

    window.addEventListener(
      "scroll",
      () => {
        const rect = article.getBoundingClientRect();
        const total = article.offsetHeight;
        const scrolled = -rect.top;
        const pct = Math.min(Math.max((scrolled / total) * 100, 0), 100);
        bar.style.width = pct + "%";
      },
      { passive: true },
    );
  }
})();
