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
            } else if (number === 3) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTriceratop.glb%252526title%25253DTriceratops%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FTriceratop.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252FTriceratops%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTriceratop.glb%26title%3DTriceratops%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FTriceratop.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2FTriceratops%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 4) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FVelociraptor.glb%252526title%25253DVelociraptor%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FVelociraptor.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252FVelociraptor%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FVelociraptor.glb%26title%3DVelociraptor%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FVelociraptor.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2FVelociraptor%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 5) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FStegosaurus.glb%252526title%25253DStegosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FStegosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Fstegosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FStegosaurus.glb%26title%3DStegosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FStegosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Fstegosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 6) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FBrachiosaur.glb%252526title%25253DBrachiosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FBrachiosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252FBrachiosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FBrachiosaur.glb%26title%3DBrachiosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FBrachiosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2FBrachiosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 7) {
                doorLink.href = 'https://search.app.goo.gl/?ius=googleapp&ibi=com.google.GoogleMobile&efr=1&isi=284815942&utm_medium=google_web_promo&utm_source=google_srp_safari&utm_campaign=ar_srp_SearchAr_id&ct=ar_srp_SearchAr_id&pt=9008&mt=8&link=https%3A%2F%2Fgoo.gl%2Fiosgoogleapp%2Fdefault%3Furl%3Dgoogleapp%253A%252F%252Fopen-url%253F%2526url%253Dhttps%25253A%25252F%25252Farvr.google.com%25252Fscene-viewer%25253Ffile%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FSpinosaurus.glb%252526title%25253DSpinosaurus%252526referrer%25253Dgoogle.com%25253ADINOSAURS%25253Aios_all_surfaces_intent%252526sound%25253Dhttps%25253A%25252F%25252Fstorage.googleapis.com%25252Far-answers-in-search-models%25252Fstatic%25252Fdinos%25252FSpinosaurus.mp3%252526link%25253Dhttps%25253A%25252F%25252Fwww.jurassicworld.com%25252Fintel%25252Fdinosaur%25252Fspinosaurus%252526disable_occlusion%25253Dtrue%252526initial_scale%25253Dauto%2526min-version%253D134&ifl=https%3A%2F%2Farvr.google.com%2Fscene-viewer%2Fweb%3Ffile%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FSpinosaurus.glb%26title%3DSpinosaurus%26referrer%3Dgoogle.com%3ADINOSAURS%3Aios_all_surfaces_intent%26sound%3Dhttps%3A%2F%2Fstorage.googleapis.com%2Far-answers-in-search-models%2Fstatic%2Fdinos%2FSpinosaurus.mp3%26link%3Dhttps%3A%2F%2Fwww.jurassicworld.com%2Fintel%2Fdinosaur%2Fspinosaurus%26disable_occlusion%3Dtrue%26initial_scale%3Dauto%26fdl';
            } else if (number === 8) { // Diplodocus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Diplodocus#/media/Tiedosto:Diplodocus_carnegii.jpg';
            } else if (number === 9) { // Eoraptor
                doorLink.href = 'https://fi.wikipedia.org/wiki/Eoraptor#/media/Tiedosto:Eoraptor_resto._01.png';
            } else if (number === 10) { // Herrerasaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Herrerasaurus#/media/Tiedosto:Herrerasaurus_ischigualastensis_Illustration.jpg';
            } else if (number === 11) { // Allosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Allosaurus#/media/Tiedosto:Allosaurus_Revised.jpg';
            } else if (number === 12) { // Spinosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Spinosaurus#/media/Tiedosto:Spinosaurus_by_Joschua_Knüppe_2020.jpg';
            } else if (number === 13) { // Carnotaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Carnotaurus#/media/Tiedosto:Carnotaurus_DB_2.jpg';
            } else if (number === 14) { // Microraptor
                doorLink.href = 'https://fi.wikipedia.org/wiki/Microraptor#/media/Tiedosto:Microraptor_Restoration.png';
            } else if (number === 15) { // Utahraptor
                doorLink.href = 'https://fi.wikipedia.org/wiki/Utahraptor#/media/Tiedosto:Utahraptor_ostrommaysorum_update2.png';
            } else if (number === 16) { // Ankylosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Ankylosaurus#/media/Tiedosto:Ankylosaurus_magniventris_reconstruction.png';
            } else if (number === 17) { // Tricesatops
                doorLink.href = 'https://fi.wikipedia.org/wiki/Triceratops#/media/Tiedosto:TriceratopsModelMOSBoston.jpg';
            } else if (number === 18) { // Megalodon
                doorLink.href = 'https://fi.wikipedia.org/wiki/Megalodon#/media/Tiedosto:VMNH_megalodon.jpg';
            } else if (number === 19) { // Brachiosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Brachiosaurus#/media/Tiedosto:Brachiosaurus_scale_1.svg';
            } else if (number === 20) { // Amargasaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Amargasaurus#/media/Tiedosto:Amargasaurus_BW.jpg';
            } else if (number === 21) { // Brontosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Brontosaurus#/media/Tiedosto:Brontosaurus_NT_small.jpg';
            } else if (number === 22) { // Argentinosaurus
                doorLink.href = 'https://fi.wikipedia.org/wiki/Argentinosaurus#/media/Tiedosto:Longest_dinosaurs-en.png';
            } else if (number === 23) { // Arkosauri
                doorLink.href = 'https://fi.wikipedia.org/wiki/Arkosaurit#/media/Tiedosto:NileCrocodile.jpg';
            }
            else { // 24
                // Beipiaosaurus
                doorLink.href = `https://fi.wikipedia.org/wiki/Liitukausi#/media/Tiedosto:Beipiaosaurus.jpg`;
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
