import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;

  // TODO: Fetch post từ API để lấy title, description cho SEO
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`);
  // const post = await res.json();

  return {
    title: slug,
    description: `Đọc bài viết trên VESTA Academy Blog.`,
    openGraph: {
      title: slug,
      type: "article",
      locale: "vi_VN",
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;

  // TODO: Fetch bài viết từ API
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, {
  //   next: { revalidate: 60 },
  // });
  // const post = await res.json();
  // if (!post) notFound();

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[60vh] max-w-[1200px] px-6 py-16">
        <article className="mx-auto max-w-[720px]">
          <h1 className="font-display text-4xl font-bold text-royal">
            {slug}
          </h1>
          <p className="mt-6 text-muted">
            Nội dung bài viết sẽ được tải từ API khi Backend sẵn sàng.
          </p>

          {/*
            Khi API sẵn sàng:
            <div
              className="prose prose-lg mt-8"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          */}
        </article>
      </main>
      <Footer />
    </>
  );
}
