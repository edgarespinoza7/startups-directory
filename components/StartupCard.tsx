import Image from "next/image";
import React from "react";
import { formatDate } from "@/lib/utils";
import { EyeIcon } from "lucide-react";
import Link from "next/link";

const StartupCard = ({ post }: { post: StartupTypeCard }) => {
  const {
    _id,
    title,
    author,
    description,
    image,
    category,
    views,
    _createdAt,
  } = post;
  return (
    <li className="startup-card group">
      <div>
        <div className="flex-between">
          <p className="startup_card_date">{formatDate(_createdAt)}</p>
          <div className="flex gap-1.5">
            <EyeIcon className="size-6 text-primary" />
            <span className="text-14-medium">{views}</span>
          </div>
        </div>

        <div className="flex-between mt-5 gap-5">
          <div className="flex-1">
            <Link href={`/users/${author._id}`}>
              <p className="text-16-medium line-clamp-1">{author?.name}</p>
            </Link>
            <Link href={`/startups/${_id}`}>
              <h3 className="text-26-semibold line-clamp-1">{title}</h3>
            </Link>
          </div>
          <Link href={`/users/${author._id}`}>
            <Image
              src="https://placehold.co/48x48"
              alt="placeholder"
              className="rounded-full object-cover"
              width={48}
              height={48}
            />
          </Link>
        </div>
      </div>
    </li>
  );
};

export default StartupCard;
