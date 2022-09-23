<template>
    <v-row justify="center" align="center" class="ma-5">
        <v-col v-if="loginCard" width="100%" cols="12" sm="6">
            <v-card>
                <v-card-title class="mb-5">
                    <h2>Accede a tu cuenta</h2>
                </v-card-title>
                <v-card-text class="pt-5">
                    <v-text-field value="" type="email" label="Email" v-model="email" outlined
                        prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password"
                        outlined prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>
                </v-card-text>
                <v-card-actions width="100%" justify="center" align="center" class="pa-4">
                    <v-btn width="100%" color="green darken-4" @click="login">Enviar</v-btn>
                </v-card-actions>
                <v-card-text class="ps-5">¿Aun no tienes cuenta? <a @click="hola">Registrate</a>
                </v-card-text>
            </v-card>
        </v-col>
        <v-col v-else class="" cols="12" sm="6">
            <v-card>
                <v-card-title class="mb-5">
                    <h2>Registrarse</h2>
                </v-card-title>
                <v-card-text class="pt-5">
                    <v-text-field value="" type="email" label="Email" v-model="email" outlined
                        prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password"
                        outlined prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>
                </v-card-text>
                <v-card-actions width="100%" justify="center" align="center" class="pa-4">
                    <v-btn width="100%" color="green darken-4" @click="signup">Enviar</v-btn>
                </v-card-actions>
                <v-card-text class="ps-5">¿ya tienes cuenta? <a @click="hola">Accede a tu cuenta</a>
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import API from '../services/authService.js'
export default {
    name: 'IndexPage',
    data() {
        return {
            email: "yeray@yeray.com",
            password: "123456789",
            pwdVisible: false,
            loginCard: false
        };
    },
    methods: {
        hola() {
            this.loginCard = !this.loginCard
        },
        async signup() {
            await API.signup(this.email, this.password)
        },
        async login() {
            const logged = await API.login(this.email, this.password)
            if (logged) {
                this.$router.push('/home')
            }
        },
        async get() {
            const users = await API.getUsers()
            console.log(users)
        }
    }
}
</script>
