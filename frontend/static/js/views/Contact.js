import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Contact");
    }

    async getHtml(){
        return `        `;
    }
}