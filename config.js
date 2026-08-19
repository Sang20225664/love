// =========================================================
// CẤU HÌNH TRANG WEB TỎ TÌNH - DỄ DÀNG CHỈNH SỬA
// =========================================================

const CONFIG = {
    // 1. THÔNG TIN CÁ NHÂN
    crushName: "Quỳnh Su", // Tên hoặc biệt danh của crush
    yourName: "Chàng Trai Của Cậu",  // Tên của bạn
    
    // 2. NHẠC NỀN (Bài hát: Em Đánh Rơi Người Yêu - Andiez ft. AMEE)
    // Tải file mp3 bài "Em Đánh Rơi Người Yêu" thả vào thư mục music/em-danh-roi-nguoi-yeu.mp3
    bgMusic: "music/em-danh-roi-nguoi-yeu.mp3", 
    
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
            caption: "Bức Ảnh Đầu Tiên Gửi Nhau 📸💕",
            date: "",
            desc: ""
        },
        {
            url: "images/photo2.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau 🌸",
            date: "",
            desc: ""
        },
        {
            url: "images/photo3.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau 🌊✨",
            date: "",
            desc: ""
        },
        {
            url: "images/photo4.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau 🌊💕",
            date: "",
            desc: ""
        },
        {
            url: "images/photo5.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau 💇‍♂️✨",
            date: "",
            desc: ""
        },
        {
            url: "images/photo6.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau 🍕✨",
            date: "",
            desc: ""
        },
        {
            url: "images/photo7.jpg",
            caption: "Những Khoảnh Khắc Bên Nhau ☕✨",
            date: "",
            desc: ""
        },
        {
            url: "images/photo8.jpg",
            caption: "Ảnh Photobooth Đầu Tiên Chụp Cùng Nhau 📸✨",
            date: "",
            desc: ""
        },
        {
            url: "images/photo9.jpg",
            caption: "Chúng Mình Đẹp Đôi Ghê 🥰✨",
            date: "",
            desc: ""
        }
    ],

    // 5. VIDEO CAPCUT / YOUTUBE (Tùy chọn)
    videoUrl: null,

    // 6. BỨC THƯ TÌNH (Gửi riêng cho Quỳnh Su tại Thủy Cung Lotte Tây Hồ)
    loveLetter: [
        "Chào Quỳnh Su - cô gái tuyệt vời nhất trong lòng tớ... ✨",
        "Thế là tròn 1 tháng kể từ lúc mình bắt đầu trò chuyện với nhau.",
        "1 tháng tuy không quá dài, nhưng đủ để mỗi ngày có Quỳnh Su xuất hiện đều trở nên thật đặc biệt và tràn ngập niềm vui.",
        "Quỳnh Su từng bảo chưa từng yêu ai thuộc cung Nước bao giờ...",
        "Hôm nay, hãy để nơi chúng mình hẹn hò lần đầu tiên - ngay tại Thủy cung Lotte Tây Hồ lung linh này, chứng kiến tình yêu bắt đầu nảy nở giữa hai đứa mình.",
        "Quỳnh Su làm bạn gái tớ nhé? ❤️"
    ],

    // 7. CÂU HỎI TỎ TÌNH & NÚT TƯƠNG TÁC
    proposal: {
        title: "Quỳnh Su làm bạn gái tớ nhé? ❤️",
        yesBtn: "Tớ đồng ý! 🥰",
        noBtn: "Không thể từ chối 😜",
        noDodgeMessages: [
            "Ơ kìa Quỳnh Su, đừng ấn nút này chứ! 🥺",
            "Nỡ lòng nào từ chối tớ sao Quỳnh Su? 💔",
            "Tròn 1 tháng rồi mà, bấm nút kia đi! 😜",
            "Bắt được tớ thì mới được từ chối nhá! 🏃‍♂️",
            "Thôi mà, đồng ý đi màaa~ 💖"
        ],
        successTitle: "Yayy! Tớ biết là Quỳnh Su sẽ đồng ý mà! 🥰🎉",
        successDesc: "Cảm ơn Quỳnh Su vì đã đồng ý! Ngay tại Thủy Cung Lotte Tây Hồ hôm nay, hãy để tớ nắm tay Quỳnh Su và bắt đầu hành trình tình yêu thật đẹp nhé... 💐✨ Hãy đợi tớ một chút!",
        messengerLink: ""
    }
};
