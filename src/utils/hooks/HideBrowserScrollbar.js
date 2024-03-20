export default function HideBrowserScrollbar() {
    let scrollHide = document.createElement("style");
    scrollHide.innerHTML = `section::-webkit-scrollbar {display: none;}`;
    document.head.appendChild(scrollHide);
  }