const app = Vue.createApp({
  template: `
    <h2>{{baslik}}</h2>
    <h3>{{icerik}}</h3>
    <p>{{yorum}}</p>
    `,
  data() {
    return {
      baslik: "Vue Dersi",
      icerik: "Data Konusu",
      yorum: "Ders güzel",
    };
  },
});

app.mount("#app");
