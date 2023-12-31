/*
 * This file is part of litalino/adblock.
 *
 * Copyright (c) 2023 Khatvongsong.
 * https://khatvongsong.vn
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/admin/app';

app.initializers.add('litalino/flarum-adblock', () => {
  app.extensionData
    .for('litalino-adblock')
    .registerSetting({
      setting: 'litalino-adblock.adblock-div',
      name: 'litalino-adblock.adblock-div',
      label: app.translator.trans('adblock.admin.adblock-div'),
      type: 'select',
      options: {
        '#content': '#content',
        '.sideNavContainer': '.sideNavContainer',
				'.IndexPage-toolbar': '.IndexPage-toolbar',
			},
      default: 'content',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-img',
      name: 'litalino-adblock.adblock-img',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-img'),
      placeholder: app.translator.trans('adblock.admin.adblock-img-placeholder'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-url',
      name: 'litalino-adblock.adblock-url',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-url'),
      placeholder: app.translator.trans('adblock.admin.adblock-url-placeholder'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-alt',
      name: 'litalino-adblock.adblock-alt',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-alt'),
      placeholder: app.translator.trans('adblock.admin.adblock-alt-placeholder'),
      default: '',
    })
    /**
    .registerSetting({
      label: app.translator.trans('adblock.admin.adblock-action'),
      help: app.translator.trans('adblock.admin.adblock-action-help'),
      setting: 'litalino-adblock.adblock-action',
      type: 'select',
      options: {
				'notice': app.translator.trans('adblock.admin.adblock-action-notice'),
				//'message': app.translator.trans('adblock.admin.adblock-action-message'),
				//'backup': app.translator.trans('adblock.admin.adblock-action-backup'),
			},
      default: 'notice',
    })
    */
    .registerSetting({
      setting: 'litalino-adblock.adblock-supportUsTitle',
      name: 'litalino-adblock.adblock-supportUsTitle',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-supportUsTitle'),
      placeholder: app.translator.trans('adblock.admin.adblock-supportUsTitle-placeholder'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-supportUsMessage',
      name: 'litalino-adblock.adblock-supportUsMessage',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-supportUsMessage'),
      placeholder: app.translator.trans('adblock.admin.adblock-supportUsMessage-placeholder'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-supportRedirectUrl',
      name: 'litalino-adblock.adblock-supportRedirectUrl',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-supportRedirectUrl'),
      placeholder: app.translator.trans('adblock.admin.adblock-supportRedirectUrl-placeholder'),
      default: '',
    })
    /**
    .registerSetting({
      setting: 'litalino-adblock.adblock-notice-element',
      name: 'litalino-adblock.adblock-notice-element',
      label: app.translator.trans('adblock.admin.adblock-notice-element'),
      type: 'select',
      options: {
				'content': '#content',
			},
      default: 'content',
    })
    */
    .registerSetting({
      setting: 'litalino-adblock.adblock-notice-method',
      name: 'litalino-adblock.adblock-notice-method',
      label: app.translator.trans('adblock.admin.adblock-notice-method'),
      type: 'select',
      options: {
				'prepend': 'prepend',
				'append': 'append',
				'alert': 'alert',
			},
      default: 'alert',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-notice-content',
      name: 'litalino-adblock.adblock-notice-content',
      type: 'textarea',
      rows: 4,
      label: app.translator.trans('adblock.admin.adblock-notice-content'),
      help: app.translator.trans('adblock.admin.adblock-notice-content-help'),
      placeholder: app.translator.trans('adblock.admin.adblock-notice-content-placeholder'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-adblock.adblock-notice-content-sup',
      name: 'litalino-adblock.adblock-notice-content-sup',
      type: 'text',
      label: app.translator.trans('adblock.admin.adblock-notice-content-sup'),
      placeholder: app.translator.trans('adblock.admin.adblock-notice-content-sup-placeholder'),
      default: '',
    });
});