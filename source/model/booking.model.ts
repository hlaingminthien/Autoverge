
export class booking {
  id!: number;
  customerId!: number;
  carNo!: string;
  note!: string;
  createdDate!: Date;
  durationDay!: number;
  durationType!: number;
  status!: number;
}

export class bookingStatus {
  id!: number;
  name!: string;
}