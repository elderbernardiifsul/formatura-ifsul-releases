// Manual: ampliar capturas, destacar a seção atual no sumário e mostrar o botão "Topo". Sem dependências.
(() => {
  const dialogo = document.getElementById("ampliada");
  const palco = dialogo.querySelector(".ampliada__palco");
  for (const botao of document.querySelectorAll(".captura__ampliar")) {
    botao.addEventListener("click", () => {
      palco.replaceChildren(...[...botao.children].map((n) => n.cloneNode(true)));
      dialogo.showModal();
    });
  }
  dialogo.addEventListener("click", () => dialogo.close());

  dialogo.querySelector(".ampliada__fechar").addEventListener("click", () => dialogo.close());

  const links = new Map([...document.querySelectorAll(".sumario a")].map((a) => [a.hash.slice(1), a]));
  const lateralFixa = matchMedia("(min-width:801px)");
  const marcar = (id) => {
    const atual = links.get(id);
    if (!atual) return;
    for (const a of links.values()) a.removeAttribute("aria-current");
    atual.setAttribute("aria-current", "true");
    if (lateralFixa.matches) atual.scrollIntoView({ block: "nearest" });
  };
  const observador = new IntersectionObserver((entradas) => {
    for (const entrada of entradas) {
      if (entrada.isIntersecting) marcar(entrada.target.id);
    }
  }, { rootMargin: "-15% 0px -75% 0px" });
  for (const secao of document.querySelectorAll("section.secao-manual")) observador.observe(secao);

  const topo = document.getElementById("voltar-topo");
  const noTopo = () => { if (scrollY < 50) marcar("comece"); };
  noTopo();
  addEventListener("scroll", () => { topo.classList.toggle("visivel", scrollY > 600); noTopo(); }, { passive: true });
  addEventListener("beforeprint", () => document.querySelectorAll("details.faq").forEach((d) => { d.open = true; }));
})();
