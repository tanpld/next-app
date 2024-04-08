import { UserAddress } from "./types";

export function getUserAddress(address: UserAddress) {
  return `${address.suite}, ${address.street}, ${address.city}, ${address.zipcode}`;
}
