/*
 * This file is part of litalino/flarum-adblock.
 *
 * Copyright (c) 2023 Khatvongsong.
 * https://khatvongsong.vn
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';

app.initializers.add('litalino/flarum-adlock', () => {
  app.extensionData
    .for('litalino-adlock')
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-div',
      name: 'litalino-flarum-adlock.adBlock-div',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-div'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-div-help'),
      default: '#content',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-img',
      name: 'litalino-flarum-adlock.adBlock-img',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-img'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-img-help'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-url',
      name: 'litalino-flarum-adlock.adBlock-url',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-url'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-url-help'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-alt',
      name: 'litalino-flarum-adlock.adBlock-alt',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-alt'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-alt-help'),
      default: '',
    })
    .registerSetting({
      label: app.translator.trans('flarum-adblock.admin.adBlockAction'),
      help: app.translator.trans('flarum-adblock.admin.adBlockAction-help'),
      setting: 'litalino-flarum-adlock.adBlockAction',
      type: 'select',
      options: {
				'notice': app.translator.trans('flarum-adblock.admin.adBlockAction-notice'),
				'message': app.translator.trans('flarum-adblock.admin.adBlockAction-message'),
				'backup': app.translator.trans('flarum-adblock.admin.adBlockAction-backup'),
			},
      default: 'notice',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportUsTitle',
      name: 'litalino-flarum-adlock.supportUsTitle',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportUsTitle'),
      help: app.translator.trans('flarum-adblock.admin.supportUsTitle-help'),
      default: app.translator.trans('flarum-adblock.admin.supportUsTitle'),
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportUsMessage',
      name: 'litalino-flarum-adlock.supportUsMessage',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportUsMessage'),
      help: app.translator.trans('flarum-adblock.admin.supportUsMessage-help'),
      default: app.translator.trans('flarum-adblock.admin.supportUsMessage'),
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportRedirectUrl',
      name: 'litalino-flarum-adlock.supportRedirectUrl',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportRedirectUrl'),
      help: app.translator.trans('flarum-adblock.admin.supportRedirectUrl-help'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlockNotice-element',
      name: 'litalino-flarum-adlock.adBlockNotice-element',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlockNotice-element'),
      help: app.translator.trans('flarum-adblock.admin.adBlockNotice-element-help'),
      default: '#content',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlockNotice-content',
      name: 'litalino-flarum-adlock.adBlockNotice-content',
      type: 'textarea',
      rows: 6,
      label: app.translator.trans('flarum-adblock.admin.adBlockNotice-content'),
      help: app.translator.trans('flarum-adblock.admin.adBlockNotice-content-help'),
      placeholder: app.translator.trans('flarum-adblock.admin.adBlockNotice-content-placeholder'),
      default: app.translator.trans('flarum-adblock.admin.adBlockNotice-content'),
    });
});
