
export class user {
  id!: number;
  email!: string;
  fullName!: string;
  userRole!: number;
  phoneNo!: string;
  userName!: string;
  createdDate!: Date;
  password!: string;
  isActive!: Boolean;
}

export class userRole {
  id!: number;
  name!: string;
  permission!: string;
}

