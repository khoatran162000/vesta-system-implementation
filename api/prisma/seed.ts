// FILE: prisma/seed.ts — Seed data hoàn chỉnh cho VESTA UNI
// Chạy: npx prisma db seed

import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

/* ═══════════════════════════════════════════
   SAMPLE BLOG POSTS — Nội dung phong phú
   ═══════════════════════════════════════════ */

const SAMPLE_POSTS = [
  {
    title: "Tổng hợp tất cả dạng bài IELTS Reading",
    slug: "tong-hop-dang-bai-ielts-reading",
    content: `
<h2>Tổng quan IELTS Academic Reading</h2>

<p>Bài thi IELTS Academic Reading gồm <strong>3 bài đọc</strong> với tổng cộng <strong>40 câu hỏi</strong> trong vòng <strong>60 phút</strong>. Văn bản lấy từ sách, tạp chí, báo khoa học — phù hợp trình độ undergraduate/postgraduate. Có tất cả <strong>11 dạng câu hỏi</strong> chính, được tổng hợp đầy đủ trong tài liệu này.</p>

<hr />

<h2>Matching Headings</h2>

<blockquote>
<p><strong>— DẠNG BÀI LÀ GÌ?</strong></p>
<p>Cho một danh sách tiêu đề (i–x) nhiều hơn số đoạn văn. Nhiệm vụ: chọn tiêu đề phù hợp nhất với <mark>ý chính</mark> của từng đoạn. Mỗi tiêu đề chỉ dùng một lần.</p>
</blockquote>

<blockquote>
<p><strong>— ĐIỂM CẦN NHỚ</strong></p>
<ul>
<li>Tiêu đề phản ánh <strong>ý chính</strong> của cả đoạn, không phải chi tiết</li>
<li>Các tiêu đề nhiều thường rất gần nghĩa nhau</li>
<li>Nhiều synonyms &amp; paraphrasing</li>
<li>Câu đầu &amp; câu cuối thường chứa ý chính</li>
</ul>
</blockquote>

<h3>⚡ Chiến thuật làm bài</h3>

<ol>
<li>Làm dạng này <strong>trước tất cả</strong> câu hỏi khác trong cùng bài đọc (nắm main idea → làm câu sau nhanh hơn)</li>
<li>Đọc lướt toàn bài trước để nắm cấu trúc tổng thể</li>
<li>Đọc kỹ <strong>câu đầu và câu cuối</strong> của mỗi đoạn — thường chứa ý chính</li>
<li>Viết tóm tắt ngắn gọn (2-3 từ) cho từng đoạn bằng ngôn ngữ của mình</li>
<li>Đối chiếu tóm tắt của mình với danh sách tiêu đề — chú ý synonym</li>
<li>Loại trừ các tiêu đề đã dùng; đoạn khó để lại làm sau cùng</li>
</ol>

<blockquote>
<p>⚠ <strong>Bẫy thường gặp:</strong> Một từ khóa trong đoạn xuất hiện trong nhiều tiêu đề — đừng chọn tiêu đề chỉ vì có cùng từ đó. Phải đảm bảo tiêu đề khớp với <em>ý chính toàn đoạn</em>.</p>
</blockquote>

<hr />

<h2>Matching Information</h2>

<blockquote>
<p><strong>— DẠNG BÀI LÀ GÌ?</strong></p>
<p>Cho danh sách thông tin (số liệu, ví dụ, lý do, mô tả). Nhiệm vụ: xác định thông tin đó nằm ở đoạn nào (A, B, C...). Một đoạn có thể được chọn nhiều lần.</p>
</blockquote>

<blockquote>
<p><strong>— ĐIỂM CẦN NHỚ</strong></p>
<ul>
<li>Thứ tự câu hỏi <strong>KHÔNG</strong> theo thứ tự đoạn văn</li>
<li>Một đoạn có thể có <strong>nhiều hơn một đáp án</strong></li>
<li>Tập trung vào <strong>chi tiết cụ thể</strong>, không phải ý chính</li>
<li>Keyword scanning là kỹ năng then chốt</li>
</ul>
</blockquote>

<h3>⚡ Chiến thuật làm bài</h3>

<ol>
<li>Đọc câu hỏi trước — highlight từ khóa quan trọng</li>
<li>Scan từng đoạn để tìm thông tin khớp (số liệu, tên người, ví dụ cụ thể)</li>
<li>Đừng đọc toàn bộ đoạn — chỉ dừng lại khi tìm thấy thông tin liên quan</li>
<li>Ghi nhớ: câu hỏi có thể paraphrase thông tin trong bài</li>
<li>Xử lý câu dễ trước, câu khó để sau</li>
</ol>

<hr />

<h2>Multiple Choice</h2>

<blockquote>
<p><strong>— DẠNG BÀI LÀ GÌ?</strong></p>
<p>Chọn đáp án đúng (A/B/C/D hoặc A-E chọn 2). Thứ tự câu hỏi THEO thứ tự bài đọc — đây là ưu điểm lớn giúp locate đáp án nhanh hơn.</p>
</blockquote>

<h3>⚡ Chiến thuật làm bài</h3>

<ol>
<li>Đọc câu hỏi + 4 options — highlight keyword trong câu hỏi</li>
<li>Scan bài đọc đến vùng liên quan (dùng vị trí câu hỏi trước/sau làm mốc)</li>
<li>Đọc kỹ đoạn đó, tìm thông tin ứng với câu hỏi</li>
<li>Loại trừ đáp án sai trước — thường còn 2 đáp án có vẻ đúng</li>
<li>Chọn đáp án khớp <em>nghĩa</em> với bài, không phải chỉ khớp từ</li>
</ol>

<hr />

<h2>True / False / Not Given</h2>

<blockquote>
<p><strong>— ĐỊNH NGHĨA 3 ĐÁP ÁN</strong></p>
<ul>
<li><strong>TRUE</strong> — thông tin trong bài xác nhận phát biểu</li>
<li><strong>FALSE</strong> — thông tin trong bài mâu thuẫn với phát biểu</li>
<li><strong>NOT GIVEN</strong> — bài không đề cập đến (không thể kết luận)</li>
</ul>
</blockquote>

<blockquote>
<p>⚠ <strong>Bẫy phổ biến nhất — NOT GIVEN:</strong> Nhiều học sinh chọn FALSE vì nghĩ "thông tin không có trong bài là sai". Sai! FALSE nghĩa là bài nói ngược lại. NOT GIVEN nghĩa là bài hoàn toàn không đề cập. Đây là điểm mấu chốt phân biệt học sinh band 6 và band 7+.</p>
</blockquote>

<h3>⚡ Chiến thuật làm bài</h3>

<ol>
<li>Đọc phát biểu → tìm keyword → scan bài tìm vùng liên quan</li>
<li>Đọc kỹ vùng đó: thông tin có khớp không?</li>
<li>Nếu khớp → TRUE. Nếu trái ngược → FALSE. Nếu không đề cập → NOT GIVEN</li>
<li>Tuyệt đối không dùng kiến thức ngoài để đoán NOT GIVEN</li>
<li>Nếu một phần phát biểu đúng nhưng phần khác không có → NOT GIVEN</li>
</ol>

<hr />

<h2>Sentence Completion</h2>

<blockquote>
<p><strong>— DẠNG BÀI LÀ GÌ?</strong></p>
<p>Hoàn thành câu bằng cách điền từ lấy <strong>trực tiếp từ bài đọc</strong>. Thường có giới hạn số từ (NO MORE THAN TWO WORDS / ONE WORD ONLY).</p>
</blockquote>

<h3>⚡ Chiến thuật làm bài</h3>

<ol>
<li>Đọc câu chưa hoàn thành — dự đoán loại từ cần điền (noun? adj? verb?)</li>
<li>Scan bài để tìm vùng tương ứng</li>
<li>Đọc kỹ câu đó trong bài — tìm từ điền vào</li>
<li>Kiểm tra: câu hoàn thành có đúng nghĩa và ngữ pháp không?</li>
<li>Kiểm tra giới hạn từ — không thêm không bớt</li>
</ol>

<hr />

<h2>Bảng Tổng hợp Nhanh — 11 Dạng Bài</h2>

<table>
<thead>
<tr><th>#</th><th>Dạng bài</th><th>Kiểm tra</th><th>Thứ tự?</th><th>Nguồn đáp án</th><th>Độ khó</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Matching Headings</td><td>Ý chính đoạn văn</td><td>Không</td><td>List cho sẵn</td><td>Khó</td></tr>
<tr><td>2</td><td>Matching Information</td><td>Chi tiết cụ thể</td><td>Không</td><td>Tên đoạn (A, B..)</td><td>TB</td></tr>
<tr><td>3</td><td>Matching Features</td><td>Ai nói/làm gì</td><td>Không</td><td>List cho sẵn</td><td>TB</td></tr>
<tr><td>4</td><td>Multiple Choice</td><td>Thông tin chi tiết</td><td>Có</td><td>A/B/C/D cho sẵn</td><td>TB</td></tr>
<tr><td>5</td><td>True / False / Not Given</td><td>Sự kiện thực tế</td><td>Có</td><td>T/F/NG</td><td>Khó</td></tr>
<tr><td>6</td><td>Yes / No / Not Given</td><td>Quan điểm tác giả</td><td>Có</td><td>Y/N/NG</td><td>Khó</td></tr>
<tr><td>7</td><td>Sentence Completion</td><td>Thông tin chi tiết</td><td>Có</td><td>Từ trong bài</td><td>TB</td></tr>
<tr><td>8</td><td>Summary Completion</td><td>Ý chính + chi tiết</td><td>Có</td><td>Bài / list cho sẵn</td><td>TB</td></tr>
<tr><td>9</td><td>Note/Table/Flow-chart</td><td>Thông tin cụ thể</td><td>Có</td><td>Từ trong bài</td><td>TB</td></tr>
<tr><td>10</td><td>Short Answer</td><td>Thông tin cụ thể</td><td>Có</td><td>Từ trong bài</td><td>Dễ</td></tr>
<tr><td>11</td><td>Diagram Labelling</td><td>Cấu trúc / quy trình</td><td>Không rõ</td><td>Từ trong bài</td><td>TB</td></tr>
</tbody>
</table>

<hr />

<h2>8 Nguyên tắc Vàng — IELTS Reading</h2>

<h3>1. KHÔNG ĐỌC TOÀN BÀI TRƯỚC</h3>
<p>Đọc câu hỏi trước, sau đó scan tìm thông tin liên quan. Đọc toàn bài mất thời gian không cần thiết.</p>

<h3>2. LUÔN TÌM SYNONYM</h3>
<p>Bài đọc gần như không bao giờ dùng lại từ y hệt câu hỏi. Phải nhận ra paraphrase và synonym.</p>

<h3>3. NOT GIVEN ≠ FALSE</h3>
<p>NOT GIVEN = thông tin không có trong bài. FALSE = bài nói ngược lại. Đây là sự khác biệt cốt lõi.</p>

<h3>4. MATCHING HEADINGS LÀM TRƯỚC</h3>
<p>Nếu bài có dạng này, làm trước hết — sẽ giúp hiểu bài tốt hơn cho các câu sau.</p>

<h3>5. QUẢN LÝ THỜI GIAN NGHIÊM NGẶT</h3>
<p>20 phút mỗi passage. Câu khó → skip, làm câu khác, quay lại sau. Không để stuck một câu quá 2 phút.</p>

<h3>6. CHÉP ĐÁP ÁN CHÍNH XÁC</h3>
<p>Với dạng điền từ: copy y chang từ bài, đúng spelling, đúng số từ. Sai một chữ = mất điểm.</p>

<h3>7. ĐỌC INSTRUCTION KỸ</h3>
<p>"No more than TWO words" và "ONE word only" là hoàn toàn khác nhau. Đọc instruction mỗi nhóm câu hỏi trước khi làm.</p>

<h3>8. TRANSFER ANSWERS CẨN THẬN</h3>
<p>Kiểm tra lại answer sheet trước khi hết giờ. IELTS Academic Reading không có thêm thời gian transfer như Listening.</p>
    `.trim(),
  },

  {
    title: "10 Mẹo Luyện Listening IELTS Hiệu Quả",
    slug: "10-meo-luyen-listening-ielts",
    content: `
<h2>Tổng quan IELTS Listening</h2>

<p>IELTS Listening gồm <strong>4 phần</strong> (Part 1-4), tổng cộng <strong>40 câu hỏi</strong>, thời gian nghe khoảng <strong>30 phút</strong> + 10 phút chuyển đáp án. Độ khó tăng dần từ Part 1 đến Part 4.</p>

<hr />

<h2>Mẹo 1: Đọc câu hỏi trước khi nghe</h2>

<p>Tận dụng thời gian giữa các phần để đọc trước câu hỏi. Gạch chân <mark>keyword</mark> quan trọng — đặc biệt là số liệu, tên người, địa điểm.</p>

<h2>Mẹo 2: Chú ý từ nối và tín hiệu</h2>

<blockquote>
<p><strong>Các từ tín hiệu quan trọng:</strong></p>
<ul>
<li><strong>However, but, although</strong> → đáp án thường ở SAU các từ này</li>
<li><strong>Actually, in fact</strong> → sửa lại thông tin trước đó</li>
<li><strong>First, then, finally</strong> → thứ tự các bước</li>
</ul>
</blockquote>

<h2>Mẹo 3: Cẩn thận với "bẫy" thay đổi đáp án</h2>

<p>Người nói thường đưa ra một đáp án rồi <strong>sửa lại</strong>. Ví dụ: "The meeting is on Monday... no wait, they changed it to <mark>Tuesday</mark>." — đáp án đúng là Tuesday.</p>

<h2>Mẹo 4: Spelling phải chính xác</h2>

<p>Sai spelling = mất điểm. Luyện viết các từ thường gặp: tên tháng, số, địa chỉ, nghề nghiệp.</p>

<h2>Mẹo 5: Nghe podcast và TED Talks hàng ngày</h2>

<p>Nghe 15-20 phút mỗi ngày với các chủ đề học thuật. Bắt đầu với subtitle, sau đó bỏ dần.</p>

<hr />

<h2>Bảng tóm tắt 4 phần Listening</h2>

<table>
<thead>
<tr><th>Part</th><th>Bối cảnh</th><th>Số người nói</th><th>Độ khó</th></tr>
</thead>
<tbody>
<tr><td>1</td><td>Hội thoại đời thường</td><td>2</td><td>Dễ</td></tr>
<tr><td>2</td><td>Độc thoại đời thường</td><td>1</td><td>TB</td></tr>
<tr><td>3</td><td>Hội thoại học thuật</td><td>2-3</td><td>Khó</td></tr>
<tr><td>4</td><td>Bài giảng học thuật</td><td>1</td><td>Rất khó</td></tr>
</tbody>
</table>

<h2>Mẹo 6: Luyện dictation</h2>

<p>Nghe một câu → pause → viết lại nguyên văn → so sánh. Đây là cách luyện nghe chi tiết hiệu quả nhất.</p>

<h2>Mẹo 7: Làm quen với accent khác nhau</h2>

<p>IELTS Listening dùng cả accent British, Australian, và American. Nghe BBC, ABC News, CNN để quen tai.</p>

<h2>Mẹo 8: Đừng kẹt ở một câu</h2>

<blockquote>
<p>⚠ <strong>Nguyên tắc quan trọng:</strong> Nếu miss một câu, bỏ qua ngay và focus vào câu tiếp theo. Đừng để mất 2-3 câu vì cố nghe lại câu đã qua.</p>
</blockquote>

<h2>Mẹo 9: Viết đáp án bằng bút chì</h2>

<p>Dùng bút chì để dễ sửa. Khi transfer đáp án, kiểm tra kỹ spelling và số thứ tự câu.</p>

<h2>Mẹo 10: Tập trung 100% trong 30 phút</h2>

<p>Listening chỉ phát <strong>MỘT LẦN</strong>. Tắt hết thông báo, tìm chỗ yên tĩnh, và tập trung tuyệt đối.</p>
    `.trim(),
  },

  {
    title: "Cách Viết IELTS Writing Task 2 Đạt Band 7+",
    slug: "cach-viet-ielts-writing-task-2-band-7",
    content: `
<h2>Cấu trúc bài Writing Task 2</h2>

<p>IELTS Writing Task 2 yêu cầu viết bài luận <strong>250 từ trở lên</strong> trong <strong>40 phút</strong>. Bài luận chiếm <strong>2/3 tổng điểm Writing</strong> — quan trọng hơn Task 1.</p>

<blockquote>
<p><strong>4 tiêu chí chấm điểm (mỗi tiêu chí 25%):</strong></p>
<ul>
<li><strong>Task Response</strong> — Trả lời đúng yêu cầu đề</li>
<li><strong>Coherence &amp; Cohesion</strong> — Logic và liên kết</li>
<li><strong>Lexical Resource</strong> — Vốn từ vựng</li>
<li><strong>Grammatical Range &amp; Accuracy</strong> — Ngữ pháp đa dạng và chính xác</li>
</ul>
</blockquote>

<hr />

<h2>5 dạng đề phổ biến</h2>

<h3>1. Opinion (Agree/Disagree)</h3>
<p>"To what extent do you agree or disagree?" — Nêu rõ quan điểm và bảo vệ xuyên suốt bài.</p>

<h3>2. Discussion (Discuss both views)</h3>
<p>"Discuss both views and give your opinion." — Phân tích cả 2 phía rồi nêu quan điểm riêng.</p>

<h3>3. Problem &amp; Solution</h3>
<p>"What are the problems and solutions?" — Nêu vấn đề + đề xuất giải pháp cụ thể.</p>

<h3>4. Advantages &amp; Disadvantages</h3>
<p>"Do the advantages outweigh the disadvantages?" — Phân tích lợi/hại, kết luận phía nào nặng hơn.</p>

<h3>5. Two-part Question</h3>
<p>Hai câu hỏi riêng biệt — phải trả lời ĐỦ cả hai trong bài luận.</p>

<hr />

<h2>Công thức viết band 7+</h2>

<ol>
<li><strong>Mở bài (2-3 câu):</strong> Paraphrase đề bài + nêu thesis statement rõ ràng</li>
<li><strong>Thân bài 1 (5-7 câu):</strong> Topic sentence + Example/Explanation + Kết nối</li>
<li><strong>Thân bài 2 (5-7 câu):</strong> Topic sentence + Example/Explanation + Kết nối</li>
<li><strong>Kết bài (2-3 câu):</strong> Tóm tắt quan điểm, KHÔNG thêm ý mới</li>
</ol>

<blockquote>
<p>⚠ <strong>Lỗi phổ biến nhất:</strong> Viết lan man không có topic sentence rõ ràng ở đầu mỗi đoạn. Giám khảo đọc topic sentence đầu tiên — nếu không rõ, cả đoạn bị đánh giá thấp.</p>
</blockquote>

<hr />

<h2>Từ vựng band 7+ thường dùng</h2>

<table>
<thead>
<tr><th>Thay vì dùng</th><th>Hãy dùng</th><th>Ví dụ</th></tr>
</thead>
<tbody>
<tr><td>very important</td><td>crucial / paramount</td><td>Education is <strong>paramount</strong> for development.</td></tr>
<tr><td>more and more</td><td>an increasing number of</td><td><strong>An increasing number of</strong> people work remotely.</td></tr>
<tr><td>good</td><td>beneficial / advantageous</td><td>This policy is <strong>beneficial</strong> for society.</td></tr>
<tr><td>bad</td><td>detrimental / adverse</td><td>Pollution has <strong>detrimental</strong> effects on health.</td></tr>
<tr><td>think</td><td>contend / maintain / assert</td><td>I <strong>contend</strong> that education should be free.</td></tr>
</tbody>
</table>

<h2>Lỗi ngữ pháp hay mắc phải</h2>

<ol>
<li><strong>Run-on sentences:</strong> Viết câu quá dài không có dấu chấm. Giữ mỗi câu 15-25 từ.</li>
<li><strong>Thiếu article:</strong> "Government should..." → "<strong>The</strong> government should..."</li>
<li><strong>Subject-verb agreement:</strong> "The number of students <strong>has</strong> increased" (không phải "have")</li>
<li><strong>Dùng "I think" quá nhiều:</strong> Thay bằng "It is argued that...", "From my perspective..."</li>
</ol>
    `.trim(),
  },

  {
    title: "Từ Vựng IELTS Theo Chủ Đề: 50 Từ Must-Know",
    slug: "tu-vung-ielts-theo-chu-de",
    content: `
<h2>Tại sao cần học từ vựng theo chủ đề?</h2>

<p>IELTS xoay quanh khoảng <strong>15-20 chủ đề chính</strong>. Nắm vững từ vựng theo từng chủ đề giúp bạn tự tin hơn trong cả 4 kỹ năng: Listening, Reading, Writing, và Speaking.</p>

<blockquote>
<p><strong>Nguyên tắc học từ vựng hiệu quả:</strong></p>
<ul>
<li>Học theo <strong>cụm từ</strong> (collocations), không học từ đơn lẻ</li>
<li>Mỗi từ cần biết: nghĩa, cách phát âm, cách dùng trong câu</li>
<li>Ôn lại sau 1 ngày, 3 ngày, 7 ngày, 30 ngày (spaced repetition)</li>
<li>Viết ít nhất 2 câu ví dụ cho mỗi từ mới</li>
</ul>
</blockquote>

<hr />

<h2>Chủ đề 1: Education</h2>

<ol>
<li><strong>Curriculum</strong> (n) — chương trình giảng dạy: "The national <em>curriculum</em> needs to be modernized."</li>
<li><strong>Academic performance</strong> — kết quả học tập: "Stress can negatively affect <em>academic performance</em>."</li>
<li><strong>Tertiary education</strong> — giáo dục đại học: "<em>Tertiary education</em> should be accessible to all."</li>
<li><strong>Vocational training</strong> — đào tạo nghề: "<em>Vocational training</em> provides practical skills."</li>
<li><strong>Literacy rate</strong> — tỷ lệ biết chữ: "The country's <em>literacy rate</em> has improved significantly."</li>
</ol>

<hr />

<h2>Chủ đề 2: Environment</h2>

<ol>
<li><strong>Carbon footprint</strong> — dấu chân carbon: "We should reduce our <em>carbon footprint</em>."</li>
<li><strong>Renewable energy</strong> — năng lượng tái tạo: "<em>Renewable energy</em> sources include solar and wind."</li>
<li><strong>Biodiversity</strong> — đa dạng sinh học: "Deforestation threatens <em>biodiversity</em>."</li>
<li><strong>Sustainability</strong> — tính bền vững: "<em>Sustainability</em> should be a priority for all governments."</li>
<li><strong>Ecological balance</strong> — cân bằng sinh thái: "Human activities disrupt the <em>ecological balance</em>."</li>
</ol>

<hr />

<h2>Chủ đề 3: Technology</h2>

<ol>
<li><strong>Artificial intelligence</strong> — trí tuệ nhân tạo: "<em>AI</em> is transforming many industries."</li>
<li><strong>Digital literacy</strong> — hiểu biết số: "<em>Digital literacy</em> is essential in the modern workplace."</li>
<li><strong>Automation</strong> — tự động hóa: "<em>Automation</em> may lead to job displacement."</li>
<li><strong>Cybersecurity</strong> — an ninh mạng: "<em>Cybersecurity</em> threats are increasing globally."</li>
<li><strong>Innovation</strong> — đổi mới sáng tạo: "Governments should invest in <em>innovation</em>."</li>
</ol>

<blockquote>
<p><strong>💡 Mẹo:</strong> Khi viết Writing Task 2, dùng ít nhất 3-4 từ vựng band 7+ cho mỗi đoạn thân bài. Không cần nhồi nhét quá nhiều — tự nhiên và chính xác quan trọng hơn.</p>
</blockquote>
    `.trim(),
  },
];

/* ═══════════════════════════════════════════
   MAIN SEED FUNCTION
   ═══════════════════════════════════════════ */

async function main() {
  console.log("🌱 Bắt đầu seed database...\n");

  // ── 1. Tạo tài khoản Staff ──
  const adminPassword = await bcrypt.hash("Admin@123", 10);
  const marketingPassword = await bcrypt.hash("Marketing@123", 10);
  const teacherPassword = await bcrypt.hash("Teacher@123", 10);
  const studentPassword = await bcrypt.hash("Student@123", 10);

  const admin = await prisma.user.upsert({
    where: { email: "admin@vestauni.vn" },
    update: {},
    create: {
      email: "admin@vestauni.vn",
      passwordHash: adminPassword,
      fullName: "Admin VESTA",
      role: "ADMIN",
      isActive: true,
    },
  });
  console.log("✅ Admin: admin@vestauni.vn / Admin@123");

  const marketing = await prisma.user.upsert({
    where: { email: "marketing@vestauni.vn" },
    update: {},
    create: {
      email: "marketing@vestauni.vn",
      passwordHash: marketingPassword,
      fullName: "Marketing VESTA",
      role: "CONTENT_CREATOR",
      isActive: true,
    },
  });
  console.log("✅ Marketing: marketing@vestauni.vn / Marketing@123");

  await prisma.user.upsert({
    where: { email: "teacher@vestauni.vn" },
    update: {},
    create: {
      email: "teacher@vestauni.vn",
      passwordHash: teacherPassword,
      fullName: "Teacher Hương Ly",
      role: "TEACHER",
      isActive: true,
    },
  });
  console.log("✅ Teacher: teacher@vestauni.vn / Teacher@123");

  // ── 2. Tạo tài khoản Student ──
  const students = [
    {
      fullName: "Nguyễn Văn An",
      studentCode: "VS20250001",
      phone: "0901000001",
    },
    {
      fullName: "Trần Thị Bình",
      studentCode: "VS20250002",
      phone: "0901000002",
    },
    {
      fullName: "Lê Hoàng Cường",
      studentCode: "VS20250003",
      phone: "0901000003",
    },
  ];

  for (const s of students) {
    const existing = await prisma.user.findFirst({
      where: { studentCode: s.studentCode },
    });
    if (!existing) {
      await prisma.user.create({
        data: {
          fullName: s.fullName,
          studentCode: s.studentCode,
          phone: s.phone,
          passwordHash: studentPassword,
          role: "STUDENT",
          isActive: true,
        },
      });
    }
    console.log(`✅ Student: ${s.studentCode} / Student@123 (${s.fullName})`);
  }

  // ── 3. Tạo bài viết blog ──
  console.log("\n📝 Tạo bài viết blog...");

  for (const post of SAMPLE_POSTS) {
    const existing = await prisma.post.findFirst({
      where: { slug: post.slug },
    });

    if (existing) {
      await prisma.post.update({
        where: { id: existing.id },
        data: {
          title: post.title,
          content: post.content,
          status: "PUBLISHED",
        },
      });
      console.log(`  ✅ Cập nhật: ${post.title}`);
    } else {
      await prisma.post.create({
        data: {
          title: post.title,
          slug: post.slug,
          content: post.content,
          status: "PUBLISHED",
          authorId: marketing.id,
        },
      });
      console.log(`  ✅ Tạo mới: ${post.title}`);
    }
  }

  // ── Done ──
  console.log(`
🎉 Seed hoàn tất!
───────────────────────────────────────────
Tài khoản đăng nhập:
  Admin:     admin@vestauni.vn / Admin@123
  Marketing: marketing@vestauni.vn / Marketing@123
  Teacher:   teacher@vestauni.vn / Teacher@123
  Student:   VS20250001 / Student@123
             VS20250002 / Student@123
             VS20250003 / Student@123

Blog: ${SAMPLE_POSTS.length} bài viết IELTS
───────────────────────────────────────────
  `);
}

main()
  .catch((e) => {
    console.error("❌ Seed lỗi:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
