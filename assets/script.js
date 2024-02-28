document.addEventListener("DOMContentLoaded", function () {
    const imagePaths = [
        "forest2.webp",
        "forest4.png",
        "forest5.avif"
    ];

    const images = [];

    imagePaths.forEach((path, index) => {
        const img = new Image();
        img.src = path;
        img.alt = `Forest Image ${index + 1}`;
        images.push(img);
    });

    const bubble1 = document.querySelector(".change-chat1");
    bubble1.style.display = "none";
    const bubbleBg1 = document.querySelector(".bubble-chat");

    let currentImageIndex = 0;
    const backgroundImageElement = document.querySelector(".for-background-image-btn");
    const bubble = document.querySelector(".change-chat");
    const bubbleBg = document.querySelector(".bubble-chat");

    document.getElementById("btn1").addEventListener("click", function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        const newBackgroundImage = images[currentImageIndex].src;
        backgroundImageElement.style.backgroundImage = `url('${newBackgroundImage}')`;

        bubble.style.display = "none";
        bubble1.style.display = "block";
    });

    const colors = ["blue", "white", "green", "orange", "red", "purple"];
    const button = document.getElementById("btn");
    const color = document.querySelector(".home");
    const chat = ["Nice pick!", "Unbelievable!", "Amazing!", "Lovely!", "Cool!"];

    button.addEventListener("click", function () {
        const randomNum = getRandomNumber();
        console.log(randomNum);

        color.style.color = colors[randomNum];

        // Show change-chat and hide change-chat1
        bubble.style.display = "block";
        bubble1.style.display = "none";

        const randomChat = getRandomChats();
        console.log(randomChat);

        bubble.textContent = chat[randomChat];

        // Use bubble instead of bubbleChat
        bubble.classList.add("pop-up");
        bubbleBg.classList.add("pop-up");

        setTimeout(function () {
            // Use bubble instead of bubbleChat
            bubble.classList.remove("pop-up");
            bubbleBg.classList.remove("pop-up");
        }, 800);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * colors.length);
    }

    function getRandomChats() {
        return Math.floor(Math.random() * chat.length);
    }

    const button1 = document.getElementById("btn1");
    const chat1 = ["This is what I'm talking about!", "This place looks pretty comfortable.", "Nice environment to start a new life!", "I've been dreaming about this place!", "How do you know this place is what I'm looking for!?"];

    button1.addEventListener("click", function () {
        // Show change-chat1 and hide change-chat
        bubble1.style.display = "block";
        bubble.style.display = "none";

        const randomChat = getRandomChats();
        console.log(randomChat);

        bubble1.textContent = chat1[randomChat];

        // Use bubble1 instead of bubbleChat
        bubble1.classList.add("pop-up");
        bubbleBg.classList.add("pop-up");

        setTimeout(function () {
            // Use bubble1 instead of bubbleChat
            bubble1.classList.remove("pop-up");
            bubbleBg.classList.remove("pop-up");
        }, 800);
    });

    function getRandomChats() {
        return Math.floor(Math.random() * chat1.length);
    }
});
