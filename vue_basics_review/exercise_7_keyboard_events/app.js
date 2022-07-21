var app = new Vue({
    el: '#app',
    data: {
        name: 'Esteban'
    },
    methods: {
        updateName(event) {
            this.name = event.target.value;
        }
    }
});