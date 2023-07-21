// import { UserReadebleError } from "../../errors/UserReadebleError.js";

export class DashboardComponent {
    constructor(albumService, renderHandler, templateFunction) {
        this.albumService = albumService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.showView = this._showView.bind(this);

    }

    async _showView() {
        let albums = await this.albumService.getAll();
        let template = this.templateFunction(albums);
        this.renderHandler(template);
    }
}