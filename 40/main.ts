
//def
function make_album(artistName:string , albumTitle:string , numTracks? : number) :object {
 let musicAlbum:any={
    artistName,
    albumTitle,
 }

 if(numTracks){
    musicAlbum.numTracks=numTracks;
 }


 return musicAlbum;
}

// call
let albumFirst=make_album('The Last Waltz','The Band')
let albumSecond=make_album('Escalator Over The Hill','The Carla Bley')
let albumThird=make_album('Miles','Blu & Exile')
  
console.log(albumFirst);
console.log(albumSecond);
console.log(albumThird);

