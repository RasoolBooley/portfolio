import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Home");
    }

    async getHtml(){
        return `
        <header class="main-header">
            <h1>Rasool Booley</h1>
            <p>Your Next Web Developer</p>
            <a target="_blank" href="mailto:rasool.booley@gmail.com">Email Now!</a>
        </header>
        `;
    }
}