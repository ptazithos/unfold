export enum ElementType {
  Set = "set",
  Item = "item",
}

export type TreeCommon = {
  label: string;
  type: ElementType;
};

export type TreeItem = {
  type: ElementType.Item;
} & TreeCommon;

export type TreeSet = {
  type: ElementType.Set;
  elements: TreeElement[];
} & TreeCommon;

export type TreeElement = TreeSet | TreeItem;
