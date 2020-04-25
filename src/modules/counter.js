const counterModule = {
    state:{
        count:0
    },
    //mutaciones, seran ejecutadas por Node.js deben comenzar por SOCKET_
    mutations:{
        SOCKET_COUNTER_INCREMENT(state, counter){
            state.count = counter;
        },
        SOCKET_COUNTER_DECREMENT(state, counter){
            state.count = counter;
        },
    },
    //emitimos acciones desde nuestra app al servidor de nodejs con sokect.io
    actions:{
        sokect_increment:({state, rootState}) =>{
            rootState.io.emit('increment', state.count) //emitimos al sever el evento
        },
        
        sokect_decrement:({state,rootState}) =>{
            rootState.io.emit('decrement', state.count) //emitimos al sever el evento
        }
    },
    getters:{
        count(state){
            return state.count;
        }
    }
};

export default counterModule;