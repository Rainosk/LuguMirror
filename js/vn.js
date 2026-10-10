// ==================== 章节切换背景 ====================
const vnBg = document.getElementById('vnBg');
const chapters = document.querySelectorAll('.vn-chapter');

chapters.forEach(chapter => {
    chapter.addEventListener('click', () => {
        // 更新 active 状态
        chapters.forEach(c => c.classList.remove('active'));
        chapter.classList.add('active');

        // 背景淡出 → 换图 → 淡入
        const newBg = chapter.dataset.bg;
        vnBg.style.opacity = '0';

        setTimeout(() => {
            vnBg.style.backgroundImage = `url('${newBg}')`;
            vnBg.style.opacity = '1';
        }, 300);
    });
});