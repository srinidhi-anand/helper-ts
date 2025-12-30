export type Value =
  | symbol
  | bigint
  | string
  | boolean
  | number
  | null
  | undefined
  | object;

export interface NestedRecord {
  [key: string]: Value | NestedRecord | NestedRecord[];
}

export type commonType = Value | Value[] | NestedRecord | NestedRecord[];
