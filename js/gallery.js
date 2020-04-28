function activateGallery() {
    // alert("Hello from the gallery file!");
    let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
    thumbnails.forEach(function(thumbnail) {
        thumbnail.addEventListener("click", function(event) {
            let mainImage = document.querySelector("#gallery-photo > img");
            let newImageSrc = thumbnail.dataset.largeVersion;
            let newImageAlt = thumbnail.alt;
            console.log(thumbnail.alt);
            mainImage.setAttribute("src", newImageSrc);
            mainImage.setAttribute("alt", newImageAlt);

            let currentClass = "current";
            document.querySelector("." + currentClass).classList.remove(currentClass);
            thumbnail.parentNode.classList.add(currentClass);

            let galleryInfo = document.querySelector("#gallery-info");
            let title       = galleryInfo.querySelector(".title");
            let description = galleryInfo.querySelector(".description");

            title.innerHTM        = thumbnail.dataset.title;
            description.innerHTML = thumbnail.dataset.description;
        });
    });
    // thumbnails[0].click();
}