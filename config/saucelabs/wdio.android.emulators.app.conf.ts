import config from './wdio.shared.sauce.conf';
const buildName = `WebdriverIO Native Demo app, Android Emulators: ${new Date().getTime()}`;
const appiumVersion = '1.22.3';
// ============
// Specs
// ============
config.specs = [
    './tests/specs/**/app*.spec.ts',
];

// ============
// Capabilities
// ============
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
// For configuring an Emulator please check
// https://wiki.saucelabs.com/display/DOCS/Platform+Configurator#/
config.capabilities = [
    // Android 12
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '12.0',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    }, // Android 11
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '11.0',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    },

    // Android 10
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '10.0',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    },

    // Android 9
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Android GoogleAPI Emulator',
        'appium:platformVersion': '9.0',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    },

    // Android 8.1
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel GoogleAPI Emulator',
        'appium:platformVersion': '8.1',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    },

    // Android 7.1
    {
        // The defaults you need to have in your config
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel GoogleAPI Emulator',
        'appium:platformVersion': '7.1',
        'appium:orientation': 'PORTRAIT',
        // The path to the app
        'appium:app': 'storage:filename=wdio-demo-app-android.apk',
        'appium:appWaitActivity': 'com.wdiodemoapp.MainActivity',
        // Read the reset strategies very well, they differ per platform, see
        // http://appium.io/docs/en/writing-running-appium/other/reset-strategies/
        'appium:noReset': true,
        'appium:newCommandTimeout': 240,
        // Always default the language to a language you prefer so you know the app language is always as expected
        'appium:language': 'en',
        'appium:locale': 'en',
        // Sauce Labs specific options
        'sauce:options':{
            // Group builds by build name
            build: buildName,
            // Provide the Appium version
            appiumVersion: appiumVersion
        },
    },
];

config.maxInstances = 25;

exports.config = config;
