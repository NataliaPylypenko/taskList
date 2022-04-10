
function registerToggleTableHandler() {

    const btnToggleStatus = document.querySelector('.btn-toggle');

    btnToggleStatus.addEventListener('click', e => {

        document.querySelectorAll('.table-main .note-item').forEach(task => {
            task.style.display = task.style.display === 'none' ? '' : 'none';
        })

    })
}

export default registerToggleTableHandler;