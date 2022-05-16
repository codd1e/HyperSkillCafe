
const reviewButton = document.getElementById('reviewButton');
const reviewsRow = document.getElementById('reviewsRow');
const reviewTitle = document.getElementById('reviewTitle');
const reviewText = document.getElementById('reviewText');
const reviewName = document.getElementById('reviewName');

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