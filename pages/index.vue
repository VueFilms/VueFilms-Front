<template>
    <v-row justify="center" align="center" class="ma-5">
        <v-col width="100%" cols="12" sm="6">
            <v-card>
                <v-card-title>LOGIN</v-card-title>
                <v-card-text>
                    <v-text-field value="" type="email" label="Email" v-model="email" outlined
                        prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password"
                        outlined prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="login">LOGIN</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
        <v-col class="">
            <v-card>
                <v-card-title>SIGNUP</v-card-title>
                <v-card-text>
                    <v-text-field value="" type="email" label="Email" v-model="email" outlined
                        prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password"
                        outlined prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer />
                    <v-btn @click="signup">SIGNUP</v-btn>
                </v-card-actions>
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
            email: "fer@fer.com",
            password: "123456789",
            pwdVisible: false,
        };
    },
    methods: {
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
