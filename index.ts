class Order {
  private _id: number;
  private _clientName: ClientName;
  private _value: number;
  private _date: Date;

  constructor(id: number, clientName: ClientName, value: number) {
    this._id = id;
    this._clientName = clientName;
    this._value = value;
    this._date = new Date();
  }
}

class ClientName {
  private readonly _firstName: string;
  private readonly _lastName: string;

  constructor(firstName: string, lastName: string) {
    if (!this.isValidName(firstName)) {
      throw new Error('firstName is required');
    }
    this._firstName = firstName;

    if (!this.isValidName(lastName)) {
      throw new Error('lastName is required');
    }
    this._lastName = lastName;
  }

  private isValidName(name: string) {
    return !!name;
  }

  get first(): string {
    return this._firstName;
  }

  get last(): string {
    return this._lastName;
  }

  get full(): string {
    return `${this._firstName} ${this._lastName}`;
  }
}

const clientName = new ClientName('Israel', 'Borba');
console.log(clientName.first);
console.log(clientName.last);
console.log(clientName.full);
const order = new Order(1, clientName, 100);
console.log(order);
