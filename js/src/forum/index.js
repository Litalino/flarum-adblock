/*
 * This file is part of litalino/adblock.
 *
 * Copyright (c) 2023 Khatvongsong.
 * https://khatvongsong.vn
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import { extend } from 'flarum/extend';
import app from 'flarum/app';
import IndexPage from 'flarum/forum/components/IndexPage';

app.initializers.add('litalino/flarum-adblock', () => {

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
            const img = app.forum.attribute('baseUrl') + '/assets/extensions/litalino-adblock/banner.png';
            const url = app.forum.attribute('baseUrl');
            const alt = 'Ads';

            const adBlock_div = app.forum.attribute('litalino-adblock.adblock-div') ? app.forum.attribute('litalino-adblock.adblock-div') : 'content' ;
            const adBlock_url = app.forum.attribute('litalino-adblock.adblock-url') ? app.forum.attribute('litalino-adblock.adblock-url') : url ;
            const adBlock_img = app.forum.attribute('litalino-adblock.adblock-img') ? app.forum.attribute('litalino-adblock.adblock-img') : img ;
            const adBlock_alt = app.forum.attribute('litalino-adblock.adblock-alt') ? app.forum.attribute('litalino-adblock.adblock-alt') : alt ;

            var my_div = document.getElementById(''+ adBlock_div +'');
            //var my_div = document.querySelectorAll('' + adBlock_div + '');
            //var my_div = document.getElementsByClassName(''+ adBlock_div +'');
            //console.log( my_div );
            if (my_div) {

                var tag_div = document.createElement('div');
                tag_div.innerHTML = '<div class="samItem"> <a href="'+ adBlock_url +'" target="_blank" rel="nofollow"> <img src="'+ adBlock_img +'" title="'+ adBlock_alt +'" alt="'+ adBlock_alt +'"> </a> </div>';
                tag_div.className = 'samBannerUnit samAlignCenter';

                my_div.parentNode.insertBefore(tag_div, my_div);
                //$( tag_div ).insertBefore( my_div );

            }

            /////////////////////
            var text_notice = 'notice';
            var text_supportUsTitle = 'Please support us';
            var text_supportUsMessage = 'Please support us by disabling AdBlocker on our website.';
            var text_url = '';
            var text_element = "#content";
            var text_content_sup = 'Press × to turn off notifications and show content.';
            var text_content =
              "Hi. Can you please help us?\n\nI know the ads sometimes are too annoying and you want to use Adblock. But please support us by adding KhatVongSong to the whitelist. It will help us keep KhatVongSong free to use.\n\nThanks for your help!";

            var adBlock_notice_content_sup = app.forum.attribute('litalino-adblock.adblock-notice-content-sup') ? ' <sup><i>('+ app.forum.attribute('litalino-adblock.adblock-notice-content-sup') +')</i></sup>' : ' <sup><i>('+ text_content_sup +')</i></sup>';

            const adBlock_action = app.forum.attribute('litalino-adblock.adblock-action') ? app.forum.attribute('litalino-adblock.adblock-action') : text_notice ;
            const adBlock_supportUsTitle = app.forum.attribute('litalino-adblock.adblock-supportUsTitle') ? app.forum.attribute('litalino-adblock.adblock-supportUsTitle') : text_supportUsTitle ;
            const adBlock_supportUsMessage = app.forum.attribute('litalino-adblock.adblock-supportUsMessage') ? app.forum.attribute('litalino-adblock.adblock-supportUsMessage') :text_supportUsMessage ;
            const adBlock_supportRedirectUrl = app.forum.attribute('litalino-adblock.adblock-supportRedirectUrl') ? app.forum.attribute('litalino-adblock.adblock-supportRedirectUrl') : text_url ;
            const adBlock_notice_element = app.forum.attribute('litalino-adblock.adblock-notice-element') ? app.forum.attribute('litalino-adblock.adblock-notice-element') : text_element ;
            const adBlock_notice_content = app.forum.attribute('litalino-adblock.adblock-notice-content') ? app.forum.attribute('litalino-adblock.adblock-notice-content') + adBlock_notice_content_sup : text_content + adBlock_notice_content_sup ;
            //const adBlock_notice_method = app.forum.attribute('litalino-adblock.adblock-notice-method') ? app.forum.attribute('litalino-adblock.adblock-notice-method') : 'prepend' ;
            //const adBlock_notice_interval = app.forum.attribute('litalino-adblock.adblock-notice-interval') ? app.forum.attribute('litalino-adblock.adblock-notice-interval') : '1440' ;

            var adBlockAction = adBlock_action; //"notice";
            var supportUsTitle = adBlock_supportUsTitle; //"Please support us";
            var supportUsMessage = adBlock_supportUsMessage; //"Please support us by disabling AdBlocker on our website.";
            var supportRedirectUrl = adBlock_supportRedirectUrl; //"";
            var adBlockNotice = {
                element: adBlock_notice_element, //'#content',
                method: 'prepend',
                content: adBlock_notice_content, //"Hi. Can you please help us?\n\nI know the ads sometimes are too annoying and you want to use Adblock. But please support us by adding KhatVongSong to the whitelist. It will help us keep KhatVongSong free to use.\n\nThanks for your help! <sup><i>(Press × to turn off notifications and show content.)</i></sup>",
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
                        //console.log('adsBlocked : '+ adsBlocked );
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
