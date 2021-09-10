Vue.component('message', {
    data() {
        return {
            torta1: 'Chocolate',
            torta2: 'vainilla',
            torta3: 'nucita',

            tortas: [ 
                'chocolate', 'vainilla', 'nucita'
            ]
            }
    },
    template: `
        <div>
            <h2>TORTAS DE UNA PASTELIERIA</h2>
            <p>{{torta1}}</p>
            <p>{{torta2}}</p>
            <p>{{torta3}}</p>

            <p>{{tortas[0]}}</p>
            <p>{{tortas[1]}}</p>
            <p>{{tortas[2]}}</p>
        </div>
    `
});
//Sandra Milena Morales Polo
//Paula Andrea Ochoa Ochoa 