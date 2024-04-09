"use server";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  title: z.string(),
  body: z.string(),
  // userId: z.string(),
});

const CreatePost = FormSchema.omit({ id: true });

export async function createPost(formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const { title, body } = CreatePost.parse(rawFormData);

  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      title,
      body,
      userId: 1,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();

  revalidatePath("/dasboard/posts");
  redirect("/dashboard/posts");
}

export async function updateInvoice(id: string, formData: FormData) {
  const rawFormData = Object.fromEntries(formData.entries());
  const { title, body } = CreatePost.parse(rawFormData);

  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({
      title,
      body,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  const data = await res.json();

  console.log(data)

  revalidatePath("/dasboard/posts");
  redirect("/dashboard/posts");
}
