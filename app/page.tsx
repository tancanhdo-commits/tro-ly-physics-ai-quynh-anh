"use client";

import { useState } from "react";

/* ================== TYPES ================== */
type Lesson = { name: string };
type Chapter = { name: string; lessons: Lesson[] };

/* ================== DATA ================== */
const physicsData: Record<string, Chapter[]> = {
    "10": [
    {
      name: "Chương 1 – Mở đầu",
      lessons: [
        { name: "Bài 1 – Giới thiệu về Vật lí" },
        { name: "Bài 2 – Các đại lượng vật lí và đo lường" }
      ]
    },
    {
      name: "Chương 2 – Chuyển động",
      lessons: [
        { name: "Bài 3 – Chuyển động thẳng" },
        { name: "Bài 4 – Vận tốc và đồ thị chuyển động" },
        { name: "Bài 5 – Chuyển động biến đổi" }
      ]
    },
    {
      name: "Chương 3 – Lực",
      lessons: [
        { name: "Bài 6 – Lực và tổng hợp lực" },
        { name: "Bài 7 – Các định luật Newton" },
        { name: "Bài 8 – Lực ma sát" }
      ]
    },
    {
      name: "Chương 4 – Công và năng lượng",
      lessons: [
        { name: "Bài 9 – Công và công suất" },
        { name: "Bài 10 – Động năng" },
        { name: "Bài 11 – Thế năng" },
        { name: "Bài 12 – Cơ năng" }
      ]
    },
    {
      name: "Chương 5 – Động lượng",
      lessons: [
        { name: "Bài 13 – Động lượng" },
        { name: "Bài 14 – Định luật bảo toàn động lượng" }
      ]
    }
  ],

  /* ================== LỚP 11 ================== */
  "11": [
    {
      name: "Chương 1 – Dao động",
      lessons: [
        { name: "Bài 1 – Dao động điều hòa" },
        { name: "Bài 2 – Con lắc lò xo" },
        { name: "Bài 3 – Con lắc đơn" },
        { name: "Bài 4 – Năng lượng trong dao động điều hòa" },
        { name: "Bài 5 – Dao động tắt dần – Dao động cưỡng bức – Cộng hưởng" }
      ]
    },
    {
      name: "Chương 2 – Sóng",
      lessons: [
        { name: "Bài 6 – Sóng cơ" },
        { name: "Bài 7 – Các đặc trưng của sóng" },
        { name: "Bài 8 – Giao thoa sóng" },
        { name: "Bài 9 – Sóng dừng" }
      ]
    },
    {
      name: "Chương 3 – Điện trường",
      lessons: [
        { name: "Bài 10 – Điện tích. Điện trường" },
        { name: "Bài 11 – Công của lực điện. Hiệu điện thế" },
        { name: "Bài 12 – Tụ điện" }
      ]
    },
    {
      name: "Chương 4 – Dòng điện không đổi",
      lessons: [
        { name: "Bài 13 – Dòng điện không đổi" },
        { name: "Bài 14 – Định luật Ôm" },
        { name: "Bài 15 – Ghép nguồn điện" }
      ]
    },
    {
      name: "Chương 5 – Từ trường và Cảm ứng điện từ",
      lessons: [
        { name: "Bài 16 – Từ trường" },
        { name: "Bài 17 – Lực từ" },
        { name: "Bài 18 – Cảm ứng điện từ" }
      ]
    }
  ],

  /* ================== LỚP 12 ================== */
  "12": [
    {
      name: "Chương 1 – Dao động cơ",
      lessons: [
        { name: "Bài 1 – Dao động điều hòa" },
        { name: "Bài 2 – Con lắc lò xo" },
        { name: "Bài 3 – Con lắc đơn" },
        { name: "Bài 4 – Năng lượng trong dao động điều hòa" },
        { name: "Bài 5 – Dao động tắt dần – Dao động cưỡng bức – Cộng hưởng" }
      ]
    },
    {
      name: "Chương 2 – Sóng cơ",
      lessons: [
        { name: "Bài 6 – Sóng cơ" },
        { name: "Bài 7 – Các đặc trưng của sóng" },
        { name: "Bài 8 – Giao thoa sóng" },
        { name: "Bài 9 – Sóng dừng" }
      ]
    },
    {
      name: "Chương 3 – Dòng điện xoay chiều",
      lessons: [
        { name: "Bài 10 – Dòng điện xoay chiều" },
        { name: "Bài 11 – Mạch điện xoay chiều RLC nối tiếp" },
        { name: "Bài 12 – Công suất điện xoay chiều" },
        { name: "Bài 13 – Máy biến áp – Truyền tải điện năng" }
      ]
    },
    {
      name: "Chương 4 – Sóng điện từ",
      lessons: [
        { name: "Bài 14 – Dao động điện từ" },
        { name: "Bài 15 – Sóng điện từ" },
        { name: "Bài 16 – Truyền thông bằng sóng điện từ" }
      ]
    },
    {
      name: "Chương 5 – Lượng tử ánh sáng",
      lessons: [
        { name: "Bài 17 – Hiện tượng quang điện" },
        { name: "Bài 18 – Thuyết lượng tử ánh sáng" },
        { name: "Bài 19 – Các loại quang phổ" },
        { name: "Bài 20 – Laser" }
      ]
    },
    {
      name: "Chương 6 – Hạt nhân nguyên tử",
      lessons: [
        { name: "Bài 21 – Cấu tạo hạt nhân" },
        { name: "Bài 22 – Năng lượng liên kết hạt nhân" },
        { name: "Bài 23 – Phản ứng hạt nhân" },
        { name: "Bài 24 – Phân hạch và nhiệt hạch" },
        { name: "Bài 25 – Ứng dụng năng lượng hạt nhân" }
      ]
    }
  ]
};


/* ================== UI HELPERS ================== */
function Card({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      style={{
        marginBottom: 24,
        padding: 24,
        borderRadius: 20,
        background: "rgba(255,255,255,0.08)"
      }}
    >
      <h2 style={{ fontSize: 22, fontWeight: 700, color: "#80d8ff" }}>
        {title}
      </h2>
      <div style={{ marginTop: 16 }}>{children}</div>
    </div>
  );
}

/* ✅ OptionList: chỉ làm nhiệm vụ chọn */
function OptionList({
  items,
  onSelect
}: {
  items: string[];
  onSelect: (i: number) => void;
}) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {items.map((item, i) => (
        <button
          key={i}
          onClick={() => onSelect(i)}
          style={{
            padding: "14px 18px",
            borderRadius: 14,
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(0,0,0,0.25)",
            color: "#e3f2fd",
            fontSize: 18,
            textAlign: "left",
            cursor: "pointer"
          }}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

/* ✅ ResetButton: nút 🔁 đổi từng cấp */
function ResetButton({
  label,
  onClick
}: {
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        marginTop: 10,
        padding: "6px 14px",
        fontSize: 14,
        borderRadius: 999,
        border: "1px solid rgba(255,255,255,0.25)",
        background: "rgba(255,255,255,0.08)",
        color: "#ffcc80",
        cursor: "pointer"
      }}
    >
      🔁 {label}
    </button>
  );
}/* ================== PAGE ================== */
export default function Page() {
  const [grade, setGrade] = useState<number | null>(null);
  const [chapterIndex, setChapterIndex] = useState<number | null>(null);
  const [lessonIndex, setLessonIndex] = useState<number | null>(null);

  const [includeExam, setIncludeExam] = useState(true);
  const [examYears, setExamYears] = useState<1 | 3 | 5>(3);

  const chapters = grade ? physicsData[String(grade)] : [];
  const lessons =
    grade !== null && chapterIndex !== null
      ? chapters[chapterIndex]?.lessons ?? []
      : [];

  const progress =
    grade === null
      ? "25%"
      : chapterIndex === null
      ? "50%"
      : lessonIndex === null
      ? "75%"
      : "100%";

  const handleGenerate = async () => {
    if (grade === null || chapterIndex === null || lessonIndex === null) return;

    const examBlock = includeExam
      ? `
III. CÂU HỎI ĐÃ RA TRONG ĐỀ THI TN THPT (${examYears} NĂM GẦN ĐÂY)
- Phân loại Easy – Medium – Hard
- KHÔNG hiển thị tick, đáp án hoặc dấu hiệu nhận biết đáp án đúng
`
      : "";

    const prompt = `
Bạn là giáo viên Vật lý THPT, chuyên luyện thi TN THPT.

BÀI HỌC:
- Lớp ${grade}
- ${chapters[chapterIndex].name}
- ${lessons[lessonIndex].name}

YÊU CẦU:
I. Lý thuyết trọng tâm
II. Công thức & lỗi dễ sai
${examBlock}
IV. Trắc nghiệm 8–12 câu (không hiển thị đáp án)
V. Giải chi tiết câu khó (dành cho giáo viên)
`;

    await navigator.clipboard.writeText(prompt);
    window.open("https://www.canva.com/ai/code", "_blank");
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: 40,
        background:
          "radial-gradient(circle at top,#1a237e 0%,#0b0f2a 50%,#050816 100%)",
        fontFamily: "system-ui",
        color: "#e3f2fd"
      }}
    >
      {/* ANIMATION */}
      <style>
        {`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}
      </style>

      {/* HEADER */}
      <header style={{ textAlign: "center", marginBottom: 32 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: "50%",
              background:
                "radial-gradient(circle at 30% 30%, #81d4fa, #0d47a1)",
              animation: "spin 8s linear infinite",
              boxShadow: "0 0 20px rgba(129,212,250,0.8)"
            }}
          />
        </div>

        <h1 style={{ fontSize: 42, fontWeight: 800 }}>
          Quỳnh Anh&apos;s Physics Assistant
        </h1>

        <p style={{ fontSize: 20, fontStyle: "italic", color: "#4fc3f7" }}>
          “Vật lý không khó – quan trọng là hiểu đúng bản chất”
        </p>

        <p style={{ marginTop: 12, fontSize: 20, fontWeight: 700, color: "#ff5252" }}>
          Trường Đại học Phạm Văn Đồng
        </p>

        <p style={{ fontSize: 18, fontWeight: 600, color: "#ce93d8" }}>
          Sinh viên: Đỗ Lâm Quỳnh Anh
        </p>

        <p style={{ fontSize: 18, fontWeight: 700, color: "#ffd54f" }}>
          Zalo: 0984307629
        </p>
      </header>

      {/* PROGRESS */}
      <div
        style={{
          maxWidth: 860,
          margin: "0 auto 32px",
          height: 10,
          borderRadius: 8,
          background: "rgba(255,255,255,0.2)"
        }}
      >
        <div
          style={{
            width: progress,
            height: "100%",
            borderRadius: 8,
            background: "linear-gradient(90deg,#00e5ff,#00c853)",
            transition: "width 0.4s ease"
          }}
        />
      </div>

      <div
  style={{
    maxWidth: 860,
    margin: "0 auto",
    maxHeight: "70vh",
    overflowY: "auto",
    paddingRight: 8
  }}
>
<Card title="Bước 1 – Chọn lớp">
  <OptionList
    items={["Lớp 10", "Lớp 11", "Lớp 12"]}
    onSelect={(i) => {
      setGrade(i + 10);
      setChapterIndex(null);
      setLessonIndex(null);
    }}
  />

  {grade && (
    <>
      <p style={{ marginTop: 8, color: "#00e676", fontWeight: 600 }}>
        ✔ Đã chọn: Lớp {grade}
      </p>
      <ResetButton
        label="Đổi lớp"
        onClick={() => {
          setGrade(null);
          setChapterIndex(null);
          setLessonIndex(null);
        }}
      />
    </>
  )}
</Card>
{grade && (
  <Card title="Bước 2 – Chọn chương">
    <OptionList
      items={chapters.map((c) => c.name)}
      onSelect={(i) => {
        setChapterIndex(i);
        setLessonIndex(null);
      }}
    />

    {chapterIndex !== null && (
      <>
        <p style={{ marginTop: 8, color: "#00e676", fontWeight: 600 }}>
          ✔ Đã chọn: {chapters[chapterIndex].name}
        </p>
        <ResetButton
          label="Đổi chương"
          onClick={() => {
            setChapterIndex(null);
            setLessonIndex(null);
          }}
        />
      </>
    )}
  </Card>
)}
{chapterIndex !== null && (
  <Card title="Bước 3 – Chọn bài">
    <OptionList
      items={lessons.map((l) => l.name)}
      onSelect={setLessonIndex}
    />

    {lessonIndex !== null && (
      <>
        <p style={{ marginTop: 8, color: "#00e676", fontWeight: 600 }}>
          ✔ Đã chọn: {lessons[lessonIndex].name}
        </p>
        <ResetButton
          label="Đổi bài"
          onClick={() => setLessonIndex(null)}
        />
      </>
    )}
  </Card>
)}
        {lessonIndex !== null && (
          <Card title="Cấu hình đề">
            <label style={{ display: "flex", gap: 12 }}>
              <input
                type="checkbox"
                checked={includeExam}
                onChange={(e) => setIncludeExam(e.target.checked)}
              />
              Bao gồm câu hỏi TN THPT
            </label>

            {includeExam && (
              <select
                style={{ marginTop: 12 }}
                value={examYears}
                onChange={(e) =>
                  setExamYears(Number(e.target.value) as 1 | 3 | 5)
                }
              >
                <option value={1}>1 năm</option>
                <option value={3}>3 năm</option>
                <option value={5}>5 năm</option>
              </select>
            )}

            <button
              onClick={handleGenerate}
              style={{
                marginTop: 24,
                width: "100%",
                padding: 18,
                fontSize: 22,
                fontWeight: 800,
                borderRadius: 16,
                border: "none",
                background: "linear-gradient(90deg,#00e5ff,#00c853)"
              }}
            >
              🚀 Generate Worksheet
            </button>
          </Card>
        )}
      </div>
    </main>
  );
}
