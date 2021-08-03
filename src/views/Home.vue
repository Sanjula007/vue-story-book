<template>
    <div class="home">
        <div>
            <b-container class="bv-example-row">
                <b-row>
                    <b-col>
                        <b-card
                                title="Card Title"
                                img-src="https://picsum.photos/600/300/?image=25"
                                img-alt="Image"
                                img-top
                                tag="article"
                                style="max-width: 20rem;"
                                class="mb-2"
                        >
                            <b-card-text>
                                Some quick example text to build on the card title and make up the bulk of the card's
                                content.
                            </b-card-text>

                            <b-button href="#" variant="primary">Go somewhere</b-button>
                        </b-card>
                    </b-col>
                    <b-col>2 of 3</b-col>
                    <b-col>3 of 3</b-col>
                </b-row>
            </b-container>

        </div>
    </div>
</template>

<script>


    export default {
        name: "Home",
        components: {},
    };
</script>
