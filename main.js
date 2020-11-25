function removeAdsFrom(adMaker){
 var microblogEntries=document.querySelectorAll("div.card-body");
 for(var i=0;i<microblogEntries.length;i++){
  var mbEntry=microblogEntries[i];
  var adMakerHTML="alt=\""+adMaker+"\" class=\"d-block mw-100\"";
  if(mbEntry.innerHTML.indexOf(adMakerHTML)>=0){
   mbEntry.style.display="none";
  }
 }
}

//Add more ad makers (or users that you do not like) here
removeAdsFrom("CentrumKrzesel.pl");