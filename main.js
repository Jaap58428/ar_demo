// app state
scoreBoard = {
    unicorn: false,
    giraffe: false
}

winDisplayed = false // to prevent alerts from poping up

const main = () => {
    // https://ar-js-org.github.io/AR.js-Docs/ui-events/
    // register event handler for scanning markers
    AFRAME.registerComponent('markerhandler', {
        init: function () {
            this.el.sceneEl.addEventListener('markerFound', (event) => {
                // when market is scanned, pass the ID to the marker handler
                handleMarkerEvent(event.target.id)
                // also check total score to see if all markers have been scanned
                checkTotalScore()
            })
        }
    });
}

// loop through all scores to see if non are missing
// if so, user has won
const checkTotalScore = () => {
    score = []
    for (const key in scoreBoard) {
        if (scoreBoard.hasOwnProperty(key)) {
            const value = scoreBoard[key];
            score.push(value)
        }
    }
    if (!score.includes(false) && !winDisplayed) {
        alert("You have won!")
        winDisplayed = true
    }
}

// update UI based of DOMelement ID
const changeScoreBoardUI = (htmlID) => {
    scoreEl = document.getElementById(htmlID)
    scoreEl.style.backgroundColor = "green";
}

// check which marker has been scanned
// might get bloaty with many markers, could use refactoring
const handleMarkerEvent = (markerID) => {
    switch (markerID) {
        case 'unicornMarker':
            scoreBoard.unicorn = true
            changeScoreBoardUI('unicornScore')
            break;
    
        case 'giraffeMarker':
            scoreBoard.giraffe = true
            changeScoreBoardUI('giraffeScore')
            break;
    
        default:
            break;
    }
}

window.onload = main