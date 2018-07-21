$(document).ready(function () {
  // Next shoes clicked
  $('.nextShoes').on('click', function () {
    var currentImg = $('.activeShoes');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('activeShoes').css('z-index', -10);
      nextImg.addClass('activeShoes').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.prev().length) {
        prevImg = prevImg.prev();
      }
      currentImg.removeClass('activeShoes').css('z-index', -10);
      prevImg.addClass('activeShoes').css('z-index', 10);
    }
  });
  // Previous shoes clicked
  $('.prevShoes').on('click', function () {
    var currentImg = $('.activeShoes');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('activeShoes').css('z-index', -10);
      prevImg.addClass('activeShoes').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.next().length) {
        prevImg = prevImg.next();
      }
      currentImg.removeClass('activeShoes').css('z-index', -10);
      prevImg.addClass('activeShoes').css('z-index', 10);
    }
  });

  // Next top clicked
  $('.nextTop').on('click', function () {
    var currentImg = $('.activeTop');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('activeTop').css('z-index', -10);
      nextImg.addClass('activeTop').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.prev().length) {
        prevImg = prevImg.prev();
      }
      currentImg.removeClass('activeTop').css('z-index', -10);
      prevImg.addClass('activeTop').css('z-index', 10);
    }
  });

  // Previous top clicked
  $('.prevTop').on('click', function () {
    var currentImg = $('.activeTop');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('activeTop').css('z-index', -10);
      prevImg.addClass('activeTop').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.next().length) {
        prevImg = prevImg.next();
      }
      currentImg.removeClass('activeTop').css('z-index', -10);
      prevImg.addClass('activeTop').css('z-index', 10);
    }
  });


  // Next bottoms clicked
  $('.nextBottoms').on('click', function () {
    var currentImg = $('.activeBottoms');
    var nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('activeBottoms').css('z-index', -10);
      nextImg.addClass('activeBottoms').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.prev().length) {
        prevImg = prevImg.prev();
      }
      currentImg.removeClass('activeBottoms').css('z-index', -10);
      prevImg.addClass('activeBottoms').css('z-index', 10);
    }
  });

  // Previous Bottoms clicked
  $('.prevBottoms').on('click', function () {
    var currentImg = $('.activeBottoms');
    var prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('activeBottoms').css('z-index', -10);
      prevImg.addClass('activeBottoms').css('z-index', 10);
    }
    else {
      prevImg = currentImg;
      while (prevImg.next().length) {
        prevImg = prevImg.next();
      }
      currentImg.removeClass('activeBottoms').css('z-index', -10);
      prevImg.addClass('activeBottoms').css('z-index', 10);
    }
  });


  function GetSavedEnsembles() {
    // This gets the local storage for ensembles
    var savedJsons = localStorage.getItem("SavedEnsembles");
    return JSON.parse(savedJsons); // contains the 'ensembles' array
    // 'ensembles' array[] =
    //     { "id" : 1, "top": ensemble 0 top file name here, "bottoms": ensemble 0 bottoms file name here, "shoes" : ensemble 0 shoes file name here}
    //      ...
    //     { "id" : N, "top": ensemble N top file name here, "bottoms": ensemble N bottoms file name here, "shoes" : ensemble N shoes file name here}           
  };

  // Save ensemble clicked. Requires some type of save button with class="saveEnsemble" (i.e. <img src="images/SaveEnsemble.png" class="saveEnsemble" alt="SaveEnsemble"> )
  $('.saveEnsemble').on('click', function () {


    // Un-comment these to clear local storage when you click the Save button so that you can start over.
    //localStorage.clear();
    //return;
    var topImageSrc = document.getElementsByClassName("activeTop")[0].src;
    var bottomsImageSrc = document.getElementsByClassName("activeBottoms")[0].src;
    var shoesImageSrc = document.getElementsByClassName("activeShoes")[0].src;
    // Use this syntax to get just the pathname: var filename = topImageSrc.replace(/^.*[\\\/]/, '')
    var ensembleImageFiles = [{ "id": "1", "top": topImageSrc, "bottoms": bottomsImageSrc, "shoes": shoesImageSrc }];

    // Check if we have any "SavedEnsembles" in local storage
    if (localStorage.getItem("SavedEnsembles") === null) {
      // since there is no local storage for ensembles we need to create it
      var localSaves = {
        ensembles: []
      };

      ensembleImageFiles.map(function (item) {
        localSaves.ensembles.push({
          "id": item.id,
          "top": item.top,
          "bottoms": item.bottoms,
          "shoes": item.shoes
        });
      });
      var ensembleImageJsons = JSON.stringify(localSaves);
      localStorage.setItem("SavedEnsembles", ensembleImageJsons);
    }
    else {
      // Get ensembles from local storage so we can add to it and push it back
      var savedEnsembles = GetSavedEnsembles(); // contains the 'ensembles' array

      // Get the last "id" so that we can increment it for the next save
      var ensembleId = 1;
      var duplicateSave = false;
      for (item in savedEnsembles.ensembles) {
        ensembleId = parseInt(savedEnsembles.ensembles[item].id, 10);
        var storedTop = savedEnsembles.ensembles[item].top.replace(/^.*[\\\/]/, '');
        var storedBottoms = savedEnsembles.ensembles[item].bottoms.replace(/^.*[\\\/]/, '');
        var storedShoes = savedEnsembles.ensembles[item].shoes.replace(/^.*[\\\/]/, '');
        var shoesToStore = shoesImageSrc.replace(/^.*[\\\/]/, '');
        var bottomsToStore = bottomsImageSrc.replace(/^.*[\\\/]/, '');
        var topToStore = topImageSrc.replace(/^.*[\\\/]/, '');

        if ((storedTop == topToStore) && (storedBottoms == bottomsToStore) && (storedShoes == shoesToStore)) {
          duplicateSave = true;
          break;
        }
      }

      if (duplicateSave) {
        // if you want to alert the operator that a duplicate save was attempted then do it here
        //alert("duplicate");
        return false;
      }
      // Now add the current ensemble to the Json array just pulled from local storage along with the incremented "id"
      ensembleImageFiles.map(function (item) {
        savedEnsembles.ensembles.push({
          "id": ensembleId + 1,
          "top": item.top,
          "bottoms": item.bottoms,
          "shoes": item.shoes
        });
      });
      // now over-write localstorage with the Json object containing the added ensemble
      var ensembleImageJsons = JSON.stringify(savedEnsembles);
      localStorage.setItem("SavedEnsembles", ensembleImageJsons);
    }
  });
});
