<template>
    <v-row justify="center" align="center" class="ma-5">
        <v-col v-if="loginCard" width="100%" cols="12" sm="6">
            <v-card class="pa-5">

                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-card-title class="mb-5">
                        <h2>Acceder</h2>
                    </v-card-title>

                    <v-text-field value="" :rules="[rules.required, rules.email]" type="email" label="Email"
                        v-model="email" outlined prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :rules="[rules.required, rules.counter]"
                        :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password" outlined
                        prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>

                    <v-alert v-if="loginExist" prominent type="error">
                        <v-row align="center" class="ms-5 d-flex flex-column">
                            <v-col class="grow pa-0 ma-0">
                                El correo o contraseña no son validos.
                            </v-col>
                            <v-col class="shrink pa-0 ma-0">
                                <a class="white--text text-decoration-underline font-weight-black"
                                    @click="statusLogin">¿tienes una
                                    cuenta?</a>
                            </v-col>
                        </v-row>
                    </v-alert>

                    <v-btn width="100%" :disabled="!valid" color="success" class="mr-4" @click="login">Enviar</v-btn>
                </v-form>

                <v-card-text class="ps-5">¿Aun no tienes cuenta? <a @click="statusLogin">Registrate</a>
                </v-card-text>
            </v-card>
        </v-col>

        <v-col v-else class="" cols="12" sm="6">
            <v-card class="pa-5">

                <v-form ref="form" v-model="valid" lazy-validation>

                    <v-card-title class="mb-5">
                        <h2>Registrarse</h2>
                    </v-card-title>

                    <v-text-field value="" :rules="[rules.required, rules.email]" type="email" label="Email"
                        v-model="email" outlined prepend-icon="mdi-account-circle"></v-text-field>
                    <v-text-field value="" :rules="[rules.required, rules.counter]"
                        :type="pwdVisible ? 'text' : 'password'" v-model="password" label="Password" outlined
                        prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>
                    <v-text-field value="" :rules="[rules.required, rules.confirm]"
                        :type="pwdVisible ? 'text' : 'password'" v-model="passwordConfirm" label="Confirm Password"
                        outlined prepend-icon="mdi-lock" :append-icon="pwdVisible ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="pwdVisible = !pwdVisible"></v-text-field>

                    <v-alert v-if="accountExist" prominent type="error">
                        <v-row align="center" class="ms-5 d-flex flex-column">
                            <v-col class="grow pa-0 ma-0">
                                El correo ya existe
                            </v-col>
                            <v-col class="shrink pa-0 ma-0">
                                <a class="white--text text-decoration-underline font-weight-black"
                                    @click="statusLogin">¿ya
                                    tienes una
                                    cuenta?</a>
                            </v-col>
                        </v-row>
                    </v-alert>

                    <v-btn width="100%" :disabled="!valid" color="success" class="mr-4" @click="signup">Enviar</v-btn>
                </v-form>

                <v-card-text class="ps-5">¿ya tienes cuenta? <a @click="statusLogin">Accede a tu cuenta</a>
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
            email: "",
            password: "",
            passwordConfirm: '',
            pwdVisible: false,
            loginCard: false,
            loginExist: false,
            accountExist: false,
            alertPass: false,
            rules: {
                required: value => !!value || 'Requerido.',
                counter: value => value.length <= 20 || 'Max 20 carácteres',
                confirm: value => value === this.password || 'Contraseña no coincidente',
                email: value => {
                    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                    return pattern.test(value) || 'Email invalido'
                },
            }
        }
    },
    methods: {
        statusLogin() {
            this.loginCard = !this.loginCard
        },
        async signup() {
            if (this.password === this.passwordConfirm && this.email !== '' && this.password !== '') {
                const result = await API.signup(this.email, this.password)
                if (result) {
                    this.$router.push('/home')
                } else if (!this.accountExist) {
                    this.accountExist = !this.accountExist
                }
            } else if (!this.alertPass) {
                this.alertPass = !this.alertPass
            }

        },
        async login() {
            const logged = await API.login(this.email, this.password)
            if (logged) {
                this.$router.push('/home')
            } else if (!this.loginExist) {
                this.loginExist = !this.loginExist
            }
        }
    }
}
</script>
