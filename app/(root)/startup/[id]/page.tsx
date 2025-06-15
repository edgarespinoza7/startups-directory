import React from "react";
import { client } from "@/sanity/lib/client";
import { STARTUP_BY_ID_QUERY } from "@/sanity/lib/queries";
import { notFound } from "next/navigation";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;

  const post = await client.fetch(STARTUP_BY_ID_QUERY, { id });

  if (!post) {
    return notFound();
  }

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-600 mb-2">
        This page will display detailed information about a specific startup.
      </p>
      <p className="text-gray-600">
        You can include various details such as the startup&apos;s description,
        founder information, funding status, and more.
      </p>
      {/* Additional content can be added here */}
    </>
  );
};

export default Page;
