const albumImages = {
    Vinyl: "https://media.istockphoto.com/id/481475560/vector/vinyl-record-template.jpg?s=612x612&w=0&k=20&c=fZgBryspxNnRn8qMa1mEquff_T6wENAY1HXMtNEMyh4=",

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

    let artistData = Object.keys(musicData["Rock"]);
    makeArtistList(artistData, musicData);

}




function makeArtistList(artistData, musicData) {
    artistData.sort();
    let artistNames = document.getElementById("artist-names");

    artistData.forEach(artist => {
        console.log(artist);
        let leftColumnList = document.createElement('li');
        leftColumnList.classList.add("artist-list-items");

        let artistLink = document.createElement('a');
        artistLink.classList.add("artist-links");

        artistLink.href = "#"; 
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
    let tableContent = document.getElementById("table-content");
    tableContent.innerHTML = ""; 


    let table = document.createElement("table");
    table.style.border = "1px solid black"; 

    
    let head = document.createElement("tr")
    let tableheader = document.createElement("th")
    tableheader.classList.add("table-header-name");
    
    tableheader.innerHTML = artist + " Albums:"
    head.appendChild(tableheader)
    table.appendChild(head)
    
    // makes only one long row
    // let row = document.createElement("tr");
    
    
    albumData.forEach(album => {
        
        // makes a row for each album
        let row = document.createElement("tr");

        let imageCell = document.createElement("img");
        imageCell.classList.add("record-image");
        imageCell.src = albumImages["Vinyl"];
        // imageCell.style.width = "5rem";
        


        let cell = document.createElement("td");
        cell.textContent = "Album: " + album.name;
        cell.style.border = "1px solid black";

        let stockCell = document.createElement("td");
        stockCell.textContent = "In Stock: " + album.in_stock + " records";
        stockCell.style.border = "1px solid black";

        let button = document.createElement("button");
        button.classList.add("buy-now-button");
        button.textContent = "See track list";

        button.addEventListener('click', () => {
            displayTrackRecords(album);
        });


        cell.appendChild(imageCell);
        stockCell.appendChild(button);
        row.appendChild(cell);
        row.appendChild(stockCell);

        table.appendChild(row);
    });

    tableContent.appendChild(table);
}



function displayTrackRecords(album) {
    
    let tableContent = document.getElementById("table-content");
    tableContent.innerHTML = "";

    let table = document.createElement("table");
    table.style.border = "1px solid black";

    let headerRow = document.createElement("tr");
    let trackHeader = document.createElement("th");
    trackHeader.textContent = "Track";
    let durationHeader = document.createElement("th");
    durationHeader.textContent = "Duration";
    headerRow.appendChild(trackHeader);
    headerRow.appendChild(durationHeader);
    table.appendChild(headerRow);

    album.tracks.forEach(track => {
        let row = document.createElement("tr");
        let trackCell = document.createElement("td");
        trackCell.textContent = track.name;
        let durationCell = document.createElement("td");
        durationCell.textContent = track.duration + " seconds";
        row.appendChild(trackCell);
        row.appendChild(durationCell);
        table.appendChild(row);
    });

    tableContent.appendChild(table);
}