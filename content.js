function verificarTextoDoceru() {
  const linkProcurado = "https://stream.doceru.com";
  const regex = new RegExp(`${linkProcurado}[^"']*`, 'g'); // Expressão regular para encontrar o link até a próxima aspa

  function buscarEmElementos(elemento) {
    const elementos = elemento.querySelectorAll('*'); // Seleciona todos os elementos
    const encontrados = [];

    elementos.forEach(el => {
      const texto = el.textContent;
      if (texto.includes(linkProcurado)) {
        const matches = texto.match(regex);
        if (matches) {
          matches.forEach(match => {
            encontrados.push(match);
          });
        }
      }
      Array.from(el.attributes).forEach(attr => {
        if (attr.value.includes(linkProcurado)) {
          const matches = attr.value.match(regex);
          if (matches) {
            matches.forEach(match => {
              encontrados.push(match);
            });
          }
        }
      });
    });

    return encontrados;
  }

  const resultados = buscarEmElementos(document.body);

  if (resultados.length > 0) {
    resultados.forEach(resultado => {
      const link = resultado.trim();
      if (link) {
        window.open(link, '_blank');
      }
    });
  } else {
    alert(`Nenhum link com "${linkProcurado}" foi encontrado.`);
  }
}

verificarTextoDoceru();
