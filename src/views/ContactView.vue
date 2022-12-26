<template>
    <view-container>
        <section class="main">
        <h1>
            <br/>
            Contact me <br/>
            <a href="https://artiomsklyarov.t.me" target="_blank" class="contact main-contact">
                @ArtiomSklyarov
            <span class="sub">Telegram (fastest reply)</span>
            </a>
            <a href="discord://discordapp.com/users/240850877433380865" class="contact">
                Ulibach#9332
            <span class="sub">Discord</span>
            </a>
            <a href="mailto:hi@artyom.io?subject=💀" target="_blank" class="contact">
                hi@artyom.io
            <span class="sub">Or email me</span>
            </a>
            <router-link to="/">
            <button class="work">
                        <a>← Go back</a>
                </button>
        </router-link>
        </h1>
    </section>
    </view-container>
</template>

<script setup lang="ts">
    import ViewContainer from '../components/ViewContainer.vue';
</script>

<style lang="scss" scoped>
    .main {
    position: relative;
    grid-area: main;
    grid-column-end: span 4;
    align-self: end;
    h1 {
        font-size: var(--fsz-big);
        font-weight: 500;
        line-height: 1.2;

        a {
            transition: all 0.3s ease;
            text-decoration: none !important;
            display: inline-block;
            &:hover {
                color: white !important;
            }
        }
        .sub {
            font-size: 2rem;
        }

        .contact {
                font-size: 4.5rem;
                color: black;
                -webkit-text-stroke: 1px white;
                padding-right: 20px;
        }

        .main-contact {
                font-size: 6rem;
        }
    }

    .work {
    display: none;
                    border-radius: 3rem;
                    margin-top: 12px;
                    border: 1px solid var(--bg-secondary);
                    font-size: 1.5rem !important;
                    background: var(--bg-primary);
                    padding: 0.75rem 1.5rem;
                    cursor: pointer;
                    animation: hover ease;
                    transition: 0.3s;
                    &:hover {
                        background: var(--btn-hover);
                        transition: 0.3s;
                    } 
                    a {
                        font-size: 1.5rem !important;
                        font-weight: 600;
                    }
            }

    @media screen and (max-width: 900px) {
     a {
        font-size: 2.5rem !important;
    }
    .sub {
        display: inline-block;
        margin-bottom: 1rem;
    }
    .work {
        display: inline-block;
    }
}
}
</style>