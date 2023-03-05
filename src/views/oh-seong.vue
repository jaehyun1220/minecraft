<template>
    <div class="sub_title">
        <router-link to="">{{ name }}</router-link>
    </div>
    <sub_nav />
    <div class="sub_content">
        <transition-group name="list" tag="ul">
            <li v-for="(bj, index) of people" :key="index">
                <a v-bind:href="bj.link"  class="list_txt" target="_blank">
                    <img :src="bj.broad_thumb" class="broad_thumb">
                    <div class="lt_txt">
                        <img :src="bj.profile_image" class="profile_image">
                        <div class="lt_tit">
                            <p>{{ bj.broad_title}}</p>
                            <p>{{ bj.user_nick}} <span><box-icon name='user' color="#fff"></box-icon>{{ bj.current_sum_viewer}}</span></p>
                        </div>
                    </div>
                </a>
            </li>
        </transition-group>
    </div>
    <landmark v-show="landmark"/>
</template>
<script>
import sub_nav from "../components/sub_nav.vue";
import landmark from "../components/landmark.vue";
    export default {
        name : 'oh-seong',
        components : {
            sub_nav,
            landmark
        },
    data() {
        return {
            modal : false,
            off: false,
            name : 'oh-seong',
            https : 'https:',
            offline: `/src/assets/img/offline.jpg`,
            broad_no:'',
            people: [
                {user_id: 'rrvv17'},
                {user_id: 'na2un'},
                {user_id: 'legendhyuk'},
                {user_id: 'lovely5959'},
                {user_id: 'aigong7576'},
                {user_id: 'lika07'},
                {user_id: 'lyj9306'},
                {user_id: 'euro2u'},
                {user_id: 'ekdbs3052'},
                {user_id: 'wogustnrkd'},
                {user_id: 'yyk3390'},
                {user_id: 'blackchu'},
                {user_id: 'kyaang123'},
                {user_id: '42dadada'},
                {user_id: 'yjw5067'},
                {user_id: 'rudania1'},
            ],
        }
    },
    methods: {
        data() {
            this.people.forEach((el, idx)=>{
                this.url = `https://bjapi.afreecatv.com/api/${el.user_id}/station`
                this.axios.get(this.url)
                    .then ((res) => { 
                        this.people[idx].profile_image = `${this.https}${res.data.profile_image}`
                        this.people[idx].user_nick = res.data.station.user_nick
                        this.people[idx].broad_title = res.data.broad.broad_title
                        this.people[idx].broad_no = res.data.broad.broad_no
                        this.people[idx].broad_thumb = `https://liveimg.afreecatv.com/h/${this.people[idx].broad_no}.jpg`
                        this.people[idx].current_sum_viewer = res.data.broad.current_sum_viewer
                        this.people[idx].link = `https://play.afreecatv.com/${this.people[idx].user_id}/${this.people[idx].broad_no}`
                        this.people[idx].status = res.data.broad
                        if (this.people[idx].status == undefined) {
                            console.log(this.offline);
                        }
                        
                    })
                    .catch((error) => {
                        this.people[idx].broad_title = ''
                        this.people[idx].current_sum_viewer = 0
                        this.people[idx].broad_thumb = this.offline
                    })
            })
            this.people.filter((el, idx)=>{
                
            })
        }
    },
    mounted() {
        this.data()
        this.emitter.emit("people_data", this.data)
    },
}
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>