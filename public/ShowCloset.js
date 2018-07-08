  // put something you can click on collection.html with id="ShowCloset"
  // remove the contents of div class="closet" in collection.html. That's where saved items are appended
  $('#ShowCloset').on('click', function () {

    var closet = GetSavedEnsembles();
    // this gets all the saved apparel but we aren't using this yet
    for (index in closet.ensembles) {
      upper = closet.ensembles[index].top;
      lower = closet.ensembles[index].bottoms;
      skids = closet.ensembles[index].shoes;
    }
    var newOutfit = document.createElement('div');

    var newTop = document.createElement('div');
    newTop.className = "saved-top";

    var newTopImage = document.createElement('img');
    newTopImage.src = "images/tops/tops_000.png";
    newTop.appendChild(newTopImage);

    var newBottom = document.createElement('div');
    newBottom.className = "saved-bottom";

    var newBottomImage = document.createElement('img');
    newBottomImage.src = "images/bottoms/bottoms_000.png";

    newBottom.appendChild(newBottomImage);

    var newShoes = document.createElement('div');
    newShoes.className = "saved-shoes";

    var newShoesImage = document.createElement('img');
    newShoesImage.src = "images/shoes/shoes_000.png";

    newShoes.appendChild(newShoesImage);

    newOutfit.appendChild(newTop);
    newOutfit.appendChild(newBottom);
    newOutfit.appendChild(newShoes);

    var collectionsDiv = document.getElementById('collections');
    collectionsDiv.appendChild(newOutfit);
    var i = 1; // this is just here to put a breakpoint
  }
  );