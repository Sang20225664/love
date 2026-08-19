// =========================================================
// CẤU HÌNH TRANG WEB TỎ TÌNH - DỄ DÀNG CHỈNH SỬA
// =========================================================

const CONFIG = {
    // 1. THÔNG TIN CÁ NHÂN
    crushName: "Quỳnh Su", // Tên hoặc biệt danh của crush
    yourName: "Chàng Trai Của Cậu",  // Tên của bạn
    
    // 2. NHẠC NỀN (Bài hát: Nhắn Với Mây Trời - Nhạc trẻ lãng mạn)
    // Tải file mp3 bài "Nhắn với mây trời" bỏ vào thư mục music/nhan-voi-may-troi.mp3
    bgMusic: "music/nhan-voi-may-troi.mp3", 
    
    // 3. THÔNG BÁO TELEGRAM (Nhận tin nhắn tức thì về điện thoại khi Crush ấn "Đồng Ý")
    telegram: {
        enabled: true,
        botToken: "",  // Điền Bot Token từ @BotFather
        chatId: "",    // Điền Chat ID của bạn
        message: "🎉 TIN VUI CỰC HOT! Quỳnh Su vừa bấm ĐỒNG Ý làm bạn gái của cậu rồi! Mang hoa ra xuất hiện bất ngờ ngay thôi! 💐❤️✨"
    },

    // 4. DANH SÁCH ẢNH KỶ NIỆM (Đặt file ảnh vào thư mục images/)
    photos: [
        {
            url: "images/photo1.jpg",
            caption: "Lần đầu đi chơi cùng Quỳnh Su 🌸",
            date: "Kỷ niệm đáng nhớ",
            desc: "Nụ cười của cậu hôm đó làm tim tớ trật một nhịp..."
        },
        {
            url: "images/photo2.jpg",
            caption: "Những khoảnh khắc ngốc nghếch 🤪",
            date: "Bên nhau nhẹ nhàng",
            desc: "Ở bên Quỳnh Su, tớ luôn được là chính mình tự nhiên nhất."
        },
        {
            url: "images/photo3.jpg",
            caption: "Chuyến đi tuyệt vời 📸",
            date: "Kỷ niệm đẹp",
            desc: "Bầu trời hôm đó rất đẹp, nhưng Quỳnh Su còn đẹp hơn."
        },
        {
            url: "images/photo4.jpg",
            caption: "Cùng nhau ăn ngon 🍦",
            date: "Nụ cười ngọt ngào",
            desc: "Cảm ơn Quỳnh Su vì đã luôn đồng hành và sẻ chia cùng tớ."
        }
    ],

    // 5. VIDEO CAPCUT / YOUTUBE (Tùy chọn)
    videoUrl: null, // Ví dụ: "images/kyniem.mp4" hoặc link youtube

    // 6. BỨC THƯ TÌNH (Gửi riêng cho Quỳnh Su)
    loveLetter: [
        "Chào Quỳnh Su - cô gái tuyệt vời nhất trong lòng tớ... ✨",
        "Từ ngày có Quỳnh Su xuất hiện, mỗi ngày trôi qua với tớ đều trở nên ấm áp và tràn ngập niềm vui.",
        "Tớ yêu từng nụ cười, từng ánh mắt, yêu cả những khoảnh khắc giản dị nhất khi chúng mình ở bên nhau.",
        "Tớ đã suy nghĩ rất nhiều và muốn dành cho Quỳnh Su một điều thật đặc biệt...",
        "Hôm nay, tớ muốn hỏi cậu một câu quan trọng nhất..."
    ],

    // 7. CÂU HỎI TỎ TÌNH & NÚT TƯƠNG TÁC
    proposal: {
        title: "Quỳnh Su làm bạn gái tớ nhé? ❤️",
        yesBtn: "Tớ đồng ý! 🥰",
        noBtn: "Không đời nào 😜",
        noDodgeMessages: [
            "Ơ kìa Quỳnh Su, đừng ấn nút này chứ! 🥺",
            "Nỡ lòng nào từ chối tớ sao Quỳnh Su? 💔",
            "Nút này bị hỏng rồi, bấm nút kia đi! 😜",
            "Bắt được tớ thì mới được từ chối nhá! 🏃‍♂️",
            "Thôi mà, đồng ý đi màaa~ 💖"
        ],
        successTitle: "Yayy! Tớ biết là Quỳnh Su sẽ đồng ý mà! 🥰🎉",
        successDesc: "Cảm ơn Quỳnh Su vì đã đến và làm thế giới của tớ trở nên rực rỡ hơn. Hãy đợi tớ một chút nhé... 💐✨",
        messengerLink: ""
    }
};
