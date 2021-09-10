Vue.component('computed-properties', {
    data() {
     
        return {
            compras:[ 
                {
                    name : 'Sandra Milena',
                    valor: '35.000',
                },
                {
                    name : 'Paula Ochoa',
                    valor: '20.000'
                }
            ],
        }
    },
    computed: {
        compra() {
            return `${this.compras[0].name} ${this.compras[0].valor} 
            - ${this.compras[1].name} ${this.compras[1].valor}`;
        },
    },
    template: `
        <div>
            <h2>Computed properties</h2>
            <p>{{ compra }}</p>
        </div>
    `
});
//Sandra Milena Morales Polo
//Paula Andrea Ochoa Ochoa 