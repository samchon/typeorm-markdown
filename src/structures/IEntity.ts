export interface IEntity {
  name: string;

  file: string;

  columns: IEntity.IColumn[];
}

export namespace IEntity {
  export interface IColumn {
    name: string;

    type: string;

    primaryKey: boolean;

    nullable: boolean;

    description: string;
  }
}
