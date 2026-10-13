const menuButton = document.querySelector(".menu-toggle");
      const navigation = document.querySelector(".nav-links");

      menuButton.addEventListener("click", () => {
        const isOpen = menuButton.getAttribute("aria-expanded") === "true";
        menuButton.setAttribute("aria-expanded", String(!isOpen));
        menuButton.setAttribute("aria-label", isOpen ? "Open navigation menu" : "Close navigation menu");
        navigation.classList.toggle("is-open", !isOpen);
      });

      navigation.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
          menuButton.setAttribute("aria-expanded", "false");
          menuButton.setAttribute("aria-label", "Open navigation menu");
          navigation.classList.remove("is-open");
        }
      });

      document.querySelector("#year").textContent = String(new Date().getFullYear());

      if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const observer = new IntersectionObserver((entries, currentObserver) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              currentObserver.unobserve(entry.target);
            }
          }
        }, { threshold: 0.12 });

        document.querySelectorAll(".section-heading, .about-grid, .timeline-item, .education-card, .project-card, .achievement-card, .publication").forEach((element) => {
          element.classList.add("reveal");
          observer.observe(element);
        });
      }
