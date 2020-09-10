const main = () => {
    console.log('waddup');

    giraffe = document.getElementById('giraffe')
    giraffe.addEventListener('click', ()=>{
        console.log('HELLO');
    })


    // https://ar-js-org.github.io/AR.js-Docs/ui-events/
    AFRAME.registerComponent('markerhandler', {
        init: function () {
            console.warn('WHATD');
            this.el.sceneEl.addEventListener('markerFound', (event) => {
                console.log(event);
            })
        }
    });

}

window.onload = main