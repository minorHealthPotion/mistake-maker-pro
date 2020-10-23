export class User {
  id: number;
  name: string;
  email: string;
  positionName: string;
  constructor(id: number, name: string, email: string, positionName: string) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.positionName = positionName;
  }
}
