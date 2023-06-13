const app = Vue.createApp({
  template: `
    <h2>{{baslik}}</h2>
    <h3>{{icerik}}</h3>
    <p>{{yorum}}</p>
    <p>{{begen}}</p>
    <button v-on:click="ekle()">Ekle</button>
    <div>{{yazi}}</div>
    `,
  data() {
    return {
      baslik: "Vue Dersi",
      icerik: "Data Konusu",
      yorum: "Ders güzel",
      begen: 0,
      yazi: "Metin ekleme için tıklayın",
    };
  },
  methods: {
    ekle() {
      console.log("ekle methodu çalıştı");
      this.begen++;
      this.yazi = `${this.begen} tane metin girildi`;
    },
  },
});

app.mount("#app");
