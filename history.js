document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 

        form.reset();

        var modal = document.getElementById("myModal");
        var span = document.getElementsByClassName("close")[0];
        modal.style.display = "block";

        span.onclick = function () {
            modal.style.display = "none";
        };
    });
});



