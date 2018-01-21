;
!
function(a, b) {
	"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
}(this, function() {
	"use strict";

	function a() {
		return Wd.apply(null, arguments)
	}
	function b(a) {
		Wd = a
	}
	function c(a) {
		return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
	}
	function d(a) {
		return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
	}
	function e(a, b) {
		var c, d = [];
		for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
		return d
	}
	function f(a, b) {
		return Object.prototype.hasOwnProperty.call(a, b)
	}
	function g(a, b) {
		for (var c in b) f(b, c) && (a[c] = b[c]);
		return f(b, "toString") && (a.toString = b.toString), f(b, "valueOf") && (a.valueOf = b.valueOf), a
	}
	function h(a, b, c, d) {
		return Ia(a, b, c, d, !0).utc()
	}
	function i() {
		return {
			empty: !1,
			unusedTokens: [],
			unusedInput: [],
			overflow: -2,
			charsLeftOver: 0,
			nullInput: !1,
			invalidMonth: null,
			invalidFormat: !1,
			userInvalidated: !1,
			iso: !1
		}
	}
	function j(a) {
		return null == a._pf && (a._pf = i()), a._pf
	}
	function k(a) {
		if (null == a._isValid) {
			var b = j(a);
			a._isValid = !(isNaN(a._d.getTime()) || !(b.overflow < 0) || b.empty || b.invalidMonth || b.invalidWeekday || b.nullInput || b.invalidFormat || b.userInvalidated), a._strict && (a._isValid = a._isValid && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour)
		}
		return a._isValid
	}
	function l(a) {
		var b = h(NaN);
		return null != a ? g(j(b), a) : j(b).userInvalidated = !0, b
	}
	function m(a) {
		return void 0 === a
	}
	function n(a, b) {
		var c, d, e;
		if (m(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), m(b._i) || (a._i = b._i), m(b._f) || (a._f = b._f), m(b._l) || (a._l = b._l), m(b._strict) || (a._strict = b._strict), m(b._tzm) || (a._tzm = b._tzm), m(b._isUTC) || (a._isUTC = b._isUTC), m(b._offset) || (a._offset = b._offset), m(b._pf) || (a._pf = j(b)), m(b._locale) || (a._locale = b._locale), Xd.length > 0) for (c in Xd) d = Xd[c], e = b[d], m(e) || (a[d] = e);
		return a
	}
	function o(b) {
		n(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), Yd === !1 && (Yd = !0, a.updateOffset(this), Yd = !1)
	}
	function p(a) {
		return a instanceof o || null != a && null != a._isAMomentObject
	}
	function q(a) {
		return 0 > a ? Math.ceil(a) : Math.floor(a)
	}
	function r(a) {
		var b = +a,
			c = 0;
		return 0 !== b && isFinite(b) && (c = q(b)), c
	}
	function s(a, b, c) {
		var d, e = Math.min(a.length, b.length),
			f = Math.abs(a.length - b.length),
			g = 0;
		for (d = 0; e > d; d++)(c && a[d] !== b[d] || !c && r(a[d]) !== r(b[d])) && g++;
		return g + f
	}
	function t(b) {
		a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
	}
	function u(a, b) {
		var c = !0;
		return g(function() {
			return c && (t(a + "\nArguments: " + Array.prototype.slice.call(arguments).join(", ") + "\n" + (new Error).stack), c = !1), b.apply(this, arguments)
		}, b)
	}
	function v(a, b) {
		Zd[a] || (t(b), Zd[a] = !0)
	}
	function w(a) {
		return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
	}
	function x(a) {
		return "[object Object]" === Object.prototype.toString.call(a)
	}
	function y(a) {
		var b, c;
		for (c in a) b = a[c], w(b) ? this[c] = b : this["_" + c] = b;
		this._config = a, this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
	}
	function z(a, b) {
		var c, d = g({}, a);
		for (c in b) f(b, c) && (x(a[c]) && x(b[c]) ? (d[c] = {}, g(d[c], a[c]), g(d[c], b[c])) : null != b[c] ? d[c] = b[c] : delete d[c]);
		return d
	}
	function A(a) {
		null != a && this.set(a)
	}
	function B(a) {
		return a ? a.toLowerCase().replace("_", "-") : a
	}
	function C(a) {
		for (var b, c, d, e, f = 0; f < a.length;) {
			for (e = B(a[f]).split("-"), b = e.length, c = B(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
				if (d = D(e.slice(0, b).join("-"))) return d;
				if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
				b--
			}
			f++
		}
		return null
	}
	function D(a) {
		var b = null;
		if (!_d[a] && "undefined" != typeof module && module && module.exports) try {
			b = $d._abbr, require("./locale/" + a), E(b)
		} catch (c) {}
		return _d[a]
	}
	function E(a, b) {
		var c;
		return a && (c = m(b) ? H(a) : F(a, b), c && ($d = c)), $d._abbr
	}
	function F(a, b) {
		return null !== b ? (b.abbr = a, null != _d[a] ? (v("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale"), b = z(_d[a]._config, b)) : null != b.parentLocale && (null != _d[b.parentLocale] ? b = z(_d[b.parentLocale]._config, b) : v("parentLocaleUndefined", "specified parentLocale is not defined yet")), _d[a] = new A(b), E(a), _d[a]) : (delete _d[a], null)
	}
	function G(a, b) {
		if (null != b) {
			var c;
			null != _d[a] && (b = z(_d[a]._config, b)), c = new A(b), c.parentLocale = _d[a], _d[a] = c, E(a)
		} else null != _d[a] && (null != _d[a].parentLocale ? _d[a] = _d[a].parentLocale : null != _d[a] && delete _d[a]);
		return _d[a]
	}
	function H(a) {
		var b;
		if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return $d;
		if (!c(a)) {
			if (b = D(a)) return b;
			a = [a]
		}
		return C(a)
	}
	function I() {
		return Object.keys(_d)
	}
	function J(a, b) {
		var c = a.toLowerCase();
		ae[c] = ae[c + "s"] = ae[b] = a
	}
	function K(a) {
		return "string" == typeof a ? ae[a] || ae[a.toLowerCase()] : void 0
	}
	function L(a) {
		var b, c, d = {};
		for (c in a) f(a, c) && (b = K(c), b && (d[b] = a[c]));
		return d
	}
	function M(b, c) {
		return function(d) {
			return null != d ? (O(this, b, d), a.updateOffset(this, c), this) : N(this, b)
		}
	}
	function N(a, b) {
		return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
	}
	function O(a, b, c) {
		a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
	}
	function P(a, b) {
		var c;
		if ("object" == typeof a) for (c in a) this.set(c, a[c]);
		else if (a = K(a), w(this[a])) return this[a](b);
		return this
	}
	function Q(a, b, c) {
		var d = "" + Math.abs(a),
			e = b - d.length,
			f = a >= 0;
		return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
	}
	function R(a, b, c, d) {
		var e = d;
		"string" == typeof d && (e = function() {
			return this[d]()
		}), a && (ee[a] = e), b && (ee[b[0]] = function() {
			return Q(e.apply(this, arguments), b[1], b[2])
		}), c && (ee[c] = function() {
			return this.localeData().ordinal(e.apply(this, arguments), a)
		})
	}
	function S(a) {
		return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
	}
	function T(a) {
		var b, c, d = a.match(be);
		for (b = 0, c = d.length; c > b; b++) ee[d[b]] ? d[b] = ee[d[b]] : d[b] = S(d[b]);
		return function(e) {
			var f = "";
			for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b];
			return f
		}
	}
	function U(a, b) {
		return a.isValid() ? (b = V(b, a.localeData()), de[b] = de[b] || T(b), de[b](a)) : a.localeData().invalidDate()
	}
	function V(a, b) {
		function c(a) {
			return b.longDateFormat(a) || a
		}
		var d = 5;
		for (ce.lastIndex = 0; d >= 0 && ce.test(a);) a = a.replace(ce, c), ce.lastIndex = 0, d -= 1;
		return a
	}
	function W(a, b, c) {
		we[a] = w(b) ? b : function(a, d) {
			return a && c ? c : b
		}
	}
	function X(a, b) {
		return f(we, a) ? we[a](b._strict, b._locale) : new RegExp(Y(a))
	}
	function Y(a) {
		return Z(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(a, b, c, d, e) {
			return b || c || d || e
		}))
	}
	function Z(a) {
		return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
	}
	function $(a, b) {
		var c, d = b;
		for ("string" == typeof a && (a = [a]), "number" == typeof b && (d = function(a, c) {
			c[b] = r(a)
		}), c = 0; c < a.length; c++) xe[a[c]] = d
	}
	function _(a, b) {
		$(a, function(a, c, d, e) {
			d._w = d._w || {}, b(a, d._w, d, e)
		})
	}
	function aa(a, b, c) {
		null != b && f(xe, a) && xe[a](b, c._a, c, a)
	}
	function ba(a, b) {
		return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
	}
	function ca(a, b) {
		return c(this._months) ? this._months[a.month()] : this._months[He.test(b) ? "format" : "standalone"][a.month()]
	}
	function da(a, b) {
		return c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[He.test(b) ? "format" : "standalone"][a.month()]
	}
	function ea(a, b, c) {
		var d, e, f;
		for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) {
			if (e = h([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
			if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
			if (!c && this._monthsParse[d].test(a)) return d
		}
	}
	function fa(a, b) {
		var c;
		if (!a.isValid()) return a;
		if ("string" == typeof b) if (/^\d+$/.test(b)) b = r(b);
		else if (b = a.localeData().monthsParse(b), "number" != typeof b) return a;
		return c = Math.min(a.date(), ba(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
	}
	function ga(b) {
		return null != b ? (fa(this, b), a.updateOffset(this, !0), this) : N(this, "Month")
	}
	function ha() {
		return ba(this.year(), this.month())
	}
	function ia(a) {
		return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex
	}
	function ja(a) {
		return this._monthsParseExact ? (f(this, "_monthsRegex") || ka.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex
	}
	function ka() {
		function a(a, b) {
			return b.length - a.length
		}
		var b, c, d = [],
			e = [],
			f = [];
		for (b = 0; 12 > b; b++) c = h([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
		for (d.sort(a), e.sort(a), f.sort(a), b = 0; 12 > b; b++) d[b] = Z(d[b]), e[b] = Z(e[b]), f[b] = Z(f[b]);
		this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")$", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")$", "i")
	}
	function la(a) {
		var b, c = a._a;
		return c && -2 === j(a).overflow && (b = c[ze] < 0 || c[ze] > 11 ? ze : c[Ae] < 1 || c[Ae] > ba(c[ye], c[ze]) ? Ae : c[Be] < 0 || c[Be] > 24 || 24 === c[Be] && (0 !== c[Ce] || 0 !== c[De] || 0 !== c[Ee]) ? Be : c[Ce] < 0 || c[Ce] > 59 ? Ce : c[De] < 0 || c[De] > 59 ? De : c[Ee] < 0 || c[Ee] > 999 ? Ee : -1, j(a)._overflowDayOfYear && (ye > b || b > Ae) && (b = Ae), j(a)._overflowWeeks && -1 === b && (b = Fe), j(a)._overflowWeekday && -1 === b && (b = Ge), j(a).overflow = b), a
	}
	function ma(a) {
		var b, c, d, e, f, g, h = a._i,
			i = Me.exec(h) || Ne.exec(h);
		if (i) {
			for (j(a).iso = !0, b = 0, c = Pe.length; c > b; b++) if (Pe[b][1].exec(i[1])) {
				e = Pe[b][0], d = Pe[b][2] !== !1;
				break
			}
			if (null == e) return void(a._isValid = !1);
			if (i[3]) {
				for (b = 0, c = Qe.length; c > b; b++) if (Qe[b][1].exec(i[3])) {
					f = (i[2] || " ") + Qe[b][0];
					break
				}
				if (null == f) return void(a._isValid = !1)
			}
			if (!d && null != f) return void(a._isValid = !1);
			if (i[4]) {
				if (!Oe.exec(i[4])) return void(a._isValid = !1);
				g = "Z"
			}
			a._f = e + (f || "") + (g || ""), Ba(a)
		} else a._isValid = !1
	}
	function na(b) {
		var c = Re.exec(b._i);
		return null !== c ? void(b._d = new Date(+c[1])) : (ma(b), void(b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b))))
	}
	function oa(a, b, c, d, e, f, g) {
		var h = new Date(a, b, c, d, e, f, g);
		return 100 > a && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
	}
	function pa(a) {
		var b = new Date(Date.UTC.apply(null, arguments));
		return 100 > a && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
	}
	function qa(a) {
		return ra(a) ? 366 : 365
	}
	function ra(a) {
		return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
	}
	function sa() {
		return ra(this.year())
	}
	function ta(a, b, c) {
		var d = 7 + b - c,
			e = (7 + pa(a, 0, d).getUTCDay() - b) % 7;
		return -e + d - 1
	}
	function ua(a, b, c, d, e) {
		var f, g, h = (7 + c - d) % 7,
			i = ta(a, d, e),
			j = 1 + 7 * (b - 1) + h + i;
		return 0 >= j ? (f = a - 1, g = qa(f) + j) : j > qa(a) ? (f = a + 1, g = j - qa(a)) : (f = a, g = j), {
			year: f,
			dayOfYear: g
		}
	}
	function va(a, b, c) {
		var d, e, f = ta(a.year(), b, c),
			g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
		return 1 > g ? (e = a.year() - 1, d = g + wa(e, b, c)) : g > wa(a.year(), b, c) ? (d = g - wa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
			week: d,
			year: e
		}
	}
	function wa(a, b, c) {
		var d = ta(a, b, c),
			e = ta(a + 1, b, c);
		return (qa(a) - d + e) / 7
	}
	function xa(a, b, c) {
		return null != a ? a : null != b ? b : c
	}
	function ya(b) {
		var c = new Date(a.now());
		return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
	}
	function za(a) {
		var b, c, d, e, f = [];
		if (!a._d) {
			for (d = ya(a), a._w && null == a._a[Ae] && null == a._a[ze] && Aa(a), a._dayOfYear && (e = xa(a._a[ye], d[ye]), a._dayOfYear > qa(e) && (j(a)._overflowDayOfYear = !0), c = pa(e, 0, a._dayOfYear), a._a[ze] = c.getUTCMonth(), a._a[Ae] = c.getUTCDate()), b = 0; 3 > b && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
			for (; 7 > b; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
			24 === a._a[Be] && 0 === a._a[Ce] && 0 === a._a[De] && 0 === a._a[Ee] && (a._nextDay = !0, a._a[Be] = 0), a._d = (a._useUTC ? pa : oa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Be] = 24)
		}
	}
	function Aa(a) {
		var b, c, d, e, f, g, h, i;
		b = a._w, null != b.GG || null != b.W || null != b.E ? (f = 1, g = 4, c = xa(b.GG, a._a[ye], va(Ja(), 1, 4).year), d = xa(b.W, 1), e = xa(b.E, 1), (1 > e || e > 7) && (i = !0)) : (f = a._locale._week.dow, g = a._locale._week.doy, c = xa(b.gg, a._a[ye], va(Ja(), f, g).year), d = xa(b.w, 1), null != b.d ? (e = b.d, (0 > e || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f), 1 > d || d > wa(c, f, g) ? j(a)._overflowWeeks = !0 : null != i ? j(a)._overflowWeekday = !0 : (h = ua(c, d, e, f, g), a._a[ye] = h.year, a._dayOfYear = h.dayOfYear)
	}
	function Ba(b) {
		if (b._f === a.ISO_8601) return void ma(b);
		b._a = [], j(b).empty = !0;
		var c, d, e, f, g, h = "" + b._i,
			i = h.length,
			k = 0;
		for (e = V(b._f, b._locale).match(be) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(X(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && j(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), k += d.length), ee[f] ? (d ? j(b).empty = !1 : j(b).unusedTokens.push(f), aa(f, d, b)) : b._strict && !d && j(b).unusedTokens.push(f);
		j(b).charsLeftOver = i - k, h.length > 0 && j(b).unusedInput.push(h), j(b).bigHour === !0 && b._a[Be] <= 12 && b._a[Be] > 0 && (j(b).bigHour = void 0), b._a[Be] = Ca(b._locale, b._a[Be], b._meridiem), za(b), la(b)
	}
	function Ca(a, b, c) {
		var d;
		return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b
	}
	function Da(a) {
		var b, c, d, e, f;
		if (0 === a._f.length) return j(a).invalidFormat = !0, void(a._d = new Date(NaN));
		for (e = 0; e < a._f.length; e++) f = 0, b = n({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], Ba(b), k(b) && (f += j(b).charsLeftOver, f += 10 * j(b).unusedTokens.length, j(b).score = f, (null == d || d > f) && (d = f, c = b));
		g(a, c || b)
	}
	function Ea(a) {
		if (!a._d) {
			var b = L(a._i);
			a._a = e([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function(a) {
				return a && parseInt(a, 10)
			}), za(a)
		}
	}
	function Fa(a) {
		var b = new o(la(Ga(a)));
		return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
	}
	function Ga(a) {
		var b = a._i,
			e = a._f;
		return a._locale = a._locale || H(a._l), null === b || void 0 === e && "" === b ? l({
			nullInput: !0
		}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), p(b) ? new o(la(b)) : (c(e) ? Da(a) : e ? Ba(a) : d(b) ? a._d = b : Ha(a), k(a) || (a._d = null), a))
	}
	function Ha(b) {
		var f = b._i;
		void 0 === f ? b._d = new Date(a.now()) : d(f) ? b._d = new Date(+f) : "string" == typeof f ? na(b) : c(f) ? (b._a = e(f.slice(0), function(a) {
			return parseInt(a, 10)
		}), za(b)) : "object" == typeof f ? Ea(b) : "number" == typeof f ? b._d = new Date(f) : a.createFromInputFallback(b)
	}
	function Ia(a, b, c, d, e) {
		var f = {};
		return "boolean" == typeof c && (d = c, c = void 0), f._isAMomentObject = !0, f._useUTC = f._isUTC = e, f._l = c, f._i = a, f._f = b, f._strict = d, Fa(f)
	}
	function Ja(a, b, c, d) {
		return Ia(a, b, c, d, !1)
	}
	function Ka(a, b) {
		var d, e;
		if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return Ja();
		for (d = b[0], e = 1; e < b.length; ++e)(!b[e].isValid() || b[e][a](d)) && (d = b[e]);
		return d
	}
	function La() {
		var a = [].slice.call(arguments, 0);
		return Ka("isBefore", a)
	}
	function Ma() {
		var a = [].slice.call(arguments, 0);
		return Ka("isAfter", a)
	}
	function Na(a) {
		var b = L(a),
			c = b.year || 0,
			d = b.quarter || 0,
			e = b.month || 0,
			f = b.week || 0,
			g = b.day || 0,
			h = b.hour || 0,
			i = b.minute || 0,
			j = b.second || 0,
			k = b.millisecond || 0;
		this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = H(), this._bubble()
	}
	function Oa(a) {
		return a instanceof Na
	}
	function Pa(a, b) {
		R(a, 0, 0, function() {
			var a = this.utcOffset(),
				c = "+";
			return 0 > a && (a = -a, c = "-"), c + Q(~~ (a / 60), 2) + b + Q(~~a % 60, 2)
		})
	}
	function Qa(a, b) {
		var c = (b || "").match(a) || [],
			d = c[c.length - 1] || [],
			e = (d + "").match(We) || ["-", 0, 0],
			f = +(60 * e[1]) + r(e[2]);
		return "+" === e[0] ? f : -f
	}
	function Ra(b, c) {
		var e, f;
		return c._isUTC ? (e = c.clone(), f = (p(b) || d(b) ? +b : +Ja(b)) - +e, e._d.setTime(+e._d + f), a.updateOffset(e, !1), e) : Ja(b).local()
	}
	function Sa(a) {
		return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
	}
	function Ta(b, c) {
		var d, e = this._offset || 0;
		return this.isValid() ? null != b ? ("string" == typeof b ? b = Qa(te, b) : Math.abs(b) < 16 && (b = 60 * b), !this._isUTC && c && (d = Sa(this)), this._offset = b, this._isUTC = !0, null != d && this.add(d, "m"), e !== b && (!c || this._changeInProgress ? ib(this, cb(b - e, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? e : Sa(this) : null != b ? this : NaN
	}
	function Ua(a, b) {
		return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
	}
	function Va(a) {
		return this.utcOffset(0, a)
	}
	function Wa(a) {
		return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Sa(this), "m")), this
	}
	function Xa() {
		return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Qa(se, this._i)), this
	}
	function Ya(a) {
		return this.isValid() ? (a = a ? Ja(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0) : !1
	}
	function Za() {
		return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
	}
	function $a() {
		if (!m(this._isDSTShifted)) return this._isDSTShifted;
		var a = {};
		if (n(a, this), a = Ga(a), a._a) {
			var b = a._isUTC ? h(a._a) : Ja(a._a);
			this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0
		} else this._isDSTShifted = !1;
		return this._isDSTShifted
	}
	function _a() {
		return this.isValid() ? !this._isUTC : !1
	}
	function ab() {
		return this.isValid() ? this._isUTC : !1
	}
	function bb() {
		return this.isValid() ? this._isUTC && 0 === this._offset : !1
	}
	function cb(a, b) {
		var c, d, e, g = a,
			h = null;
		return Oa(a) ? g = {
			ms: a._milliseconds,
			d: a._days,
			M: a._months
		} : "number" == typeof a ? (g = {}, b ? g[b] = a : g.milliseconds = a) : (h = Xe.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: 0,
			d: r(h[Ae]) * c,
			h: r(h[Be]) * c,
			m: r(h[Ce]) * c,
			s: r(h[De]) * c,
			ms: r(h[Ee]) * c
		}) : (h = Ye.exec(a)) ? (c = "-" === h[1] ? -1 : 1, g = {
			y: db(h[2], c),
			M: db(h[3], c),
			w: db(h[4], c),
			d: db(h[5], c),
			h: db(h[6], c),
			m: db(h[7], c),
			s: db(h[8], c)
		}) : null == g ? g = {} : "object" == typeof g && ("from" in g || "to" in g) && (e = fb(Ja(g.from), Ja(g.to)), g = {}, g.ms = e.milliseconds, g.M = e.months), d = new Na(g), Oa(a) && f(a, "_locale") && (d._locale = a._locale), d
	}
	function db(a, b) {
		var c = a && parseFloat(a.replace(",", "."));
		return (isNaN(c) ? 0 : c) * b
	}
	function eb(a, b) {
		var c = {
			milliseconds: 0,
			months: 0
		};
		return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
	}
	function fb(a, b) {
		var c;
		return a.isValid() && b.isValid() ? (b = Ra(b, a), a.isBefore(b) ? c = eb(a, b) : (c = eb(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
			milliseconds: 0,
			months: 0
		}
	}
	function gb(a) {
		return 0 > a ? -1 * Math.round(-1 * a) : Math.round(a)
	}
	function hb(a, b) {
		return function(c, d) {
			var e, f;
			return null === d || isNaN(+d) || (v(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = cb(c, d), ib(this, e, a), this
		}
	}
	function ib(b, c, d, e) {
		var f = c._milliseconds,
			g = gb(c._days),
			h = gb(c._months);
		b.isValid() && (e = null == e ? !0 : e, f && b._d.setTime(+b._d + f * d), g && O(b, "Date", N(b, "Date") + g * d), h && fa(b, N(b, "Month") + h * d), e && a.updateOffset(b, g || h))
	}
	function jb(a, b) {
		var c = a || Ja(),
			d = Ra(c, this).startOf("day"),
			e = this.diff(d, "days", !0),
			f = -6 > e ? "sameElse" : -1 > e ? "lastWeek" : 0 > e ? "lastDay" : 1 > e ? "sameDay" : 2 > e ? "nextDay" : 7 > e ? "nextWeek" : "sameElse",
			g = b && (w(b[f]) ? b[f]() : b[f]);
		return this.format(g || this.localeData().calendar(f, this, Ja(c)))
	}
	function kb() {
		return new o(this)
	}
	function lb(a, b) {
		var c = p(a) ? a : Ja(a);
		return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +this > +c : +c < +this.clone().startOf(b)) : !1
	}
	function mb(a, b) {
		var c = p(a) ? a : Ja(a);
		return this.isValid() && c.isValid() ? (b = K(m(b) ? "millisecond" : b), "millisecond" === b ? +c > +this : +this.clone().endOf(b) < +c) : !1
	}
	function nb(a, b, c) {
		return this.isAfter(a, c) && this.isBefore(b, c)
	}
	function ob(a, b) {
		var c, d = p(a) ? a : Ja(a);
		return this.isValid() && d.isValid() ? (b = K(b || "millisecond"), "millisecond" === b ? +this === +d : (c = +d, +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b))) : !1
	}
	function pb(a, b) {
		return this.isSame(a, b) || this.isAfter(a, b)
	}
	function qb(a, b) {
		return this.isSame(a, b) || this.isBefore(a, b)
	}
	function rb(a, b, c) {
		var d, e, f, g;
		return this.isValid() ? (d = Ra(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = sb(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : q(g)) : NaN) : NaN
	}
	function sb(a, b) {
		var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
			f = a.clone().add(e, "months");
		return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d)
	}
	function tb() {
		return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
	}
	function ub() {
		var a = this.clone().utc();
		return 0 < a.year() && a.year() <= 9999 ? w(Date.prototype.toISOString) ? this.toDate().toISOString() : U(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : U(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
	}
	function vb(b) {
		var c = U(this, b || a.defaultFormat);
		return this.localeData().postformat(c)
	}
	function wb(a, b) {
		return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
			to: this,
			from: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}
	function xb(a) {
		return this.from(Ja(), a)
	}
	function yb(a, b) {
		return this.isValid() && (p(a) && a.isValid() || Ja(a).isValid()) ? cb({
			from: this,
			to: a
		}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
	}
	function zb(a) {
		return this.to(Ja(), a)
	}
	function Ab(a) {
		var b;
		return void 0 === a ? this._locale._abbr : (b = H(a), null != b && (this._locale = b), this)
	}
	function Bb() {
		return this._locale
	}
	function Cb(a) {
		switch (a = K(a)) {
		case "year":
			this.month(0);
		case "quarter":
		case "month":
			this.date(1);
		case "week":
		case "isoWeek":
		case "day":
			this.hours(0);
		case "hour":
			this.minutes(0);
		case "minute":
			this.seconds(0);
		case "second":
			this.milliseconds(0)
		}
		return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
	}
	function Db(a) {
		return a = K(a), void 0 === a || "millisecond" === a ? this : this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms")
	}
	function Eb() {
		return +this._d - 6e4 * (this._offset || 0)
	}
	function Fb() {
		return Math.floor(+this / 1e3)
	}
	function Gb() {
		return this._offset ? new Date(+this) : this._d
	}
	function Hb() {
		var a = this;
		return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
	}
	function Ib() {
		var a = this;
		return {
			years: a.year(),
			months: a.month(),
			date: a.date(),
			hours: a.hours(),
			minutes: a.minutes(),
			seconds: a.seconds(),
			milliseconds: a.milliseconds()
		}
	}
	function Jb() {
		return this.isValid() ? this.toISOString() : null
	}
	function Kb() {
		return k(this)
	}
	function Lb() {
		return g({}, j(this))
	}
	function Mb() {
		return j(this).overflow
	}
	function Nb() {
		return {
			input: this._i,
			format: this._f,
			locale: this._locale,
			isUTC: this._isUTC,
			strict: this._strict
		}
	}
	function Ob(a, b) {
		R(0, [a, a.length], 0, b)
	}
	function Pb(a) {
		return Tb.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
	}
	function Qb(a) {
		return Tb.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
	}
	function Rb() {
		return wa(this.year(), 1, 4)
	}
	function Sb() {
		var a = this.localeData()._week;
		return wa(this.year(), a.dow, a.doy)
	}
	function Tb(a, b, c, d, e) {
		var f;
		return null == a ? va(this, d, e).year : (f = wa(a, d, e), b > f && (b = f), Ub.call(this, a, b, c, d, e))
	}
	function Ub(a, b, c, d, e) {
		var f = ua(a, b, c, d, e),
			g = pa(f.year, 0, f.dayOfYear);
		return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
	}
	function Vb(a) {
		return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
	}
	function Wb(a) {
		return va(a, this._week.dow, this._week.doy).week
	}
	function Xb() {
		return this._week.dow
	}
	function Yb() {
		return this._week.doy
	}
	function Zb(a) {
		var b = this.localeData().week(this);
		return null == a ? b : this.add(7 * (a - b), "d")
	}
	function $b(a) {
		var b = va(this, 1, 4).week;
		return null == a ? b : this.add(7 * (a - b), "d")
	}
	function _b(a, b) {
		return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
	}
	function ac(a, b) {
		return c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()]
	}
	function bc(a) {
		return this._weekdaysShort[a.day()]
	}
	function cc(a) {
		return this._weekdaysMin[a.day()]
	}
	function dc(a, b, c) {
		var d, e, f;
		for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; 7 > d; d++) {
			if (e = Ja([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
			if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
			if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
			if (!c && this._weekdaysParse[d].test(a)) return d
		}
	}
	function ec(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
		return null != a ? (a = _b(a, this.localeData()), this.add(a - b, "d")) : b
	}
	function fc(a) {
		if (!this.isValid()) return null != a ? this : NaN;
		var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
		return null == a ? b : this.add(a - b, "d")
	}
	function gc(a) {
		return this.isValid() ? null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) : null != a ? this : NaN
	}
	function hc(a) {
		var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
		return null == a ? b : this.add(a - b, "d")
	}
	function ic() {
		return this.hours() % 12 || 12
	}
	function jc(a, b) {
		R(a, 0, 0, function() {
			return this.localeData().meridiem(this.hours(), this.minutes(), b)
		})
	}
	function kc(a, b) {
		return b._meridiemParse
	}
	function lc(a) {
		return "p" === (a + "").toLowerCase().charAt(0)
	}
	function mc(a, b, c) {
		return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
	}
	function nc(a, b) {
		b[Ee] = r(1e3 * ("0." + a))
	}
	function oc() {
		return this._isUTC ? "UTC" : ""
	}
	function pc() {
		return this._isUTC ? "Coordinated Universal Time" : ""
	}
	function qc(a) {
		return Ja(1e3 * a)
	}
	function rc() {
		return Ja.apply(null, arguments).parseZone()
	}
	function sc(a, b, c) {
		var d = this._calendar[a];
		return w(d) ? d.call(b, c) : d
	}
	function tc(a) {
		var b = this._longDateFormat[a],
			c = this._longDateFormat[a.toUpperCase()];
		return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function(a) {
			return a.slice(1)
		}), this._longDateFormat[a])
	}
	function uc() {
		return this._invalidDate
	}
	function vc(a) {
		return this._ordinal.replace("%d", a)
	}
	function wc(a) {
		return a
	}
	function xc(a, b, c, d) {
		var e = this._relativeTime[c];
		return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
	}
	function yc(a, b) {
		var c = this._relativeTime[a > 0 ? "future" : "past"];
		return w(c) ? c(b) : c.replace(/%s/i, b)
	}
	function zc(a, b, c, d) {
		var e = H(),
			f = h().set(d, b);
		return e[c](f, a)
	}
	function Ac(a, b, c, d, e) {
		if ("number" == typeof a && (b = a, a = void 0), a = a || "", null != b) return zc(a, b, c, e);
		var f, g = [];
		for (f = 0; d > f; f++) g[f] = zc(a, f, c, e);
		return g
	}
	function Bc(a, b) {
		return Ac(a, b, "months", 12, "month")
	}
	function Cc(a, b) {
		return Ac(a, b, "monthsShort", 12, "month")
	}
	function Dc(a, b) {
		return Ac(a, b, "weekdays", 7, "day")
	}
	function Ec(a, b) {
		return Ac(a, b, "weekdaysShort", 7, "day")
	}
	function Fc(a, b) {
		return Ac(a, b, "weekdaysMin", 7, "day")
	}
	function Gc() {
		var a = this._data;
		return this._milliseconds = vf(this._milliseconds), this._days = vf(this._days), this._months = vf(this._months), a.milliseconds = vf(a.milliseconds), a.seconds = vf(a.seconds), a.minutes = vf(a.minutes), a.hours = vf(a.hours), a.months = vf(a.months), a.years = vf(a.years), this
	}
	function Hc(a, b, c, d) {
		var e = cb(b, c);
		return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
	}
	function Ic(a, b) {
		return Hc(this, a, b, 1)
	}
	function Jc(a, b) {
		return Hc(this, a, b, -1)
	}
	function Kc(a) {
		return 0 > a ? Math.floor(a) : Math.ceil(a)
	}
	function Lc() {
		var a, b, c, d, e, f = this._milliseconds,
			g = this._days,
			h = this._months,
			i = this._data;
		return f >= 0 && g >= 0 && h >= 0 || 0 >= f && 0 >= g && 0 >= h || (f += 864e5 * Kc(Nc(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = q(f / 1e3), i.seconds = a % 60, b = q(a / 60), i.minutes = b % 60, c = q(b / 60), i.hours = c % 24, g += q(c / 24), e = q(Mc(g)), h += e, g -= Kc(Nc(e)), d = q(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
	}
	function Mc(a) {
		return 4800 * a / 146097
	}
	function Nc(a) {
		return 146097 * a / 4800
	}
	function Oc(a) {
		var b, c, d = this._milliseconds;
		if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + Mc(b), "month" === a ? c : c / 12;
		switch (b = this._days + Math.round(Nc(this._months)), a) {
		case "week":
			return b / 7 + d / 6048e5;
		case "day":
			return b + d / 864e5;
		case "hour":
			return 24 * b + d / 36e5;
		case "minute":
			return 1440 * b + d / 6e4;
		case "second":
			return 86400 * b + d / 1e3;
		case "millisecond":
			return Math.floor(864e5 * b) + d;
		default:
			throw new Error("Unknown unit " + a)
		}
	}
	function Pc() {
		return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * r(this._months / 12)
	}
	function Qc(a) {
		return function() {
			return this.as(a)
		}
	}
	function Rc(a) {
		return a = K(a), this[a + "s"]()
	}
	function Sc(a) {
		return function() {
			return this._data[a]
		}
	}
	function Tc() {
		return q(this.days() / 7)
	}
	function Uc(a, b, c, d, e) {
		return e.relativeTime(b || 1, !! c, a, d)
	}
	function Vc(a, b, c) {
		var d = cb(a).abs(),
			e = Lf(d.as("s")),
			f = Lf(d.as("m")),
			g = Lf(d.as("h")),
			h = Lf(d.as("d")),
			i = Lf(d.as("M")),
			j = Lf(d.as("y")),
			k = e < Mf.s && ["s", e] || 1 >= f && ["m"] || f < Mf.m && ["mm", f] || 1 >= g && ["h"] || g < Mf.h && ["hh", g] || 1 >= h && ["d"] || h < Mf.d && ["dd", h] || 1 >= i && ["M"] || i < Mf.M && ["MM", i] || 1 >= j && ["y"] || ["yy", j];
		return k[2] = b, k[3] = +a > 0, k[4] = c, Uc.apply(null, k)
	}
	function Wc(a, b) {
		return void 0 === Mf[a] ? !1 : void 0 === b ? Mf[a] : (Mf[a] = b, !0)
	}
	function Xc(a) {
		var b = this.localeData(),
			c = Vc(this, !a, b);
		return a && (c = b.pastFuture(+this, c)), b.postformat(c)
	}
	function Yc() {
		var a, b, c, d = Nf(this._milliseconds) / 1e3,
			e = Nf(this._days),
			f = Nf(this._months);
		a = q(d / 60), b = q(a / 60), d %= 60, a %= 60, c = q(f / 12), f %= 12;
		var g = c,
			h = f,
			i = e,
			j = b,
			k = a,
			l = d,
			m = this.asSeconds();
		return m ? (0 > m ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
	}
	function Zc(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}
	function $c(a, b, c) {
		var d = {
			mm: b ? "��в������н��_��в������н��_��в������н" : "��в������ну_��в������н��_��в������н",
			hh: b ? "г��д����н��_г��д����н��_г��д����н" : "г��д����ну_г��д����н��_г��д����н",
			dd: "д��ень_дн��_д����н",
			MM: "меся��_меся����_меся����ў",
			yy: "год_г��д��_г��доў"
		};
		return "m" === c ? b ? "��в������н��" : "��в������ну" : "h" === c ? b ? "г��д����н��" : "г��д����ну" : a + " " + Zc(d[c], +a)
	}
	function _c(a, b, c) {
		var d = {
			mm: "munutenn",
			MM: "miz",
			dd: "devezh"
		};
		return a + " " + cd(d[c], a)
	}
	function ad(a) {
		switch (bd(a)) {
		case 1:
		case 3:
		case 4:
		case 5:
		case 9:
			return a + " bloaz";
		default:
			return a + " vloaz"
		}
	}
	function bd(a) {
		return a > 9 ? bd(a % 10) : a
	}
	function cd(a, b) {
		return 2 === b ? dd(a) : a
	}
	function dd(a) {
		var b = {
			m: "v",
			b: "v",
			d: "z"
		};
		return void 0 === b[a.charAt(0)] ? a : b[a.charAt(0)] + a.substring(1)
	}
	function ed(a, b, c) {
		var d = a + " ";
		switch (c) {
		case "m":
			return b ? "jedna minuta" : "jedne minute";
		case "mm":
			return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
		case "h":
			return b ? "jedan sat" : "jednog sata";
		case "hh":
			return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
		case "dd":
			return d += 1 === a ? "dan" : "dana";
		case "MM":
			return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
		case "yy":
			return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}
	function fd(a) {
		return a > 1 && 5 > a && 1 !== ~~ (a / 10)
	}
	function gd(a, b, c, d) {
		var e = a + " ";
		switch (c) {
		case "s":
			return b || d ? "pár sekund" : "pár sekundami";
		case "m":
			return b ? "minuta" : d ? "minutu" : "minutou";
		case "mm":
			return b || d ? e + (fd(a) ? "minuty" : "minut") : e + "minutami";
		case "h":
			return b ? "hodina" : d ? "hodinu" : "hodinou";
		case "hh":
			return b || d ? e + (fd(a) ? "hodiny" : "hodin") : e + "hodinami";
		case "d":
			return b || d ? "den" : "dnem";
		case "dd":
			return b || d ? e + (fd(a) ? "dny" : "dn��") : e + "dny";
		case "M":
			return b || d ? "m��s��c" : "m��s��cem";
		case "MM":
			return b || d ? e + (fd(a) ? "m��s��ce" : "m��s��ců") : e + "m��s��ci";
		case "y":
			return b || d ? "rok" : "rokem";
		case "yy":
			return b || d ? e + (fd(a) ? "roky" : "let") : e + "lety"
		}
	}
	function hd(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}
	function id(a, b, c, d) {
		var e = {
			m: ["eine Minute", "einer Minute"],
			h: ["eine Stunde", "einer Stunde"],
			d: ["ein Tag", "einem Tag"],
			dd: [a + " Tage", a + " Tagen"],
			M: ["ein Monat", "einem Monat"],
			MM: [a + " Monate", a + " Monaten"],
			y: ["ein Jahr", "einem Jahr"],
			yy: [a + " Jahre", a + " Jahren"]
		};
		return b ? e[c][0] : e[c][1]
	}
	function jd(a, b, c, d) {
		var e = {
			s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
			m: ["ühe minuti", "üks minut"],
			mm: [a + " minuti", a + " minutit"],
			h: ["ühe tunni", "tund aega", "üks tund"],
			hh: [a + " tunni", a + " tundi"],
			d: ["ühe p��eva", "üks p��ev"],
			M: ["kuu aja", "kuu aega", "üks kuu"],
			MM: [a + " kuu", a + " kuud"],
			y: ["ühe aasta", "aasta", "üks aasta"],
			yy: [a + " aasta", a + " aastat"]
		};
		return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1]
	}
	function kd(a, b, c, d) {
		var e = "";
		switch (c) {
		case "s":
			return d ? "muutaman sekunnin" : "muutama sekunti";
		case "m":
			return d ? "minuutin" : "minuutti";
		case "mm":
			e = d ? "minuutin" : "minuuttia";
			break;
		case "h":
			return d ? "tunnin" : "tunti";
		case "hh":
			e = d ? "tunnin" : "tuntia";
			break;
		case "d":
			return d ? "p��iv��n" : "p��iv��";
		case "dd":
			e = d ? "p��iv��n" : "p��iv����";
			break;
		case "M":
			return d ? "kuukauden" : "kuukausi";
		case "MM":
			e = d ? "kuukauden" : "kuukautta";
			break;
		case "y":
			return d ? "vuoden" : "vuosi";
		case "yy":
			e = d ? "vuoden" : "vuotta"
		}
		return e = ld(a, d) + " " + e
	}
	function ld(a, b) {
		return 10 > a ? b ? kg[a] : jg[a] : a
	}
	function md(a, b, c) {
		var d = a + " ";
		switch (c) {
		case "m":
			return b ? "jedna minuta" : "jedne minute";
		case "mm":
			return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta";
		case "h":
			return b ? "jedan sat" : "jednog sata";
		case "hh":
			return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati";
		case "dd":
			return d += 1 === a ? "dan" : "dana";
		case "MM":
			return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci";
		case "yy":
			return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina"
		}
	}
	function nd(a, b, c, d) {
		var e = a;
		switch (c) {
		case "s":
			return d || b ? "n��hány másodperc" : "n��hány másodperce";
		case "m":
			return "egy" + (d || b ? " perc" : " perce");
		case "mm":
			return e + (d || b ? " perc" : " perce");
		case "h":
			return "egy" + (d || b ? " óra" : " órája");
		case "hh":
			return e + (d || b ? " óra" : " órája");
		case "d":
			return "egy" + (d || b ? " nap" : " napja");
		case "dd":
			return e + (d || b ? " nap" : " napja");
		case "M":
			return "egy" + (d || b ? " hónap" : " hónapja");
		case "MM":
			return e + (d || b ? " hónap" : " hónapja");
		case "y":
			return "egy" + (d || b ? " ��v" : " ��ve");
		case "yy":
			return e + (d || b ? " ��v" : " ��ve")
		}
		return ""
	}
	function od(a) {
		return (a ? "" : "[múlt] ") + "[" + ug[this.day()] + "] LT[-kor]"
	}
	function pd(a) {
		return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0
	}
	function qd(a, b, c, d) {
		var e = a + " ";
		switch (c) {
		case "s":
			return b || d ? "nokkrar sekúndur" : "nokkrum sekúndum";
		case "m":
			return b ? "m��núta" : "m��nútu";
		case "mm":
			return pd(a) ? e + (b || d ? "m��nútur" : "m��nútum") : b ? e + "m��núta" : e + "m��nútu";
		case "hh":
			return pd(a) ? e + (b || d ? "klukkustundir" : "klukkustundum") : e + "klukkustund";
		case "d":
			return b ? "dagur" : d ? "dag" : "degi";
		case "dd":
			return pd(a) ? b ? e + "dagar" : e + (d ? "daga" : "d��gum") : b ? e + "dagur" : e + (d ? "dag" : "degi");
		case "M":
			return b ? "mánu��ur" : d ? "mánu��" : "mánu��i";
		case "MM":
			return pd(a) ? b ? e + "mánu��ir" : e + (d ? "mánu��i" : "mánu��um") : b ? e + "mánu��ur" : e + (d ? "mánu��" : "mánu��i");
		case "y":
			return b || d ? "ár" : "ári";
		case "yy":
			return pd(a) ? e + (b || d ? "ár" : "árum") : e + (b || d ? "ár" : "ári")
		}
	}
	function rd(a, b, c, d) {
		var e = {
			m: ["eng Minutt", "enger Minutt"],
			h: ["eng Stonn", "enger Stonn"],
			d: ["een Dag", "engem Dag"],
			M: ["ee Mount", "engem Mount"],
			y: ["ee Joer", "engem Joer"]
		};
		return b ? e[c][0] : e[c][1]
	}
	function sd(a) {
		var b = a.substr(0, a.indexOf(" "));
		return ud(b) ? "a " + a : "an " + a
	}
	function td(a) {
		var b = a.substr(0, a.indexOf(" "));
		return ud(b) ? "viru " + a : "virun " + a
	}
	function ud(a) {
		if (a = parseInt(a, 10), isNaN(a)) return !1;
		if (0 > a) return !0;
		if (10 > a) return a >= 4 && 7 >= a ? !0 : !1;
		if (100 > a) {
			var b = a % 10,
				c = a / 10;
			return ud(0 === b ? c : b)
		}
		if (1e4 > a) {
			for (; a >= 10;) a /= 10;
			return ud(a)
		}
		return a /= 1e3, ud(a)
	}
	function vd(a, b, c, d) {
		return b ? "kelios sekund��s" : d ? "kelių sekundžių" : "kelias sekundes"
	}
	function wd(a, b, c, d) {
		return b ? yd(c)[0] : d ? yd(c)[1] : yd(c)[2]
	}
	function xd(a) {
		return a % 10 === 0 || a > 10 && 20 > a
	}
	function yd(a) {
		return wg[a].split("_")
	}
	function zd(a, b, c, d) {
		var e = a + " ";
		return 1 === a ? e + wd(a, b, c[0], d) : b ? e + (xd(a) ? yd(c)[1] : yd(c)[0]) : d ? e + yd(c)[1] : e + (xd(a) ? yd(c)[1] : yd(c)[2])
	}
	function Ad(a, b, c) {
		return c ? b % 10 === 1 && 11 !== b ? a[2] : a[3] : b % 10 === 1 && 11 !== b ? a[0] : a[1]
	}
	function Bd(a, b, c) {
		return a + " " + Ad(xg[c], a, b)
	}
	function Cd(a, b, c) {
		return Ad(xg[c], a, b)
	}
	function Dd(a, b) {
		return b ? "dažas sekundes" : "dažām sekund��m"
	}
	function Ed(a, b, c, d) {
		var e = "";
		if (b) switch (c) {
		case "s":
			e = "���������ी ���������������";
			break;
		case "m":
			e = "������ ���������������";
			break;
		case "mm":
			e = "%d ������������������";
			break;
		case "h":
			e = "������ ���������";
			break;
		case "hh":
			e = "%d ���������";
			break;
		case "d":
			e = "������ ������������";
			break;
		case "dd":
			e = "%d ������������";
			break;
		case "M":
			e = "������ ���������������";
			break;
		case "MM":
			e = "%d ���������������";
			break;
		case "y":
			e = "������ ������्���";
			break;
		case "yy":
			e = "%d ������्������"
		} else switch (c) {
		case "s":
			e = "���������ी ���������������������";
			break;
		case "m":
			e = "��������� ������������������";
			break;
		case "mm":
			e = "%d ���������������������";
			break;
		case "h":
			e = "��������� ������������";
			break;
		case "hh":
			e = "%d ���������������";
			break;
		case "d":
			e = "��������� ���������������";
			break;
		case "dd":
			e = "%d ������������������";
			break;
		case "M":
			e = "��������� ������������्������";
			break;
		case "MM":
			e = "%d ������������्���������";
			break;
		case "y":
			e = "��������� ������्������";
			break;
		case "yy":
			e = "%d ������्���������"
		}
		return e.replace(/%d/i, a)
	}
	function Fd(a) {
		return 5 > a % 10 && a % 10 > 1 && ~~ (a / 10) % 10 !== 1
	}
	function Gd(a, b, c) {
		var d = a + " ";
		switch (c) {
		case "m":
			return b ? "minuta" : "minut��";
		case "mm":
			return d + (Fd(a) ? "minuty" : "minut");
		case "h":
			return b ? "godzina" : "godzin��";
		case "hh":
			return d + (Fd(a) ? "godziny" : "godzin");
		case "MM":
			return d + (Fd(a) ? "miesi��ce" : "miesi��cy");
		case "yy":
			return d + (Fd(a) ? "lata" : "lat")
		}
	}
	function Hd(a, b, c) {
		var d = {
			mm: "minute",
			hh: "ore",
			dd: "zile",
			MM: "luni",
			yy: "ani"
		},
			e = " ";
		return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c]
	}
	function Id(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}
	function Jd(a, b, c) {
		var d = {
			mm: b ? "мину����_мину����_мину��" : "мину��у_мину����_мину��",
			hh: "����с_����с��_����сов",
			dd: "день_дня_дне��",
			MM: "меся��_меся����_меся��ев",
			yy: "год_год��_��е��"
		};
		return "m" === c ? b ? "мину����" : "мину��у" : a + " " + Id(d[c], +a)
	}
	function Kd(a) {
		return a > 1 && 5 > a
	}
	function Ld(a, b, c, d) {
		var e = a + " ";
		switch (c) {
		case "s":
			return b || d ? "pár sekúnd" : "pár sekundami";
		case "m":
			return b ? "minúta" : d ? "minútu" : "minútou";
		case "mm":
			return b || d ? e + (Kd(a) ? "minúty" : "minút") : e + "minútami";
		case "h":
			return b ? "hodina" : d ? "hodinu" : "hodinou";
		case "hh":
			return b || d ? e + (Kd(a) ? "hodiny" : "hod��n") : e + "hodinami";
		case "d":
			return b || d ? "de��" : "d��om";
		case "dd":
			return b || d ? e + (Kd(a) ? "dni" : "dn��") : e + "d��ami";
		case "M":
			return b || d ? "mesiac" : "mesiacom";
		case "MM":
			return b || d ? e + (Kd(a) ? "mesiace" : "mesiacov") : e + "mesiacmi";
		case "y":
			return b || d ? "rok" : "rokom";
		case "yy":
			return b || d ? e + (Kd(a) ? "roky" : "rokov") : e + "rokmi"
		}
	}
	function Md(a, b, c, d) {
		var e = a + " ";
		switch (c) {
		case "s":
			return b || d ? "nekaj sekund" : "nekaj sekundami";
		case "m":
			return b ? "ena minuta" : "eno minuto";
		case "mm":
			return e += 1 === a ? b ? "minuta" : "minuto" : 2 === a ? b || d ? "minuti" : "minutama" : 5 > a ? b || d ? "minute" : "minutami" : b || d ? "minut" : "minutami";
		case "h":
			return b ? "ena ura" : "eno uro";
		case "hh":
			return e += 1 === a ? b ? "ura" : "uro" : 2 === a ? b || d ? "uri" : "urama" : 5 > a ? b || d ? "ure" : "urami" : b || d ? "ur" : "urami";
		case "d":
			return b || d ? "en dan" : "enim dnem";
		case "dd":
			return e += 1 === a ? b || d ? "dan" : "dnem" : 2 === a ? b || d ? "dni" : "dnevoma" : b || d ? "dni" : "dnevi";
		case "M":
			return b || d ? "en mesec" : "enim mesecem";
		case "MM":
			return e += 1 === a ? b || d ? "mesec" : "mesecem" : 2 === a ? b || d ? "meseca" : "mesecema" : 5 > a ? b || d ? "mesece" : "meseci" : b || d ? "mesecev" : "meseci";
		case "y":
			return b || d ? "eno leto" : "enim letom";
		case "yy":
			return e += 1 === a ? b || d ? "leto" : "letom" : 2 === a ? b || d ? "leti" : "letoma" : 5 > a ? b || d ? "leta" : "leti" : b || d ? "let" : "leti"
		}
	}
	function Nd(a) {
		var b = a;
		return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "leS" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "waQ" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "nem" : b + " pIq"
	}
	function Od(a) {
		var b = a;
		return b = -1 !== a.indexOf("jaj") ? b.slice(0, -3) + "Hu���" : -1 !== a.indexOf("jar") ? b.slice(0, -3) + "wen" : -1 !== a.indexOf("DIS") ? b.slice(0, -3) + "ben" : b + " ret"
	}
	function Pd(a, b, c, d) {
		var e = Qd(a);
		switch (c) {
		case "mm":
			return e + " tup";
		case "hh":
			return e + " rep";
		case "dd":
			return e + " jaj";
		case "MM":
			return e + " jar";
		case "yy":
			return e + " DIS"
		}
	}
	function Qd(a) {
		var b = Math.floor(a % 1e3 / 100),
			c = Math.floor(a % 100 / 10),
			d = a % 10,
			e = "";
		return b > 0 && (e += Sg[b] + "vatlh"), c > 0 && (e += ("" !== e ? " " : "") + Sg[c] + "maH"), d > 0 && (e += ("" !== e ? " " : "") + Sg[d]), "" === e ? "pagh" : e
	}
	function Rd(a, b, c, d) {
		var e = {
			s: ["viensas secunds", "'iensas secunds"],
			m: ["'n m��ut", "'iens m��ut"],
			mm: [a + " m��uts", "" + a + " m��uts"],
			h: ["'n þora", "'iensa þora"],
			hh: [a + " þoras", "" + a + " þoras"],
			d: ["'n ziua", "'iensa ziua"],
			dd: [a + " ziuas", "" + a + " ziuas"],
			M: ["'n mes", "'iens mes"],
			MM: [a + " mesen", "" + a + " mesen"],
			y: ["'n ar", "'iens ar"],
			yy: [a + " ars", "" + a + " ars"]
		};
		return d ? e[c][0] : b ? e[c][0] : e[c][1]
	}
	function Sd(a, b) {
		var c = a.split("_");
		return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2]
	}
	function Td(a, b, c) {
		var d = {
			mm: b ? "��ви��ин��_��ви��ини_��ви��ин" : "��ви��ину_��ви��ини_��ви��ин",
			hh: b ? "годин��_години_годин" : "годину_години_годин",
			dd: "день_дн��_дн��в",
			MM: "м��ся��ь_м��ся����_м��ся����в",
			yy: "р��к_роки_рок��в"
		};
		return "m" === c ? b ? "��ви��ин��" : "��ви��ину" : "h" === c ? b ? "годин��" : "годину" : a + " " + Sd(d[c], +a)
	}
	function Ud(a, b) {
		var c = {
			nominative: "нед����я_понед����ок_в��в��орок_серед��_��е��вер_п���я��ни��я_су��о����".split("_"),
			accusative: "нед����ю_понед����ок_в��в��орок_середу_��е��вер_п���я��ни��ю_су��о��у".split("_"),
			genitive: "нед������_понед����к��_в��в��орк��_середи_��е��верг��_п���я��ни����_су��о��и".split("_")
		},
			d = /(\[[��вУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:мину��о��|н��с��упно��)??\]?dddd/.test(b) ? "genitive" : "nominative";
		return c[d][a.day()]
	}
	function Vd(a) {
		return function() {
			return a + "о" + (11 === this.hours() ? "��" : "") + "] LT"
		}
	}
	var Wd, Xd = a.momentProperties = [],
		Yd = !1,
		Zd = {};
	a.suppressDeprecationWarnings = !1;
	var $d, _d = {},
		ae = {},
		be = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
		ce = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
		de = {},
		ee = {},
		fe = /\d/,
		ge = /\d\d/,
		he = /\d{3}/,
		ie = /\d{4}/,
		je = /[+-]?\d{6}/,
		ke = /\d\d?/,
		le = /\d\d\d\d?/,
		me = /\d\d\d\d\d\d?/,
		ne = /\d{1,3}/,
		oe = /\d{1,4}/,
		pe = /[+-]?\d{1,6}/,
		qe = /\d+/,
		re = /[+-]?\d+/,
		se = /Z|[+-]\d\d:?\d\d/gi,
		te = /Z|[+-]\d\d(?::?\d\d)?/gi,
		ue = /[+-]?\d+(\.\d{1,3})?/,
		ve = /[0-9]*['a-z -׿܀-퟿豈-﷏ﷰ-￯]+|[؀-ۿ\/]+(\s*?[؀-ۿ]+){1,2}/i,
		we = {},
		xe = {},
		ye = 0,
		ze = 1,
		Ae = 2,
		Be = 3,
		Ce = 4,
		De = 5,
		Ee = 6,
		Fe = 7,
		Ge = 8;
	R("M", ["MM", 2], "Mo", function() {
		return this.month() + 1
	}), R("MMM", 0, 0, function(a) {
		return this.localeData().monthsShort(this, a)
	}), R("MMMM", 0, 0, function(a) {
		return this.localeData().months(this, a)
	}), J("month", "M"), W("M", ke), W("MM", ke, ge), W("MMM", function(a, b) {
		return b.monthsShortRegex(a)
	}), W("MMMM", function(a, b) {
		return b.monthsRegex(a)
	}), $(["M", "MM"], function(a, b) {
		b[ze] = r(a) - 1
	}), $(["MMM", "MMMM"], function(a, b, c, d) {
		var e = c._locale.monthsParse(a, d, c._strict);
		null != e ? b[ze] = e : j(c).invalidMonth = a
	});
	var He = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/,
		Ie = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
		Je = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
		Ke = ve,
		Le = ve,
		Me = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		Ne = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?/,
		Oe = /Z|[+-]\d\d(?::?\d\d)?/,
		Pe = [
			["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
			["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
			["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
			["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
			["YYYY-DDD", /\d{4}-\d{3}/],
			["YYYY-MM", /\d{4}-\d\d/, !1],
			["YYYYYYMMDD", /[+-]\d{10}/],
			["YYYYMMDD", /\d{8}/],
			["GGGG[W]WWE", /\d{4}W\d{3}/],
			["GGGG[W]WW", /\d{4}W\d{2}/, !1],
			["YYYYDDD", /\d{7}/]
		],
		Qe = [
			["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
			["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
			["HH:mm:ss", /\d\d:\d\d:\d\d/],
			["HH:mm", /\d\d:\d\d/],
			["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
			["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
			["HHmmss", /\d\d\d\d\d\d/],
			["HHmm", /\d\d\d\d/],
			["HH", /\d\d/]
		],
		Re = /^\/?Date\((\-?\d+)/i;
	a.createFromInputFallback = u("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(a) {
		a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
	}), R("Y", 0, 0, function() {
		var a = this.year();
		return 9999 >= a ? "" + a : "+" + a
	}), R(0, ["YY", 2], 0, function() {
		return this.year() % 100
	}), R(0, ["YYYY", 4], 0, "year"), R(0, ["YYYYY", 5], 0, "year"), R(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), W("Y", re), W("YY", ke, ge), W("YYYY", oe, ie), W("YYYYY", pe, je), W("YYYYYY", pe, je), $(["YYYYY", "YYYYYY"], ye), $("YYYY", function(b, c) {
		c[ye] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b)
	}), $("YY", function(b, c) {
		c[ye] = a.parseTwoDigitYear(b)
	}), $("Y", function(a, b) {
		b[ye] = parseInt(a, 10)
	}), a.parseTwoDigitYear = function(a) {
		return r(a) + (r(a) > 68 ? 1900 : 2e3)
	};
	var Se = M("FullYear", !1);
	a.ISO_8601 = function() {};
	var Te = u("moment().min is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
		var a = Ja.apply(null, arguments);
		return this.isValid() && a.isValid() ? this > a ? this : a : l()
	}),
		Ue = u("moment().max is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
			var a = Ja.apply(null, arguments);
			return this.isValid() && a.isValid() ? a > this ? this : a : l()
		}),
		Ve = function() {
			return Date.now ? Date.now() : +new Date
		};
	Pa("Z", ":"), Pa("ZZ", ""), W("Z", te), W("ZZ", te), $(["Z", "ZZ"], function(a, b, c) {
		c._useUTC = !0, c._tzm = Qa(te, a)
	});
	var We = /([\+\-]|\d\d)/gi;
	a.updateOffset = function() {};
	var Xe = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?\d*)?$/,
		Ye = /^(-)?P(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)W)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?$/;
	cb.fn = Na.prototype;
	var Ze = hb(1, "add"),
		$e = hb(-1, "subtract");
	a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
	var _e = u("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(a) {
		return void 0 === a ? this.localeData() : this.locale(a)
	});
	R(0, ["gg", 2], 0, function() {
		return this.weekYear() % 100
	}), R(0, ["GG", 2], 0, function() {
		return this.isoWeekYear() % 100
	}), Ob("gggg", "weekYear"), Ob("ggggg", "weekYear"), Ob("GGGG", "isoWeekYear"), Ob("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), W("G", re), W("g", re), W("GG", ke, ge), W("gg", ke, ge), W("GGGG", oe, ie), W("gggg", oe, ie), W("GGGGG", pe, je), W("ggggg", pe, je), _(["gggg", "ggggg", "GGGG", "GGGGG"], function(a, b, c, d) {
		b[d.substr(0, 2)] = r(a)
	}), _(["gg", "GG"], function(b, c, d, e) {
		c[e] = a.parseTwoDigitYear(b)
	}), R("Q", 0, "Qo", "quarter"), J("quarter", "Q"), W("Q", fe), $("Q", function(a, b) {
		b[ze] = 3 * (r(a) - 1)
	}), R("w", ["ww", 2], "wo", "week"), R("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), W("w", ke), W("ww", ke, ge), W("W", ke), W("WW", ke, ge), _(["w", "ww", "W", "WW"], function(a, b, c, d) {
		b[d.substr(0, 1)] = r(a)
	});
	var af = {
		dow: 0,
		doy: 6
	};
	R("D", ["DD", 2], "Do", "date"), J("date", "D"), W("D", ke), W("DD", ke, ge), W("Do", function(a, b) {
		return a ? b._ordinalParse : b._ordinalParseLenient
	}), $(["D", "DD"], Ae), $("Do", function(a, b) {
		b[Ae] = r(a.match(ke)[0], 10)
	});
	var bf = M("Date", !0);
	R("d", 0, "do", "day"), R("dd", 0, 0, function(a) {
		return this.localeData().weekdaysMin(this, a)
	}), R("ddd", 0, 0, function(a) {
		return this.localeData().weekdaysShort(this, a)
	}), R("dddd", 0, 0, function(a) {
		return this.localeData().weekdays(this, a)
	}), R("e", 0, 0, "weekday"), R("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), W("d", ke), W("e", ke), W("E", ke), W("dd", ve), W("ddd", ve), W("dddd", ve), _(["dd", "ddd", "dddd"], function(a, b, c, d) {
		var e = c._locale.weekdaysParse(a, d, c._strict);
		null != e ? b.d = e : j(c).invalidWeekday = a
	}), _(["d", "e", "E"], function(a, b, c, d) {
		b[d] = r(a)
	});
	var cf = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
		df = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
		ef = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
	R("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), W("DDD", ne), W("DDDD", he), $(["DDD", "DDDD"], function(a, b, c) {
		c._dayOfYear = r(a)
	}), R("H", ["HH", 2], 0, "hour"), R("h", ["hh", 2], 0, ic), R("hmm", 0, 0, function() {
		return "" + ic.apply(this) + Q(this.minutes(), 2)
	}), R("hmmss", 0, 0, function() {
		return "" + ic.apply(this) + Q(this.minutes(), 2) + Q(this.seconds(), 2)
	}), R("Hmm", 0, 0, function() {
		return "" + this.hours() + Q(this.minutes(), 2)
	}), R("Hmmss", 0, 0, function() {
		return "" + this.hours() + Q(this.minutes(), 2) + Q(this.seconds(), 2)
	}), jc("a", !0), jc("A", !1), J("hour", "h"), W("a", kc), W("A", kc), W("H", ke), W("h", ke), W("HH", ke, ge), W("hh", ke, ge), W("hmm", le), W("hmmss", me), W("Hmm", le), W("Hmmss", me), $(["H", "HH"], Be), $(["a", "A"], function(a, b, c) {
		c._isPm = c._locale.isPM(a), c._meridiem = a
	}), $(["h", "hh"], function(a, b, c) {
		b[Be] = r(a), j(c).bigHour = !0
	}), $("hmm", function(a, b, c) {
		var d = a.length - 2;
		b[Be] = r(a.substr(0, d)), b[Ce] = r(a.substr(d)), j(c).bigHour = !0
	}), $("hmmss", function(a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[Be] = r(a.substr(0, d)), b[Ce] = r(a.substr(d, 2)), b[De] = r(a.substr(e)), j(c).bigHour = !0
	}), $("Hmm", function(a, b, c) {
		var d = a.length - 2;
		b[Be] = r(a.substr(0, d)), b[Ce] = r(a.substr(d))
	}), $("Hmmss", function(a, b, c) {
		var d = a.length - 4,
			e = a.length - 2;
		b[Be] = r(a.substr(0, d)), b[Ce] = r(a.substr(d, 2)), b[De] = r(a.substr(e))
	});
	var ff = /[ap]\.?m?\.?/i,
		gf = M("Hours", !0);
	R("m", ["mm", 2], 0, "minute"), J("minute", "m"), W("m", ke), W("mm", ke, ge), $(["m", "mm"], Ce);
	var hf = M("Minutes", !1);
	R("s", ["ss", 2], 0, "second"), J("second", "s"), W("s", ke), W("ss", ke, ge), $(["s", "ss"], De);
	var jf = M("Seconds", !1);
	R("S", 0, 0, function() {
		return ~~ (this.millisecond() / 100)
	}), R(0, ["SS", 2], 0, function() {
		return ~~ (this.millisecond() / 10)
	}), R(0, ["SSS", 3], 0, "millisecond"), R(0, ["SSSS", 4], 0, function() {
		return 10 * this.millisecond()
	}), R(0, ["SSSSS", 5], 0, function() {
		return 100 * this.millisecond()
	}), R(0, ["SSSSSS", 6], 0, function() {
		return 1e3 * this.millisecond()
	}), R(0, ["SSSSSSS", 7], 0, function() {
		return 1e4 * this.millisecond()
	}), R(0, ["SSSSSSSS", 8], 0, function() {
		return 1e5 * this.millisecond()
	}), R(0, ["SSSSSSSSS", 9], 0, function() {
		return 1e6 * this.millisecond()
	}), J("millisecond", "ms"), W("S", ne, fe), W("SS", ne, ge), W("SSS", ne, he);
	var kf;
	for (kf = "SSSS"; kf.length <= 9; kf += "S") W(kf, qe);
	for (kf = "S"; kf.length <= 9; kf += "S") $(kf, nc);
	var lf = M("Milliseconds", !1);
	R("z", 0, 0, "zoneAbbr"), R("zz", 0, 0, "zoneName");
	var mf = o.prototype;
	mf.add = Ze, mf.calendar = jb, mf.clone = kb, mf.diff = rb, mf.endOf = Db, mf.format = vb, mf.from = wb, mf.fromNow = xb, mf.to = yb, mf.toNow = zb, mf.get = P, mf.invalidAt = Mb, mf.isAfter = lb, mf.isBefore = mb, mf.isBetween = nb, mf.isSame = ob, mf.isSameOrAfter = pb, mf.isSameOrBefore = qb, mf.isValid = Kb, mf.lang = _e, mf.locale = Ab, mf.localeData = Bb, mf.max = Ue, mf.min = Te, mf.parsingFlags = Lb, mf.set = P, mf.startOf = Cb, mf.subtract = $e, mf.toArray = Hb, mf.toObject = Ib, mf.toDate = Gb, mf.toISOString = ub, mf.toJSON = Jb, mf.toString = tb, mf.unix = Fb, mf.valueOf = Eb, mf.creationData = Nb, mf.year = Se, mf.isLeapYear = sa, mf.weekYear = Pb, mf.isoWeekYear = Qb, mf.quarter = mf.quarters = Vb, mf.month = ga, mf.daysInMonth = ha, mf.week = mf.weeks = Zb, mf.isoWeek = mf.isoWeeks = $b, mf.weeksInYear = Sb, mf.isoWeeksInYear = Rb, mf.date = bf, mf.day = mf.days = ec, mf.weekday = fc, mf.isoWeekday = gc, mf.dayOfYear = hc, mf.hour = mf.hours = gf, mf.minute = mf.minutes = hf, mf.second = mf.seconds = jf, mf.millisecond = mf.milliseconds = lf, mf.utcOffset = Ta, mf.utc = Va, mf.local = Wa, mf.parseZone = Xa, mf.hasAlignedHourOffset = Ya, mf.isDST = Za, mf.isDSTShifted = $a, mf.isLocal = _a, mf.isUtcOffset = ab, mf.isUtc = bb, mf.isUTC = bb, mf.zoneAbbr = oc, mf.zoneName = pc, mf.dates = u("dates accessor is deprecated. Use date instead.", bf), mf.months = u("months accessor is deprecated. Use month instead", ga), mf.years = u("years accessor is deprecated. Use year instead", Se), mf.zone = u("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", Ua);
	var nf = mf,
		of = {
			sameDay: "[Today at] LT",
			nextDay: "[Tomorrow at] LT",
			nextWeek: "dddd [at] LT",
			lastDay: "[Yesterday at] LT",
			lastWeek: "[Last] dddd [at] LT",
			sameElse: "L"
		},
		pf = {
			LTS: "h:mm:ss A",
			LT: "h:mm A",
			L: "MM/DD/YYYY",
			LL: "MMMM D, YYYY",
			LLL: "MMMM D, YYYY h:mm A",
			LLLL: "dddd, MMMM D, YYYY h:mm A"
		},
		qf = "Invalid date",
		rf = "%d",
		sf = /\d{1,2}/,
		tf = {
			future: "in %s",
			past: "%s ago",
			s: "a few seconds",
			m: "a minute",
			mm: "%d minutes",
			h: "an hour",
			hh: "%d hours",
			d: "a day",
			dd: "%d days",
			M: "a month",
			MM: "%d months",
			y: "a year",
			yy: "%d years"
		},
		uf = A.prototype;
	uf._calendar = of, uf.calendar = sc, uf._longDateFormat = pf, uf.longDateFormat = tc, uf._invalidDate = qf, uf.invalidDate = uc, uf._ordinal = rf, uf.ordinal = vc, uf._ordinalParse = sf, uf.preparse = wc, uf.postformat = wc, uf._relativeTime = tf, uf.relativeTime = xc, uf.pastFuture = yc, uf.set = y, uf.months = ca, uf._months = Ie, uf.monthsShort = da, uf._monthsShort = Je, uf.monthsParse = ea, uf._monthsRegex = Le, uf.monthsRegex = ja, uf._monthsShortRegex = Ke, uf.monthsShortRegex = ia, uf.week = Wb, uf._week = af, uf.firstDayOfYear = Yb, uf.firstDayOfWeek = Xb, uf.weekdays = ac, uf._weekdays = cf, uf.weekdaysMin = cc, uf._weekdaysMin = ef, uf.weekdaysShort = bc, uf._weekdaysShort = df, uf.weekdaysParse = dc, uf.isPM = lc, uf._meridiemParse = ff, uf.meridiem = mc, E("en", {
		ordinalParse: /\d{1,2}(th|st|nd|rd)/,
		ordinal: function(a) {
			var b = a % 10,
				c = 1 === r(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
			return a + c
		}
	}), a.lang = u("moment.lang is deprecated. Use moment.locale instead.", E), a.langData = u("moment.langData is deprecated. Use moment.localeData instead.", H);
	var vf = Math.abs,
		wf = Qc("ms"),
		xf = Qc("s"),
		yf = Qc("m"),
		zf = Qc("h"),
		Af = Qc("d"),
		Bf = Qc("w"),
		Cf = Qc("M"),
		Df = Qc("y"),
		Ef = Sc("milliseconds"),
		Ff = Sc("seconds"),
		Gf = Sc("minutes"),
		Hf = Sc("hours"),
		If = Sc("days"),
		Jf = Sc("months"),
		Kf = Sc("years"),
		Lf = Math.round,
		Mf = {
			s: 45,
			m: 45,
			h: 22,
			d: 26,
			M: 11
		},
		Nf = Math.abs,
		Of = Na.prototype;
	Of.abs = Gc, Of.add = Ic, Of.subtract = Jc, Of.as = Oc, Of.asMilliseconds = wf, Of.asSeconds = xf, Of.asMinutes = yf, Of.asHours = zf, Of.asDays = Af, Of.asWeeks = Bf, Of.asMonths = Cf, Of.asYears = Df, Of.valueOf = Pc, Of._bubble = Lc, Of.get = Rc, Of.milliseconds = Ef, Of.seconds = Ff, Of.minutes = Gf, Of.hours = Hf, Of.days = If, Of.weeks = Tc, Of.months = Jf, Of.years = Kf, Of.humanize = Xc, Of.toISOString = Yc, Of.toString = Yc, Of.toJSON = Yc, Of.locale = Ab, Of.localeData = Bb, Of.toIsoString = u("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Yc), Of.lang = _e, R("X", 0, 0, "unix"), R("x", 0, 0, "valueOf"), W("x", re), W("X", ue), $("X", function(a, b, c) {
		c._d = new Date(1e3 * parseFloat(a, 10))
	}), $("x", function(a, b, c) {
		c._d = new Date(r(a))
	}), a.version = "2.12.0", b(Ja), a.fn = nf, a.min = La, a.max = Ma, a.now = Ve, a.utc = h, a.unix = qc, a.months = Bc, a.isDate = d, a.locale = E, a.invalid = l, a.duration = cb, a.isMoment = p, a.weekdays = Dc, a.parseZone = rc, a.localeData = H, a.isDuration = Oa, a.monthsShort = Cc, a.weekdaysMin = Fc, a.defineLocale = F, a.updateLocale = G, a.locales = I, a.weekdaysShort = Ec, a.normalizeUnits = K, a.relativeTimeThreshold = Wc, a.prototype = nf;
	var Pf = a,
		Qf = (Pf.defineLocale("af", {
			months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
			weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
			weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
			meridiemParse: /vm|nm/i,
			isPM: function(a) {
				return /^nm$/i.test(a)
			},
			meridiem: function(a, b, c) {
				return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Vandag om] LT",
				nextDay: "[Môre om] LT",
				nextWeek: "dddd [om] LT",
				lastDay: "[Gister om] LT",
				lastWeek: "[Laas] dddd [om] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oor %s",
				past: "%s gelede",
				s: "'n paar sekondes",
				m: "'n minuut",
				mm: "%d minute",
				h: "'n uur",
				hh: "%d ure",
				d: "'n dag",
				dd: "%d dae",
				M: "'n maand",
				MM: "%d maande",
				y: "'n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("ar-ma", {
			months: "ي����ي��_فب����ي��_������س_أب��ي��_����ي_ي����ي��_ي����ي��ز_غشت_شت��ب��_أكت��ب��_������ب��_د����ب��".split("_"),
			monthsShort: "ي����ي��_فب����ي��_������س_أب��ي��_����ي_ي����ي��_ي����ي��ز_غشت_شت��ب��_أكت��ب��_������ب��_د����ب��".split("_"),
			weekdays: "����أ��د_����إت��ي��_��������������ء_����أ��ب����ء_��������يس_������������_����سبت".split("_"),
			weekdaysShort: "����د_��ت��ي��_����������ء_����ب����ء_����يس_��������_سبت".split("_"),
			weekdaysMin: "��_��_��_��_��_��_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[����ي���� ������ ����س������] LT",
				nextDay: "[غد�� ������ ����س������] LT",
				nextWeek: "dddd [������ ����س������] LT",
				lastDay: "[أ��س ������ ����س������] LT",
				lastWeek: "dddd [������ ����س������] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "������ %s",
				s: "��������",
				m: "د��ي����",
				mm: "%d د��������",
				h: "س������",
				hh: "%d س������ت",
				d: "ي����",
				dd: "%d أي����",
				M: "ش����",
				MM: "%d أش����",
				y: "س����",
				yy: "%d س������ت"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "��",
			5: "٥",
			6: "��",
			7: "��",
			8: "٨",
			9: "��",
			0: "��"
		}),
		Rf = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"��": "4",
			"٥": "5",
			"��": "6",
			"��": "7",
			"٨": "8",
			"��": "9",
			"��": "0"
		},
		Sf = (Pf.defineLocale("ar-sa", {
			months: "ي����ي��_فب����ي��_������س_أب��ي��_����ي��_ي����ي��_ي����ي��_أغس��س_سبت��ب��_أكت��ب��_����ف��ب��_ديس��ب��".split("_"),
			monthsShort: "ي����ي��_فب����ي��_������س_أب��ي��_����ي��_ي����ي��_ي����ي��_أغس��س_سبت��ب��_أكت��ب��_����ف��ب��_ديس��ب��".split("_"),
			weekdays: "����أ��د_����إ����ي��_��������������ء_����أ��ب����ء_��������يس_������������_����سبت".split("_"),
			weekdaysShort: "أ��د_إ����ي��_����������ء_أ��ب����ء_����يس_��������_سبت".split("_"),
			weekdaysMin: "��_��_��_��_��_��_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|��/,
			isPM: function(a) {
				return "��" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "ص" : "��"
			},
			calendar: {
				sameDay: "[����ي���� ������ ����س������] LT",
				nextDay: "[غد�� ������ ����س������] LT",
				nextWeek: "dddd [������ ����س������] LT",
				lastDay: "[أ��س ������ ����س������] LT",
				lastWeek: "dddd [������ ����س������] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "������ %s",
				s: "��������",
				m: "د��ي����",
				mm: "%d د��������",
				h: "س������",
				hh: "%d س������ت",
				d: "ي����",
				dd: "%d أي����",
				M: "ش����",
				MM: "%d أش����",
				y: "س����",
				yy: "%d س������ت"
			},
			preparse: function(a) {
				return a.replace(/[١٢٣��٥����٨���]/g, function(a) {
					return Rf[a]
				}).replace(/،/g, ",")
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Qf[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), Pf.defineLocale("ar-tn", {
			months: "������في_فيف��ي_������س_أف��ي��_����ي_��������_����ي��ي��_أ��ت_سبت��ب��_أكت��ب��_����ف��ب��_ديس��ب��".split("_"),
			monthsShort: "������في_فيف��ي_������س_أف��ي��_����ي_��������_����ي��ي��_أ��ت_سبت��ب��_أكت��ب��_����ف��ب��_ديس��ب��".split("_"),
			weekdays: "����أ��د_����إ����ي��_��������������ء_����أ��ب����ء_��������يس_������������_����سبت".split("_"),
			weekdaysShort: "أ��د_إ����ي��_����������ء_أ��ب����ء_����يس_��������_سبت".split("_"),
			weekdaysMin: "��_��_��_��_��_��_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[����ي���� ������ ����س������] LT",
				nextDay: "[غد�� ������ ����س������] LT",
				nextWeek: "dddd [������ ����س������] LT",
				lastDay: "[أ��س ������ ����س������] LT",
				lastWeek: "dddd [������ ����س������] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "في %s",
				past: "������ %s",
				s: "��������",
				m: "د��ي����",
				mm: "%d د��������",
				h: "س������",
				hh: "%d س������ت",
				d: "ي����",
				dd: "%d أي����",
				M: "ش����",
				MM: "%d أش����",
				y: "س����",
				yy: "%d س������ت"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "١",
			2: "٢",
			3: "٣",
			4: "��",
			5: "٥",
			6: "��",
			7: "��",
			8: "٨",
			9: "��",
			0: "��"
		}),
		Tf = {
			"١": "1",
			"٢": "2",
			"٣": "3",
			"��": "4",
			"٥": "5",
			"��": "6",
			"��": "7",
			"٨": "8",
			"��": "9",
			"��": "0"
		},
		Uf = function(a) {
			return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5
		},
		Vf = {
			s: ["أ���� ���� ������ي��", "������ي�� ������د��", ["������يت����", "������يتي��"], "%d ��������", "%d ������ي��", "%d ������ي��"],
			m: ["أ���� ���� د��ي����", "د��ي���� ������د��", ["د��ي��ت����", "د��ي��تي��"], "%d د��������", "%d د��ي����", "%d د��ي����"],
			h: ["أ���� ���� س������", "س������ ������د��", ["س����ت����", "س����تي��"], "%d س������ت", "%d س������", "%d س������"],
			d: ["أ���� ���� ي����", "ي���� ������د", ["ي��������", "ي����ي��"], "%d أي����", "%d ي��������", "%d ي����"],
			M: ["أ���� ���� ش����", "ش���� ������د", ["ش��������", "ش����ي��"], "%d أش����", "%d ش������", "%d ش����"],
			y: ["أ���� ���� ������", "������ ������د", ["����������", "������ي��"], "%d أ��������", "%d ����������", "%d ������"]
		},
		Wf = function(a) {
			return function(b, c, d, e) {
				var f = Uf(b),
					g = Vf[a][Uf(b)];
				return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b)
			}
		},
		Xf = ["ك�������� ����������ي ي����ي��", "شب���� فب����ي��", "آ������ ������س", "��يس���� أب��ي��", "أي���� ����ي��", "��زي������ ي����ي��", "ت����ز ي����ي��", "آب أغس��س", "أي������ سبت��ب��", "تش��ي�� ����أ���� أكت��ب��", "تش��ي�� ����������ي ����ف��ب��", "ك�������� ����أ���� ديس��ب��"],
		Yf = (Pf.defineLocale("ar", {
			months: Xf,
			monthsShort: Xf,
			weekdays: "����أ��د_����إ����ي��_��������������ء_����أ��ب����ء_��������يس_������������_����سبت".split("_"),
			weekdaysShort: "أ��د_إ����ي��_����������ء_أ��ب����ء_����يس_��������_سبت".split("_"),
			weekdaysMin: "��_��_��_��_��_��_س".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/‏M/‏YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /ص|��/,
			isPM: function(a) {
				return "��" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "ص" : "��"
			},
			calendar: {
				sameDay: "[����ي���� ����د ����س������] LT",
				nextDay: "[غد���� ����د ����س������] LT",
				nextWeek: "dddd [����د ����س������] LT",
				lastDay: "[أ��س ����د ����س������] LT",
				lastWeek: "dddd [����د ����س������] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ب��د %s",
				past: "������ %s",
				s: Wf("s"),
				m: Wf("m"),
				mm: Wf("m"),
				h: Wf("h"),
				hh: Wf("h"),
				d: Wf("d"),
				dd: Wf("d"),
				M: Wf("M"),
				MM: Wf("M"),
				y: Wf("y"),
				yy: Wf("y")
			},
			preparse: function(a) {
				return a.replace(/‏/g, "").replace(/[١٢٣��٥����٨����]/g, function(a) {
					return Tf[a]
				}).replace(/،/g, ",")
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Sf[a]
				}).replace(/,/g, "،")
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), {
			1: "-inci",
			5: "-inci",
			8: "-inci",
			70: "-inci",
			80: "-inci",
			2: "-nci",
			7: "-nci",
			20: "-nci",
			50: "-nci",
			3: "-üncü",
			4: "-üncü",
			100: "-üncü",
			6: "-nc��",
			9: "-uncu",
			10: "-uncu",
			30: "-uncu",
			60: "-��nc��",
			90: "-��nc��"
		}),
		Zf = (Pf.defineLocale("az", {
			months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
			monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
			weekdays: "Bazar_Bazar ert��si_����rş��nb�� axşam��_����rş��nb��_Cüm�� axşam��_Cüm��_Ş��nb��".split("_"),
			weekdaysShort: "Baz_BzE_��Ax_����r_CAx_Cüm_Ş��n".split("_"),
			weekdaysMin: "Bz_BE_��A_����_CA_Cü_Ş��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat] LT",
				nextDay: "[sabah saat] LT",
				nextWeek: "[g��l��n h��ft��] dddd [saat] LT",
				lastDay: "[dün��n] LT",
				lastWeek: "[ke����n h��ft��] dddd [saat] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s ��vv��l",
				s: "birne���� saniyy��",
				m: "bir d��qiq��",
				mm: "%d d��qiq��",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir il",
				yy: "%d il"
			},
			meridiemParse: /gec��|s��h��r|gündüz|axşam/,
			isPM: function(a) {
				return /^(gündüz|axşam)$/.test(a)
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "gec��" : 12 > a ? "s��h��r" : 17 > a ? "gündüz" : "axşam"
			},
			ordinalParse: /\d{1,2}-(��nc��|inci|nci|üncü|nc��|uncu)/,
			ordinal: function(a) {
				if (0 === a) return a + "-��nc��";
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (Yf[b] || Yf[c] || Yf[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("be", {
			months: {
				format: "с��уд��еня_��ю����г��_с��к��в��к��_кр��с��в��к��_��р��ўня_��эрвеня_����пеня_��н��ўня_вер��сня_к��с��р����н��к��_����с����п��д��_сне��ня".split("_"),
				standalone: "с��уд��ень_��ю����_с��к��в��к_кр��с��в��к_��р��вень_��эрвень_����пень_��н��вень_вер��сень_к��с��р����н��к_����с����п��д_сне����нь".split("_")
			},
			monthsShort: "с��уд_��ю��_с��к_кр��с_��р��в_��эрв_����п_��н��в_вер_к��с��_����с��_сне��".split("_"),
			weekdays: {
				format: "няд��е��ю_п��няд��е����к_��ў��ор��к_сер��ду_������вер_пя��н����у_су��о��у".split("_"),
				standalone: "няд��е��я_п��няд��е����к_��ў��ор��к_сер��д��_������вер_пя��н������_су��о����".split("_"),
				isFormat: /\[?[��в]?(?:м��ну��ую|н��с��упную)??\]?dddd/
			},
			weekdaysShort: "нд_пн_����_ср_����_п��_с��".split("_"),
			weekdaysMin: "нд_пн_����_ср_����_п��_с��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г., HH:mm",
				LLLL: "dddd, D MMMM YYYY г., HH:mm"
			},
			calendar: {
				sameDay: "[С��ння ў] LT",
				nextDay: "[����ў��р�� ў] LT",
				lastDay: "[У��ор�� ў] LT",
				nextWeek: function() {
					return "[У] dddd [ў] LT"
				},
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return "[У м��ну��ую] dddd [ў] LT";
					case 1:
					case 2:
					case 4:
						return "[У м��ну����] dddd [ў] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "пр���� %s",
				past: "%s ����му",
				s: "нек����ьк�� секунд",
				m: $c,
				mm: $c,
				h: $c,
				hh: $c,
				d: "д��ень",
				dd: $c,
				M: "меся��",
				MM: $c,
				y: "год",
				yy: $c
			},
			meridiemParse: /но����|р��н������|дня|ве����р��/,
			isPM: function(a) {
				return /^(дня|ве����р��)$/.test(a)
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "но����" : 12 > a ? "р��н������" : 17 > a ? "дня" : "ве����р��"
			},
			ordinalParse: /\d{1,2}-(��|��|г��)/,
			ordinal: function(a, b) {
				switch (b) {
				case "M":
				case "d":
				case "DDD":
				case "w":
				case "W":
					return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-��" : a + "-��";
				case "D":
					return a + "-г��";
				default:
					return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("bg", {
			months: "яну��ри_��евру��ри_м��р��_��при��_м����_юни_ю��и_��вгус��_сеп��ември_ок��омври_ноември_декември".split("_"),
			monthsShort: "янр_��ев_м��р_��пр_м����_юни_ю��и_��вг_сеп_ок��_ное_дек".split("_"),
			weekdays: "неде��я_понеде��ник_в��орник_сряд��_��е��вър��ък_пе��ък_съ��о����".split("_"),
			weekdaysShort: "нед_пон_в��о_сря_��е��_пе��_съ��".split("_"),
			weekdaysMin: "нд_пн_в��_ср_����_п��_с��".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd, D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[��нес в] LT",
				nextDay: "[У��ре в] LT",
				nextWeek: "dddd [в] LT",
				lastDay: "[����ер�� в] LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return "[�� и��мин����������] dddd [в] LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[�� и��мин����ия] dddd [в] LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "с��ед %s",
				past: "преди %s",
				s: "няко��ко секунди",
				m: "мину����",
				mm: "%d мину��и",
				h: "����с",
				hh: "%d ����с��",
				d: "ден",
				dd: "%d дни",
				M: "месе��",
				MM: "%d месе����",
				y: "годин��",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|��и|ви|ри|ми)/,
			ordinal: function(a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-��и" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-��и"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "���",
			2: "���",
			3: "���",
			4: "���",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "���",
			0: "���"
		}),
		$f = {
			"���": "1",
			"���": "2",
			"���": "3",
			"���": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"���": "9",
			"���": "0"
		},
		_f = (Pf.defineLocale("bn", {
			months: "������������������������_������������������������_���������������_������������������_������_���������_���������������_������������������_������������������������������_���������������������_���������������������_������������������������".split("_"),
			monthsShort: "������������_���������_���������������_���������_������_���������_���������_������_���������������_���������������_������_������������������".split("_"),
			weekdays: "������������������_������������������_������������������������_������������������_���������������������������������������_������������������������_������������������".split("_"),
			weekdaysShort: "���������_���������_���������������_���������_������������������������������_���������������_���������".split("_"),
			weekdaysMin: "������_������_������������_������_���������������_������_���������".split("_"),
			longDateFormat: {
				LT: "A h:mm ���������",
				LTS: "A h:mm:ss ���������",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY, A h:mm ���������",
				LLLL: "dddd, D MMMM YYYY, A h:mm ���������"
			},
			calendar: {
				sameDay: "[������] LT",
				nextDay: "[������������������������] LT",
				nextWeek: "dddd, LT",
				lastDay: "[���������������] LT",
				lastWeek: "[������] dddd, LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ���������",
				past: "%s ���������",
				s: "������������ ���������������������",
				m: "������ ���������������",
				mm: "%d ���������������",
				h: "������ ���������������",
				hh: "%d ���������������",
				d: "������ ���������",
				dd: "%d ���������",
				M: "������ ���������",
				MM: "%d ���������",
				y: "������ ���������",
				yy: "%d ���������"
			},
			preparse: function(a) {
				return a.replace(/[������������������������������]/g, function(a) {
					return $f[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Zf[a]
				})
			},
			meridiemParse: /���������|������������|���������������|���������������|���������/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���������" === b && a >= 4 || "���������������" === b && 5 > a || "���������������" === b ? a + 12 : a
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���������" : 10 > a ? "������������" : 17 > a ? "���������������" : 20 > a ? "���������������" : "���������"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), {
			1: "༡",
			2: "༢",
			3: "༣",
			4: "���",
			5: "༥",
			6: "���",
			7: "���",
			8: "༨",
			9: "���",
			0: "���"
		}),
		ag = {
			"༡": "1",
			"༢": "2",
			"༣": "3",
			"���": "4",
			"༥": "5",
			"���": "6",
			"���": "7",
			"༨": "8",
			"���": "9",
			"���": "0"
		},
		bg = (Pf.defineLocale("bo", {
			months: "ཟླ���������������������ོ_ཟླ���������������ི���������_ཟླ���������������ུ���������_ཟླ������������ཞི������_ཟླ���������ལ���������_ཟླ������������ྲུ���������_ཟླ���������������ུ���������_ཟླ������������ར���������������_ཟླ���������������ུ������_ཟླ���������������ུ������_ཟླ���������������ུ���������ི���������_ཟླ���������������ུ���������ི���������".split("_"),
			monthsShort: "ཟླ���������������������ོ_ཟླ���������������ི���������_ཟླ���������������ུ���������_ཟླ������������ཞི������_ཟླ���������ལ���������_ཟླ������������ྲུ���������_ཟླ���������������ུ���������_ཟླ������������ར���������������_ཟླ���������������ུ������_ཟླ���������������ུ������_ཟླ���������������ུ���������ི���������_ཟླ���������������ུ���������ི���������".split("_"),
			weekdays: "���ཟ���������ི���������_���ཟ������ཟླ���������_���ཟ���������ི������������ར���_���ཟ������ལ���������������_���ཟ���������ུར������ུ_���ཟ������������������������_���ཟ������������ེ������������".split("_"),
			weekdaysShort: "���ི���������_ཟླ���������_���ི������������ར���_ལ���������������_���ུར������ུ_������������������_������ེ������������".split("_"),
			weekdaysMin: "���ི���������_ཟླ���������_���ི������������ར���_ལ���������������_���ུར������ུ_������������������_������ེ������������".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm",
				LLLL: "dddd,D MMMM YYYY,A h:mm"
			},
			calendar: {
				sameDay: "[���ི���རི���]LT",
				nextDay: "[������������ི���]LT",
				nextWeek: "[������ུ���������ྲ������ར���ེ���������],LT",
				lastDay: "[ཁ���������]LT",
				lastWeek: "[������ུ���������ྲ���������ཐ�� ������]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ལ���",
				past: "%s ������������ལ",
				s: "ལ������������",
				m: "���ྐར���������������ི���",
				mm: "%d ���ྐར������",
				h: "���ུ���ཚོ������������ི���",
				hh: "%d ���ུ���ཚོ���",
				d: "���ི������������ི���",
				dd: "%d ���ི������",
				M: "ཟླ���������������ི���",
				MM: "%d ཟླ������",
				y: "ལོ���������ི���",
				yy: "%d ལོ"
			},
			preparse: function(a) {
				return a.replace(/[༡༢༣���༥������༨������]/g, function(a) {
					return ag[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return _f[a]
				})
			},
			meridiemParse: /���ཚ���������ོ|ཞོ���������ཀ���|���ི���������ུ���|������ོ������������|���ཚ���������ོ/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���ཚ���������ོ" === b && a >= 4 || "���ི���������ུ���" === b && 5 > a || "������ོ������������" === b ? a + 12 : a
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���ཚ���������ོ" : 10 > a ? "ཞོ���������ཀ���" : 17 > a ? "���ི���������ུ���" : 20 > a ? "������ོ������������" : "���ཚ���������ོ"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), Pf.defineLocale("br", {
			months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
			monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
			weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
			weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
			longDateFormat: {
				LT: "h[e]mm A",
				LTS: "h[e]mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D [a viz] MMMM YYYY",
				LLL: "D [a viz] MMMM YYYY h[e]mm A",
				LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
			},
			calendar: {
				sameDay: "[Hiziv da] LT",
				nextDay: "[Warc'hoazh da]LT",
				nextWeek: "dddd[da]LT",
				lastDay: "[Dec'h da] LT",
				lastWeek: "dddd [paset da] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "a-benn %s",
				past: "%s 'zo",
				s: "un nebeud segondenno��",
				m: "ur vunutenn",
				mm: _c,
				h: "un eur",
				hh: "%d eur",
				d: "un devezh",
				dd: _c,
				M: "ur miz",
				MM: _c,
				y: "ur bloaz",
				yy: ad
			},
			ordinalParse: /\d{1,2}(a��|vet)/,
			ordinal: function(a) {
				var b = 1 === a ? "a��" : "vet";
				return a + b
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("bs", {
			months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u]LT",
				nextDay: "[sutra u]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u][nedjelju][u]LT";
					case 3:
						return "[u][srijedu][u]LT";
					case 6:
						return "[u][subotu][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u]dddd[u]LT"
					}
				},
				lastDay: "[jučer u]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
						return "[prošlu]dddd[u]LT";
					case 6:
						return "[prošle][subote][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prošli]dddd[u]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "prije%s",
				s: "par sekundi",
				m: ed,
				mm: ed,
				h: ed,
				hh: ed,
				d: "dan",
				dd: ed,
				M: "mjesec",
				MM: ed,
				y: "godinu",
				yy: ed
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("ca", {
			months: "gener_febrer_mar��_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
			monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"),
			weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
			weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
			weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[avui a" + (1 !== this.hours() ? "les" : "la") + "]LT"
				},
				nextDay: function() {
					return "[dem� a" + (1 !== this.hours() ? "les" : "la") + "]LT"
				},
				nextWeek: function() {
					return "dddd[a" + (1 !== this.hours() ? "les" : "la") + "]LT"
				},
				lastDay: function() {
					return "[ahir a" + (1 !== this.hours() ? "les" : "la") + "]LT"
				},
				lastWeek: function() {
					return "[el]dddd[passat a" + (1 !== this.hours() ? "les" : "la") + "]LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en%s",
				past: "fa%s",
				s: "uns segons",
				m: "un minut",
				mm: "%d minuts",
				h: "una hora",
				hh: "%d hores",
				d: "un dia",
				dd: "%d dies",
				M: "un mes",
				MM: "%d mesos",
				y: "un any",
				yy: "%d anys"
			},
			ordinalParse: /\d{1,2}(r|n|t|è|a)/,
			ordinal: function(a, b) {
				var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è";
				return ("w" === b || "W" === b) && (c = "a"), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "leden_únor_b��ezen_duben_kv��ten_červen_červenec_srpen_zá����_����jen_listopad_prosinec".split("_")),
		cg = "led_úno_b��e_dub_kv��_čvn_čvc_srp_zá��_����j_lis_pro".split("_"),
		dg = (Pf.defineLocale("cs", {
			months: bg,
			monthsShort: cg,
			monthsParse: function(a, b) {
				var c, d = [];
				for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i");
				return d
			}(bg, cg),
			shortMonthsParse: function(a) {
				var b, c = [];
				for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
				return c
			}(cg),
			longMonthsParse: function(a) {
				var b, c = [];
				for (b = 0; 12 > b; b++) c[b] = new RegExp("^" + a[b] + "$", "i");
				return c
			}(bg),
			weekdays: "ned��le_pond��l��_úterý_st��eda_čtvrtek_pátek_sobota".split("_"),
			weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
			weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes v]LT",
				nextDay: "[z��tra v]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v ned��li v]LT";
					case 1:
					case 2:
						return "[v]dddd[v]LT";
					case 3:
						return "[ve st��edu v]LT";
					case 4:
						return "[ve čtvrtek v]LT";
					case 5:
						return "[v pátek v]LT";
					case 6:
						return "[v sobotu v]LT"
					}
				},
				lastDay: "[včera v]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[minulou ned��li v]LT";
					case 1:
					case 2:
						return "[minul��]dddd[v]LT";
					case 3:
						return "[minulou st��edu v]LT";
					case 4:
					case 5:
						return "[minulý]dddd[v]LT";
					case 6:
						return "[minulou sobotu v]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "p��ed%s",
				s: gd,
				m: gd,
				mm: gd,
				h: gd,
				hh: gd,
				d: gd,
				dd: gd,
				M: gd,
				MM: gd,
				y: gd,
				yy: gd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("cv", {
			months: "к��р������_н��р��с_пу��_��к��_м����_����р��ме_у����_��ур����_��в��н_юп��_��ӳк_р��������в".split("_"),
			monthsShort: "к��р_н��р_пу��_��к��_м����_����р_у����_��ур_��вн_юп��_��ӳк_р����".split("_"),
			weekdays: "в��рс��рникун_��ун��икун_��������рикун_юнкун_к����нерникун_эрнекун_����м����кун".split("_"),
			weekdaysShort: "в��р_��ун_������_юн_к����_эрн_����м".split("_"),
			weekdaysMin: "вр_��н_����_юн_к��_эр_��м".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "YYYY[��у����и]MMMM[у��������н]D[-м������]",
				LLL: "YYYY[��у����и]MMMM[у��������н]D[-м������],HH:mm",
				LLLL: "dddd,YYYY[��у����и]MMMM[у��������н]D[-м������],HH:mm"
			},
			calendar: {
				sameDay: "[П��ян]LT[се��е��ре]",
				nextDay: "[��р��н]LT[се��е��ре]",
				lastDay: "[��нер]LT[се��е��ре]",
				nextWeek: "[Ҫи��ес]dddd LT[се��е��ре]",
				lastWeek: "[��р��н��]dddd LT[се��е��ре]",
				sameElse: "L"
			},
			relativeTime: {
				future: function(a) {
					var b = /се��е��$/i.exec(a) ? "рен" : /��у��$/i.exec(a) ? "����н" : "р��н";
					return a + b
				},
				past: "%s к��я������",
				s: "п��р-ик ��еккун��",
				m: "п��р мину��",
				mm: "%d мину��",
				h: "п��р се��е��",
				hh: "%d се��е��",
				d: "п��р кун",
				dd: "%d кун",
				M: "п��р у������",
				MM: "%d у������",
				y: "п��р ��у��",
				yy: "%d ��у��"
			},
			ordinalParse: /\d{1,2}-м����/,
			ordinal: "%d-м����",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("cy", {
			months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
			monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
			weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
			weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
			weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Heddiw am]LT",
				nextDay: "[Yfory am]LT",
				nextWeek: "dddd[am]LT",
				lastDay: "[Ddoe am]LT",
				lastWeek: "dddd[diwethaf am]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "mewn%s",
				past: "%s yn ôl",
				s: "ychydig eiliadau",
				m: "munud",
				mm: "%d munud",
				h: "awr",
				hh: "%d awr",
				d: "diwrnod",
				dd: "%d diwrnod",
				M: "mis",
				MM: "%d mis",
				y: "blwyddyn",
				yy: "%d flynedd"
			},
			ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
			ordinal: function(a) {
				var b = a,
					c = "",
					d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
				return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("da", {
			months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY HH:mm",
				LLLL: "dddd[d.]D.MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[I dag kl.]LT",
				nextDay: "[I morgen kl.]LT",
				nextWeek: "dddd[kl.]LT",
				lastDay: "[I går kl.]LT",
				lastWeek: "[sidste]dddd[kl]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om%s",
				past: "%s siden",
				s: "få sekunder",
				m: "et minut",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dage",
				M: "en måned",
				MM: "%d måneder",
				y: "et år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("de-at", {
			months: "J��nner_Februar_M��rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "J��n._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY HH:mm",
				LLLL: "dddd,D.MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um]LT[Uhr]",
				sameElse: "L",
				nextDay: "[morgen um]LT[Uhr]",
				nextWeek: "dddd[um]LT[Uhr]",
				lastDay: "[gestern um]LT[Uhr]",
				lastWeek: "[letzten]dddd[um]LT[Uhr]"
			},
			relativeTime: {
				future: "in%s",
				past: "vor%s",
				s: "ein paar Sekunden",
				m: hd,
				mm: "%d Minuten",
				h: hd,
				hh: "%d Stunden",
				d: hd,
				dd: hd,
				M: hd,
				MM: hd,
				y: hd,
				yy: hd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("de", {
			months: "Januar_Februar_M��rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
			weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY HH:mm",
				LLLL: "dddd,D.MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[heute um]LT[Uhr]",
				sameElse: "L",
				nextDay: "[morgen um]LT[Uhr]",
				nextWeek: "dddd[um]LT[Uhr]",
				lastDay: "[gestern um]LT[Uhr]",
				lastWeek: "[letzten]dddd[um]LT[Uhr]"
			},
			relativeTime: {
				future: "in%s",
				past: "vor%s",
				s: "ein paar Sekunden",
				m: id,
				mm: "%d Minuten",
				h: id,
				hh: "%d Stunden",
				d: id,
				dd: id,
				M: id,
				MM: id,
				y: id,
				yy: id
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), ["������ު����ރ��", "ފ������ރު����ރ��", "����ރި��ު", "��������ރ��ލު", "����", "��������", "��ުލ����ި", "��ޯގ��ސ����ު", "ސ������������������ރު", "����������ޯ����ރު", "����������������ރު", "��ިސ����������ރު"]),
		eg = ["������ި����ތ��", "ހޯ����", "��������ގ��ރ��", "��ު����", "��ުރ��ސ��ފ��ތި", "ހު��ުރު", "ހ����ިހިރު"],
		fg = (Pf.defineLocale("dv", {
			months: dg,
			monthsShort: dg,
			weekdays: eg,
			weekdaysShort: eg,
			weekdaysMin: "������ި_ހޯ����_��������_��ު����_��ުރ��_ހު��ު_ހ����ި".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "D/M/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /����|��ފ/,
			isPM: function(a) {
				return "��ފ" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "����" : "��ފ"
			},
			calendar: {
				sameDay: "[��ި������ު]LT",
				nextDay: "[������������]LT",
				nextWeek: "dddd LT",
				lastDay: "[��ި��������]LT",
				lastWeek: "[ފ����ިތު��ި]dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ތ��ރ��ގ����ި%s",
				past: "��ުރި����%s",
				s: "ސި��ު����ތު������������",
				m: "��ި��ި��������",
				mm: "��ި��ި��ު%d",
				h: "ގ����ި��ިރ������",
				hh: "ގ����ި��ިރު%d",
				d: "��ު����ހ������",
				dd: "��ު����ސ��%d",
				M: "����ހ������",
				MM: "����ސ��%d",
				y: "����ހ��ރ������",
				yy: "����ހ��ރު%d"
			},
			preparse: function(a) {
				return a.replace(/،/g, ",")
			},
			postformat: function(a) {
				return a.replace(/,/g, "،")
			},
			week: {
				dow: 7,
				doy: 12
			}
		}), Pf.defineLocale("el", {
			monthsNominativeEl: "����νο����ρ��ο��_��εβρο����ρ��ο��_Μ��ρ����ο��_��πρί����ο��_Μ����ο��_��ούν��ο��_��ού����ο��_��ύγο��σ��ο��_Σεπ����μβρ��ο��_Οκ��ώβρ��ο��_Νο��μβρ��ο��_��εκ��μβρ��ο��".split("_"),
			monthsGenitiveEl: "����νο����ρίο��_��εβρο����ρίο��_Μ��ρ��ίο��_��πρ����ίο��_Μ��ΐο��_��ο��νίο��_��ο����ίο��_����γούσ��ο��_Σεπ��εμβρίο��_Οκ����βρίο��_Νοεμβρίο��_��εκεμβρίο��".split("_"),
			months: function(a, b) {
				return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()]
			},
			monthsShort: "����ν_��εβ_Μ��ρ_��πρ_Μ��ϊ_��ο��ν_��ο����_����γ_Σεπ_Οκ��_Νοε_��εκ".split("_"),
			weekdays: "Κ��ρ����κ��_��ε������ρ��_��ρί����_��ε����ρ����_� ��μπ����_� ��ρ��σκε����_Σ��ββ����ο".split("_"),
			weekdaysShort: "Κ��ρ_��ε��_��ρ��_��ε��_� εμ_� ��ρ_Σ��β".split("_"),
			weekdaysMin: "Κ��_��ε_��ρ_��ε_� ε_� ��_Σ��".split("_"),
			meridiem: function(a, b, c) {
				return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "� Μ"
			},
			isPM: function(a) {
				return "μ" === (a + "").toLowerCase()[0]
			},
			meridiemParse: /[��Μ]\.?Μ?\.?/i,
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd,D MMMM YYYY h:mm A"
			},
			calendarEl: {
				sameDay: "[Σ��μερ��{}]LT",
				nextDay: "[��ύρ��ο{}]LT",
				nextWeek: "dddd[{}]LT",
				lastDay: "[��θε��{}]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 6:
						return "[��ο προ��γούμενο]dddd[{}]LT";
					default:
						return "[����ν προ��γούμεν��]dddd[{}]LT"
					}
				},
				sameElse: "L"
			},
			calendar: function(a, b) {
				var c = this._calendarEl[a],
					d = b && b.hours();
				return w(c) && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "σ����" : "σ������")
			},
			relativeTime: {
				future: "σε%s",
				past: "%s πρ��ν",
				s: "��ίγ��δε����ερό��επ����",
				m: "��ν����επ��ό",
				mm: "%d ��επ����",
				h: "μί��ώρ��",
				hh: "%d ώρε��",
				d: "μί��μ��ρ��",
				dd: "%d μ��ρε��",
				M: "��ν����μ��ν����",
				MM: "%d μ��νε��",
				y: "��ν������ρόνο��",
				yy: "%d ��ρόν����"
			},
			ordinalParse: /\d{1,2}��/,
			ordinal: "%d��",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("en-au", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd,D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at]LT",
				nextDay: "[Tomorrow at]LT",
				nextWeek: "dddd[at]LT",
				lastDay: "[Yesterday at]LT",
				lastWeek: "[Last]dddd[at]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in%s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("en-ca", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "YYYY-MM-DD",
				LL: "MMMM D,YYYY",
				LLL: "MMMM D,YYYY h:mm A",
				LLLL: "dddd,MMMM D,YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at]LT",
				nextDay: "[Tomorrow at]LT",
				nextWeek: "dddd[at]LT",
				lastDay: "[Yesterday at]LT",
				lastWeek: "[Last]dddd[at]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in%s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}), Pf.defineLocale("en-gb", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at]LT",
				nextDay: "[Tomorrow at]LT",
				nextWeek: "dddd[at]LT",
				lastDay: "[Yesterday at]LT",
				lastWeek: "[Last]dddd[at]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in%s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("en-ie", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Today at]LT",
				nextDay: "[Tomorrow at]LT",
				nextWeek: "dddd[at]LT",
				lastDay: "[Yesterday at]LT",
				lastWeek: "[Last]dddd[at]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in%s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("en-nz", {
			months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd,D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[Today at]LT",
				nextDay: "[Tomorrow at]LT",
				nextWeek: "dddd[at]LT",
				lastDay: "[Yesterday at]LT",
				lastWeek: "[Last]dddd[at]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "in%s",
				past: "%s ago",
				s: "a few seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			ordinalParse: /\d{1,2}(st|nd|rd|th)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("eo", {
			months: "januaro_februaro_marto_aprilo_majo_junio_julio_a��gusto_septembro_oktobro_novembro_decembro".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_a��g_sep_okt_nov_dec".split("_"),
			weekdays: "Diman��o_Lundo_Mardo_Merkredo_Ĵa��do_Vendredo_Sabato".split("_"),
			weekdaysShort: "Dim_Lun_Mard_Merk_Ĵa��_Ven_Sab".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D[-an de]MMMM,YYYY",
				LLL: "D[-an de]MMMM,YYYY HH:mm",
				LLLL: "dddd,[la]D[-an de]MMMM,YYYY HH:mm"
			},
			meridiemParse: /[ap]\.t\.m/i,
			isPM: function(a) {
				return "p" === a.charAt(0).toLowerCase()
			},
			meridiem: function(a, b, c) {
				return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M."
			},
			calendar: {
				sameDay: "[Hodia��je]LT",
				nextDay: "[Morga��je]LT",
				nextWeek: "dddd[je]LT",
				lastDay: "[Hiera��je]LT",
				lastWeek: "[pasinta]dddd[je]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "je%s",
				past: "anta��%s",
				s: "sekundoj",
				m: "minuto",
				mm: "%d minutoj",
				h: "horo",
				hh: "%d horoj",
				d: "tago",
				dd: "%d tagoj",
				M: "monato",
				MM: "%d monatoj",
				y: "jaro",
				yy: "%d jaroj"
			},
			ordinalParse: /\d{1,2}a/,
			ordinal: "%da",
			week: {
				dow: 1,
				doy: 7
			}
		}), "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")),
		gg = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
		hg = (Pf.defineLocale("es", {
			months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
			monthsShort: function(a, b) {
				return /-MMM-/.test(b) ? gg[a.month()] : fg[a.month()]
			},
			weekdays: "domingo_lunes_martes_mi��rcoles_jueves_viernes_sábado".split("_"),
			weekdaysShort: "dom._lun._mar._mi��._jue._vie._sáb.".split("_"),
			weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D[de]MMMM[de]YYYY",
				LLL: "D[de]MMMM[de]YYYY H:mm",
				LLLL: "dddd,D[de]MMMM[de]YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "]LT"
				},
				nextDay: function() {
					return "[ma��ana a la" + (1 !== this.hours() ? "s" : "") + "]LT"
				},
				nextWeek: function() {
					return "dddd[a la" + (1 !== this.hours() ? "s" : "") + "]LT"
				},
				lastDay: function() {
					return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "]LT"
				},
				lastWeek: function() {
					return "[el]dddd[pasado a la" + (1 !== this.hours() ? "s" : "") + "]LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "en%s",
				past: "hace%s",
				s: "unos segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "una hora",
				hh: "%d horas",
				d: "un d��a",
				dd: "%d d��as",
				M: "un mes",
				MM: "%d meses",
				y: "un a��o",
				yy: "%d a��os"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("et", {
			months: "jaanuar_veebruar_m��rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
			monthsShort: "jaan_veebr_m��rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
			weekdays: "pühap��ev_esmasp��ev_teisip��ev_kolmap��ev_neljap��ev_reede_laup��ev".split("_"),
			weekdaysShort: "P_E_T_K_N_R_L".split("_"),
			weekdaysMin: "P_E_T_K_N_R_L".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[T��na,]LT",
				nextDay: "[Homme,]LT",
				nextWeek: "[J��rgmine]dddd LT",
				lastDay: "[Eile,]LT",
				lastWeek: "[Eelmine]dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s p��rast",
				past: "%s tagasi",
				s: jd,
				m: jd,
				mm: jd,
				h: jd,
				hh: jd,
				d: jd,
				dd: "%d p��eva",
				M: jd,
				MM: jd,
				y: jd,
				yy: jd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("eu", {
			months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
			monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
			weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
			weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
			weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[ko]MMMM[ren]D[a]",
				LLL: "YYYY[ko]MMMM[ren]D[a]HH:mm",
				LLLL: "dddd,YYYY[ko]MMMM[ren]D[a]HH:mm",
				l: "YYYY-M-D",
				ll: "YYYY[ko]MMM D[a]",
				lll: "YYYY[ko]MMM D[a]HH:mm",
				llll: "ddd,YYYY[ko]MMM D[a]HH:mm"
			},
			calendar: {
				sameDay: "[gaur]LT[etan]",
				nextDay: "[bihar]LT[etan]",
				nextWeek: "dddd LT[etan]",
				lastDay: "[atzo]LT[etan]",
				lastWeek: "[aurreko]dddd LT[etan]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s barru",
				past: "duela%s",
				s: "segundo batzuk",
				m: "minutu bat",
				mm: "%d minutu",
				h: "ordu bat",
				hh: "%d ordu",
				d: "egun bat",
				dd: "%d egun",
				M: "hilabete bat",
				MM: "%d hilabete",
				y: "urte bat",
				yy: "%d urte"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "��",
			2: "۲",
			3: "۳",
			4: "۴",
			5: "۵",
			6: "��",
			7: "��",
			8: "۸",
			9: "��",
			0: "��"
		}),
		ig = {
			"��": "1",
			"۲": "2",
			"۳": "3",
			"۴": "4",
			"۵": "5",
			"��": "6",
			"��": "7",
			"۸": "8",
			"��": "9",
			"��": "0"
		},
		jg = (Pf.defineLocale("fa", {
			months: "��������ی��_ف����ی��_������س_آ����ی��_����_��������_������ی��_����ت_سپت����ب��_����تب��_��������ب��_دس����ب��".split("_"),
			monthsShort: "��������ی��_ف����ی��_������س_آ����ی��_����_��������_������ی��_����ت_سپت����ب��_����تب��_��������ب��_دس����ب��".split("_"),
			weekdays: "ی��‌ش��ب��_د��ش��ب��_س��‌ش��ب��_��������ش��ب��_پ����‌ش��ب��_��������_ش��ب��".split("_"),
			weekdaysShort: "ی��‌ش��ب��_د��ش��ب��_س��‌ش��ب��_��������ش��ب��_پ����‌ش��ب��_��������_ش��ب��".split("_"),
			weekdaysMin: "ی_د_س_��_پ_��_ش".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			meridiemParse: /��ب�� ��ز ظ����|ب��د ��ز ظ����/,
			isPM: function(a) {
				return /ب��د ��ز ظ����/.test(a)
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "��ب����ز ظ����" : "ب��د ��ز ظ����"
			},
			calendar: {
				sameDay: "[��������ز س����ت]LT",
				nextDay: "[ف��د��س����ت]LT",
				nextWeek: "dddd[س����ت]LT",
				lastDay: "[دی����ز س����ت]LT",
				lastWeek: "dddd[پیش][س����ت]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "د��%s",
				past: "%s پیش",
				s: "����دی��������ی��",
				m: "ی��د��ی����",
				mm: "%d د��ی����",
				h: "ی��س����ت",
				hh: "%d س����ت",
				d: "ی������ز",
				dd: "%d ����ز",
				M: "ی��������",
				MM: "%d ������",
				y: "ی��س����",
				yy: "%d س����"
			},
			preparse: function(a) {
				return a.replace(/[��-��]/g, function(a) {
					return ig[a]
				}).replace(/،/g, ",")
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return hg[a]
				}).replace(/,/g, "،")
			},
			ordinalParse: /\d{1,2}��/,
			ordinal: "%d��",
			week: {
				dow: 6,
				doy: 12
			}
		}), "nolla yksi kaksi kolme nelj��viisi kuusi seitsem��n kahdeksan yhdeks��n".split("")),
		kg = ["nolla", "yhden", "kahden", "kolmen", "nelj��n", "viiden", "kuuden", jg[7], jg[8], jg[9]],
		lg = (Pf.defineLocale("fi", {
			months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes��kuu_hein��kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
			monthsShort: "tammi_helmi_maalis_huhti_touko_kes��_hein��_elo_syys_loka_marras_joulu".split("_"),
			weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
			weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
			weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "Do MMMM[ta]YYYY",
				LLL: "Do MMMM[ta]YYYY,[klo]HH.mm",
				LLLL: "dddd,Do MMMM[ta]YYYY,[klo]HH.mm",
				l: "D.M.YYYY",
				ll: "Do MMM YYYY",
				lll: "Do MMM YYYY,[klo]HH.mm",
				llll: "ddd,Do MMM YYYY,[klo]HH.mm"
			},
			calendar: {
				sameDay: "[t��n����n][klo]LT",
				nextDay: "[huomenna][klo]LT",
				nextWeek: "dddd[klo]LT",
				lastDay: "[eilen][klo]LT",
				lastWeek: "[viime]dddd[na][klo]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s p����st��",
				past: "%s sitten",
				s: kd,
				m: kd,
				mm: kd,
				h: kd,
				hh: kd,
				d: kd,
				dd: kd,
				M: kd,
				MM: kd,
				y: kd,
				yy: kd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("fo", {
			months: "januar_februar_mars_apr��l_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fr��ggjadagur_leygardagur".split("_"),
			weekdaysShort: "sun_mán_týs_mik_hós_fr��_ley".split("_"),
			weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D.MMMM,YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Í dag kl.]LT",
				nextDay: "[Í morgin kl.]LT",
				nextWeek: "dddd[kl.]LT",
				lastDay: "[Í gjár kl.]LT",
				lastWeek: "[s����stu]dddd[kl]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "um%s",
				past: "%s s����ani",
				s: "fá sekund",
				m: "ein minutt",
				mm: "%d minuttir",
				h: "ein t��mi",
				hh: "%d t��mar",
				d: "ein dagur",
				dd: "%d dagar",
				M: "ein mána��i",
				MM: "%d mána��ir",
				y: "eitt ár",
				yy: "%d ár"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("fr-ca", {
			months: "janvier_f��vrier_mars_avril_mai_juin_juillet_ao��t_septembre_octobre_novembre_d��cembre".split("_"),
			monthsShort: "janv._f��vr._mars_avr._mai_juin_juil._ao��t_sept._oct._nov._d��c.".split("_"),
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui ��] LT",
				nextDay: "[Demain ��] LT",
				nextWeek: "dddd [��] LT",
				lastDay: "[Hier ��] LT",
				lastWeek: "dddd [dernier ��] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans %s",
				past: "il y a %s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function(a) {
				return a + (1 === a ? "er" : "e")
			}
		}), Pf.defineLocale("fr-ch", {
			months: "janvier_f��vrier_mars_avril_mai_juin_juillet_ao��t_septembre_octobre_novembre_d��cembre".split("_"),
			monthsShort: "janv._f��vr._mars_avr._mai_juin_juil._ao��t_sept._oct._nov._d��c.".split("_"),
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui �]LT",
				nextDay: "[Demain �]LT",
				nextWeek: "dddd[�]LT",
				lastDay: "[Hier �]LT",
				lastWeek: "dddd[dernier �]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans%s",
				past: "il y a%s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|e)/,
			ordinal: function(a) {
				return a + (1 === a ? "er" : "e")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("fr", {
			months: "janvier_f��vrier_mars_avril_mai_juin_juillet_ao��t_septembre_octobre_novembre_d��cembre".split("_"),
			monthsShort: "janv._f��vr._mars_avr._mai_juin_juil._ao��t_sept._oct._nov._d��c.".split("_"),
			weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
			weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
			weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Aujourd'hui �]LT",
				nextDay: "[Demain �]LT",
				nextWeek: "dddd[�]LT",
				lastDay: "[Hier �]LT",
				lastWeek: "dddd[dernier �]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dans%s",
				past: "il y a%s",
				s: "quelques secondes",
				m: "une minute",
				mm: "%d minutes",
				h: "une heure",
				hh: "%d heures",
				d: "un jour",
				dd: "%d jours",
				M: "un mois",
				MM: "%d mois",
				y: "un an",
				yy: "%d ans"
			},
			ordinalParse: /\d{1,2}(er|)/,
			ordinal: function(a) {
				return a + (1 === a ? "er" : "")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")),
		mg = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
		ng = (Pf.defineLocale("fy", {
			months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
			monthsShort: function(a, b) {
				return /-MMM-/.test(b) ? mg[a.month()] : lg[a.month()]
			},
			weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
			weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
			weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[hjoed om]LT",
				nextDay: "[moarn om]LT",
				nextWeek: "dddd[om]LT",
				lastDay: "[juster om]LT",
				lastWeek: "[ôfr��ne]dddd[om]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "oer %s",
				past: "%s lyn",
				s: "in pear sekonden",
				m: "ien minút",
				mm: "%d minuten",
				h: "ien oere",
				hh: "%d oeren",
				d: "ien dei",
				dd: "%d dagen",
				M: "ien moanne",
				MM: "%d moannen",
				y: "ien jier",
				yy: "%d jierren"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), ["Am Faoilleach", "An Gearran", "Am M��rt", "An Giblean", "An Cèitean", "An t-��gmhios", "An t-Iuchar", "An L��nastal", "An t-Sultain", "An D��mhair", "An t-Samhain", "An D��bhlachd"]),
		og = ["Faoi", "Gear", "M��rt", "Gibl", "Cèit", "��gmh", "Iuch", "L��n", "Sult", "D��mh", "Samh", "D��bh"],
		pg = ["Didòmhnaich", "Diluain", "Dim��irt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"],
		qg = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"],
		rg = ["Dò", "Lu", "M��", "Ci", "Ar", "Ha", "Sa"],
		sg = (Pf.defineLocale("gd", {
			months: ng,
			monthsShort: og,
			monthsParseExact: !0,
			weekdays: pg,
			weekdaysShort: qg,
			weekdaysMin: rg,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd, D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[An-diugh aig] LT",
				nextDay: "[A-m��ireach aig] LT",
				nextWeek: "dddd [aig] LT",
				lastDay: "[An-dè aig] LT",
				lastWeek: "dddd [seo chaidh] [aig] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "ann an %s",
				past: "bho chionn %s",
				s: "beagan diogan",
				m: "mionaid",
				mm: "%d mionaidean",
				h: "uair",
				hh: "%d uairean",
				d: "latha",
				dd: "%d latha",
				M: "m��os",
				MM: "%d m��osan",
				y: "bliadhna",
				yy: "%d bliadhna"
			},
			ordinalParse: /\d{1,2}(d|na|mh)/,
			ordinal: function(a) {
				var b = 1 === a ? "d" : a % 10 === 2 ? "na" : "mh";
				return a + b
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("gl", {
			months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xu��o_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"),
			monthsShort: "Xan._Feb._Mar._Abr._Mai._Xu��._Xul._Ago._Set._Out._Nov._Dec.".split("_"),
			weekdays: "Domingo_Luns_Martes_M��rcores_Xoves_Venres_Sábado".split("_"),
			weekdaysShort: "Dom._Lun._Mar._M��r._Xov._Ven._Sáb.".split("_"),
			weekdaysMin: "Do_Lu_Ma_M��_Xo_Ve_Sá".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: function() {
					return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextDay: function() {
					return "[ma��á " + (1 !== this.hours() ? "ás" : "á") + "] LT"
				},
				nextWeek: function() {
					return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				lastDay: function() {
					return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
				},
				lastWeek: function() {
					return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(a) {
					return "uns segundos" === a ? "nuns segundos" : "en " + a
				},
				past: "hai %s",
				s: "uns segundos",
				m: "un minuto",
				mm: "%d minutos",
				h: "unha hora",
				hh: "%d horas",
				d: "un d��a",
				dd: "%d d��as",
				M: "un mes",
				MM: "%d meses",
				y: "un ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("he", {
			months: "������אר_����ר��אר_מרץ_א��ר��ל_מא��_��������_����ל��_א������ס��_ס����מ��ר_א����������ר_������מ��ר_����מ��ר".split("_"),
			monthsShort: "������׳_����ר׳_מרץ_א��ר׳_מא��_��������_����ל��_א����׳_ס����׳_א����׳_������׳_����מ׳".split("_"),
			weekdays: "רא����ן_������_��ל������_ר����ע��_��מ������_��������_����ת".split("_"),
			weekdaysShort: "א׳_��׳_��׳_��׳_��׳_��׳_��׳".split("_"),
			weekdaysMin: "א_��_��_��_��_��_��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D [��]MMMM YYYY",
				LLL: "D [��]MMMM YYYY HH:mm",
				LLLL: "dddd, D [��]MMMM YYYY HH:mm",
				l: "D/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd, D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[������ם ��־]LT",
				nextDay: "[מ��ר ��־]LT",
				nextWeek: "dddd [����ע��] LT",
				lastDay: "[אתמ��ל ��־]LT",
				lastWeek: "[������ם] dddd [��א��ר��ן ����ע��] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "��ע���� %s",
				past: "ל������ %s",
				s: "מס��ר ��������ת",
				m: "������",
				mm: "%d ������ת",
				h: "��ע��",
				hh: function(a) {
					return 2 === a ? "��עת����ם" : a + " ��ע��ת"
				},
				d: "����ם",
				dd: function(a) {
					return 2 === a ? "����מ����ם" : a + " ��מ��ם"
				},
				M: "��������",
				MM: function(a) {
					return 2 === a ? "������������ם" : a + " ����������ם"
				},
				y: "������",
				yy: function(a) {
					return 2 === a ? "����ת����ם" : a % 10 === 0 && 10 !== a ? a + " ������" : a + " ������ם"
				}
			},
			meridiemParse: /א����"��|ל������"��|א��ר��������ר����ם|ל��� ��������ר����ם|ל��� ��ת ������ר|��������ר|��ער��/i,
			isPM: function(a) {
				return /^(א����"��|א��ר�� ������ר����ם|��ער��)$/.test(a)
			},
			meridiem: function(a, b, c) {
				return 5 > a ? "ל��� ��ת ������ר" : 10 > a ? "��������ר" : 12 > a ? c ? 'ל������"��' : "ל������ ������ר����ם" : 18 > a ? c ? 'א����"��' : "א��ר��������ר����ם" : "��ער��"
			}
		}), {
			1: "���",
			2: "२",
			3: "���",
			4: "४",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "९",
			0: "���"
		}),
		tg = {
			"���": "1",
			"२": "2",
			"���": "3",
			"४": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"९": "9",
			"���": "0"
		},
		ug = (Pf.defineLocale("hi", {
			months: "������������ी_���������������ी_���������्���_������्���������_������_���������_���ु���������_���������्���_������������्������_������्������������_���������्������_������������्������".split("_"),
			monthsShort: "������._���������._���������्���_������्������._������_���������_���ु���._������._���������._������्������._������._���������.".split("_"),
			weekdays: "������������������_������������������_���������������������_���ु������������_���ु���������������_���ु���्������������_������������������".split("_"),
			weekdaysShort: "���������_���������_������������_���ु���_���ु������_���ु���्���_���������".split("_"),
			weekdaysMin: "���_������_������_���ु_���ु_���ु_���".split("_"),
			longDateFormat: {
				LT: "A h:mm ���������",
				LTS: "A h:mm:ss ���������",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm ���������",
				LLLL: "dddd,D MMMM YYYY,A h:mm ���������"
			},
			calendar: {
				sameDay: "[������]LT",
				nextDay: "[������]LT",
				nextWeek: "dddd,LT",
				lastDay: "[������]LT",
				lastWeek: "[���������������]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ���������",
				past: "%s ������������",
				s: "���ु������ी ���्������",
				m: "������������������",
				mm: "%d ������������",
				h: "������������������",
				hh: "%d ������������",
				d: "���������������",
				dd: "%d ���������",
				M: "������������ी������",
				MM: "%d ������ी������",
				y: "������������्���",
				yy: "%d ������्���"
			},
			preparse: function(a) {
				return a.replace(/[���२���४������������९���]/g, function(a) {
					return tg[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return sg[a]
				})
			},
			meridiemParse: /���������|���ु������|���������������|���������/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���������" === b ? 4 > a ? a : a + 12 : "���ु������" === b ? a : "���������������" === b ? a >= 10 ? a : a + 12 : "���������" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���������" : 10 > a ? "���ु������" : 17 > a ? "���������������" : 20 > a ? "���������" : "���������"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), Pf.defineLocale("hr", {
			months: {
				format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
				standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
			},
			monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
			weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
			weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
			weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u]LT",
				nextDay: "[sutra u]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u][nedjelju][u]LT";
					case 3:
						return "[u][srijedu][u]LT";
					case 6:
						return "[u][subotu][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u]dddd[u]LT"
					}
				},
				lastDay: "[jučer u]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
						return "[prošlu]dddd[u]LT";
					case 6:
						return "[prošle][subote][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prošli]dddd[u]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "prije%s",
				s: "par sekundi",
				m: md,
				mm: md,
				h: md,
				hh: md,
				d: "dan",
				dd: md,
				M: "mjesec",
				MM: md,
				y: "godinu",
				yy: md
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), "vasárnap h��tf��n kedden szerdán csüt��rt��k��n p��nteken szombaton".split("")),
		vg = (Pf.defineLocale("hu", {
			months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
			monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
			weekdays: "vasárnap_h��tf��_kedd_szerda_csüt��rt��k_p��ntek_szombat".split("_"),
			weekdaysShort: "vas_h��t_kedd_sze_csüt_p��n_szo".split("_"),
			weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "YYYY.MM.DD.",
				LL: "YYYY.MMMM D.",
				LLL: "YYYY.MMMM D.H:mm",
				LLLL: "YYYY.MMMM D.,dddd H:mm"
			},
			meridiemParse: /de|du/i,
			isPM: function(a) {
				return "u" === a.charAt(1).toLowerCase()
			},
			meridiem: function(a, b, c) {
				return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU"
			},
			calendar: {
				sameDay: "[ma]LT[-kor]",
				nextDay: "[holnap]LT[-kor]",
				nextWeek: function() {
					return od.call(this, !0)
				},
				lastDay: "[tegnap]LT[-kor]",
				lastWeek: function() {
					return od.call(this, !1)
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s múlva",
				past: "%s",
				s: nd,
				m: nd,
				mm: nd,
				h: nd,
				hh: nd,
				d: nd,
				dd: nd,
				M: nd,
				MM: nd,
				y: nd,
				yy: nd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("hy-am", {
			months: {
				format: "��ո����վար��_փետրվար��_մարտ��_ապր������_մայ��ս��_��ո������ս��_��ո������ս��_��գոստոս��_սեպտեմբեր��_��ոկտեմբեր��_��ոյեմբեր��_��եկտեմբեր��".split("_"),
				standalone: "��ո����վար_փետրվար_մարտ_ապր����_մայ��ս_��ո������ս_��ո������ս_��գոստոս_սեպտեմբեր_��ոկտեմբեր_��ոյեմբեր_��եկտեմբեր".split("_")
			},
			monthsShort: "����վ_փտր_մրտ_ապր_մյս_����ս_����ս_��գս_սպտ_��կտ_��մբ_��կտ".split("_"),
			weekdays: "կ��րակ��_երկո����աբ����_երե����աբ����_��որե����աբ����_������գ��աբ����_ո��րբա��_��աբա��".split("_"),
			weekdaysShort: "կրկ_երկ_եր��_��ր��_����գ_ո��րբ_��բ��".split("_"),
			weekdaysMin: "կրկ_երկ_եր��_��ր��_����գ_ո��րբ_��բ��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY ��.",
				LLL: "D MMMM YYYY ��.,HH:mm",
				LLLL: "dddd,D MMMM YYYY ��.,HH:mm"
			},
			calendar: {
				sameDay: "[այս��ր]LT",
				nextDay: "[վաղը]LT",
				lastDay: "[երեկ]LT",
				nextWeek: function() {
					return "dddd[��րը ժամը]LT"
				},
				lastWeek: function() {
					return "[ա��ցա��]dddd[��րը ժամը]LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ��ետո",
				past: "%s առա��",
				s: "մ����ա����վայրկյա��",
				m: "րոպե",
				mm: "%d րոպե",
				h: "ժամ",
				hh: "%d ժամ",
				d: "��ր",
				dd: "%d ��ր",
				M: "ամ��ս",
				MM: "%d ամ��ս",
				y: "տար��",
				yy: "%d տար��"
			},
			meridiemParse: /գ����երվա|առավոտվա|ցերեկվա|երեկոյա��/,
			isPM: function(a) {
				return /^(ցերեկվա|երեկոյա��)$/.test(a)
			},
			meridiem: function(a) {
				return 4 > a ? "գ����երվա" : 12 > a ? "առավոտվա" : 17 > a ? "ցերեկվա" : "երեկոյա��"
			},
			ordinalParse: /\d{1,2}|\d{1,2}-(����|ր��)/,
			ordinal: function(a, b) {
				switch (b) {
				case "DDD":
				case "w":
				case "W":
				case "DDDo":
					return 1 === a ? a + "-����" : a + "-ր��";
				default:
					return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY[pukul]HH.mm",
				LLLL: "dddd,D MMMM YYYY[pukul]HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul]LT",
				nextDay: "[Besok pukul]LT",
				nextWeek: "dddd[pukul]LT",
				lastDay: "[Kemarin pukul]LT",
				lastWeek: "dddd[lalu pukul]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam%s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("is", {
			months: "janúar_febrúar_mars_apr��l_ma��_jún��_júl��_ágúst_september_október_nóvember_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_ma��_jún_júl_ágú_sep_okt_nóv_des".split("_"),
			weekdays: "sunnudagur_mánudagur_þri��judagur_mi��vikudagur_fimmtudagur_f��studagur_laugardagur".split("_"),
			weekdaysShort: "sun_mán_þri_mi��_fim_f��s_lau".split("_"),
			weekdaysMin: "Su_Má_Þr_Mi_Fi_F��_La".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY[kl.]H:mm",
				LLLL: "dddd,D.MMMM YYYY[kl.]H:mm"
			},
			calendar: {
				sameDay: "[��dag kl.]LT",
				nextDay: "[á morgun kl.]LT",
				nextWeek: "dddd[kl.]LT",
				lastDay: "[��g��r kl.]LT",
				lastWeek: "[s����asta]dddd[kl.]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "eftir%s",
				past: "fyrir%s s����an",
				s: qd,
				m: qd,
				mm: qd,
				h: "klukkustund",
				hh: qd,
				d: qd,
				dd: qd,
				M: qd,
				MM: qd,
				y: qd,
				yy: qd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("it", {
			months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
			monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
			weekdays: "Domenica_Luned��_Marted��_Mercoled��_Gioved��_Venerd��_Sabato".split("_"),
			weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"),
			weekdaysMin: "Do_Lu_Ma_Me_Gi_Ve_Sa".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Oggi alle]LT",
				nextDay: "[Domani alle]LT",
				nextWeek: "dddd[alle]LT",
				lastDay: "[Ieri alle]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[la scorsa]dddd[alle]LT";
					default:
						return "[lo scorso]dddd[alle]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: function(a) {
					return (/^[0-9].+$/.test(a) ? "tra" : "in") + "" + a
				},
				past: "%s fa",
				s: "alcuni secondi",
				m: "un minuto",
				mm: "%d minuti",
				h: "un'ora",
				hh: "%d ore",
				d: "un giorno",
				dd: "%d giorni",
				M: "un mese",
				MM: "%d mesi",
				y: "un anno",
				yy: "%d anni"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("ja", {
			months: "1���_2���_3���_4���_5���_6���_7���_8���_9���_10���_11���_12���".split("_"),
			monthsShort: "1���_2���_3���_4���_5���_6���_7���_8���_9���_10���_11���_12���".split("_"),
			weekdays: "���������_���������_���������_���������_木������_���������_土������".split("_"),
			weekdaysShort: "���_���_���_���_木_���_土".split("_"),
			weekdaysMin: "���_���_���_���_木_���_土".split("_"),
			longDateFormat: {
				LT: "Ah���m���",
				LTS: "Ah���m���s���",
				L: "YYYY/MM/DD",
				LL: "YYYY���M���D���",
				LLL: "YYYY���M���D���Ah���m���",
				LLLL: "YYYY���M���D���Ah���m���dddd"
			},
			meridiemParse: /������|���後/i,
			isPM: function(a) {
				return "���後" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "������" : "���後"
			},
			calendar: {
				sameDay: "[������]LT",
				nextDay: "[������]LT",
				nextWeek: "[来���]dddd LT",
				lastDay: "[������]LT",
				lastWeek: "[������]dddd LT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}���/,
			ordinal: function(a, b) {
				switch (b) {
				case "d":
				case "D":
				case "DDD":
					return a + "���";
				default:
					return a
				}
			},
			relativeTime: {
				future: "%s後",
				past: "%s���",
				s: "������",
				m: "1���",
				mm: "%d���",
				h: "1������",
				hh: "%d������",
				d: "1���",
				dd: "%d���",
				M: "1������",
				MM: "%d������",
				y: "1���",
				yy: "%d���"
			}
		}), Pf.defineLocale("jv", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
			weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY[pukul]HH.mm",
				LLLL: "dddd,D MMMM YYYY[pukul]HH.mm"
			},
			meridiemParse: /enjing|siyang|sonten|ndalu/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "enjing" === b ? a : "siyang" === b ? a >= 11 ? a : a + 12 : "sonten" === b || "ndalu" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 11 > a ? "enjing" : 15 > a ? "siyang" : 19 > a ? "sonten" : "ndalu"
			},
			calendar: {
				sameDay: "[Dinten puniko pukul]LT",
				nextDay: "[Mbenjang pukul]LT",
				nextWeek: "dddd[pukul]LT",
				lastDay: "[Kala wingi pukul]LT",
				lastWeek: "dddd[kepengker pukul]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "wonten ing%s",
				past: "%s ingkang kepengker",
				s: "sawetawis detik",
				m: "setunggal menit",
				mm: "%d menit",
				h: "setunggal jam",
				hh: "%d jam",
				d: "sedinten",
				dd: "%d dinten",
				M: "sewulan",
				MM: "%d wulan",
				y: "setaun",
				yy: "%d taun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("ka", {
			months: {
				standalone: "���ან���ა�� ���_�������������� ���ალ���_���ა�� ტ���_აპ�� ���ლ���_���ა���ს���_������ნ���ს���_������ლ���ს���_ა���������სტო_ს���ქტ�������������� ���_ოქტო����������� ���_ნო�������������� ���_����������������������� ���".split("_"),
				format: "���ან���ა�� ს_�������������� ���ალს_���ა�� ტს_აპ�� ���ლ���ს_���ა���სს_������ნ���სს_������ლ���სს_ა���������სტს_ს���ქტ�������������� ს_ოქტო����������� ს_ნო�������������� ს_����������������������� ს".split("_")
			},
			monthsShort: "���ან_���������_���ა�� _აპ�� _���ა���_������ნ_������ლ_ა������_ს���ქ_ოქტ_ნო���_���������".split("_"),
			weekdays: {
				standalone: "����������� ა_ო�� შა���ა������_სა���შა���ა������_ო������შა���ა������_���უ���შა���ა������_პა�� ას������������_შა���ა������".split("_"),
				format: "����������� ას_ო�� შა���ა���ს_სა���შა���ა���ს_ო������შა���ა���ს_���უ���შა���ა���ს_პა�� ას���������ს_შა���ა���ს".split("_"),
				isFormat: /(������ნა|შ���������������)/
			},
			weekdaysShort: "���������_ო�� შ_სა���_ო������_���უ���_პა�� _შა���".split("_"),
			weekdaysMin: "������_ო�� _სა_ო���_���უ_პა_შა".split("_"),
			longDateFormat: {
				LT: "h:mm A",
				LTS: "h:mm:ss A",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY h:mm A",
				LLLL: "dddd,D MMMM YYYY h:mm A"
			},
			calendar: {
				sameDay: "[���������ს]LT[-������]",
				nextDay: "[������ალ]LT[-������]",
				lastDay: "[���უშ���ნ]LT[-������]",
				nextWeek: "[შ���������������]dddd LT[-������]",
				lastWeek: "[������ნა]dddd LT-������",
				sameElse: "L"
			},
			relativeTime: {
				future: function(a) {
					return /(���ა������|���უ������|საა������|������ლ���)/.test(a) ? a.replace(/���$/, "შ���") : a + "შ���"
				},
				past: function(a) {
					return /(���ა������|���უ������|საა������|���������|���������)/.test(a) ? a.replace(/(���|���)$/, "���ს ������ნ") : /������ლ���/.test(a) ? a.replace(/������ლ���$/, "���ლ���ს ������ნ") : void 0
				},
				s: "�� ა���������ნ������������ა������",
				m: "���უ������",
				mm: "%d ���უ������",
				h: "საა������",
				hh: "%d საა������",
				d: "���������",
				dd: "%d ���������",
				M: "���������",
				MM: "%d ���������",
				y: "������ლ���",
				yy: "%d ������ლ���"
			},
			ordinalParse: /0|1-ლ���|������-\d{1,2}|\d{1,2}-���/,
			ordinal: function(a) {
				return 0 === a ? a : 1 === a ? a + "-ლ���" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "������-" + a : a + "-���"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			0: "-����",
			1: "-����",
			2: "-����",
			3: "-����",
			4: "-����",
			5: "-����",
			6: "-����",
			7: "-����",
			8: "-����",
			9: "-����",
			10: "-����",
			20: "-����",
			30: "-����",
			40: "-����",
			50: "-����",
			60: "-����",
			70: "-����",
			80: "-����",
			90: "-����",
			100: "-����"
		}),
		wg = (Pf.defineLocale("kk", {
			months: "Қ��ң����р_А��п��н_Н��ур����_С��у��р_М��м��р_М��ус��м_Ш����де_Т��м����_Қ��ркү��ек_Қ������н_Қ��р������_��е����о��с��н".split("_"),
			monthsShort: "Қ��ң_А��п_Н��у_С��у_М��м_М��у_Ш����_Т��м_Қ��р_Қ����_Қ��р_��е��".split("_"),
			weekdays: "��ексен����_��ү��сен����_Се��сен����_С��рсен����_��е��сен����_����м��_Сен����".split("_"),
			weekdaysShort: "��ек_��ү��_Се��_С��р_��е��_����м_Сен".split("_"),
			weekdaysMin: "��к_����_С��_Ср_����_��м_Сн".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[��үг��н с��������]LT",
				nextDay: "[��р��ең с��������]LT",
				nextWeek: "dddd[с��������]LT",
				lastDay: "[Ке��е с��������]LT",
				lastWeek: "[Ө��кен ��п����н��ң]dddd[с��������]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ������нде",
				past: "%s ����р��н",
				s: "����рне��е секунд",
				m: "����р мину��",
				mm: "%d мину��",
				h: "����р с��������",
				hh: "%d с��������",
				d: "����р күн",
				dd: "%d күн",
				M: "����р ����",
				MM: "%d ����",
				y: "����р ������",
				yy: "%d ������"
			},
			ordinalParse: /\d{1,2}-(����|����)/,
			ordinal: function(a) {
				var b = a % 10,
					c = a >= 100 ? 100 : null;
				return a + (vg[a] || vg[b] || vg[c])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("km", {
			months: "���ករ���_ក���������������_������������_���េស���_���ស������_������ថ���������_កក���កដ���_សី�� ���_ក������������_ត���������_វ���������������ក���_���������ូ".split("_"),
			monthsShort: "���ករ���_ក���������������_������������_���េស���_���ស������_������ថ���������_កក���កដ���_សី�� ���_ក������������_ត���������_វ���������������ក���_���������ូ".split("_"),
			weekdays: "អ���������ត������_���័���������_អ������������រ_���������_������រ�� ស������ត���៍_ស���ក���រ_ស���រ៍".split("_"),
			weekdaysShort: "អ���������ត������_���័���������_អ������������រ_���������_������រ�� ស������ត���៍_ស���ក���រ_ស���រ៍".split("_"),
			weekdaysMin: "អ���������ត������_���័���������_អ������������រ_���������_������រ�� ស������ត���៍_ស���ក���រ_ស���រ៍".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ថ������ៃ���េ���������������]LT",
				nextDay: "[ស���អ���ក ������������]LT",
				nextWeek: "dddd[������������]LT",
				lastDay: "[������ស���������������������������]LT",
				lastWeek: "dddd[ស������ត����� ៍���������][������������]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s���ៀត",
				past: "%s���������",
				s: "������������������������វ������������ី",
				m: "���ួ������������ី",
				mm: "%d ���������ី",
				h: "���ួ���������������",
				hh: "%d ������������",
				d: "���ួ���ថ������ៃ",
				dd: "%d ថ������ៃ",
				M: "���ួ���ខ���",
				MM: "%d ខ���",
				y: "���ួ������������������",
				yy: "%d ���������������"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("ko", {
			months: "1���_2���_3���_4���_5���_6���_7���_8���_9���_10���_11���_12���".split("_"),
			monthsShort: "1���_2���_3���_4���_5���_6���_7���_8���_9���_10���_11���_12���".split("_"),
			weekdays: "일���일_������일_������일_������일_������일_������일_�����일".split("_"),
			weekdaysShort: "일_���_���_���_���_���_��".split("_"),
			weekdaysMin: "일_���_���_���_���_���_��".split("_"),
			longDateFormat: {
				LT: "A h��� m���",
				LTS: "A h��� m���s���",
				L: "YYYY.MM.DD",
				LL: "YYYY���MMMM D일",
				LLL: "YYYY���MMMM D일 A h��� m���",
				LLLL: "YYYY���MMMM D일 dddd A h��� m���"
			},
			calendar: {
				sameDay: "������LT",
				nextDay: "���일 LT",
				nextWeek: "dddd LT",
				lastDay: "���� � LT",
				lastWeek: "������주 dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ���",
				past: "%s ��",
				s: "������",
				ss: "%d���",
				m: "일���",
				mm: "%d���",
				h: "���������",
				hh: "%d������",
				d: "���루",
				dd: "%d일",
				M: "������",
				MM: "%d���",
				y: "일���",
				yy: "%d���"
			},
			ordinalParse: /\d{1,2}일/,
			ordinal: "%d일",
			meridiemParse: /������|������/,
			isPM: function(a) {
				return "������" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "�����" : "������"
			}
		}), Pf.defineLocale("lb", {
			months: "Januar_Februar_M��erz_Abr��ll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
			monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
			weekdays: "Sonndeg_M��indeg_D��nschdeg_M��ttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
			weekdaysShort: "So._M��._D��._M��._Do._Fr._Sa.".split("_"),
			weekdaysMin: "So_M��_D��_M��_Do_Fr_Sa".split("_"),
			longDateFormat: {
				LT: "H:mm[Auer]",
				LTS: "H:mm:ss[Auer]",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm[Auer]",
				LLLL: "dddd,D.MMMM YYYY H:mm[Auer]"
			},
			calendar: {
				sameDay: "[Haut um]LT",
				sameElse: "L",
				nextDay: "[Muer um]LT",
				nextWeek: "dddd[um]LT",
				lastDay: "[G��schter um]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 2:
					case 4:
						return "[Leschten]dddd[um]LT";
					default:
						return "[Leschte]dddd[um]LT"
					}
				}
			},
			relativeTime: {
				future: sd,
				past: td,
				s: "e puer Sekonnen",
				m: rd,
				mm: "%d Minutten",
				h: rd,
				hh: "%d Stonnen",
				d: rd,
				dd: "%d Deeg",
				M: rd,
				MM: "%d M��int",
				y: rd,
				yy: "%d Joer"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("lo", {
			months: "ມ������ກ������_ກຸມພາ_ມີ���າ_���ມສາ_ພ������ສ���ພາ_ມິ���ຸ���າ_ກ���ລ���ກ������_ສິ������າ_ກ������ຍາ_���ຸລາ_ພ������ິກ_������������າ".split("_"),
			monthsShort: "ມ������ກ������_ກຸມພາ_ມີ���າ_���ມສາ_ພ������ສ���ພາ_ມິ���ຸ���າ_ກ���ລ���ກ������_ສິ������າ_ກ������ຍາ_���ຸລາ_ພ������ິກ_������������າ".split("_"),
			weekdays: "���າ���ິ���_���������_������������າ���_ພຸ���_ພ������������_ສຸກ_���ສ���າ".split("_"),
			weekdaysShort: "���ິ���_���������_������������າ���_ພຸ���_ພ������������_ສຸກ_���ສ���າ".split("_"),
			weekdaysMin: "���_���_������_ພ_ພ���_ສກ_ສ".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "���������dddd D MMMM YYYY HH:mm"
			},
			meridiemParse: /������������ຊ������າ|������������ລ���/,
			isPM: function(a) {
				return "������������ລ���" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "������������ຊ������າ" : "������������ລ���"
			},
			calendar: {
				sameDay: "[ມ���������ີ���������ລາ]LT",
				nextDay: "[ມ������������������������ລາ]LT",
				nextWeek: "[���������]dddd[������າ������ລາ]LT",
				lastDay: "[ມ���������າ������ີ���������ລາ]LT",
				lastWeek: "[���������]dddd[���ລ���������ີ���������ລາ]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "���ີກ%s",
				past: "%sຜ���າ���ມາ",
				s: "ບ������������������າ���������ິ���າ���ີ",
				m: "1 ���າ���ີ",
				mm: "%d ���າ���ີ",
				h: "1 ຊ������������ມ���",
				hh: "%d ຊ������������ມ���",
				d: "1 ມ������",
				dd: "%d ມ������",
				M: "1 ���������������",
				MM: "%d ���������������",
				y: "1 ���ີ",
				yy: "%d ���ີ"
			},
			ordinalParse: /(���ີ���)\d{1,2}/,
			ordinal: function(a) {
				return "���ີ���" + a
			}
		}), {
			m: "minut��_minut��s_minut��",
			mm: "minut��s_minučių_minutes",
			h: "valanda_valandos_valand��",
			hh: "valandos_valandų_valandas",
			d: "diena_dienos_dien��",
			dd: "dienos_dienų_dienas",
			M: "m��nuo_m��nesio_m��nesį",
			MM: "m��nesiai_m��nesių_m��nesius",
			y: "metai_metų_metus",
			yy: "metai_metų_metus"
		}),
		xg = (Pf.defineLocale("lt", {
			months: {
				format: "sausio_vasario_kovo_balandžio_geguž��s_birželio_liepos_rugpj��čio_rugs��jo_spalio_lapkričio_gruodžio".split("_"),
				standalone: "sausis_vasaris_kovas_balandis_geguž��_birželis_liepa_rugpj��tis_rugs��jis_spalis_lapkritis_gruodis".split("_")
			},
			monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
			weekdays: {
				format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
				standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
				isFormat: /dddd HH:mm/
			},
			weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_� eš".split("_"),
			weekdaysMin: "S_P_A_T_K_Pn_�".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "YYYY[m.]MMMM D[d.]",
				LLL: "YYYY[m.]MMMM D[d.],HH:mm[val.]",
				LLLL: "YYYY[m.]MMMM D[d.],dddd,HH:mm[val.]",
				l: "YYYY-MM-DD",
				ll: "YYYY[m.]MMMM D[d.]",
				lll: "YYYY[m.]MMMM D[d.],HH:mm[val.]",
				llll: "YYYY[m.]MMMM D[d.],ddd,HH:mm[val.]"
			},
			calendar: {
				sameDay: "[� iandien]LT",
				nextDay: "[Rytoj]LT",
				nextWeek: "dddd LT",
				lastDay: "[Vakar]LT",
				lastWeek: "[Pra��jusį]dddd LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "po%s",
				past: "prieš%s",
				s: vd,
				m: wd,
				mm: zd,
				h: wd,
				hh: zd,
				d: wd,
				dd: zd,
				M: wd,
				MM: zd,
				y: wd,
				yy: zd
			},
			ordinalParse: /\d{1,2}-oji/,
			ordinal: function(a) {
				return a + "-oji"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			m: "min��tes_min��t��m_min��te_min��tes".split("_"),
			mm: "min��tes_min��t��m_min��te_min��tes".split("_"),
			h: "stundas_stundām_stunda_stundas".split("_"),
			hh: "stundas_stundām_stunda_stundas".split("_"),
			d: "dienas_dienām_diena_dienas".split("_"),
			dd: "dienas_dienām_diena_dienas".split("_"),
			M: "m��neša_m��nešiem_m��nesis_m��neši".split("_"),
			MM: "m��neša_m��nešiem_m��nesis_m��neši".split("_"),
			y: "gada_gadiem_gads_gadi".split("_"),
			yy: "gada_gadiem_gads_gadi".split("_")
		}),
		yg = (Pf.defineLocale("lv", {
			months: "janvāris_februāris_marts_apr��lis_maijs_j��nijs_j��lijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_j��n_j��l_aug_sep_okt_nov_dec".split("_"),
			weekdays: "sv��tdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
			weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
			weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY.",
				LL: "YYYY.[gada]D.MMMM",
				LLL: "YYYY.[gada]D.MMMM,HH:mm",
				LLLL: "YYYY.[gada]D.MMMM,dddd,HH:mm"
			},
			calendar: {
				sameDay: "[� odien pulksten]LT",
				nextDay: "[R��t pulksten]LT",
				nextWeek: "dddd[pulksten]LT",
				lastDay: "[Vakar pulksten]LT",
				lastWeek: "[Pagājušā]dddd[pulksten]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "p��c%s",
				past: "pirms%s",
				s: Dd,
				m: Cd,
				mm: Bd,
				h: Cd,
				hh: Bd,
				d: Cd,
				dd: Bd,
				M: Cd,
				MM: Bd,
				y: Cd,
				yy: Bd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["jedan minut", "jednog minuta"],
				mm: ["minut", "minuta", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mjesec", "mjeseca", "mjeseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function(a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function(a, b, c) {
				var d = yg.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + "" + yg.correctGrammaticalCase(a, d)
			}
		}),
		zg = (Pf.defineLocale("me", {
			months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
			monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
			weekdays: ["nedjelja", "ponedjeljak", "utorak", "srijeda", "četvrtak", "petak", "subota"],
			weekdaysShort: ["ned.", "pon.", "uto.", "sri.", "čet.", "pet.", "sub."],
			weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u]LT",
				nextDay: "[sjutra u]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u][nedjelju][u]LT";
					case 3:
						return "[u][srijedu][u]LT";
					case 6:
						return "[u][subotu][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u]dddd[u]LT"
					}
				},
				lastDay: "[juče u]LT",
				lastWeek: function() {
					var a = ["[prošle][nedjelje][u]LT", "[prošlog][ponedjeljka][u]LT", "[prošlog][utorka][u]LT", "[prošle][srijede][u]LT", "[prošlog][četvrtka][u]LT", "[prošlog][petka][u]LT", "[prošle][subote][u]LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "prije%s",
				s: "nekoliko sekundi",
				m: yg.translate,
				mm: yg.translate,
				h: yg.translate,
				hh: yg.translate,
				d: "dan",
				dd: yg.translate,
				M: "mjesec",
				MM: yg.translate,
				y: "godinu",
				yy: yg.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("mk", {
			months: "����ну��ри_��евру��ри_м��р��_��при��_м����_��уни_��у��и_��вгус��_сеп��ември_ок��омври_ноември_декември".split("_"),
			monthsShort: "����н_��ев_м��р_��пр_м����_��ун_��у��_��вг_сеп_ок��_ное_дек".split("_"),
			weekdays: "неде����_понеде��ник_в��орник_сред��_��е��вр��ок_пе��ок_с����о����".split("_"),
			weekdaysShort: "нед_пон_в��о_сре_��е��_пе��_с����".split("_"),
			weekdaysMin: "нe_пo_в��_ср_��е_пе_сa".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "D.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd,D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[��енес во]LT",
				nextDay: "[У��ре во]LT",
				nextWeek: "[��о]dddd[во]LT",
				lastDay: "[����ер��во]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 6:
						return "[����мин����������]dddd[во]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[����мин����ио��]dddd[во]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "пос��е%s",
				past: "пред%s",
				s: "неко��ку секунди",
				m: "мину����",
				mm: "%d мину��и",
				h: "����с",
				hh: "%d ����с��",
				d: "ден",
				dd: "%d ден��",
				M: "месе��",
				MM: "%d месе��и",
				y: "годин��",
				yy: "%d години"
			},
			ordinalParse: /\d{1,2}-(ев|ен|��и|ви|ри|ми)/,
			ordinal: function(a) {
				var b = a % 10,
					c = a % 100;
				return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-��и" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-��и"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("ml", {
			months: "ജനുവ���ി_���������്���ുവ���ി_���ാർച്ച്_ഏപ്���ിൽ_������യ്_ജ���ൺ_ജ���ല���_������സ്���്���്_സ���പ്���്���������ർ_������്ട������ർ_നവ������ർ_ഡിസ������ർ".split("_"),
			monthsShort: "ജനു._���������്���ു._���ാർ._ഏപ്���ി._������യ്_ജ���ൺ_ജ���ല���._������._സ���പ്���്���._������്ട���._നവ���._ഡിസ���.".split("_"),
			weekdays: "ഞായ���ാഴ്ച_���ി���്���ളാഴ്ച_ചൊവ്വാഴ്ച_���ു���നാഴ്ച_വ്യാഴാഴ്ച_വ���ള്ളിയാഴ്ച_���നിയാഴ്ച".split("_"),
			weekdaysShort: "ഞായർ_���ി���്���ൾ_ചൊവ്വ_���ു������_വ്യാഴ���_വ���ള്ളി_���നി".split("_"),
			weekdaysMin: "ഞാ_���ി_ചൊ_���ു_വ്യാ_വ���_���".split("_"),
			longDateFormat: {
				LT: "A h:mm-നു",
				LTS: "A h:mm:ss-നു",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm-നു",
				LLLL: "dddd,D MMMM YYYY,A h:mm-നു"
			},
			calendar: {
				sameDay: "[���ന്ന്]LT",
				nextDay: "[നാള���]LT",
				nextWeek: "dddd,LT",
				lastDay: "[���ന്നല���]LT",
				lastWeek: "[���ഴിഞ്ഞ]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ���ഴിഞ്ഞ്",
				past: "%s ���ു���പ്",
				s: "���ൽപ നി���ി������്���ൾ",
				m: "������ു ���ിനി���്���്",
				mm: "%d ���ിനി���്���്",
				h: "������ു ���ണി���്������ർ",
				hh: "%d ���ണി���്������ർ",
				d: "������ു ���ിവസ���",
				dd: "%d ���ിവസ���",
				M: "������ു ���ാസ���",
				MM: "%d ���ാസ���",
				y: "������ു വർ������",
				yy: "%d വർ������"
			},
			meridiemParse: /���ാ���്���ി|���ാവില���|���ച്ച ���ഴിഞ്ഞ്|വ������ുന്ന���������|���ാ���്���ി/i,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���ാ���്���ി" === b && a >= 4 || "���ച്ച ���ഴിഞ്ഞ്" === b || "വ������ുന്ന���������" === b ? a + 12 : a
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���ാ���്���ി" : 12 > a ? "���ാവില���" : 17 > a ? "���ച്ച ���ഴിഞ്ഞ്" : 20 > a ? "വ������ുന്ന���������" : "���ാ���്���ി"
			}
		}), {
			1: "���",
			2: "२",
			3: "���",
			4: "४",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "९",
			0: "���"
		}),
		Ag = {
			"���": "1",
			"२": "2",
			"���": "3",
			"४": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"९": "9",
			"���": "0"
		},
		Bg = (Pf.defineLocale("mr", {
			months: "���������������������ी_���������्���ु���������ी_���������्���_������्���������_������_���������_���ु������_���������्���_������्���������������_������्������������_���������्���������������_���������������������".split("_"),
			monthsShort: "������������._���������्���ु._���������्���._������्������._������._���������._���ु������._������._������्���������._������्������._���������्���������._���������������.".split("_"),
			weekdays: "������������������_������������������_���������������������_���ु������������_���ु���������������_���ु���्������������_������������������".split("_"),
			weekdaysShort: "���������_���������_������������_���ु���_���ु������_���ु���्���_���������".split("_"),
			weekdaysMin: "���_������_������_���ु_���ु_���ु_���".split("_"),
			longDateFormat: {
				LT: "A h:mm ���������������",
				LTS: "A h:mm:ss ���������������",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm ���������������",
				LLLL: "dddd,D MMMM YYYY,A h:mm ���������������"
			},
			calendar: {
				sameDay: "[������]LT",
				nextDay: "[������्������]LT",
				nextWeek: "dddd,LT",
				lastDay: "[���������]LT",
				lastWeek: "[���������ी���]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s������्������",
				past: "%s���������्���ी",
				s: Ed,
				m: Ed,
				mm: Ed,
				h: Ed,
				hh: Ed,
				d: Ed,
				dd: Ed,
				M: Ed,
				MM: Ed,
				y: Ed,
				yy: Ed
			},
			preparse: function(a) {
				return a.replace(/[���२���४������������९���]/g, function(a) {
					return Ag[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return zg[a]
				})
			},
			meridiemParse: /���������्���ी|������������ी|���ु���������ी|���������������������ी/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���������्���ी" === b ? 4 > a ? a : a + 12 : "������������ी" === b ? a : "���ु���������ी" === b ? a >= 10 ? a : a + 12 : "���������������������ी" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���������्���ी" : 10 > a ? "������������ी" : 17 > a ? "���ु���������ी" : 20 > a ? "���������������������ी" : "���������्���ी"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), Pf.defineLocale("ms-my", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY[pukul]HH.mm",
				LLLL: "dddd,D MMMM YYYY[pukul]HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul]LT",
				nextDay: "[Esok pukul]LT",
				nextWeek: "dddd[pukul]LT",
				lastDay: "[Kelmarin pukul]LT",
				lastWeek: "dddd[lepas pukul]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam%s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("ms", {
			months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
			weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
			weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
			weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY[pukul]HH.mm",
				LLLL: "dddd,D MMMM YYYY[pukul]HH.mm"
			},
			meridiemParse: /pagi|tengahari|petang|malam/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul]LT",
				nextDay: "[Esok pukul]LT",
				nextWeek: "dddd[pukul]LT",
				lastDay: "[Kelmarin pukul]LT",
				lastWeek: "dddd[lepas pukul]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam%s",
				past: "%s yang lepas",
				s: "beberapa saat",
				m: "seminit",
				mm: "%d minit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "၁",
			2: "���",
			3: "၃",
			4: "���",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "���",
			0: "၀"
		}),
		Cg = {
			"၁": "1",
			"���": "2",
			"၃": "3",
			"���": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"���": "9",
			"၀": "0"
		},
		Dg = (Pf.defineLocale("my", {
			months: "������်���ဝ���������_���������������်ဝ���������_���တ်_������ြ���_������_���ွ���်_������လ���ု���်_သြ���ုတ်_���က်တ���်������_အ������က်တ���ု������_������ုဝ���်������_������������်������".split("_"),
			monthsShort: "������်_������_���တ်_���ြ���_������_���ွ���်_လ���ု���်_သြ_���က်_အ������က်_������ု_������".split("_"),
			weekdays: "တ������်���������ွ���_တ������်���လ���_အ���်���������_���ု���������ဟ���း_ကြ���သ���တ���း_သ������ကြ���_���������".split("_"),
			weekdaysShort: "���ွ���_လ���_������_ဟ���း_ကြ���_သ������_������".split("_"),
			weekdaysMin: "���ွ���_လ���_������_ဟ���း_ကြ���_သ������_������".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[ယ������.] LT [���ှ���]",
				nextDay: "[������က်���ြ���်] LT [���ှ���]",
				nextWeek: "dddd LT [���ှ���]",
				lastDay: "[���������.က] LT [���ှ���]",
				lastWeek: "[���ြ���းခဲ���သ������] dddd LT [���ှ���]",
				sameElse: "L"
			},
			relativeTime: {
				future: "လ������ည်��� %s ���ှ���",
				past: "လွ���်ခဲ���သ������ %s က",
				s: "���က���က���်.အ���ည်း���ယ်",
				m: "တ���်������������်",
				mm: "%d ������������်",
				h: "တ���်������������",
				hh: "%d ������������",
				d: "တ���်���က်",
				dd: "%d ���က်",
				M: "တ���်လ",
				MM: "%d လ",
				y: "တ���်���ှ���်",
				yy: "%d ���ှ���်"
			},
			preparse: function(a) {
				return a.replace(/[၁���၃������������������၀]/g, function(a) {
					return Cg[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Bg[a]
				})
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("nb", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
			weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
			weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
			weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM YYYY",
				LLL: "D. MMMM YYYY [kl.] HH:mm",
				LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
			},
			calendar: {
				sameDay: "[i dag kl.] LT",
				nextDay: "[i morgen kl.] LT",
				nextWeek: "dddd [kl.] LT",
				lastDay: "[i går kl.] LT",
				lastWeek: "[forrige] dddd [kl.] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om %s",
				past: "for %s siden",
				s: "noen sekunder",
				m: "ett minutt",
				mm: "%d minutter",
				h: "en time",
				hh: "%d timer",
				d: "en dag",
				dd: "%d dager",
				M: "en måned",
				MM: "%d måneder",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "���",
			2: "२",
			3: "���",
			4: "४",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "९",
			0: "���"
		}),
		Eg = {
			"���": "1",
			"२": "2",
			"���": "3",
			"४": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"९": "9",
			"���": "0"
		},
		Fg = (Pf.defineLocale("ne", {
			months: "������������ी_���������्���ु������ी_���������्���_������्���������_������_���ु���_���ु���������_���������्���_���������्���������्������_������्������������_���������������्������_���������������्������".split("_"),
			monthsShort: "������._���������्���ु._���������्���_������्������._������_���ु���_���ु���������._������._���������्���._������्������._������������._������������.".split("_"),
			weekdays: "������������������_������������������_������्���������������_���ु������������_���������������������_���ु���्������������_������������������".split("_"),
			weekdaysShort: "���������._���������._������्������._���ु���._������������._���ु���्���._���������.".split("_"),
			weekdaysMin: "���._������._������._���ु._������._���ु._���.".split("_"),
			longDateFormat: {
				LT: "A������ h:mm ���������",
				LTS: "A������ h:mm:ss ���������",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A������h:mm ���������",
				LLLL: "dddd,D MMMM YYYY,A������h:mm ���������"
			},
			preparse: function(a) {
				return a.replace(/[���२���४������������९���]/g, function(a) {
					return Eg[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Dg[a]
				})
			},
			meridiemParse: /������������|���������������|������������������|������������/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "������������" === b ? 4 > a ? a : a + 12 : "���������������" === b ? a : "������������������" === b ? a >= 10 ? a : a + 12 : "������������" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 3 > a ? "������������" : 12 > a ? "���������������" : 16 > a ? "������������������" : 20 > a ? "������������" : "������������"
			},
			calendar: {
				sameDay: "[������]LT",
				nextDay: "[������������]LT",
				nextWeek: "[���������������]dddd[,]LT",
				lastDay: "[������������]LT",
				lastWeek: "[������������]dddd[,]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s������",
				past: "%s ���������������",
				s: "���������ी ���्������",
				m: "���������������������",
				mm: "%d ���������������",
				h: "������������्������",
				hh: "%d ������्������",
				d: "���������������",
				dd: "%d ���������",
				M: "���������������������",
				MM: "%d ���������������",
				y: "������������्���",
				yy: "%d ������्���"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")),
		Gg = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
		Hg = (Pf.defineLocale("nl", {
			months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
			monthsShort: function(a, b) {
				return /-MMM-/.test(b) ? Gg[a.month()] : Fg[a.month()]
			},
			weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
			weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
			weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD-MM-YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[vandaag om]LT",
				nextDay: "[morgen om]LT",
				nextWeek: "dddd[om]LT",
				lastDay: "[gisteren om]LT",
				lastWeek: "[afgelopen]dddd[om]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "over%s",
				past: "%s geleden",
				s: "een paar seconden",
				m: "����n minuut",
				mm: "%d minuten",
				h: "����n uur",
				hh: "%d uur",
				d: "����n dag",
				dd: "%d dagen",
				M: "����n maand",
				MM: "%d maanden",
				y: "����n jaar",
				yy: "%d jaar"
			},
			ordinalParse: /\d{1,2}(ste|de)/,
			ordinal: function(a) {
				return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de")
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("nn", {
			months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
			monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
			weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
			weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
			weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY[kl.]H:mm",
				LLLL: "dddd D.MMMM YYYY[kl.]HH:mm"
			},
			calendar: {
				sameDay: "[I dag klokka]LT",
				nextDay: "[I morgon klokka]LT",
				nextWeek: "dddd[klokka]LT",
				lastDay: "[I går klokka]LT",
				lastWeek: "[Føregåande]dddd[klokka]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om%s",
				past: "for%s sidan",
				s: "nokre sekund",
				m: "eit minutt",
				mm: "%d minutt",
				h: "ein time",
				hh: "%d timar",
				d: "ein dag",
				dd: "%d dagar",
				M: "ein månad",
				MM: "%d månader",
				y: "eit år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "���",
			2: "���",
			3: "���",
			4: "���",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "���",
			0: "���"
		}),
		Ig = {
			"���": "1",
			"���": "2",
			"���": "3",
			"���": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"���": "9",
			"���": "0"
		},
		Jg = (Pf.defineLocale("pa-in", {
			months: "ਜਨਵ������_���਼���ਵ������_���ਾ���ਚ_���ਪ���������ਲ_������_ਜ���ਨ_ਜ���ਲਾ���_������ਸ���_ਸ������������_������������������_ਨਵ���������_���ਸ���������".split("_"),
			monthsShort: "ਜਨਵ������_���਼���ਵ������_���ਾ���ਚ_���ਪ���������ਲ_������_ਜ���ਨ_ਜ���ਲਾ���_������ਸ���_ਸ������������_������������������_ਨਵ���������_���ਸ���������".split("_"),
			weekdays: "ਐ���ਵਾ���_ਸ������ਵਾ���_���������ਲਵਾ���_���������ਵਾ���_ਵ������ਵਾ���_ਸ਼������������ਵਾ���_ਸ਼ਨ���ਚ���ਵਾ���".split("_"),
			weekdaysShort: "ਐ���_ਸ������_���������ਲ_���������_ਵ������_ਸ਼���������_ਸ਼ਨ���".split("_"),
			weekdaysMin: "ਐ���_ਸ������_���������ਲ_���������_ਵ������_ਸ਼���������_ਸ਼ਨ���".split("_"),
			longDateFormat: {
				LT: "A h:mm ਵਜ���",
				LTS: "A h:mm:ss ਵਜ���",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm ਵਜ���",
				LLLL: "dddd,D MMMM YYYY,A h:mm ਵਜ���"
			},
			calendar: {
				sameDay: "[���ਜ]LT",
				nextDay: "[���ਲ]LT",
				nextWeek: "dddd,LT",
				lastDay: "[���ਲ]LT",
				lastWeek: "[ਪਿ���ਲ���]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ਵਿ���ਚ",
				past: "%s ਪਿ���ਲ���",
				s: "������ਝ ਸ���ਿ���ਟ",
				m: "���������ਿ���ਟ",
				mm: "%d ���ਿ���ਟ",
				h: "���������������ਟਾ",
				hh: "%d ������ਟ���",
				d: "������������ਿਨ",
				dd: "%d ���ਿਨ",
				M: "������������������ਨਾ",
				MM: "%d ���������ਨ���",
				y: "���������ਸਾਲ",
				yy: "%d ਸਾਲ"
			},
			preparse: function(a) {
				return a.replace(/[������������������������������]/g, function(a) {
					return Ig[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Hg[a]
				})
			},
			meridiemParse: /���ਾ���|ਸਵ������|������ਪ���ਿ���|ਸ਼ਾ���/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���ਾ���" === b ? 4 > a ? a : a + 12 : "ਸਵ������" === b ? a : "������ਪ���ਿ���" === b ? a >= 10 ? a : a + 12 : "ਸ਼ਾ���" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "���ਾ���" : 10 > a ? "ਸਵ������" : 17 > a ? "������ਪ���ਿ���" : 20 > a ? "ਸ਼ਾ���" : "���ਾ���"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), "stycze��_luty_marzec_kwiecie��_maj_czerwiec_lipiec_sierpie��_wrzesie��_październik_listopad_grudzie��".split("_")),
		Kg = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze��nia_października_listopada_grudnia".split("_"),
		Lg = (Pf.defineLocale("pl", {
			months: function(a, b) {
				return "" === b ? "(" + Kg[a.month()] + "|" + Jg[a.month()] + ")" : /D MMMM/.test(b) ? Kg[a.month()] : Jg[a.month()]
			},
			monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
			weekdays: "niedziela_poniedzia��ek_wtorek_��roda_czwartek_pi��tek_sobota".split("_"),
			weekdaysShort: "nie_pon_wt_��r_czw_pt_sb".split("_"),
			weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Dzi��o]LT",
				nextDay: "[Jutro o]LT",
				nextWeek: "[W]dddd[o]LT",
				lastDay: "[Wczoraj o]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[W zesz����niedziel��o]LT";
					case 3:
						return "[W zesz������rod��o]LT";
					case 6:
						return "[W zesz����sobot��o]LT";
					default:
						return "[W zesz��y]dddd[o]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "%s temu",
				s: "kilka sekund",
				m: Gd,
				mm: Gd,
				h: Gd,
				hh: Gd,
				d: "1 dzie��",
				dd: "%d dni",
				M: "miesi��c",
				MM: Gd,
				y: "rok",
				yy: Gd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("pt-br", {
			months: "Janeiro_Fevereiro_Mar��o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-feira_Ter��a-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D[de]MMMM[de]YYYY",
				LLL: "D[de]MMMM[de]YYYY[� s]HH:mm",
				LLLL: "dddd,D[de]MMMM[de]YYYY[� s]HH:mm"
			},
			calendar: {
				sameDay: "[Hoje � s]LT",
				nextDay: "[Amanhã � s]LT",
				nextWeek: "dddd[� s]LT",
				lastDay: "[Ontem � s]LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último]dddd[� s]LT" : "[Última]dddd[� s]LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em%s",
				past: "%s atrás",
				s: "poucos segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº"
		}), Pf.defineLocale("pt", {
			months: "Janeiro_Fevereiro_Mar��o_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
			monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
			weekdays: "Domingo_Segunda-Feira_Ter��a-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
			weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
			weekdaysMin: "Dom_2ª_3ª_4ª_5ª_6ª_Sáb".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D[de]MMMM[de]YYYY",
				LLL: "D[de]MMMM[de]YYYY HH:mm",
				LLLL: "dddd,D[de]MMMM[de]YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hoje � s]LT",
				nextDay: "[Amanhã � s]LT",
				nextWeek: "dddd[� s]LT",
				lastDay: "[Ontem � s]LT",
				lastWeek: function() {
					return 0 === this.day() || 6 === this.day() ? "[Último]dddd[� s]LT" : "[Última]dddd[� s]LT"
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "em%s",
				past: "há%s",
				s: "segundos",
				m: "um minuto",
				mm: "%d minutos",
				h: "uma hora",
				hh: "%d horas",
				d: "um dia",
				dd: "%d dias",
				M: "um mês",
				MM: "%d meses",
				y: "um ano",
				yy: "%d anos"
			},
			ordinalParse: /\d{1,2}º/,
			ordinal: "%dº",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("ro", {
			months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
			monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
			weekdays: "duminică_luni_mar��i_miercuri_joi_vineri_sâmbătă".split("_"),
			weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
			weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY H:mm",
				LLLL: "dddd,D MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[azi la]LT",
				nextDay: "[mâine la]LT",
				nextWeek: "dddd[la]LT",
				lastDay: "[ieri la]LT",
				lastWeek: "[fosta]dddd[la]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "peste%s",
				past: "%s ��n urmă",
				s: "câteva secunde",
				m: "un minut",
				mm: Hd,
				h: "o oră",
				hh: Hd,
				d: "o zi",
				dd: Hd,
				M: "o lună",
				MM: Hd,
				y: "un an",
				yy: Hd
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), [/^янв/i, /^��ев/i, /^м��р/i, /^��пр/i, /^м��[��|я]/i, /^июн/i, /^ию��/i, /^��вг/i, /^сен/i, /^ок��/i, /^ноя/i, /^дек/i]),
		Mg = (Pf.defineLocale("ru", {
			months: {
				format: "янв��ря_��евр����я_м��р����_��пре��я_м��я_июня_ию��я_��вгус����_сен��я��ря_ок��я��ря_ноя��ря_дек����ря".split("_"),
				standalone: "янв��рь_��евр����ь_м��р��_��пре��ь_м����_июнь_ию��ь_��вгус��_сен��я��рь_ок��я��рь_ноя��рь_дек����рь".split("_")
			},
			monthsShort: {
				format: "янв_��ев_м��р_��пр_м��я_июня_ию��я_��вг_сен_ок��_ноя_дек".split("_"),
				standalone: "янв_��ев_м��р��_��пр_м����_июнь_ию��ь_��вг_сен_ок��_ноя_дек".split("_")
			},
			weekdays: {
				standalone: "воскресенье_понеде��ьник_в��орник_сред��_��е��верг_пя��ни����_су����о����".split("_"),
				format: "воскресенье_понеде��ьник_в��орник_среду_��е��верг_пя��ни��у_су����о��у".split("_"),
				isFormat: /\[ ?[��в] ?(?:про����ую|с��едую��ую|э��у)? ?\] ?dddd/
			},
			weekdaysShort: "вс_пн_в��_ср_����_п��_с��".split("_"),
			weekdaysMin: "вс_пн_в��_ср_����_п��_с��".split("_"),
			monthsParse: Lg,
			longMonthsParse: Lg,
			shortMonthsParse: Lg,
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY г.",
				LLL: "D MMMM YYYY г.,HH:mm",
				LLLL: "dddd,D MMMM YYYY г.,HH:mm"
			},
			calendar: {
				sameDay: "[Сегодня в]LT",
				nextDay: "[����в��р��в]LT",
				lastDay: "[����ер��в]LT",
				nextWeek: function(a) {
					if (a.week() === this.week()) return 2 === this.day() ? "[��о]dddd[в]LT" : "[��]dddd[в]LT";
					switch (this.day()) {
					case 0:
						return "[��с��едую��ее]dddd[в]LT";
					case 1:
					case 2:
					case 4:
						return "[��с��едую��и��]dddd[в]LT";
					case 3:
					case 5:
					case 6:
						return "[��с��едую��ую]dddd[в]LT"
					}
				},
				lastWeek: function(a) {
					if (a.week() === this.week()) return 2 === this.day() ? "[��о]dddd[в]LT" : "[��]dddd[в]LT";
					switch (this.day()) {
					case 0:
						return "[��про����ое]dddd[в]LT";
					case 1:
					case 2:
					case 4:
						return "[��про��������]dddd[в]LT";
					case 3:
					case 5:
					case 6:
						return "[��про����ую]dddd[в]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "��ере��%s",
				past: "%s н������д",
				s: "неско��ько секунд",
				m: Jd,
				mm: Jd,
				h: "����с",
				hh: Jd,
				d: "день",
				dd: Jd,
				M: "меся��",
				MM: Jd,
				y: "год",
				yy: Jd
			},
			meridiemParse: /но��и|у��р��|дня|ве��ер��/i,
			isPM: function(a) {
				return /^(дня|ве��ер��)$/.test(a)
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "но��и" : 12 > a ? "у��р��" : 17 > a ? "дня" : "ве��ер��"
			},
			ordinalParse: /\d{1,2}-(��|го|я)/,
			ordinal: function(a, b) {
				switch (b) {
				case "M":
				case "d":
				case "DDD":
					return a + "-��";
				case "D":
					return a + "-го";
				case "w":
				case "W":
					return a + "-я";
				default:
					return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("se", {
			months: "o����ajagemánnu_guovvamánnu_njukčamánnu_cuo��ománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
			monthsShort: "o����j_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
			weekdays: "sotnabeaivi_vuossárga_ma����ebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
			weekdaysShort: "sotn_vuos_ma��_gask_duor_bear_láv".split("_"),
			weekdaysMin: "s_v_m_g_d_b_L".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "MMMM D.[b.]YYYY",
				LLL: "MMMM D.[b.]YYYY[ti.]HH:mm",
				LLLL: "dddd,MMMM D.[b.]YYYY[ti.]HH:mm"
			},
			calendar: {
				sameDay: "[otne ti]LT",
				nextDay: "[ihttin ti]LT",
				nextWeek: "dddd[ti]LT",
				lastDay: "[ikte ti]LT",
				lastWeek: "[ovddit]dddd[ti]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s geažes",
				past: "ma��it%s",
				s: "moadde sekunddat",
				m: "okta minuhta",
				mm: "%d minuhtat",
				h: "okta diimmu",
				hh: "%d diimmut",
				d: "okta beaivi",
				dd: "%d beaivvit",
				M: "okta mánnu",
				MM: "%d mánut",
				y: "okta jahki",
				yy: "%d jagit"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("si", {
			months: "������������������_������������������������_������������������_���������‍������������_������������_������������_������������_���������������������_���������������������������������_������������������������_���������������������������_���������������������������".split("_"),
			monthsShort: "������_���������_������������_���������_������������_������������_������������_���������_������������_���������_������������_������������".split("_"),
			weekdays: "���������������_���������������_���������������������������_���������������_������‍���������������������������������_������������������������_���������������������������".split("_"),
			weekdaysShort: "���������_���������_������_���������_������‍������_������������_���������".split("_"),
			weekdaysMin: "���_���_���_���_������‍���_������_������".split("_"),
			longDateFormat: {
				LT: "a h:mm",
				LTS: "a h:mm:ss",
				L: "YYYY/MM/DD",
				LL: "YYYY MMMM D",
				LLL: "YYYY MMMM D,a h:mm",
				LLLL: "YYYY MMMM D[������������]dddd,a h:mm:ss"
			},
			calendar: {
				sameDay: "[������]LT[���]",
				nextDay: "[���������]LT[���]",
				nextWeek: "dddd LT[���]",
				lastDay: "[���������]LT[���]",
				lastWeek: "[������������������]dddd LT[���]",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s������������",
				past: "%s���������������",
				s: "���������������������������������",
				m: "���������������������������",
				mm: "������������������������%d",
				h: "���������",
				hh: "���������%d",
				d: "������������",
				dd: "���������%d",
				M: "������������",
				MM: "���������%d",
				y: "���������",
				yy: "���������%d"
			},
			ordinalParse: /\d{1,2} ������������/,
			ordinal: function(a) {
				return a + "������������"
			},
			meridiemParse: /��������� ���������|��������� ���������|������.���|���.���./,
			isPM: function(a) {
				return "���.���." === a || "��������� ���������" === a
			},
			meridiem: function(a, b, c) {
				return a > 11 ? c ? "���.���." : "��������� ���������" : c ? "������.���." : "������������������"
			}
		}), "január_február_marec_apr��l_máj_jún_júl_august_september_október_november_december".split("_")),
		Ng = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"),
		Og = (Pf.defineLocale("sk", {
			months: Mg,
			monthsShort: Ng,
			weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
			weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
			weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[dnes o]LT",
				nextDay: "[zajtra o]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v nedeľu o]LT";
					case 1:
					case 2:
						return "[v]dddd[o]LT";
					case 3:
						return "[v stredu o]LT";
					case 4:
						return "[vo štvrtok o]LT";
					case 5:
						return "[v piatok o]LT";
					case 6:
						return "[v sobotu o]LT"
					}
				},
				lastDay: "[včera o]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[minulú nedeľu o]LT";
					case 1:
					case 2:
						return "[minulý]dddd[o]LT";
					case 3:
						return "[minulú stredu o]LT";
					case 4:
					case 5:
						return "[minulý]dddd[o]LT";
					case 6:
						return "[minulú sobotu o]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "pred%s",
				s: Ld,
				m: Ld,
				mm: Ld,
				h: Ld,
				hh: Ld,
				d: Ld,
				dd: Ld,
				M: Ld,
				MM: Ld,
				y: Ld,
				yy: Ld
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("sl", {
			months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
			monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
			weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
			weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
			weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danes ob]LT",
				nextDay: "[jutri ob]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[v][nedeljo][ob]LT";
					case 3:
						return "[v][sredo][ob]LT";
					case 6:
						return "[v][soboto][ob]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[v]dddd[ob]LT"
					}
				},
				lastDay: "[včeraj ob]LT",
				lastWeek: function() {
					switch (this.day()) {
					case 0:
						return "[prejšnjo][nedeljo][ob]LT";
					case 3:
						return "[prejšnjo][sredo][ob]LT";
					case 6:
						return "[prejšnjo][soboto][ob]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[prejšnji]dddd[ob]LT"
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "čez%s",
				past: "pred%s",
				s: Md,
				m: Md,
				mm: Md,
				h: Md,
				hh: Md,
				d: Md,
				dd: Md,
				M: Md,
				MM: Md,
				y: Md,
				yy: Md
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("sq", {
			months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_N��ntor_Dhjetor".split("_"),
			monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_N��n_Dhj".split("_"),
			weekdays: "E Diel_E H��n��_E Mart��_E M��rkur��_E Enjte_E Premte_E Shtun��".split("_"),
			weekdaysShort: "Die_H��n_Mar_M��r_Enj_Pre_Sht".split("_"),
			weekdaysMin: "D_H_Ma_M��_E_P_Sh".split("_"),
			meridiemParse: /PD|MD/,
			isPM: function(a) {
				return "M" === a.charAt(0)
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "PD" : "MD"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Sot n��]LT",
				nextDay: "[Nes��r n��]LT",
				nextWeek: "dddd[n��]LT",
				lastDay: "[Dje n��]LT",
				lastWeek: "dddd[e kaluar n��]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "n��%s",
				past: "%s m��par��",
				s: "disa sekonda",
				m: "nj��minut��",
				mm: "%d minuta",
				h: "nj��or��",
				hh: "%d or��",
				d: "nj��dit��",
				dd: "%d dit��",
				M: "nj��muaj",
				MM: "%d muaj",
				y: "nj��vit",
				yy: "%d vite"
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			words: {
				m: ["��ед��н мину��", "��едне мину��е"],
				mm: ["мину��", "мину��е", "мину����"],
				h: ["��ед��н с����", "��едног с������"],
				hh: ["с����", "с������", "с����и"],
				dd: ["д��н", "д��н��", "д��н��"],
				MM: ["месе��", "месе����", "месе��и"],
				yy: ["годин��", "године", "годин��"]
			},
			correctGrammaticalCase: function(a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function(a, b, c) {
				var d = Og.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + "" + Og.correctGrammaticalCase(a, d)
			}
		}),
		Pg = (Pf.defineLocale("sr-cyrl", {
			months: ["����ну��р", "��е��ру��р", "м��р��", "��при��", "м����", "��ун", "��у��", "��вгус��", "сеп��ем����р", "ок��о����р", "новем����р", "де��ем����р"],
			monthsShort: ["����н.", "��е��.", "м��р.", "��пр.", "м����", "��ун", "��у��", "��вг.", "сеп.", "ок��.", "нов.", "де��."],
			weekdays: ["неде����", "понеде����к", "у��ор��к", "сред��", "��е��вр����к", "пе����к", "су��о����"],
			weekdaysShort: ["нед.", "пон.", "у��о.", "сре.", "��е��.", "пе��.", "су��."],
			weekdaysMin: ["не", "по", "у��", "ср", "��е", "пе", "су"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[д��н��с у]LT",
				nextDay: "[су��р��у]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[у][неде��у][у]LT";
					case 3:
						return "[у][среду][у]LT";
					case 6:
						return "[у][су��о��у][у]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[у]dddd[у]LT"
					}
				},
				lastDay: "[��у��е у]LT",
				lastWeek: function() {
					var a = ["[про����е][неде��е][у]LT", "[про����ог][понеде��к��][у]LT", "[про����ог][у��орк��][у]LT", "[про����е][среде][у]LT", "[про����ог][��е��вр��к��][у]LT", "[про����ог][пе��к��][у]LT", "[про����е][су��о��е][у]LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "����%s",
				past: "пре%s",
				s: "неко��ико секунди",
				m: Og.translate,
				mm: Og.translate,
				h: Og.translate,
				hh: Og.translate,
				d: "д��н",
				dd: Og.translate,
				M: "месе��",
				MM: Og.translate,
				y: "годину",
				yy: Og.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			words: {
				m: ["jedan minut", "jedne minute"],
				mm: ["minut", "minute", "minuta"],
				h: ["jedan sat", "jednog sata"],
				hh: ["sat", "sata", "sati"],
				dd: ["dan", "dana", "dana"],
				MM: ["mesec", "meseca", "meseci"],
				yy: ["godina", "godine", "godina"]
			},
			correctGrammaticalCase: function(a, b) {
				return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2]
			},
			translate: function(a, b, c) {
				var d = Pg.words[c];
				return 1 === c.length ? b ? d[0] : d[1] : a + "" + Pg.correctGrammaticalCase(a, d)
			}
		}),
		Qg = (Pf.defineLocale("sr", {
			months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"],
			monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."],
			weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"],
			weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."],
			weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"],
			longDateFormat: {
				LT: "H:mm",
				LTS: "H:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D.MMMM YYYY",
				LLL: "D.MMMM YYYY H:mm",
				LLLL: "dddd,D.MMMM YYYY H:mm"
			},
			calendar: {
				sameDay: "[danas u]LT",
				nextDay: "[sutra u]LT",
				nextWeek: function() {
					switch (this.day()) {
					case 0:
						return "[u][nedelju][u]LT";
					case 3:
						return "[u][sredu][u]LT";
					case 6:
						return "[u][subotu][u]LT";
					case 1:
					case 2:
					case 4:
					case 5:
						return "[u]dddd[u]LT"
					}
				},
				lastDay: "[juče u]LT",
				lastWeek: function() {
					var a = ["[prošle][nedelje][u]LT", "[prošlog][ponedeljka][u]LT", "[prošlog][utorka][u]LT", "[prošle][srede][u]LT", "[prošlog][četvrtka][u]LT", "[prošlog][petka][u]LT", "[prošle][subote][u]LT"];
					return a[this.day()]
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "za%s",
				past: "pre%s",
				s: "nekoliko sekundi",
				m: Pg.translate,
				mm: Pg.translate,
				h: Pg.translate,
				hh: Pg.translate,
				d: "dan",
				dd: Pg.translate,
				M: "mesec",
				MM: Pg.translate,
				y: "godinu",
				yy: Pg.translate
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("sv", {
			months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
			monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
			weekdays: "s��ndag_måndag_tisdag_onsdag_torsdag_fredag_l��rdag".split("_"),
			weekdaysShort: "s��n_mån_tis_ons_tor_fre_l��r".split("_"),
			weekdaysMin: "s��_må_ti_on_to_fr_l��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "YYYY-MM-DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Idag]LT",
				nextDay: "[Imorgon]LT",
				lastDay: "[Igår]LT",
				nextWeek: "[På]dddd LT",
				lastWeek: "[I]dddd[s]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "om%s",
				past: "f��r%s sedan",
				s: "några sekunder",
				m: "en minut",
				mm: "%d minuter",
				h: "en timme",
				hh: "%d timmar",
				d: "en dag",
				dd: "%d dagar",
				M: "en månad",
				MM: "%d månader",
				y: "ett år",
				yy: "%d år"
			},
			ordinalParse: /\d{1,2}(e|a)/,
			ordinal: function(a) {
				var b = a % 10,
					c = 1 === ~~ (a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e";
				return a + c
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("sw", {
			months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
			monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
			weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
			weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[leo saa]LT",
				nextDay: "[kesho saa]LT",
				nextWeek: "[wiki ijayo]dddd[saat]LT",
				lastDay: "[jana]LT",
				lastWeek: "[wiki iliyopita]dddd[saat]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s baadaye",
				past: "tokea%s",
				s: "hivi punde",
				m: "dakika moja",
				mm: "dakika%d",
				h: "saa limoja",
				hh: "masaa%d",
				d: "siku moja",
				dd: "masiku%d",
				M: "mwezi mmoja",
				MM: "miezi%d",
				y: "mwaka mmoja",
				yy: "miaka%d"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), {
			1: "���",
			2: "௨",
			3: "���",
			4: "௪",
			5: "���",
			6: "���",
			7: "���",
			8: "���",
			9: "௯",
			0: "���"
		}),
		Rg = {
			"���": "1",
			"௨": "2",
			"���": "3",
			"௪": "4",
			"���": "5",
			"���": "6",
			"���": "7",
			"���": "8",
			"௯": "9",
			"���": "0"
		},
		Sg = (Pf.defineLocale("ta", {
			months: "���������������_���������்������������_���������்���்_������்������்_������_���������்_������������_���������்���்_���������்���������்������்_������்���������������்_���������்������்_������������்������்".split("_"),
			monthsShort: "���������������_���������்������������_���������்���்_������்������்_������_���������்_������������_���������்���்_���������்���������்������்_������்���������������்_���������்������்_������������்������்".split("_"),
			weekdays: "���������������்���ு���்���������������_���������்������்���������������_���������்���������்���������������_���ு������்���������������_������������������்���������������_���������்���������்���������������_������������்���������������".split("_"),
			weekdaysShort: "���������������ு_���������்������்_���������்���������்_���ு������்_������������������்_���������்������_���������".split("_"),
			weekdaysMin: "������_������_������_���ு_������_������_���".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,HH:mm",
				LLLL: "dddd,D MMMM YYYY,HH:mm"
			},
			calendar: {
				sameDay: "[������்���ு]LT",
				nextDay: "[������������]LT",
				nextWeek: "dddd,LT",
				lastDay: "[���������்���ு]LT",
				lastWeek: "[���������்���������������்]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ������்",
				past: "%s ���ு���்",
				s: "������ு ��������� ������������������������்",
				m: "������ு ������������������்",
				mm: "%d ������������������்������்",
				h: "������ு ��������� ������������்",
				hh: "%d ��������� ������������்",
				d: "������ு ���������்",
				dd: "%d ���������்������்",
				M: "������ு ������������்",
				MM: "%d ������������்������்",
				y: "������ு ������ு������்",
				yy: "%d ������்���ு������்"
			},
			ordinalParse: /\d{1,2}������ு/,
			ordinal: function(a) {
				return a + "������ு"
			},
			preparse: function(a) {
				return a.replace(/[���௨���௪������������௯���]/g, function(a) {
					return Rg[a]
				})
			},
			postformat: function(a) {
				return a.replace(/\d/g, function(a) {
					return Qg[a]
				})
			},
			meridiemParse: /������������்|���������������|������������|������்���������்|������்���������ு|������������/,
			meridiem: function(a, b, c) {
				return 2 > a ? "������������்" : 6 > a ? "���������������" : 10 > a ? "������������" : 14 > a ? "������்���������்" : 18 > a ? "������்���������ு" : 22 > a ? "������������" : "������������்"
			},
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "������������்" === b ? 2 > a ? a : a + 12 : "���������������" === b || "������������" === b ? a : "������்���������்" === b && a >= 10 ? a : a + 12
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), Pf.defineLocale("te", {
			months: "���������������_������������������������_������������������_���������������������_������_������������_���������������_������������������_������������������������������_������������������������_������������������_������������������������".split("_"),
			monthsShort: "������._���������������._������������������_���������������._������_������������_���������������_������._������������._���������������._������._������������.".split("_"),
			weekdays: "���������������������_���������������������_������������������������_���������������������_������������������������_���������������������������_���������������������".split("_"),
			weekdaysShort: "���������_���������_������������_���������_������������_���������������_���������".split("_"),
			weekdaysMin: "���_������_������_������_������_������_���".split("_"),
			longDateFormat: {
				LT: "A h:mm",
				LTS: "A h:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY,A h:mm",
				LLLL: "dddd,D MMMM YYYY,A h:mm"
			},
			calendar: {
				sameDay: "[������������]LT",
				nextDay: "[������������]LT",
				nextWeek: "dddd,LT",
				lastDay: "[���������������]LT",
				lastWeek: "[������]dddd,LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s ������",
				past: "%s ������������������",
				s: "������������������ ���������������������",
				m: "������������������������",
				mm: "%d ������������������������",
				h: "���������������",
				hh: "%d ���������������",
				d: "������������������",
				dd: "%d ������������������",
				M: "���������������",
				MM: "%d ���������������",
				y: "������������������������������",
				yy: "%d ������������������������������"
			},
			ordinalParse: /\d{1,2}���/,
			ordinal: "%d���",
			meridiemParse: /������������������|������������|���������������������������|������������������������/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "������������������" === b ? 4 > a ? a : a + 12 : "������������" === b ? a : "���������������������������" === b ? a >= 10 ? a : a + 12 : "������������������������" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "������������������" : 10 > a ? "������������" : 17 > a ? "���������������������������" : 20 > a ? "������������������������" : "������������������"
			},
			week: {
				dow: 0,
				doy: 6
			}
		}), Pf.defineLocale("th", {
			months: "มกรา���ม_กุม�� าพ������������_มี���า���ม_���ม���าย���_พ�������� า���ม_มิ���ุ���าย���_กรกฎา���ม_สิ������า���ม_ก������ยาย���_���ุลา���ม_พ���ศ���ิกาย���_������������า���ม".split("_"),
			monthsShort: "มกรา_กุม�� า_มี���า_���ม���า_พ�������� า_มิ���ุ���า_กรกฎา_สิ������า_ก������ยา_���ุลา_พ���ศ���ิกา_������������า".split("_"),
			weekdays: "���า���ิ���ย���_������������ร���_������������าร_พุ���_พ���������สบ���ี_ศุกร���_���สาร���".split("_"),
			weekdaysShort: "���า���ิ���ย���_������������ร���_������������าร_พุ���_พ���������ส_ศุกร���_���สาร���".split("_"),
			weekdaysMin: "���า._���._���._พ._พ���._ศ._ส.".split("_"),
			longDateFormat: {
				LT: "H ���า���ิกา m ���า���ี",
				LTS: "H ���า���ิกา m ���า���ี s ���ิ���า���ี",
				L: "YYYY/MM/DD",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY ������ลา H ���า���ิกา m ���า���ี",
				LLLL: "���������dddd���ี���D MMMM YYYY ������ลา H ���า���ิกา m ���า���ี"
			},
			meridiemParse: /ก���������������ี���ย���|���ล������������ี���ย���/,
			isPM: function(a) {
				return "���ล������������ี���ย���" === a
			},
			meridiem: function(a, b, c) {
				return 12 > a ? "ก���������������ี���ย���" : "���ล������������ี���ย���"
			},
			calendar: {
				sameDay: "[������������ี���������ลา]LT",
				nextDay: "[พรุ���������ี���������ลา]LT",
				nextWeek: "dddd[���������า ������ลา]LT",
				lastDay: "[���ม������������า������ี���������ลา]LT",
				lastWeek: "[���������]dddd[���ี������ล������������ลา]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "���ีก%s",
				past: "%s���ี������ล������",
				s: "���ม���กี������ิ���า���ี",
				m: "1 ���า���ี",
				mm: "%d ���า���ี",
				h: "1 ช������������ม���",
				hh: "%d ช������������ม���",
				d: "1 ���������",
				dd: "%d ���������",
				M: "1 ���������������",
				MM: "%d ���������������",
				y: "1 ���ี",
				yy: "%d ���ี"
			}
		}), Pf.defineLocale("tl-ph", {
			months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
			monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
			weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
			weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
			weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "MM/D/YYYY",
				LL: "MMMM D,YYYY",
				LLL: "MMMM D,YYYY HH:mm",
				LLLL: "dddd,MMMM DD,YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Ngayon sa]LT",
				nextDay: "[Bukas sa]LT",
				nextWeek: "dddd[sa]LT",
				lastDay: "[Kahapon sa]LT",
				lastWeek: "dddd[huling linggo]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "sa loob ng%s",
				past: "%s ang nakalipas",
				s: "ilang segundo",
				m: "isang minuto",
				mm: "%d minuto",
				h: "isang oras",
				hh: "%d oras",
				d: "isang araw",
				dd: "%d araw",
				M: "isang buwan",
				MM: "%d buwan",
				y: "isang taon",
				yy: "%d taon"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function(a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), "pagh_wa���_cha���_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")),
		Tg = (Pf.defineLocale("tlh", {
			months: "tera���jar wa���_tera���jar cha���_tera���jar wej_tera���jar loS_tera���jar vagh_tera���jar jav_tera���jar Soch_tera���jar chorgh_tera���jar Hut_tera���jar wa���maH_tera���jar wa���maH wa���_tera���jar wa���maH cha���".split("_"),
			monthsShort: "jar wa���_jar cha���_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa���maH_jar wa���maH wa���_jar wa���maH cha���".split("_"),
			weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[DaHjaj]LT",
				nextDay: "[wa���leS]LT",
				nextWeek: "LLL",
				lastDay: "[wa���Hu���]LT",
				lastWeek: "LLL",
				sameElse: "L"
			},
			relativeTime: {
				future: Nd,
				past: Od,
				s: "puS lup",
				m: "wa���tup",
				mm: Pd,
				h: "wa���rep",
				hh: Pd,
				d: "wa���jaj",
				dd: Pd,
				M: "wa���jar",
				MM: Pd,
				y: "wa���DIS",
				yy: Pd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), {
			1: "'inci",
			5: "'inci",
			8: "'inci",
			70: "'inci",
			80: "'inci",
			2: "'nci",
			7: "'nci",
			20: "'nci",
			50: "'nci",
			3: "'üncü",
			4: "'üncü",
			100: "'üncü",
			6: "'nc��",
			9: "'uncu",
			10: "'uncu",
			30: "'uncu",
			60: "'��nc��",
			90: "'��nc��"
		}),
		Ug = (Pf.defineLocale("tr", {
			months: "Ocak_Şubat_Mart_Nisan_May��s_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kas��m_Aral��k".split("_"),
			monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
			weekdays: "Pazar_Pazartesi_Sal��_��arşamba_Perşembe_Cuma_Cumartesi".split("_"),
			weekdaysShort: "Paz_Pts_Sal_��ar_Per_Cum_Cts".split("_"),
			weekdaysMin: "Pz_Pt_Sa_��a_Pe_Cu_Ct".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd,D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[bugün saat]LT",
				nextDay: "[yar��n saat]LT",
				nextWeek: "[haftaya]dddd[saat]LT",
				lastDay: "[dün]LT",
				lastWeek: "[ge��en hafta]dddd[saat]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s sonra",
				past: "%s ��nce",
				s: "birka��saniye",
				m: "bir dakika",
				mm: "%d dakika",
				h: "bir saat",
				hh: "%d saat",
				d: "bir gün",
				dd: "%d gün",
				M: "bir ay",
				MM: "%d ay",
				y: "bir y��l",
				yy: "%d y��l"
			},
			ordinalParse: /\d{1,2}'(inci|nci|üncü|nc��|uncu|��nc��)/,
			ordinal: function(a) {
				if (0 === a) return a + "'��nc��";
				var b = a % 10,
					c = a % 100 - b,
					d = a >= 100 ? 100 : null;
				return a + (Tg[b] || Tg[c] || Tg[d])
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("tzl", {
			months: "Januar_Fevraglh_Mar��_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listop��ts_Noemvar_Zecemvar".split("_"),
			monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
			weekdays: "Súladi_Lúne��i_Maitzi_Márcuri_Xhúadi_Vi��ner��i_Sáturi".split("_"),
			weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vi��_Sát".split("_"),
			weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD.MM.YYYY",
				LL: "D. MMMM [dallas] YYYY",
				LLL: "D. MMMM [dallas] YYYY HH.mm",
				LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
			},
			meridiemParse: /d\'o|d\'a/i,
			isPM: function(a) {
				return "d'o" === a.toLowerCase()
			},
			meridiem: function(a, b, c) {
				return a > 11 ? c ? "d'o" : "D'O" : c ? "d'a" : "D'A"
			},
			calendar: {
				sameDay: "[oxhi ��] LT",
				nextDay: "[dem�� ��] LT",
				nextWeek: "dddd [��] LT",
				lastDay: "[ieiri ��] LT",
				lastWeek: "[sür el] dddd [lasteu ��] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "osprei %s",
				past: "ja%s",
				s: Rd,
				m: Rd,
				mm: Rd,
				h: Rd,
				hh: Rd,
				d: Rd,
				dd: Rd,
				M: Rd,
				MM: Rd,
				y: Rd,
				yy: Rd
			},
			ordinalParse: /\d{1,2}\./,
			ordinal: "%d.",
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("tzm-latn", {
			months: "innayr_br��ayr��_mar��s��_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_kt��wbr��_nwwanbir_dwjnbir".split("_"),
			monthsShort: "innayr_br��ayr��_mar��s��_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_kt��wbr��_nwwanbir_dwjnbir".split("_"),
			weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[asdkh g]LT",
				nextDay: "[aska g]LT",
				nextWeek: "dddd[g]LT",
				lastDay: "[assant g]LT",
				lastWeek: "dddd[g]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dadkh s yan%s",
				past: "yan%s",
				s: "imik",
				m: "minuḍ",
				mm: "%d minuḍ",
				h: "sa��a",
				hh: "%d tassa��in",
				d: "ass",
				dd: "%d ossan",
				M: "ayowr",
				MM: "%d iyyirn",
				y: "asgas",
				yy: "%d isgasn"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), Pf.defineLocale("tzm", {
			months: "���ⵏⵏ���ⵢ���_���������ⵢ���_ⵎ������ⵚ_���������������_ⵎ���ⵢⵢ���_ⵢ���ⵏⵢ���_ⵢ���ⵍⵢ���ⵣ_���������ⵜ_������ⵜ���ⵏ���������_ⴽⵟ���������_ⵏ���ⵡ���ⵏ���������_������ⵊⵏ���������".split("_"),
			monthsShort: "���ⵏⵏ���ⵢ���_���������ⵢ���_ⵎ������ⵚ_���������������_ⵎ���ⵢⵢ���_ⵢ���ⵏⵢ���_ⵢ���ⵍⵢ���ⵣ_���������ⵜ_������ⵜ���ⵏ���������_ⴽⵟ���������_ⵏ���ⵡ���ⵏ���������_������ⵊⵏ���������".split("_"),
			weekdays: "���������ⵎ������_���ⵢⵏ������_���������ⵏ������_���ⴽ���������_���ⴽⵡ������_���������ⵎⵡ������_������������ⵢ������".split("_"),
			weekdaysShort: "���������ⵎ������_���ⵢⵏ������_���������ⵏ������_���ⴽ���������_���ⴽⵡ������_���������ⵎⵡ������_������������ⵢ������".split("_"),
			weekdaysMin: "���������ⵎ������_���ⵢⵏ������_���������ⵏ������_���ⴽ���������_���ⴽⵡ������_���������ⵎⵡ������_������������ⵢ������".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "dddd D MMMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[������������ⴴ]LT",
				nextDay: "[������ⴽ���ⴴ]LT",
				nextWeek: "dddd[ⴴ]LT",
				lastDay: "[���ⵚ���ⵏⵜ ⴴ]LT",
				lastWeek: "dddd[ⴴ]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "���������������ⵢ���ⵏ%s",
				past: "ⵢ���ⵏ%s",
				s: "���ⵎ���ⴽ",
				m: "ⵎ���ⵏ���ⴺ",
				mm: "%d ⵎ���ⵏ���ⴺ",
				h: "������������",
				hh: "%d ⵜ������������������ⵏ",
				d: "���������",
				dd: "%d o���������ⵏ",
				M: "���ⵢo������",
				MM: "%d ���ⵢⵢ������ⵏ",
				y: "������ⴳ������",
				yy: "%d ������ⴳ������ⵏ"
			},
			week: {
				dow: 6,
				doy: 12
			}
		}), Pf.defineLocale("uk", {
			months: {
				format: "с����ня_��ю��ого_��ере��ня_кв����ня_��р��вня_��ервня_��ипня_серпня_вересня_��ов��ня_��ис��оп��д��_грудня".split("_"),
				standalone: "с����ень_��ю��и��_��ере��ень_кв����ень_��р��вень_��ервень_��ипень_серпень_вересень_��ов��ень_��ис��оп��д_грудень".split("_")
			},
			monthsShort: "с����_��ю��_��ер_кв����_��р��в_��ерв_��ип_серп_вер_��ов��_��ис��_груд".split("_"),
			weekdays: Ud,
			weekdaysShort: "нд_пн_в��_ср_����_п��_с��".split("_"),
			weekdaysMin: "нд_пн_в��_ср_����_п��_с��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD.MM.YYYY",
				LL: "D MMMM YYYY р.",
				LLL: "D MMMM YYYY р.,HH:mm",
				LLLL: "dddd,D MMMM YYYY р.,HH:mm"
			},
			calendar: {
				sameDay: Vd("[Сьогодн��"),
				nextDay: Vd("[����в��р��"),
				lastDay: Vd("[����ор��"),
				nextWeek: Vd("[У]dddd["),
				lastWeek: function() {
					switch (this.day()) {
					case 0:
					case 3:
					case 5:
					case 6:
						return Vd("[Мину��о��]dddd[").call(this);
					case 1:
					case 2:
					case 4:
						return Vd("[Мину��ого]dddd[").call(this)
					}
				},
				sameElse: "L"
			},
			relativeTime: {
				future: "����%s",
				past: "%s ��ому",
				s: "дек����ьк��секунд",
				m: Td,
				mm: Td,
				h: "годину",
				hh: Td,
				d: "день",
				dd: Td,
				M: "м��ся��ь",
				MM: Td,
				y: "р��к",
				yy: Td
			},
			meridiemParse: /но����|р��нку|дня|ве��ор��/,
			isPM: function(a) {
				return /^(дня|ве��ор��)$/.test(a)
			},
			meridiem: function(a, b, c) {
				return 4 > a ? "но����" : 12 > a ? "р��нку" : 17 > a ? "дня" : "ве��ор��"
			},
			ordinalParse: /\d{1,2}-(��|го)/,
			ordinal: function(a, b) {
				switch (b) {
				case "M":
				case "d":
				case "DDD":
				case "w":
				case "W":
					return a + "-��";
				case "D":
					return a + "-го";
				default:
					return a
				}
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("uz", {
			months: "янв��р_��евр����_м��р��_��пре��_м����_июн_ию��_��вгус��_сен��я��р_ок��я��р_ноя��р_дек����р".split("_"),
			monthsShort: "янв_��ев_м��р_��пр_м����_июн_ию��_��вг_сен_ок��_ноя_дек".split("_"),
			weekdays: "Як����н����_��у����н����_Се����н����_��ор����н����_П��������н����_��ум��_Ш��н����".split("_"),
			weekdaysShort: "Як��_��у��_Се��_��ор_П����_��ум_Ш��н".split("_"),
			weekdaysMin: "Як_��у_Се_��о_П��_��у_Ш��".split("_"),
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY HH:mm",
				LLLL: "D MMMM YYYY,dddd HH:mm"
			},
			calendar: {
				sameDay: "[��угун со����]LT[д��]",
				nextDay: "[��р����г��]LT[д��]",
				nextWeek: "dddd[куни со����]LT[д��]",
				lastDay: "[Ке����со����]LT[д��]",
				lastWeek: "[У��г��н]dddd[куни со����]LT[д��]",
				sameElse: "L"
			},
			relativeTime: {
				future: "Якин%s и��ид��",
				past: "��ир не����%s о��дин",
				s: "��урс����",
				m: "��ир д��кик��",
				mm: "%d д��кик��",
				h: "��ир со����",
				hh: "%d со����",
				d: "��ир кун",
				dd: "%d кун",
				M: "��ир о��",
				MM: "%d о��",
				y: "��ир ��и��",
				yy: "%d ��и��"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), Pf.defineLocale("vi", {
			months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
			monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
			weekdays: "ch���nh���t_th���hai_th���ba_th���t��_th���năm_th���sáu_th���bảy".split("_"),
			weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
			meridiemParse: /sa|ch/i,
			isPM: function(a) {
				return /^ch$/i.test(a)
			},
			meridiem: function(a, b, c) {
				return 12 > a ? c ? "sa" : "SA" : c ? "ch" : "CH"
			},
			longDateFormat: {
				LT: "HH:mm",
				LTS: "HH:mm:ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM[năm]YYYY",
				LLL: "D MMMM[năm]YYYY HH:mm",
				LLLL: "dddd,D MMMM[năm]YYYY HH:mm",
				l: "DD/M/YYYY",
				ll: "D MMM YYYY",
				lll: "D MMM YYYY HH:mm",
				llll: "ddd,D MMM YYYY HH:mm"
			},
			calendar: {
				sameDay: "[Hôm nay lúc]LT",
				nextDay: "[Ng� y mai lúc]LT",
				nextWeek: "dddd[tu���n t���i lúc]LT",
				lastDay: "[Hôm qua lúc]LT",
				lastWeek: "dddd[tu���n r���i lúc]LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "%s t���i",
				past: "%s tr�����c",
				s: "v� i giây",
				m: "m���t phút",
				mm: "%d phút",
				h: "m���t gi���",
				hh: "%d gi���",
				d: "m���t ng� y",
				dd: "%d ng� y",
				M: "m���t tháng",
				MM: "%d tháng",
				y: "m���t năm",
				yy: "%d năm"
			},
			ordinalParse: /\d{1,2}/,
			ordinal: function(a) {
				return a
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("zh-cn", {
			months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
			monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
			weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
			weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
			weekdaysMin: "日_一_二_三_四_五_六".split("_"),
			longDateFormat: {
				LT: "Ah���mm���",
				LTS: "Ah���m���s���",
				L: "YYYY-MM-DD",
				LL: "YYYY���MMMD���",
				LLL: "YYYY���MMMD���Ah���mm���",
				LLLL: "YYYY���MMMD���ddddAh���mm���",
				l: "YYYY-MM-DD",
				ll: "YYYY���MMMD���",
				lll: "YYYY���MMMD���Ah���mm���",
				llll: "YYYY���MMMD���ddddAh���mm���"
			},
			meridiemParse: /������|���上|上���|������|������|���上/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "������" === b || "���上" === b || "上���" === b ? a : "������" === b || "���上" === b ? a + 12 : a >= 11 ? a : a + 12
			},
			meridiem: function(a, b, c) {
				var d = 100 * a + b;
				return 600 > d ? "������" : 900 > d ? "���上" : 1130 > d ? "上���" : 1230 > d ? "������" : 1800 > d ? "������" : "���上"
			},
			calendar: {
				sameDay: function() {
					return 0 === this.minutes() ? "[������]Ah[������]" : "[������]LT"
				},
				nextDay: function() {
					return 0 === this.minutes() ? "[������]Ah[������]" : "[������]LT"
				},
				lastDay: function() {
					return 0 === this.minutes() ? "[������]Ah[������]" : "[������]LT"
				},
				nextWeek: function() {
					var a, b;
					return a = Pf().startOf("week"), b = this.unix() - a.unix() >= 604800 ? "[���]" : "[���]", 0 === this.minutes() ? b + "dddAh������" : b + "dddAh���mm"
				},
				lastWeek: function() {
					var a, b;
					return a = Pf().startOf("week"), b = this.unix() < a.unix() ? "[上]" : "[���]", 0 === this.minutes() ? b + "dddAh������" : b + "dddAh���mm"
				},
				sameElse: "LL"
			},
			ordinalParse: /\d{1,2}(���|���|���)/,
			ordinal: function(a, b) {
				switch (b) {
				case "d":
				case "D":
				case "DDD":
					return a + "日";
				case "M":
					return a + "月";
				case "w":
				case "W":
					return a + "周";
				default:
					return a
				}
			},
			relativeTime: {
				future: "%s 后",
				past: "%s 前",
				s: "秒",
				m: "1 分钟",
				mm: "%d 分钟",
				h: "1 小时",
				hh: "%d 小时",
				d: "1 日",
				dd: "%d 日",
				M: "1 个月",
				MM: "%d 个月",
				y: "1 年",
				yy: "%d 年"
			},
			week: {
				dow: 1,
				doy: 4
			}
		}), Pf.defineLocale("zh-tw", {
			months: "一���_二���_������_������_������_������_七���_������_������_十���_十一���_十二���".split("_"),
			monthsShort: "1���_2���_3���_4���_5���_6���_7���_8���_9���_10���_11���_12���".split("_"),
			weekdays: "���期���_���期一_���期二_���期���_���期���_���期���_���期���".split("_"),
			weekdaysShort: "������_���一_���二_������_������_������_������".split("_"),
			weekdaysMin: "���_一_二_���_���_���_���".split("_"),
			longDateFormat: {
				LT: "Ah���mm���",
				LTS: "Ah���m���s���",
				L: "YYYY���MMMD���",
				LL: "YYYY���MMMD���",
				LLL: "YYYY���MMMD���Ah���mm���",
				LLLL: "YYYY���MMMD���ddddAh���mm���",
				l: "YYYY���MMMD���",
				ll: "YYYY���MMMD���",
				lll: "YYYY���MMMD���Ah���mm���",
				llll: "YYYY���MMMD���ddddAh���mm���"
			},
			meridiemParse: /���上|上���|������|������|���上/,
			meridiemHour: function(a, b) {
				return 12 === a && (a = 0), "���上" === b || "上���" === b ? a : "������" === b ? a >= 11 ? a : a + 12 : "������" === b || "���上" === b ? a + 12 : void 0
			},
			meridiem: function(a, b, c) {
				var d = 100 * a + b;
				return 900 > d ? "���上" : 1130 > d ? "上���" : 1230 > d ? "������" : 1800 > d ? "������" : "���上"
			},
			calendar: {
				sameDay: "[������]LT",
				nextDay: "[������]LT",
				nextWeek: "[���]ddddLT",
				lastDay: "[������]LT",
				lastWeek: "[上]ddddLT",
				sameElse: "L"
			},
			ordinalParse: /\d{1,2}(���|���|���)/,
			ordinal: function(a, b) {
				switch (b) {
				case "d":
				case "D":
				case "DDD":
					return a + "���";
				case "M":
					return a + "���";
				case "w":
				case "W":
					return a + "���";
				default:
					return a
				}
			},
			relativeTime: {
				future: "%s���",
				past: "%s���",
				s: "������",
				m: "一������",
				mm: "%d������",
				h: "一������",
				hh: "%d������",
				d: "一���",
				dd: "%d���",
				M: "一������",
				MM: "%d������",
				y: "一���",
				yy: "%d���"
			}
		}), Pf);
	return Ug.locale("en"), Ug
}), !
function(a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof exports ? module.exports = a : a(jQuery)
}(function(a) {
	function b(b) {
		var g = b || window.event,
			h = i.call(arguments, 1),
			j = 0,
			l = 0,
			m = 0,
			n = 0,
			o = 0,
			p = 0;
		if (b = a.event.fix(g), b.type = "mousewheel", "detail" in g && (m = -1 * g.detail), "wheelDelta" in g && (m = g.wheelDelta), "wheelDeltaY" in g && (m = g.wheelDeltaY), "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX), "axis" in g && g.axis === g.HORIZONTAL_AXIS && (l = -1 * m, m = 0), j = 0 === m ? l : m, "deltaY" in g && (m = -1 * g.deltaY, j = m), "deltaX" in g && (l = g.deltaX, 0 === m && (j = -1 * l)), 0 !== m || 0 !== l) {
			if (1 === g.deltaMode) {
				var q = a.data(this, "mousewheel-line-height");
				j *= q, m *= q, l *= q
			} else if (2 === g.deltaMode) {
				var r = a.data(this, "mousewheel-page-height");
				j *= r, m *= r, l *= r
			}
			if (n = Math.max(Math.abs(m), Math.abs(l)), (!f || f > n) && (f = n, d(g, n) && (f /= 40)), d(g, n) && (j /= 40, l /= 40, m /= 40), j = Math[j >= 1 ? "floor" : "ceil"](j / f), l = Math[l >= 1 ? "floor" : "ceil"](l / f), m = Math[m >= 1 ? "floor" : "ceil"](m / f), k.settings.normalizeOffset && this.getBoundingClientRect) {
				var s = this.getBoundingClientRect();
				o = b.clientX - s.left, p = b.clientY - s.top
			}
			return b.deltaX = l, b.deltaY = m, b.deltaFactor = f, b.offsetX = o, b.offsetY = p, b.deltaMode = 0, h.unshift(b, j, l, m), e && clearTimeout(e), e = setTimeout(c, 200), (a.event.dispatch || a.event.handle).apply(this, h)
		}
	}
	function c() {
		f = null
	}
	function d(a, b) {
		return k.settings.adjustOldDeltas && "mousewheel" === a.type && b % 120 === 0
	}
	var e, f, g = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
		h = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
		i = Array.prototype.slice;
	if (a.event.fixHooks) for (var j = g.length; j;) a.event.fixHooks[g[--j]] = a.event.mouseHooks;
	var k = a.event.special.mousewheel = {
		version: "3.1.12",
		setup: function() {
			if (this.addEventListener) for (var c = h.length; c;) this.addEventListener(h[--c], b, !1);
			else this.onmousewheel = b;
			a.data(this, "mousewheel-line-height", k.getLineHeight(this)), a.data(this, "mousewheel-page-height", k.getPageHeight(this))
		},
		teardown: function() {
			if (this.removeEventListener) for (var c = h.length; c;) this.removeEventListener(h[--c], b, !1);
			else this.onmousewheel = null;
			a.removeData(this, "mousewheel-line-height"), a.removeData(this, "mousewheel-page-height")
		},
		getLineHeight: function(b) {
			var c = a(b),
				d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
			return d.length || (d = a("body")), parseInt(d.css("fontSize"), 10) || parseInt(c.css("fontSize"), 10) || 16
		},
		getPageHeight: function(b) {
			return a(b).height()
		},
		settings: {
			adjustOldDeltas: !0,
			normalizeOffset: !0
		}
	};
	a.fn.extend({
		mousewheel: function(a) {
			return a ? this.bind("mousewheel", a) : this.trigger("mousewheel")
		},
		unmousewheel: function(a) {
			return this.unbind("mousewheel", a)
		}
	})
}), function(a, b, c) {
	"use strict";

	function d(c) {
		var d = new Date,
			e = 0,
			f = this;
		return f.onChange = [], f.validate = function() {
			c.minTime && (c.minTime instanceof Date || (c.minTime = f.parse(c.minTime)), f.isValid(c.minTime) ? d < c.minTime && (d = f.cloneTime(c.minTime)) : c.minTime = !1), c.maxTime && (c.maxTime instanceof Date || (c.maxTime = f.parse(c.maxTime)), f.isValid(c.maxTime) ? d > c.maxTime && (d = f.cloneTime(c.maxTime)) : c.maxTime = !1)
		}, f.cloneTime = function(a) {
			var b = new Date;
			return b.setHours(a.getHours()), b.setMinutes(a.getMinutes()), b.setSeconds(a.getSeconds()), b
		}, f.isValid = function(a) {
			return "[object Date]" !== Object.prototype.toString.call(a) ? !1 : !isNaN(a.getTime())
		}, f.hours12Format = function() {
			var a = d.getHours();
			return 0 === a ? 12 : a > 0 && 13 > a ? a : a > 12 && 23 >= a ? a - 12 : void 0
		}, f.to12Format = function(a) {
			return 12 !== a || e ? e && 12 > a ? a + 12 : a : 0
		}, f.change = function() {
			var b;
			if (f.onChange.length) for (b = 0; b < f.onChange.length; b += 1) a.isFunction(f.onChange[b]) && f.onChange[b].call(f, f.get(), d)
		}, f.index = function(a, b) {
			var g, h = d.getTime();
			if (void 0 !== b && null !== b) {
				switch (b = parseInt(b, 10), a) {
				case 1:
					d.setMinutes(b);
					break;
				case 2:
					d.setSeconds(b);
					break;
				case 3:
					g = d.getHours(), e = b, 12 > g && b ? d.setHours(g + 12) : g >= 12 && !b && d.setHours(g - 12);
					break;
				default:
					d.setHours(c.twelveHoursFormat ? f.to12Format(b) : b)
				}
				e = f.index(3), f.validate(), h !== d.getTime() && f.change()
			}
			switch (a) {
			case 1:
				return d.getMinutes();
			case 2:
				return d.getSeconds();
			case 3:
				return e = d.getHours() >= 12 ? 1 : 0;
			default:
				return c.twelveHoursFormat ? f.hours12Format() : d.getHours()
			}
		}, f.parse = function(a) {
			return void 0 !== b.moment ? moment(a, c.inputFormat).toDate() : Date.parse(a)
		}, f.set = function(a) {
			var b = d.getTime(),
				c = f.isValid(a) ? a : f.parse(a);
			f.isValid(c) && (d = c, b !== d.getTime() && (f.validate(), f.change()))
		}, f.get = function() {
			return void 0 !== b.moment ? moment(d).format(c.inputFormat) : String(d)
		}, f.getTime = function() {
			return d.getTime()
		}, f
	}
	function e(b, d, e) {
		var f = this;
		f.box = e || c.body, f.options = d, f.startinput = a(b), f.uniqueid = g, g += 1, f.init()
	}
	function f(d, e) {
		var f = this;
		f.uniqueid = g, g += 1, f.options = e, f.startinput = a(d), f.picker = a('<div class="periodpicker_timepicker_dialog"></div>'), f.startinput.TimePicker(e, f.picker), a(c.body).append(f.picker), f.startinput.on("focus.xdsoft" + f.uniqueid, function() {
			f.show()
		}), a(b).on("mousedown.xdsoft" + f.uniqueid, function() {
			f.hide()
		})
	}
	var g = 1;
	e.prototype.getRealOffset = function(a) {
		var b = this.getIndex(a);
		return -1 !== this.indexes[a].indexOf(b) ? this.indexes[a].indexOf(b) * this.itemHeight() : 0
	}, e.prototype.getIndex = function(a) {
		return Math.floor(this.currentime.index(a) / this.options.steps[a]) * this.options.steps[a]
	}, e.prototype.height = function() {
		return this.timepicker ? parseInt(this.timepicker.get(0).offsetHeight, 10) : 0
	}, e.prototype.itemHeight = function() {
		return this.items[0][0] ? parseInt(this.items[0][0].get(0).offsetHeight, 10) : 22
	}, e.prototype.highlight = function() {
		var a, b;
		for (void 0 === this.last && (this.last = []), a = 0; a < this.boxes.length; a += 1) b = this.getIndex(a), void 0 !== this.items[a][this.indexes[a].indexOf(b)] && this.items[a][this.indexes[a].indexOf(b)].addClass("active"), void 0 !== this.last[a] && this.last[a] !== this.indexes[a].indexOf(b) && void 0 !== this.items[a][this.last[a]] && this.items[a][this.last[a]].removeClass("active"), this.last[a] = this.indexes[a].indexOf(b)
	}, e.prototype.setTime = function(a) {
		var b, c;
		if (void 0 !== a && a && a.length) for (c = this.boxes.length - 1; c >= 0; c -= 1) this.currentime.index(c, a[c]);
		for (c = 0; c < this.boxes.length; c += 1) void 0 !== this.boxes[c] && (b = -this.getRealOffset(c) + Math.ceil(this.height() - this.itemHeight()) / 2, this.boxes[c].css("margin-top", b + "px"));
		this.highlight()
	}, e.prototype.xy = function(a) {
		var b, c = {
			x: 0,
			y: 0
		};
		return "touchstart" === a.type || "touchmove" === a.type || "touchend" === a.type || "touchcancel" === a.type ? (b = a.originalEvent.touches[0] || a.originalEvent.changedTouches[0], c.x = b.clientX, c.y = b.clientY) : ("mousedown" === a.type || "mouseup" === a.type || "mousemove" === a.type || "mouseover" === a.type || "mouseout" === a.type || "mouseenter" === a.type || "mouseleave" === a.type) && (c.x = a.clientX, c.y = a.clientY), c
	}, e.prototype.init = function() {
		var c, e, f, g = this;
		g.timepicker = a('<div class="periodpicker_timepicker xdsoft_noselect"><div class="periodpicker_timepicker_sliders">' + (g.options.hours ? '<div data-index="0" class="periodpicker_hourspicker_box"><div class="periodpicker_hourspicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : "") + (g.options.minutes ? '<div data-index="1" class="periodpicker_minutespicker_box"><div class="periodpicker_minutespicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : "") + (g.options.seconds ? '<div data-index="2" class="periodpicker_secondspicker_box"><div class="periodpicker_secondspicker"></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : "") + (g.options.ampm ? '<div data-index="3" class="periodpicker_ampmpicker_box"><div class="periodpicker_ampmpicker"><div data-value="0" class="periodpicker_0 periodpicker_item">AM</div><div data-value="1" class="periodpicker_1 periodpicker_item">PM</div></div><input class="periodpicker_key_hooker" readonly="true" type="text"/></div>' : "") + '</div><div class="periodpicker_timepicker_center"></div></div>'), g.currentime = new d(g.options), g.startinput.length && g.startinput.val() ? g.currentime.set(g.startinput.val()) : (g.startinput.val(g.options.defaultTime), g.currentime.set(g.options.defaultTime)), g.options.onChange && g.currentime.onChange.push(g.options.onChange), g.options.saveOnChange && g.currentime.onChange.push(function(a) {
			var b = g.startinput.val();
			g.startinput.val(a), a !== b && g.startinput.trigger("change")
		}), g.boxes = {}, f = 0, g.timepicker.find(".periodpicker_timepicker_sliders>div>div").each(function() {
			f = Math.max(f, parseInt(a(this).parent().data("index"), 10)), g.boxes[parseInt(a(this).parent().data("index"), 10)] = a(this)
		}), g.boxes.length = f + 1, g.timepicker.find(".periodpicker_timepicker_sliders>div").addClass("periodpicker_col" + g.timepicker.find(".periodpicker_timepicker_sliders>div>div").length), g.timer2 = 0, g.timepicker.on("mousewheel", function(a) {
			g.options.mouseWheel && (a.preventDefault(), a.stopPropagation())
		}), g.timepicker.find(".periodpicker_timepicker_sliders>div").on("mousewheel", function(b) {
			if (g.options.mouseWheel) {
				var c = a(this),
					d = [null, null, null, null],
					e = parseInt(a(this).data("index"), 10);
				c.addClass("draggable"), 3 > e ? d[e] = g.currentime.index(e) + -b.deltaY * (g.options.inverseMouseWheel ? -1 : 1) * g.options.steps[e] : d[e] = g.currentime.index(e) - 1, g.setTime(d), clearTimeout(g.timer2), g.timer2 = setTimeout(function() {
					c.removeClass("draggable")
				}, 300), b.preventDefault(), b.stopPropagation()
			}
		}), g.timepicker.find(".periodpicker_timepicker_sliders").on("click", ".periodpicker_item", function() {
			if (g.options.clickAndSelect) {
				var b = parseInt(a(this).data("value"), 10),
					c = [null, null, null, null],
					d = parseInt(a(this).parent().parent().data("index"), 10);
				g.iwasdragged || isNaN(b) || (c[d] = b, g.setTime(c))
			}
		}), g.timer = 0, g.timepicker.find(".periodpicker_timepicker_sliders>div input.periodpicker_key_hooker").on("keydown", function(b) {
			if (g.options.listenKeyPress) {
				var c = [null, null, null, null],
					d = a(this),
					e = parseInt(d.parent().data("index"), 10),
					f = !1;
				switch (b.keyCode) {
				case 38:
					c[e] = g.currentime.index(e) - g.options.steps[e], g.setTime(c), f = !0;
					break;
				case 39:
					a(this).parent().next().length && a(this).parent().next().find("input.periodpicker_key_hooker").eq(0).focus(), f = !0;
					break;
				case 37:
					a(this).parent().prev().length && a(this).parent().prev().find("input.periodpicker_key_hooker").eq(0).focus(), f = !0;
					break;
				case 40:
					c[e] = g.currentime.index(e) + g.options.steps[e], g.setTime(c), f = !0;
					break;
				default:
					/[0-9amp]/i.test(String.fromCharCode(b.keyCode)) && (d.val(d.val() + String.fromCharCode(b.keyCode)), f = !0), clearTimeout(g.timer), g.timer = setTimeout(function() {
						var a = d.val();
						d.val(""), 3 === e && a.length && (a = "p" === a.toLowerCase().substr(0, 1) ? 1 : 0), a = parseInt(a, 10), isNaN(a) || (c[e] = a, g.setTime(c))
					}, 300)
				}
				f && (b.preventDefault(), b.stopImmediatePropagation())
			}
		}), g.timepicker.find(".periodpicker_timepicker_sliders>div").on("mousedown.xdsoft touchstart.xdsoft", function(b) {
			g.options.dragAndDrop && (g.drag = !0, c = [g.xy(b).x, g.xy(b).y], c[4] = parseInt(a(this).data("index"), 10), c[3] = g.boxes[c[4]], c[2] = parseInt(c[3].css("margin-top"), 10), c[3].find("div").removeClass("active"), c[3].parent().addClass("draggable"), g.iwasdragged = !1, b.preventDefault(), b.stopImmediatePropagation()), a(this).find("input.periodpicker_key_hooker").focus()
		}), g.iwasdragged = !1, a(b).on("mouseup.xdsoft" + g.uniqueid + "touchend.xdsoft" + g.uniqueid, function(a) {
			g.options.dragAndDrop && g.drag && (g.drag = !1, g.setTime(), c[3].parent().removeClass("draggable"), a.stopImmediatePropagation())
		}).on("mousemove.xdsoft" + g.uniqueid + "touchmove.xdsoft" + g.uniqueid, function(a) {
			if (g.drag && g.options.dragAndDrop) {
				e = [g.xy(a).x - c[0], g.xy(a).y - c[1]], c[3].css({
					marginTop: c[2] + e[1]
				}), e[1] > 10 && (g.iwasdragged = !0);
				var b = -Math.round((-(g.height() - g.itemHeight()) / 2 + c[2] + e[1]) / g.itemHeight());
				0 > b && (b = 0), b >= g.items[c[4]].length && (b = g.items[c[4]].length - 1), b = parseInt(g.items[c[4]][b].data("value"), 10), g.currentime.index(c[4], b), g.highlight(), a.preventDefault()
			}
		}), a(g.box).append(g.timepicker), g.generateTimepicker(), g.setTime()
	}, e.prototype.destroy = function() {
		var c = this;
		a(b).off("mouseup.xdsoft" + c.uniqueid + "touchend.xdsoft" + c.uniqueid).off("mousemove.xdsoft" + c.uniqueid + "touchmove.xdsoft" + c.uniqueid), c.timepicker.remove(), delete c.timepicker, delete c.boxes, delete c.currentime
	}, e.prototype.generateTimepicker = function() {
		var b, c, d = this;
		for (d.items = [
			[],
			[],
			[],
			[]
		], d.indexes = [
			[],
			[],
			[],
			[0, 1]
		], b = 0; 2 >= b; b += 1) if (void 0 !== d.options.parts[b] && void 0 !== d.boxes[b]) {
			if (!d.options.twelveHoursFormat || b > 0) for (c = d.options.parts[b][0][0]; c <= d.options.parts[b][0][1]; c += d.options.steps[b]) d.items[b].push(a('<div data-value="' + c + '" class="periodpicker_' + c + 'periodpicker_item">' + (10 > c ? "0" : "") + c + "</div>")), d.indexes[b].push(c);
			else for (d.items[b].push(a('<div data-value="12" class="periodpicker_12 periodpicker_item">12</div>')), d.indexes[b].push(12), c = 1; 11 >= c; c += d.options.steps[b]) d.items[b].push(a('<div data-value="' + c + '"class="periodpicker_' + c + ' periodpicker_item">' + (10 > c ? "0" : "") + c + "</div>")), d.indexes[b].push(c);
			d.boxes[b].html(d.items[b])
		}
		d.boxes[3] && d.boxes[3].length && d.boxes[b].find("div").each(function() {
			d.items[3].push(a(this))
		})
	}, a.fn.TimePicker = function(b, c) {
		var d, f = this;
		return this.each(function() {
			var g, h = a(this),
				i = h.data("timepicker");
			if (i) switch (b) {
			case "stopDrag":
				i.drag = !1, i.timepicker.find(".draggable").removeClass("draggable"), i.setTime();
				break;
			case "regenerate":
				i.setTime();
				break;
			case "destroy":
				i.destroy();
				break;
			case "save":
				h.val(i.currentime.get());
				break;
			case "setValue":
				i.currentime.set(c), i.setTime();
				break;
			case "setMin":
			case "setMax":
				d = i.currentime.getTime(), i.options["setMin" === b ? "minTime" : "maxTime"] = c, i.currentime.validate(), i.setTime(), d !== i.currentime.getTime() && i.currentime.change();
				break;
			case "getValue":
				f = i.currentime.get()
			} else g = a.extend(!0, {}, a.fn.TimePicker.defaultOptions, b), i = new e(this, g, c), h.data("timepicker", i)
		}), f
	}, a.fn.timepicker = a.fn.TimePicker, a.fn.TimePicker.defaultOptions = {
		clickAndSelect: !0,
		dragAndDrop: !0,
		mouseWheel: !0,
		inverseMouseWheel: !1,
		listenKeyPress: !0,
		saveOnChange: !0,
		onChange: function() {
			return !0
		},
		twelveHoursFormat: !0,
		inputFormat: "HH:mm:ss",
		defaultTime: "00:00:00",
		minTime: !1,
		maxTime: !1,
		hours: !0,
		minutes: !0,
		seconds: !1,
		ampm: !0,
		parts: [
			[
				[0, 23]
			],
			[
				[0, 59]
			],
			[
				[0, 59]
			],
			[
				[0, 1]
			]
		],
		steps: [1, 1, 1, 1]
	}, f.prototype.destroy = function() {
		this.startinput.TimePicker("destroy"), this.picker.remove()
	}, f.prototype.hide = function() {
		if (this.picker.hasClass("visible")) {
			var b = !0;
			this.options.onHide && a.isFunction(this.options.onHide) && (b = !(this.options.onHide.call(this, this.startinput) === !1)), b && this.picker.removeClass("visible")
		}
	}, f.prototype.show = function() {
		if (!this.picker.hasClass("visible")) {
			var c, d, e = this.startinput.offset();
			c = e.top + this.startinput.outerHeight() - 1, d = e.left, c + this.picker.outerHeight() > a(b).height() + a(b).scrollTop() && (c = e.top - this.picker.outerHeight() - 1), 0 > c && (c = 0), d + this.picker.outerWidth() > a(b).width() && (d = a(b).width() - this.picker.outerWidth()), this.picker.css({
				left: d,
				top: c
			}), this.picker.addClass("visible"), this.startinput.TimePicker("regenerate")
		}
	}, a.fn.TimePickerAlone = function(b, c, d) {
		var e = this;
		return this.each(function() {
			var e, g = a(this),
				h = g.data("timepickeralone");
			if (h) switch (b) {
			case "destroy":
				h.destroy();
				break;
			default:
				return h.startinput.TimePicker(b, c, d)
			} else e = a.extend(!0, {}, a.fn.TimePicker.defaultOptions, a.fn.TimePickerAlone.defaultOptions, b), h = new f(this, e), g.data("timepickeralone", h)
		}), e
	}, a.fn.timepickeralone = a.fn.TimePickerAlone, a.fn.TimePickerAlone.defaultOptions = {
		onHide: function() {
			return !0
		}
	}
}(jQuery, window, document), function(a, b, c) {
	"use strict";

	function d(b, c, e) {
		var f, g = e || new Date;
		return g.isTW = !0, g.weekdays = function(a) {
			var b, c, d = moment.weekdaysShort();
			for (b = d.splice(1), b[6] = d[0], d = b, b = d.splice(a - 1), c = 0; a - 1 > c; c += 1) b.push(d[c]);
			return b
		}, g.clone = function(a, b, c, e, f, h) {
			var i = new d;
			return i.setHours(e || g.getHours()), i.setMinutes(f || g.getMinutes()), i.setSeconds(h || g.getSeconds()), i.setDate(c || g.getDate()), i.setMonth(b || g.getMonth()), i.setFullYear(a || g.getFullYear()), i
		}, g.inRange = function(a, b) {
			return moment(a).isBetween(b[0], b[1], "day") || moment(a).isSame(b[0], "day") || moment(a).isSame(b[1], "day")
		}, g.isValid = function() {
			return "[object Date]" !== Object.prototype.toString.call(g) ? !1 : !isNaN(g.getTime())
		}, g.parseStr = function(b, c) {
			var e = "string" === a.type(b) ? moment(b, c) : b;
			return e && e.isValid() ? g = e.isTW ? e : new d(0, 0, e.toDate()) : null
		}, g.isEqualDate = function(a, b) {
			return a && a.isValid() && b && b.isValid() ? a.getDate() === b.getDate() && a.getMonth() === b.getMonth() && a.getMonth() === b.getMonth() : !1
		}, g.format = function(a) {
			return f = moment(g).format(a), new RegExp("^[0-9]+$").test(f) ? parseInt(f, 10) : f
		}, g.countDaysInMonth = function() {
			return new Date(g.getFullYear(), g.getMonth() + 1, 0).getDate()
		}, b && c && g.parseStr(b, c), g
	}
	function e(b, c) {
		var e, f = this;
		f.options = c, f.picker = a('<div unselectable="on"class="period_picker_box xdsoft_noselect ' + (c.fullsize ? "period_picker_maximize" : "") + '"style="">' + (c.resizeButton ? '<div class="period_picker_resizer"></div>' : "") + '<div class="period_picker_head">' + (c.title ? '<span class="period_picker_head_title">' + this.i18n(c.norange ? "Select date" : "Select period") + "</span>" : "") + (c.fullsizeButton ? '<span class="period_picker_max_min" title="' + this.i18n("Open fullscreen") + '"></span>' : "") + (c.closeButton && !c.inline ? '<span class="period_picker_close" title="' + this.i18n("Close") + '"></span>' : "") + "</div>" + (c.yearsLine ? '<div class="period_picker_years"><div class="period_picker_years_inner"><div class="period_picker_years_selector"><div class="period_picker_years_selector_container" style="width: 5960px; left: 0px;"></div></div></div></div>' : "") + '<div class="period_picker_work">' + (f.options.navigate ? '<a href="" class="xdsoft_navigate xdsoft_navigate_prev"></a>' : "") + (f.options.timepicker && void 0 !== a.fn.TimePicker ? '<div class="period_picker_timepicker_box"><input data-index="0"class="timepicker"type="hidden"></div>' : "") + '<div class="period_picker_days"><table><tbody></tbody></table></div>' + (f.options.timepicker && void 0 !== a.fn.TimePicker && !f.options.norange ? '<div class="period_picker_timepicker_box"><input data-index="1"class="timepicker"type="hidden"></div>' : "") + (f.options.navigate ? '<a href="" class="xdsoft_navigate xdsoft_navigate_next"></a>' : "") + '</div><div class="period_picker_submit_shadow"></div><div class="period_picker_submit_dates">' + (f.options.timepicker && void 0 !== a.fn.TimePicker ? '<span style="' + (f.options.showTimepickerInputs ? "" : "visibility:hidden") + '"class="period_picker_from_time_block period_picker_time"><span class="input_box"><input data-index="0"class="input_control period_picker_from_time"></span></span>' : "") + '<span style="' + (f.options.showDatepickerInputs ? "" : "visibility:hidden") + '"class="period_picker_from_block period_picker_date"><span class="input_box"><input class="input_control period_picker_from"maxlength="10"></span></span><span style="' + (f.options.showDatepickerInputs ? "" : "visibility:hidden") + '">&#8212;</span><span style="' + (f.options.showDatepickerInputs ? "" : "visibility:hidden") + '" class="period_picker_to_block period_picker_date"><span class="input_box"><input class="input_control period_picker_to" maxlength="10"></span></span>' + (f.options.timepicker && void 0 !== a.fn.TimePicker && !f.options.norange ? '<span style="' + (f.options.showTimepickerInputs ? "" : "visibility:hidden") + '" class="period_picker_to_time_block period_picker_time"><span class="input_box"><input data-index="1" class="input_control period_picker_to_time"></span></span>' : "") + (c.okButton && !c.inline ? '<button class="period_picker_show period_picker_ok" role="button" type="button"><span class="button_text">' + this.i18n("OK") + "</span></button>" : "") + (c.clearButton ? '<button class="period_picker_show period_picker_clear" role="button" type="button"><span class="button_text">' + this.i18n("Clear") + "</span></button>" : "") + "</div></div>"), !f.options.withoutBottomPanel && (f.options.clearButton || f.options.okButton && !f.options.inline || f.options.showDatepickerInputs || f.options.showTimepickerInputs && f.options.timepicker && void 0 !== a.fn.TimePicker) || (f.picker.addClass("without_bottom_panel"), f.options.withoutBottomPanel = !0, f.options.someYOffset = 0), f.options.yearsLine || f.picker.addClass("without_yearsline"), f.options.title || f.options.fullsizeButton || c.closeButton && !c.inline || f.picker.addClass("without_header"), f.options.timepicker && void 0 !== a.fn.TimePicker && f.picker.addClass("with_first_timepicker"), f.options.timepicker && void 0 !== a.fn.TimePicker && !f.options.norange && f.picker.addClass("with_second_timepicker"), c.animation && f.picker.addClass("animation"), c.norange && f.picker.addClass("xdsoft_norange"), f.pickerdays = f.picker.find(".period_picker_days"), f.calendarbox = f.pickerdays.find("> table > tbody"), f.yearsline = f.picker.find(".period_picker_years_selector_container"), f.yearslineparent = f.picker.find(".period_picker_years_selector"), f.timepicker = f.picker.find(".period_picker_timepicker_box"), f.button = a('<div class="period_picker_input" type="button"><span class="period_button_text"><span class="period_button_content_wrapper"><span class="period_button_content"><span class="icon_calendar"></span><span class="period_button_content_body">' + this.i18n(c.norange ? "Choose date" : "Choose period") + "</span>" + (f.options.clearButtonInButton ? '<span class="icon_clear"></span>' : "") + "</span></span></span></div>"), f.startinput = a(c.start ? c.start : b), f.endinput = a(c.end), f.periodtime = [
			[]
		], f.period = [
			[]
		], f.director = 0, e = new d, f.addRange([e.parseStr(f.startinput.val(), c.formatDateTime) || e.parseStr(f.startinput.val(), c.formatDate), e.parseStr(f.endinput.val(), c.formatDateTime) || e.parseStr(f.endinput.val(), c.formatDate)]), f.uniqueid = g, f.month = f.period.length ? f.period[0].getMonth() + 1 : c.startMonth, f.year = f.period.length ? f.period[0].getFullYear() : c.startYear, f.onAfterShow = [], f.onAfterHide = [], f.onAfterRegenerate = [], void 0 !== f.options.onAfterShow && a.isFunction(f.options.onAfterShow) && f.onAfterShow.push(f.options.onAfterShow), void 0 !== f.options.onAfterHide && a.isFunction(f.options.onAfterHide) && f.onAfterHide.push(f.options.onAfterHide), void 0 !== f.options.onAfterRegenerate && a.isFunction(f.options.onAfterRegenerate) && f.onAfterRegenerate.push(f.options.onAfterRegenerate), f.options.inline && f.picker.addClass("xdsoft_inline"), f.maxdate = c.maxDate ? new d(c.maxDate, c.formatDate) : !1, f.mindate = c.minDate ? new d(c.minDate, c.formatDate) : !1, f.monthcount = this.options.cells[0] * this.options.cells[1], f.timer1 = 0, f.timer2 = 0, f.timer3 = 0, g += 1, f.init(), c.timepicker && void 0 !== a.fn.TimePicker && f.addRangeTime(f.period[0], f.period[1])
	}
	var f, g = 0;
	e.prototype.returnPeriod = function() {
		this.picker.find("input.period_picker_from").val(void 0 !== this.period ? this.period : ""), this.picker.find("input.period_picker_to").val(void 0 !== this.period[1] ? this.period[1] : this.picker.find("input.period_picker_from").val())
	}, e.prototype.moveTimeToDate = function() {
		this.options.timepicker && this.periodtime.length && this.periodtime[0].length && (null !== this.period[0] && this.period[0].format && this.periodtime[0][0].format && (this.period[0].setSeconds(this.periodtime[0][0].getSeconds()), this.period[0].setMinutes(this.periodtime[0][0].getMinutes()), this.period[0].setHours(this.periodtime[0][0].getHours())), null !== this.periodtime[0][1] && null !== this.period[1] && this.period[1].format && this.periodtime[0][1].format && (this.period[1].setSeconds(this.periodtime[0][1].getSeconds()), this.period[1].setMinutes(this.periodtime[0][1].getMinutes()), this.period[1].setHours(this.periodtime[0][1].getHours())))
	}, e.prototype.getInputsValue = function() {
		var b, c = [],
			e = new d,
			f = this.timepicker.find("input.timepicker");
		return this.options.timepicker && void 0 !== a.fn.TimePicker && this.options.useTimepickerLimits && (e.isEqualDate(this.period[0], this.period[1]) ? (f.eq(0).TimePicker("setMax", f.eq(1).val()), f.eq(1).TimePicker("setMin", f.eq(0).val())) : (f.eq(0).TimePicker("setMax", !1), f.eq(1).TimePicker("setMin", !1))), this.startinput.length && this.period && this.period && this.period.length && (this.moveTimeToDate(), b = this.options.timepicker ? this.options.formatDateTime : this.options.formatDate, this.period[0] && this.period[0].format && c.push(this.period[0].format(b)), this.endinput.length && this.period[1] && this.period[1].format && c.push(this.period[1].format(b))), c
	}, e.prototype.setInputsValue = function() {
		var a = this.getInputsValue();
		a.length ? (a[0] && this.startinput.val() !== a[0] && this.startinput.val(a[0]).trigger("change"), a[1] && this.endinput.length && this.endinput.val() !== a[1] && this.endinput.val(a[1]).trigger("change")) : (this.startinput.val("").trigger("change"), this.endinput.val("").trigger("change"))
	}, e.prototype.getLabel = function() {
		var a, b = [];
		return this.period.length && (this.moveTimeToDate(), a = this.options.timepicker ? [this.options.formatDecoreDateTimeWithYear || this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDecoreDateTimeWithoutMonth || this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDecoreDateTime || this.options.formatDateTime, this.options.formatDateTime] : [this.options.formatDecoreDateWithYear || this.options.formatDecoreDate || this.options.formatDate, this.options.formatDecoreDateWithoutMonth || this.options.formatDecoreDate || this.options.formatDate, this.options.formatDecoreDate || this.options.formatDate, this.options.formatDate], void 0 !== this.period[1] && this.period[1] && void 0 !== this.period[1].format && this.period[1].format && this.period[0].format(a[3]) !== this.period[1].format(a[3]) ? (b.push(this.period[0].format(this.period[0].format("YYYY") !== this.period[1].format("YYYY") ? a[0] : this.period[0].format("M") !== this.period[1].format("M") ? a[2] : a[1])), b.push(this.period[1].format(a[0]))) : b.push(this.period[0].format(a[0]))), b
	}, e.prototype.setLabel = function() {
		var a = this.getLabel();
		a.length ? (1 === a.length ? this.button.find(".period_button_content_body").html(a[0]) : this.button.find(".period_button_content_body").html("<span>" + a[0] + '</span><span class="period_button_dash">&#8212;</span><span>' + a[1] + "</span>"), this.options.clearButtonInButton && this.button.find(".icon_clear").show()) : (this.button.find(".period_button_content_body").html(this.i18n(this.options.norange ? "Choose date" : "Choose period")), this.button.find(".icon_clear").hide())
	}, e.prototype.highlightPeriod = function() {
		var b = this;
		clearTimeout(b.timer1), b.timer1 = setTimeout(function() {
			var c = new d;
			b.picker.find(".period_picker_cell.period_picker_selected").removeClass("period_picker_selected"), b.period.length ? (moment.locale(b.options.lang), b.picker.find(".period_picker_cell").each(function() {
				var d = c.parseStr(a(this).data("date"), b.options.formatDate);
				c.inRange(d, b.period) && a(this).addClass("period_picker_selected")
			}), b.picker.find(".period_picker_years_period").css({
				width: Math.floor(b.options.yearSizeInPixels / 365 * Math.abs(moment(b.period[1]).diff(b.period[0], "day"))) + "px",
				left: Math.floor(b.options.yearSizeInPixels / 365 * -moment([b.options.yearsPeriod[0], 1, 1]).diff(b.period[0], "day"))
			}), b.picker.find("input.period_picker_from:not(:focus)").val(void 0 !== b.period[0] && b.period[0] ? b.period[0].format(b.options.formatDate) : ""), b.picker.find("input.period_picker_to:not(:focus)").val(void 0 !== b.period[1] && b.period[1] ? b.period[1].format(b.options.formatDate) : b.picker.find("input.period_picker_from").val()), b.picker.find("input.period_picker_from:not(:focus),input.period_picker_to:not(:focus)").trigger("change")) : b.picker.find("input.period_picker_from:not(:focus),input.period_picker_to:not(:focus)").val(""), b.setLabel(), b.setInputsValue()
		}, 50)
	}, e.prototype.addRangeTime = function(b, c) {
		var e = new d;
		this.periodtime[0][0] = e.parseStr(b, this.options.timepickerOptions.inputFormat), this.options.norange ? this.periodtime[0][1] = this.periodtime[0][0] : (this.periodtime[0][1] = e.parseStr(c, this.options.timepickerOptions.inputFormat), null === this.periodtime[0][0] && this.periodtime[0][1] && (this.periodtime[0][0] = this.periodtime[0][1])), null === this.periodtime[0][0] && (this.periodtime[0] = []), this.setLabel(), this.setInputsValue(), this.periodtime.length && this.periodtime[0].length && a.fn.TimePicker && (this.periodtime[0][0] && this.timepicker.find("input.timepicker").eq(0).TimePicker("setValue", this.periodtime[0][0]), this.periodtime[0][1] && !this.options.norange && this.timepicker.find("input.timepicker").eq(1).TimePicker("setValue", this.periodtime[0][1]))
	}, e.prototype.addRange = function(b) {
		var c, e = new d;
		if (this.options.norange && (this.director = 0), a.isArray(b)) this.period = [e.parseStr(b[0], this.options.formatDate), e.parseStr(b[1], this.options.formatDate)], null === this.period[0] && (this.period = []), this.director = 0;
		else {
			if (void 0 === this.period && (this.period = []), this.period[this.options.norange ? 0 : this.director] = e.parseStr(b, this.options.formatDate), null === this.period[this.director]) return this.period = [], void this.highlightPeriod();
			this.director || (this.period[1] = this.period[this.director].clone()), this.period[0] > this.period[1] && (c = this.period[0], this.period[0] = this.period[1], this.period[1] = c), this.director = this.director ? 0 : 1
		}
		this.options.norange && this.period[0] && this.period[1] && this.period[1] !== this.period[0] && (this.period[1] = this.period[0].clone()), this.highlightPeriod(), this.options.hideAfterSelect && this.period[0] && this.period[1] && this.period[0] !== this.period[1] && this.hide()
	}, e.prototype.recalcDraggerPosition = function() {
		var a = this;
		clearTimeout(this.timer2), this.timer2 = setTimeout(function() {
			var b = Math.abs(parseInt(a.yearsline.css("left"), 10)),
				c = a.picker.find(".period_picker_years_dragger"),
				d = parseInt(c.css("left"), 10);
			b > d ? a.yearsline.css("left", -d + "px") : d + c.width() > b + a.yearslineparent.width() && a.yearsline.css("left", -(d + c.width() - a.yearslineparent.width()) + "px")
		}, 100)
	}, e.prototype.calcDate = function(a, b, c, d) {
		a.setFullYear(b), a.setMonth(c), a.setDate(d)
	}, e.prototype.getRealDateTime = function() {
		var a = new Date;
		return this.calcDate(a, this.year, this.month - 1, 1), [a.getMonth(), a.getFullYear()]
	}, e.prototype.regenerate = function() {
		if (this.picker.is(":visible")) {
			var a, b = this,
				c = parseInt(b.pickerdays.width(), 10),
				d = parseInt(b.pickerdays.parent()[0].offsetHeight, 10);
			for (moment.locale(b.options.lang), this.options.cells = [Math.floor((d - b.options.someYOffset) / b.options.monthHeightInPixels) || 1, Math.floor(c / b.options.monthWidthInPixels) || 1], this.options.cells[0] < 0 && (this.options.cells[0] = 1), b.monthcount = this.options.cells[0] * this.options.cells[1], b.generateCalendars(b.month, b.year), b.generateYearsLine(), b.recalcDraggerPosition(), b.highlightPeriod(), a = 0; a < this.onAfterRegenerate.length; a += 1) this.onAfterRegenerate[a].call(this)
		}
	}, e.prototype.init = function() {
		var e, g, h, i, j, k, l, m, n, o, p, q = this;
		q.button.on("click", function() {
			q.toggle()
		}), q.options.inline || q.startinput.after(q.button), e = q.startinput.offset(), q.picker.find(".period_picker_submit_dates input").on("focus", function() {
			a(this).parent().parent().addClass("input_focused_yes")
		}).on("blur", function() {
			a(this).parent().parent().removeClass("input_focused_yes")
		}), q.picker.find(".period_picker_submit_dates .period_picker_date input").on("keydown", function() {
			var b = this;
			clearTimeout(q.timer3), q.timer3 = setTimeout(function() {
				if (a(b).val()) {
					var c = moment(a(b).val(), q.options.formatDate);
					if (!c.isValid()) return void a(b).parent().parent().addClass("period_picker_error");
					q.addRange([q.picker.find(".period_picker_submit_dates .period_picker_date input").eq(0).val(), q.picker.find(".period_picker_submit_dates .period_picker_date input").eq(1).val()])
				}
				a(b).parent().parent().removeClass("period_picker_error")
			}, 200)
		}), q.options.timepicker && a.fn.TimePicker && (p = q.picker.find(".period_picker_submit_dates .period_picker_time input").on("keydown change", function() {
			var b = this;
			clearTimeout(q.timer4), q.timer4 = setTimeout(function() {
				var c, e = new d;
				if (a(b).val()) {
					if (c = moment(a(b).val(), q.options.timepickerOptions.inputFormat), !c.isValid()) return void a(b).parent().parent().addClass("period_picker_error");
					if (this.period && this.period.length && e.isEqualDate(this.period[0], this.period[1]) && moment(p.eq(0).val(), q.options.timepickerOptions.inputFormat).getDate().getTime() > moment(p.eq(1).val(), q.options.timepickerOptions.inputFormat).getDate().getTime()) return void a(b).parent().parent().addClass("period_picker_error");
					q.addRangeTime(q.picker.find(".period_picker_submit_dates .period_picker_time input").eq(0).val(), q.picker.find(".period_picker_submit_dates .period_picker_time input").eq(1).val())
				}
				a(b).parent().parent().removeClass("period_picker_error")
			}, 200)
		})), q.picker.find(".period_picker_max_min").on("click", function() {
			q.picker.toggleClass("period_picker_maximize"), q.regenerate()
		}), q.options.fullsizeOnDblClick && q.picker.find(".period_picker_head").on("dblclick", function() {
			q.picker.toggleClass("period_picker_maximize"), q.regenerate()
		}), q.picker.find(".period_picker_close").on("click", function() {
			q.hide()
		}), q.options.mousewheel && (q.picker.on("mousewheel", function(a) {
			return q.month += (q.options.reverseMouseWheel ? -1 : 1) * a.deltaY, q.regenerate(), !1
		}), q.options.mousewheelYearsLine && q.picker.find(".period_picker_years_selector").on("mousewheel", function(a) {
			return q.year += (q.options.reverseMouseWheel ? -1 : 1) * a.deltaY, q.month = 1, q.regenerate(), a.preventDefault(), a.stopPropagation(), !1
		})), q.options.navigate && q.picker.find(".xdsoft_navigate").on("click", function() {
			return q.month += a(this).hasClass("xdsoft_navigate_prev") ? -1 : 1, q.regenerate(), !1
		}), q.picker.on("click", ".period_picker_show.period_picker_ok", function() {
			q.hide(), q.options.onOkButtonClick && a.isFunction(q.options.onOkButtonClick) && q.options.onOkButtonClick.call(q)
		}), q.options.clearButtonInButton && q.button.find(".icon_clear").on("mousedown", function(a) {
			return q.clear(), a.preventDefault(), a.stopPropagation(), !1
		}), q.options.clearButton && q.picker.on("click", ".period_picker_show.period_picker_clear", function() {
			q.clear()
		}), q.picker.on("click", ".period_picker_years_selector .period_picker_year", function() {
			q.year = parseInt(a(this).text(), 10), q.month = -Math.floor(q.monthcount / 2) + 1, q.regenerate()
		}), q.picker.on("mousedown", ".period_picker_days td td,.period_picker_month", function() {
			if (a(this).hasClass("period_picker_month")) q.addRange([a(this).data("datestart"), a(this).data("dateend")]);
			else if (!a(this).hasClass("period_picker_gray_period")) if (a(this).hasClass("period_picker_selector_week")) {
				var b = a(this).parent().find("td.period_picker_cell:not(.period_picker_gray_period):last"),
					c = a(this).parent().find("td.period_picker_cell:not(.period_picker_gray_period):first");
				b.length && q.addRange([c.data("date"), b.data("date")])
			} else 1 !== q.picker.find(".period_picker_selected").length ? (q.picker.find(".period_picker_selected").removeClass("period_picker_selected"), a(this).addClass("period_picker_selected")) : a(this).addClass("period_picker_selected"), q.addRange(a(this).data("date"))
		}), q.picker.on("mousedown", ".period_picker_years_selector_container", function(b) {
			n = a(this), o = !0, g = [b.clientX, b.clientY, parseInt(n.css("left") || 0, 10)], b.preventDefault()
		}), q.picker.on("mousedown", ".period_picker_years_dragger", function(b) {
			k = a(this), j = !0, g = [b.clientX, b.clientY, parseInt(k.css("left"), 10)], b.stopPropagation(), b.preventDefault()
		}), q.options.draggable && q.picker.on("mousedown", ".period_picker_head", function(a) {
			m = !0, g = [a.clientX, a.clientY, parseInt(q.picker.css("left"), 10), parseInt(q.picker.css("top"), 10)], a.preventDefault()
		}), q.picker.on("mouseup", function(b) {
			i = !1, j = !1, m = !1, o = !1, q.options.timepicker && a.fn.TimePicker && q.timepicker.find("input.timepicker").TimePicker("stopDrag"), b.stopPropagation()
		}), q.picker.find(".period_picker_resizer").on("mousedown", function(a) {
			i = !0, g = [a.clientX, a.clientY, parseInt(q.picker.css("width"), 10), parseInt(q.picker.css("height"), 10)], a.preventDefault()
		}), q.picker.css({
			left: q.options.inline ? "auto" : e.left,
			top: q.options.inline ? "auto" : e.top + q.button.height(),
			width: this.options.cells[1] * q.options.monthWidthInPixels + (q.options.timepicker && a.fn.TimePicker ? 87 * (q.options.norange ? 1 : 2) : 0) + 50,
			height: this.options.cells[0] * q.options.monthHeightInPixels + q.options.someYOffset
		}), q.options.noHideSourceInputs || q.options.likeXDSoftDateTimePicker ? (q.startinput.add(q.endinput).on("keydown.xdsoftpp mousedown.xdsoftpp", function() {
			clearTimeout(f), f = setTimeout(function() {
				var a, b = q.getInputsValue(),
					c = q.options.timepicker ? q.options.formatDateTime : q.options.formatDate;
				(void 0 !== b[0] && b[0] !== q.startinput.val() || void 0 !== b[1] && q.endinput.length && b[1] !== q.endinput.val()) && (a = new d, q.addRange([a.parseStr(q.startinput.val(), c), a.parseStr(q.endinput.val(), c)]), q.period[0] && (q.year = q.period[0].getFullYear(), q.month = q.period[0].getMonth() + 1, q.regenerate()))
			}, 300)
		}), q.options.likeXDSoftDateTimePicker && (q.button.remove(), q.startinput.add(q.endinput).on("open.xdsoftpp focusin.xdsoftpp mousedown.xdsoftpp touchstart.xdsoftpp", function() {
			var b = this;
			a(b).is(":disabled") || q.picker.hasClass("visible") || (clearTimeout(f), f = setTimeout(function() {
				q.show(b)
			}, 100))
		}))) : (q.startinput.hide(), q.endinput.hide()), q.options.inline ? (q.startinput.after(q.picker), q.show()) : a(c.body).append(q.picker), a(b).on("resize.xdsoftpp" + q.uniqueid, function() {
			q.regenerate()
		}).on("mouseup.xdsoftpp" + q.uniqueid, function(a) {
			i || j || m || o ? (i = !1, j = !1, m = !1, o = !1) : q.options.inline || (q.hide(), q.options.likeXDSoftDateTimePicker && (q.startinput.is(a.target) || q.endinput.is(a.target)) && q.show(a.target))
		}).on("mousemove.xdsoftpp" + q.uniqueid, function(a) {
			m && !q.options.inline && (h = [a.clientX - g[0], a.clientY - g[1]], q.picker.hasClass("xdsoft_i_moved") || q.picker.addClass("xdsoft_i_moved"), q.picker.css({
				left: g[2] + h[0],
				top: g[3] + h[1]
			})), i && (h = [a.clientX - g[0], a.clientY - g[1]], q.picker.css({
				width: g[2] + h[0],
				height: g[3] + h[1]
			}), q.regenerate()), j && (h = [a.clientX - g[0], a.clientY - g[1]], l = g[2] + h[0], k.css("left", l), q.calcMonthOffsetFromPeriodDragger(l), q.generateCalendars(q.month, q.year), q.recalcDraggerPosition()), o && (h = [a.clientX - g[0], a.clientY - g[1]], l = g[2] + h[0], n.css("left", l))
		}), q.generateTimePicker()
	}, e.prototype.generateTimePicker = function() {
		var b = this;
		b.options.timepicker && void 0 !== a.fn.TimePicker && !b.timepickerAlreadyGenerated && (b.timepicker.each(function() {
			var c = a(this).find("input.timepicker"),
				d = parseInt(c.data("index") || 0, 10);
			c.length && !c.data("timepicker") && void 0 !== a.fn.TimePicker && (d && b.options.defaultEndTime && (b.options.timepickerOptions.defaultTime = b.options.defaultEndTime), c.TimePicker(b.options.timepickerOptions, a(this)), b.onAfterRegenerate.push(function() {
				c.TimePicker("regenerate")
			}), c.on("change", function() {
				b.picker.find(".period_picker_submit_dates .period_picker_time input").eq(d).val(this.value).trigger("change")
			}).trigger("change"))
		}), b.timepickerAlreadyGenerated = !0)
	}, e.prototype.generateCalendars = function(a, b) {
		function c() {
			var a, b = [];
			for (a = 0; a < i.length; a += 1) b.push('<th class="' + (-1 !== f.options.weekEnds.indexOf(a + f.options.dayOfWeekStart > 7 ? (a + f.options.dayOfWeekStart) % 7 : a + f.options.dayOfWeekStart) ? "period_picker_holiday" : "") + '">' + i[a] + "</th>");
			return b.join("")
		}
		moment.locale(this.options.lang);
		var e, f = this,
			g = [],
			h = f.getRealDateTime(),
			i = (new d).weekdays(f.options.dayOfWeekStart);
		for (h[1] > f.options.yearsPeriod[1] && (f.year = f.options.yearsPeriod[1], b = f.year, f.month = 12 - f.monthcount, a = f.month), h[1] < f.options.yearsPeriod[0] && (f.year = f.options.yearsPeriod[0], b = f.year, f.month = 1, a = f.month), g.push('<tr class="period_picker_first_letters_tr">'), e = 0; e < f.options.cells[1]; e += 1) g.push('<td class="period_picker_first_letters_td"><table class="period_picker_first_letters_table"><tbody><tr><th class="period_picker_selector_week_cap"><span class="period_picker_selector_week_cap"></span></th>' + c() + "</tr></tbody></table></td>");
		for (g.push("</tr>"), e = 0; e < f.options.cells[0]; e += 1) g.push("<tr>"), g.push(f.generateCalendarLine(a + e * f.options.cells[1], b, f.options.cells[1])), g.push("</tr>");
		f.calendarbox.html(g.join("")), f.highlightPeriod()
	}, e.prototype.i18n = function(a) {
		return void 0 !== this.options.i18n[this.options.lang] && void 0 !== this.options.i18n[this.options.lang][a] ? this.options.i18n[this.options.lang][a] : a
	}, e.prototype.calcPixelOffsetForPeriodDragger = function() {
		var a = this.getRealDateTime();
		return (a[1] - this.options.yearsPeriod[0]) * this.options.yearSizeInPixels + a[0] * Math.floor(this.options.yearSizeInPixels / 12)
	}, e.prototype.calcMonthOffsetFromPeriodDragger = function(a) {
		this.year = Math.floor(a / this.options.yearSizeInPixels) + this.options.yearsPeriod[0], this.month = Math.floor(a % this.options.yearSizeInPixels / Math.floor(this.options.yearSizeInPixels / 12)) + 1
	}, e.prototype.generateYearsLine = function() {
		if (this.options.yearsLine) {
			var b, c = [],
				d = 0;
			if (c.push('<div class="period_picker_years_dragger" title="' + this.i18n("Move to select the desired period") + '" style="left: ' + this.calcPixelOffsetForPeriodDragger() + "px; width: " + Math.floor(this.options.yearSizeInPixels / 12) * this.monthcount + 'px;"></div>'), c.push('<div class="period_picker_years_period" style="display: block; width: 0px; left: 300px;"></div>'), this.options.yearsPeriod && a.isArray(this.options.yearsPeriod)) for (b = this.options.yearsPeriod[0]; b <= this.options.yearsPeriod[1]; b += 1) c.push('<div class="period_picker_year" style="left:' + d * this.options.yearSizeInPixels + 'px">' + b + "</div>"), d += 1;
			this.yearsline.css("width", d * this.options.yearSizeInPixels + "px"), this.yearsline.html(c.join(""))
		}
	}, e.prototype.generateCalendarLine = function(a, b, c) {
		var e, f, g, h, i, j, k = [],
			l = new d;
		for (this.calcDate(l, b, a - 1, 1), e = 0; c > e; e += 1) {
			for (i = l.getMonth() + 1, h = l.countDaysInMonth(), k.push('<td class="period_picker_month' + l.format("M") + '"><table><tbody>'), k.push('<tr><th class="period_picker_month" data-datestart="' + l.format(this.options.formatDate) + '"  data-dateend="' + l.clone(0, 0, h).format(this.options.formatDate) + '" colspan="8" title="' + l.format(this.options.formatMonth) + '">' + l.format(this.options.formatMonth) + "<b>" + l.format("M.YYYY") + "</b></th></tr>"), j = 0; l.format("E") !== this.options.dayOfWeekStart && 7 > j;) l.setDate(l.getDate() - 1), j += 1;
			for (f = 1, j = 0; h >= f && 100 > j;) {
				for (k.push("<tr>"), k.push('<td class="period_picker_selector_week" title="' + this.i18n("Select week #") + " " + l.format("W") + '"><span class="period_picker_selector_week"></span></td>'), g = 1; 7 >= g; g += 1) l.format("M") !== i ? k.push('<td class="period_picker_empty">&nbsp;</td>') : ((!this.maxdate || l < this.maxdate) && (!this.mindate || l > this.mindate) && -1 === this.options.disableDays.indexOf(l.format(this.options.formatDate)) ? (k.push('<td data-date="' + l.format(this.options.formatDate) + '"'), k.push('    class="period_picker_cell '), k.push(-1 !== this.options.weekEnds.indexOf(l.format("E")) || -1 !== this.options.holidays.indexOf(l.format(this.options.formatDate)) ? " period_picker_holiday" : " period_picker_weekday"), k.push((7 === g || l.format("D") === h ? " period_picker_last_cell" : "") + '">' + l.format("D") + "</td>")) : k.push('<td class="period_picker_gray_period">' + l.format("D") + "</td>"), f += 1), l.setDate(l.getDate() + 1);
				j += 1, k.push("</tr>")
			}
			a += 1, l.setFullYear(b), l.setMonth(a - 1), l.setDate(1), i = l.getMonth() + 1, k.push("</tbody></table></td>")
		}
		return k.join("")
	}, e.prototype.toggle = function() {
		this.picker.hasClass("active") ? this.hide() : this.show()
	}, e.prototype.clear = function() {
		this.addRange(), this.options.onClearButtonClick && a.isFunction(this.options.onClearButtonClick) && this.options.onClearButtonClick.call(this), this.options.closeAfterClear && !this.options.inline && this.hide()
	}, e.prototype.show = function(c) {
		var d, e, f, g;
		for (this.options.inline || (this.picker.addClass("visible").addClass("active"), this.options.fullsize ? this.picker.addClass("period_picker_maximize") : this.picker.hasClass("xdsoft_i_moved") || (e = this.options.likeXDSoftDateTimePicker ? a(c).offset() : this.button.offset(), f = e.top + (this.options.likeXDSoftDateTimePicker ? a(c).outerHeight() : this.button.outerHeight()) - 1, g = e.left, f + this.picker.outerHeight() > a(b).height() + a(b).scrollTop() && (f = e.top - this.picker.outerHeight() - 1), 0 > f && (f = 0), g + this.picker.outerWidth() > a(b).width() && (g = a(b).width() - this.picker.outerWidth()), this.picker.css({
			left: g,
			top: f
		}))), this.regenerate(), d = 0; d < this.onAfterShow.length; d += 1) this.onAfterShow[d].call(this)
	}, e.prototype.hide = function() {
		var a, b = this;
		if (b.picker.hasClass("visible") && (b.picker.removeClass("active"), b.picker.hasClass("animation") ? setTimeout(function() {
			b.picker.hasClass("active") || b.picker.removeClass("visible")
		}, 300) : b.picker.removeClass("visible")), void 0 !== this.onAfterHide && this.onAfterHide.length) for (a = 0; a < this.onAfterHide.length; a += 1) this.onAfterHide[a].call(this)
	}, e.prototype.destroy = function() {
		this.picker.remove(), this.button.remove(), this.startinput.off(".xdsoftpp").show(), this.endinput.off(".xdsoftpp").show(), a(b).off(".xdsoftpp" + this.uniqueid)
	}, a.fn.periodpicker = function(c, d, f) {
		var g = this;
		return this.each(function() {
			var h, i = a(this),
				j = i.data("periodpicker");
			if (j) switch (c) {
			case "picker":
				g = j;
				break;
			case "setOption":
				j.options[d] = f;
				break;
			case "setOptions":
				j.options = a.extend(!0, {}, j.options, d);
				break;
			case "clear":
				j.addRange();
				break;
			case "change":
				j.addRange([j.startinput.val(), j.endinput.val()]);
				break;
			case "destroy":
				j.destroy();
				break;
			case "hide":
				j.hide();
				break;
			case "show":
				j.show();
				break;
			case "value":
				void 0 !== d ? j.addRange(d) : g = j.period;
				break;
			case "valueStringStrong":
				g = j.getInputsValue().join("-");
				break;
			case "valueString":
				g = j.getLabel().join("-")
			} else h = a.extend(!0, {}, a.fn.periodpicker.defaultOptions, c), void 0 === b.moment && (b.moment = function(b) {
				var c = "string" === a.type(b) ? new Date(parseInt(b.split(".")[2], 10), parseInt(b.split(".")[1], 10) - 1, parseInt(b.split(".")[0], 10)) : new Date(b),
					d = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
				return {
					getDOY: function(a) {
						return Math.ceil(a / 864e5)
					},
					isSame: function(a) {
						return void 0 !== a && c.getDate() === a.getDate() && c.getMonth() === a.getMonth() && c.getFullYear() === a.getFullYear()
					},
					format: function(a) {
						var b, e, f, g;
						switch (a) {
						case "MMMM YYYY":
							return d[c.getMonth()] + " " + c.getFullYear();
						case ".MM.YYYY":
							return "." + (c.getMonth() + 1) + "." + c.getFullYear();
						case "YYYY":
							return c.getFullYear();
						case "D":
							return c.getDate();
						case "M":
							return c.getMonth() + 1;
						case "E":
							return c.getDay() + 1;
						case "W":
							return b = new Date(c.valueOf()), e = (c.getDay() + 6) % 7, b.setDate(b.getDate() - e + 3), f = new Date(b.getFullYear(), 0, 4), g = (b - f) / 864e5, 1 + Math.ceil(g / 7)
						}
						return c.getDate() + "." + (c.getMonth() > 8 ? c.getMonth() + 1 : "0" + (c.getMonth() + 1)) + "." + c.getFullYear()
					},
					isValid: function() {
						return "[object Date]" !== Object.prototype.toString.call(c) ? !1 : !isNaN(c.getTime())
					},
					diff: function(a) {
						return a = new Date(a), this.getDOY(a) - this.getDOY(c)
					},
					toDate: function() {
						return c
					},
					isBetween: function(a, b) {
						return c >= a && b >= c
					}
				}
			}, b.moment.locale = function() {
				return this
			}, b.moment.weekdaysShort = function() {
				return ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat", "San"]
			}), j = new e(this, h), i.data("periodpicker", j)
		}), g
	}, a.fn.periodpicker.defaultOptions = {
		animation: !0,
		lang: "en",
		i18n: {
			en: {
				"Select week #": "Select week #",
				"Select period": "Select period",
				"Select date": "Select date",
				"Choose period": "Select period",
				"Choose date": "Select date",
				Clear: "Clear"
			},
			ru: {
				"Move to select the desired period": "Перемес��и��е, ����о���� в����р����ь ну��н���� период",
				"Select week #": "������р����ь неде��ю ���",
				"Select period": "������р����ь период",
				"Select date": "������р����ь д����у",
				"Open fullscreen": "О��кр����ь н�� весь экр��н",
				Close: "����кр����ь",
				OK: "OK",
				"Choose period": "������р����ь период",
				"Choose date": "������р����ь д����у",
				Clear: "О����ис��и��ь"
			},
			fr: {
				"Move to select the desired period": "D��placer pour s��lectionner la p��riode d��sir��e",
				"Select week #": "S��lectionner la semaine #",
				"Select period": "Choisissez une date",
				"Select date": "S��lectionner la date",
				"Open fullscreen": "Ouvrir en plein ��cran",
				Close: "Fermer",
				OK: "OK",
				"Choose period": "Choisir la p��riode",
				"Choose date": "Choisir une date",
				Clear: "Propre"
			}
		},
		withoutBottomPanel: !1,
		showTimepickerInputs: !0,
		showDatepickerInputs: !0,
		timepicker: !1,
		useTimepickerLimits: !0,
		timepickerOptions: {
			inputFormat: "HH:mm"
		},
		defaultEndTime: !1,
		yearsLine: !0,
		title: !0,
		inline: !1,
		clearButtonInButton: !1,
		clearButton: !1,
		closeAfterClear: !0,
		okButton: !0,
		onOkButtonClick: !1,
		closeButton: !0,
		fullsizeButton: !0,
		resizeButton: !0,
		navigate: !0,
		fullsizeOnDblClick: !0,
		fullsize: !1,
		draggable: !0,
		mousewheel: !0,
		mousewheelYearsLine: !0,
		reverseMouseWheel: !0,
		hideAfterSelect: !1,
		norange: !1,
		formatMonth: "MMMM YYYY",
		formatDecoreDate: "D MMMM",
		formatDecoreDateWithYear: "D MMMM YYYY",
		formatDecoreDateWithoutMonth: "D",
		formatDecoreDateTimeWithoutMonth: "HH:mm D",
		formatDecoreDateTime: "HH:mm D MMMM",
		formatDecoreDateTimeWithYear: "HH:mm D MMMM YYYY",
		formatDateTime: "HH:mm YYYY/MM/D",
		formatDate: "YYYY/MM/D",
		end: "",
		noHideSourceInputs: !1,
		likeXDSoftDateTimePicker: !1,
		startMonth: (new Date).getMonth() + 1,
		startYear: (new Date).getFullYear(),
		dayOfWeekStart: 1,
		yearSizeInPixels: 120,
		timepickerWidthInPixels: 50,
		monthWidthInPixels: 184,
		monthHeightInPixels: 174,
		someYOffset: 100,
		yearsPeriod: [2e3, (new Date).getFullYear() + 20],
		weekEnds: [6, 7],
		holidays: [],
		disableDays: [],
		minDate: !1,
		maxDate: !1,
		cells: [1, 3]
	}, void 0 === Array.prototype.indexOf && (Array.prototype.indexOf = function(a, b) {
		var c, d;
		for (d = this.length, c = b || 0; d > c; c += 1) if (this[c] === a) return c;
		return -1
	})
}(jQuery, window, document);
(function($) {
	$(function() {
		jQuery('#periodpickerstart').periodpicker({
			end: '#periodpickerend'
		});
		jQuery('#periodpickerstart1').periodpicker({
			end: '#periodpickerend1',
			lang: 'ru'
		});
		jQuery('#periodpickerstart2').periodpicker({
			end: '#periodpickerend2',
			lang: 'de',
			i18n: {
				'de': {
					'Select week #': 'Wahlen Sie Woche #',
					'Select period': 'Wahlen Sie Zeitraums',
					'Open fullscreen': 'Offnen Vollbild',
					'Close': 'schlie?en',
					'OK': 'OK',
					'Choose period': 'Zeitraum wahlen'
				}
			}
		});
		jQuery('#periodpickerstart3').periodpicker({
			end: '#periodpickerend3',
			yearsLine: false
		});
		jQuery('#periodpickerstart4').periodpicker({
			end: '#periodpickerend4',
			title: false
		});
		jQuery('#periodpickerstart5').periodpicker({
			end: '#periodpickerend5',
			okButton: false
		});
		jQuery('#periodpickerstart6').periodpicker({
			end: '#periodpickerend6',
			closeButton: false
		});
		jQuery('#periodpickerstart7').periodpicker({
			end: '#periodpickerend7',
			fullsizeButton: false
		});
		jQuery('#periodpickerstart8').periodpicker({
			end: '#periodpickerend8',
			resizeButton: false
		});
		jQuery('#periodpickerstart9').periodpicker({
			end: '#periodpickerend9',
			fullsizeOnDblClick: false
		});
		jQuery('#a1').periodpicker({
			end: '#b1',
			fullsize: false
		});
		jQuery('#a2').periodpicker({
			end: '#b2',
			draggable: false
		});
		jQuery('#a3').periodpicker({
			end: '#b3',
			mousewheel: false
		});
		jQuery('#a4').periodpicker({
			end: '#b4',
			reverseMouseWheel: false
		});
		jQuery('#a5').periodpicker({
			end: '#b5',
			formatMonth: 'MM YY'
		});
		jQuery('#a6').periodpicker({
			end: '#b6',
			formatDecoreDate: 'DD.MM'
		});
		jQuery('#a7').periodpicker({
			end: '#b7',
			formatDecoreDateWithYear: 'DD.MM.YYYY'
		});
		jQuery('#addwm7').periodpicker({
			end: '#bddwm7',
			formatDecoreDateWithoutMonth: 'D YYYY'
		});
		jQuery('#a8').periodpicker({
			end: '#b8',
			formatDate: 'DD.MM.YYYY'
		});
		jQuery('#a8').on('change', function() {
			console.log(jQuery(this).periodpicker('valueStringStrong'))
		});
		jQuery('#v1').periodpicker({
			end: '#g1',
			startMonth: 12
		});
		jQuery('#v2').periodpicker({
			end: '#g2',
			startYear: 2002
		});
		jQuery('#v3').periodpicker({
			end: '#g3',
			dayOfWeekStart: 1
		});
		jQuery('#v4').periodpicker({
			end: '#g4',
			yearsPeriod: [2002, 2005]
		});
		jQuery('#v5').periodpicker({
			end: '#g5',
			weekEnds: [7]
		});
		jQuery('#v6').periodpicker({
			end: '#g6',
			holidays: ['1.12.2015', '2.12.2015'],
			formatDate: 'D.MM.YYYY',
			startYear: 2015,
			startMonth: 12,
			yearsPeriod: [2002, 2020]
		});
		jQuery('#v7').periodpicker({
			end: '#g7',
			disableDays: ['1.12.2015', '2.12.2015'],
			formatDate: 'D.MM.YYYY',
			startYear: 2015,
			startMonth: 12,
			yearsPeriod: [2002, 2020]
		});
		jQuery('#v8').periodpicker({
			end: '#g8',
			minDate: '1.12.2015',
			formatDate: 'D.MM.YYYY',
			startYear: 2015,
			startMonth: 12,
			yearsPeriod: [2002, 2020]
		});
		jQuery('#v9').periodpicker({
			end: '#g9',
			maxDate: '22.12.2015',
			formatDate: 'D.MM.YYYY',
			startYear: 2015,
			startMonth: 12,
			yearsPeriod: [2002, 2020]
		});
		jQuery('#j1').periodpicker({
			end: '#h1',
			cells: [10, 10]
		});
		jQuery('#a14').periodpicker({
			end: '#b14',
			hideAfterSelect: true
		});
		jQuery('#animation2').periodpicker({
			end: '#animation3',
			animation: false
		});
		jQuery('#norange1').periodpicker({
			norange: true
		});
		jQuery('#datetimepicker111,#datetimepicker_simple').periodpicker({
			norange: true,
			cells: [1, 1],
			resizeButton: false,
			fullsizeButton: false,
			fullsizeOnDblClick: false,
			timepicker: true,
			timepickerOptions: {
				hours: true,
				minutes: true,
				seconds: false,
				ampm: true
			}
		});
		jQuery('#timepicker2').timepickeralone({
			hours: true,
			minutes: true,
			seconds: true,
			ampm: false
		});
		jQuery('#periodtimepicker123').periodpicker({
			timepicker: true,
			timepickerOptions: {
				hours: true,
				minutes: true,
				seconds: false,
				ampm: true
			}
		});
		jQuery('#periodpickerstartwithownavigate').periodpicker({
			cells: [1, 1],
			navigate: false
		});
		jQuery('#inline_mode, #inline_mode2').periodpicker({
			inline: true,
			norange: true,
			cells: [1, 1],
			resizeButton: false,
			fullsizeButton: false,
			fullsizeOnDblClick: false,
			timepicker: false
		});
		jQuery('#noranger_with_clear').periodpicker({
			norange: true,
			cells: [1, 1],
			okButton: false,
			clearButtonInButton: true,
			clearButton: true,
			closeAfterClear: true,
			resizeButton: false,
			fullsizeButton: false,
			fullsizeOnDblClick: false,
			timepicker: false
		});
		jQuery('#clearButtonInButton1').periodpicker({
			clearButtonInButton: true
		});
		jQuery('#clearButton1').periodpicker({
			i18n: {
				en: {
					'Clear': '&times;'
				}
			},
			clearButton: true,
			okButton: false
		});
		jQuery('#closeAfterClear1').periodpicker({
			norange: true,
			cells: [1, 1],
			i18n: {
				en: {
					'Clear': '&times;'
				}
			},
			timepicker: false,
			clearButtonInButton: true,
			clearButton: true,
			closeAfterClear: true,
			okButton: false
		});
		jQuery('#showTimepickerInputs1').periodpicker({
			showTimepickerInputs: false,
			timepicker: true
		});
		jQuery('#showDatepickerInputs1').periodpicker({
			showDatepickerInputs: false,
			okButton: false
		});
		jQuery('#withoutBottomPanel1').periodpicker({
			withoutBottomPanel: true
		});
		jQuery('#compact_mode').periodpicker({
			cells: [1, 1],
			withoutBottomPanel: true,
			yearsLine: false,
			title: false,
			closeButton: false,
			fullsizeButton: false
		});
		jQuery('#compact_modex').periodpicker({
			cells: [1, 1],
			withoutBottomPanel: true,
			yearsLine: false,
			title: false,
			closeButton: false,
			fullsizeButton: false
		});
		jQuery('#defaultEndTime2').periodpicker({
			timepicker: true,
			defaultEndTime: '21:00',
			timepickerOptions: {
				defaultTime: '19:00'
			}
		});
		jQuery('#likeXDSoftDateTimePicker1').periodpicker({
			norange: true,
			likeXDSoftDateTimePicker: true,
			cells: [1, 1],
			withoutBottomPanel: true,
			yearsLine: false,
			title: false,
			closeButton: false,
			resizeButton: false,
			fullsizeButton: false,
			hideAfterSelect: true
		});
		jQuery('#like_datetimepicker_mode').periodpicker({
			norange: true,
			likeXDSoftDateTimePicker: true,
			cells: [1, 1],
			withoutBottomPanel: true,
			yearsLine: false,
			title: false,
			closeButton: false,
			resizeButton: false,
			fullsizeButton: false,
			hideAfterSelect: true
		})
	})
}(jQuery));