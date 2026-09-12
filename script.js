function useExample(text) {
    const idea = document.getElementById("idea");

    idea.value = text;
    idea.focus();
}

function startBuilding() {
    const idea = document
        .getElementById("idea")
        .value
        .trim();

    if (!idea) {
        alert("Please describe the website you want to build.");

        document.getElementById("idea").focus();

        return;
    }

    alert(
        "Sivizi received your idea:\n\n" +
        idea +
        "\n\n" +
        "The AI website generator will be connected " +
        "in the next stage."
    );
}

document.addEventListener("DOMContentLoaded", function () {

    const idea = document.getElementById("idea");

    if (!idea) {
        return;
    }

    idea.addEventListener("keydown", function (event) {

        if (
            (event.ctrlKey || event.metaKey) &&
            event.key === "Enter"
        ) {
            startBuilding();
        }

    });

});