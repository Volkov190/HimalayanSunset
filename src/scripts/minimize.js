

const postMinButtons = document.querySelectorAll('.post__timer-minimize-icon');

function minimizePost() {

    let post = this;
    do {
        post = post.parentNode;
    } while (!post.classList.contains('post'));

    this.classList.toggle('post__timer-minimize-icon_closed');

    post.classList.toggle('post_minimal');
}

for (const button of postMinButtons) {
    button.addEventListener('click', minimizePost);
}