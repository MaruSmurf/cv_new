thumbnails.forEach((photo, photoNumber) => {
    $('#container').attr('src', photo);
    $('.container').click((event) => {
        let indexClicked = $(event.target).attr('thumbnails-index');
        let numberIndex = parseInt(indexClicked);

    });
});
