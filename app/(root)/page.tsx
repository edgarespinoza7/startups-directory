import SearchForm from "../../components/SearchForm";
import StartupCard from "../../components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query ?? "";

  const posts = [
    {
      _id: 1,
      _createdAt: new Date(),
      views: 90,
      author: {
        _id: 1,
        name: "John Doe", // Example author name
      },
      description: "Description for Startup A",
      image:
        "https://images.unsplash.com/photo-1599272771314-f3ec16bda3f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
    {
      _id: 2,
      _createdAt: new Date(),
      views: 50,
      author: {
        _id: 1,
        name: "John Doe", // Example author name
      },
      description: "Description for Startup B",
      image:
        "https://images.unsplash.com/photo-1726137570000-70ae29f0ba01?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Payments",
      title: "ePayments",
    },
    {
      _id: 3,
      _createdAt: new Date(),
      views: 35,
      author: {
        _id: 1,
        name: "John Doe", // Example author name
      },
      description: "Description for Startup C",
      image:
        "https://images.unsplash.com/photo-1642969164999-979483e21601?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "3D Printing",
      title: "3dMasters",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="w-full bg-primary min-h-[530px] pattern flex justify-center items-center flex-col py-10 px-6">
        <h1 className="heading">
          Pitch your Startup <br /> Connect with Entrepreneurs
        </h1>
        <p className="sub-heading !max-w-3xl text-center">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>
        <SearchForm query={query} />
      </section>
      {/* Startups Section */}
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search Results for "${query}"` : "All Startups"}
        </p>
        <ul className="mt-7 card_grid">
          {posts?.length > 0 &&
            posts.map((post: StartupCardType, index: number) => (
              <StartupCard key={post?._id} post={post} />
            ))}
        </ul>
      </section>
    </>
  );
}
