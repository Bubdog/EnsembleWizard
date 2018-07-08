function ShowEnsembles() {
    var closet = JSON.parse(localStorage.getItem("SavedEnsembles"));
    let collectionsDivText = "";
    // this gets all the saved apparel but we aren't using this yet

    for (index in closet.ensembles) {
        upper = closet.ensembles[index].top;
        lower = closet.ensembles[index].bottoms;
        skids = closet.ensembles[index].shoes;
        collectionsDivText += '<div class="saved-outfit">';
        collectionsDivText += '<div class="saved-top">';
        collectionsDivText += '<img src="' + upper + '">';
        collectionsDivText += '</div>';

        collectionsDivText += '<div class="saved-bottom">';
        collectionsDivText += '<img src="' + lower + '">';
        collectionsDivText += '</div>';

        collectionsDivText += '<div class="saved-shoes">';
        collectionsDivText += '<img src="' + skids + '">';
        collectionsDivText += '</div>';

        collectionsDivText += '<a href="#" class="remove hvr-shutter-in-vertical"><i class="fa fa-times" aria-hidden="true"></i> Remove from Closet</a>';
        collectionsDivText += '</div>';
    }
    document.getElementById('collections').innerHTML = collectionsDivText;

    var i = 1; // this is just here to put a breakpoint
};