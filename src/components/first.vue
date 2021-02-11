
<template>
 <div>
   <ul>
   <li><router-link  class="ys1"  to="/a">转向A页面</router-link></li>
     <li><router-link class="ys1" to="/b">转向B页面</router-link></li>
   </ul>
   <router-view></router-view>
 </div>
</template>
<style>
@import "../../public/ys1.css"

</style>