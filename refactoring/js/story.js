/* ---------- 전체 이야기 ---------- */
const jump = document.querySelector(".jump"),
  jumpIn = document.querySelector(".jump-in");
const markJumpEnd = () =>
  jump.classList.toggle("at-end", jumpIn.scrollLeft + jumpIn.clientWidth >= jumpIn.scrollWidth - 4);
jumpIn.addEventListener("scroll", markJumpEnd, { passive: true });
window.addEventListener("resize", markJumpEnd);
const CHAPTERS = [...jump.querySelectorAll("[data-go]")].map(b => b.dataset.go);
function showChapter(id) {
  CHAPTERS.forEach(c => {
    document.getElementById(c).hidden = c !== id;
  });
  document.querySelectorAll(".story").forEach(s => {
    s.hidden = !s.querySelector(`#${id}`);
  });
  document.querySelector(".top").hidden = id !== CHAPTERS[0];
  jump.querySelectorAll("[data-go]").forEach(b => {
    const now = b.dataset.go === id;
    b.setAttribute("aria-current", String(now));
    if (now)
      jumpIn.scrollTo({
        left: b.offsetLeft - (jumpIn.clientWidth - b.offsetWidth) / 2,
        behavior: reduced ? "auto" : "smooth",
      });
  });
  if (id === "sec-ideas") render();
  else stopLoop();
  markJumpEnd();
}
function goChapter(id) {
  try {
    history.pushState(null, "", `#${id}`);
  } catch (e) {}
  showChapter(id);
  window.scrollTo(0, 0);
}
const chapterOfHash = () => {
  const h = location.hash.slice(1);
  if (CHAPTERS.includes(h)) return h;
  return IDEAS.some(i => h.startsWith(`${i.id}-`)) ? "sec-ideas" : CHAPTERS[0];
};
CHAPTERS.slice(0, -1).forEach((id, k) => {
  const next = CHAPTERS[k + 1],
    name = jump.querySelector(`[data-go="${next}"]`).textContent;
  const box = id === "sec-ideas" ? document.querySelector("#sec-ideas main") : document.getElementById(id);
  box.insertAdjacentHTML(
    "beforeend",
    `<button class="next chapter" type="button" data-chapter="${next}">다음 이야기: ${name} →</button>`,
  );
});
document.addEventListener("click", e => {
  const b = e.target.closest("[data-go], [data-chapter]");
  if (b) goChapter(b.dataset.go || b.dataset.chapter);
});
window.addEventListener("popstate", () => {
  readHash();
  showChapter(chapterOfHash());
});
showChapter(chapterOfHash());
let compassTurn = 0;
document.getElementById("spin").addEventListener("click", () => {
  compassTurn += 90 + Math.floor(Math.random() * 180);
  document.getElementById("compassBody").style.transform = `rotate(${compassTurn}deg)`;
});
