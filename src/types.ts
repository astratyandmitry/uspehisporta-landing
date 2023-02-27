export type Section = {
  title: string;
  subtitle: string;
  boxes: Box[];
};

export type Box = {
  label: string;
  title: string;
  icon: any;
  settings: string;
};
