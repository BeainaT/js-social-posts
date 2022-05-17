const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    }
];

//Milestone 1 - Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.
// Milestone 2 - Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo.
// Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
// BONUS
// 1. Formattare le date in formato italiano (gg/mm/aaaa)
// 2. Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
// 3. Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

/* FUNCTIONS */
function addPost(obj, to) {
    //assegno la costante al contenuto del tag template in html
    const post = document.querySelector("#tpl_post").content.cloneNode(true);
    //i valori delle chiavi del mio oggetto verranno stampati nei tag corrispondenti
    post.querySelector(".js-like-button").id = obj.id;
    post.querySelector(".profile-pic").src = obj.author.image;
    post.querySelector(".profile-pic").alt = obj.author.name;
    post.querySelector(".post-meta__author").innerHTML = obj.author.name;
    post.querySelector(".post__text").innerHTML = obj.content;
    post.querySelector(".post__image img").src = obj.media;
    post.querySelector(".post-meta__time").innerHTML = obj.created;
    post.querySelector(".js-likes-counter").innerHTML = obj.likes;
    //appendo il contenuto al suo contenitore
    to.append(post);
};

/* MAIN */
const postsContainer = document.querySelector("#container");
//Ciclo su array per leggere gli oggetti
for (let i=0; i < posts.length; i++) {
    //assegno variabile ai miei oggetti - info = obj
    let info = posts[i];
    if (info.author.image === null) {
        info.author.image = "https://via.placeholder.com/300x300";
    }
    addPost(info, postsContainer);
};
//creo evento al click
//seleziono elementi da DOM
let likesCounter = document.querySelectorAll(".js-likes-counter");
let likeBtn = document.querySelectorAll(".js-like-button");
//Creo array da popolare
let likeArray = [];
//Ciclo per gli elementi con la classe selezionata
for (let i = 0; i < likeBtn.length; i++) {
    //al click su ogni elemento, aggiungo classe CSS per cambiare colore(SE non è presente), incremento numero likes e pusho nell'array
    likeBtn[i].addEventListener("click", function() {
        if(!likeBtn[i].classList.contains("like-button--liked")) {
            likeBtn[i].classList.add("like-button--liked");
            likesCounter[i].innerHTML = ++posts[i].likes;
            likeArray.push(posts[i].id);                
        } else {
            //altrimenti rimuovo la classe CSS e decremento il numero di likes.
            likeBtn[i].classList.remove("like-button--liked");
            likesCounter[i].innerHTML = --posts[i].likes;            
        };
    });
};
