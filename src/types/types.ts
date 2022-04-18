export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export type Modal = {
  open: boolean;
  loading: boolean;
  title?: string;
  text: string;
  image: string;
  actionPrimary: string;
  actionSecondary?: string;
};
