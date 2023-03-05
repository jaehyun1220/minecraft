<template>
    <div>
        <div class="sub_title">
            <router-link to="">{{ name }}</router-link>
        </div>
        <sub_nav />
        <div class="sub_content">
        </div>
        <landmark v-show="landmark"/>
    </div>
</template>
<script>
import sub_nav from "../components/sub_nav.vue";
import landmark from "../components/landmark.vue";

export default {
    name : 'rona',
    components : {
        sub_nav,
        landmark
    },
    data() {
        return {
            landmark : false,
            name : 'rona',
            https : 'https:',
            url : '',
            user_nick: '',
            broad_title: '',
            broad_no:'',
            broad_thumb:'',
            profile_image: '',
            current_sum_viewer: '',
            people: [
                {user_id: 'rosenabi'},
                {user_id: 'cc1890'},
                {user_id: 'ckmin706'},
                {user_id: 'ektha9511'},
                {user_id: 'nmangoquince'},
                {user_id: 'riyoci'},
                {user_id: 'ch1716'},
            ]
        }
    },
    methods: {
        data() {
            this.people.forEach(el=>{
                this.url = `https://bjapi.afreecatv.com/api/${el.user_id}/station`
                this.axios.get(this.url)
                    .then (response => { 
                        this.user_nick = response.data.station.user_nick
                        this.broad_title = response.data.broad.broad_title
                        this.broad_no = response.data.broad_no
                        this.broad_thumb = `https://liveimg.afreecatv.com/h/${this.broad_no}.jpg`
                        this.profile_image = response.data.broad.profile_image
                        this.current_sum_viewer = response.data.broad.current_sum_viewer
                    })
                    .catch((error) => {
                        console.log(error);
                    })
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

</style>