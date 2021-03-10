function removeAdsFrom(adMaker){
  var allMicroblogEntries=document.querySelectorAll("div.card-body");
  for(var i=0;i<allMicroblogEntries.length;i++){
    var microblogEntry=allMicroblogEntries[i];
    var adMakerHTML="alt=\""+adMaker+"\" class=\"d-block mw-100\"";
    if(microblogEntry.innerHTML.indexOf(adMakerHTML)>=0){
      microblogEntry.style.display="none";
    }
  }
}

//Add more ad makers (or users that you do not like) here
removeAdsFrom("CentrumKrzesel.pl");
