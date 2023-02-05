import { defineStore } from "pinia";
import { Section } from "./types";
import { ref } from "vue";

import TelegramIcon from "./components/Icons/TelegramIcon.vue";
import AnabolycsIcon from "./components/Icons/AnabolycsIcon.vue";
import DochaIcon from "./components/Icons/DochaIcon.vue";
import AlphatechIcon from "./components/Icons/AlphatechIcon.vue";
import GenotechmedIcon from "./components/Icons/GenotechmedIcon.vue";

export const useAppStore = defineStore("app", () => {
  const sections = ref<Section[]>([
    {
      title: "Надежный Поставщик",
      subtitle: "Гормона роста и Пептидов",
      boxes: [
        {
          title: "Оформить заказ",
          label: "Опреатор",
          url: "https://t.me/Uspehisporta777",
          icon: TelegramIcon,
        },
        {
          title: "Консультация",
          label: "Опреатор",
          url: "https://t.me/Trean_den",
          icon: TelegramIcon,
        },
        {
          title: "Прайс-лист",
          label: "Канал",
          url: "https://t.me/+16d4gceMu6g3NjFh",
          icon: TelegramIcon,
        },
        {
          title: "Наши новости",
          label: "Канал",
          url: "https://t.me/uspehisporta",
          icon: TelegramIcon,
        },
      ],
    },
    {
      title: "Наши VIP-вертки",
      subtitle: "на уважаемыех формуах",
      boxes: [
        {
          title: "DO4a.me",
          label: "Форум",
          url: "https://an.do4a.me/threads/%D0%A3%D1%81%D0%BF%D0%B5%D1%85%D0%B8-%D1%81%D0%BF%D0%BE%D1%80%D1%82%D0%B0-%E2%84%961-%D0%9D%D0%B0%D0%B4%D0%B5%D0%B6%D0%BD%D1%8B%D0%B9-%D0%9F%D0%BE%D1%81%D1%82%D0%B0%D0%B2%D1%89%D0%B8%D0%BA-%D0%93%D0%BE%D1%80%D0%BC%D0%BE%D0%BD%D0%B0-%D1%80%D0%BE%D1%81%D1%82%D0%B0-%D0%B8-%D0%9F%D0%B5%D0%BF%D1%82%D0%B8%D0%B4%D0%BE%D0%B2-%D0%9E%D1%82%D0%BF%D1%80%D0%B0%D0%B2%D0%BA%D0%B0-%D1%81-%D1%85%D0%BB%D0%B0%D0%B4%D0%BE%D1%8D%D0%BB%D0%B5%D0%BC%D0%B5%D0%BD%D1%82%D0%BE%D0%BC.29334/page-34",
          icon: DochaIcon,
        },
        {
          title: "Anabolicshops",
          label: "Форум",
          url: "https://ar.anabolicshops.me/threads/7873/page-115",
          icon: AnabolycsIcon,
        },
      ],
    },
    {
      title: "Лучшие производители",
      subtitle: "в Российской Федерации",
      boxes: [
        {
          title: "HGH ALPHATECH",
          label: "Веб-сайт",
          url: "https://p.alphatech.pw/",
          icon: AlphatechIcon,
        },
        {
          title: "HGH GENOTECHMED",
          label: "Веб-сайт",
          url: "https://x.genotech.site/",
          icon: GenotechmedIcon,
        },
      ],
    },
  ]);

  return {
    sections,
  };
});
