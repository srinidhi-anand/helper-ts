export type Primitive = string | boolean | number | null | undefined;

export type Value = Primitive | Object | Record<any, any>;

export interface NestedRecord {
  [key: string]: Value | NestedRecord | NestedRecord[];
}

export type commonType = Value | Value[] | NestedRecord | NestedRecord[];
