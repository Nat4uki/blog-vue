<template>
    <div class="home_bg">
        <canvas id="canvas"></canvas>
        <div class="font">Natsuki's Space</div>
        <ul class="home-tab">
            <li v-for="item in  menuList  " :key="item.path" @click="goMenu(item.path)">{{ item.label }}</li>
        </ul>
    </div>
</template>

<script setup>
// import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
const router = useRouter();

const menuList = [
    {
        label: "首页",
        path: "/login",
    },
    {
        label: "相册",
        path: "/reg",
    },
    {
        label: "说说",
        path: "/reg",
    },
    {
        label: "留言",
        path: "/reg",
    }
];
const goMenu = (val) => {
    router.push({ path: val });
    // console.log(val)
};



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.home_bg {
  width: 100%;
  height: 100vh;
  position: relative;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
}
.font {
  position: absolute;
  top: 40%;
  left: 50%;
  font-style: italic;
  transform: translate(-50%, -50%);
  font-family: "Peralta", monospace;
  font-size: clamp(2em, 8vmin, 20em);
  text-shadow: 0;
  color: #fffcec;
  padding: 0.5rem;
  cursor: pointer;
}
.font:hover {
  animation: anime 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95) alternate forwards;
}
@keyframes anime {
  from {
    font-variation-settings: "wght" 300, "slnt" 15;
    text-shadow: none;
  }
  to {
    font-variation-settings: "wght" 800, "slnt" 0;
    text-shadow: 3px 3px 0px #00e6e6, 6px 6px 0px #01cccc, 9px 9px 0px #00bdbd, 12px 12px 8px #dda121;
  }
}
.home-tab {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translateX(-50%);
  min-height: 3rem;
  padding: 1rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  flex-wrap: nowrap;
  font-size: 1.6rem;
  color: #fffcec;
  font-weight: 600;
  margin-bottom: 1rem;
  border-radius: 2rem;
  border: 2px solid #fffcec;

  li {
    word-break: keep-all;
    margin-right: 1rem;
    list-style: none;
  }

}
</style>
