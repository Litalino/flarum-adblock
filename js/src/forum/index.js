/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/forum/components/IndexPage';
import SignUpModal from 'flarum/forum/components/SignUpModal';
import LogInModal from 'flarum/forum/components/LogInModal';

app.initializers.add('justoverclock/custom-header', () => {
    extend(IndexPage.prototype, 'oncreate', function (){
      const headerImage = document.getElementById('StreamsHero-content')
      const bgImageUrl = app.forum.attribute('justoverclock-custom-header.headerBackgroundImage') || app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
      headerImage.style.backgroundImage = "url('" +  bgImageUrl  + "')";
      headerImage.setAttribute('background-size', 'cover')
    })
    extend(IndexPage.prototype, 'view', function (vdom) {
        if (vdom.children && vdom.children.splice) {
            const user = app.session.user;
            const bg = app.forum.attribute('baseUrl') + '/assets/extensions/justoverclock-custom-header/bg.jpg';
            const LinkButtonOne = app.forum.attribute('LinkButtonOne');
            const LinkButtonTwo = app.forum.attribute('LinkButtonTwo');

            // definiamo il tasto di iscrizione
            const HeaderButtons = {
                view: function (vnode) {
                    if (!user)
                        return m(
                            'a',
                            {
                                className: 'Button StreamsSignUp js-signup',
                                onclick: () => app.modal.show(SignUpModal),
                                'data-component': 'hero',
                                'data-element': 'buttons',
                            },
                            app.translator.trans('custom-header.forum.signup')
                        );
                },
            };
            // definiamo il tasto login
            const LoginButton = {
                view: function (vnode) {
                    if (!user)
                        return m(
                            'a',
                            {
                                className: 'Button StreamsLogin js-login',
                                onclick: () => app.modal.show(LogInModal),
                            },
                            app.translator.trans('custom-header.forum.login')
                        );
                },
            };
            // inizio icone social
            const twitterIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('twitterIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-twitter' });
                    }
                },
            };
            const facebookIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('facebookIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-facebook-square' });
                    }
                },
            };
            const youtubeIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('youtubeIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-youtube' });
                    }
                },
            };
            const gitHubIcon = {
                view: function (vnode) {
                    if (app.forum.attribute('githubIcon') === '') {
                        return;
                    } else {
                        return m('i', { className: 'socialic fab fa-github-square' });
                    }
                },
            };
            //codice per l'header
            const insert = m(
                'div',
                { className: 'StreamsHero-image' },
                m('div', { className: 'StreamsHero-content', id: 'StreamsHero-content' }, [
                    m('div', { className: 'StreamsHero-buttonContainer' }, [
                        m('a', { className: 'js-nav', 'data-element': 'logo', target: '_blank' }, [
                            m('a',
                                { href: app.forum.attribute('twitterIcon'),
                                  title: app.translator.trans('custom-header.forum.twitter') },
                                m(twitterIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('facebookIcon'),
                                    title: app.translator.trans('custom-header.forum.facebook'),
                                },
                                m(facebookIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('youtubeIcon'),
                                    title: app.translator.trans('custom-header.forum.youtube'),
                                },
                                m(youtubeIcon)
                            ),
                            m('a',
                                {
                                    href: app.forum.attribute('githubIcon'),
                                    title: app.translator.trans('custom-header.forum.github'),
                                },
                                m(gitHubIcon)
                            ),
                        ]),
                        m(HeaderButtons),
                        m(LoginButton),
                    ]),
                    m('h2', { className: 'StreamsHero-header' }, app.forum.attribute('headerTitle')),
                    m('p', { className: 'StreamsHero-blurb' }, app.forum.attribute('headerTagline')),
                    m('a',
                        { href: LinkButtonOne, className: 'headerButtons' },
                        m('span', { className: 'buttontext' }),
                        app.forum.attribute('buttonText') || 'Button 1'
                    ),
                    m('a',
                        { href: LinkButtonTwo, className: 'headerButtons' },
                        m('span', { className: 'buttontext' }),
                        app.forum.attribute('button2Text') || 'Button 2'
                    ),
                ])
            );
            vdom.children.splice(0, 0, insert);
        }
    });

    extend(IndexPage.prototype, 'oninit', function () {

        var XF = window.XF || {};
        XF.samViewCountMethod = "impression";
        XF.samServerTime = Math.floor(Date.now() / 1000);
        XF.samItem = ".samItem";
        XF.samCodeUnit = ".samCodeUnit";
        XF.samBannerUnit = ".samBannerUnit";

        document.addEventListener("DOMContentLoaded", function() {
            //window.onload = function () {

            /////////////////////
            //const bg = app.forum.attribute('baseUrl') + '/assets/extensions/litalino-flarum-adblock/bg.jpg';
            const adBlock_div = app.forum.attribute('adBlock_div');
            const adBlock_url = app.forum.attribute('adBlock_url');
            const adBlock_img = app.forum.attribute('adBlock_img');

            //var my_div = document.getElementById(''+ adBlock_div +'');
            var my_div = document.querySelectorAll('' + adBlock_div + '');
            
            if (my_div) {

                var div = document.createElement('div');
                    div.innerHTML = '<div class="samItem"> <a href="'+ adBlock_url +'" target="_blank" rel="nofollow"> <img src="'+ adBlock_img +'" title="'+ adBlock_alt +'" alt="'+ adBlock_alt +'"> </a> </div>';
                    div.className = 'samBannerUnit samAlignCenter';

                my_elem.parentNode.insertBefore(div, my_div);
            }

            /////////////////////

            const adBlock_Action = app.forum.attribute('adBlockAction');
            const adBlock_supportUsTitle = app.forum.attribute('supportUsTitle');
            const adBlock_supportUsMessage = app.forum.attribute('supportUsMessage');
            const adBlock_supportRedirectUrl = app.forum.attribute('supportRedirectUrl');
            const adBlockNotice_element = app.forum.attribute('adBlockNotice-element');
            const adBlockNotice_content = app.forum.attribute('adBlockNotice-content');
            //const adBlockNotice_method = app.forum.attribute('adBlockNotice-method');
            //const adBlockNotice_interval = app.forum.attribute('adBlockNotice-interval');

            var adBlockAction = adBlock_Action;  //"notice";
            var supportUsTitle = adBlock_supportUsTitle; //"Please support us";
            var supportUsMessage = adBlock_supportUsMessage; //"Please support us by disabling AdBlocker on our website.";
            var supportRedirectUrl = adBlock_supportRedirectUrl; //"";
            var adBlockNotice = {
                element: adBlockNotice_element, //'#content',
                method: 'prepend',
                content: adBlockNotice_content, //"Hi. Can you please help us?\n\nI know the ads sometimes are too annoying and you want to use Adblock. But please support us by adding KhatVongSong to the whitelist. It will help us keep KhatVongSong free to use.\n\nThanks for your help! <sup><i>(Press × to turn off notifications and show content.)</i></sup>",
                interval: 1440,
                views: 1
            };
            function hasContentHeight(ad) {
                if (ad.find('[data-xf-init="sam-lazy"]').length) {
                    return true;
                }
                var adminActions = ad.find('.samAdminActions');
                //console.log( adminActions );
                var ignoreContent = ad.find('.samIgnoreContent');
                //console.log( ignoreContent );
                var adsenseUnit = ad.find('ins.adsbygoogle');
                //console.log( adsenseUnit );
                var googleTagUnit = ad.find('[id^="div-gpt-ad"]');
                //console.log( googleTagUnit );
                var ignoredHeight = 0;
                if (adminActions.length) {
                    ignoredHeight += adminActions.height();
                }
                if (ignoreContent.length) {
                    ignoredHeight += ignoreContent.height();
                }
                if (adsenseUnit.length) {
                    if (adsenseUnit[0].attributes['data-adsbygoogle-status'] === undefined) {
                        return false;
                    } else if (adsenseUnit.is(':hidden')) {
                        return true;
                    }
                } else if (googleTagUnit.length) {
                    if (googleTagUnit.css('min-height') == '1px') {
                        return false;
                    }
                }
                //console.log( ad.height());
                //console.log( ignoredHeight);
                return (ad.height() - ignoredHeight) > 0;
            }
            function initDetection() {
                XF.samCoreLoaded = true;
                $('<div class="banner_728x90 ad-banner" />').appendTo('body');
                var adUnits = $(XF.samCodeUnit + ' ' + XF.samItem + ':not(.samLazyLoading)' + ',' + XF.samBannerUnit + ' ' + XF.samItem + ':not(.samLazyLoading)');
                //var adUnits = $(XF.samBannerUnit);
                //var adUnits = $('.samBannerUnit');
                //console.log('adUnits: '+ adUnits.length);
                //console.log('adUnits: '+ adUnits.length);
                //if (adUnits.length && ($('.banner_728x90.ad-banner').is(':hidden') || XF.samCoreLoaded === undefined)) {
                if (adUnits.length && $('.banner_728x90.ad-banner').is(':hidden')) {
                //console.log('adBlockAction: '+ adBlockAction );
                    if (adBlockAction == 'backup' || adBlockAction == 'message') {
                        adUnits.each(function() {
                            if (!hasContentHeight($(this)) && $(this).find('> a img[data-src]').length == 0) {
                                if (adBlockAction == 'backup') {
                                    var backup = $(this).find('.samBackup');
                                    if (backup.length) {
                                        backup.find('img').each(function() {
                                            $(this).attr('src', $(this).data('src'));
                                        });
                                        backup.fadeIn();
                                    }
                                } else {
                                    $('<div class="samSupportUs" />').html(supportUsMessage).prependTo($(this));
                                }
                            }
                        });
                    } else {
                        var adsBlocked = 0;
                        //console.log('hasContentHeight: '+ hasContentHeight($(this)));
                        adUnits.each(function() {
                            if (!hasContentHeight($(this))) {
                                adsBlocked += 1;
                            };
                        });

                        //console.log('adsBlocked : '+ adsBlocked );
                        var canDisplayNotice = true;
                        var pageViewCount = 2;
                        //console.log('adBlockNotice.views: '+ adBlockNotice.views );
                        if (adBlockNotice.views && adBlockNotice.views > pageViewCount) {
                            canDisplayNotice = false;
                        }
                        console.log('adsBlocked : '+ adsBlocked );
                        //console.log(canDisplayNotice);
                                    
                        if (! adsBlocked && canDisplayNotice) {
                            if (adBlockAction == 'notice') {
                                //console.log( 'adBlockNotice.interval :  '+adBlockNotice.interval    );
                                //var dismissCookieTime = adBlockNotice.interval ? XF.Cookie.get('sam_notice_dismiss') : false;
                                var dismissCookieTime = adBlockNotice.interval ? read_adblock_Cookie('adblok_sam_notice_dismiss') : false;
                                //console.log( 'dismissCookieTime:  '+dismissCookieTime   );
                                //console.log( 'adBlockNotice.interval * 60:  '+ (adBlockNotice.interval * 60)  );
                                if (dismissCookieTime && (Math.floor(Date.now() / 1000) - dismissCookieTime <= (adBlockNotice.interval * 60)))

                                //console.log( 'adBlockNotice.interval: '+ adBlockNotice.interval  );
                                //console.log( 'Math.floor(Date.now() / 1000): ' + Math.floor(Date.now() / 1000) );
                                //var dismissCookieTime = adBlockNotice.interval ? readCookie('sam_notice_dismiss') : false;
                                //console.log( 'dismissCookieTime:  '+dismissCookieTime   );
                                //console.log( 'adBlockNotice.interval * 60:  '+ (adBlockNotice.interval * 60)  );
                                //console.log( 'Math.floor(Date.now() / 1000) - dismissCookieTime: '+ (Math.floor(Date.now() / 1000) - dismissCookieTime_ ) );
                                //console.log( Math.floor(Date.now() / 1000) - dismissCookieTime <= (adBlockNotice.interval * 60));
                                //if (dismissCookieTime)

                                {
                                    return;
                                }
                                var content = supportUsMessage;
                                        //console.log(content );
                                        //console.log(adBlockNotice.content);
                                if (adBlockNotice.content) {
                                    content = adBlockNotice.content;
                                }
                                var notice = $('<div id="samNotice" />');
                                notice.prepend('<a role="button" id="samDismiss">×</a>');
                                notice.append('<span>' + content + '</span>');
                                        //console.log(adBlockNotice.method );
                                if (adBlockNotice.method == 'prepend') {
                                    notice.prependTo(adBlockNotice.element);
                                } else {
                                    notice.appendTo(adBlockNotice.element);
                                }
                                notice.fadeIn('slow');
                                //XF.activate(notice);
                                $('body').addClass('samAdBlockDetected');

                            } else {
                                var pUrl = window.location.href;
                                var rUrl = supportRedirectUrl;
                                if (rUrl && pUrl.indexOf(rUrl) === -1) {
                                    window.location.href = rUrl;
                                    return;
                                }
                                var $overlay = XF.getOverlayHtml({
                                    title: supportUsTitle,
                                    dismissible: false,
                                    html: '<div class="blockMessage">' + supportUsMessage + '</div>'
                                });
                                var overlay = new XF.Overlay($overlay, {
                                    backdropClose: false,
                                    keyboard: false,
                                    escapeClose: false,
                                    className: 'samSupportUsOverlay'
                                });
                                overlay.show();
                                $('head').append('<style>::-webkit-scrollbar{display: none;}</style>');
                                $('.samSupportUsOverlay').css('background-color', 'black').fadeTo('slow', 0.95);

                            }
                        }
                    }
                }
            }
            $(document).on('click', '#samDismiss', function() {
                $(this).parent('#samNotice').fadeOut();
                $('body').removeClass('samAdBlockDetected');
                //XF.Cookie.set('sam_notice_dismiss', Math.floor(Date.now() / 1000));
                var value = Math.floor(Date.now() / 1000);
                //create_adblock_Cookie('adblok_sam_notice_dismiss', 'true', '30')
                create_adblock_Cookie('adblok_sam_notice_dismiss', value, null)

            });
            $(document).on('samInitDetection', function() {
                initDetection();                                 
            });
            $(document).trigger('samInitDetection');
            
            function create_adblock_Cookie(name, value, days) {
                if (days) {
                var date = new Date();
                date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
                var expires = "; expires=" + date.toGMTString();
                } else {
                    var expires = ''; 
                }
                //var expires = '';
                //document.cookie = name + '=' + value + expires + '; path=/';
                //document.cookie = name + "=" + value + expires + "sameSite=Session; Secure"; path=/";
                document.cookie = name + '=' + value + '; ' + expires + '; ' + 'sameSite=Session; Secure'; path='/';
            }
        
            function read_adblock_Cookie(name) {
                var nameEQ = name + "=";
                var ca = document.cookie.split(";");
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) === " ") c = c.substring(1, c.length);
                    if (c.indexOf(nameEQ) === 0)
                    return c.substring(nameEQ.length, c.length);
                }
                return null;
            }

        });

    });
});
extend(IndexPage.prototype, 'oncreate', function (vnode) {
    const welcomeHero = document.getElementsByClassName('Hero WelcomeHero');
    // nascondiamo la welcome hero nella pagina principale
    if (app.current.matches(IndexPage)) {
        for (var i = 0; i < welcomeHero.length; i++) {
            welcomeHero[i].style.display = 'none';
        }
    }
});
