document.addEventListener('DOMContentLoaded', () => {
    const botaoVerificar = document.getElementById('verificarLinkBtn');
    
    if (botaoVerificar) {
      botaoVerificar.addEventListener('click', () => {
        
        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
          chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            files: ['content.js']
          });
        });
      });
    } else {
      console.error('Elemento com id "verificarLinkBtn" não encontrado.');
    }
  });
  