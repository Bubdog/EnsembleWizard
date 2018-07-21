$(document).ready(function () {

});

function deleteOutfit(outfitId) {
    var idToDelete = parseInt(outfitId);
    var closet = JSON.parse(localStorage.getItem("SavedEnsembles"));
    var localSaves = { ensembles: [] };
    for (index in closet.ensembles) {

        id = closet.ensembles[index].id;
        storedId = parseInt(id);
        if (storedId != idToDelete) {
            upper = closet.ensembles[index].top;
            lower = closet.ensembles[index].bottoms;
            skids = closet.ensembles[index].shoes;

            localSaves.ensembles.push({
                "id": id,
                "top": upper,
                "bottoms": lower,
                "shoes": skids
            })
        }
    }
    // now over-write localstorage with the Json object containing the added ensemble
    var ensembleImageJsons = JSON.stringify(localSaves);
    localStorage.setItem("SavedEnsembles", ensembleImageJsons);
    ShowEnsembles();
}

function ShowEnsembles() {
    var closet = JSON.parse(localStorage.getItem("SavedEnsembles"));
    let collectionsDivText = "";
    // this gets all the saved apparel but we aren't using this yet

    for (index in closet.ensembles) {
        upper = closet.ensembles[index].top;
        lower = closet.ensembles[index].bottoms;
        skids = closet.ensembles[index].shoes;
        outfitId = closet.ensembles[index].id;
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

        collectionsDivText += '<a href="javascript:deleteOutfit(' + outfitId + ')" class="remove hvr-shutter-in-vertical"><i class="fa fa-times"  id="deleteOutfit" aria-hidden="true"></i> Remove from Closet</a>';
        collectionsDivText += '</div>';
    }
    document.getElementById('collections').innerHTML = collectionsDivText;

    var i = 1; // this is just here to put a breakpoint
};