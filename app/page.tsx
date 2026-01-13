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

/* ✅ FIX LỖI: OptionList đúng cú pháp */
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

/* ✅ FIX LỖI: ResetButton tách riêng */
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
}
