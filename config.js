// =========================================================
// CẤU HÌNH TRANG WEB TỎ TÌNH - DỄ DÀNG CHỈNH SỬA
// =========================================================

const CONFIG = {
    // 1. THÔNG TIN CÁ NHÂN
    crushName: "Công Chúa", // Tên hoặc biệt danh của crush
    yourName: "Chàng Trai Của Cậu",  // Tên của bạn
    
    // 2. NHẠC NỀN
    // Có thể đổi thành file nhạc mp3 trong thư mục music/ (ví dụ: 'music/bai-hat-ky-niem.mp3')
    bgMusic: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=lofi-study-112191.mp3", 
    
    // 3. THÔNG BÁO TELEGRAM (Nhận tin nhắn tức thì về điện thoại khi Crush ấn "Đồng Ý")
    // Hướng dẫn lấy Token & Chat ID siêu nhanh trong README.md
    telegram: {
        enabled: true, // Đổi thành false nếu chưa muốn bật Telegram
        botToken: "",  // Điền Bot Token từ @BotFather (xem hướng dẫn trong README)
        chatId: "",    // Điền Chat ID của bạn (xem hướng dẫn trong README)
        message: "🎉 TIN VUI CỰC HOT! Crush vừa bấm ĐỒNG Ý làm bạn gái của cậu rồi! Mang hoa ra xuất hiện bất ngờ ngay thôi! 💐❤️✨"
    },

    // 4. DANH SÁCH ẢNH KỶ NIỆM (Đặt file ảnh vào thư mục images/)
    // Bạn có thể thêm/bớt bao nhiêu ảnh tùy thích
    photos: [
        {
            url: "images/photo1.jpg",
            caption: "Lần đầu đi chơi cùng nhau 🌸",
            date: "Kỷ niệm đáng nhớ",
            desc: "Nụ cười của cậu hôm đó làm tim tớ trật một nhịp..."
        },
        {
            url: "images/photo2.jpg",
            caption: "Những khoảnh khắc ngốc nghếch 🤪",
            date: "Bên nhau nhẹ nhàng",
            desc: "Ở bên cậu, tớ luôn được là chính mình tự nhiên nhất."
        },
        {
            url: "images/photo3.jpg",
            caption: "Chuyến đi tuyệt vời 📸",
            date: "Kỷ niệm đẹp",
            desc: "Bầu trời hôm đó rất đẹp, nhưng cậu còn đẹp hơn."
        },
        {
            url: "images/photo4.jpg",
            caption: "Cùng nhau ăn ngon 🍦",
            date: "Nụ cười ngọt ngào",
            desc: "Cảm ơn cậu vì đã luôn đồng hành và sẻ chia cùng tớ."
        }
    ],

    // 5. VIDEO CAPCUT / YOUTUBE (Tùy chọn)
    // Để null nếu không dùng video, hoặc điền đường dẫn video/link Youtube embed nếu có
    videoUrl: null, // Ví dụ: "https://www.youtube.com/embed/dQw4w9WgXcQ" hoặc "video/capcut.mp4"

    // 6. BỨC THƯ TÌNH (Viết những lời chân thành gửi crush)
    loveLetter: [
        "Chào cậu, cô gái tuyệt vời nhất trong lòng tớ... ✨",
        "Từ ngày có cậu xuất hiện, mỗi ngày trôi qua với tớ đều trở nên ấm áp và tràn ngập niềm vui.",
        "Tớ yêu từng nụ cười, từng ánh mắt, yêu cả những khoảnh khắc giản dị nhất khi chúng ta ở bên nhau.",
        "Tớ đã suy nghĩ rất nhiều và muốn dành cho cậu một điều đặc biệt...",
        "Hôm nay, tớ muốn hỏi cậu một câu quan trọng nhất..."
    ],

    // 7. CÂU HỎI TỎ TÌNH & NÚT TƯƠNG TÁC
    proposal: {
        title: "Cậu làm bạn gái tớ nhé? ❤️",
        yesBtn: "Tớ đồng ý! 🥰",
        noBtn: "Không đời nào 😜",
        // Các câu nói vui khi nút "Từ chối" né tránh
        noDodgeMessages: [
            "Ơ kìa, đừng ấn nút này chứ! 🥺",
            "Nỡ lòng nào từ chối tớ sao? 💔",
            "Nút này bị hỏng rồi, bấm nút kia đi! 😜",
            "Bắt được tớ thì mới được từ chối nhá! 🏃‍♂️",
            "Thôi mà, đồng ý đi màaa~ 💖"
        ],
        // Thông điệp ngọt ngào xuất hiện sau khi bấm Đồng Ý
        successTitle: "Yayy! Tớ biết là cậu sẽ đồng ý mà! 🥰🎉",
        successDesc: "Cảm ơn cậu vì đã đến và làm thế giới của tớ trở nên rực rỡ hơn. Hãy đợi tớ một chút nhé... 💐✨",
        messengerLink: "" // Nhập link Zalo/Messenger nếu muốn (ví dụ: "https://zalo.me/09xxxxxxx")
    }
};
