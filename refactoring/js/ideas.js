/* ---------- 놀라운 생각들: 고른 생각과 방법을 그리기 ---------- */
function render() {
  /* 숨겨진 상태에서는 그림 크기를 잴 수 없으므로, 장이 보일 때 그린다. */
  if (document.querySelector("#sec-ideas[hidden]")) return;
  stopLoop();
  renderNav();
  if (state.method === "comic") renderComic();
  else if (state.method === "guide") renderGuide();
  else if (state.method === "quiz") renderQuiz();
  else ({ photo: labPhoto, special: labSpecial, energy: labEnergy, general: labGeneral })[state.idea]();
  if (reduced)
    document.querySelectorAll("#stage svg").forEach(g => {
      if (g.pauseAnimations) {
        g.setCurrentTime(4.5);
        g.pauseAnimations();
      }
    });
  try {
    history.replaceState(null, "", `#${state.idea}-${state.method}`);
  } catch (e) {}
}
function readHash() {
  const [i, m] = location.hash.slice(1).split("-");
  if (IDEAS.some(x => x.id === i)) state.idea = i;
  if (METHODS.some(x => x.id === m)) state.method = m;
}

$("#ideas").addEventListener("click", e => {
  const b = e.target.closest("[data-i]");
  if (b) {
    state.idea = b.dataset.i;
    render();
  }
});
$("#methods").addEventListener("click", e => {
  const b = e.target.closest("[data-m]");
  if (b) {
    state.method = b.dataset.m;
    render();
  }
});
$("#stage").addEventListener("click", e => {
  const q = e.target.closest("[data-q]");
  if (q) {
    quizState[state.idea][q.dataset.q] = +q.dataset.k;
    renderQuiz();
    return;
  }
  if (e.target.closest("[data-retry]")) {
    quizState[state.idea] = {};
    renderQuiz();
    return;
  }
  const n = e.target.closest("[data-next]");
  if (!n) return;
  if (n.dataset.next === "method") state.method = METHODS[METHODS.findIndex(m => m.id === state.method) + 1].id;
  else {
    state.idea = IDEAS[(IDEAS.findIndex(i => i.id === state.idea) + 1) % IDEAS.length].id;
    state.method = "comic";
  }
  render();
  $("#core").scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
});
readHash();
render();
/* 실험실 캔버스는 그림을 쓰므로, 그림을 모두 불러온 뒤 다시 그린다. */
Promise.all(
  Object.keys(ICONS).map(
    n =>
      new Promise(res => {
        const im = imgOf(n);
        if (im.complete) res();
        else im.onload = im.onerror = res;
      }),
  ),
).then(() => {
  if (state.method === "lab") render();
});
