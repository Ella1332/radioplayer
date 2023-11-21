// Steg 1. Gör en fetch till 'https://api.sr.se/api/v2/channels/?format=json'

const containerEl = document.getElementById("channels");

async function getRadioChanels() {
  const response = await fetch(
    "https://api.sr.se/api/v2/channels/?format=json"
  );
  const data = await response.json();
  console.log(data);

  data.channels.forEach((channel) => {
    //div till radiospelare container
    const radioChannels = document.createElement("div");
    radioChannels.setAttribute("class", "channel");
    radioChannels.style.backgroundColor = `#${channel.color}`;

    //name
    const name = document.createElement("div");
    name.className = "name";
    name.textContent = channel.name;

    // radispelar bild
    const radioImg = document.createElement("img");
    radioImg.src = channel.image;

    //skapa höger div
    const right = document.createElement("div");
    right.className = "right";

    //radio Audio player
    const audioPlayerEl = document.createElement("audio");
    audioPlayerEl.controls = true;
    const audioPlayerSrc = document.createElement("source");
    audioPlayerSrc.src = channel.liveaudio.url;

    //append till radioIMG
    radioChannels.appendChild(radioImg);
    // appendar radio player
    right.appendChild(name);
    right.appendChild(audioPlayerEl);
    //appendar radio src
    audioPlayerEl.appendChild(audioPlayerSrc);
    radioChannels.appendChild(right);

    console.log(containerEl);
    // append till radiospelarcontianer
    containerEl.appendChild(radioChannels);
  });
}

getRadioChanels();

// Steg 2. loopa med tex forEach över data.channels - ta ut data och visa på html-sidan.

// Steg 3. ta ut liveaudio.url från varje kanal och lägg i en audio tagg.
// <audio controls>
//   <source src="" type="audio/mpeg" />
// </audio>

// går igenom hämtad /data.channel
