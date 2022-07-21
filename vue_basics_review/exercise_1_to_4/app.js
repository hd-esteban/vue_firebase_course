var app = new Vue({
    el: '#app',
    // Vue moves all these properties to the top of the object.
    data: {
        title: 'I\'m Becoming a Vue Ninja',
        name: 'Esteban',
        lastName: 'Hernández',
        url: 'https://www.youtube.com/',
        classes: ['one', 'two'],
    },
    methods: {
        greet(time) {
            // Since all the data properties are moved to the top of the object there is no need to access them through the data object, like this this.data.title.
            // They can be accesed directly through the keyword this like this this.title
            this.title;
            return `Hello and good ${time} ${this.name} ${this.lastName}.`
        }
    }
});