const app = Vue.createApp({
  template: `
  <div v-if="showInfo">Deneme Yazısı</div>
  <div v-if="!showInfo">Deneme Yazısı 2</div>
  <div v-show="!showInfo">Deneme Yazısı 2</div>
  <button v-on:click="showInfos()">Göster/gizle</button>
  <button @click="showInfosOneLine()">
  <span v-if="!showInfo">Göster</span>
  <span v-else>Gizle</span>
  </button>  
  `,
  // burada show göstermediğinde eleman yine DOM'a yazılır ama ifte yazılmaz.Dosya çalışınca incele altından görülebilir
  data() {
    return {
      showInfo: true,
    };
  },
  methods: {
    showInfos: function () {
      if (this.showInfo == true) {
        this.showInfo = false;
      } else {
        this.showInfo = true;
      }
    },
    showInfosOneLine: function () {
      this.showInfo = !this.showInfo;
    },
  },
});

app.mount("#app");
