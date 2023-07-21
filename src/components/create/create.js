// import { UserReadebleError } from "../../errors/UserReadebleError.js";

export class CreateComponent {
    constructor(albumService, renderHandler, templateFunction, router) {
        this.albumService = albumService;
        this.renderHandler = renderHandler;
        this.templateFunction = templateFunction;
        this.router = router;
        this.showView = this._showView.bind(this);
        this.createHandler = this._createHandler.bind(this);

    }

    async _showView() {
        let template = this.templateFunction(this.createHandler);
        this.renderHandler(template);
    }

    async _createHandler(e) {
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
        let result = await this.albumService.create(album);
        this.router.navigate('/dashboard');
    }
} 
