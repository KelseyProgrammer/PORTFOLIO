/*
    Dimension by HTML5 UP UP
    html5up.net | @ajlknlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)se)
*/

(function($) {

    var	$window = $(window),w),
        $body = $('body'),ody'),
        $wrapper = $('#wrapper'),per'),
        $header = $('#header'),der'),
        $footer = $('#footer'),ter'),
        $main = $('#main'),ain'),
        $main_articles = $main.children('article');cle');

    // Breakpoints.ts.
    breakpoints({({
        xlarge:   [ '1281px',  '1680px' ],x' ],
        large:    [ '981px',   '1280px' ],x' ],
        medium:   [ '737px',   '980px'  ],'  ],
        small:    [ '481px',   '736px'  ],'  ],
        xsmall:   [ '361px',   '480px'  ],'  ],
        xxsmall:  [ null,      '360px'  ]x'  ]
    }););

    // Play initial animations on page load.ad.
    $window.on('load', function() { {
        window.setTimeout(function() {n() {
            $body.removeClass('is-preload');eload');
        }, 100);100);
    }););

    // Fix: Flexbox min-height bug on IE.IE.
    if (browser.name == 'ie') { {

        var flexboxFixTimeoutId;utId;

        $window.on('resize.flexbox-fix', function() {n() {

            clearTimeout(flexboxFixTimeoutId);eoutId);

            flexboxFixTimeoutId = setTimeout(function() {tion() {

                if ($wrapper.prop('scrollHeight') > $window.height())w.height())
                    $wrapper.css('height', 'auto');ght', 'auto');
                else       else
                    $wrapper.css('height', '100vh');ht', '100vh');

            }, 250);}, 250);

        }).triggerHandler('resize.flexbox-fix');ix');

    } }

    // CLOSE BUTTON FUNCTIONALITY
    document.addEventListener('DOMContentLoaded', function () {ntLoaded', function () {
        // Add close buttons to all articles
        const articles = document.querySelectorAll('#main article');t.querySelectorAll('#main article');
        articles.forEach(article => {
            const closeBtn = document.createElement('div');eateElement('div');
            closeBtn.classList.add('close-btn');tn');
            closeBtn.innerHTML = '×'; // Close icon icon
            closeBtn.addEventListener('click', () => {
                window.location.href = '#'; // Return to homepage         window.location.href = '#'; // Return to homepage
            });
            article.appendChild(closeBtn);      article.appendChild(closeBtn);
        });   });
    });

    // Nav.
    var $nav = $header.children('nav'),    var $nav = $header.children('nav'),
        $nav_li = $nav.find('li');

    // Add "middle" alignment classes if we're dealing with an even number of items.    // Add "middle" alignment classes if we're dealing with an even number of items.
    if ($nav_li.length % 2 == 0) { {
        $nav.addClass('use-middle');
        $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');        $nav_li.eq(($nav_li.length / 2)).addClass('is-middle');
    }}

    // Main.in.
    var	delay = 325,5,
        locked = false;alse;

    // Methods.s.
    $main._show = function(id, initial) {{

        var $article = $main_articles.filter('#' + id);id);

        // No such article? Bail.ail.
        if ($article.length == 0) 0)
            return;eturn;

        // Handle lock.ock.

        // Already locked? Speed through "show" steps w/o delays.ys.
        if (locked || (typeof initial != 'undefined' && initial === true)) { {

            // Mark as switching.hing.
            $body.addClass('is-switching');g');

            // Mark as visible.ible.
            $body.addClass('is-article-visible');e');

            // Deactivate all articles (just in case one's already active).ive).
            $main_articles.removeClass('active');e');

            // Hide header, footer.oter.
            $header.hide();e();
            $footer.hide();e();

            // Show main, article.icle.
            $main.show();w();
            $article.show();w();

            // Activate article.icle.
            $article.addClass('active');e');

            // Unlock.lock.
            locked = false;lse;

            // Unmark as switching.hing.
            setTimeout(function() {() {
                $body.removeClass('is-switching');hing');
            }, (initial ? 1000 : 0));0));

            return;turn;

        } }

        // Lock.ck.
        locked = true;e;

        // Toggle button functionality      // Toggle button functionality
        document.getElementById('toggle-projects').addEventListener('click', function () {       document.getElementById('toggle-projects').addEventListener('click', function () {
            const projectsSection = document.getElementById('projects');
            if (projectsSection.style.display === 'none' || projectsSection.style.display === '') {sSection.style.display === '') {
                projectsSection.style.display = 'block'; // Show the section
            } else {
                projectsSection.style.display = 'none'; // Hide the section projectsSection.style.display = 'none'; // Hide the section
            }
        });});

        // Article already visible? Just swap articles.   // Article already visible? Just swap articles.
        if ($body.hasClass('is-article-visible')) {

            // Deactivate current article.            // Deactivate current article.
            var $currentArticle = $main_articles.filter('.active');ain_articles.filter('.active');

            $currentArticle.removeClass('active');            $currentArticle.removeClass('active');

            // Show article.            // Show article.
            setTimeout(function() {(function() {

                // Hide current article.                // Hide current article.
                $currentArticle.hide();hide();

                // Show article.                // Show article.
                $article.show();.show();

                // Activate article.                // Activate article.
                setTimeout(function() {unction() {

                    $article.addClass('active');                    $article.addClass('active');

                    // Window stuff.                    // Window stuff.
                    $windoww
                        .scrollTop(0)      .scrollTop(0)
                        .triggerHandler('resize.flexbox-fix');triggerHandler('resize.flexbox-fix');

                    // Unlock.                    // Unlock.
                    setTimeout(function() {setTimeout(function() {
                        locked = false;alse;
                    }, delay);y);

                }, 25);                }, 25);

            }, delay);            }, delay);

        }        }

        // Otherwise, handle as normal.        // Otherwise, handle as normal.
        else {

            // Mark as visible.            // Mark as visible.
            $body.addClass('is-article-visible');s('is-article-visible');

            // Show article.
            setTimeout(function() {            setTimeout(function() {

                // Hide header, footer., footer.
                $header.hide();                $header.hide();
                $footer.hide();

                // Show main, article.main, article.
                $main.show();                $main.show();
                $article.show(););

                // Activate article.te article.
                setTimeout(function() {                setTimeout(function() {

                    $article.addClass('active');Class('active');

                    // Window stuff.
                    $window                    $window
                        .scrollTop(0)crollTop(0)
                        .triggerHandler('resize.flexbox-fix');      .triggerHandler('resize.flexbox-fix');

                    // Unlock.
                    setTimeout(function() {                    setTimeout(function() {
                        locked = false;    locked = false;
                    }, delay);

                }, 25););

            }, delay);elay);

        }

    };

    $main._hide = function(addState) {main._hide = function(addState) {

        var $article = $main_articles.filter('.active');.filter('.active');

        // Article not visible? Bail.
        if (!$body.hasClass('is-article-visible'))        if (!$body.hasClass('is-article-visible'))
            return;

        // Add state?d state?
        if (typeof addState != 'undefined'        if (typeof addState != 'undefined'
        &&	addState === true)te === true)
            history.pushState(null, null, '#');l, '#');

        // Handle lock.

        // Already locked? Speed through "hide" steps w/o delays.locked? Speed through "hide" steps w/o delays.
        if (locked) {        if (locked) {

            // Mark as switching. as switching.
            $body.addClass('is-switching');            $body.addClass('is-switching');

            // Deactivate article.
            $article.removeClass('active');            $article.removeClass('active');

            // Hide article, main.
            $article.hide();            $article.hide();
            $main.hide();

            // Show footer, header.ooter, header.
            $footer.show();            $footer.show();
            $header.show();

            // Unmark as visible.s visible.
            $body.removeClass('is-article-visible');            $body.removeClass('is-article-visible');

            // Unlock.
            locked = false;            locked = false;

            // Unmark as switching.s switching.
            $body.removeClass('is-switching');            $body.removeClass('is-switching');

            // Window stuff.
            $window            $window
                .scrollTop(0)Top(0)
                .triggerHandler('resize.flexbox-fix'); .triggerHandler('resize.flexbox-fix');

            return;

        }

        // Lock. // Lock.
        locked = true;        locked = true;

        // Deactivate article.e article.
        $article.removeClass('active');        $article.removeClass('active');

        // Hide article.
        setTimeout(function() {        setTimeout(function() {

            // Hide article, main. main.
            $article.hide();            $article.hide();
            $main.hide();

            // Show footer, header.footer, header.
            $footer.show();            $footer.show();
            $header.show();

            // Unmark as visible.as visible.
            setTimeout(function() {            setTimeout(function() {

                $body.removeClass('is-article-visible');ass('is-article-visible');

                // Window stuff.
                $window                $window
                    .scrollTop(0)ollTop(0)
                    .triggerHandler('resize.flexbox-fix');    .triggerHandler('resize.flexbox-fix');

                // Unlock.
                setTimeout(function() {                setTimeout(function() {
                    locked = false;  locked = false;
                }, delay);

            }, 25);

        }, delay);ay);

    };

    // Articles.    // Articles.
    $main_articles.each(function() {main_articles.each(function() {

        var $this = $(this);his = $(this);

        // Close.        // Close.
        $('<div class="close">Close</div>')lose">Close</div>')
            .appendTo($this)            .appendTo($this)
            .on('click', function() {on('click', function() {
                location.hash = '';
            });

        // Prevent clicks from inside article from bubbling.from inside article from bubbling.
        $this.on('click', function(event) {this.on('click', function(event) {
            event.stopPropagation();            event.stopPropagation();
        });

    });

    // Events.    // Events.
    $body.on('click', function(event) {ody.on('click', function(event) {

        // Article visible? Hide.rticle visible? Hide.
        if ($body.hasClass('is-article-visible'))-visible'))
            $main._hide(true);            $main._hide(true);

    });

    $window.on('keyup', function(event) {    $window.on('keyup', function(event) {

        switch (event.keyCode) {        switch (event.keyCode) {

            case 27:            case 27:

                // Article visible? Hide.                // Article visible? Hide.
                if ($body.hasClass('is-article-visible'))   if ($body.hasClass('is-article-visible'))
                    $main._hide(true);                    $main._hide(true);

                break;

            default:            default:
                break;    break;

        }

    });    });

    $window.on('hashchange', function(event) {    $window.on('hashchange', function(event) {

        // Empty hash?        // Empty hash?
        if (location.hash == ''
        ||	location.hash == '#') {        ||	location.hash == '#') {

            // Prevent default.lt.
            event.preventDefault();t();
            event.stopPropagation();            event.stopPropagation();

            // Hide.
            $main._hide();

        }

        // Otherwise, check for a matching article.        // Otherwise, check for a matching article.
        else if ($main_articles.filter(location.hash).length > 0) {  else if ($main_articles.filter(location.hash).length > 0) {

            // Prevent default.
            event.preventDefault();
            event.stopPropagation();            event.stopPropagation();

            // Show article.
            $main._show(location.hash.substr(1));n.hash.substr(1));

        }

    });    });

    // close button    // close button
    document.addEventListener('DOMContentLoaded', function() {cument.addEventListener('DOMContentLoaded', function() {
        // Add event listeners to all close buttonsnt listeners to all close buttons
        document.querySelectorAll('.close-btn').forEach(function(button) {ion(button) {
            button.addEventListener('click', function() {nction() {
                // Hide the article when the close button is clicked
                this.closest('article').style.display = 'none';lay = 'none';
            });
        });
    });

    // This prevents the page from scrolling back to the top on a hashchange. This prevents the page from scrolling back to the top on a hashchange.
    if ('scrollRestoration' in history)  if ('scrollRestoration' in history)
        history.scrollRestoration = 'manual';
    else {

        var	oldScrollPos = 0,ar	oldScrollPos = 0,
            scrollPos = 0,            scrollPos = 0,
            $htmlbody = $('html,body');('html,body');

        $window
            .on('scroll', function() {            .on('scroll', function() {

                oldScrollPos = scrollPos;scrollPos;
                scrollPos = $htmlbody.scrollTop();                scrollPos = $htmlbody.scrollTop();

            })
            .on('hashchange', function() {            .on('hashchange', function() {
                $window.scrollTop(oldScrollPos);         $window.scrollTop(oldScrollPos);
            });

    }

    // Initialize.// Initialize.

    // Hide main, articles., articles.
    $main.hide();    $main.hide();
    $main_articles.hide();

    // Initial article.
    if (location.hash != ''    if (location.hash != ''
    &&	location.hash != '#')= '#')
        $window.on('load', function() {function() {
            $main._show(location.hash.substr(1), true);tion.hash.substr(1), true);
        });

})(jQuery);