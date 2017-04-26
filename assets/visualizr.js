"use strict";



define('visualizr/adapters/application', ['exports', 'visualizr/config/environment', 'active-model-adapter', 'ember'], function (exports, _visualizrConfigEnvironment, _activeModelAdapter, _ember) {
  exports['default'] = _activeModelAdapter['default'].extend({
    host: _visualizrConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),

    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('visualizr/app', ['exports', 'ember', 'visualizr/resolver', 'ember-load-initializers', 'visualizr/config/environment'], function (exports, _ember, _visualizrResolver, _emberLoadInitializers, _visualizrConfigEnvironment) {

  var App = undefined;

  _ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = _ember['default'].Application.extend({
    modulePrefix: _visualizrConfigEnvironment['default'].modulePrefix,
    podModulePrefix: _visualizrConfigEnvironment['default'].podModulePrefix,
    Resolver: _visualizrResolver['default']
  });

  (0, _emberLoadInitializers['default'])(App, _visualizrConfigEnvironment['default'].modulePrefix);

  exports['default'] = App;
});
define('visualizr/components/bubble-chart', ['exports', 'ember-charts/components/bubble-chart'], function (exports, _emberChartsComponentsBubbleChart) {
  exports['default'] = _emberChartsComponentsBubbleChart['default'];
});
define('visualizr/components/change-password-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    passwords: {},

    init: function init() {
      this._super.apply(this, arguments);
      this.set('passwords', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('passwords'));
      },

      reset: function reset() {
        this.set('passwords', {});
      }
    }
  });
});
define('visualizr/components/email-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('visualizr/components/flash-message', ['exports', 'ember-cli-flash/components/flash-message'], function (exports, _emberCliFlashComponentsFlashMessage) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashComponentsFlashMessage['default'];
    }
  });
});
define('visualizr/components/hamburger-menu', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'button',
    classNames: ['navbar-toggle', 'collapsed'],
    attributeBindings: ['toggle:data-toggle', 'target:data-target', 'expanded:aria-expanded'],
    toggle: 'collapse',
    target: '#navigation',
    expanded: false
  });
});
define('visualizr/components/horizontal-bar-chart', ['exports', 'ember-charts/components/horizontal-bar-chart'], function (exports, _emberChartsComponentsHorizontalBarChart) {
  exports['default'] = _emberChartsComponentsHorizontalBarChart['default'];
});
define('visualizr/components/my-application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),

    user: _ember['default'].computed.alias('auth.credentials.email'),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),

    actions: {
      signOut: function signOut() {
        this.sendAction('signOut');
      }
    }
  });
});
define('visualizr/components/navbar-header', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['navbar-header']
  });
});
define('visualizr/components/password-confirmation-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('visualizr/components/password-input', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'div',
    classNames: ['form-group']
  });
});
define('visualizr/components/pie-chart', ['exports', 'ember-charts/components/pie-chart'], function (exports, _emberChartsComponentsPieChart) {
  exports['default'] = _emberChartsComponentsPieChart['default'];
});
define('visualizr/components/scatter-chart', ['exports', 'ember-charts/components/scatter-chart'], function (exports, _emberChartsComponentsScatterChart) {
  exports['default'] = _emberChartsComponentsScatterChart['default'];
});
define('visualizr/components/sign-in-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('visualizr/components/sign-up-form', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    tagName: 'form',
    classNames: ['form-horizontal'],

    credentials: {},

    init: function init() {
      this._super.apply(this, arguments);
      this.set('credentials', {});
    },

    actions: {
      submit: function submit() {
        this.sendAction('submit', this.get('credentials'));
      },

      reset: function reset() {
        this.set('credentials', {});
      }
    }
  });
});
define('visualizr/components/stacked-vertical-bar-chart', ['exports', 'ember-charts/components/stacked-vertical-bar-chart'], function (exports, _emberChartsComponentsStackedVerticalBarChart) {
  exports['default'] = _emberChartsComponentsStackedVerticalBarChart['default'];
});
define('visualizr/components/time-series-chart', ['exports', 'ember-charts/components/time-series-chart'], function (exports, _emberChartsComponentsTimeSeriesChart) {
  exports['default'] = _emberChartsComponentsTimeSeriesChart['default'];
});
define('visualizr/components/vertical-bar-chart', ['exports', 'ember-charts/components/vertical-bar-chart'], function (exports, _emberChartsComponentsVerticalBarChart) {
  exports['default'] = _emberChartsComponentsVerticalBarChart['default'];
});
define('visualizr/components/visualizr-dataset', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    newViz: {
      color: ''
    },

    init: function init() {
      this._super.apply(this, arguments);
      this.set('newViz.color', '');
    },

    actions: {
      save: function save(model) {
        var data = this.get('newViz');
        console.log(model);
        this.sendAction('save', data, model);
        this.set('newViz.color', '');
      }
    }
  });
});
define('visualizr/components/visualizr-dataset/graph', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({});
});
define('visualizr/components/visualizr-dataset/summary', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Component.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated')
  });
});
define('visualizr/controllers/array', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('visualizr/controllers/object', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller;
});
define('visualizr/flash/object', ['exports', 'ember-cli-flash/flash/object'], function (exports, _emberCliFlashFlashObject) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashFlashObject['default'];
    }
  });
});
define('visualizr/helpers/app-version', ['exports', 'ember', 'visualizr/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _ember, _visualizrConfigEnvironment, _emberCliAppVersionUtilsRegexp) {
  exports.appVersion = appVersion;
  var version = _visualizrConfigEnvironment['default'].APP.version;

  function appVersion(_) {
    var hash = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

    if (hash.hideSha) {
      return version.match(_emberCliAppVersionUtilsRegexp.versionRegExp)[0];
    }

    if (hash.hideVersion) {
      return version.match(_emberCliAppVersionUtilsRegexp.shaRegExp)[0];
    }

    return version;
  }

  exports['default'] = _ember['default'].Helper.helper(appVersion);
});
define('visualizr/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _emberInflectorLibHelpersPluralize) {
  exports['default'] = _emberInflectorLibHelpersPluralize['default'];
});
define('visualizr/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _emberInflectorLibHelpersSingularize) {
  exports['default'] = _emberInflectorLibHelpersSingularize['default'];
});
define("visualizr/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelAdapterActiveModelSerializer) {
  exports["default"] = {
    name: 'active-model-adapter',
    initialize: function initialize() {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter["default"]);
      application.register('serializer:-active-model', _activeModelAdapterActiveModelSerializer["default"]);
    }
  };
});
define('visualizr/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'visualizr/config/environment'], function (exports, _emberCliAppVersionInitializerFactory, _visualizrConfigEnvironment) {
  var _config$APP = _visualizrConfigEnvironment['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;
  exports['default'] = {
    name: 'App Version',
    initialize: (0, _emberCliAppVersionInitializerFactory['default'])(name, version)
  };
});
define('visualizr/initializers/container-debug-adapter', ['exports', 'ember-resolver/container-debug-adapter'], function (exports, _emberResolverContainerDebugAdapter) {
  exports['default'] = {
    name: 'container-debug-adapter',

    initialize: function initialize() {
      var app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _emberResolverContainerDebugAdapter['default']);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
define('visualizr/initializers/data-adapter', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `data-adapter` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'data-adapter',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('visualizr/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data/-private/core'], function (exports, _emberDataSetupContainer, _emberDataPrivateCore) {

  /*
  
    This code initializes Ember-Data onto an Ember application.
  
    If an Ember.js developer defines a subclass of DS.Store on their application,
    as `App.StoreService` (or via a module system that resolves to `service:store`)
    this code will automatically instantiate it and make it available on the
    router.
  
    Additionally, after an application's controllers have been injected, they will
    each have the store made available to them.
  
    For example, imagine an Ember.js application with the following classes:
  
    App.StoreService = DS.Store.extend({
      adapter: 'custom'
    });
  
    App.PostsController = Ember.Controller.extend({
      // ...
    });
  
    When the application is initialized, `App.ApplicationStore` will automatically be
    instantiated, and the instance of `App.PostsController` will have its `store`
    property set to that instance.
  
    Note that this code will only be run if the `ember-application` package is
    loaded. If Ember Data is being used in an environment other than a
    typical application (e.g., node.js where only `ember-runtime` is available),
    this code will be ignored.
  */

  exports['default'] = {
    name: 'ember-data',
    initialize: _emberDataSetupContainer['default']
  };
});
define('visualizr/initializers/export-application-global', ['exports', 'ember', 'visualizr/config/environment'], function (exports, _ember, _visualizrConfigEnvironment) {
  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_visualizrConfigEnvironment['default'].exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _visualizrConfigEnvironment['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = _ember['default'].String.classify(_visualizrConfigEnvironment['default'].modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };
});
define('visualizr/initializers/flash-messages', ['exports', 'ember', 'visualizr/config/environment'], function (exports, _ember, _visualizrConfigEnvironment) {
  exports.initialize = initialize;
  var deprecate = _ember['default'].deprecate;

  var merge = _ember['default'].assign || _ember['default'].merge;
  var INJECTION_FACTORIES_DEPRECATION_MESSAGE = '[ember-cli-flash] Future versions of ember-cli-flash will no longer inject the service automatically. Instead, you should explicitly inject it into your Route, Controller or Component with `Ember.inject.service`.';
  var addonDefaults = {
    timeout: 3000,
    extendedTimeout: 0,
    priority: 100,
    sticky: false,
    showProgress: false,
    type: 'info',
    types: ['success', 'info', 'warning', 'danger', 'alert', 'secondary'],
    injectionFactories: ['route', 'controller', 'view', 'component'],
    preventDuplicates: false
  };

  function initialize() {
    var application = arguments[1] || arguments[0];

    var _ref = _visualizrConfigEnvironment['default'] || {};

    var flashMessageDefaults = _ref.flashMessageDefaults;

    var _ref2 = flashMessageDefaults || [];

    var injectionFactories = _ref2.injectionFactories;

    var options = merge(addonDefaults, flashMessageDefaults);
    var shouldShowDeprecation = !(injectionFactories && injectionFactories.length);

    application.register('config:flash-messages', options, { instantiate: false });
    application.inject('service:flash-messages', 'flashMessageDefaults', 'config:flash-messages');

    deprecate(INJECTION_FACTORIES_DEPRECATION_MESSAGE, shouldShowDeprecation, {
      id: 'ember-cli-flash.deprecate-injection-factories',
      until: '2.0.0'
    });

    options.injectionFactories.forEach(function (factory) {
      application.inject(factory, 'flashMessages', 'service:flash-messages');
    });
  }

  exports['default'] = {
    name: 'flash-messages',
    initialize: initialize
  };
});
define('visualizr/initializers/injectStore', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `injectStore` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'injectStore',
    before: 'store',
    initialize: function initialize() {}
  };
});
define('visualizr/initializers/local-storage-adapter', ['exports', 'ember-local-storage/initializers/local-storage-adapter'], function (exports, _emberLocalStorageInitializersLocalStorageAdapter) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter['default'];
    }
  });
  Object.defineProperty(exports, 'initialize', {
    enumerable: true,
    get: function get() {
      return _emberLocalStorageInitializersLocalStorageAdapter.initialize;
    }
  });
});
define('visualizr/initializers/store', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `store` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'store',
    after: 'ember-data',
    initialize: function initialize() {}
  };
});
define('visualizr/initializers/text-field', ['exports', 'ember'], function (exports, _ember) {
  exports.initialize = initialize;

  function initialize() {
    _ember['default'].TextField.reopen({
      classNames: ['form-control']
    });
  }

  exports['default'] = {
    name: 'text-field',
    initialize: initialize
  };
});
define('visualizr/initializers/transforms', ['exports', 'ember'], function (exports, _ember) {

  /*
    This initializer is here to keep backwards compatibility with code depending
    on the `transforms` initializer (before Ember Data was an addon).
  
    Should be removed for Ember Data 3.x
  */

  exports['default'] = {
    name: 'transforms',
    before: 'store',
    initialize: function initialize() {}
  };
});
define("visualizr/instance-initializers/ember-data", ["exports", "ember-data/-private/instance-initializers/initialize-store-service"], function (exports, _emberDataPrivateInstanceInitializersInitializeStoreService) {
  exports["default"] = {
    name: "ember-data",
    initialize: _emberDataPrivateInstanceInitializersInitializeStoreService["default"]
  };
});
define('visualizr/mixins/axis-titles', ['exports', 'ember-charts/mixins/axis-titles'], function (exports, _emberChartsMixinsAxisTitles) {
  exports['default'] = _emberChartsMixinsAxisTitles['default'];
});
define('visualizr/mixins/label-width', ['exports', 'ember-charts/mixins/label-width'], function (exports, _emberChartsMixinsLabelWidth) {
  exports['default'] = _emberChartsMixinsLabelWidth['default'];
});
define('visualizr/mixins/legend', ['exports', 'ember-charts/mixins/legend'], function (exports, _emberChartsMixinsLegend) {
  exports['default'] = _emberChartsMixinsLegend['default'];
});
define('visualizr/models/dataset', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    name: _emberData['default'].attr('string'),
    year: _emberData['default'].attr('number'),
    visualizations: _emberData['default'].hasMany('visualization'),
    zipcodeCount: _emberData['default'].attr(),

    saved: _ember['default'].computed('visualizations', function () {
      var visualizations = this.hasMany('visualizations');
      return visualizations.ids().length;
    }),

    formattedCount: _ember['default'].computed('zipcodeCount', function () {
      var _this = this;

      return Object.keys(this.get('zipcodeCount')).map(function (e) {
        return {
          value: _this.get('zipcodeCount')[e],
          label: e
        };
      });
    })
  });
});
define('visualizr/models/user', ['exports', 'ember-data', 'ember'], function (exports, _emberData, _ember) {
  exports['default'] = _emberData['default'].Model.extend({
    email: _emberData['default'].attr('string'),
    visualizations: _emberData['default'].hasMany('visualization'),

    saved: _ember['default'].computed('visualizations', function () {
      var visualizations = this.hasMany('visualizations');
      return visualizations.ids().length;
    })
  });
});
define('visualizr/models/visualization', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].Model.extend({
    user: _emberData['default'].belongsTo('user'),
    dataset: _emberData['default'].belongsTo('dataset'),
    color: _emberData['default'].attr('string'),
    editable: _emberData['default'].attr('boolean')
  });
});
define('visualizr/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  exports['default'] = _emberResolver['default'];
});
define('visualizr/router', ['exports', 'ember', 'visualizr/config/environment'], function (exports, _ember, _visualizrConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _visualizrConfigEnvironment['default'].locationType
  });

  Router.map(function () {
    this.route('sign-up');
    this.route('sign-in');
    this.route('change-password');
    this.route('users');
    this.route('datasets', function () {});
    this.route('dataset', { path: '/datasets/:dataset_id' }, function () {
      this.route('save');
    });
    this.route('visualizations', function () {});
    this.route('visualization', { path: '/visualizations/:visualization_id' }, function () {
      this.route('edit');
    });
    this.route('*wildcard');
  });

  exports['default'] = Router;
});
define('visualizr/routes/*wildcard', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('visualizr/routes/application', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signOut: function signOut() {
        var _this = this;

        this.get('auth').signOut().then(function () {
          return _this.get('store').unloadAll();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Are you sure you\'re signed-in?');
        });
      },

      error: function error(reason) {
        var unauthorized = reason.errors && reason.errors.some(function (error) {
          return error.status === '401';
        });

        if (unauthorized) {
          this.get('flashMessages').danger('You must be authenticated to access this page.');
          this.transitionTo('/sign-in');
        } else {
          this.get('flashMessages').danger('There was a problem. Please try again.');
        }

        return false;
      }
    }
  });
});
define('visualizr/routes/change-password', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      if (!this.get('isAuthenticated')) {
        this.transitionTo('sign-in');
        this.get('flashMessages').danger('Please sign in!');
      }
    },

    actions: {
      changePassword: function changePassword(passwords) {
        var _this = this;

        this.get('auth').changePassword(passwords).then(function () {
          passwords.previous = null;
          passwords.next = null;
        }).then(function () {
          return _this.get('auth').signOut();
        }).then(function () {
          return _this.transitionTo('sign-in');
        }).then(function () {
          _this.get('flashMessages').success('Successfully changed your password!');
        }).then(function () {
          _this.get('flashMessages').warning('You have been signed out.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('visualizr/routes/dataset', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    flashMessages: _ember['default'].inject.service(),

    model: function model(params) {
      if (this.get('isAuthenticated')) {
        return this.get('store').findRecord('dataset', params.dataset_id);
      } else {
        this.transitionTo('sign-in');
        this.get('flashMessages').danger('Please sign in to view this page.');
      }
    }
  });
});
define('visualizr/routes/dataset/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('visualizr/routes/dataset/save', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      createVisualization: function createVisualization(data, model) {
        var _this = this;

        var visualization = this.get('store').createRecord('visualization', data);
        visualization.set('dataset', model);
        visualization.save().then(function () {
          return _this.transitionTo('visualizations');
        });
      }
    }
  });
});
define('visualizr/routes/datasets', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('dataset');
    }
  });
});
define('visualizr/routes/datasets/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('visualizr/routes/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('visualizr/routes/sign-in', ['exports', 'ember', 'rsvp'], function (exports, _ember, _rsvp) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      return _rsvp['default'].Promise.resolve({});
    },

    actions: {
      signIn: function signIn(credentials) {
        var _this = this;

        return this.get('auth').signIn(credentials).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          return _this.get('flashMessages').success('Thanks for signing in!');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('visualizr/routes/sign-up', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    flashMessages: _ember['default'].inject.service(),

    actions: {
      signUp: function signUp(credentials) {
        var _this = this;

        this.get('auth').signUp(credentials).then(function () {
          return _this.get('auth').signIn(credentials);
        }).then(function () {
          credentials.password = null;
          credentials.email = null;
          credentials.passwordConfirmation = null;
        }).then(function () {
          return _this.transitionTo('application');
        }).then(function () {
          _this.get('flashMessages').success('Successfully signed-up! You have also been signed-in.');
        })['catch'](function () {
          _this.get('flashMessages').danger('There was a problem. Please try again.');
        });
      }
    }
  });
});
define('visualizr/routes/users', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model() {
      return this.get('store').findAll('user');
    }
  });
});
define('visualizr/routes/visualization', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    flashMessages: _ember['default'].inject.service(),

    model: function model(params) {
      var _this = this;

      return this.get('store').findAll('dataset').then(function () {
        return _this.get('store').findRecord('visualization', params.visualization_id);
      });
    }
  });
});
define('visualizr/routes/visualization/edit', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    flashMessages: _ember['default'].inject.service(),

    actions: {
      updateVisualization: function updateVisualization(color, visualization) {
        var _this = this;

        visualization.set('color', color);
        visualization.save().then(function () {
          return _this.transitionTo('visualizations');
        })['catch'](function () {
          return _this.get('flashMessages').danger('There was an error! Are you sure this belongs to you?');
        });
      }
    }
  });
});
define('visualizr/routes/visualization/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({});
});
define('visualizr/routes/visualizations', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    auth: _ember['default'].inject.service(),
    isAuthenticated: _ember['default'].computed.alias('auth.isAuthenticated'),
    flashMessages: _ember['default'].inject.service(),

    model: function model() {
      if (this.get('isAuthenticated')) {
        return this.get('store').findAll('visualization');
      } else {
        this.transitionTo('sign-in');
        this.get('flashMessages').danger('Please sign in to view this page.');
      }
    }
  });
});
define('visualizr/routes/visualizations/index', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    actions: {
      'delete': function _delete(visualization) {
        visualization.destroyRecord();
      }
    }
  });
});
define('visualizr/serializers/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  exports['default'] = _activeModelAdapter.ActiveModelSerializer.extend({});
});
define('visualizr/services/ajax', ['exports', 'ember', 'ember-ajax/services/ajax', 'visualizr/config/environment'], function (exports, _ember, _emberAjaxServicesAjax, _visualizrConfigEnvironment) {
  exports['default'] = _emberAjaxServicesAjax['default'].extend({
    host: _visualizrConfigEnvironment['default'].apiHost,

    auth: _ember['default'].inject.service(),
    headers: _ember['default'].computed('auth.credentials.token', {
      get: function get() {
        var headers = {};
        var token = this.get('auth.credentials.token');
        if (token) {
          headers.Authorization = 'Token token=' + token;
        }

        return headers;
      }
    })
  });
});
define('visualizr/services/auth', ['exports', 'ember', 'ember-local-storage'], function (exports, _ember, _emberLocalStorage) {
  exports['default'] = _ember['default'].Service.extend({
    ajax: _ember['default'].inject.service(),
    credentials: (0, _emberLocalStorage.storageFor)('auth'),
    isAuthenticated: _ember['default'].computed.bool('credentials.token'),

    signUp: function signUp(credentials) {
      return this.get('ajax').post('/sign-up', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password,
            password_confirmation: credentials.passwordConfirmation
          }
        }
      });
    },

    signIn: function signIn(credentials) {
      var _this = this;

      return this.get('ajax').post('/sign-in', {
        data: {
          credentials: {
            email: credentials.email,
            password: credentials.password
          }
        }
      }).then(function (result) {
        _this.get('credentials').set('id', result.user.id);
        _this.get('credentials').set('email', result.user.email);
        _this.get('credentials').set('token', result.user.token);
      });
    },

    changePassword: function changePassword(passwords) {
      return this.get('ajax').patch('/change-password/' + this.get('credentials.id'), {
        data: {
          passwords: {
            old: passwords.previous,
            'new': passwords.next
          }
        }
      });
    },

    signOut: function signOut() {
      var _this2 = this;

      return this.get('ajax').del('/sign-out/' + this.get('credentials.id'))['finally'](function () {
        return _this2.get('credentials').reset();
      });
    }
  });
});
define('visualizr/services/flash-messages', ['exports', 'ember-cli-flash/services/flash-messages'], function (exports, _emberCliFlashServicesFlashMessages) {
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function get() {
      return _emberCliFlashServicesFlashMessages['default'];
    }
  });
});
define('visualizr/storages/auth', ['exports', 'ember-local-storage/local/object'], function (exports, _emberLocalStorageLocalObject) {
  exports['default'] = _emberLocalStorageLocalObject['default'].extend({});
});
define("visualizr/templates/*wildcard", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rFPxBnUB", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"How did you get here?\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"This page doesn't exist! It is very rude to type random paths into people's websites...\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/*wildcard.hbs" } });
});
define("visualizr/templates/application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uVRsR2c7", "block": "{\"statements\":[[\"append\",[\"helper\",[\"my-application\"],null,[[\"signOut\"],[\"signOut\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/application.hbs" } });
});
define("visualizr/templates/change-password", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "2grnCQOV", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Change Password\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"change-password-form\"],null,[[\"submit\"],[\"changePassword\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/change-password.hbs" } });
});
define("visualizr/templates/components/change-password-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XwCt6jbM", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"previous\"],[\"flush-element\"],[\"text\",\"Old Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"previous\",\"Old password\",[\"get\",[\"passwords\",\"previous\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"next\"],[\"flush-element\"],[\"text\",\"New Password\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"password\",\"form-control\",\"next\",\"New password\",[\"get\",[\"passwords\",\"next\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Change Password\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/change-password-form.hbs" } });
});
define("visualizr/templates/components/chart-component", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "VSDxTo7O", "block": "{\"statements\":[[\"open-element\",\"svg\",[]],[\"dynamic-attr\",\"width\",[\"unknown\",[\"outerWidth\"]],null],[\"dynamic-attr\",\"height\",[\"unknown\",[\"outerHeight\"]],null],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"g\",[]],[\"static-attr\",\"class\",\"chart-viewport\"],[\"dynamic-attr\",\"transform\",[\"unknown\",[\"transformViewport\"]],null],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/chart-component.hbs" } });
});
define("visualizr/templates/components/email-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "yHjHwblR", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"email\"],[\"flush-element\"],[\"text\",\"Email\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"email\",\"email\",\"Email\",[\"get\",[\"email\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/email-input.hbs" } });
});
define("visualizr/templates/components/hamburger-menu", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "uLIKvgUz", "block": "{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"sr-only\"],[\"flush-element\"],[\"text\",\"Toggle navigation\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"icon-bar\"],[\"flush-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/hamburger-menu.hbs" } });
});
define("visualizr/templates/components/my-application", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "fZvRhnOi", "block": "{\"statements\":[[\"open-element\",\"nav\",[]],[\"static-attr\",\"class\",\"navbar navbar-inverse\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"container-fluid\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"append\",[\"unknown\",[\"navbar-header\"]],false],[\"text\",\"\\n\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"collapse navbar-collapse\"],[\"static-attr\",\"id\",\"navigation\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav\"],[\"flush-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"datasets\"],null,8],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,7],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"nav navbar-nav navbar-right\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,5,3],[\"text\",\"      \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"h1\",[]],[\"flush-element\"],[\"text\",\"Visualizr\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-8 col-md-offset-2\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"flashMessages\",\"queue\"]]],null,0],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"jumbotron\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"append\",[\"helper\",[\"flash-message\"],null,[[\"flash\"],[[\"get\",[\"flash\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"flash\"]},{\"statements\":[[\"text\",\"Sign In\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Sign Up\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-up\"],null,2],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"sign-in\"],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Change Password\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"change-password\"],null,4],[\"close-element\"],[\"text\",\"\\n        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"open-element\",\"a\",[]],[\"static-attr\",\"href\",\"#\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"signOut\"]],[\"flush-element\"],[\"text\",\"Sign Out\"],[\"close-element\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"Saved Visualizations\"]],\"locals\":[]},{\"statements\":[[\"text\",\"        \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"block\",[\"link-to\"],[\"visualizations\"],null,6],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"View Datasets\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/my-application.hbs" } });
});
define("visualizr/templates/components/navbar-header", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/moVOdyb", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"hamburger-menu\"]],false],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"application\"],[[\"class\"],[\"navbar-brand\"]],0],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"Home\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/navbar-header.hbs" } });
});
define("visualizr/templates/components/password-confirmation-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "clNM0vTR", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"password-confirmation\"],[\"flush-element\"],[\"text\",\"Password Confirmation\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password-confirmation\",\"Password Confirmation\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/password-confirmation-input.hbs" } });
});
define("visualizr/templates/components/password-input", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QV/CHwOk", "block": "{\"statements\":[[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"kind\"],[\"flush-element\"],[\"text\",\"Password\"],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"id\",\"placeholder\",\"value\"],[\"password\",\"password\",\"Password\",[\"get\",[\"password\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/password-input.hbs" } });
});
define("visualizr/templates/components/sign-in-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "QVQlCTu9", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign In\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/sign-in-form.hbs" } });
});
define("visualizr/templates/components/sign-up-form", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "rCuXGovB", "block": "{\"statements\":[[\"append\",[\"helper\",[\"email-input\"],null,[[\"email\"],[[\"get\",[\"credentials\",\"email\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"password\"]]]]],false],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"password-confirmation-input\"],null,[[\"password\"],[[\"get\",[\"credentials\",\"passwordConfirmation\"]]]]],false],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"type\",\"submit\"],[\"static-attr\",\"class\",\"btn btn-primary\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"submit\"]],[\"flush-element\"],[\"text\",\"\\n  Sign Up\\n\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-default\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"reset\"]],[\"flush-element\"],[\"text\",\"\\n  Cancel\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/sign-up-form.hbs" } });
});
define("visualizr/templates/components/visualizr-dataset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "AYRyndpr", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"graph-color\"],[\"flush-element\"],[\"text\",\"Graph color (hex code must start with a #)\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"graph-color\",\"Enter a hex code!\",[\"get\",[\"newViz\",\"color\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"save\",[\"get\",[\"dataset\"]]],[[\"on\"],[\"click\"]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"visualizr-dataset/graph\"],null,[[\"dataset\",\"color\"],[[\"get\",[\"dataset\"]],[\"get\",[\"newViz\",\"color\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/visualizr-dataset.hbs" } });
});
define("visualizr/templates/components/visualizr-dataset/graph", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "hTzkamvS", "block": "{\"statements\":[[\"append\",[\"helper\",[\"horizontal-bar-chart\"],null,[[\"data\",\"selectedSeedColor\"],[[\"get\",[\"dataset\",\"formattedCount\"]],[\"get\",[\"color\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/visualizr-dataset/graph.hbs" } });
});
define("visualizr/templates/components/visualizr-dataset/summary", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "YC2aieGV", "block": "{\"statements\":[[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-8\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"dataset\",\"name\"]],false],[\"text\",\": \"],[\"append\",[\"unknown\",[\"dataset\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-xs-4\"],[\"flush-element\"],[\"text\",\"\\n      \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"badge\"],[\"flush-element\"],[\"text\",\"Times saved: \"],[\"append\",[\"unknown\",[\"dataset\",\"saved\"]],false],[\"close-element\"],[\"text\",\"\\n    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"if\"],[[\"get\",[\"isAuthenticated\"]]],null,1],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"      \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm\"],[\"flush-element\"],[\"text\",\"View Dataset\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"link-to\"],[\"dataset\",[\"get\",[\"dataset\"]]],null,0]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/components/visualizr-dataset/summary.hbs" } });
});
define("visualizr/templates/dataset", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "ZjDa4oHi", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/dataset.hbs" } });
});
define("visualizr/templates/dataset/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "Ty7QmtGI", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Properties by Zipcode\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Year: \"],[\"append\",[\"unknown\",[\"model\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h5\",[]],[\"flush-element\"],[\"text\",\"Times saved: \"],[\"append\",[\"unknown\",[\"model\",\"saved\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"datasets\"],null,1],[\"block\",[\"link-to\"],[\"dataset.save\",[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"visualizr-dataset/graph\"],null,[[\"dataset\",\"color\"],[[\"get\",[\"model\"]],\"#000000\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Customize this visualization!\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"btn btn-info btn-sm\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/dataset/index.hbs" } });
});
define("visualizr/templates/dataset/save", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "o74r/EJf", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Customize visualization for \"],[\"append\",[\"unknown\",[\"model\",\"name\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"model\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"visualizr-dataset\"],null,[[\"dataset\",\"save\"],[[\"get\",[\"model\"]],\"createVisualization\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/dataset/save.hbs" } });
});
define("visualizr/templates/datasets", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "b+v1AibR", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/datasets.hbs" } });
});
define("visualizr/templates/datasets/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "pel6eDHd", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-md-offset-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"All Datasets\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"          \"],[\"append\",[\"helper\",[\"visualizr-dataset/summary\"],null,[[\"dataset\"],[[\"get\",[\"dataset\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[\"dataset\"]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/datasets/index.hbs" } });
});
define("visualizr/templates/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "6wajhWPV", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Welcome to Visualizr!\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Visualizr is an app where you can visualize information about Boston neighborhoods\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Other cities coming Soon(tm)\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/index.hbs" } });
});
define("visualizr/templates/sign-in", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "/unqU/Vx", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign In\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-in-form\"],null,[[\"submit\",\"reset\",\"credentials\"],[\"signIn\",\"reset\",[\"get\",[\"model\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/sign-in.hbs" } });
});
define("visualizr/templates/sign-up", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "XfsnpO5A", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Sign Up\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"sign-up-form\"],null,[[\"submit\"],[\"signUp\"]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/sign-up.hbs" } });
});
define("visualizr/templates/users", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OLHK+kNy", "block": "{\"statements\":[[\"open-element\",\"h2\",[]],[\"flush-element\"],[\"text\",\"Users\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"open-element\",\"ul\",[]],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,0],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"email\"]],false],[\"close-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"li\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"user\",\"saved\"]],false],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[\"user\"]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/users.hbs" } });
});
define("visualizr/templates/visualization", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DLZJ5q+r", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/visualization.hbs" } });
});
define("visualizr/templates/visualization/edit", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "WPhHvLXC", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Customize saved visualization for \"],[\"append\",[\"unknown\",[\"model\",\"dataset\",\"name\"]],false],[\"text\",\" \"],[\"append\",[\"unknown\",[\"model\",\"dataset\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"visualization\",[\"get\",[\"model\"]]],null,0],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"form-group\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"label\",[]],[\"static-attr\",\"for\",\"graph-color\"],[\"flush-element\"],[\"text\",\"Graph color (hex code must start with a #)\"],[\"close-element\"],[\"text\",\"\\n  \"],[\"append\",[\"helper\",[\"input\"],null,[[\"type\",\"class\",\"id\",\"placeholder\",\"value\"],[\"text\",\"form-control\",\"graph-color\",\"Enter a hex code!\",[\"get\",[\"model\",\"color\"]]]]],false],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-info btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"updateVisualization\",[\"get\",[\"model\",\"color\"]],[\"get\",[\"model\"]]],[[\"on\"],[\"click\"]]],[\"flush-element\"],[\"text\",\"Save\"],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"append\",[\"helper\",[\"visualizr-dataset/graph\"],null,[[\"dataset\",\"color\"],[[\"get\",[\"model\",\"dataset\"]],[\"get\",[\"model\",\"color\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"  \"],[\"open-element\",\"span\",[]],[\"static-attr\",\"class\",\"btn btn-info btn-sm\"],[\"flush-element\"],[\"text\",\"Back\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/visualization/edit.hbs" } });
});
define("visualizr/templates/visualization/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "0HEo0RF2", "block": "{\"statements\":[[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Properties by Zipcode.\"],[\"close-element\"],[\"text\",\"\\n\"],[\"open-element\",\"h4\",[]],[\"flush-element\"],[\"text\",\"Year: \"],[\"append\",[\"unknown\",[\"model\",\"dataset\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n\\n\"],[\"block\",[\"if\"],[[\"get\",[\"model\",\"editable\"]]],null,1],[\"text\",\"\\n\"],[\"append\",[\"helper\",[\"visualizr-dataset/graph\"],null,[[\"dataset\",\"color\"],[[\"get\",[\"model\",\"dataset\"]],[\"get\",[\"model\",\"color\"]]]]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"open-element\",\"p\",[]],[\"flush-element\"],[\"text\",\"Edit your saved visualization.\"],[\"close-element\"]],\"locals\":[]},{\"statements\":[[\"text\",\"  \"],[\"block\",[\"link-to\"],[\"visualization.edit\",[\"get\",[\"model\"]]],null,0],[\"text\",\"\\n\"]],\"locals\":[]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/visualization/index.hbs" } });
});
define("visualizr/templates/visualizations", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "DIuWWGyS", "block": "{\"statements\":[[\"append\",[\"unknown\",[\"outlet\"]],false],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/visualizations.hbs" } });
});
define("visualizr/templates/visualizations/index", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template({ "id": "OhiNS5cm", "block": "{\"statements\":[[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n  \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"col-md-6 col-md-offset-3\"],[\"flush-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"h3\",[]],[\"flush-element\"],[\"text\",\"Your saved Visualizations\"],[\"close-element\"],[\"text\",\"\\n    \"],[\"open-element\",\"ul\",[]],[\"static-attr\",\"class\",\"list-group\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"each\"],[[\"get\",[\"model\"]]],null,2],[\"text\",\"    \"],[\"close-element\"],[\"text\",\"\\n  \"],[\"close-element\"],[\"text\",\"\\n\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[],\"named\":[],\"yields\":[],\"blocks\":[{\"statements\":[[\"text\",\"                \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-primary btn-sm\"],[\"flush-element\"],[\"text\",\"View Visualization\"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"text\",\"          \"],[\"open-element\",\"li\",[]],[\"static-attr\",\"class\",\"list-group-item\"],[\"flush-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"p\",[]],[\"flush-element\"],[\"append\",[\"unknown\",[\"viz\",\"dataset\",\"name\"]],false],[\"text\",\": \"],[\"append\",[\"unknown\",[\"viz\",\"dataset\",\"year\"]],false],[\"close-element\"],[\"text\",\"\\n            \"],[\"open-element\",\"div\",[]],[\"static-attr\",\"class\",\"row\"],[\"flush-element\"],[\"text\",\"\\n\"],[\"block\",[\"link-to\"],[\"visualization\",[\"get\",[\"viz\"]]],null,0],[\"text\",\"              \"],[\"open-element\",\"button\",[]],[\"static-attr\",\"class\",\"btn btn-danger btn-sm\"],[\"modifier\",[\"action\"],[[\"get\",[null]],\"delete\",[\"get\",[\"viz\"]]]],[\"flush-element\"],[\"text\",\"Delete Visualization\"],[\"close-element\"],[\"text\",\"\\n            \"],[\"close-element\"],[\"text\",\"\\n          \"],[\"close-element\"],[\"text\",\"\\n\"]],\"locals\":[]},{\"statements\":[[\"block\",[\"if\"],[[\"get\",[\"viz\",\"editable\"]]],null,1]],\"locals\":[\"viz\"]}],\"hasPartials\":false}", "meta": { "moduleName": "visualizr/templates/visualizations/index.hbs" } });
});


define('visualizr/config/environment', ['ember'], function(Ember) {
  var prefix = 'visualizr';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

if (!runningTests) {
  require("visualizr/app")["default"].create({"name":"visualizr","version":"0.0.0+d327706f"});
}
//# sourceMappingURL=visualizr.map
