var app = new Vue({
    el: '#app',
    data: {
        wage: 100,
    },
    methods: {
        changeWage(amount) {
            console.log(amount, this.wage);
            this.wage += amount;
        }
    }
});