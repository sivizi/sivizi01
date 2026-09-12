const generateButton =
    document.getElementById("generateButton");

const videoPrompt =
    document.getElementById("videoPrompt");


generateButton.addEventListener("click", function () {

    const prompt =
        videoPrompt.value.trim();


    if (prompt === "") {

        alert(
            "Please describe the video you want to create."
        );

        return;
    }


    alert(
        "SiviZi received your idea!\n\n" +
        prompt +
        "\n\nAI video generation will be connected next."
    );

});


const startButton =
    document.getElementById("startButton");


startButton.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
