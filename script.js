function useExample(text) {

    document.getElementById("idea").value = text;

}


function startBuilding() {

    const idea = document.getElementById("idea").value.trim();

    if (!idea) {

        alert("Please describe the website you want to build.");

        return;

    }

    alert(
        "Sivizi received your idea:\n\n" +
        idea +
        "\n\nOur AI builder will be connected in the next stage."
    );

}
