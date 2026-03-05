import PageHeader from "../Components/PageHeader";
import BlogCard from "../Components/BlogCard";

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-3 md:px-0">
      <PageHeader title="Our blog" Link="Home" badge="Blog" />
      <BlogCard showHeader={false} />
    </section>
  );
};

export default Blog;
