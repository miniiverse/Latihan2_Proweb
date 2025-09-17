import BlogCard from "./components/BlogCard";

interface BlogDetailProps {
  params: {
    id: string;
    title: string;
  };
}

export default function BlogDetail({ params }: BlogDetailProps) {
  return (
    <div>
      <h1>Detail Blog dengan ID: {params.id}</h1>
      <BlogCard
        title={params.title}
        description={`Ini adalah blog dengan ID ${params.id}`}
      />
    </div>
  );
}
