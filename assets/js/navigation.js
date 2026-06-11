document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;
    const currentPath = window.location.pathname;

    console.log('Current path:', currentPath);


    const allowedPaths = [
        '/posts/',
        '/guide/',
        // '/notes/intro/',
        '/ctf/',
        '/blog/'
    ];


    const excludedPaths = [
        '/posts/docker-compose-django-postgres-nginx/',
        '/guide/',   // index của /guide/
        '/ctf/',     // index của /ctf/
        '/ctf/hack/', 
    ];

    const isAllowed = allowedPaths.some(path => currentPath.startsWith(path));
    const isExcluded = excludedPaths.some(path => currentPath === path);

    if (!isAllowed || isExcluded) return;

    const container = document.createElement('div');
    container.className = 'clearfix toggle-nav-container';

    const toggleNavigationBtn = document.createElement('button');
    toggleNavigationBtn.id = 'toggle-navigation';
    toggleNavigationBtn.className = 'md-button';

    const toggleTocBtn = document.createElement('button');
    toggleTocBtn.id = 'toggle-toc';
    toggleTocBtn.className = 'md-button';

    container.appendChild(toggleNavigationBtn);
    container.appendChild(toggleTocBtn);

    const content = document.querySelector('.md-content__inner');
    if (content) content.prepend(container);

    function updateButtonText() {
        toggleNavigationBtn.textContent = body.classList.contains('hide-navigation') ? '>>> Show Navigation' : '<<< Hide Navigation';
        toggleTocBtn.textContent = body.classList.contains('hide-toc') ? 'Show TOC <<<' : 'Hide TOC >>>';
    }

    toggleNavigationBtn.addEventListener('click', function () {
        body.classList.toggle('hide-navigation');
        updateButtonText();
    });

    toggleTocBtn.addEventListener('click', function () {
        body.classList.toggle('hide-toc');
        updateButtonText();
    });

    updateButtonText();
});