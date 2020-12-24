import AbstractView from "./AbstractView.js";

export default class extends AbstractView{
    constructor(){
        super();
        this.setTitle("Contact");
    }

    async getHtml(){
        return `
        <div class="contact-page">
        <img src="./static/img/logo_transparent.png" srcset="">
        <h2 class="contact-text">Contact Me!</h2>

        <div class="contact-logos">
            <div>                
                <a target="_blank" href="mailto:rasool.booley@gmail.com">
                    <div class="logo-bg">
                        <i class="far fa-envelope fa-3x"></i>
                    </div>
                </a>
                <h3><a target="_blank" href="mailto:rasool.booley@gmail.com">Email</a></h3>
                <a target="_blank" href="mailto:rasool.booley@gmail.com">rasool.booley@gmail.com</a>
            </div>

            <div>                
                <a href="tel:0787176677">
                    <div class="logo-bg">
                        <i class="fas fa-mobile-alt fa-3x"></i>                        
                    </div>
                </a>
                <h3><a href="tel:0787176677">Phone</a></h3>
                <a href="tel:0787176677">078 717 6677</a>
            </div>

            <div>                
                <a target="_blank" href="https://www.linkedin.com/in/rasool-booley-949599139/">
                    <div class="logo-bg">
                        <i class="fab fa-linkedin-in fa-3x"></i>
                    </div>
                </a>
                
                <h3><a target="_blank" href="https://www.linkedin.com/in/rasool-booley-949599139/">LinkedIn</a></h3>
                <a target="_blank" href="https://www.linkedin.com/in/rasool-booley-949599139/">View Profile</a>
            </div>
            
            <div>                
                <a target="_blank" href="https://twitter.com/Snacc_Falcon">
                    <div class="logo-bg">
                        <i class="fab fa-twitter fa-3x"></i>                        
                    </div>
                </a>
                <h3><a target="_blank" href="https://twitter.com/Snacc_Falcon">Twitter</a></h3>
                <a target="_blank" href="https://twitter.com/Snacc_Falcon">Follow Me</a>
                
            </div>
        </div>
    </div>
        `;
    }
}