function showTopBar(country = "France", vat = 20) {
  setTimeout(() => {
    const bar = document.querySelector("section.country-bar");
    const shiftBar = document.querySelector("section.layout-shift-prevent-bar");
    if (!bar) {
      return;
    }

    bar.innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`;
    bar.classList.remove("hidden");
    shiftBar.classList.add("hidden");
  }, 1000);
}

showTopBar();
