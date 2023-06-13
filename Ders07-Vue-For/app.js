const app = Vue.createApp({
  template: `
  <ul>
    <li v-for="gun in gunler">{{gun}}</li>
  </ul>
  <ul>
    <li v-for="person in persons">Çalışan:{{person.isim}} -Maaş:{{person.maas}}</li>
  </ul>
  `,

  data() {
    return {
      gunler: [
        "pazartesi",
        "salı",
        "çarşamba",
        "perşembe",
        "cuma",
        "cumartesi",
        "pazar",
      ],
      persons: [
        { isim: "Selim", maas: 19000 },
        { isim: "Yavuz", maas: 1400 },
        { isim: "Arda", maas: 1250 },
      ],
    };
  },
  methods: {},
});

app.mount("#app");
