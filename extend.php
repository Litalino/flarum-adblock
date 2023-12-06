<?php

/*
 * This file is part of justoverclock/custom-header.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
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
        ->serializeToForum('litalino-flarum-adlock.headerBackgroundImage', 'litalino-flarum-adlock.headerBackgroundImage')
        ->serializeToForum('adBlock-div', 'litalino-flarum-adlock.adBlock-div'),
    (new Extend\Settings)
        ->serializeToForum('adBlock-img', 'litalino-flarum-adlock.adBlock-img'),
    (new Extend\Settings)
        ->serializeToForum('adBlock-url', 'litalino-flarum-adlock.adBlock-url'),
    (new Extend\Settings)
        ->serializeToForum('adBlock-alt', 'litalino-flarum-adlock.adBlock-alt'),
    (new Extend\Settings)
        ->serializeToForum('twitterIcon', 'litalino-flarum-adlock.twitterIcon'),
    (new Extend\Settings)
        ->serializeToForum('supportUsTitle', 'litalino-flarum-adlock.supportUsTitle'),
    (new Extend\Settings)
        ->serializeToForum('supportUsMessage', 'litalino-flarum-adlock.supportUsMessage'),
    (new Extend\Settings)
        ->serializeToForum('supportRedirectUrl', 'litalino-flarum-adlock.supportRedirectUrl'),
    (new Extend\Settings)
        ->serializeToForum('adBlockNotice-element', 'litalino-flarum-adlock.adBlockNotice-element'),
    (new Extend\Settings)
        ->serializeToForum('adBlockNotice-method', 'litalino-flarum-adlock.adBlockNotice-method'),
    (new Extend\Settings)
        ->serializeToForum('adBlockNotice-content', 'litalino-flarum-adlock.adBlockNotice-content'),
];
