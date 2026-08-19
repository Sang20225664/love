/* =========================================================
   SCRIPT.JS - INTERACTIVE LOVE CONFESSION WEB APP
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 1. INJECT USER CONFIG DATA
    applyConfig();

    // 2. INITIALIZE BG PARTICLES
    createFloatingParticles();

    // 3. INITIALIZE MUSIC PLAYER
    initMusicPlayer();

    // 4. INITIALIZE GALLERY
    initGallery();

    // 5. INITIALIZE LOVE LETTER
    startLoveLetterTyping();

    // 6. INITIALIZE SCROLL ANIMATIONS & INTERACTIVITY
    initScrollObserver();

    // 7. INITIALIZE PROPOSAL BUTTONS (DODGING & ACCEPT)
    initProposalButtons();
});

// global state
let currentPhotoIndex = 0;
let bgAudio = null;
let isPlayingMusic = false;

// 1. Apply Configuration Values
function applyConfig() {
    // Update titles and text
    document.querySelectorAll(".crush-name").forEach(el => el.textContent = CONFIG.crushName);
    document.querySelectorAll(".your-name").forEach(el => el.textContent = CONFIG.yourName);
    
    document.getElementById("proposal-question").textContent = CONFIG.proposal.title;
    document.getElementById("btn-yes").textContent = CONFIG.proposal.yesBtn;
    document.getElementById("btn-no").textContent = CONFIG.proposal.noBtn;

    document.getElementById("modal-title").textContent = CONFIG.proposal.successTitle;
    document.getElementById("modal-desc").textContent = CONFIG.proposal.successDesc;

    const messengerBtn = document.getElementById("modal-messenger-btn");
    if (CONFIG.proposal.messengerLink) {
        messengerBtn.href = CONFIG.proposal.messengerLink;
    } else {
        messengerBtn.style.display = "none";
    }

    // Video check
    const videoSection = document.getElementById("video-section");
    if (CONFIG.videoUrl) {
        videoSection.style.display = "block";
        const videoWrapper = document.getElementById("video-wrapper");
        if (CONFIG.videoUrl.includes("youtube.com") || CONFIG.videoUrl.includes("youtu.be")) {
            videoWrapper.innerHTML = `<iframe src="${CONFIG.videoUrl}" allowfullscreen></iframe>`;
        } else {
            videoWrapper.innerHTML = `<video src="${CONFIG.videoUrl}" controls autoplay loop muted></video>`;
        }
    }
}

// 2. Envelope Screen & Music Trigger
function openEnvelope() {
    const envelopeScreen = document.getElementById("envelope-screen");
    envelopeScreen.classList.add("hidden");

    // Play Music
    playMusic();

    // Start Love Letter typing effect after envelope opens
    setTimeout(() => {
        startLoveLetterTyping();
    }, 1000);
}

// 3. Music Player System
function initMusicPlayer() {
    bgAudio = new Audio(CONFIG.bgMusic);
    bgAudio.loop = true;

    const musicWidget = document.getElementById("music-widget");
    musicWidget.addEventListener("click", () => {
        if (isPlayingMusic) {
            pauseMusic();
        } else {
            playMusic();
        }
    });
}

function playMusic() {
    if (!bgAudio) return;
    bgAudio.play().then(() => {
        isPlayingMusic = true;
        document.getElementById("music-widget").classList.add("playing");
    }).catch(err => {
        console.log("Autoplay blocked by browser until user interaction:", err);
    });
}

function pauseMusic() {
    if (!bgAudio) return;
    bgAudio.pause();
    isPlayingMusic = false;
    document.getElementById("music-widget").classList.remove("playing");
}

// 4. Floating Particles (Hearts & Stars)
function createFloatingParticles() {
    const container = document.getElementById("particles-container");
    const icons = ["💖", "✨", "🌸", "💕", "⭐", "💌"];

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.textContent = icons[Math.floor(Math.random() * icons.length)];
        particle.style.left = Math.random() * 100 + "vw";
        particle.style.animationDuration = (Math.random() * 5 + 6) + "s";
        particle.style.animationDelay = (Math.random() * 5) + "s";
        particle.style.fontSize = (Math.random() * 15 + 16) + "px";
        container.appendChild(particle);
    }
}

// 5. Polaroid Photo Slider (Auto-play after Unlock)
let autoSlideTimer = null;

function initGallery() {
    renderPhoto(0);

    document.getElementById("next-photo-btn").addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.photos.length;
        renderPhoto(currentPhotoIndex);
        startAutoSlide();
    });

    document.getElementById("prev-photo-btn").addEventListener("click", () => {
        currentPhotoIndex = (currentPhotoIndex - 1 + CONFIG.photos.length) % CONFIG.photos.length;
        renderPhoto(currentPhotoIndex);
        startAutoSlide();
    });
}

function unlockGallery() {
    const overlay = document.getElementById("gallery-blur-overlay");
    if (overlay) {
        overlay.classList.add("unlocked");
    }
    currentPhotoIndex = 0;
    renderPhoto(0);
    startAutoSlide();
}

function startAutoSlide() {
    stopAutoSlide();
    autoSlideTimer = setInterval(() => {
        currentPhotoIndex = (currentPhotoIndex + 1) % CONFIG.photos.length;
        renderPhoto(currentPhotoIndex);
    }, 3000);
}

function stopAutoSlide() {
    if (autoSlideTimer) {
        clearInterval(autoSlideTimer);
        autoSlideTimer = null;
    }
}

function renderPhoto(index) {
    const photo = CONFIG.photos[index];
    const card = document.getElementById("polaroid-card");
    
    // Animation reset
    card.style.transform = "scale(0.95) rotate(0deg)";
    card.style.opacity = "0.5";

    setTimeout(() => {
        const imgEl = document.getElementById("polaroid-img");
        imgEl.src = photo.url;
        imgEl.onerror = () => {
            // Placeholder SVG if image file is not found yet
            imgEl.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300" viewBox="0 0 300 300"><rect width="300" height="300" fill="%23ffd1dc"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="20" fill="%23ff6b8b">🌸 ${encodeURIComponent(photo.caption)}</text></svg>`;
        };

        const titleEl = document.getElementById("polaroid-title");
        const dateEl = document.getElementById("polaroid-date");
        const descEl = document.getElementById("polaroid-desc");

        titleEl.textContent = photo.caption || "";
        titleEl.style.display = photo.caption ? "block" : "none";

        dateEl.textContent = photo.date || "";
        dateEl.style.display = photo.date ? "block" : "none";

        descEl.textContent = photo.desc || "";
        descEl.style.display = photo.desc ? "block" : "none";

        card.style.transform = "scale(1) rotate(-2deg)";
        card.style.opacity = "1";

        updateDots(index);
    }, 200);
}

function updateDots(index) {
    const dotsContainer = document.getElementById("dots-indicator");
    dotsContainer.innerHTML = "";
    CONFIG.photos.forEach((_, i) => {
        const dot = document.createElement("div");
        dot.className = `dot ${i === index ? "active" : ""}`;
        dot.addEventListener("click", () => {
            currentPhotoIndex = i;
            renderPhoto(i);
            startAutoSlide(); // Reset 3s timer on manual dot click
        });
        dotsContainer.appendChild(dot);
    });
}

// 6. Handwritten Love Letter Display (Rendered in full immediately)
function startLoveLetterTyping() {
    const letterContainer = document.getElementById("love-letter-container");
    if (!letterContainer) return;
    letterContainer.innerHTML = "";

    CONFIG.loveLetter.forEach(text => {
        const p = document.createElement("div");
        p.className = "letter-paragraph";
        p.textContent = text;
        letterContainer.appendChild(p);
    });
}

// 7. Proposal Section: Smart Dodging "No" Button & Telegram Notification
let dodgeCount = 0;
function initProposalButtons() {
    const btnNo = document.getElementById("btn-no");
    const btnYes = document.getElementById("btn-yes");

    // Dodging behavior for "No" button
    const dodgeAction = (e) => {
        e.preventDefault();
        dodgeCount++;

        // Change text playfully
        const messages = CONFIG.proposal.noDodgeMessages;
        btnNo.textContent = messages[dodgeCount % messages.length];

        // Calculate random screen position safely
        const buttonWidth = btnNo.offsetWidth;
        const buttonHeight = btnNo.offsetHeight;

        const maxX = window.innerWidth - buttonWidth - 40;
        const maxY = window.innerHeight - buttonHeight - 40;

        const randomX = Math.max(20, Math.floor(Math.random() * maxX));
        const randomY = Math.max(20, Math.floor(Math.random() * maxY));

        btnNo.style.position = "fixed";
        btnNo.style.left = `${randomX}px`;
        btnNo.style.top = `${randomY}px`;
        btnNo.style.zIndex = "999";

        // Slightly grow "Yes" button each time "No" is dodged
        const currentScale = 1 + (dodgeCount * 0.05);
        btnYes.style.transform = `scale(${Math.min(currentScale, 1.4)})`;
    };

    btnNo.addEventListener("mouseover", dodgeAction);
    btnNo.addEventListener("touchstart", dodgeAction);

    // "Yes" button handler
    btnYes.addEventListener("click", () => {
        // Trigger Fireworks Confetti
        triggerConfetti();

        // Send Telegram Notification to your phone
        sendTelegramNotification();

        // Show Success Modal
        document.getElementById("success-modal").classList.add("active");
    });
}

// Telegram Instant Push Notification
function sendTelegramNotification() {
    if (!CONFIG.telegram.enabled || !CONFIG.telegram.botToken || !CONFIG.telegram.chatId) {
        console.log("Telegram notification is not configured yet.");
        return;
    }

    const messageText = CONFIG.telegram.message.replace("{crushName}", CONFIG.crushName);
    const url = `https://api.telegram.org/bot${CONFIG.telegram.botToken}/sendMessage`;

    fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            chat_id: CONFIG.telegram.chatId,
            text: messageText,
            parse_mode: "HTML"
        })
    })
    .then(res => res.json())
    .then(data => {
        console.log("Telegram notification sent successfully!", data);
    })
    .catch(err => {
        console.error("Failed to send Telegram notification:", err);
    });
}

// Canvas Confetti Fireworks Effect
function triggerConfetti() {
    if (typeof confetti === "function") {
        // Multi-stage fireworks bursts
        const count = 200;
        const defaults = { origin: { y: 0.7 } };

        function fire(particleRatio, opts) {
            confetti(Object.assign({}, defaults, opts, {
                particleCount: Math.floor(count * particleRatio)
            }));
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
}

// 8. Intersection Observer for Smooth Scroll Fade-In
function initScrollObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".section").forEach(sec => observer.observe(sec));
}
