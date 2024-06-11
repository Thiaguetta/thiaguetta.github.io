document.getElementById("openMessageModal").addEventListener("click", function() {
    document.getElementById("messageModal").style.display = "block";
});

document.getElementById("openGiftModal").addEventListener("click", function() {
    document.getElementById("giftModal").style.display = "block";
});

document.querySelectorAll(".close-button").forEach(function(element) {
    element.addEventListener("click", function() {
        document.getElementById(element.getAttribute("data-modal")).style.display = "none";
    });
});

window.addEventListener("click", function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
});

document.getElementById("submitGift").addEventListener("click", function() {
    const gift = document.getElementById("giftInput").value;
    if (gift) {
        alert(`Seu presente é: ${gift}`);
        document.getElementById("giftModal").style.display = "none";
    } else {
        alert("Por favor, digite seu presente.");
    }
});
