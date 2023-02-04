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
          url: "#",
          icon: TelegramIcon,
        },
        {
          title: "Консультация",
          label: "Опреатор",
          url: "#",
          icon: TelegramIcon,
        },
        {
          title: "Прайс-лист",
          label: "Канал",
          url: "#",
          icon: TelegramIcon,
        },
        {
          title: "Наши новости",
          label: "Канал",
          url: "#",
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
          url: "#",
          icon: DochaIcon,
        },
        {
          title: "Anabolicshops",
          label: "Форум",
          url: "#",
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
          url: "#",
          icon: AlphatechIcon,
        },
        {
          title: "HGH GENOTECHMED",
          label: "Веб-сайт",
          url: "#",
          icon: GenotechmedIcon,
        },
      ],
    },
  ]);

  return {
    sections,
  };
});
