var app = new Vue({
    el: '#app',
    data: {
        name: 'Esteban'
    },
    methods: {
        logEvent(event) {
            console.log(event);
        }
    }
});