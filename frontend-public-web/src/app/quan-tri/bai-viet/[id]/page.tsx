"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { ArrowLeft, Save } from "lucide-react";
import Link from "next/link";

export default function EditPostPage() {
  const { id } = useParams<{ id: string }>();

  // TODO: Fetch bài viết từ API bằng React Query
  // const { data: post, isLoading } = useQuery({
  //   queryKey: ["post", id],
  //   queryFn: () => fetch(`${API_URL}/posts/${id}`).then(r => r.json()),
  // });

  const [title, setTitle] = useState("Bài viết mẫu #" + id);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState<"DRAFT" | "PUBLISHED">("DRAFT");
  const [saving, setSaving] = useState(false);

  async function handleSave() {
    setSaving(true);
    try {
      // TODO: Gọi API cập nhật bài viết
      // await fetch(`${API_URL}/posts/${id}`, {
      //   method: "PUT",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Authorization: `Bearer ${token}`,
      //   },
      //   body: JSON.stringify({ title, content, status }),
      // });
      alert("API chưa sẵn sàng.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="mx-auto max-w-[800px]">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            href="/quan-tri/bai-viet"
            className="rounded-lg p-2 text-muted transition-colors hover:bg-cream-dark hover:text-royal"
          >
            <ArrowLeft size={20} />
          </Link>
          <h2 className="font-display text-2xl font-bold text-royal">
            Chỉnh sửa bài viết
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "DRAFT" | "PUBLISHED")}
            className="rounded-lg border border-silver/40 bg-cream px-3 py-2 text-sm outline-none focus:border-gold"
          >
            <option value="DRAFT">Bản nháp</option>
            <option value="PUBLISHED">Xuất bản</option>
          </select>
          <button
            onClick={handleSave}
            disabled={saving || !title}
            className="cta-btn gap-1.5 text-sm disabled:opacity-60"
          >
            <Save size={16} />
            {saving ? "Đang lưu..." : "Cập nhật"}
          </button>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-6 rounded-xl border border-silver/30 bg-white p-6">
        <div>
          <label className="mb-1.5 block text-sm font-medium text-royal">
            Tiêu đề bài viết
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-lg border border-silver/40 bg-cream px-4 py-3 text-base outline-none transition-colors focus:border-gold focus:ring-1 focus:ring-gold/30"
          />
        </div>

        <div>
          <label className="mb-1.5 block text-sm font-medium text-royal">
            Nội dung
          </label>
          <div className="min-h-[400px] rounded-lg border border-silver/40 bg-cream p-4">
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Nội dung bài viết..."
              className="h-full min-h-[360px] w-full resize-none bg-transparent text-sm outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
