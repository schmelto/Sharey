$(document).ready(function(){

    //filler for plz:
    //for prototype solid plz later will be also dynamic filling like tags
    var plzSelectionNewOffer = $('#plzSelectionNewOffer');
    plzSelectionNewOffer.append('<option value="2049">69437 Neckargerach</option>');
    plzSelectionNewOffer.append('<option value="2092">74821 Mosbach</option>');
    plzSelectionNewOffer.append('<option value="2093">74834 Elztal</option>');
    plzSelectionNewOffer.append('<option value="2096">74847 Obrigheim</option>');
    plzSelectionNewOffer.append('<option value="2098">74855 Haßmersheim</option>');
    plzSelectionNewOffer.append('<option value="2100">74862 Binau</option>');
    plzSelectionNewOffer.append('<option value="2102">74865 Neckarzimmern</option>');

    //filler for tags:
    var tagSelectionNewOffer = $('#tagSelectionNewOffer');

    //get the tags dynamically from db with the help of the getAllTags-phpscript
    $.ajax({
        url: '../php/getAllTags.php',
        dataType: 'json',
        type: 'post',
        success: function(data){
            if(data != false){
                data.forEach(function(tagElement) {
                    var tag = JSON.parse(tagElement);
                    if(tag.tagID == 4){ //sonstiges
                        tagSelectionNewOffer.append('<option selected value="' + tag.tagID + '">' + tag.description + '</option>');
                    }else{
                        tagSelectionNewOffer.append('<option value="' + tag.tagID + '">' + tag.description + '</option>');
                    }
                });
            }
        },
        error: function(err){
            alert('Die Funktion konnte nicht geladen werden, bitte versuche es nochmal.');
        }
    });

});