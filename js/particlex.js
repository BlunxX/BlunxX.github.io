// Particlex Theme JS - Optimized
document.addEventListener('DOMContentLoaded', function() {
    // Highlight code blocks
    if (typeof hljs !== 'undefined') {
        hljs.highlightAll();
        
        // Add language labels
        var preBlocks = document.getElementsByTagName("pre");
        for (var i = 0; i < preBlocks.length; i++) {
            var codeBlock = preBlocks[i].firstElementChild;
            if (codeBlock && codeBlock.tagName === "CODE") {
                var language = codeBlock.className || "Text";
                var languageDiv = document.createElement("div");
                languageDiv.className = 'language';
                languageDiv.textContent = language;
                preBlocks[i].appendChild(languageDiv);
            }
        }
    }

    // Page load animation
    window.addEventListener('load', function() {
        var loading = document.getElementById('loading');
        if (loading) {
            loading.style.opacity = '0';
            setTimeout(function() {
                loading.style.display = 'none';
            }, 300);
        }
        
        // Show page content
        var layout = document.getElementById('layout');
        if (layout) {
            layout.classList.add('show_page');
        }
    });

    // Menu scroll behavior
    var lastScroll = 0;
    var menu = document.getElementById('menu');
    
    window.addEventListener('scroll', function() {
        var currentScroll = document.documentElement.scrollTop;
        
        if (menu) {
            if (currentScroll > lastScroll && currentScroll > 100) {
                menu.classList.add('hidden-menu');
                menu.classList.remove('show-menu');
            } else {
                menu.classList.remove('hidden-menu');
                menu.classList.add('show-menu');
            }
            
            // Add menu-color on home
            var homeHead = document.getElementById('home-head');
            if (homeHead && currentScroll < window.innerHeight) {
                menu.classList.add('menu-color');
            } else if (menu) {
                menu.classList.remove('menu-color');
            }
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle
    var menuIcon = document.querySelector('.menu-icon');
    if (menuIcon) {
        menuIcon.addEventListener('click', function() {
            var mobileMenu = document.querySelector('.menu-mobile');
            if (mobileMenu) {
                mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }

    // Home scroll button
    var homeArrow = document.querySelector('.home-head-arrow');
    if (homeArrow) {
        homeArrow.addEventListener('click', function() {
            window.scrollTo({
                top: window.innerHeight,
                behavior: 'smooth'
            });
        });
    }
});
