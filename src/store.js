import Vue from 'vue'
import Axios from 'axios'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectionner:{

        },
        board: {
            PB:{}
        },
        charge: false,
        enCours: true
    },
    mutations: {
        setBoard(state, data) {
            if(data.GlobalBoard != undefined) {
                this.state.board = data.GlobalBoard;
                this.state.enCours = true;
            } else {
                this.state.enCours = false;
            }
            this.state.charge = true;
        }
    },
    actions: {
        getBoard(context) {
            Axios.get('http://localhost:8000/getBoard')
            .then(response=> response.data )
            .then( q => {
                context.commit("setBoard", q)
            })
        }
    }
})