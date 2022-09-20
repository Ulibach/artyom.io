<template>
    <nav>
        <div class="logo">
                <router-link to="/">
                    <div class="home-link">
                    <img src="avatar.png" width="40" heigt="40" />
                    <a>Artyom Sklyarov</a>
                    </div>
                </router-link>
        </div>
        <div class="links">
            <a class="link" href="https://github.com/Ulibach" target="_blank">
                Github
            </a>
            <a class="link" href="https://twitter.com/ulibachx" target="_blank">
                Twitter
            </a>
            <div class="work">
                <router-link to="/contact">
                <button>
                        <a>Work with me →</a>
                </button>
            </router-link>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped>
    nav {
        .home-link {
            display: flex;
            justify-content: space-between;
            align-items: center;
            img {
                filter: invert(1);
                transition: all 0.3s ease;
            }
            &:hover img {
                transform: rotate(25deg);
            }
            a {
                margin-left: .75rem;
            }
        }
        a {
            font-weight: var(--fw-normal);
            font-size: var(--fsz-normal);
            text-decoration: none;
            }
        display: flex;
        justify-content: space-between;
        align-items: center;
        grid-area: nav;
        .logo {
            span {
                font-weight: var(--fw-normal);
            }
        }
        .links {
            display: flex;
            align-items: center;
            .link {
                margin-right: 28px;
            }
            .work {
                button {
                    border-radius: 24px;
                    border: 1px solid var(--bg-secondary);
                    background: var(--bg-primary);
                    padding: .5rem .75rem;
                    cursor: pointer;
                    animation: hover ease;
                    transition: 0.3s;
                    &:hover {
                        background: var(--btn-hover);
                        transition: 0.3s;
                    }
                }
            }
        }
    }
@media screen and (max-width: 900px) {
    .work {
        display: none;
    }
}
</style>