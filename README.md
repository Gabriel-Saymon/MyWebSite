# 🌐 Página Pessoal - Gabriel Saymon

Este é um projeto de página pessoal responsiva desenvolvido com **HTML**, **CSS** e **JavaScript** puro. A página funciona como um cartão de visitas online, apresentando uma foto de perfil, redes sociais, link para o currículo, e um botão para alternar entre os modos **claro** e **escuro**.

![Avatar Gabriel](./assets/AvatarGabriel.png)

## 🚀 Funcionalidades

- ✅ Layout responsivo (mobile e desktop)
- ✅ Alternância entre modo escuro e claro com animação
- ✅ Links externos para redes sociais e currículo
- ✅ Ícones modernos via Ionicons
- ✅ Efeitos de hover e blur no design

## 🧪 Tecnologias Utilizadas

- **HTML5**
- **CSS3** (com variáveis CSS e media queries)
- **JavaScript**
- [**Ionicons**](https://ionic.io/ionicons)
- [**Google Fonts**](https://fonts.google.com/specimen/Inter)

## 🗂️ Estrutura do Projeto

```
📁 projeto/
├── index.html
├── style.css
├── script.js
├── README.md
└── assets/
    ├── AvatarGabriel.png
    ├── bg-mobile.jpg
    ├── bg-mobile-light.jpg
    ├── bg-desktop.jpg
    ├── bg-desktop-light.jpg
    ├── MoonStars.svg
    └── Sun.svg
```

## 📥 Como Executar Localmente

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

2. Acesse a pasta:
```bash
cd seu-repositorio
```

3. Abra o arquivo `index.html` em seu navegador.

## ⚙️ Lógica JavaScript (script.js)

```js
function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
}
```

## 👨‍💻 Autor

**Gabriel Saymon**  
Desenvolvedor Front-end em formação  
[Instagram](https://instagram.com/gabriel__saymon) | [LinkedIn](https://www.linkedin.com/in/gabriel-saymon-da-concei%C3%A7ao-3a090227a/) | [GitHub](https://github.com/Gabriel-Saymon)

## 📄 Licença

Este projeto está licenciado sob a **MIT License**.
