function esconderMenu(){
    const menuToggle = document.querySelector('.esconder');
    const sidebar = document.querySelector('.sidebar');
    menuToggle.classList.toggle('active');
    sidebar.classList.toggle('active');
}