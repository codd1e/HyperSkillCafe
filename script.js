
const reviewButton = document.getElementById('reviewButton');
const reviewsRow = document.getElementById('reviewsRow');
const reviewTitle = document.getElementById('reviewTitle');
const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');

let img = document.querySelectorAll('.img-product');
let modal = document.getElementById('myModal')
let span = document.getElementsByClassName("close-modal")[0];
let modalImg = document.getElementById("img01");

reviewButton.addEventListener('click', (event) => {
    event.preventDefault();



    if (reviewTitle.value !== "" && reviewText.value !== "") {
        let reviewTemplate = '';

        if (reviewName.value === "") {
            reviewName.value = "Anonymous";
        }

        reviewTemplate = `<div class="col-lg-4 col-md-6 py-3">
                          <div class="card h-100">
                            <div class="card-body">
                                <h4 class="card-title">${reviewTitle.value}</h4>
                                <blockquote class="blockquote mb-0">
                                    <p>${reviewText.value}</p>
                                    <footer class="text-end blockquote-footer"><i>${reviewName.value}</i></footer>
                                </blockquote>
                            </div>
                          </div>
                        </div>
                      `;

        reviewsRow.innerHTML += reviewTemplate;


    }
});

// Get the image and insert it inside the modal - use its "alt" text as a caption
for(let i = 0; i < img.length; i++) {
    img[i].onclick = function () {
        modal.style.display = "block";
        modalImg.src = this.src;
    }
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
