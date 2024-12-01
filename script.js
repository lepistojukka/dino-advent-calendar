document.addEventListener("DOMContentLoaded", () => {
    const calendar = document.getElementById("calendar");

    // Numerot 1-24 satunnaisessa järjestyksessä
    const numbers = Array.from({ length: 24 }, (_, i) => i + 1).sort(() => Math.random() - 0.5);

    // Haetaan nykyinen päivämäärä
    const today = new Date();
    const currentDay = today.getDate();

    // Luodaan ruudukon luukut
    numbers.forEach(number => {
        const doorLink = document.createElement("a");
        doorLink.classList.add("door");

        // Tarkistetaan, onko luukku avattavissa
        if (number <= currentDay) {
            // Jos luukku on avattavissa, määritetään linkki
            if (number === 1) {
                doorLink.href = `https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTyrannosa.glb%252526title%25253DTyrannosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTyrannosaur.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Ftyrannosaurus-rex%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTyrannosa.glb%26title%3DTyrannosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTyrannosaur.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Ftyrannosaurus-rex%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl`;
            } else if (number === 2) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FAnkylosaur.glb%252526title%25253DAnkylosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FAnkylosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252FAnkylosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FAnkylosaur.glb%26title%3DAnkylosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FAnkylosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2FAnkylosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            }
            else {
                // Geneerinen linkki muille luukuille
                doorLink.href = `models/t-rex-${number}.usdz`;
            }
            doorLink.target = "_blank"; // Avataan uuteen välilehteen
        } else {
            // Jos luukku ei ole vielä avattavissa, estetään toiminto
            doorLink.href = "#";
            doorLink.classList.add("locked");
            doorLink.addEventListener("click", (e) => {
                e.preventDefault();
                alert(`Luukku ${number} ei ole vielä avattavissa!`);
            });
        }

        doorLink.textContent = number;
        calendar.appendChild(doorLink);
    });
});
