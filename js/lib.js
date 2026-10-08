// ==================== 菜单栏交互 ====================
const menuItems = document.querySelectorAll('.menu-item');

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // 移除所有 active
        menuItems.forEach(i => i.classList.remove('active'));
        // 当前项 active
        item.classList.add('active');

        // 后续可在这里加：切换下方内容区域
        // 例如：根据 item.textContent 显示不同的内容
    });
});