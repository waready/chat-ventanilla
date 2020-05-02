<template>
    <div class="user-sidebar">
        <div class="card">
            <ul v-if="users">
                <li>Usuarios Conectados</li>
                <hr/>
                <li v-for="user in users">
                    <b v-if="user === username">{{ user }}</b>
                    <span v-else>
                        {{user}}
                    </span>
                </li>
            </ul>
            <p v-else>
                Ningun usuario Conectado
            </p>
        </div>
        <br>
        <a href="/" class="btn btn-block btn-danger" > Salir</a>
    </div>

</template>
<script>
import {mapGetters} from 'vuex';
export default {
    name:'users-sidebar',
    computed:{
        ...mapGetters(['users','username'])
    }
    
}
</script>
<style scope>
li {
    list-style:none;
    text-align: left;
}
.card {
    padding: 20px !important;
}
</style>
