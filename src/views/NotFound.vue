<template>
    <v-container grid-list-md>
        <v-layout row wrap justify-center>
            <v-flex xs6>
                <v-card class="card-width" justify-center>
                    <v-card-title
                            class="grapefruit white--text subheading"
                            primary-title
                    >
                        <span class="title">Oh noes!</span>
                    </v-card-title>
                    <v-card-text>
                        <p>
                            Hmm. It looks like you tried to navigate to a page that does not exist!
                        </p>

                        <p>
                            You better get back to safety.
                        </p>
                    </v-card-text>
                    <v-card-actions class="justify-center">
                        <v-btn flat class="grapefruit white--text" to="/">Bring me home</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<style>
    .grapefruit {
        backround-color: #ec5564;
    }

    .card-width {
        max-width: 400px;
        margin: auto;
    }
</style>