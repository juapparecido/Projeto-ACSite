/* Extra small devices (phones, 600px and down) */
@media only screen and (min-width: 450px) {
    main.main-content-container>section.main-content-section>ul>iframe.size-iframe {
        display: block;
        margin: 0 auto;
        width: 285px;
        height: 225px;
    }
}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    main.main-content-container {
        width: 100%;
        padding: 20px 30px;
    }

    main.main-content-container>section.main-content-section>img.size-img {
        width: 475px;
    }

    main.main-content-container>section.main-content-section>img.size-img-collab {
        width: 305px;
    }

    main.main-content-container>section.main-content-section>iframe.size-iframe {
        display: block;
        margin: 30px auto 0 auto;
        width: 490px;
        height: 315px;
    }

    main.main-content-container>section.main-content-section>ul>iframe.size-iframe {
        display: block;
        margin: 0 auto;
        width: 425px;
        height: 275px;
    }
}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    main.main-content-container {
        padding: 20px 50px;
    }

    main.main-content-container>section.main-content-section>img.size-img {
        width: 590px;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 1024px) {

    main.main-content-container {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: start;
        width: 100%;
        padding: 30px 70px;
    }

    main.main-content-container>section.main-content-section>img.size-img {
        width: 590px;
    }

    main.main-content-container>section.main-content-section>img.size-img-collab {
        width: 355px;
    }

    main.main-content-container>section.main-content-section>ol,
    main.main-content-container>section.main-content-section>ul {
        margin-top: 30px;
        padding: 0 100px;
        font-size: 1em;
        text-indent: 10px;
        line-height: 1.5;
    }

    main.main-content-container>section.main-content-section>ol>div.books-img {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        align-items: center;
        padding: 10px 30px;
    }

    main.main-content-container>section.main-content-section>ol>div.books-img>img {
        display: inline-block;
        width: 215px;
    }

    main.main-content-container>section.main-content-section>ol>div.books-img>blockquote {
        display: inline-block;
        padding: 10px;
        margin: 20px auto 0 auto;
        width: 50%;
    }

    main.main-content-container>section.main-content-section>ul>iframe.size-iframe {
        display: block;
        margin: 0 50px;
        width: 490px;
        height: 315px;
    }

    main.main-content-container>section.main-content-section {
        display: block;
        width: 70%;
    }

    main.main-content-container>aside.side-content-navigation {
        display: block;
        width: 20%;
        position: sticky;
        overflow: hidden;
        top: 100px;
    }

    main.main-content-container>aside.side-content-navigation>ul {
        list-style-type: none;
        padding: 15px;
    }

    main.main-content-container>aside.side-content-navigation>ul>li {
        margin: auto;
        padding: 5px;
        border-right: 3px solid #532da685;
    }

    main.main-content-container>aside.side-content-navigation>ul>li:hover {
        border-right: 3px solid var(--cor3);
    }

    main.main-content-container>aside.side-content-navigation>ul>li>a {
        display: block;
        text-decoration: none;
        color: black;
        font-size: 1em;
        font-weight: 200;
        text-align: left;
        padding: 5px;
    }

    main.main-content-container>aside.side-content-navigation>ul>li>a:hover {
        text-shadow: 1px 1px 2.5px rgba(0, 0, 0, 0.25);
        font-size: 1em;
    }

    main.main-content-container>section.main-content-section>table.table-info {
        border-collapse: collapse;
        text-align: center;
        width: 100%;
        margin: 20px auto;
        background-color: rgba(211, 211, 211, 0.12);
    }

    main.main-content-container>section.main-content-section>table.table-info>thead>tr>th,
    main.main-content-container>section.main-content-section>table.table-info>tbody>tr>td {
        border: 2px solid #ccc;
        padding: 10px;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {}
