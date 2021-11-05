<template>
    <div class="stars">
        <div class="star" v-for="i in [1, 2, 3, 4, 5]" :key="i">
            <img
                :src="require('../../../assets/images/full-star.png')"
                v-if="rate + 1 - i >= 1"
                alt=""
            />
            <img
                :src="require('../../../assets/images/half-star.png')"
                v-else-if="rate + 1 - i > 0"
                alt=""
            />
            <img :src="require('../../../assets/images/empty-star.png')" v-else alt="" />
        </div>
        <div class="rate">Reviews ({{ rate }})</div>
    </div>
</template>
<script lang="ts">
import { Options, Vue, prop } from 'vue-class-component';
@Options({
    props: {
        rate: prop({ type: Number, required: true }),
    },
})
export default class Rating extends Vue {
    rate!: number;
}
</script>
<style scoped>
.stars {
    display: flex;
    padding: 5px 0;
    align-items: center;
}
.star {
    width: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
    color: yellow;
}
.half-star {
    color: linear-gradient(90deg, #ffc0cb 50%, #00ffff 50%);
    width: 15px;
    cursor: pointer;
    display: flex;
    align-items: center;
}
.rate {
    margin-left: 5px;
    color: #a2a6b0;
    font-size: 12px;
    font-weight: 400;
}
</style>