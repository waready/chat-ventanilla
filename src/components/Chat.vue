<template>
    <div class="chat"> 
        <login-modal v-on:login="processLogin($event)" v-if="!username || exists"></login-modal> 
        <div class="row">
            <div class="col-9">
                <h3 v-if="username">
                    Bienvenido {{username}}!
                </h3>
                <div class="col card">
                    <form v-on:submit.prevent="sendMessage" v-on:keyup.enter="sendMessage">
                        <textarea class="form-control" v-model="message" required></textarea>
                        <br/>
                        <button class="btn btn-block btn-success"  type="submit">Enviar mensaje</button>

                    </form>
            
                    <br>
                    <div class="col-md-12">
                        <ul>
                            <li v-for="msg in chat">
                                <p v-if="msg.id == 1" class="alert alert-info">
                                    {{msg.message}}
                                </p>
                                <p v-else-if="msg.id == 2" class="alert alert-success">
                                    {{msg.message}}
                                </p>
                                <p v-else class="alter alert-danger">
                                    {{msg.message}}
                                </p>
                            </li>
                            <!-- {{chat}} -->
                        </ul>
                    </div>


                </div>
            </div>
            <div class="col-3">
                <users-sidebar></users-sidebar>
            </div>
        </div>
    </div>
</template>
<script>
import LoginModal from "./LoginModal"
import UsersSidebar from "./UsersSidebar"
import {mapGetters ,mapActions} from 'vuex'
export default {
    components:{
        LoginModal,
        UsersSidebar
    },
    data(){
        return{
            message:'',
            disable:false
        }
    },
    methods:{
        ...mapActions(['socket_login','socket_new_message']),
        processLogin(username){
            
            this.socket_login(username);
        },
        sendMessage(){
            this.socket_new_message(this.message);
            this.message = "";
        }
    },
    computed:{
        ...mapGetters(['chat','username','exists'])
    }
}
</script>
<style scope>
li {
    list-style: none;
    text-align: left;
}
.card{
    padding: 20px !important;
}
</style>
