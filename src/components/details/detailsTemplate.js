import { html } from "../../../node_modules/lit-html/lit-html.js";


export const detailsTemplate = (album, isOwner, deleteHandler) =>
    html`
<section id="details">
<div id="details-wrapper">
          <p id="details-title">Album Details</p>
          <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
          </div>
          <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
              <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
          </div>
          
${isOwner ? html`<div id="likes">Likes: <span id="likes-count">0</span></div>` : ''};
        ${isOwner
            ? html`
           <div id="action-buttons">
           
            ${!isOwner ? html` <a href="/likes" id="like-btn">Like</a>` : ''}
            <a href=${`/edit/${album._id}`} id="edit-btn">Edit</a>
            <a href="javascript:void(0)" id="delete-btn" @click=${(e) => deleteHandler(album._id)}>Delete</a>
        </div>
        `: ''}     
    </div>
</section>
`