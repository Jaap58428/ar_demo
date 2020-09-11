scoreBoard = {
    unicorn: false,
    giraffe: false
}

const main = () => {
    // https://ar-js-org.github.io/AR.js-Docs/ui-events/
    AFRAME.registerComponent('markerhandler', {
        init: function () {
            this.el.sceneEl.addEventListener('markerFound', (event) => {
                handleMarkerEvent(event.target.id)
                checkTotalScore()
            })
        }
    });

}

const checkTotalScore = () => {
    score = []
    for (const key in scoreBoard) {
        if (scoreBoard.hasOwnProperty(key)) {
            const value = scoreBoard[key];
            score.push(value)
        }
    }
    if (!score.includes(false)) {
        alert('YOU WON')
    }
}

const changeScoreBoardUI = (htmlID) => {
    scoreEl = document.getElementById(htmlID)
    scoreEl.style.backgroundColor = "green";
}

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