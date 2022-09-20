<template>
    <view-container>
        <section class="main">
        <h1>
            <span class="wave">👋</span>
            <br/>I'm a frontend web developer focused on creating memorable experiences. <br/>Based in Moscow, working worldwide.
                <router-link to="/contact">
            </router-link>
        </h1>
        <router-link to="/contact">
            <button class="work">
                        <a>Work with me →</a>
                </button>
        </router-link>
    </section>
    <section class="details">
        <h2>SELECTED WORKS</h2>
        <details-item title="OMB-SHOP" description="E-commerce" hasCase link="http://omb-shop.com/catalog" />
        <details-item title="WoW Classic FoV Changer" link="https://github.com/Ulibach/WoW-Classic-FoV-Changer" description="Pet project" />
        <details-item title="Twitch clip browser" link="https://github.com/Ulibach/clip-browser" description="Pet project"/>
    </section>
    </view-container>
</template>
<script setup lang="ts">
    import DetailsItem from '../components/DetailsItem.vue';
import ViewContainer from '../components/ViewContainer.vue';

</script>
<style scoped lang="scss">
.main {
    position: relative;
    grid-area: main;
    align-self: end;
    h1 {
        font-size: var(--fsz-big);
        font-weight: 500;
        line-height: 1.2;
        .wave {
            font-size: 3rem;
            animation-name: wave-animation; 
            animation-duration: 2.5s;
            transform-origin: 70% 70%;
            animation-iteration-count: infinite;  
            display: inline-block;
        }
    }
}
.details {
    grid-area: detail;
    align-self: end;
    h2 {
        font-weight: 400;
        font-size: 0.75rem;
        color: var(--color-secondary);
        margin-bottom: 1rem;
    }
}
.work {
    display: none;
                    border-radius: 3rem;
                    margin-top: 12px;
                    border: 1px solid var(--bg-secondary);
                    font-size: 1.5rem;
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
                        font-weight: 600;
                    }
            }

@media screen and (max-width: 900px) {
    .container {
        padding: 20px 12px;
    }
    .main {
        grid-column-end: span 4;
    }
    .work {
        display: inline-block;
    }
}
</style>