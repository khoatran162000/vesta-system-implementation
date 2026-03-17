import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Blog - IELTS Tips",
  description:
    "Chia sẻ kiến thức, tips & tricks luyện thi IELTS hiệu quả từ VESTA Academy.",
};

export default function BlogPage() {
  // TODO: Fetch posts từ API khi Backend sẵn sàng
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?status=PUBLISHED`, {
  //   next: { revalidate: 60 },
  // });
  // const { data: posts } = await res.json();

  return (
    <>
      <Header />
      <main className="mx-auto min-h-[60vh] max-w-[1200px] px-6 py-16">
        <h2 className="font-display text-3xl font-bold text-royal">
          IELTS Tips &amp; Blog
        </h2>
        <p className="mt-4 text-muted">
          Danh sách bài viết sẽ được tải từ API khi Backend sẵn sàng.
        </p>

        {/*
          Khi API sẵn sàng, render danh sách bài viết:

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        */}
      </main>
      <Footer />
    </>
  );
}
