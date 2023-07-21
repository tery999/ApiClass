// import { UserReadebleError } from "../../errors/UserReadebleError.js";

export class DetailsComponent {
    constructor(authService, albumService, renderHandler, templateFunction, router) {
        this.authService = authService;
        this.albumService = albumService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.deleteHandler = this._deleteHandler.bind(this)
    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let album = await this.albumService.getById(id);
        let currentUserId = this.authService.getUserId();
        let isOwner = currentUserId === album._ownerId;
        let template = this.templateFunction(album, isOwner, this.deleteHandler);
        this.renderHandler(template);
    }

    async _deleteHandler(id) {
        let result = confirm('Are you sure you want to delete this item?');
        if (result == false) {
            return;
        }

        let deleteResult = await this.albumService.delete(id);
        this.router.navigate('/dashboard');
    }
}