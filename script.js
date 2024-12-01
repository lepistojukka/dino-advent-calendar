document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");

    // Numerot 1-24 satunnaisessa järjestyksessä
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    // Luodaan ruudukon luukut
    numbers.forEach(number => {
        const door = document.createElement("div");
        door.classList.add("door");
        door.textContent = number;

        // Klikkaustoiminnallisuus
        door.addEventListener("click", () => {
            if (!door.classList.contains("open")) {
                door.classList.add("open");
                showDinoContent(door, number);
            }
        });

        calendar.appendChild(door);
    });
});

function showDinoContent(door, number) {
    const content = document.createElement("div");
    content.classList.add("content", "visible");

    // Tarkista numero ja lisää oikea sisältö
    if (number === 1) {
        content.innerHTML = `
            <p>Tyrannosaurus Rex</p>
            <a href="https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTyrannosa.glb%252526title%25253DTyrannosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTyrannosaur.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Ftyrannosaurus-rex%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTyrannosa.glb%26title%3DTyrannosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTyrannosaur.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Ftyrannosaurus-rex%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl" target="_blank">Näytä Tyrannosaurus Rex AR-muodossa</a>
        `;
    } else {
        // Muut luukut sisältävät geneerisen AR-linkin
        content.innerHTML = `
            <p>Dinosaurus numero ${number}</p>
            <a href="models/t-rex-${number}.usdz" rel="ar">Näytä AR-muodossa</a>
        `;
    }

    door.appendChild(content);
}
