// import { UserReadebleError } from "../../errors/UserReadebleError.js";

export class EditComponent {
    constructor(albumService, renderHandler, templateFunction, router) {
        this.albumService = albumService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.editHandler = this._editHandler.bind(this);

    }

    async _showView(ctx) {
        let id = ctx.params.id;
        let album = await this.albumService.getById(id);

        let template = this.templateFunction(album, this.editHandler);
        this.renderHandler(template);
    }

    async _editHandler(e, id) {
        e.preventDefault();

        let form = e.target;
        let formData = new FormData(form);

        let album = {
            singer: formData.get('singer'),
            album: formData.get('album'),
            imageUrl: formData.get('imageUrl'),
            release: formData.get('release'),
            label: formData.get('label'),
            sales: formData.get('sales')
        }

        if (album.singer == '' || album.album == '' ||
            album.imageUrl == '' || album.release == '' ||
            album.label == '' || album.sales == '') {
            alert('All fields are required');
            return;
        }
        let result = await this.albumService.edit(id, album);
        this.router.navigate(`/details/${id}`);
    }
} 
