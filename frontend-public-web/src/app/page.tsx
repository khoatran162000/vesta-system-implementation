import React from 'react';
import Reveal from '@/components/Reveal';
import { COURSES, BOOKS } from '@/data/content';

export default function Home() {
  return (
    <>
      {/* ═══════════════  HEADER  ═══════════════ */}
      <div className="gold-line"></div>
      <header>
        <div className="header-top">
          <div className="brand">
            <div className="brand-icon"> 🔥 </div>
            <div className="brand-text">
              <h1>VESTA</h1>
              <p>Fast Track to High Scores · Since 2012</p>
            </div>
          </div>
          <div className="header-contact">
            <a href="tel:0838779988">
              <span className="contact-icon"> 📞 </span> 083 877 9988
            </a>
            <a href="https://www.vestaedu.online" target="_blank" rel="noreferrer">
              <span className="contact-icon"> 🌐 </span> vestaedu.online
            </a>
            <a href="mailto:vestaacademyvn@gmail.com">
              <span className="contact-icon"> ✉ </span> vestaacademyvn@gmail.com
            </a>
            <a href="https://facebook.com/VestaAcademyVN" target="_blank" rel="noreferrer">
              <span className="contact-icon">f</span> VestaAcademyVN
            </a>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#courses" className="active">Các Khóa Học</a></li>
            <li><a href="#tuition">Học Phí</a></li>
            <li><a href="#books">Sách &amp; Giáo Trình</a></li>
            <li><a href="https://goo.gl/xahbn4" target="_blank" rel="noreferrer">Đăng Ký Học</a></li>
            <li><a href="https://bit.ly/3H01IRL" target="_blank" rel="noreferrer">Thành Tích Học Sinh</a></li>
          </ul>
        </nav>
      </header>
      <div className="gold-line"></div>

      {/* ═══════════════  HERO  ═══════════════ */}
      <section className="hero">
        <h2>Lộ Trình <em>IELTS</em> Cốt Lõi</h2>
        <p className="hero-sub">Ba chặng đường - từ nền tảng đến thành thạo.<br />Học nhanh · Thi chắc · Cam kết đầu ra.</p>
        <div className="progress-track">
          <div className="p-node">
            <div className="p-dot"></div>
            <div className="p-line"></div>
            <div className="p-label">5.0+</div>
          </div>
          <div className="p-node">
            <div className="p-dot"></div>
            <div className="p-line"></div>
            <div className="p-label">6.0+</div>
          </div>
          <div className="p-node">
            <div className="p-dot"></div>
            <div className="p-label">7.0+</div>
          </div>
        </div>
      </section>

      {/* ═══════════════  COURSES  ═══════════════ */}
      <div className="container" id="courses">
        <Reveal className="section-title">
          <h3>Các Khóa Học</h3>
          <p>Học online và offline cùng lúc · Địa chỉ: Ngõ 60 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
        </Reveal>
        
        <div className="courses-grid">
          {COURSES.map((course, idx) => (
            /* Áp dụng Reveal cho từng thẻ với độ trễ nối tiếp nhau */
            <Reveal className="course-card" key={idx} delay={idx * 100}>
              <div className={`card-accent ${course.accentClass}`}></div>
              <div className="card-head">
                <h4>{course.title}</h4>
                <span className={`card-badge ${course.badgeClass}`}>{course.badge}</span>
              </div>
              <div className="card-desc">
                <ul>
                  {course.features.map((feature, fIdx) => (
                    <li key={fIdx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="card-meta">
                {course.meta}
              </div>
              {course.dates && (
                <div className="card-dates">
                  {course.dates}
                </div>
              )}
            </Reveal>
          ))}
        </div>
      </div>

      {/* ═══════════════  TUITION  ═══════════════ */}
      <div className="container" id="tuition">
        <Reveal className="tuition-section">
          <h3>Thông Tin Học Phí</h3>
          <div className="tuition-grid">
            <div className="tuition-item">
              <div className="t-icon"> 💳 </div>
              <p>Học phí đóng <strong>theo khóa, trước khai giảng 1 tuần</strong>. Bao gồm phí mở tài khoản hệ thống, tài liệu, link luyện tập hằng ngày, và các buổi học trực tiếp với giáo viên.</p>
            </div>
            <div className="tuition-item">
              <div className="t-icon"> 🎁 </div>
              <p>Học viên có thể <strong>học thử miễn phí buổi đầu</strong>. Do lượng đăng ký đông, học viên học thử cần dự tính trước việc sẽ bị lùi sang khóa sau.</p>
            </div>
            <div className="tuition-item">
              <div className="t-icon"> 🔄 </div>
              <p>Nghỉ sau khi học chính thức: <strong>hoàn 50% học phí</strong> (trừ phí học liệu). Nghỉ sau 5 buổi: <strong>không hoàn học phí</strong>. Bị buộc dừng: không tiếp cận kho học liệu, không hoàn phí.</p>
            </div>
            <div className="tuition-item tuition-highlight">
              <div className="t-icon"> 🏆 </div>
              <p><strong>Giảm 5%</strong> cho học sinh cũ. <strong>Học bổng 30%</strong> cho hoàn cảnh khó khăn (gửi thư xin bài test — cần đạt 90% để nhận học bổng).</p>
            </div>
          </div>
          <div className="bank-info">
            <p> ✦ Thanh toán qua <strong>chuyển khoản</strong> hoặc <strong>quẹt thẻ POS</strong> (phụ thu 0.7%).</p>
            <p className="account">VESTA UNI — TECHCOMBANK 123777789</p>
            <p>Nội dung CK: <strong>TÊN HỌC VIÊN · SĐT · TÊN KHÓA · CCCD</strong> người đóng phí.</p>
          </div>
        </Reveal>
      </div>

      {/* ═══════════════  BOOKS  ═══════════════ */}
      <div className="container" id="books">
        <Reveal className="section-title">
          <h3>Sách &amp; Giáo Trình</h3>
        </Reveal>
        
        <Reveal className="book-desc">
          <strong>SPARK tập 1 &amp; 2:</strong> Tuyển tập ý chi tiết cho hơn 600 đề IELTS - kèm ý chi tiết tới từng câu, từ chuyên ngành trình độ cao, và cấu trúc câu mẫu sẵn để triển khai bài luận mang tính tranh biện cao.
        </Reveal>

        <div className="books-grid">
          {BOOKS.map((book, idx) => (
             /* Áp dụng Reveal cho từng sách với độ trễ nối tiếp nhau */
            <Reveal 
              className="book-card" 
              key={idx} 
              delay={idx * 80}
              // Truyền thêm customStyle nếu có
              // Vì Component Reveal render ra thẻ div, ta truyền style qua nội dung con nếu cần
            >
              <div style={book.customStyle || {}} className="h-full flex flex-col justify-center items-center">
                <div className="book-icon"> {book.icon} </div>
                <h5>{book.title}</h5>
                <div className="book-price">
                  {book.price}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* ═══════════════  FOOTER  ═══════════════ */}
      <div className="gold-line"></div>
      <footer>
        <div className="footer-main">
          <div className="footer-brand">
            <h4>VESTA</h4>
            <p className="tagline">Học Nhanh · Thi Chắc · Since 2012</p>
            <p>Trung tâm luyện thi IELTS uy tín tại Hà Nội. Cam kết đầu ra, phương pháp giảng dạy hiệu quả, lộ trình cá nhân hoá cho từng học viên.</p>
          </div>
          <div className="footer-col">
            <h5>Liên Hệ</h5>
            <p> 📍 Ngõ 60 Hoàng Quốc Việt, Cầu Giấy, Hà Nội</p>
            <a href="tel:0838779988"> 📞 083 877 9988</a>
            <a href="mailto:vestaacademyvn@gmail.com"> ✉ vestaacademyvn@gmail.com</a>
            <a href="https://www.vestaedu.online" target="_blank" rel="noreferrer"> 🌐 vestaedu.online</a>
          </div>
          <div className="footer-col">
            <h5>Liên Kết</h5>
            <a href="https://facebook.com/VestaAcademyVN" target="_blank" rel="noreferrer">Facebook: VestaAcademyVN</a>
            <a href="https://goo.gl/xahbn4" target="_blank" rel="noreferrer"> 📋 Đăng ký học</a>
            <a href="https://bit.ly/3H01IRL" target="_blank" rel="noreferrer"> 🏅 Thành tích học sinh</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2012–2026 VESTA Academy. Học nhanh - Thi chắc.</p>
          <a className="cta-btn" href="https://goo.gl/xahbn4" target="_blank" rel="noreferrer"> ✦ Đăng Ký Ngay</a>
        </div>
      </footer>
    </>
  );
}