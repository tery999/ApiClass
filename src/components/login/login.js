import { UserReadebleError } from "../../errors/UserReadebleError.js";

export class LoginComponent {
    constructor(authService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.loginHandler = this._loginHandler.bind(this);
        this.showView = this._showView.bind(this);

    }

    _showView() {
        let template = this.templateFunction(this.loginHandler);
        this.renderHandler(template);
    }

    async _loginHandler(e) {
        e.preventDefault();

        let form = e.target;
        let formData = new FormData(form);

        let email = formData.get("email");
        let password = formData.get('password');

        if (email == '' || password == '') {
            alert('Email and Password must not be empty');
            return;
        }

        let user = { email, password };
        try {
            let result = await this.authService.login(user);
            this.router.navigate('/dashboard');
        } catch (e) {
            if (e instanceof UserReadebleError) {
                alert(e.message);
            }
        }
    }
}