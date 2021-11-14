export interface ItemListRes {
  categorySeq: number;
  categoryName: string;
  items: {
    itemSeq: number;
    itemName: string;
  }[];
}
