<?php

/*
 * This file is part of litalino/flarum-adblock.
 *
 * Copyright (c) 2023 Khatvongsong.
 * https://khatvongsong.vn
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Litalino\Adblock;

use Flarum\Extend;
use Flarum\Api\Event\Serializing;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/resources/less/admin.less'),
    new Extend\Locales(__DIR__.'/resources/locale'),
    
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlock-div', 'litalino-flarum-adlock.adBlock-div'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlock-img', 'litalino-flarum-adlock.adBlock-img'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlock-url', 'litalino-flarum-adlock.adBlock-url'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlock-alt', 'litalino-flarum-adlock.adBlock-alt'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlockAction', 'litalino-flarum-adlock.adBlockAction'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.supportUsTitle', 'litalino-flarum-adlock.supportUsTitle'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.supportUsMessage', 'litalino-flarum-adlock.supportUsMessage'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.supportRedirectUrl', 'litalino-flarum-adlock.supportRedirectUrl'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlockNotice-element', 'litalino-flarum-adlock.adBlockNotice-element'),
    (new Extend\Settings)
        ->serializeToForum('litalino-flarum-adlock.adBlockNotice-content', 'litalino-flarum-adlock.adBlockNotice-content'),
];
