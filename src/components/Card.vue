<template>
    <div class="card" @mouseover="startVideo()" @mouseout="stopVideo()">
        <div class="card__hero">
            <img class="card__image" :src="poster" alt="">
            <video class="card__video" loop="true" muted="true" ref="video">
                <source :src="videoWebm" type="video/webm">
                <source :src="videoMp4" type="video/mp4">
            </video>
        </div>
        <div class="card__body">
            <h2 class="card__title">Big Buck Bunny</h2>
            <p class="card__description">Big Buck Bunny (code-named Peach) is a short computer-animated comedy film by the Blender Institute.</p>
        </div>
    </div>
</template>

<script>
import videoMp4 from '@/assets/big_buck_bunny.mp4';
import videoWebm from '@/assets/big_buck_bunny.webm';
import poster from '@/assets/poster.jpg';

export default {
    data() {
        return {
            videoMp4,
            videoWebm,
            poster
        }
    },
    methods: {
        startVideo() {
            this.$refs.video.play();
        },
        stopVideo() {
            this.$refs.video.pause();
        }
    },
}
</script>

<style lang="scss">
.card {
    display: inline-block;
    position: relative;
    width: 355px;
    background-color: #fff;
    text-align: left;
    box-shadow: 0 20px 20px rgba(0,0,0,.08);
    transition: all 250ms cubic-bezier(.02, .01, .47, 1);
    color: #4B4F56;
    cursor: pointer;
    max-width: 100%;
    &__hero {
        line-height: 0;
        height: 250px;
        overflow: hidden;
        position: relative;
    }
    &__image {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &__video {
        position: absolute;
        top: 50%;
        left: 50%;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        transform: translate(-50%, -50%);
        transition: 0.25s;
        opacity: 0;
    }
    &__body {
        padding: 20px;
    }
    &__title {
        font-size: 24px;
        font-weight: 400;
        line-height: 1.3;
        margin-bottom: 12px;
        color: #1D2129;
    }
    &__description {
        font-size: 14px;
        font-weight: 400;
        text-align: left;
        line-height: 1.5;
        color: #4B4F56;
        font-size: 16px;
    }
    &:hover {
        box-shadow: 0 40px 40px rgba(0,0,0,.16);
        transform: translate(0, -10px);
        .card__video {
            opacity: 1;
        }
    }
}
</style>
