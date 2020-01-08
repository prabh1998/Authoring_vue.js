import Vue from 'https://cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.esm.browser.js';

//set up a viewmodel nd use the Vue framework
const my_vm = (() => {
    //variables, or define components... whatever

    let_vue_VM = new Vue({
        data: {
            message: "Hello From Vue!",

            collection: [
                {name: "Joe", role: "Prof"},
                {name: "Trevor", role: "Prof"},
                {name: "Jarrod", role: "Prof"}
                
            ]
        },
        
        methods: {
            logClicked() {
                console.log('clicked on an elements!');
            }
        }
    }).$mount("#app");
})();