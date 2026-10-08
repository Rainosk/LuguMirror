// ==================== 背景音乐 ====================
const bgm = document.getElementById('bgm');
const musicToggle = document.getElementById('musicToggle');
let isMusicOn = true;

// 浏览器会拦截自动播放，首次点击页面后播放
function tryPlayMusic() {
    bgm.volume = 0.5;
    bgm.play().catch(() => {
        document.addEventListener('click', () => {
            if (isMusicOn) bgm.play();
        }, { once: true });
    });
}

tryPlayMusic();

// 音乐开关
musicToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const icon = musicToggle.querySelector('img');

    if (isMusicOn) {
        bgm.pause();
        isMusicOn = false;
        icon.src = 'images/icon-music-off.png';
    } else {
        bgm.play();
        isMusicOn = true;
        icon.src = 'images/icon-music-on.png';
    }
});

// ==================== 详情简介 ====================
const infoToggle = document.getElementById('infoToggle');
const infoPanel = document.getElementById('infoPanel');
const infoClose = document.getElementById('infoClose');

infoToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    infoPanel.classList.add('show');
});

infoClose.addEventListener('click', () => {
    infoPanel.classList.remove('show');
});

// 点击遮罩关闭
infoPanel.addEventListener('click', (e) => {
    if (e.target === infoPanel) {
        infoPanel.classList.remove('show');
    }
});