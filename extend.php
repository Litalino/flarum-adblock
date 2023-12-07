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
        ->css(__DIR__.'/less/forum.less'),
    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),
    new Extend\Locales(__DIR__.'/locale'),
    
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-div', 'litalino-adblock.adblock-div'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-img', 'litalino-adblock.adblock-img'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-url', 'litalino-adblock.adblock-url'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-alt', 'litalino-adblock.adblock-alt'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-action', 'litalino-adblock.adblock-action'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-supportUsTitle', 'litalino-adblock.adblock-supportUsTitle'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-supportUsMessage', 'litalino-adblock.adblock-supportUsMessage'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-supportRedirectUrl', 'litalino-adblock.adblock-supportRedirectUrl'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-notice-element', 'litalino-adblock.adblock-notice-element'),
    (new Extend\Settings)
        ->serializeToForum('litalino-adblock.adblock-notice-content', 'litalino-adblock.adblock-notice-content'),
];
