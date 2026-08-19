# 💖 TRANG WEB TỎ TÌNH LÃNG MẠN (LOVE CONFESSION WEB APP)

Chào bạn! Trang web tỏ tình này đã được thiết kế hoàn chỉnh, tối ưu 100% cho điện thoại (khi crush quét mã QR) và máy tính.

---

## 📁 Cấu trúc thư mục dự án

```text
love-confession/
├── index.html          # File giao diện chính của trang web
├── config.js           # FILE CẤU HÌNH (Chỉnh sửa tên, ảnh, câu chữ, Telegram Bot)
├── styles.css          # File hiệu ứng, khung Polaroid, màu sắc hồng lãng mạn
├── script.js           # Code tương tác: mở thư, phát nhạc, né nút Từ chối, gửi Telegram
├── images/             # Thư mục chứa ảnh kỷ niệm của bạn và crush
└── music/              # Thư mục chứa bài hát kỷ niệm (.mp3)
```

---

## 🚀 1. Xem trước web ngay trên máy tính
Bạn chỉ cần **click đúp vào file `index.html`** trên máy tính của bạn để mở trang web bằng trình duyệt (Chrome, Edge, Firefox) và xem trước toàn bộ trải nghiệm mượt mà!

---

## 🖼️ 2. Thêm ảnh & Thay đổi lời chúc (Trong file `config.js`)

Mở file [`config.js`](file:///C:/Users/PC/.gemini/antigravity/scratch/love-confession/config.js) để chỉnh sửa cực đơn giản:

1. **Thêm ảnh chung của 2 bạn:**
   - Copy các bức ảnh của 2 bạn vào thư mục `images/` (đặt tên ví dụ: `photo1.jpg`, `photo2.jpg`, ...).
   - Trong `config.js`, cập nhật đường dẫn và lời nhắn từng tấm ảnh:
     ```javascript
     photos: [
         {
             url: "images/photo1.jpg",
             caption: "Lần đầu đi chơi cùng nhau 🌸",
             date: "15/10/2023",
             desc: "Nụ cười của cậu hôm đó làm tim tớ trật một nhịp..."
         },
         // Thêm bao nhiêu ảnh tùy thích!
     ]
     ```

2. **Chỉnh sửa tên & Thư tình:**
   - Đổi `crushName` thành tên/biệt danh của crush (ví dụ: "Bé Heo", "Công Chúa").
   - Viết lại các dòng thư tình trong mảng `loveLetter`.

---

## ⚡ 3. Hướng dẫn bật thông báo Telegram về điện thoại (Ting Ting khi bấm "Đồng Ý")

Chỉ mất **1 phút** để bạn nhận được thông báo "Ting ting" vào điện thoại ngay khi crush bấm nút **"Đồng ý"**:

### **Bước 1: Tạo Bot Telegram**
1. Mở ứng dụng **Telegram** trên điện thoại, tìm kiếm `@BotFather`.
2. Gửi tin nhắn `/newbot`.
3. Nhập tên cho Bot (ví dụ: `LoveNotifierBot`).
4. Nhập Username cho Bot (phải kết thúc bằng chữ `bot`, ví dụ: `my_love_notifier_bot`).
5. `@BotFather` sẽ gửi lại bạn 1 mã **HTTP API Token** (dạng `123456789:ABCdefGhIJKlmNoPQ...`). ➡️ **Copy mã Token này.**

### **Bước 2: Lấy Chat ID điện thoại bạn**
1. Tìm kiếm bot `@userinfobot` trên Telegram.
2. Bấm `Start` / gửi tin nhắn bất kỳ. Bot sẽ trả về **Id** của bạn (dạng dãy số: `987654321`). ➡️ **Copy mã Chat ID này.**

### **Bước 3: Dán vào `config.js`**
Mở file `config.js` và điền Token & Chat ID vào:
```javascript
telegram: {
    enabled: true,
    botToken: "MÃ_TOKEN_CỦA_BẠN",
    chatId: "MÃ_CHAT_ID_CỦA_BẠN",
    message: "🎉 TIN VUI CỰC HOT! {crushName} vừa bấm ĐỒNG Ý làm bạn gái cậu rồi! Mang hoa ra ngay thôi! 💐❤️✨"
}
```
*Bây giờ mỗi khi bấm "Đồng ý", điện thoại bạn sẽ tự động Ting Ting kêu ngay lập tức!*

---

## 🌐 4. Đẩy code lên GitHub & Deploy Vercel (Tạo link QR)

### **Bước 1: Tạo Repo trên GitHub**
1. Truy cập [github.com/new](https://github.com/new) và tạo 1 repository mới (ví dụ: `love-confession`).
2. Tải hoặc đẩy toàn bộ thư mục `love-confession` lên repo GitHub đó.

### **Bước 2: Kết nối Vercel**
1. Truy cập [vercel.com](https://vercel.com) và đăng nhập bằng tài khoản GitHub.
2. Bấm **"Add New..."** -> **"Project"** -> Chọn repository `love-confession` vừa tạo.
3. Bấm **"Deploy"**. Chỉ sau 5 giây, Vercel sẽ cấp cho bạn 1 đường link công khai (ví dụ: `https://love-confession.vercel.app`).

### **Bước 3: Tạo Mã QR**
1. Truy cập trang web tạo mã QR miễn phí như `me-qr.com` hoặc `qr-code-generator.com`.
2. Dán link Vercel vào để tạo mã QR.
3. In mã QR ra thiệp, ảnh hoặc tạo hình bất ngờ gửi cho crush!

---

Chúc bạn có một buổi tỏ tình thành công rực rỡ và tràn ngập hạnh phúc! 🌹💐✨
