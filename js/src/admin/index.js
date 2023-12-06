/*
 * This file is part of justoverclock/flarum-adblock.
 *
 * Copyright (c) 2021 Marco Colia.
 * https://flarum.it
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

import app from 'flarum/app';

/*function populateAdBlockAction() {
  let options = {};

  // add themes based on JS enum
  Object.keys(Themes).forEach((theme, i) => {
    if (theme === 'DEFAULT') return;

    options[i] = app.translator.trans(`fof-nightmode.admin.settings.modal.theme_${theme.toLowerCase()}`);
  });

  return options;
}*/

app.initializers.add('litalino/flarum-adlock', () => {
  app.extensionData
    .for('litalino-flarum-adlock')
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
      name: 'adBlock-img',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-img'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-img-help'),
      default: app.forum.attribute('baseUrl') + '/assets/extensions/litalino-flarum-adblock/bg.jpg',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-url',
      name: 'adBlock-url',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-url'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-url-help'),
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlock-alt',
      name: 'adBlock-alt',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlock-alt'),
      help: app.translator.trans('flarum-adblock.admin.adBlock-alt-help'),
    })
    .registerSetting({
      label: app.translator.trans('flarum-adblock.admin.adBlockAction'),
      help: app.translator.trans('flarum-adblock.admin.adBlockAction-help'),
      setting: 'litalino-flarum-adlock.adBlockAction',
      type: 'select',
      //options: populateAdBlockAction(),
      options: {
				'notice': app.translator.trans('flarum-adblock.admin.adBlockAction-notice'),
				'message': app.translator.trans('flarum-adblock.admin.adBlockAction-message'),
				'backup': app.translator.trans('flarum-adblock.admin.adBlockAction-backup'),
			},
      default: 'notice',
      //setting: 'litalino-flarum-adlock.adBlockAction',
      //name: 'adBlockAction',
      //type: 'text',
      //label: app.translator.trans('flarum-adblock.admin.adBlock-img'),
      //help: app.translator.trans('flarum-adblock.admin.adBlock-img-help'),
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportUsTitle',
      name: 'supportUsTitle',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportUsTitle'),
      help: app.translator.trans('flarum-adblock.admin.supportUsTitle-help'),
      default: 'Please support us',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportUsMessage',
      name: 'supportUsMessage',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportUsMessage'),
      help: app.translator.trans('flarum-adblock.admin.supportUsMessage-help'),
      default: 'Please support us by disabling AdBlocker on our website.',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.supportRedirectUrl',
      name: 'supportRedirectUrl',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.supportRedirectUrl'),
      help: app.translator.trans('flarum-adblock.admin.supportRedirectUrl-help'),
      default: '',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlockNotice-element',
      name: 'adBlockNotice-element',
      type: 'text',
      label: app.translator.trans('flarum-adblock.admin.adBlockNotice-element'),
      help: app.translator.trans('flarum-adblock.admin.adBlockNotice-element-help'),
      default: '#content',
    })
    .registerSetting({
      setting: 'litalino-flarum-adlock.adBlockNotice-content',
      name: 'adBlockNotice-content',
      type: 'textarea',
      rows: 6,
      label: app.translator.trans('flarum-adblock.admin.adBlockNotice-content'),
      help: app.translator.trans('flarum-adblock.admin.adBlockNotice-content-help'),
      placeholder: app.translator.trans('flarum-adblock.admin.adBlockNotice-content-placeholder'),
      default: '',
    });
});