document.addEventListener('DOMContentLoaded', function() {
    const textarea = document.querySelector('.comment-form textarea');
    const charCount = document.querySelector('.char-count');
    
    textarea.addEventListener('input', function() {
        const remaining = this.value.length;
        charCount.textContent = `${remaining}/50`;
    });
});