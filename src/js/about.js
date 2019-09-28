const listContent = [
    {
        contentTitle: 'Hwo is creativia',
        contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt. Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros'
},
    {
        contentTitle: 'Experiences',
        contentText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et dolor justo. Phasellus eu ligula ac nisl volutpat tincidunt.eros'
},
    {
        contentTitle: 'Learn more',
        contentText: ' Vestibulum vitae rhoncus odio Fusce sed enim erat. Mauris dictum lorem eu tortor porta placerat. Suspendisse ac vestibulum eros'
}
];



const vueComp = {
    template: '#about__content-component',
    props: {
        itemComp: Object
    },
    methods: {
        openItem() {
                     
                          
            const itemActive = this.$refs['item-active'];
                   
            itemActive.classList.toggle('about__content-item_active');
        }
    }
}




new Vue({
    el: "#about__content-leftid",
    components: {
        vueComp
    },

    data: {
        itemContent: {}
    },

    created() {
        const dataContent = listContent;

        this.itemContent = dataContent;

    },

    template: '#about__content-listid ',
    methods: {

               }

})
    
