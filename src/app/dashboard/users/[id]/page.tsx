import { User } from "@/app/lib/types";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { notFound } from "next/navigation";

async function getData(id: string): Promise<User> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);

  if (!res.ok) {
    notFound();
  }

  return res.json();
}
export default async function UserDetails({ params }: { params: Params }) {
  return null;
}
