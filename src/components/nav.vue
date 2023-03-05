<template>
    <div class="nav">
        <div class="company">
            <h2>company</h2>
        </div>
        <ul>
            <li>
                <router-link to="rona">
                    <img :src="profile[0].img" />
                    로나정부
                </router-link>
            </li>
            <li>
                <router-link to="oh-seong">
                    <img :src="profile[1].img" />
                    오성그룹
                </router-link>
            </li>
            <li>
                <router-link to="kyo-yang">
                    <img :src="profile[2].img" />
                    교양그룹
                </router-link>
            </li>
            <li>
                <router-link to="akatsuki">
                    <img :src="profile[3].img" />
                    아카츠키
                </router-link>
            </li>
            <li>
                <router-link to="potato">
                    <img :src="profile[4].img" />
                    감자국
                </router-link>
            </li>
            <li>
                <router-link to="gold-moon">
                    <img :src="profile[5].img" />
                    골드문
                </router-link>
            </li>
            <li>
                <router-link to="moo">
                    <img :src="profile[6].img" />
                    무파그룹
                </router-link>
            </li>
            <li>
                <router-link to="/news">
                    <img src="../assets/img/icon/1.png" alt="">
                    컴퍼니 현황
                </router-link>
            </li>
            <li>
                <router-link to="enchant">
                    <img src="../assets/img/icon/9.gif" alt="">
                    조합법
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'nav_comp',
    data() {
        return{
            profile:[
                {img:'https://api.mineatar.io/face/RONARONAKRTTANG'},
                {img:'https://api.mineatar.io/face/KIM1SEONGTAE'},
                {img:'https://api.mineatar.io/face/Onepunchk1ng'},
                {img:'https://api.mineatar.io/face/babymansik'},
                {img:'https://api.mineatar.io/face/wlstjdwns'},
                {img:'https://api.mineatar.io/face/Nam__Soon'},
                {img:'https://api.mineatar.io/face/MOOBONGJUN'},
            ]
        }
    },
}
</script>

<style scoped>
    .nav {padding-top: .5rem; width: 12rem}
    .company {background-color: #FFBF00; box-shadow: 6px 6px 0 #c90;}
    h2 {font-family: 'Bebas Neue', cursive; padding: .5rem .75rem; color: #000;}
        ul {padding:.5rem 0; background-color: #000; margin-top: .85rem; background: url('../assets/img/nav_bg.png')repeat center/100%; height: 100%; box-shadow: 6px 6px 0 #000;}
        ul li {padding:.3rem;}
        ul a {color: #fff; display: block; padding: .35rem 0; font-weight: 100; font-size: .85rem; width: 100%; transition:all .3s;}
        ul a:hover {background: #44A325 url('../assets/img/ov_bg.png'); transform: translateX(30px); transition:all .3s;box-shadow: 4px 4px 0 #2b6219;}
        ul a img {display: inline-block; margin:0 .5rem; height: 25px; vertical-align: middle;}
</style>