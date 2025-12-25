function checkAnswers() {
    let score = 0;

    const answers = {
        q1: "a",
        q2: "b",
        q3: "c",
        q4: "b"
    };

    for (let question in answers) {
        const selected = document.querySelector(
            `input[name="${question}"]:checked`
        );

        if (selected && selected.value === answers[question]) {
            score++;
        }
    }

    document.getElementById("result").textContent =
        "Your Score: " + score + " / 4";
}