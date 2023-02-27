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
          settings: "url.telegram.operator",
          icon: TelegramIcon,
        },
        {
          title: "Консультация",
          label: "Опреатор",
          settings: "url.telegram.consulting",
          icon: TelegramIcon,
        },
        {
          title: "Прайс-лист",
          label: "Канал",
          settings: "url.telegram.price",
          icon: TelegramIcon,
        },
        {
          title: "Наши новости",
          label: "Канал",
          settings: "url.telegram.group",
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
          settings: "url.forum.do4a",
          icon: DochaIcon,
        },
        {
          title: "Anabolicshops",
          label: "Форум",
          settings: "url.forum.anabolics",
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
          settings: "url.product.alphatech",
          icon: AlphatechIcon,
        },
        {
          title: "HGH GENOTECHMED",
          label: "Веб-сайт",
          settings: "url.product.genotech",
          icon: GenotechmedIcon,
        },
      ],
    },
  ]);

  return {
    sections,
  };
});
