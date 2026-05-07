// Image Lightbox - Optimized
document.addEventListener('DOMContentLoaded', function() {
    var imgShow = document.getElementById('img_show');
    var imgContent = document.getElementById('img_content');
    
    if (!imgShow || !imgContent) return;
    
    var imglist = document.querySelectorAll('.article .content img, .post img');
    
    function showLightbox(src) {
        imgContent.setAttribute('src', src);
        imgShow.style.display = 'flex';
        setTimeout(function() {
            imgShow.style.opacity = '1';
        }, 10);
        document.body.style.overflow = 'hidden';
    }
    
    function hideLightbox() {
        imgShow.style.opacity = '0';
        setTimeout(function() {
            imgShow.style.display = '';
            imgShow.style.opacity = '';
        }, 250);
        document.body.style.overflow = '';
    }
    
    // Click to show
    imglist.forEach(function(img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function() {
            showLightbox(this.getAttribute('src'));
        });
    });
    
    // Click overlay to close
    imgShow.addEventListener('click', function(e) {
        if (e.target === imgShow) {
            hideLightbox();
        }
    });
    
    // ESC to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && imgShow.style.display === 'flex') {
            hideLightbox();
        }
    });
    
    // Resize to close
    window.addEventListener('resize', function() {
        if (imgShow.style.display === 'flex') {
            hideLightbox();
        }
    });
});
