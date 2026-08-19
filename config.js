// =========================================================
// CẤU HÌNH TRANG WEB TỎ TÌNH - DỄ DÀNG CHỈNH SỬA
// =========================================================

const CONFIG = {
    // 1. THÔNG TIN CÁ NHÂN
    crushName: "Quỳnh Su", // Tên hoặc biệt danh của crush
    yourName: "Chàng Trai Của Cậu",  // Tên của bạn
    
    // 2. NHẠC NỀN (Bài hát: Nhắn Với Mây Trời - Nhạc trẻ lãng mạn)
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
            caption: "Cột Mốc 1 Tháng Đặc Biệt 🗓️✨",
            date: "Tròn 30 ngày trò chuyện",
            desc: "Tròn 1 tháng kể từ ngày 2 đứa mình bắt đầu những tin nhắn trò chuyện thân thiết đầu tiên..."
        },
        {
            url: "images/photo2.jpg",
            caption: "Những câu chuyện đêm muộn 🌙",
            date: "Bên nhau nhẹ nhàng",
            desc: "Ở bên Quỳnh Su, tớ luôn cảm nhận được sự ấm áp và bình yên nhất."
        },
        {
            url: "images/photo3.jpg",
            caption: "Chuyến đi & Khoảnh khắc đẹp 📸",
            date: "Kỷ niệm đáng nhớ",
            desc: "Bầu trời hôm đó rất đẹp, nhưng nụ cười của Quỳnh Su còn đẹp hơn."
        },
        {
            url: "images/photo4.jpg",
            caption: "Cùng nhau chia sẻ niềm vui 🍦",
            date: "Hành trình phía trước",
            desc: "Cảm ơn Quỳnh Su vì đã đến và làm 1 tháng qua trở nên thật rực rỡ!"
        }
    ],

    // 5. VIDEO CAPCUT / YOUTUBE (Tùy chọn)
    videoUrl: null, // Ví dụ: "images/kyniem.mp4" hoặc link youtube

    // 6. BỨC THƯ TÌNH (Gửi riêng cho Quỳnh Su kỷ niệm 1 tháng)
    loveLetter: [
        "Chào Quỳnh Su - cô gái tuyệt vời nhất trong lòng tớ... ✨",
        "Thế là tròn đúng 1 tháng trôi qua kể từ ngày hai đứa mình bắt đầu những tin nhắn trò chuyện thân thiết đầu tiên.",
        "30 ngày tuy không quá dài, nhưng đủ để mỗi ngày có Quỳnh Su xuất hiện đều trở nên ấm áp và tràn ngập niềm vui.",
        "Tớ yêu từng nụ cười, từng câu chuyện đêm muộn, và cả những khoảnh khắc giản dị nhất khi chúng mình ở bên nhau.",
        "Hôm nay, vào đúng cột mốc 1 tháng vô cùng đặc biệt này, tớ muốn dành cho Quỳnh Su một điều thật chân thành...",
        "Quỳnh Su làm bạn gái tớ nhé? ❤️"
    ],

    // 7. CÂU HỎI TỎ TÌNH & NÚT TƯƠNG TÁC
    proposal: {
        title: "Quỳnh Su làm bạn gái tớ nhé? ❤️",
        yesBtn: "Tớ đồng ý! 🥰",
        noBtn: "Không đời nào 😜",
        noDodgeMessages: [
            "Ơ kìa Quỳnh Su, đừng ấn nút này chứ! 🥺",
            "Nỡ lòng nào từ chối tớ sao Quỳnh Su? 💔",
            "Tròn 1 tháng rồi mà, bấm nút kia đi! 😜",
            "Bắt được tớ thì mới được từ chối nhá! 🏃‍♂️",
            "Thôi mà, đồng ý đi màaa~ 💖"
        ],
        successTitle: "Yayy! Tớ biết là Quỳnh Su sẽ đồng ý mà! 🥰🎉",
        successDesc: "Cảm ơn Quỳnh Su vì đã đến và làm tròn 1 tháng qua (và cả hành trình sau này) trở nên tuyệt vời nhất. Hãy đợi tớ một chút nhé... 💐✨",
        messengerLink: ""
    }
};
