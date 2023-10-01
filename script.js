let zero = {
    photo: 'image/photo_2023-09-28_09-44-07.jpg',
    title: 'Krkonoše',
    description: 'Byl skvělý výlet do Krkonoš. Během toho výletu jsme zvladli projít přibližně 20km a to s dítětem. A ta krajna je nádherná. Každý kousek cesty se chtělo vyfotit. A nechat ve své paměti tu krásu',
};


let one = {
    photo: 'image/photo_2023-09-28_09-44-13.png',
    title: 'Teplické skaly',
    description: 'What happened here, why is this a very nice image'
};


let two = {
    photo: 'image/photo_2023-09-28_09-44-18.png',
    title: 'Teplické skaly',
    description: 'What happened here, why is this a very nice image'
};

let three = {
    photo: 'image/photo_2023-09-28_09-44-28.png',
    title: 'Teplické skaly',
    description: 'What happened here, why is this a very nice image'
};


let four = {
    photo: 'image/photo_2023-09-28_09-44-32.png',
    title: 'ZOO',
    description: 'What happened here, why is this a very nice image'
};

let five = {
    photo: 'image/photo_2023-09-28_09-44-37.png',
    title: 'Klokany v ZOO',
    description: 'What happened here, why is this a very nice image'
};


let six = {
    photo: 'image/photo_2023-09-28_09-44-41.png',
    title: 'Bezděz',
    description: 'What happened here, why is this a very nice image'
};


let seven = {
    photo: 'image/photo_2023-09-28_09-44-49.png',
    title: 'Bezděz',
    description: 'What happened here, why is this a very nice image'
};


let eight = {
    photo: 'image/photo_2023-09-28_09-44-45.png',
    title: 'Bezděz',
    description: 'What happened here, why is this a very nice image'
};


let nine = {
    photo: 'image/photo_2023-09-28_09-44-54.png',
    title: 'Prachovské skály',
    description: 'What happened here, why is this a very nice image'
};


let ten = {
    photo: 'image/photo_2023-09-28_09-44-58.png',
    title: 'Pravčická brána',
    description: 'What happened here, why is this a very nice image'
};


let eleven = {
    photo: 'image/photo_2023-09-28_09-45-02.png',
    title: 'Stará plynárna',
    description: 'What happened here, why is this a very nice image'
};


let twelve = {
    photo: 'image/photo_2023-09-28_09-45-05.png',
    title: 'Sysel',
    description: 'What happened here, why is this a very nice image'
};


let thirteen = {
    photo: 'image/photo_2023-09-28_09-45-09.png',
    title: 'Mělník',
    description: 'What happened here, why is this a very nice image'
};

let fourteen = {
    photo: 'image/photo_2023-09-28_09-45-12.png',
    title: 'Kokořín',
    description: 'What happened here, why is this a very nice image'
};


let fivteen = {
    photo: 'image/photo_2023-09-28_09-45-16.png',
    title: 'Letna',
    description: 'What happened here, why is this a very nice image'
};

let sixteen = {
    photo: 'image/photo_2023-09-28_09-45-31.png',
    title: 'Knihovna',
    description: 'What happened here, why is this a very nice image'
};

let seventeen = {
    photo: 'image/photo_2023-09-28_09-45-38.png',
    title: 'Letna',
    description: 'What happened here, why is this a very nice image'
};

let eighteen = {
    photo: 'image/photo_2023-09-28_09-45-45.png',
    title: 'Pražský hrad',
    description: 'What happened here, why is this a very nice image'
};

let nineteen = {
    photo: 'image/photo_2023-09-28_09-45-48.png',
    title: ' Vánoční Staromák',
    description: 'What happened here, why is this a very nice image'
};

let twenty = {
    photo: 'image/photo_2023-09-28_09-45-52.png',
    title: 'Praha',
    description: 'What happened here, why is this a very nice image'
};

let twentyone = {
    photo: 'image/photo_2023-09-28_09-46-00.png',
    title: 'Plzeň',
    description: 'What happened here, why is this a very nice image'
};

let twentytwo = {
    photo: 'image/photo_2023-09-28_09-46-04.png',
    title: 'Kutná Hora',
    description: 'What happened here, why is this a very nice image'
};

let twentythree = {
    photo: 'image/photo_2023-09-28_09-46-08.png',
    title: 'Hluboká nad Vltavou',
    description: 'What happened here, why is this a very nice image'
};

let currentPhoto = 0;
let imagesData = [
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    ten,
    eleven,
    twelve,
    thirteen,
    fourteen,
    fivteen,
    sixteen,
    seventeen,
    eighteen,
    nineteen,
    twenty,
    twentyone,
    twentytwo,
    twentythree
];

let loadPhoto = (nextPhoto, previousPhoto) => {
    // 1. replace photo
    $('#photo').attr('src', imagesData[nextPhoto].photo);
    $('#photo-description').text(imagesData[currentPhoto].description);
    $('#photo-title').text(imagesData[currentPhoto].title);

    // 2. highlight thumbnail
    let imgThumb = thumbsElements[nextPhoto]
    imgThumb.classList.add("highlighted")

    // 3. remove highlight for previous thumbnail
    if (previousPhoto !== undefined) {
        let previousImgThumb = thumbsElements[previousPhoto]
        previousImgThumb.classList.remove("highlighted")
    }
}

$('#arrowright').click(() => {
    let previousPhoto = currentPhoto
    currentPhoto = currentPhoto + 1;
    loadPhoto(currentPhoto, previousPhoto);

})
$('#arrowleft').click(() => {
    let previousPhoto = currentPhoto
    currentPhoto--;
    loadPhoto(currentPhoto, previousPhoto);
})

function thumbCreator(image, index) {
    // 1. div
    let divThumb = document.createElement("div")
    divThumb.setAttribute("class", "thumb")
    let divTitle = document.createElement("div")
    divTitle.setAttribute("class", "title")

    // 2.1. create img
    let imgThumb = document.createElement("img")
    imgThumb.setAttribute("src", image.photo)
    imgThumb.addEventListener('click', event => {
        let previousPhoto = currentPhoto
        currentPhoto = index
        // replace image
        loadPhoto(currentPhoto, previousPhoto)
    })

    // 2.2. append img to div.title
    divThumb.append(divTitle)

    // 2.3. append title to div.thumb
    divThumb.append(imgThumb)

    // 2.2. title inside div Thumb
   divTitle.textContent = image.title

    // 3. appending div.thumb to container
    let divThumbs = $('#thumbs')
    divThumbs.append(divThumb)

    return imgThumb;
}

let thumbsElements = []
imagesData.forEach((image, index) => {
    let img = thumbCreator(image, index)
    thumbsElements.push(img)
});
loadPhoto(currentPhoto, undefined);
