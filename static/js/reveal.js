(function () {
  document.documentElement.classList.add("js");

  var sections = document.querySelectorAll("main > section");

  if (!("IntersectionObserver" in window)) {
    sections.forEach(function (s) {
      s.classList.add("is-visible");
    });
    return;
  }

  var io = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach(function (s) {
    io.observe(s);
  });
})();
