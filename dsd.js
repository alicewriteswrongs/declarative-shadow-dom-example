class DSDElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    if (this.shadowRoot) {
      const spanEl = document.createElement("span");
      spanEl.textContent =
        "this content was created in connectedCallback after 'rehydrating'";
      spanEl.classList.add("hydrated");

      const divEl = document.createElement("div");
      divEl.appendChild(spanEl);
      this.shadowRoot.appendChild(divEl);

      const style = document.createElement("style");
      style.textContent = `:host .hydrated {
        color: red;
      }`;
      this.shadowRoot.append(style);
    } else {
      this.attachShadow({ mode: "open" });

      const spanEl = document.createElement("span");
      spanEl.textContent =
        "this content was created in connectedCallback from scratch!";
      this.shadowRoot.appendChild(spanEl);

      const style = document.createElement("style");
      style.textContent = `span {
        color: pink;
      }`;
      this.shadowRoot.append(style);
    }
  }
}

window.customElements.define("dsd-element", DSDElement);
