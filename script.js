document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");

    // Array de URLs das fotos existentes
    const fotos = [
        
        "foto/cilios2.jpg",
        "foto/cilios3.jpg",
        "foto/cilios4.jpg",
        "foto/cilios5.jpg",
        "foto/cilios6.jpg",
        // Adicione mais URLs conforme necessário
    ];

    // Adicionar fotos à galeria
    fotos.forEach(foto => {
        const img = document.createElement("img");
        img.src = foto;
        img.alt = "Design de Cílios";
        gallery.appendChild(img);
    });
});

const content = document.getElementById('content');

const tabs = document.querySelectorAll('.tab');

const contentData = {
    'tab1': 'O Volume Russo é uma técnica avançada que cria um efeito cheio e dramático, aplicando várias extensões em um único cílio natural.',
    'tab2': 'O Volume Brasileiro oferece um olhar natural e suave, usando extensões mais leves agrupadas em cada cílio natural para um resultado definido e delicado.',
    'tab3': 'O Efeito Molhado é perfeito para quem busca um visual elegante e polido. Cílios longos, curvados e lustrosos criam uma aparência sempre levemente umedecida.',
    'tab4': 'O Lifting de Cílios realça os cílios naturais, dando-lhes uma aparência mais longa e curvada sem a necessidade de extensões. Ideal para um visual natural.',
    'tab5': 'O Volume Power combina a densidade do Volume Russo com a precisão do Volume Brasileiro, criando um olhar profundamente volumoso e impactante.'
};

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tabId = tab.id;
        content.textContent = contentData[tabId];
    });
});

