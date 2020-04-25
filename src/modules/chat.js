const chatModule = {
    state:{
        chat:[],
        users:[],
        username:null,
        exists:false
    },
    //emitidos acciondes a nodejs desde nuestra app
    actions:{
        socket_new_message:({rootState}, message) =>{
            rootState.io.emit('newMessage', message);
        },
        socket_login:({rootState}, username) =>{
            rootState.io.emit('login', username);
        }
    },
    //estas mutaciones seran ejecutadas por node.js, deben comenzar por SOCKET_ 
    mutations:{
       
        SOCKET_NEW_MESSAGE(state, message){
            state.chat.push({id:1,message}); // message[0]
        },
        SOCKET_LOGIN(state, data){
            state.users = data.users;
            state.username = data.username;
        },
        SOCKET_USER_EXISTS(state){
            state.exists = true;    
        },
        SOCKET_USER_JOINED(state, data){
            state.users = data.users;
            state.chat.push({id:2,message:`Usuario ${data.username} ha entrado en la sala`});
        },
        SOCKET_USER_LEFT(state, data){
            state.users = data.users;
            state.chat.push({id:3,message:`Usuario ${data.username} ha abandonado la sala`});
            state.chat = [];

        }
    },
    getters:{
        chat (state){
            return state.chat;
        },
        username (state){
            return state.username;
        },
        users(state){
            return state.users;
        },
        exists(state){
            return state.exists;
        }
 
    }
};

export default chatModule;