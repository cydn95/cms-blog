webpackHotUpdate(0,{

/***/ 502:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(14);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactHelmet = __webpack_require__(279);\n\nvar _reactHelmet2 = _interopRequireDefault(_reactHelmet);\n\nvar _reactRedux = __webpack_require__(181);\n\nvar _posts = __webpack_require__(503);\n\nvar _index = __webpack_require__(528);\n\nvar _index2 = _interopRequireDefault(_index);\n\nvar _index3 = __webpack_require__(535);\n\nvar _index4 = _interopRequireDefault(_index3);\n\nvar _reactAddonsShallowCompare = __webpack_require__(538);\n\nvar _reactAddonsShallowCompare2 = _interopRequireDefault(_reactAddonsShallowCompare);\n\nvar _reactInfinite = __webpack_require__(540);\n\nvar _reactInfinite2 = _interopRequireDefault(_reactInfinite);\n\nvar _styles = __webpack_require__(553);\n\nvar _styles2 = _interopRequireDefault(_styles);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar propTypes = {\n  posts: _react.PropTypes.array.isRequired,\n  page: _react.PropTypes.number.isRequired,\n  limit: _react.PropTypes.number.isRequired,\n  total: _react.PropTypes.number.isRequired,\n  fetchPosts: _react.PropTypes.func.isRequired\n};\n\nfunction mapStateToProps(state) {\n  return {\n    posts: state.posts.posts,\n    page: state.posts.page,\n    limit: state.posts.limit,\n    total: state.posts.total\n  };\n}\n\nvar PostIndex = function (_Component) {\n  _inherits(PostIndex, _Component);\n\n  function PostIndex(props) {\n    _classCallCheck(this, PostIndex);\n\n    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(PostIndex).call(this, props));\n\n    _this.state = { loading: true };\n\n    _this.handleLoad = _this.handleLoad.bind(_this);\n    return _this;\n  }\n\n  _createClass(PostIndex, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var _this2 = this;\n\n      var params = { page: 1 };\n      if (this.props.hasOwnProperty(\"location\")) {\n        params.tag = this.props.location.query.tag;\n      }\n      this.props.fetchPosts(params).then(function () {\n        _this2.props.finishLoading();\n        _this2.setState({ loading: false });\n      });\n    }\n  }, {\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      if (nextProps.location.query.tag !== this.props.location.query.tag) {\n        nextProps.fetchPosts({ page: 1, tag: nextProps.location.query.tag });\n      }\n    }\n  }, {\n    key: 'shouldComponentUpdate',\n    value: function shouldComponentUpdate(nextProps, nextState) {\n      return (0, _reactAddonsShallowCompare2.default)(this, nextProps, nextState);\n    }\n  }, {\n    key: 'handleLoad',\n    value: function handleLoad() {\n      if (this.canLoad) {\n        var params = { page: this.props.page + 1 };\n\n        if (this.props.params.hasOwnProperty(\"location\")) {\n          params.tag = this.props.params.location.query.tag;\n        }\n        this.props.fetchPosts(params);\n      }\n    }\n  }, {\n    key: 'renderItems',\n    value: function renderItems() {\n      return _react2.default.createElement(\n        _reactInfinite2.default,\n        {\n          className: _styles2.default.list,\n          infiniteLoadBeginEdgeOffset: 500,\n          onInfiniteLoad: this.handleLoad,\n          containerHeight: 1000,\n          preloadBatchSize: _reactInfinite2.default.containerHeightScaleFactor(1),\n          elementHeight: 100,\n          useWindowAsScrollContainer: true\n        },\n        this.props.posts.map(function (post) {\n          return _react2.default.createElement(_index2.default, _extends({ key: post.id }, post));\n        })\n      );\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      if (this.state.loading) {\n        return _react2.default.createElement(\n          'section',\n          null,\n          _react2.default.createElement(_reactHelmet2.default, { title: 'Posts' })\n        );\n      }\n\n      if (!this.props.posts.length) {\n        return _react2.default.createElement(\n          'section',\n          null,\n          _react2.default.createElement(_reactHelmet2.default, { title: 'Posts' }),\n          _react2.default.createElement(_index4.default, { pageName: 'posts' })\n        );\n      }\n\n      return _react2.default.createElement(\n        'section',\n        null,\n        _react2.default.createElement(_reactHelmet2.default, { title: 'Posts' }),\n        _react2.default.createElement(\n          'h1',\n          { className: _styles2.default.heading },\n          'Posts'\n        ),\n        this.renderItems()\n      );\n    }\n  }, {\n    key: 'canLoad',\n    get: function get() {\n      return this.props.total - this.props.limit * this.props.page > 0;\n    }\n  }]);\n\n  return PostIndex;\n}(_react.Component);\n\nPostIndex.propTypes = propTypes;\n\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { fetchPosts: _posts.fetchPosts })(PostIndex);\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/client/containers/posts/Index/index.js\n ** module id = 502\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/client/containers/posts/Index/index.js?");

/***/ }

})