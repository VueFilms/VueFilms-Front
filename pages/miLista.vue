<template>
    <v-col cols="12" :v-if="list" class="d-flex flex-wrap justify-center">
        <pre>{{list}}</pre>
    </v-col>
</template>
  
<script>
import API from '../services/authService.js'

export default {
    name: 'MejorValoradasPage',
    components: {
    },
    data() {
        return {
            list: null,
        }
    },
    async mounted() {
        this.list = await API.getUser()
    }
}
</script>