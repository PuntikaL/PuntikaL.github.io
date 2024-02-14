document.getElementById('yesButton').addEventListener('click', function() {
    var question = document.getElementById('question').innerText;

    if (question === "Do you want a date?") {
        document.getElementById('question').innerText = "Are you in a relationship?";
    } else if (question === "Is your age between 19-28?") {
        document.getElementById('question').innerText = "Do you smoke?";
    } else if (question === "Have anybody ever told you that you're good looking?") {
        document.getElementById('question').innerText = "Are you racist, sexist, homophobic?";
    } else if (question === "Do you think global warming is real?") {
        document.getElementById('question').innerText = "Does your BMI fall between 18.5 to 24.9?"
    } else if (question === "Does your BMI fall between 18.5 to 24.9?") {
        document.getElementById('question').innerText = "Do you anti using sunscreen and lip balm?";    
    } else {
        window.location.href = 'decline.html';
    }
});

document.getElementById('noButton').addEventListener('click', function() {
    var question = document.getElementById('question').innerText;
    if (question === "Are you in a relationship?") {
        document.getElementById('question').innerText = "Is your age between 19-28?";
    } else if (question === "Do you smoke?") {
        document.getElementById('question').innerText = "Are you using any drug?";
    } else if (question === "Are you using any drug?") {
        document.getElementById('question').innerText = "Have anybody ever told you that you're good looking?";
    } else if (question === "Are you racist, sexist, homophobic?") {
        document.getElementById('question').innerText = "Do you think global warming is real?"
    } else if (question === "Do you anti using sunscreen and lip balm?") {
        window.location.href = 'possiblematch.html';
    } else {
        window.location.href = 'decline.html';
    }
});
