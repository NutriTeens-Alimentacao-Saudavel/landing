/* Botão "Pausar animações": o letreiro e o Broxis se movem sem parar, então a pessoa precisa poder desligar. */
(() => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return; // o CSS já cuida desse caso
  const KEY = "nt-calm", root = document.documentElement;
  const read = () => { try { return localStorage.getItem(KEY) === "1" } catch (e) { return false } };
  const save = v => { try { localStorage.setItem(KEY, v ? "1" : "0") } catch (e) {} };
  const b = document.createElement("button");
  b.type = "button"; b.className = "calm-btn"; b.textContent = "Pausar animações";
  const apply = on => { root.classList.toggle("calm", on); b.setAttribute("aria-pressed", String(on)) };
  b.addEventListener("click", () => { const on = !root.classList.contains("calm"); apply(on); save(on) });
  apply(read());
  document.body.appendChild(b);
})();
