import { html } from "../../../node_modules/lit-html/lit-html.js";

export const editTemplate = (album, submitHandler) => html`
<section id="edit">
    <div class="form">
          <h2>Edit Album</h2>
          <form class="edit-form" @submit=${(e) => submitHandler(e, album._id)}>
            <input type="text" name="singer" id="album-singer" placeholder="Singer/Band"  .value=${album.singer} />
            <input type="text" name="album" id="album-album" placeholder="Album"  .value=${album.album}/>
            <input type="text" name="imageUrl" id="album-img" placeholder="Image url" .value=${album.imageUrl} />
            <input type="text" name="release" id="album-release" placeholder="Release date"  .value=${album.release} />
            <input type="text" name="label" id="album-label" placeholder="Label"  .value=${album.label}/>
            <input type="text" name="sales" id="album-sales" placeholder="Sales"  .value=${album.sales} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;