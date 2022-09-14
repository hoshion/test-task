export class Database<T> {
  private repository: T[];

  constructor() {
    this.repository = [];
  }

  INSERT(entity: T): void {
    this.repository.push(entity);
  };
  EXISTS_BY(column: string, value: any): boolean {
    return this.repository.some(entity => entity[column] === value);
  };
  SELECT_FIRST_BY(column: string, value: any): T {
    return this.repository.find(entity => entity[column] === value);
  };
}