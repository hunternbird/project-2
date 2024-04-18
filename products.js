const backgroundURLS = {
    Vinyl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.vecteezy.com%2Ffree-png%2Fvinyl-record&psig=AOvVaw1u5egSueh8h0udUPX7Po6I&ust=1713295507961000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJi2u7P5xIUDFQAAAAAdAAAAABAE",

};

fetch(
    "https://t3ogxvus80.execute-api.us-east-1.amazonaws.com/musicData"
)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        handleEverything(data);
    });


function handleEverything(musicData) {
    console.log(musicData["Pop"]["Justin Timberlake"]["albums"]["0"]["name"]);
    // let artistData = printArtist(musicData);
    let artistData = Object.keys(musicData["Rock"]);
    makeArtistList(artistData, musicData);

    // let productData = musicData["Rock"]["Jimi Hendrix"]["albums"][0]["name"];
    // makeProductTable(productData);

    // let albumData = musicData["Rock"]["Jimi Hendrix"]["albums"];
    // makeProductTable(albumData);
}


// function printArtist(musicData) {
//     let artistData = musicData["Country"];
//     return [artistData]
// }



function makeArtistList(artistData, musicData) {
    artistData.sort();
    let artistNames = document.getElementById("artist-names");

    // for (const artist of artistData)
    artistData.forEach(artist => {
        console.log(artist);
        // let leftColumnList = document.createElement('li');
        // leftColumnList.innerHTML = artist;
        // artistNames.appendChild(leftColumnList);
        let leftColumnList = document.createElement('li');
        let artistLink = document.createElement('a');
        artistLink.href = "#"; // Set the actual link href if you have it
        artistLink.textContent = artist;
        artistLink.addEventListener('click', () => {
            displayArtistAlbums(artist, musicData);
        });
        leftColumnList.appendChild(artistLink);
        artistNames.appendChild(leftColumnList);
    });
    
}



function displayArtistAlbums(artist, musicData) {
    let albumData = musicData["Rock"][artist]["albums"];
    let productNames = document.getElementById("table-content");
    productNames.innerHTML = "";

    albumData.forEach(album => {
        // console.log(product);
        let rightColumnList = document.createElement('li');
        rightColumnList.innerHTML = album.name;
        productNames.appendChild(rightColumnList);
    });
}

