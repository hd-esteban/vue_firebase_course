var app = new Vue({
    el: '#app',
    data: {
        coords: {
            x: 0,
            y: 0
        }
    },
    methods: {
        logEvent(event) {
            console.log(event);
        },
        logCoords(event) {
            console.log(event.offsetX, event.offsetY);
            this.coords.x = event.offsetX;
            this.coords.y = event.offsetY;
        },
    }
});