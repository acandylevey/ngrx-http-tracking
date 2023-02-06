"use strict";
(self.webpackChunkhttp_trackig_demo =
  self.webpackChunkhttp_trackig_demo || []).push([
  [179],
  {
    3717: (R, I, y) => {
      var f = y(5e3);
      let L = null;
      function V() {
        return L;
      }
      const O = new f.OlP("DocumentToken");
      var Ze = (() => (
        ((Ze = Ze || {})[(Ze.Zero = 0)] = "Zero"),
        (Ze[(Ze.One = 1)] = "One"),
        (Ze[(Ze.Two = 2)] = "Two"),
        (Ze[(Ze.Few = 3)] = "Few"),
        (Ze[(Ze.Many = 4)] = "Many"),
        (Ze[(Ze.Other = 5)] = "Other"),
        Ze
      ))();
      const Tr = f.kL8;
      class He {}
      let Nn = (() => {
        class a extends He {
          constructor(o) {
            super(), (this.locale = o);
          }
          getPluralCategory(o, l) {
            switch (Tr(l || this.locale)(o)) {
              case Ze.Zero:
                return "zero";
              case Ze.One:
                return "one";
              case Ze.Two:
                return "two";
              case Ze.Few:
                return "few";
              case Ze.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(f.soG));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      function sr(a, u) {
        u = encodeURIComponent(u);
        for (const o of a.split(";")) {
          const l = o.indexOf("="),
            [p, D] = -1 == l ? [o, ""] : [o.slice(0, l), o.slice(l + 1)];
          if (p.trim() === u) return decodeURIComponent(D);
        }
        return null;
      }
      class Jo {
        createSubscription(u, o) {
          return u.subscribe({
            next: o,
            error: (l) => {
              throw l;
            },
          });
        }
        dispose(u) {
          u.unsubscribe();
        }
        onDestroy(u) {
          u.unsubscribe();
        }
      }
      class lf {
        createSubscription(u, o) {
          return u.then(o, (l) => {
            throw l;
          });
        }
        dispose(u) {}
        onDestroy(u) {}
      }
      const df = new lf(),
        ff = new Jo();
      let oc = (() => {
          class a {
            constructor(o) {
              (this._ref = o),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null),
                (this._strategy = null);
            }
            ngOnDestroy() {
              this._subscription && this._dispose();
            }
            transform(o) {
              return this._obj
                ? o !== this._obj
                  ? (this._dispose(), this.transform(o))
                  : this._latestValue
                : (o && this._subscribe(o), this._latestValue);
            }
            _subscribe(o) {
              (this._obj = o),
                (this._strategy = this._selectStrategy(o)),
                (this._subscription = this._strategy.createSubscription(
                  o,
                  (l) => this._updateLatestValue(o, l)
                ));
            }
            _selectStrategy(o) {
              if ((0, f.QGY)(o)) return df;
              if ((0, f.F4k)(o)) return ff;
              throw (function xt(a, u) {
                return new f.vHH(2100, "");
              })();
            }
            _dispose() {
              this._strategy.dispose(this._subscription),
                (this._latestValue = null),
                (this._subscription = null),
                (this._obj = null);
            }
            _updateLatestValue(o, l) {
              o === this._obj &&
                ((this._latestValue = l), this._ref.markForCheck());
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.Y36(f.sBO, 16));
            }),
            (a.ɵpipe = f.Yjl({ name: "async", type: a, pure: !1 })),
            a
          );
        })(),
        Qo = (() => {
          class a {
            transform(o) {
              return JSON.stringify(o, null, 2);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵpipe = f.Yjl({ name: "json", type: a, pure: !1 })),
            a
          );
        })(),
        ar = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({ providers: [{ provide: He, useClass: Nn }] })),
            a
          );
        })();
      class it {}
      class Sa extends class hc extends class T {} {
        constructor() {
          super(...arguments), (this.supportsDOMEvents = !0);
        }
      } {
        static makeCurrent() {
          !(function S(a) {
            L || (L = a);
          })(new Sa());
        }
        onAndCancel(u, o, l) {
          return (
            u.addEventListener(o, l, !1),
            () => {
              u.removeEventListener(o, l, !1);
            }
          );
        }
        dispatchEvent(u, o) {
          u.dispatchEvent(o);
        }
        remove(u) {
          u.parentNode && u.parentNode.removeChild(u);
        }
        createElement(u, o) {
          return (o = o || this.getDefaultDocument()).createElement(u);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(u) {
          return u.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(u) {
          return u instanceof DocumentFragment;
        }
        getGlobalEventTarget(u, o) {
          return "window" === o
            ? window
            : "document" === o
            ? u
            : "body" === o
            ? u.body
            : null;
        }
        getBaseHref(u) {
          const o = (function $t() {
            return (
              (jn = jn || document.querySelector("base")),
              jn ? jn.getAttribute("href") : null
            );
          })();
          return null == o
            ? null
            : (function ni(a) {
                (Bs = Bs || document.createElement("a")),
                  Bs.setAttribute("href", a);
                const u = Bs.pathname;
                return "/" === u.charAt(0) ? u : `/${u}`;
              })(o);
        }
        resetBaseElement() {
          jn = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        getCookie(u) {
          return sr(document.cookie, u);
        }
      }
      let Bs,
        jn = null;
      const ur = new f.OlP("TRANSITION_ID"),
        Oa = [
          {
            provide: f.ip1,
            useFactory: function Lt(a, u, o) {
              return () => {
                o.get(f.CZH).donePromise.then(() => {
                  const l = V(),
                    p = u.querySelectorAll(`style[ng-transition="${a}"]`);
                  for (let D = 0; D < p.length; D++) l.remove(p[D]);
                });
              };
            },
            deps: [ur, O, f.zs3],
            multi: !0,
          },
        ];
      class is {
        static init() {
          (0, f.VLi)(new is());
        }
        addToWindow(u) {
          (f.dqk.getAngularTestability = (l, p = !0) => {
            const D = u.findTestabilityInTree(l, p);
            if (null == D)
              throw new Error("Could not find testability for element.");
            return D;
          }),
            (f.dqk.getAllAngularTestabilities = () => u.getAllTestabilities()),
            (f.dqk.getAllAngularRootElements = () => u.getAllRootElements()),
            f.dqk.frameworkStabilizers || (f.dqk.frameworkStabilizers = []),
            f.dqk.frameworkStabilizers.push((l) => {
              const p = f.dqk.getAllAngularTestabilities();
              let D = p.length,
                A = !1;
              const U = function (q) {
                (A = A || q), D--, 0 == D && l(A);
              };
              p.forEach(function (q) {
                q.whenStable(U);
              });
            });
        }
        findTestabilityInTree(u, o, l) {
          if (null == o) return null;
          const p = u.getTestability(o);
          return null != p
            ? p
            : l
            ? V().isShadowRoot(o)
              ? this.findTestabilityInTree(u, o.host, !0)
              : this.findTestabilityInTree(u, o.parentElement, !0)
            : null;
        }
      }
      let pc = (() => {
        class a {
          build() {
            return new XMLHttpRequest();
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Jt = new f.OlP("EventManagerPlugins");
      let as = (() => {
        class a {
          constructor(o, l) {
            (this._zone = l),
              (this._eventNameToPlugin = new Map()),
              o.forEach((p) => (p.manager = this)),
              (this._plugins = o.slice().reverse());
          }
          addEventListener(o, l, p) {
            return this._findPluginFor(l).addEventListener(o, l, p);
          }
          addGlobalEventListener(o, l, p) {
            return this._findPluginFor(l).addGlobalEventListener(o, l, p);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(o) {
            const l = this._eventNameToPlugin.get(o);
            if (l) return l;
            const p = this._plugins;
            for (let D = 0; D < p.length; D++) {
              const A = p[D];
              if (A.supports(o)) return this._eventNameToPlugin.set(o, A), A;
            }
            throw new Error(`No event manager plugin found for event ${o}`);
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(Jt), f.LFG(f.R0b));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class js {
        constructor(u) {
          this._doc = u;
        }
        addGlobalEventListener(u, o, l) {
          const p = V().getGlobalEventTarget(this._doc, u);
          if (!p)
            throw new Error(`Unsupported event target ${p} for event ${o}`);
          return this.addEventListener(p, o, l);
        }
      }
      let ve = (() => {
          class a {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(o) {
              const l = new Set();
              o.forEach((p) => {
                this._stylesSet.has(p) || (this._stylesSet.add(p), l.add(p));
              }),
                this.onStylesAdded(l);
            }
            onStylesAdded(o) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Vs = (() => {
          class a extends ve {
            constructor(o) {
              super(),
                (this._doc = o),
                (this._hostNodes = new Map()),
                this._hostNodes.set(o.head, []);
            }
            _addStylesToHost(o, l, p) {
              o.forEach((D) => {
                const A = this._doc.createElement("style");
                (A.textContent = D), p.push(l.appendChild(A));
              });
            }
            addHost(o) {
              const l = [];
              this._addStylesToHost(this._stylesSet, o, l),
                this._hostNodes.set(o, l);
            }
            removeHost(o) {
              const l = this._hostNodes.get(o);
              l && l.forEach(xa), this._hostNodes.delete(o);
            }
            onStylesAdded(o) {
              this._hostNodes.forEach((l, p) => {
                this._addStylesToHost(o, p, l);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((o) => o.forEach(xa));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(O));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      function xa(a) {
        V().remove(a);
      }
      const ri = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        si = /%COMP%/g;
      function rt(a, u, o) {
        for (let l = 0; l < u.length; l++) {
          let p = u[l];
          Array.isArray(p) ? rt(a, p, o) : ((p = p.replace(si, a)), o.push(p));
        }
        return o;
      }
      function ii(a) {
        return (u) => {
          if ("__ngUnwrap__" === u) return a;
          !1 === a(u) && (u.preventDefault(), (u.returnValue = !1));
        };
      }
      let Gt = (() => {
        class a {
          constructor(o, l, p) {
            (this.eventManager = o),
              (this.sharedStylesHost = l),
              (this.appId = p),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new us(o));
          }
          createRenderer(o, l) {
            if (!o || !l) return this.defaultRenderer;
            switch (l.encapsulation) {
              case f.ifc.Emulated: {
                let p = this.rendererByCompId.get(l.id);
                return (
                  p ||
                    ((p = new _c(
                      this.eventManager,
                      this.sharedStylesHost,
                      l,
                      this.appId
                    )),
                    this.rendererByCompId.set(l.id, p)),
                  p.applyToHost(o),
                  p
                );
              }
              case 1:
              case f.ifc.ShadowDom:
                return new Hs(this.eventManager, this.sharedStylesHost, o, l);
              default:
                if (!this.rendererByCompId.has(l.id)) {
                  const p = rt(l.id, l.styles, []);
                  this.sharedStylesHost.addStyles(p),
                    this.rendererByCompId.set(l.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(as), f.LFG(Vs), f.LFG(f.AFp));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class us {
        constructor(u) {
          (this.eventManager = u),
            (this.data = Object.create(null)),
            (this.destroyNode = null);
        }
        destroy() {}
        createElement(u, o) {
          return o
            ? document.createElementNS(ri[o] || o, u)
            : document.createElement(u);
        }
        createComment(u) {
          return document.createComment(u);
        }
        createText(u) {
          return document.createTextNode(u);
        }
        appendChild(u, o) {
          u.appendChild(o);
        }
        insertBefore(u, o, l) {
          u && u.insertBefore(o, l);
        }
        removeChild(u, o) {
          u && u.removeChild(o);
        }
        selectRootElement(u, o) {
          let l = "string" == typeof u ? document.querySelector(u) : u;
          if (!l)
            throw new Error(`The selector "${u}" did not match any elements`);
          return o || (l.textContent = ""), l;
        }
        parentNode(u) {
          return u.parentNode;
        }
        nextSibling(u) {
          return u.nextSibling;
        }
        setAttribute(u, o, l, p) {
          if (p) {
            o = p + ":" + o;
            const D = ri[p];
            D ? u.setAttributeNS(D, o, l) : u.setAttribute(o, l);
          } else u.setAttribute(o, l);
        }
        removeAttribute(u, o, l) {
          if (l) {
            const p = ri[l];
            p ? u.removeAttributeNS(p, o) : u.removeAttribute(`${l}:${o}`);
          } else u.removeAttribute(o);
        }
        addClass(u, o) {
          u.classList.add(o);
        }
        removeClass(u, o) {
          u.classList.remove(o);
        }
        setStyle(u, o, l, p) {
          p & (f.JOm.DashCase | f.JOm.Important)
            ? u.style.setProperty(o, l, p & f.JOm.Important ? "important" : "")
            : (u.style[o] = l);
        }
        removeStyle(u, o, l) {
          l & f.JOm.DashCase ? u.style.removeProperty(o) : (u.style[o] = "");
        }
        setProperty(u, o, l) {
          u[o] = l;
        }
        setValue(u, o) {
          u.nodeValue = o;
        }
        listen(u, o, l) {
          return "string" == typeof u
            ? this.eventManager.addGlobalEventListener(u, o, ii(l))
            : this.eventManager.addEventListener(u, o, ii(l));
        }
      }
      class _c extends us {
        constructor(u, o, l, p) {
          super(u), (this.component = l);
          const D = rt(p + "-" + l.id, l.styles, []);
          o.addStyles(D),
            (this.contentAttr = (function Ne(a) {
              return "_ngcontent-%COMP%".replace(si, a);
            })(p + "-" + l.id)),
            (this.hostAttr = (function mc(a) {
              return "_nghost-%COMP%".replace(si, a);
            })(p + "-" + l.id));
        }
        applyToHost(u) {
          super.setAttribute(u, this.hostAttr, "");
        }
        createElement(u, o) {
          const l = super.createElement(u, o);
          return super.setAttribute(l, this.contentAttr, ""), l;
        }
      }
      class Hs extends us {
        constructor(u, o, l, p) {
          super(u),
            (this.sharedStylesHost = o),
            (this.hostEl = l),
            (this.shadowRoot = l.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const D = rt(p.id, p.styles, []);
          for (let A = 0; A < D.length; A++) {
            const U = document.createElement("style");
            (U.textContent = D[A]), this.shadowRoot.appendChild(U);
          }
        }
        nodeOrShadowRoot(u) {
          return u === this.hostEl ? this.shadowRoot : u;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(u, o) {
          return super.appendChild(this.nodeOrShadowRoot(u), o);
        }
        insertBefore(u, o, l) {
          return super.insertBefore(this.nodeOrShadowRoot(u), o, l);
        }
        removeChild(u, o) {
          return super.removeChild(this.nodeOrShadowRoot(u), o);
        }
        parentNode(u) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(u))
          );
        }
      }
      let $s = (() => {
        class a extends js {
          constructor(o) {
            super(o);
          }
          supports(o) {
            return !0;
          }
          addEventListener(o, l, p) {
            return (
              o.addEventListener(l, p, !1),
              () => this.removeEventListener(o, l, p)
            );
          }
          removeEventListener(o, l, p) {
            return o.removeEventListener(l, p);
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(O));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Ct = ["alt", "control", "meta", "shift"],
        Fa = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          Del: "Delete",
          Esc: "Escape",
          Left: "ArrowLeft",
          Right: "ArrowRight",
          Up: "ArrowUp",
          Down: "ArrowDown",
          Menu: "ContextMenu",
          Scroll: "ScrollLock",
          Win: "OS",
        },
        cr = {
          A: "1",
          B: "2",
          C: "3",
          D: "4",
          E: "5",
          F: "6",
          G: "7",
          H: "8",
          I: "9",
          J: "*",
          K: "+",
          M: "-",
          N: ".",
          O: "/",
          "`": "0",
          "\x90": "NumLock",
        },
        En = {
          alt: (a) => a.altKey,
          control: (a) => a.ctrlKey,
          meta: (a) => a.metaKey,
          shift: (a) => a.shiftKey,
        };
      let Dc = (() => {
        class a extends js {
          constructor(o) {
            super(o);
          }
          supports(o) {
            return null != a.parseEventName(o);
          }
          addEventListener(o, l, p) {
            const D = a.parseEventName(l),
              A = a.eventCallback(D.fullKey, p, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => V().onAndCancel(o, D.domEventName, A));
          }
          static parseEventName(o) {
            const l = o.toLowerCase().split("."),
              p = l.shift();
            if (0 === l.length || ("keydown" !== p && "keyup" !== p))
              return null;
            const D = a._normalizeKey(l.pop());
            let A = "";
            if (
              (Ct.forEach((q) => {
                const le = l.indexOf(q);
                le > -1 && (l.splice(le, 1), (A += q + "."));
              }),
              (A += D),
              0 != l.length || 0 === D.length)
            )
              return null;
            const U = {};
            return (U.domEventName = p), (U.fullKey = A), U;
          }
          static getEventFullKey(o) {
            let l = "",
              p = (function Ra(a) {
                let u = a.key;
                if (null == u) {
                  if (((u = a.keyIdentifier), null == u)) return "Unidentified";
                  u.startsWith("U+") &&
                    ((u = String.fromCharCode(parseInt(u.substring(2), 16))),
                    3 === a.location && cr.hasOwnProperty(u) && (u = cr[u]));
                }
                return Fa[u] || u;
              })(o);
            return (
              (p = p.toLowerCase()),
              " " === p ? (p = "space") : "." === p && (p = "dot"),
              Ct.forEach((D) => {
                D != p && En[D](o) && (l += D + ".");
              }),
              (l += p),
              l
            );
          }
          static eventCallback(o, l, p) {
            return (D) => {
              a.getEventFullKey(D) === o && p.runGuarded(() => l(D));
            };
          }
          static _normalizeKey(o) {
            return "esc" === o ? "escape" : o;
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(O));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Na = (0, f.eFA)(f._c5, "browser", [
          { provide: f.Lbi, useValue: "browser" },
          {
            provide: f.g9A,
            useValue: function Ec() {
              Sa.makeCurrent(), is.init();
            },
            multi: !0,
          },
          {
            provide: O,
            useFactory: function ui() {
              return (0, f.RDi)(document), document;
            },
            deps: [],
          },
        ]),
        li = [
          { provide: f.zSh, useValue: "root" },
          {
            provide: f.qLn,
            useFactory: function vc() {
              return new f.qLn();
            },
            deps: [],
          },
          { provide: Jt, useClass: $s, multi: !0, deps: [O, f.R0b, f.Lbi] },
          { provide: Jt, useClass: Dc, multi: !0, deps: [O] },
          { provide: Gt, useClass: Gt, deps: [as, Vs, f.AFp] },
          { provide: f.FYo, useExisting: Gt },
          { provide: ve, useExisting: Vs },
          { provide: Vs, useClass: Vs, deps: [O] },
          { provide: f.dDg, useClass: f.dDg, deps: [f.R0b] },
          { provide: as, useClass: as, deps: [Jt, f.R0b] },
          { provide: it, useClass: pc, deps: [] },
        ];
      let di = (() => {
        class a {
          constructor(o) {
            if (o)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(o) {
            return {
              ngModule: a,
              providers: [
                { provide: f.AFp, useValue: o.appId },
                { provide: ur, useExisting: f.AFp },
                Oa,
              ],
            };
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(a, 12));
          }),
          (a.ɵmod = f.oAB({ type: a })),
          (a.ɵinj = f.cJS({ providers: li, imports: [ar, f.hGG] })),
          a
        );
      })();
      "undefined" != typeof window && window;
      var te = y(5234),
        qs = y(7138),
        lr = y(2916),
        gi = y(8929),
        Un = y(3489);
      class Ic {
        call(u, o) {
          return o.subscribe(new Rr(u));
        }
      }
      class Rr extends Un.L {
        _next(u) {}
      }
      var dr = y(9312);
      class Bf {
        call(u, o) {
          return o.subscribe(new Ua(u));
        }
      }
      class Ua extends Un.L {
        constructor(u) {
          super(u);
        }
        _next(u) {
          this.destination.next(dr.P.createNext(u));
        }
        _error(u) {
          const o = this.destination;
          o.next(dr.P.createError(u)), o.complete();
        }
        _complete() {
          const u = this.destination;
          u.next(dr.P.createComplete()), u.complete();
        }
      }
      var tt = y(4850),
        Ha = y(7221),
        ln = y(2198),
        Nr = y(2654);
      function Qs(a, u, o, l) {
        return (p) => p.lift(new mi(a, u, o, l));
      }
      class mi {
        constructor(u, o, l, p) {
          (this.keySelector = u),
            (this.elementSelector = o),
            (this.durationSelector = l),
            (this.subjectSelector = p);
        }
        call(u, o) {
          return o.subscribe(
            new Xs(
              u,
              this.keySelector,
              this.elementSelector,
              this.durationSelector,
              this.subjectSelector
            )
          );
        }
      }
      class Xs extends Un.L {
        constructor(u, o, l, p, D) {
          super(u),
            (this.keySelector = o),
            (this.elementSelector = l),
            (this.durationSelector = p),
            (this.subjectSelector = D),
            (this.groups = null),
            (this.attemptedToUnsubscribe = !1),
            (this.count = 0);
        }
        _next(u) {
          let o;
          try {
            o = this.keySelector(u);
          } catch (l) {
            return void this.error(l);
          }
          this._group(u, o);
        }
        _group(u, o) {
          let l = this.groups;
          l || (l = this.groups = new Map());
          let D,
            p = l.get(o);
          if (this.elementSelector)
            try {
              D = this.elementSelector(u);
            } catch (A) {
              this.error(A);
            }
          else D = u;
          if (!p) {
            (p = this.subjectSelector ? this.subjectSelector() : new gi.xQ()),
              l.set(o, p);
            const A = new $a(o, p, this);
            if ((this.destination.next(A), this.durationSelector)) {
              let U;
              try {
                U = this.durationSelector(new $a(o, p));
              } catch (q) {
                return void this.error(q);
              }
              this.add(U.subscribe(new eo(o, p, this)));
            }
          }
          p.closed || p.next(D);
        }
        _error(u) {
          const o = this.groups;
          o &&
            (o.forEach((l, p) => {
              l.error(u);
            }),
            o.clear()),
            this.destination.error(u);
        }
        _complete() {
          const u = this.groups;
          u &&
            (u.forEach((o, l) => {
              o.complete();
            }),
            u.clear()),
            this.destination.complete();
        }
        removeGroup(u) {
          this.groups.delete(u);
        }
        unsubscribe() {
          this.closed ||
            ((this.attemptedToUnsubscribe = !0),
            0 === this.count && super.unsubscribe());
        }
      }
      class eo extends Un.L {
        constructor(u, o, l) {
          super(o), (this.key = u), (this.group = o), (this.parent = l);
        }
        _next(u) {
          this.complete();
        }
        _unsubscribe() {
          const { parent: u, key: o } = this;
          (this.key = this.parent = null), u && u.removeGroup(o);
        }
      }
      class $a extends lr.y {
        constructor(u, o, l) {
          super(),
            (this.key = u),
            (this.groupSubject = o),
            (this.refCountSubscription = l);
        }
        _subscribe(u) {
          const o = new Nr.w(),
            { refCountSubscription: l, groupSubject: p } = this;
          return l && !l.closed && o.add(new Ga(l)), o.add(p.subscribe(u)), o;
        }
      }
      class Ga extends Nr.w {
        constructor(u) {
          super(), (this.parent = u), u.count++;
        }
        unsubscribe() {
          const u = this.parent;
          !u.closed &&
            !this.closed &&
            (super.unsubscribe(),
            (u.count -= 1),
            0 === u.count && u.attemptedToUnsubscribe && u.unsubscribe());
        }
      }
      var yi = y(1709),
        _i = y(5254),
        to = y(1177);
      function Wa(a, u) {
        return u
          ? (o) =>
              o.pipe(
                Wa((l, p) =>
                  (0, _i.D)(a(l, p)).pipe((0, tt.U)((D, A) => u(l, D, p, A)))
                )
              )
          : (o) => o.lift(new Ac(a));
      }
      class Ac {
        constructor(u) {
          this.project = u;
        }
        call(u, o) {
          return o.subscribe(new no(u, this.project));
        }
      }
      class no extends to.Ds {
        constructor(u, o) {
          super(u),
            (this.project = o),
            (this.hasSubscription = !1),
            (this.hasCompleted = !1),
            (this.index = 0);
        }
        _next(u) {
          this.hasSubscription || this.tryNext(u);
        }
        tryNext(u) {
          let o;
          const l = this.index++;
          try {
            o = this.project(u, l);
          } catch (p) {
            return void this.destination.error(p);
          }
          (this.hasSubscription = !0), this._innerSub(o);
        }
        _innerSub(u) {
          const o = new to.IY(this),
            l = this.destination;
          l.add(o);
          const p = (0, to.ft)(u, o);
          p !== o && l.add(p);
        }
        _complete() {
          (this.hasCompleted = !0),
            this.hasSubscription || this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(u) {
          this.destination.next(u);
        }
        notifyError(u) {
          this.destination.error(u);
        }
        notifyComplete() {
          (this.hasSubscription = !1),
            this.hasCompleted && this.destination.complete();
        }
      }
      class Sc {
        call(u, o) {
          return o.subscribe(new za(u));
        }
      }
      class za extends Un.L {
        constructor(u) {
          super(u);
        }
        _next(u) {
          u.observe(this.destination);
        }
      }
      var Di = y(5632);
      const fr = { dispatch: !0, useEffectsErrorHandler: !0 },
        ls = "__@ngrx/effects_create__";
      function ro(a, u) {
        const o = a(),
          l = Object.assign(Object.assign({}, fr), u);
        return Object.defineProperty(o, ls, { value: l }), o;
      }
      function Ei(a) {
        return Object.getOwnPropertyNames(a)
          .filter(
            (l) =>
              !(!a[l] || !a[l].hasOwnProperty(ls)) &&
              a[l][ls].hasOwnProperty("dispatch")
          )
          .map((l) => Object.assign({ propertyName: l }, a[l][ls]));
      }
      function Hn(a) {
        return Object.getPrototypeOf(a);
      }
      const vn = "__@ngrx/effects__";
      function Ka(a) {
        return (0, te.qC)(jf, Hn)(a);
      }
      function jf(a) {
        return (function so(a) {
          return a.constructor.hasOwnProperty(vn);
        })(a)
          ? a.constructor[vn]
          : [];
      }
      function Uf(a, u, o) {
        const l = Hn(a).constructor.name,
          p = (function nt(a) {
            return [Ka, Ei].reduce((o, l) => o.concat(l(a)), []);
          })(a).map(
            ({ propertyName: D, dispatch: A, useEffectsErrorHandler: U }) => {
              const q = "function" == typeof a[D] ? a[D]() : a[D],
                le = U ? o(q, u) : q;
              return !1 === A
                ? le.pipe(
                    (function Fr() {
                      return function (u) {
                        return u.lift(new Ic());
                      };
                    })()
                  )
                : le
                    .pipe(
                      (function Js() {
                        return function (u) {
                          return u.lift(new Bf());
                        };
                      })()
                    )
                    .pipe(
                      (0, tt.U)((pe) => ({
                        effect: a[D],
                        notification: pe,
                        propertyName: D,
                        sourceName: l,
                        sourceInstance: a,
                      }))
                    );
            }
          );
        return (0, qs.T)(...p);
      }
      function Oc(a, u, o = 10) {
        return a.pipe(
          (0, Ha.K)(
            (l) => (u && u.handleError(l), o <= 1 ? a : Oc(a, u, o - 1))
          )
        );
      }
      let fs = (() => {
        class a extends lr.y {
          constructor(o) {
            super(), o && (this.source = o);
          }
          lift(o) {
            const l = new a();
            return (l.source = this), (l.operator = o), l;
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(te.Y$));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      function Wt(a) {
        return zt(a, "ngrxOnInitEffects");
      }
      function zt(a, u) {
        return a && u in a && "function" == typeof a[u];
      }
      const bi = new f.OlP("@ngrx/effects Internal Root Guard"),
        hr = new f.OlP("@ngrx/effects User Provided Effects"),
        pr = new f.OlP("@ngrx/effects Internal Root Effects"),
        Ci = new f.OlP("@ngrx/effects Root Effects"),
        Ya = new f.OlP("@ngrx/effects Internal Feature Effects"),
        Za = new f.OlP("@ngrx/effects Feature Effects"),
        Pc = new f.OlP("@ngrx/effects Effects Error Handler");
      let qa = (() => {
        class a extends gi.xQ {
          constructor(o, l) {
            super(), (this.errorHandler = o), (this.effectsErrorHandler = l);
          }
          addEffects(o) {
            this.next(o);
          }
          toActions() {
            return this.pipe(
              Qs(Hn),
              (0, yi.zg)((o) => o.pipe(Qs(Ja))),
              (0, yi.zg)((o) => {
                const l = o.pipe(
                    Wa((D) =>
                      (function kt(a, u) {
                        return (o) => {
                          const l = Uf(o, a, u);
                          return (function Kf(a) {
                            return zt(a, "ngrxOnRunEffects");
                          })(o)
                            ? o.ngrxOnRunEffects(l)
                            : l;
                        };
                      })(
                        this.errorHandler,
                        this.effectsErrorHandler
                      )(D)
                    ),
                    (0, tt.U)(
                      (D) => (
                        (function Gf(a, u) {
                          if ("N" === a.notification.kind) {
                            const o = a.notification.value;
                            !(function Wf(a) {
                              return (
                                "function" != typeof a &&
                                a &&
                                a.type &&
                                "string" == typeof a.type
                              );
                            })(o) &&
                              u.handleError(
                                new Error(
                                  `Effect ${(function hs({
                                    propertyName: a,
                                    sourceInstance: u,
                                    sourceName: o,
                                  }) {
                                    const l = "function" == typeof u[a];
                                    return `"${o}.${String(a)}${
                                      l ? "()" : ""
                                    }"`;
                                  })(
                                    a
                                  )} dispatched an invalid action: ${(function zf(
                                    a
                                  ) {
                                    try {
                                      return JSON.stringify(a);
                                    } catch (u) {
                                      return a;
                                    }
                                  })(o)}`
                                )
                              );
                          }
                        })(D, this.errorHandler),
                        D.notification
                      )
                    ),
                    (0, ln.h)((D) => "N" === D.kind && null != D.value),
                    (function cs() {
                      return function (u) {
                        return u.lift(new Sc());
                      };
                    })()
                  ),
                  p = o.pipe(
                    (0, Di.q)(1),
                    (0, ln.h)(Wt),
                    (0, tt.U)((D) => D.ngrxOnInitEffects())
                  );
                return (0, qs.T)(l, p);
              })
            );
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(f.qLn), f.LFG(Pc));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      function Ja(a) {
        return (function vi(a) {
          return zt(a, "ngrxOnIdentifyEffects");
        })(a)
          ? a.ngrxOnIdentifyEffects()
          : "";
      }
      let gs = (() => {
        class a {
          constructor(o, l) {
            (this.effectSources = o),
              (this.store = l),
              (this.effectsSubscription = null);
          }
          start() {
            this.effectsSubscription ||
              (this.effectsSubscription = this.effectSources
                .toActions()
                .subscribe(this.store));
          }
          ngOnDestroy() {
            this.effectsSubscription &&
              (this.effectsSubscription.unsubscribe(),
              (this.effectsSubscription = null));
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(qa), f.LFG(te.yh));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const gr = "@ngrx/effects/init";
      (0, te.PH)(gr);
      let wi = (() => {
          class a {
            constructor(o, l, p, D, A, U, q) {
              (this.sources = o),
                l.start(),
                D.forEach((le) => o.addEffects(le)),
                p.dispatch({ type: gr });
            }
            addEffects(o) {
              this.sources.addEffects(o);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(
                f.LFG(qa),
                f.LFG(gs),
                f.LFG(te.yh),
                f.LFG(Ci),
                f.LFG(te.cr, 8),
                f.LFG(te.CK, 8),
                f.LFG(bi, 8)
              );
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({})),
            a
          );
        })(),
        Fc = (() => {
          class a {
            constructor(o, l, p, D) {
              l.forEach((A) => A.forEach((U) => o.addEffects(U)));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(
                f.LFG(wi),
                f.LFG(Za),
                f.LFG(te.cr, 8),
                f.LFG(te.CK, 8)
              );
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({})),
            a
          );
        })(),
        kr = (() => {
          class a {
            static forFeature(o = []) {
              return {
                ngModule: Fc,
                providers: [
                  o,
                  { provide: Ya, multi: !0, useValue: o },
                  { provide: hr, multi: !0, useValue: [] },
                  {
                    provide: Za,
                    multi: !0,
                    useFactory: Qa,
                    deps: [f.zs3, Ya, hr],
                  },
                ],
              };
            }
            static forRoot(o = []) {
              return {
                ngModule: wi,
                providers: [
                  { provide: Pc, useValue: Oc },
                  gs,
                  qa,
                  fs,
                  o,
                  { provide: pr, useValue: [o] },
                  {
                    provide: bi,
                    useFactory: Nc,
                    deps: [
                      [gs, new f.FiY(), new f.tp0()],
                      [pr, new f.PiD()],
                    ],
                  },
                  { provide: hr, multi: !0, useValue: [] },
                  { provide: Ci, useFactory: Qa, deps: [f.zs3, pr, hr] },
                ],
              };
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({})),
            a
          );
        })();
      function Qa(a, u, o) {
        const l = [];
        for (const p of u) l.push(...p);
        for (const p of o) l.push(...p);
        return (function Rc(a, u) {
          return u.map((o) => a.get(o));
        })(a, l);
      }
      function Nc(a, u) {
        if ((1 !== u.length || 0 !== u[0].length) && a)
          throw new TypeError(
            "EffectsModule.forRoot() called twice. Feature modules should use EffectsModule.forFeature() instead."
          );
        return "guarded";
      }
      y(9565);
      var ye = (() => {
        return (
          ((a = ye || (ye = {}))[(a.EntitiesOnly = 0)] = "EntitiesOnly"),
          (a[(a.Both = 1)] = "Both"),
          (a[(a.None = 2)] = "None"),
          ye
        );
        var a;
      })();
      function Je(a) {
        return function (o, l) {
          const p = {
              ids: [...l.ids],
              entities: Object.assign({}, l.entities),
            },
            D = a(o, p);
          return D === ye.Both
            ? Object.assign({}, l, p)
            : D === ye.EntitiesOnly
            ? Object.assign(Object.assign({}, l), { entities: p.entities })
            : l;
        };
      }
      function bn(a, u) {
        const o = u(a);
        return (
          (0, f.X6Q)() &&
            void 0 === o &&
            console.warn(
              "@ngrx/entity: The entity passed to the `selectId` implementation returned undefined.",
              "You should probably provide your own `selectId` implementation.",
              "The entity that was passed:",
              a,
              "The `selectId` implementation:",
              u.toString()
            ),
          o
        );
      }
      function Ti(a) {
        function u(he, re) {
          const se = bn(he, a);
          return se in re.entities
            ? ye.None
            : (re.ids.push(se), (re.entities[se] = he), ye.Both);
        }
        function o(he, re) {
          let se = !1;
          for (const ne of he) se = u(ne, re) !== ye.None || se;
          return se ? ye.Both : ye.None;
        }
        function p(he, re) {
          const se = bn(he, a);
          return se in re.entities
            ? ((re.entities[se] = he), ye.EntitiesOnly)
            : (re.ids.push(se), (re.entities[se] = he), ye.Both);
        }
        function U(he, re) {
          const ne =
            (he instanceof Array
              ? he
              : re.ids.filter((de) => he(re.entities[de]))
            )
              .filter((de) => de in re.entities)
              .map((de) => delete re.entities[de]).length > 0;
          return (
            ne && (re.ids = re.ids.filter((de) => de in re.entities)),
            ne ? ye.Both : ye.None
          );
        }
        function _e(he, re) {
          return pe([he], re);
        }
        function pe(he, re) {
          const se = {};
          return (he = he.filter((de) => de.id in re.entities)).length > 0
            ? he.filter((Ce) =>
                (function le(he, re, se) {
                  const de = Object.assign({}, se.entities[re.id], re.changes),
                    Ce = bn(de, a),
                    je = Ce !== re.id;
                  return (
                    je && ((he[re.id] = Ce), delete se.entities[re.id]),
                    (se.entities[Ce] = de),
                    je
                  );
                })(se, Ce, re)
              ).length > 0
              ? ((re.ids = re.ids.map((Ce) => se[Ce] || Ce)), ye.Both)
              : ye.EntitiesOnly
            : ye.None;
        }
        function pt(he, re) {
          const se = [],
            ne = [];
          for (const je of he) {
            const ct = bn(je, a);
            ct in re.entities ? ne.push({ id: ct, changes: je }) : se.push(je);
          }
          const de = pe(ne, re),
            Ce = o(se, re);
          switch (!0) {
            case Ce === ye.None && de === ye.None:
              return ye.None;
            case Ce === ye.Both || de === ye.Both:
              return ye.Both;
            default:
              return ye.EntitiesOnly;
          }
        }
        return {
          removeAll: function q(he) {
            return Object.assign({}, he, { ids: [], entities: {} });
          },
          addOne: Je(u),
          addMany: Je(o),
          setAll: Je(function l(he, re) {
            return (re.ids = []), (re.entities = {}), o(he, re), ye.Both;
          }),
          setOne: Je(p),
          setMany: Je(function D(he, re) {
            const se = he.map((ne) => p(ne, re));
            switch (!0) {
              case se.some((ne) => ne === ye.Both):
                return ye.Both;
              case se.some((ne) => ne === ye.EntitiesOnly):
                return ye.EntitiesOnly;
              default:
                return ye.None;
            }
          }),
          updateOne: Je(_e),
          updateMany: Je(pe),
          upsertOne: Je(function be(he, re) {
            return pt([he], re);
          }),
          upsertMany: Je(pt),
          removeOne: Je(function A(he, re) {
            return U([he], re);
          }),
          removeMany: Je(U),
          map: Je(function Pe(he, re) {
            return pe(
              re.ids
                .reduce((de, Ce) => {
                  const je = he(re.entities[Ce]);
                  return (
                    je !== re.entities[Ce] && de.push({ id: Ce, changes: je }),
                    de
                  );
                }, [])
                .filter(({ id: de }) => de in re.entities),
              re
            );
          }),
          mapOne: Je(function ae({ map: he, id: re }, se) {
            const ne = se.entities[re];
            return ne ? _e({ id: re, changes: he(ne) }, se) : ye.None;
          }),
        };
      }
      function Cn(a = {}) {
        const { selectId: u, sortComparer: o } = Object.assign(
            { sortComparer: !1, selectId: (A) => A.id },
            a
          ),
          l = (function Mi() {
            return {
              getInitialState: function a(u = {}) {
                return Object.assign({ ids: [], entities: {} }, u);
              },
            };
          })(),
          p = (function io() {
            return {
              getSelectors: function a(u) {
                const o = (A) => A.ids,
                  l = (A) => A.entities,
                  p = (0, te.P1)(o, l, (A, U) => A.map((q) => U[q])),
                  D = (0, te.P1)(o, (A) => A.length);
                return u
                  ? {
                      selectIds: (0, te.P1)(u, o),
                      selectEntities: (0, te.P1)(u, l),
                      selectAll: (0, te.P1)(u, p),
                      selectTotal: (0, te.P1)(u, D),
                    }
                  : {
                      selectIds: o,
                      selectEntities: l,
                      selectAll: p,
                      selectTotal: D,
                    };
              },
            };
          })(),
          D = o
            ? (function kc(a, u) {
                const { removeOne: o, removeMany: l, removeAll: p } = Ti(a);
                function D(se, ne) {
                  return A([se], ne);
                }
                function A(se, ne) {
                  const de = se.filter((Ce) => !(bn(Ce, a) in ne.entities));
                  return 0 === de.length ? ye.None : (re(de, ne), ye.Both);
                }
                function q(se, ne) {
                  const de = bn(se, a);
                  return de in ne.entities
                    ? ((ne.ids = ne.ids.filter((Ce) => Ce !== de)),
                      re([se], ne),
                      ye.Both)
                    : D(se, ne);
                }
                function _e(se, ne) {
                  return Pe([se], ne);
                }
                function Pe(se, ne) {
                  const de = [],
                    Ce =
                      se.filter((je) =>
                        (function pe(se, ne, de) {
                          if (!(ne.id in de.entities)) return !1;
                          const je = Object.assign(
                              {},
                              de.entities[ne.id],
                              ne.changes
                            ),
                            ct = bn(je, a);
                          return (
                            delete de.entities[ne.id], se.push(je), ct !== ne.id
                          );
                        })(de, je, ne)
                      ).length > 0;
                  if (0 === de.length) return ye.None;
                  {
                    const je = ne.ids,
                      ct = [];
                    return (
                      (ne.ids = ne.ids.filter(
                        (Bt, zn) => Bt in ne.entities || (ct.push(zn), !1)
                      )),
                      re(de, ne),
                      !Ce && ct.every((Bt) => ne.ids[Bt] === je[Bt])
                        ? ye.EntitiesOnly
                        : ye.Both
                    );
                  }
                }
                function he(se, ne) {
                  const de = [],
                    Ce = [];
                  for (const Bt of se) {
                    const zn = bn(Bt, a);
                    zn in ne.entities
                      ? Ce.push({ id: zn, changes: Bt })
                      : de.push(Bt);
                  }
                  const je = Pe(Ce, ne),
                    ct = A(de, ne);
                  switch (!0) {
                    case ct === ye.None && je === ye.None:
                      return ye.None;
                    case ct === ye.Both || je === ye.Both:
                      return ye.Both;
                    default:
                      return ye.EntitiesOnly;
                  }
                }
                function re(se, ne) {
                  se.sort(u);
                  const de = [];
                  let Ce = 0,
                    je = 0;
                  for (; Ce < se.length && je < ne.ids.length; ) {
                    const ct = se[Ce],
                      Bt = bn(ct, a),
                      zn = ne.ids[je];
                    u(ct, ne.entities[zn]) <= 0
                      ? (de.push(Bt), Ce++)
                      : (de.push(zn), je++);
                  }
                  (ne.ids = de.concat(
                    Ce < se.length ? se.slice(Ce).map(a) : ne.ids.slice(je)
                  )),
                    se.forEach((ct, Bt) => {
                      ne.entities[a(ct)] = ct;
                    });
                }
                return {
                  removeOne: o,
                  removeMany: l,
                  removeAll: p,
                  addOne: Je(D),
                  updateOne: Je(_e),
                  upsertOne: Je(function pt(se, ne) {
                    return he([se], ne);
                  }),
                  setAll: Je(function U(se, ne) {
                    return (
                      (ne.entities = {}), (ne.ids = []), A(se, ne), ye.Both
                    );
                  }),
                  setOne: Je(q),
                  setMany: Je(function le(se, ne) {
                    const de = se.map((Ce) => q(Ce, ne));
                    switch (!0) {
                      case de.some((Ce) => Ce === ye.Both):
                        return ye.Both;
                      case de.some((Ce) => Ce === ye.EntitiesOnly):
                        return ye.EntitiesOnly;
                      default:
                        return ye.None;
                    }
                  }),
                  addMany: Je(A),
                  updateMany: Je(Pe),
                  upsertMany: Je(he),
                  map: Je(function ae(se, ne) {
                    return Pe(
                      ne.ids.reduce((Ce, je) => {
                        const ct = se(ne.entities[je]);
                        return (
                          ct !== ne.entities[je] &&
                            Ce.push({ id: je, changes: ct }),
                          Ce
                        );
                      }, []),
                      ne
                    );
                  }),
                  mapOne: Je(function be({ map: se, id: ne }, de) {
                    const Ce = de.entities[ne];
                    return Ce ? _e({ id: ne, changes: se(Ce) }, de) : ye.None;
                  }),
                };
              })(u, o)
            : Ti(u);
        return Object.assign(
          Object.assign(Object.assign({ selectId: u, sortComparer: o }, l), p),
          D
        );
      }
      var tu = y(6688),
        Dt = y(7830);
      function Ii(a, u) {
        return new lr.y((o) => {
          const l = a.length;
          if (0 === l) return void o.complete();
          const p = new Array(l);
          let D = 0,
            A = 0;
          for (let U = 0; U < l; U++) {
            const q = (0, _i.D)(a[U]);
            let le = !1;
            o.add(
              q.subscribe({
                next: (_e) => {
                  le || ((le = !0), A++), (p[U] = _e);
                },
                error: (_e) => o.error(_e),
                complete: () => {
                  D++,
                    (D === l || !le) &&
                      (A === l &&
                        o.next(
                          u
                            ? u.reduce(
                                (_e, pe, Pe) => ((_e[pe] = p[Pe]), _e),
                                {}
                              )
                            : p
                        ),
                      o.complete());
                },
              })
            );
          }
        });
      }
      var Br = y(13);
      const wn = (a) => null != a,
        Ai = (a) => wn(a) && a.name && a.message,
        Si = (a) =>
          a
            .toLowerCase()
            .replace(/success/g, "")
            .replace(/failure/g, "")
            .trim()
            .replace(/ /g, "-");
      var Pt = (() => {
        return (
          ((a = Pt || (Pt = {})).INIT = "INIT"),
          (a.LOADING = "LOADING"),
          (a.LOADED = "LOADED"),
          Pt
        );
        var a;
      })();
      const jr = "Http Tracking",
        dn = (0, te.PH)(`[${jr}] TrackHttpRequest`, (0, te.Ky)()),
        ao = (0, te.PH)(`[${jr}] ClearGloballyHandledErrors`),
        mr = "httpTracking",
        uo = Cn({ selectId: (a) => a.action }),
        ru = uo.getInitialState(),
        Oi = (0, te.Lq)(
          ru,
          (0, te.on)(dn, (a, { action: u, httpStatus: o, tags: l }) =>
            uo.upsertOne({ action: u, httpStatus: o, tags: l }, a)
          ),
          (0, te.on)(ao, (a) => {
            const u = a.ids
              .map((o) => a.entities[o])
              .filter((o) => {
                var l;
                return (
                  !!o &&
                  wn(
                    null === (l = null == o ? void 0 : o.httpStatus) ||
                      void 0 === l
                      ? void 0
                      : l.message
                  ) &&
                  o.tags.includes("global")
                );
              })
              .map((o) =>
                Object.assign(Object.assign({}, o), { httpStatus: Pt.INIT })
              );
            return uo.upsertMany(u, a);
          })
        ),
        co = (0, te.ZF)(mr),
        ys = uo.getSelectors(co),
        yr = (a) =>
          (0, te.P1)(ys.selectAll, (u) =>
            u
              .filter((o) => {
                var l;
                return (
                  wn(
                    null === (l = o.httpStatus) || void 0 === l
                      ? void 0
                      : l.message
                  ) && o.tags.includes(a)
                );
              })
              .map((o) => o.httpStatus)
          ),
        Vr = (a) =>
          (0, te.P1)(ys.selectAll, (u) =>
            u.some((o) => o.httpStatus === Pt.LOADING && o.tags.includes(a))
          );
      let Ur = (() => {
        class a {
          constructor(o) {
            this.store = o;
          }
          getTracking(o) {
            return this.store.select(
              ((a) => (0, te.P1)(ys.selectEntities, (u) => u[a]))(
                Si(o.loading.type)
              )
            );
          }
          isLoading(o) {
            return this.getTracking(o).pipe(
              (0, tt.U)(
                (l) => (null == l ? void 0 : l.httpStatus) === Pt.LOADING
              )
            );
          }
          isLoaded(o) {
            return this.getTracking(o).pipe(
              (0, tt.U)(
                (l) => (null == l ? void 0 : l.httpStatus) === Pt.LOADED
              )
            );
          }
          isInit(o) {
            return this.getTracking(o).pipe(
              (0, tt.U)(
                (l) => !wn(l) || (null == l ? void 0 : l.httpStatus) === Pt.INIT
              )
            );
          }
          getError(o) {
            return this.getTracking(o).pipe(
              (0, ln.h)((l) => Ai(null == l ? void 0 : l.httpStatus)),
              (0, tt.U)((l) => (null == l ? void 0 : l.httpStatus).message)
            );
          }
          isTagLoading(o) {
            return this.store.select(Vr(o)).pipe((0, Br.b)(100));
          }
          getTagErrors(o) {
            return this.store.select(yr(o)).pipe((0, Br.b)(100));
          }
          clearGloballyHandledErrors() {
            this.store.dispatch(ao());
          }
          clearTrackingMulti(o) {
            o.forEach((l) => {
              this.store.dispatch(
                dn({ action: Si(l.type), httpStatus: Pt.INIT, tags: l.tags })
              );
            });
          }
          getGlobalLoading() {
            return this.store.select(Vr("global")).pipe((0, Br.b)(300));
          }
          getGlobalErrors() {
            return this.store.select(yr("global")).pipe((0, Br.b)(300));
          }
          getResolved(o) {
            return this.getTracking(o).pipe(
              (0, ln.h)((l) => wn(l)),
              (0, tt.U)((l) => l.httpStatus),
              (0, ln.h)((l) => l === Pt.LOADED || Ai(l)),
              (0, Di.q)(1),
              (0, tt.U)((l) => {
                const p = { action: o, success: l === Pt.LOADED };
                return Ai(l) && (p.error = l), p;
              })
            );
          }
          getMultiResolved(o) {
            return (function nu(...a) {
              if (1 === a.length) {
                const u = a[0];
                if ((0, tu.k)(u)) return Ii(u, null);
                if (
                  (0, Dt.K)(u) &&
                  Object.getPrototypeOf(u) === Object.prototype
                ) {
                  const o = Object.keys(u);
                  return Ii(
                    o.map((l) => u[l]),
                    o
                  );
                }
              }
              if ("function" == typeof a[a.length - 1]) {
                const u = a.pop();
                return Ii(
                  (a = 1 === a.length && (0, tu.k)(a[0]) ? a[0] : a),
                  null
                ).pipe((0, tt.U)((o) => u(...o)));
              }
              return Ii(a, null);
            })(o.map((p) => this.getResolved(p)));
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(te.yh));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Zf = (a, u) =>
        a && "HttpErrorResponse" === a.name && a.error ? a.error : new Error(u);
      var xi = y(1086),
        su = y(7545);
      function _r() {}
      var Vc = y(7043);
      function ou(a, u, o) {
        return function (p) {
          return p.lift(new Uc(a, u, o));
        };
      }
      class Uc {
        constructor(u, o, l) {
          (this.nextOrObserver = u), (this.error = o), (this.complete = l);
        }
        call(u, o) {
          return o.subscribe(
            new lo(u, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class lo extends Un.L {
        constructor(u, o, l, p) {
          super(u),
            (this._tapNext = _r),
            (this._tapError = _r),
            (this._tapComplete = _r),
            (this._tapError = l || _r),
            (this._tapComplete = p || _r),
            (0, Vc.m)(o)
              ? ((this._context = this), (this._tapNext = o))
              : o &&
                ((this._context = o),
                (this._tapNext = o.next || _r),
                (this._tapError = o.error || _r),
                (this._tapComplete = o.complete || _r));
        }
        _next(u) {
          try {
            this._tapNext.call(this._context, u);
          } catch (o) {
            return void this.destination.error(o);
          }
          this.destination.next(u);
        }
        _error(u) {
          try {
            this._tapError.call(this._context, u);
          } catch (o) {
            return void this.destination.error(o);
          }
          this.destination.error(u);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (u) {
            return void this.destination.error(u);
          }
          return this.destination.complete();
        }
      }
      function fo(a, u, o, l, p) {
        if ("function" == typeof p)
          return $r(a, (...A) =>
            Object.assign(Object.assign({}, p(...A)), {
              type: a,
              httpStatus: l,
              tags: u ? ["global", ...o] : [...o],
            })
          );
        switch (p ? p._as : "empty") {
          case "empty":
            return $r(a, () => ({
              type: a,
              httpStatus: l,
              tags: u ? ["global", ...o] : [...o],
            }));
          case "props":
            return $r(a, (A) =>
              Object.assign(Object.assign({}, A), {
                type: a,
                httpStatus: l,
                tags: u ? ["global", ...o] : [...o],
              })
            );
          default:
            throw new Error("Unexpected config.");
        }
      }
      function Hr(a, u, o, l, p) {
        if ("function" == typeof p)
          return $r(a, (A, U, ...q) =>
            Object.assign(Object.assign({ httpStatus: l(A, U) }, p(...q)), {
              type: a,
              tags: u ? ["global", ...o] : [...o],
            })
          );
        switch (p ? p._as : "empty") {
          case "empty":
            return $r(a, (A, U) => ({
              httpStatus: l(A, U),
              type: a,
              tags: u ? ["global", ...o] : [...o],
            }));
          case "props":
            return $r(a, (A, U, q) =>
              Object.assign(Object.assign({ httpStatus: l(A, U) }, q), {
                type: a,
                tags: u ? ["global", ...o] : [...o],
              })
            );
          default:
            throw new Error("Unexpected config.");
        }
      }
      function $r(a, u) {
        return Object.defineProperty(u, "type", { value: a, writable: !1 });
      }
      const ho = (a, u, o = !0, l = [a]) => ({
          loading: fo(`[${a}] ${u}`, o, l, Pt.LOADING, (0, te.Ky)()),
          loaded: fo(`[${a}] ${u}Success`, o, l, Pt.LOADED, (0, te.Ky)()),
          failure: Hr(`[${a}] ${u}Failure`, o, l, Zf),
        }),
        Pi = (a, u, o, l, p = (D) => {}) =>
          ro(() =>
            a.pipe(
              (function $f(...a) {
                return (0, ln.h)((u) =>
                  a.some((o) =>
                    "string" == typeof o ? o === u.type : o.type === u.type
                  )
                );
              })(u.loading),
              (0, su.w)((D) =>
                o(D.request).pipe(
                  (0, tt.U)((A) => u.loaded({ payload: A })),
                  ou((A) => p({ request: D.request, payload: A.payload })),
                  (0, Ha.K)(
                    (A) => (console.error(A), (0, xi.of)(u.failure(A, l)))
                  )
                )
              )
            )
          );
      let po = (() => {
          class a {
            constructor(o, l) {
              (this.actions$ = o),
                (this.store = l),
                (this.trackHttpRequest$ = ro(
                  () =>
                    this.actions$.pipe(
                      (0, ln.h)(
                        (p) => void 0 !== p.httpStatus && p.type !== dn.type
                      ),
                      ou((p) => {
                        p.httpStatus === Pt.LOADED &&
                          !p.type.toLowerCase().includes("success") &&
                          !p.type.toLowerCase().includes("failure") &&
                          window &&
                          window.console &&
                          window.console.log(
                            "%cHTTP Request Loading Tracker could not find Success/Failure on action.type",
                            "background: yellow; font-size: large;"
                          ),
                          this.store.dispatch(
                            dn({
                              httpStatus: p.httpStatus,
                              action: Si(p.type),
                              tags: p.tags,
                            })
                          );
                      })
                    ),
                  { dispatch: !1 }
                ));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fs), f.LFG(te.yh));
            }),
            (a.ɵprov = f.Yz7({
              token: a,
              factory: a.ɵfac,
              providedIn: "root",
            })),
            a
          );
        })(),
        go = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [Ur],
              imports: [[ar, te.Aw.forFeature(mr, Oi), kr.forFeature([po])]],
            })),
            a
          );
        })();
      const Fi = "animals",
        Gr = ho(Fi, "fetchAnimals"),
        Ri = (0, te.PH)(`[${Fi}] clearAnimals`),
        Ni = "animals",
        mo = Cn({ selectId: (a) => a.API }),
        Hc = mo.getInitialState({}),
        $c = (0, te.Lq)(
          Hc,
          (0, te.on)(Gr.loaded, (a, { payload: u }) =>
            mo.setAll(u, Object.assign({}, a))
          ),
          (0, te.on)(Ri, (a) => mo.removeAll(a))
        );
      function Gc(a, u) {
        return $c(a, u);
      }
      var Wc = y(353),
        $n = y(2697);
      function Gn(a, u = Wc.P) {
        const l = (0, $n.J)(a) ? +a - u.now() : Math.abs(a);
        return (p) => p.lift(new zc(l, u));
      }
      class zc {
        constructor(u, o) {
          (this.delay = u), (this.scheduler = o);
        }
        call(u, o) {
          return o.subscribe(new iu(u, this.delay, this.scheduler));
        }
      }
      class iu extends Un.L {
        constructor(u, o, l) {
          super(u),
            (this.delay = o),
            (this.scheduler = l),
            (this.queue = []),
            (this.active = !1),
            (this.errored = !1);
        }
        static dispatch(u) {
          const o = u.source,
            l = o.queue,
            p = u.scheduler,
            D = u.destination;
          for (; l.length > 0 && l[0].time - p.now() <= 0; )
            l.shift().notification.observe(D);
          if (l.length > 0) {
            const A = Math.max(0, l[0].time - p.now());
            this.schedule(u, A);
          } else this.unsubscribe(), (o.active = !1);
        }
        _schedule(u) {
          (this.active = !0),
            this.destination.add(
              u.schedule(iu.dispatch, this.delay, {
                source: this,
                destination: this.destination,
                scheduler: u,
              })
            );
        }
        scheduleNotification(u) {
          if (!0 === this.errored) return;
          const o = this.scheduler,
            l = new qf(o.now() + this.delay, u);
          this.queue.push(l), !1 === this.active && this._schedule(o);
        }
        _next(u) {
          this.scheduleNotification(dr.P.createNext(u));
        }
        _error(u) {
          (this.errored = !0),
            (this.queue = []),
            this.destination.error(u),
            this.unsubscribe();
        }
        _complete() {
          this.scheduleNotification(dr.P.createComplete()), this.unsubscribe();
        }
      }
      class qf {
        constructor(u, o) {
          (this.time = u), (this.notification = o);
        }
      }
      var Jf = y(1406);
      class Kc {}
      class Yc {}
      class fn {
        constructor(u) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            u
              ? (this.lazyInit =
                  "string" == typeof u
                    ? () => {
                        (this.headers = new Map()),
                          u.split("\n").forEach((o) => {
                            const l = o.indexOf(":");
                            if (l > 0) {
                              const p = o.slice(0, l),
                                D = p.toLowerCase(),
                                A = o.slice(l + 1).trim();
                              this.maybeSetNormalizedName(p, D),
                                this.headers.has(D)
                                  ? this.headers.get(D).push(A)
                                  : this.headers.set(D, [A]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(u).forEach((o) => {
                            let l = u[o];
                            const p = o.toLowerCase();
                            "string" == typeof l && (l = [l]),
                              l.length > 0 &&
                                (this.headers.set(p, l),
                                this.maybeSetNormalizedName(o, p));
                          });
                      })
              : (this.headers = new Map());
        }
        has(u) {
          return this.init(), this.headers.has(u.toLowerCase());
        }
        get(u) {
          this.init();
          const o = this.headers.get(u.toLowerCase());
          return o && o.length > 0 ? o[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(u) {
          return this.init(), this.headers.get(u.toLowerCase()) || null;
        }
        append(u, o) {
          return this.clone({ name: u, value: o, op: "a" });
        }
        set(u, o) {
          return this.clone({ name: u, value: o, op: "s" });
        }
        delete(u, o) {
          return this.clone({ name: u, value: o, op: "d" });
        }
        maybeSetNormalizedName(u, o) {
          this.normalizedNames.has(o) || this.normalizedNames.set(o, u);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof fn
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((u) => this.applyUpdate(u)),
              (this.lazyUpdate = null)));
        }
        copyFrom(u) {
          u.init(),
            Array.from(u.headers.keys()).forEach((o) => {
              this.headers.set(o, u.headers.get(o)),
                this.normalizedNames.set(o, u.normalizedNames.get(o));
            });
        }
        clone(u) {
          const o = new fn();
          return (
            (o.lazyInit =
              this.lazyInit && this.lazyInit instanceof fn
                ? this.lazyInit
                : this),
            (o.lazyUpdate = (this.lazyUpdate || []).concat([u])),
            o
          );
        }
        applyUpdate(u) {
          const o = u.name.toLowerCase();
          switch (u.op) {
            case "a":
            case "s":
              let l = u.value;
              if (("string" == typeof l && (l = [l]), 0 === l.length)) return;
              this.maybeSetNormalizedName(u.name, o);
              const p = ("a" === u.op ? this.headers.get(o) : void 0) || [];
              p.push(...l), this.headers.set(o, p);
              break;
            case "d":
              const D = u.value;
              if (D) {
                let A = this.headers.get(o);
                if (!A) return;
                (A = A.filter((U) => -1 === D.indexOf(U))),
                  0 === A.length
                    ? (this.headers.delete(o), this.normalizedNames.delete(o))
                    : this.headers.set(o, A);
              } else this.headers.delete(o), this.normalizedNames.delete(o);
          }
        }
        forEach(u) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((o) =>
              u(this.normalizedNames.get(o), this.headers.get(o))
            );
        }
      }
      class Zc {
        encodeKey(u) {
          return Xc(u);
        }
        encodeValue(u) {
          return Xc(u);
        }
        decodeKey(u) {
          return decodeURIComponent(u);
        }
        decodeValue(u) {
          return decodeURIComponent(u);
        }
      }
      const Jc = /%(\d[a-f0-9])/gi,
        Qc = {
          40: "@",
          "3A": ":",
          24: "$",
          "2C": ",",
          "3B": ";",
          "2B": "+",
          "3D": "=",
          "3F": "?",
          "2F": "/",
        };
      function Xc(a) {
        return encodeURIComponent(a).replace(Jc, (u, o) => {
          var l;
          return null !== (l = Qc[o]) && void 0 !== l ? l : u;
        });
      }
      function au(a) {
        return `${a}`;
      }
      class Qt {
        constructor(u = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = u.encoder || new Zc()),
            u.fromString)
          ) {
            if (u.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function qc(a, u) {
              const o = new Map();
              return (
                a.length > 0 &&
                  a
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((p) => {
                      const D = p.indexOf("="),
                        [A, U] =
                          -1 == D
                            ? [u.decodeKey(p), ""]
                            : [
                                u.decodeKey(p.slice(0, D)),
                                u.decodeValue(p.slice(D + 1)),
                              ],
                        q = o.get(A) || [];
                      q.push(U), o.set(A, q);
                    }),
                o
              );
            })(u.fromString, this.encoder);
          } else
            u.fromObject
              ? ((this.map = new Map()),
                Object.keys(u.fromObject).forEach((o) => {
                  const l = u.fromObject[o];
                  this.map.set(o, Array.isArray(l) ? l : [l]);
                }))
              : (this.map = null);
        }
        has(u) {
          return this.init(), this.map.has(u);
        }
        get(u) {
          this.init();
          const o = this.map.get(u);
          return o ? o[0] : null;
        }
        getAll(u) {
          return this.init(), this.map.get(u) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(u, o) {
          return this.clone({ param: u, value: o, op: "a" });
        }
        appendAll(u) {
          const o = [];
          return (
            Object.keys(u).forEach((l) => {
              const p = u[l];
              Array.isArray(p)
                ? p.forEach((D) => {
                    o.push({ param: l, value: D, op: "a" });
                  })
                : o.push({ param: l, value: p, op: "a" });
            }),
            this.clone(o)
          );
        }
        set(u, o) {
          return this.clone({ param: u, value: o, op: "s" });
        }
        delete(u, o) {
          return this.clone({ param: u, value: o, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((u) => {
                const o = this.encoder.encodeKey(u);
                return this.map
                  .get(u)
                  .map((l) => o + "=" + this.encoder.encodeValue(l))
                  .join("&");
              })
              .filter((u) => "" !== u)
              .join("&")
          );
        }
        clone(u) {
          const o = new Qt({ encoder: this.encoder });
          return (
            (o.cloneFrom = this.cloneFrom || this),
            (o.updates = (this.updates || []).concat(u)),
            o
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((u) => this.map.set(u, this.cloneFrom.map.get(u))),
              this.updates.forEach((u) => {
                switch (u.op) {
                  case "a":
                  case "s":
                    const o =
                      ("a" === u.op ? this.map.get(u.param) : void 0) || [];
                    o.push(au(u.value)), this.map.set(u.param, o);
                    break;
                  case "d":
                    if (void 0 === u.value) {
                      this.map.delete(u.param);
                      break;
                    }
                    {
                      let l = this.map.get(u.param) || [];
                      const p = l.indexOf(au(u.value));
                      -1 !== p && l.splice(p, 1),
                        l.length > 0
                          ? this.map.set(u.param, l)
                          : this.map.delete(u.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      class hn {
        constructor() {
          this.map = new Map();
        }
        set(u, o) {
          return this.map.set(u, o), this;
        }
        get(u) {
          return (
            this.map.has(u) || this.map.set(u, u.defaultValue()),
            this.map.get(u)
          );
        }
        delete(u) {
          return this.map.delete(u), this;
        }
        has(u) {
          return this.map.has(u);
        }
        keys() {
          return this.map.keys();
        }
      }
      function Li(a) {
        return "undefined" != typeof ArrayBuffer && a instanceof ArrayBuffer;
      }
      function ki(a) {
        return "undefined" != typeof Blob && a instanceof Blob;
      }
      function Bi(a) {
        return "undefined" != typeof FormData && a instanceof FormData;
      }
      class yo {
        constructor(u, o, l, p) {
          let D;
          if (
            ((this.url = o),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = u.toUpperCase()),
            (function _s(a) {
              switch (a) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || p
              ? ((this.body = void 0 !== l ? l : null), (D = p))
              : (D = l),
            D &&
              ((this.reportProgress = !!D.reportProgress),
              (this.withCredentials = !!D.withCredentials),
              D.responseType && (this.responseType = D.responseType),
              D.headers && (this.headers = D.headers),
              D.context && (this.context = D.context),
              D.params && (this.params = D.params)),
            this.headers || (this.headers = new fn()),
            this.context || (this.context = new hn()),
            this.params)
          ) {
            const A = this.params.toString();
            if (0 === A.length) this.urlWithParams = o;
            else {
              const U = o.indexOf("?");
              this.urlWithParams =
                o + (-1 === U ? "?" : U < o.length - 1 ? "&" : "") + A;
            }
          } else (this.params = new Qt()), (this.urlWithParams = o);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Li(this.body) ||
              ki(this.body) ||
              Bi(this.body) ||
              (function Qf(a) {
                return (
                  "undefined" != typeof URLSearchParams &&
                  a instanceof URLSearchParams
                );
              })(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Qt
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Bi(this.body)
            ? null
            : ki(this.body)
            ? this.body.type || null
            : Li(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Qt
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(u = {}) {
          var o;
          const l = u.method || this.method,
            p = u.url || this.url,
            D = u.responseType || this.responseType,
            A = void 0 !== u.body ? u.body : this.body,
            U =
              void 0 !== u.withCredentials
                ? u.withCredentials
                : this.withCredentials,
            q =
              void 0 !== u.reportProgress
                ? u.reportProgress
                : this.reportProgress;
          let le = u.headers || this.headers,
            _e = u.params || this.params;
          const pe =
            null !== (o = u.context) && void 0 !== o ? o : this.context;
          return (
            void 0 !== u.setHeaders &&
              (le = Object.keys(u.setHeaders).reduce(
                (Pe, ae) => Pe.set(ae, u.setHeaders[ae]),
                le
              )),
            u.setParams &&
              (_e = Object.keys(u.setParams).reduce(
                (Pe, ae) => Pe.set(ae, u.setParams[ae]),
                _e
              )),
            new yo(l, p, A, {
              params: _e,
              headers: le,
              context: pe,
              reportProgress: q,
              responseType: D,
              withCredentials: U,
            })
          );
        }
      }
      var ft = (() => (
        ((ft = ft || {})[(ft.Sent = 0)] = "Sent"),
        (ft[(ft.UploadProgress = 1)] = "UploadProgress"),
        (ft[(ft.ResponseHeader = 2)] = "ResponseHeader"),
        (ft[(ft.DownloadProgress = 3)] = "DownloadProgress"),
        (ft[(ft.Response = 4)] = "Response"),
        (ft[(ft.User = 5)] = "User"),
        ft
      ))();
      class Ds {
        constructor(u, o = 200, l = "OK") {
          (this.headers = u.headers || new fn()),
            (this.status = void 0 !== u.status ? u.status : o),
            (this.statusText = u.statusText || l),
            (this.url = u.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class Es extends Ds {
        constructor(u = {}) {
          super(u), (this.type = ft.ResponseHeader);
        }
        clone(u = {}) {
          return new Es({
            headers: u.headers || this.headers,
            status: void 0 !== u.status ? u.status : this.status,
            statusText: u.statusText || this.statusText,
            url: u.url || this.url || void 0,
          });
        }
      }
      class Wr extends Ds {
        constructor(u = {}) {
          super(u),
            (this.type = ft.Response),
            (this.body = void 0 !== u.body ? u.body : null);
        }
        clone(u = {}) {
          return new Wr({
            body: void 0 !== u.body ? u.body : this.body,
            headers: u.headers || this.headers,
            status: void 0 !== u.status ? u.status : this.status,
            statusText: u.statusText || this.statusText,
            url: u.url || this.url || void 0,
          });
        }
      }
      class tl extends Ds {
        constructor(u) {
          super(u, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${u.url || "(unknown url)"}`
                : `Http failure response for ${u.url || "(unknown url)"}: ${
                    u.status
                  } ${u.statusText}`),
            (this.error = u.error || null);
        }
      }
      function uu(a, u) {
        return {
          body: u,
          headers: a.headers,
          context: a.context,
          observe: a.observe,
          params: a.params,
          reportProgress: a.reportProgress,
          responseType: a.responseType,
          withCredentials: a.withCredentials,
        };
      }
      let zr = (() => {
        class a {
          constructor(o) {
            this.handler = o;
          }
          request(o, l, p = {}) {
            let D;
            if (o instanceof yo) D = o;
            else {
              let q, le;
              (q = p.headers instanceof fn ? p.headers : new fn(p.headers)),
                p.params &&
                  (le =
                    p.params instanceof Qt
                      ? p.params
                      : new Qt({ fromObject: p.params })),
                (D = new yo(o, l, void 0 !== p.body ? p.body : null, {
                  headers: q,
                  context: p.context,
                  params: le,
                  reportProgress: p.reportProgress,
                  responseType: p.responseType || "json",
                  withCredentials: p.withCredentials,
                }));
            }
            const A = (0, xi.of)(D).pipe(
              (0, Jf.b)((q) => this.handler.handle(q))
            );
            if (o instanceof yo || "events" === p.observe) return A;
            const U = A.pipe((0, ln.h)((q) => q instanceof Wr));
            switch (p.observe || "body") {
              case "body":
                switch (D.responseType) {
                  case "arraybuffer":
                    return U.pipe(
                      (0, tt.U)((q) => {
                        if (null !== q.body && !(q.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return q.body;
                      })
                    );
                  case "blob":
                    return U.pipe(
                      (0, tt.U)((q) => {
                        if (null !== q.body && !(q.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return q.body;
                      })
                    );
                  case "text":
                    return U.pipe(
                      (0, tt.U)((q) => {
                        if (null !== q.body && "string" != typeof q.body)
                          throw new Error("Response is not a string.");
                        return q.body;
                      })
                    );
                  default:
                    return U.pipe((0, tt.U)((q) => q.body));
                }
              case "response":
                return U;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${p.observe}}`
                );
            }
          }
          delete(o, l = {}) {
            return this.request("DELETE", o, l);
          }
          get(o, l = {}) {
            return this.request("GET", o, l);
          }
          head(o, l = {}) {
            return this.request("HEAD", o, l);
          }
          jsonp(o, l) {
            return this.request("JSONP", o, {
              params: new Qt().append(l, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(o, l = {}) {
            return this.request("OPTIONS", o, l);
          }
          patch(o, l, p = {}) {
            return this.request("PATCH", o, uu(p, l));
          }
          post(o, l, p = {}) {
            return this.request("POST", o, uu(p, l));
          }
          put(o, l, p = {}) {
            return this.request("PUT", o, uu(p, l));
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(Kc));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      class cu {
        constructor(u, o) {
          (this.next = u), (this.interceptor = o);
        }
        handle(u) {
          return this.interceptor.intercept(u, this.next);
        }
      }
      const lu = new f.OlP("HTTP_INTERCEPTORS");
      let nl = (() => {
        class a {
          intercept(o, l) {
            return l.handle(o);
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)();
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const sl = /^\)\]\}',?\n/;
      let Vi = (() => {
        class a {
          constructor(o) {
            this.xhrFactory = o;
          }
          handle(o) {
            if ("JSONP" === o.method)
              throw new Error(
                "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
              );
            return new lr.y((l) => {
              const p = this.xhrFactory.build();
              if (
                (p.open(o.method, o.urlWithParams),
                o.withCredentials && (p.withCredentials = !0),
                o.headers.forEach((ae, be) =>
                  p.setRequestHeader(ae, be.join(","))
                ),
                o.headers.has("Accept") ||
                  p.setRequestHeader(
                    "Accept",
                    "application/json, text/plain, */*"
                  ),
                !o.headers.has("Content-Type"))
              ) {
                const ae = o.detectContentTypeHeader();
                null !== ae && p.setRequestHeader("Content-Type", ae);
              }
              if (o.responseType) {
                const ae = o.responseType.toLowerCase();
                p.responseType = "json" !== ae ? ae : "text";
              }
              const D = o.serializeBody();
              let A = null;
              const U = () => {
                  if (null !== A) return A;
                  const ae = 1223 === p.status ? 204 : p.status,
                    be = p.statusText || "OK",
                    pt = new fn(p.getAllResponseHeaders()),
                    he =
                      (function ol(a) {
                        return "responseURL" in a && a.responseURL
                          ? a.responseURL
                          : /^X-Request-URL:/m.test(a.getAllResponseHeaders())
                          ? a.getResponseHeader("X-Request-URL")
                          : null;
                      })(p) || o.url;
                  return (
                    (A = new Es({
                      headers: pt,
                      status: ae,
                      statusText: be,
                      url: he,
                    })),
                    A
                  );
                },
                q = () => {
                  let {
                      headers: ae,
                      status: be,
                      statusText: pt,
                      url: he,
                    } = U(),
                    re = null;
                  204 !== be &&
                    (re = void 0 === p.response ? p.responseText : p.response),
                    0 === be && (be = re ? 200 : 0);
                  let se = be >= 200 && be < 300;
                  if ("json" === o.responseType && "string" == typeof re) {
                    const ne = re;
                    re = re.replace(sl, "");
                    try {
                      re = "" !== re ? JSON.parse(re) : null;
                    } catch (de) {
                      (re = ne),
                        se && ((se = !1), (re = { error: de, text: re }));
                    }
                  }
                  se
                    ? (l.next(
                        new Wr({
                          body: re,
                          headers: ae,
                          status: be,
                          statusText: pt,
                          url: he || void 0,
                        })
                      ),
                      l.complete())
                    : l.error(
                        new tl({
                          error: re,
                          headers: ae,
                          status: be,
                          statusText: pt,
                          url: he || void 0,
                        })
                      );
                },
                le = (ae) => {
                  const { url: be } = U(),
                    pt = new tl({
                      error: ae,
                      status: p.status || 0,
                      statusText: p.statusText || "Unknown Error",
                      url: be || void 0,
                    });
                  l.error(pt);
                };
              let _e = !1;
              const pe = (ae) => {
                  _e || (l.next(U()), (_e = !0));
                  let be = { type: ft.DownloadProgress, loaded: ae.loaded };
                  ae.lengthComputable && (be.total = ae.total),
                    "text" === o.responseType &&
                      !!p.responseText &&
                      (be.partialText = p.responseText),
                    l.next(be);
                },
                Pe = (ae) => {
                  let be = { type: ft.UploadProgress, loaded: ae.loaded };
                  ae.lengthComputable && (be.total = ae.total), l.next(be);
                };
              return (
                p.addEventListener("load", q),
                p.addEventListener("error", le),
                p.addEventListener("timeout", le),
                p.addEventListener("abort", le),
                o.reportProgress &&
                  (p.addEventListener("progress", pe),
                  null !== D &&
                    p.upload &&
                    p.upload.addEventListener("progress", Pe)),
                p.send(D),
                l.next({ type: ft.Sent }),
                () => {
                  p.removeEventListener("error", le),
                    p.removeEventListener("abort", le),
                    p.removeEventListener("load", q),
                    p.removeEventListener("timeout", le),
                    o.reportProgress &&
                      (p.removeEventListener("progress", pe),
                      null !== D &&
                        p.upload &&
                        p.upload.removeEventListener("progress", Pe)),
                    p.readyState !== p.DONE && p.abort();
                }
              );
            });
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(it));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const _o = new f.OlP("XSRF_COOKIE_NAME"),
        Ui = new f.OlP("XSRF_HEADER_NAME");
      class fu {}
      let il = (() => {
          class a {
            constructor(o, l, p) {
              (this.doc = o),
                (this.platform = l),
                (this.cookieName = p),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const o = this.doc.cookie || "";
              return (
                o !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = sr(o, this.cookieName)),
                  (this.lastCookieString = o)),
                this.lastToken
              );
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(O), f.LFG(f.Lbi), f.LFG(_o));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Hi = (() => {
          class a {
            constructor(o, l) {
              (this.tokenService = o), (this.headerName = l);
            }
            intercept(o, l) {
              const p = o.url.toLowerCase();
              if (
                "GET" === o.method ||
                "HEAD" === o.method ||
                p.startsWith("http://") ||
                p.startsWith("https://")
              )
                return l.handle(o);
              const D = this.tokenService.getToken();
              return (
                null !== D &&
                  !o.headers.has(this.headerName) &&
                  (o = o.clone({ headers: o.headers.set(this.headerName, D) })),
                l.handle(o)
              );
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fu), f.LFG(Ui));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        al = (() => {
          class a {
            constructor(o, l) {
              (this.backend = o), (this.injector = l), (this.chain = null);
            }
            handle(o) {
              if (null === this.chain) {
                const l = this.injector.get(lu, []);
                this.chain = l.reduceRight(
                  (p, D) => new cu(p, D),
                  this.backend
                );
              }
              return this.chain.handle(o);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(Yc), f.LFG(f.zs3));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        vs = (() => {
          class a {
            static disable() {
              return {
                ngModule: a,
                providers: [{ provide: Hi, useClass: nl }],
              };
            }
            static withOptions(o = {}) {
              return {
                ngModule: a,
                providers: [
                  o.cookieName ? { provide: _o, useValue: o.cookieName } : [],
                  o.headerName ? { provide: Ui, useValue: o.headerName } : [],
                ],
              };
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [
                Hi,
                { provide: lu, useExisting: Hi, multi: !0 },
                { provide: fu, useClass: il },
                { provide: _o, useValue: "XSRF-TOKEN" },
                { provide: Ui, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            a
          );
        })(),
        Mt = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [
                zr,
                { provide: Kc, useClass: al },
                Vi,
                { provide: Yc, useExisting: Vi },
              ],
              imports: [
                [
                  vs.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            a
          );
        })(),
        $i = (() => {
          class a {
            constructor(o) {
              (this.http = o),
                (this.fetchAnimals = () =>
                  this.http
                    .get(
                      "https://api.publicapis.org/entries?category=animals&https=true"
                    )
                    .pipe(
                      (0, tt.U)((l) => l.entries),
                      Gn(200)
                    )),
                console.log(o),
                console.log(this);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(zr));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Tt = (() => {
          class a {
            constructor(o, l) {
              (this.actions$ = o),
                (this.api = l),
                (this.fetchAnimals$ = Pi(
                  this.actions$,
                  Gr,
                  this.api.fetchAnimals,
                  "Coulld not load animals",
                  (p) => {
                    console.log("Animals Successfully loaded"),
                      console.log("Request: ", p.request),
                      console.log("Payload: ", p.payload);
                  }
                ));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fs), f.LFG($i));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })();
      const Dr = (0, te.ZF)(Ni),
        { selectAll: Gi, selectEntities: cl } = mo.getSelectors(),
        ll = (0, te.P1)(Dr, (a) => Gi(a)),
        pu = (0, te.P1)(Dr, (a) => cl(a)),
        dl = (0, te.P1)(Dr, (a) => a.selectedId),
        gu = (0, te.P1)(pu, dl, (a, u) => (u ? a[u] : void 0));
      let mu = (() => {
          class a {
            constructor(o, l) {
              (this.store = o),
                (this.httpTracker = l),
                (this.loaded$ = this.httpTracker.isLoaded(Gr)),
                (this.allAnimals$ = this.store.pipe((0, te.Ys)(ll))),
                (this.selectedAnimals$ = this.store.pipe((0, te.Ys)(gu)));
            }
            fetchAnimals() {
              return this.store.dispatch(Gr.loading()), Gr;
            }
            clearAnimals() {
              this.store.dispatch(Ri());
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(te.yh), f.LFG(Ur));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        yu = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [mu, $i],
              imports: [
                [ar, di, Mt, go, te.Aw.forFeature(Ni, Gc), kr.forFeature([Tt])],
              ],
            })),
            a
          );
        })();
      const Wn = ho("books", "fetchBooks"),
        Do = (0, te.PH)("[books] clearBooks"),
        Eo = Cn({ selectId: (a) => a.API }),
        Wi = Eo.getInitialState({}),
        fl = (0, te.Lq)(
          Wi,
          (0, te.on)(Wn.loaded, (a, { payload: u }) =>
            Eo.setAll(u, Object.assign({}, a))
          ),
          (0, te.on)(Do, (a) => Eo.removeAll(a))
        );
      function hl(a, u) {
        return fl(a, u);
      }
      const Er = (0, te.ZF)("books"),
        { selectAll: pl, selectEntities: gl } = Eo.getSelectors(),
        ml = (0, te.P1)(Er, (a) => pl(a)),
        yl = (0, te.P1)(Er, (a) => gl(a)),
        _l = (0, te.P1)(Er, (a) => a.selectedId),
        Eu = (0, te.P1)(yl, _l, (a, u) => (u ? a[u] : void 0));
      let vu = (() => {
        class a {
          constructor(o, l) {
            (this.store = o),
              (this.httpTracker = l),
              (this.loaded$ = this.httpTracker.isLoaded(Wn)),
              (this.allBooks$ = this.store.pipe((0, te.Ys)(ml))),
              (this.selectedBooks$ = this.store.pipe((0, te.Ys)(Eu)));
          }
          fetchBooks() {
            return this.store.dispatch(Wn.loading()), Wn;
          }
          clearBooks() {
            this.store.dispatch(Do());
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(te.yh), f.LFG(Ur));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const bu = "business",
        Kr = ho(bu, "fetchBusiness"),
        Cu = (0, te.PH)(`[${bu}] clearBusiness`),
        zi = "business",
        vo = Cn({ selectId: (a) => a.API }),
        Dl = vo.getInitialState(),
        El = (0, te.Lq)(
          Dl,
          (0, te.on)(Kr.loaded, (a, { payload: u }) =>
            vo.setAll(u, Object.assign({}, a))
          ),
          (0, te.on)(Cu, (a) => vo.removeAll(a))
        );
      function Yr(a, u) {
        return El(a, u);
      }
      const Kt = (0, te.ZF)(zi),
        { selectAll: nh, selectEntities: rh } = vo.getSelectors(),
        wu = (0, te.P1)(Kt, (a) => nh(a)),
        sh = (0, te.P1)(Kt, (a) => rh(a)),
        pn = (0, te.P1)(Kt, (a) => a.selectedId),
        Ki = (0, te.P1)(sh, pn, (a, u) => (u ? a[u] : void 0));
      let bo = (() => {
        class a {
          constructor(o, l) {
            (this.store = o),
              (this.httpTracker = l),
              (this.loaded$ = this.httpTracker.isLoaded(Kr)),
              (this.allBusiness$ = this.store.pipe((0, te.Ys)(wu))),
              (this.selectedBusiness$ = this.store.pipe((0, te.Ys)(Ki)));
          }
          fetchBusiness() {
            return this.store.dispatch(Kr.loading()), Kr;
          }
          clearBusiness() {
            this.store.dispatch(Cu());
          }
        }
        return (
          (a.ɵfac = function (o) {
            return new (o || a)(f.LFG(te.yh), f.LFG(Ur));
          }),
          (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
          a
        );
      })();
      const Mu = "calendar",
        vr = ho(Mu, "fetchCalendars"),
        Zr = (0, te.PH)(`[${Mu}] clearCalendars`),
        Yi = "calendar",
        bs = Cn({ selectId: (a) => a.API }),
        Zi = bs.getInitialState(),
        qi = (0, te.Lq)(
          Zi,
          (0, te.on)(vr.loaded, (a, { payload: u }) =>
            bs.setAll(u, Object.assign({}, a))
          ),
          (0, te.on)(Zr, (a) => bs.removeAll(a))
        );
      function Tu(a, u) {
        return qi(a, u);
      }
      const Iu = (0, te.ZF)(Yi),
        { selectAll: qr, selectEntities: Ji } = bs.getSelectors(),
        Au = (0, te.P1)(Iu, (a) => qr(a)),
        vl = (0, te.P1)(Iu, (a) => Ji(a)),
        Qi = (0, te.P1)(Iu, (a) => a.selectedId),
        bl = (0, te.P1)(vl, Qi, (a, u) => (u ? a[u] : void 0));
      let Su = (() => {
          class a {
            constructor(o, l) {
              (this.store = o),
                (this.httpTracker = l),
                (this.loaded$ = this.httpTracker.isLoaded(vr)),
                (this.allCalendar$ = this.store.pipe((0, te.Ys)(Au))),
                (this.selectedCalendar$ = this.store.pipe((0, te.Ys)(bl)));
            }
            fetchCalendars() {
              return this.store.dispatch(vr.loading()), vr;
            }
            clearCalendars() {
              this.store.dispatch(Zr());
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(te.yh), f.LFG(Ur));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Cl = (() => {
          class a {
            constructor(o, l, p, D, A) {
              (this.animalsFacade = o),
                (this.booksFacade = l),
                (this.businessFacade = p),
                (this.calendarFacade = D),
                (this.httpTrackingFacade = A),
                (this.title = "http-tracking-demo"),
                (this.global = {
                  loading$: this.httpTrackingFacade.getGlobalLoading(),
                  errors$: this.httpTrackingFacade.getGlobalErrors(),
                }),
                (this.animals = { entities$: this.animalsFacade.allAnimals$ }),
                (this.books = {
                  isLoaded$: this.httpTrackingFacade.isLoaded(Wn),
                  isLoading$: this.httpTrackingFacade.isLoading(Wn),
                  trackingData$: this.httpTrackingFacade.getTracking(Wn),
                  entities$: this.booksFacade.allBooks$,
                }),
                (this.chained = {
                  businessStatus$: this.httpTrackingFacade
                    .getTracking(Kr)
                    .pipe(
                      (0, tt.U)((U) => (null == U ? void 0 : U.httpStatus))
                    ),
                  calendarStatus$: this.httpTrackingFacade
                    .getTracking(vr)
                    .pipe(
                      (0, tt.U)((U) => (null == U ? void 0 : U.httpStatus))
                    ),
                });
            }
            fetchAnimals() {
              this.animalsFacade.fetchAnimals();
            }
            clearAnimals() {
              this.animalsFacade.clearAnimals();
            }
            fetchBooks() {
              this.booksFacade.fetchBooks();
            }
            clearBooks() {
              this.booksFacade.clearBooks();
            }
            fetchChain() {
              this.httpTrackingFacade
                .getResolved(this.businessFacade.fetchBusiness())
                .pipe(
                  (0, ln.h)((o) => o.success),
                  (0, su.w)((o) =>
                    this.httpTrackingFacade.getResolved(
                      this.calendarFacade.fetchCalendars()
                    )
                  ),
                  (0, ln.h)((o) => o.success)
                )
                .subscribe((o) => {
                  console.log("Both were a success");
                });
            }
            clearChain() {
              this.businessFacade.clearBusiness(),
                this.calendarFacade.clearCalendars();
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(
                f.Y36(mu),
                f.Y36(vu),
                f.Y36(bo),
                f.Y36(Su),
                f.Y36(Ur)
              );
            }),
            (a.ɵcmp = f.Xpm({
              type: a,
              selectors: [["acandylevey-root"]],
              decls: 70,
              vars: 35,
              consts: [
                [1, "flex"],
                [
                  "href",
                  "https://github.com/acandylevey/ngrx-http-tracking",
                  "target",
                  "_blank",
                ],
                [
                  "src",
                  "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
                  "width",
                  "24px",
                  "height",
                  "24px",
                ],
                [1, "flex-row"],
                [1, "left-label"],
                [
                  1,
                  "mdl-button",
                  "mdl-js-button",
                  "mdl-button--raised",
                  "mdl-js-ripple-effect",
                  "mdl-button--primary",
                  3,
                  "click",
                ],
              ],
              template: function (o, l) {
                1 & o &&
                  (f.TgZ(0, "header", 0),
                  f.TgZ(1, "h1"),
                  f._uU(2, "NgRx Http Tracking Demo"),
                  f.qZA(),
                  f.TgZ(3, "a", 1),
                  f._UZ(4, "img", 2),
                  f._uU(5, " Github"),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(6, "main"),
                  f.TgZ(7, "div"),
                  f.TgZ(8, "h2"),
                  f._uU(9, "Global Statuses"),
                  f.qZA(),
                  f.TgZ(10, "p"),
                  f._uU(
                    11,
                    " The global status of actions with the same tag can be tracked and handled in a single location. Useful for showing a global loading spinner or automatically handling errors (such as showing a modal). "
                  ),
                  f.qZA(),
                  f.TgZ(12, "pre"),
                  f._uU(13),
                  f.ALo(14, "async"),
                  f.ALo(15, "json"),
                  f.ALo(16, "async"),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(17, "div", 3),
                  f.TgZ(18, "div", 4),
                  f.TgZ(19, "h2"),
                  f._uU(20, "Basic"),
                  f.qZA(),
                  f.TgZ(21, "p"),
                  f._uU(22, "Sending a HTTP Request, and showing the result"),
                  f.qZA(),
                  f.TgZ(23, "button", 5),
                  f.NdJ("click", function () {
                    return l.fetchAnimals();
                  }),
                  f._uU(24, " Fetch Animals "),
                  f.qZA(),
                  f.TgZ(25, "button", 5),
                  f.NdJ("click", function () {
                    return l.clearAnimals();
                  }),
                  f._uU(26, " Clear Entities "),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(27, "div"),
                  f.TgZ(28, "pre"),
                  f._uU(29),
                  f.ALo(30, "json"),
                  f.ALo(31, "async"),
                  f.qZA(),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(32, "div", 3),
                  f.TgZ(33, "div", 4),
                  f.TgZ(34, "h2"),
                  f._uU(35, "Accessing Tracker"),
                  f.qZA(),
                  f.TgZ(36, "p"),
                  f._uU(
                    37,
                    " The component is able to access all of the data about the action being tracked "
                  ),
                  f.qZA(),
                  f.TgZ(38, "button", 5),
                  f.NdJ("click", function () {
                    return l.fetchBooks();
                  }),
                  f._uU(39, " Fetch Books "),
                  f.qZA(),
                  f.TgZ(40, "button", 5),
                  f.NdJ("click", function () {
                    return l.clearBooks();
                  }),
                  f._uU(41, " Clear Entities "),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(42, "div"),
                  f.TgZ(43, "pre"),
                  f._uU(44),
                  f.ALo(45, "async"),
                  f.ALo(46, "async"),
                  f.ALo(47, "json"),
                  f.ALo(48, "async"),
                  f.qZA(),
                  f.TgZ(49, "pre"),
                  f._uU(50),
                  f.ALo(51, "json"),
                  f.ALo(52, "async"),
                  f.qZA(),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(53, "div", 3),
                  f.TgZ(54, "div", 4),
                  f.TgZ(55, "h2"),
                  f._uU(56, "Chaining Requests"),
                  f.qZA(),
                  f.TgZ(57, "p"),
                  f._uU(
                    58,
                    " Waiting on the successful outcome of one request before doing another request "
                  ),
                  f.qZA(),
                  f.TgZ(59, "button", 5),
                  f.NdJ("click", function () {
                    return l.fetchChain();
                  }),
                  f._uU(60, " Fetch Chain "),
                  f.qZA(),
                  f.TgZ(61, "button", 5),
                  f.NdJ("click", function () {
                    return l.clearChain();
                  }),
                  f._uU(62, " Clear Entities "),
                  f.qZA(),
                  f.qZA(),
                  f.TgZ(63, "div"),
                  f.TgZ(64, "p"),
                  f._uU(
                    65,
                    " By using the getResolved or the getMultiResolved HTTP request depdency chains can easily be managed. "
                  ),
                  f.qZA(),
                  f.TgZ(66, "pre"),
                  f._uU(67),
                  f.ALo(68, "async"),
                  f.ALo(69, "async"),
                  f.qZA(),
                  f.qZA(),
                  f.qZA(),
                  f.qZA()),
                  2 & o &&
                    (f.xp6(13),
                    f.AsE(
                      "isLoading: ",
                      f.lcZ(14, 9, l.global.loading$),
                      "\nglobalErrors: ",
                      f.lcZ(15, 11, f.lcZ(16, 13, l.global.errors$)),
                      ""
                    ),
                    f.xp6(16),
                    f.Oqu(f.lcZ(30, 15, f.lcZ(31, 17, l.animals.entities$))),
                    f.xp6(15),
                    f.lnq(
                      "isLoaded: ",
                      f.lcZ(45, 19, l.books.isLoaded$),
                      "\nisLoading: ",
                      f.lcZ(46, 21, l.books.isLoading$),
                      "\ntrackingData: ",
                      f.lcZ(47, 23, f.lcZ(48, 25, l.books.trackingData$)),
                      ""
                    ),
                    f.xp6(6),
                    f.Oqu(f.lcZ(51, 27, f.lcZ(52, 29, l.books.entities$))),
                    f.xp6(17),
                    f.AsE(
                      "businessStatus: ",
                      f.lcZ(68, 31, l.chained.businessStatus$),
                      "\ncalendarStatus: ",
                      f.lcZ(69, 33, l.chained.calendarStatus$),
                      ""
                    ));
              },
              pipes: [oc, Qo],
              styles: [
                "[_nghost-%COMP%]{display:block;font-family:sans-serif;min-width:300px;max-width:1500px;margin:15px auto}header[_ngcontent-%COMP%]{background-color:#fff;padding:5px;box-shadow:0 2px 1px -1px #0003,0 1px 1px #00000024,0 1px 3px #0000001f}h1[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:24px}h2[_ngcontent-%COMP%]{text-align:center;margin-left:18px;font-size:20px}pre[_ngcontent-%COMP%]{padding:9px;border-radius:4px;background-color:#000;color:#eee}.flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-between;align-items:stretch;align-content:flex-start;padding:0;margin:0}.flex-row[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{flex:1 1 auto;margin:8px}.flex-row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{border-radius:4px;border-color:#333 1px solid}.left-label[_ngcontent-%COMP%]{max-width:250px;background-color:#ccc;padding:8px}.left-label[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;margin-top:8px}",
              ],
            })),
            a
          );
        })(),
        Ou = (() => {
          class a {
            constructor(o) {
              (this.http = o),
                (this.fetchBooks = () =>
                  this.http
                    .get(
                      "https://api.publicapis.org/entries?category=books&https=true"
                    )
                    .pipe(
                      (0, tt.U)((l) => l.entries),
                      Gn(200)
                    )),
                console.log(o),
                console.log(this);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(zr));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        wl = (() => {
          class a {
            constructor(o, l) {
              (this.actions$ = o),
                (this.api = l),
                (this.fetchBooks$ = Pi(
                  this.actions$,
                  Wn,
                  this.api.fetchBooks,
                  "Coulld not load books",
                  (p) => {
                    console.log("Books Successfully loaded"),
                      console.log("Request: ", p.request),
                      console.log("Payload: ", p.payload);
                  }
                ));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fs), f.LFG(Ou));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Ml = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [vu, Ou],
              imports: [
                [
                  ar,
                  di,
                  Mt,
                  go,
                  te.Aw.forFeature("books", hl),
                  kr.forFeature([wl]),
                ],
              ],
            })),
            a
          );
        })(),
        Xi = (() => {
          class a {
            constructor(o) {
              (this.http = o),
                (this.fetchBusiness = () =>
                  this.http
                    .get(
                      "https://api.publicapis.org/entries?category=business&https=true"
                    )
                    .pipe(
                      (0, tt.U)((l) => l.entries),
                      Gn(200)
                    )),
                console.log(o),
                console.log(this);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(zr));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        ea = (() => {
          class a {
            constructor(o, l) {
              (this.actions$ = o),
                (this.api = l),
                (this.fetchBusiness$ = Pi(
                  this.actions$,
                  Kr,
                  this.api.fetchBusiness,
                  "Coulld not load business",
                  (p) => {
                    console.log("Businesses Successfully loaded"),
                      console.log("Request: ", p.request),
                      console.log("Payload: ", p.payload);
                  }
                ));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fs), f.LFG(Xi));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        xu = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [bo, Xi],
              imports: [[ar, te.Aw.forFeature(zi, Yr), kr.forFeature([ea])]],
            })),
            a
          );
        })(),
        Co = (() => {
          class a {
            constructor(o) {
              (this.http = o),
                (this.fetchCalendars = () =>
                  this.http
                    .get(
                      "https://api.publicapis.org/entries?category=calendar&https=true"
                    )
                    .pipe(
                      (0, tt.U)((l) => l.entries),
                      Gn(200)
                    )),
                console.log(o),
                console.log(this);
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(zr));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Tl = (() => {
          class a {
            constructor(o, l) {
              (this.actions$ = o),
                (this.api = l),
                (this.fetchCalendars$ = Pi(
                  this.actions$,
                  vr,
                  this.api.fetchCalendars,
                  "Coulld not load calendars",
                  (p) => {
                    console.log("Calendars Successfully loaded"),
                      console.log("Request: ", p.request),
                      console.log("Payload: ", p.payload);
                  }
                ));
            }
          }
          return (
            (a.ɵfac = function (o) {
              return new (o || a)(f.LFG(fs), f.LFG(Co));
            }),
            (a.ɵprov = f.Yz7({ token: a, factory: a.ɵfac })),
            a
          );
        })(),
        Il = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a })),
            (a.ɵinj = f.cJS({
              providers: [Su, Co],
              imports: [[ar, te.Aw.forFeature(Yi, Tu), kr.forFeature([Tl])]],
            })),
            a
          );
        })(),
        Pu = (() => {
          class a {}
          return (
            (a.ɵfac = function (o) {
              return new (o || a)();
            }),
            (a.ɵmod = f.oAB({ type: a, bootstrap: [Cl] })),
            (a.ɵinj = f.cJS({
              providers: [],
              imports: [
                [
                  di,
                  te.Aw.forRoot(
                    {},
                    {
                      metaReducers: [],
                      runtimeChecks: {
                        strictActionImmutability: !0,
                        strictStateImmutability: !0,
                      },
                    }
                  ),
                  kr.forRoot([]),
                  [],
                  yu,
                  Ml,
                  Il,
                  xu,
                ],
              ],
            })),
            a
          );
        })();
      (0, f.G48)(),
        Na()
          .bootstrapModule(Pu)
          .catch((a) => console.error(a));
    },
    9312: (R, I, y) => {
      y.d(I, { P: () => S });
      var f = y(8896),
        L = y(1086),
        V = y(1737);
      class S {
        constructor(O, b, M) {
          (this.kind = O),
            (this.value = b),
            (this.error = M),
            (this.hasValue = "N" === O);
        }
        observe(O) {
          switch (this.kind) {
            case "N":
              return O.next && O.next(this.value);
            case "E":
              return O.error && O.error(this.error);
            case "C":
              return O.complete && O.complete();
          }
        }
        do(O, b, M) {
          switch (this.kind) {
            case "N":
              return O && O(this.value);
            case "E":
              return b && b(this.error);
            case "C":
              return M && M();
          }
        }
        accept(O, b, M) {
          return O && "function" == typeof O.next
            ? this.observe(O)
            : this.do(O, b, M);
        }
        toObservable() {
          switch (this.kind) {
            case "N":
              return (0, L.of)(this.value);
            case "E":
              return (0, V._)(this.error);
            case "C":
              return (0, f.c)();
          }
          throw new Error("unexpected notification kind value");
        }
        static createNext(O) {
          return void 0 !== O ? new S("N", O) : S.undefinedValueNotification;
        }
        static createError(O) {
          return new S("E", void 0, O);
        }
        static createComplete() {
          return S.completeNotification;
        }
      }
      (S.completeNotification = new S("C")),
        (S.undefinedValueNotification = new S("N", void 0));
    },
    2916: (R, I, y) => {
      y.d(I, { y: () => F });
      var f = y(3489),
        V = y(7668),
        H = y(3292),
        T = y(3821),
        O = y(5379);
      var v = y(2830);
      let F = (() => {
        class k {
          constructor(B) {
            (this._isScalar = !1), B && (this._subscribe = B);
          }
          lift(B) {
            const Z = new k();
            return (Z.source = this), (Z.operator = B), Z;
          }
          subscribe(B, Z, W) {
            const { operator: G } = this,
              J = (function S(k, ee, B) {
                if (k) {
                  if (k instanceof f.L) return k;
                  if (k[V.b]) return k[V.b]();
                }
                return k || ee || B ? new f.L(k, ee, B) : new f.L(H.c);
              })(B, Z, W);
            if (
              (J.add(
                G
                  ? G.call(J, this.source)
                  : this.source ||
                    (v.v.useDeprecatedSynchronousErrorHandling &&
                      !J.syncErrorThrowable)
                  ? this._subscribe(J)
                  : this._trySubscribe(J)
              ),
              v.v.useDeprecatedSynchronousErrorHandling &&
                J.syncErrorThrowable &&
                ((J.syncErrorThrowable = !1), J.syncErrorThrown))
            )
              throw J.syncErrorValue;
            return J;
          }
          _trySubscribe(B) {
            try {
              return this._subscribe(B);
            } catch (Z) {
              v.v.useDeprecatedSynchronousErrorHandling &&
                ((B.syncErrorThrown = !0), (B.syncErrorValue = Z)),
                (function L(k) {
                  for (; k; ) {
                    const { closed: ee, destination: B, isStopped: Z } = k;
                    if (ee || Z) return !1;
                    k = B && B instanceof f.L ? B : null;
                  }
                  return !0;
                })(B)
                  ? B.error(Z)
                  : console.warn(Z);
            }
          }
          forEach(B, Z) {
            return new (Z = C(Z))((W, G) => {
              let J;
              J = this.subscribe(
                (ue) => {
                  try {
                    B(ue);
                  } catch (Te) {
                    G(Te), J && J.unsubscribe();
                  }
                },
                G,
                W
              );
            });
          }
          _subscribe(B) {
            const { source: Z } = this;
            return Z && Z.subscribe(B);
          }
          [T.L]() {
            return this;
          }
          pipe(...B) {
            return 0 === B.length
              ? this
              : (function M(k) {
                  return 0 === k.length
                    ? O.y
                    : 1 === k.length
                    ? k[0]
                    : function (B) {
                        return k.reduce((Z, W) => W(Z), B);
                      };
                })(B)(this);
          }
          toPromise(B) {
            return new (B = C(B))((Z, W) => {
              let G;
              this.subscribe(
                (J) => (G = J),
                (J) => W(J),
                () => Z(G)
              );
            });
          }
        }
        return (k.create = (ee) => new k(ee)), k;
      })();
      function C(k) {
        if ((k || (k = v.v.Promise || Promise), !k))
          throw new Error("no Promise impl found");
        return k;
      }
    },
    3292: (R, I, y) => {
      y.d(I, { c: () => V });
      var f = y(2830),
        L = y(2782);
      const V = {
        closed: !0,
        next(H) {},
        error(H) {
          if (f.v.useDeprecatedSynchronousErrorHandling) throw H;
          (0, L.z)(H);
        },
        complete() {},
      };
    },
    839: (R, I, y) => {
      y.d(I, { t: () => O });
      var f = y(8929),
        L = y(341),
        V = y(2654),
        H = y(7770),
        S = y(5279),
        T = y(5283);
      class O extends f.xQ {
        constructor(
          v = Number.POSITIVE_INFINITY,
          F = Number.POSITIVE_INFINITY,
          C
        ) {
          super(),
            (this.scheduler = C),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = v < 1 ? 1 : v),
            (this._windowTime = F < 1 ? 1 : F),
            F === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(v) {
          if (!this.isStopped) {
            const F = this._events;
            F.push(v), F.length > this._bufferSize && F.shift();
          }
          super.next(v);
        }
        nextTimeWindow(v) {
          this.isStopped ||
            (this._events.push(new b(this._getNow(), v)),
            this._trimBufferThenGetEvents()),
            super.next(v);
        }
        _subscribe(v) {
          const F = this._infiniteTimeWindow,
            C = F ? this._events : this._trimBufferThenGetEvents(),
            k = this.scheduler,
            ee = C.length;
          let B;
          if (this.closed) throw new S.N();
          if (
            (this.isStopped || this.hasError
              ? (B = V.w.EMPTY)
              : (this.observers.push(v), (B = new T.W(this, v))),
            k && v.add((v = new H.ht(v, k))),
            F)
          )
            for (let Z = 0; Z < ee && !v.closed; Z++) v.next(C[Z]);
          else for (let Z = 0; Z < ee && !v.closed; Z++) v.next(C[Z].value);
          return (
            this.hasError
              ? v.error(this.thrownError)
              : this.isStopped && v.complete(),
            B
          );
        }
        _getNow() {
          return (this.scheduler || L.c).now();
        }
        _trimBufferThenGetEvents() {
          const v = this._getNow(),
            F = this._bufferSize,
            C = this._windowTime,
            k = this._events,
            ee = k.length;
          let B = 0;
          for (; B < ee && !(v - k[B].time < C); ) B++;
          return (
            ee > F && (B = Math.max(B, ee - F)), B > 0 && k.splice(0, B), k
          );
        }
      }
      class b {
        constructor(v, F) {
          (this.time = v), (this.value = F);
        }
      }
    },
    8929: (R, I, y) => {
      y.d(I, { Yc: () => O, xQ: () => b });
      var f = y(2916),
        L = y(3489),
        V = y(2654),
        H = y(5279),
        S = y(5283),
        T = y(7668);
      class O extends L.L {
        constructor(F) {
          super(F), (this.destination = F);
        }
      }
      let b = (() => {
        class v extends f.y {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [T.b]() {
            return new O(this);
          }
          lift(C) {
            const k = new M(this, this);
            return (k.operator = C), k;
          }
          next(C) {
            if (this.closed) throw new H.N();
            if (!this.isStopped) {
              const { observers: k } = this,
                ee = k.length,
                B = k.slice();
              for (let Z = 0; Z < ee; Z++) B[Z].next(C);
            }
          }
          error(C) {
            if (this.closed) throw new H.N();
            (this.hasError = !0), (this.thrownError = C), (this.isStopped = !0);
            const { observers: k } = this,
              ee = k.length,
              B = k.slice();
            for (let Z = 0; Z < ee; Z++) B[Z].error(C);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new H.N();
            this.isStopped = !0;
            const { observers: C } = this,
              k = C.length,
              ee = C.slice();
            for (let B = 0; B < k; B++) ee[B].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(C) {
            if (this.closed) throw new H.N();
            return super._trySubscribe(C);
          }
          _subscribe(C) {
            if (this.closed) throw new H.N();
            return this.hasError
              ? (C.error(this.thrownError), V.w.EMPTY)
              : this.isStopped
              ? (C.complete(), V.w.EMPTY)
              : (this.observers.push(C), new S.W(this, C));
          }
          asObservable() {
            const C = new f.y();
            return (C.source = this), C;
          }
        }
        return (v.create = (F, C) => new M(F, C)), v;
      })();
      class M extends b {
        constructor(F, C) {
          super(), (this.destination = F), (this.source = C);
        }
        next(F) {
          const { destination: C } = this;
          C && C.next && C.next(F);
        }
        error(F) {
          const { destination: C } = this;
          C && C.error && this.destination.error(F);
        }
        complete() {
          const { destination: F } = this;
          F && F.complete && this.destination.complete();
        }
        _subscribe(F) {
          const { source: C } = this;
          return C ? this.source.subscribe(F) : V.w.EMPTY;
        }
      }
    },
    5283: (R, I, y) => {
      y.d(I, { W: () => L });
      var f = y(2654);
      class L extends f.w {
        constructor(H, S) {
          super(),
            (this.subject = H),
            (this.subscriber = S),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const H = this.subject,
            S = H.observers;
          if (
            ((this.subject = null),
            !S || 0 === S.length || H.isStopped || H.closed)
          )
            return;
          const T = S.indexOf(this.subscriber);
          -1 !== T && S.splice(T, 1);
        }
      }
    },
    3489: (R, I, y) => {
      y.d(I, { L: () => O });
      var f = y(7043),
        L = y(3292),
        V = y(2654),
        H = y(7668),
        S = y(2830),
        T = y(2782);
      class O extends V.w {
        constructor(v, F, C) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = L.c;
              break;
            case 1:
              if (!v) {
                this.destination = L.c;
                break;
              }
              if ("object" == typeof v) {
                v instanceof O
                  ? ((this.syncErrorThrowable = v.syncErrorThrowable),
                    (this.destination = v),
                    v.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new b(this, v)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new b(this, v, F, C));
          }
        }
        [H.b]() {
          return this;
        }
        static create(v, F, C) {
          const k = new O(v, F, C);
          return (k.syncErrorThrowable = !1), k;
        }
        next(v) {
          this.isStopped || this._next(v);
        }
        error(v) {
          this.isStopped || ((this.isStopped = !0), this._error(v));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(v) {
          this.destination.next(v);
        }
        _error(v) {
          this.destination.error(v), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: v } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = v),
            this
          );
        }
      }
      class b extends O {
        constructor(v, F, C, k) {
          super(), (this._parentSubscriber = v);
          let ee,
            B = this;
          (0, f.m)(F)
            ? (ee = F)
            : F &&
              ((ee = F.next),
              (C = F.error),
              (k = F.complete),
              F !== L.c &&
                ((B = Object.create(F)),
                (0, f.m)(B.unsubscribe) && this.add(B.unsubscribe.bind(B)),
                (B.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = B),
            (this._next = ee),
            (this._error = C),
            (this._complete = k);
        }
        next(v) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: F } = this;
            S.v.useDeprecatedSynchronousErrorHandling && F.syncErrorThrowable
              ? this.__tryOrSetError(F, this._next, v) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, v);
          }
        }
        error(v) {
          if (!this.isStopped) {
            const { _parentSubscriber: F } = this,
              { useDeprecatedSynchronousErrorHandling: C } = S.v;
            if (this._error)
              C && F.syncErrorThrowable
                ? (this.__tryOrSetError(F, this._error, v), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, v), this.unsubscribe());
            else if (F.syncErrorThrowable)
              C
                ? ((F.syncErrorValue = v), (F.syncErrorThrown = !0))
                : (0, T.z)(v),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), C)) throw v;
              (0, T.z)(v);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: v } = this;
            if (this._complete) {
              const F = () => this._complete.call(this._context);
              S.v.useDeprecatedSynchronousErrorHandling && v.syncErrorThrowable
                ? (this.__tryOrSetError(v, F), this.unsubscribe())
                : (this.__tryOrUnsub(F), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(v, F) {
          try {
            v.call(this._context, F);
          } catch (C) {
            if ((this.unsubscribe(), S.v.useDeprecatedSynchronousErrorHandling))
              throw C;
            (0, T.z)(C);
          }
        }
        __tryOrSetError(v, F, C) {
          if (!S.v.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            F.call(this._context, C);
          } catch (k) {
            return S.v.useDeprecatedSynchronousErrorHandling
              ? ((v.syncErrorValue = k), (v.syncErrorThrown = !0), !0)
              : ((0, T.z)(k), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: v } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            v.unsubscribe();
        }
      }
    },
    2654: (R, I, y) => {
      y.d(I, { w: () => T });
      var f = y(6688),
        L = y(7830),
        V = y(7043);
      const S = (() => {
        function b(M) {
          return (
            Error.call(this),
            (this.message = M
              ? `${M.length} errors occurred during unsubscription:\n${M.map(
                  (v, F) => `${F + 1}) ${v.toString()}`
                ).join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = M),
            this
          );
        }
        return (b.prototype = Object.create(Error.prototype)), b;
      })();
      class T {
        constructor(M) {
          (this.closed = !1),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            M && ((this._ctorUnsubscribe = !0), (this._unsubscribe = M));
        }
        unsubscribe() {
          let M;
          if (this.closed) return;
          let {
            _parentOrParents: v,
            _ctorUnsubscribe: F,
            _unsubscribe: C,
            _subscriptions: k,
          } = this;
          if (
            ((this.closed = !0),
            (this._parentOrParents = null),
            (this._subscriptions = null),
            v instanceof T)
          )
            v.remove(this);
          else if (null !== v)
            for (let ee = 0; ee < v.length; ++ee) v[ee].remove(this);
          if ((0, V.m)(C)) {
            F && (this._unsubscribe = void 0);
            try {
              C.call(this);
            } catch (ee) {
              M = ee instanceof S ? O(ee.errors) : [ee];
            }
          }
          if ((0, f.k)(k)) {
            let ee = -1,
              B = k.length;
            for (; ++ee < B; ) {
              const Z = k[ee];
              if ((0, L.K)(Z))
                try {
                  Z.unsubscribe();
                } catch (W) {
                  (M = M || []),
                    W instanceof S ? (M = M.concat(O(W.errors))) : M.push(W);
                }
            }
          }
          if (M) throw new S(M);
        }
        add(M) {
          let v = M;
          if (!M) return T.EMPTY;
          switch (typeof M) {
            case "function":
              v = new T(M);
            case "object":
              if (v === this || v.closed || "function" != typeof v.unsubscribe)
                return v;
              if (this.closed) return v.unsubscribe(), v;
              if (!(v instanceof T)) {
                const k = v;
                (v = new T()), (v._subscriptions = [k]);
              }
              break;
            default:
              throw new Error(
                "unrecognized teardown " + M + " added to Subscription."
              );
          }
          let { _parentOrParents: F } = v;
          if (null === F) v._parentOrParents = this;
          else if (F instanceof T) {
            if (F === this) return v;
            v._parentOrParents = [F, this];
          } else {
            if (-1 !== F.indexOf(this)) return v;
            F.push(this);
          }
          const C = this._subscriptions;
          return null === C ? (this._subscriptions = [v]) : C.push(v), v;
        }
        remove(M) {
          const v = this._subscriptions;
          if (v) {
            const F = v.indexOf(M);
            -1 !== F && v.splice(F, 1);
          }
        }
      }
      var b;
      function O(b) {
        return b.reduce((M, v) => M.concat(v instanceof S ? v.errors : v), []);
      }
      T.EMPTY = (((b = new T()).closed = !0), b);
    },
    2830: (R, I, y) => {
      y.d(I, { v: () => L });
      let f = !1;
      const L = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(V) {
          if (V) {
            const H = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                H.stack
            );
          } else
            f &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          f = V;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return f;
        },
      };
    },
    1177: (R, I, y) => {
      y.d(I, { IY: () => H, Ds: () => T, ft: () => b });
      var f = y(3489),
        L = y(2916),
        V = y(9249);
      class H extends f.L {
        constructor(v) {
          super(), (this.parent = v);
        }
        _next(v) {
          this.parent.notifyNext(v);
        }
        _error(v) {
          this.parent.notifyError(v), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class T extends f.L {
        notifyNext(v) {
          this.destination.next(v);
        }
        notifyError(v) {
          this.destination.error(v);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function b(M, v) {
        if (v.closed) return;
        if (M instanceof L.y) return M.subscribe(v);
        let F;
        try {
          F = (0, V.s)(M)(v);
        } catch (C) {
          v.error(C);
        }
        return F;
      }
    },
    8896: (R, I, y) => {
      y.d(I, { E: () => L, c: () => V });
      var f = y(2916);
      const L = new f.y((S) => S.complete());
      function V(S) {
        return S
          ? (function H(S) {
              return new f.y((T) => S.schedule(() => T.complete()));
            })(S)
          : L;
      }
    },
    5254: (R, I, y) => {
      y.d(I, { D: () => B });
      var f = y(2916),
        L = y(9249),
        V = y(2654),
        H = y(3821),
        O = y(6454),
        b = y(5430),
        F = y(8955),
        C = y(8515);
      function B(Z, W) {
        return W
          ? (function ee(Z, W) {
              if (null != Z) {
                if (
                  (function v(Z) {
                    return Z && "function" == typeof Z[H.L];
                  })(Z)
                )
                  return (function S(Z, W) {
                    return new f.y((G) => {
                      const J = new V.w();
                      return (
                        J.add(
                          W.schedule(() => {
                            const ue = Z[H.L]();
                            J.add(
                              ue.subscribe({
                                next(Te) {
                                  J.add(W.schedule(() => G.next(Te)));
                                },
                                error(Te) {
                                  J.add(W.schedule(() => G.error(Te)));
                                },
                                complete() {
                                  J.add(W.schedule(() => G.complete()));
                                },
                              })
                            );
                          })
                        ),
                        J
                      );
                    });
                  })(Z, W);
                if ((0, F.t)(Z))
                  return (function T(Z, W) {
                    return new f.y((G) => {
                      const J = new V.w();
                      return (
                        J.add(
                          W.schedule(() =>
                            Z.then(
                              (ue) => {
                                J.add(
                                  W.schedule(() => {
                                    G.next(ue),
                                      J.add(W.schedule(() => G.complete()));
                                  })
                                );
                              },
                              (ue) => {
                                J.add(W.schedule(() => G.error(ue)));
                              }
                            )
                          )
                        ),
                        J
                      );
                    });
                  })(Z, W);
                if ((0, C.z)(Z)) return (0, O.r)(Z, W);
                if (
                  (function k(Z) {
                    return Z && "function" == typeof Z[b.hZ];
                  })(Z) ||
                  "string" == typeof Z
                )
                  return (function M(Z, W) {
                    if (!Z) throw new Error("Iterable cannot be null");
                    return new f.y((G) => {
                      const J = new V.w();
                      let ue;
                      return (
                        J.add(() => {
                          ue && "function" == typeof ue.return && ue.return();
                        }),
                        J.add(
                          W.schedule(() => {
                            (ue = Z[b.hZ]()),
                              J.add(
                                W.schedule(function () {
                                  if (G.closed) return;
                                  let Te, Re;
                                  try {
                                    const ze = ue.next();
                                    (Te = ze.value), (Re = ze.done);
                                  } catch (ze) {
                                    return void G.error(ze);
                                  }
                                  Re
                                    ? G.complete()
                                    : (G.next(Te), this.schedule());
                                })
                              );
                          })
                        ),
                        J
                      );
                    });
                  })(Z, W);
              }
              throw new TypeError(
                ((null !== Z && typeof Z) || Z) + " is not observable"
              );
            })(Z, W)
          : Z instanceof f.y
          ? Z
          : new f.y((0, L.s)(Z));
      }
    },
    3009: (R, I, y) => {
      y.d(I, { n: () => H });
      var f = y(2916),
        L = y(3650),
        V = y(6454);
      function H(S, T) {
        return T ? (0, V.r)(S, T) : new f.y((0, L.V)(S));
      }
    },
    7138: (R, I, y) => {
      y.d(I, { T: () => O });
      var f = y(2916),
        L = y(2866),
        V = y(1709),
        H = y(5379),
        T = y(3009);
      function O(...b) {
        let M = Number.POSITIVE_INFINITY,
          v = null,
          F = b[b.length - 1];
        return (
          (0, L.K)(F)
            ? ((v = b.pop()),
              b.length > 1 &&
                "number" == typeof b[b.length - 1] &&
                (M = b.pop()))
            : "number" == typeof F && (M = b.pop()),
          null === v && 1 === b.length && b[0] instanceof f.y
            ? b[0]
            : (function S(b = Number.POSITIVE_INFINITY) {
                return (0, V.zg)(H.y, b);
              })(M)((0, T.n)(b, v))
        );
      }
    },
    1086: (R, I, y) => {
      y.d(I, { of: () => H });
      var f = y(2866),
        L = y(3009),
        V = y(6454);
      function H(...S) {
        let T = S[S.length - 1];
        return (0, f.K)(T) ? (S.pop(), (0, V.r)(S, T)) : (0, L.n)(S);
      }
    },
    1737: (R, I, y) => {
      y.d(I, { _: () => L });
      var f = y(2916);
      function L(H, S) {
        return new f.y(
          S
            ? (T) => S.schedule(V, 0, { error: H, subscriber: T })
            : (T) => T.error(H)
        );
      }
      function V({ error: H, subscriber: S }) {
        S.error(H);
      }
    },
    7221: (R, I, y) => {
      y.d(I, { K: () => L });
      var f = y(1177);
      function L(S) {
        return function (O) {
          const b = new V(S),
            M = O.lift(b);
          return (b.caught = M);
        };
      }
      class V {
        constructor(T) {
          this.selector = T;
        }
        call(T, O) {
          return O.subscribe(new H(T, this.selector, this.caught));
        }
      }
      class H extends f.Ds {
        constructor(T, O, b) {
          super(T), (this.selector = O), (this.caught = b);
        }
        error(T) {
          if (!this.isStopped) {
            let O;
            try {
              O = this.selector(T, this.caught);
            } catch (v) {
              return void super.error(v);
            }
            this._unsubscribeAndRecycle();
            const b = new f.IY(this);
            this.add(b);
            const M = (0, f.ft)(O, b);
            M !== b && this.add(M);
          }
        }
      }
    },
    1406: (R, I, y) => {
      y.d(I, { b: () => L });
      var f = y(1709);
      function L(V, H) {
        return (0, f.zg)(V, H, 1);
      }
    },
    13: (R, I, y) => {
      y.d(I, { b: () => V });
      var f = y(3489),
        L = y(353);
      function V(O, b = L.P) {
        return (M) => M.lift(new H(O, b));
      }
      class H {
        constructor(b, M) {
          (this.dueTime = b), (this.scheduler = M);
        }
        call(b, M) {
          return M.subscribe(new S(b, this.dueTime, this.scheduler));
        }
      }
      class S extends f.L {
        constructor(b, M, v) {
          super(b),
            (this.dueTime = M),
            (this.scheduler = v),
            (this.debouncedSubscription = null),
            (this.lastValue = null),
            (this.hasValue = !1);
        }
        _next(b) {
          this.clearDebounce(),
            (this.lastValue = b),
            (this.hasValue = !0),
            this.add(
              (this.debouncedSubscription = this.scheduler.schedule(
                T,
                this.dueTime,
                this
              ))
            );
        }
        _complete() {
          this.debouncedNext(), this.destination.complete();
        }
        debouncedNext() {
          if ((this.clearDebounce(), this.hasValue)) {
            const { lastValue: b } = this;
            (this.lastValue = null),
              (this.hasValue = !1),
              this.destination.next(b);
          }
        }
        clearDebounce() {
          const b = this.debouncedSubscription;
          null !== b &&
            (this.remove(b),
            b.unsubscribe(),
            (this.debouncedSubscription = null));
        }
      }
      function T(O) {
        O.debouncedNext();
      }
    },
    2198: (R, I, y) => {
      y.d(I, { h: () => L });
      var f = y(3489);
      function L(S, T) {
        return function (b) {
          return b.lift(new V(S, T));
        };
      }
      class V {
        constructor(T, O) {
          (this.predicate = T), (this.thisArg = O);
        }
        call(T, O) {
          return O.subscribe(new H(T, this.predicate, this.thisArg));
        }
      }
      class H extends f.L {
        constructor(T, O, b) {
          super(T), (this.predicate = O), (this.thisArg = b), (this.count = 0);
        }
        _next(T) {
          let O;
          try {
            O = this.predicate.call(this.thisArg, T, this.count++);
          } catch (b) {
            return void this.destination.error(b);
          }
          O && this.destination.next(T);
        }
      }
    },
    4850: (R, I, y) => {
      y.d(I, { U: () => L });
      var f = y(3489);
      function L(S, T) {
        return function (b) {
          if ("function" != typeof S)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return b.lift(new V(S, T));
        };
      }
      class V {
        constructor(T, O) {
          (this.project = T), (this.thisArg = O);
        }
        call(T, O) {
          return O.subscribe(new H(T, this.project, this.thisArg));
        }
      }
      class H extends f.L {
        constructor(T, O, b) {
          super(T),
            (this.project = O),
            (this.count = 0),
            (this.thisArg = b || this);
        }
        _next(T) {
          let O;
          try {
            O = this.project.call(this.thisArg, T, this.count++);
          } catch (b) {
            return void this.destination.error(b);
          }
          this.destination.next(O);
        }
      }
    },
    1709: (R, I, y) => {
      y.d(I, { zg: () => H });
      var f = y(4850),
        L = y(5254),
        V = y(1177);
      function H(b, M, v = Number.POSITIVE_INFINITY) {
        return "function" == typeof M
          ? (F) =>
              F.pipe(
                H(
                  (C, k) =>
                    (0, L.D)(b(C, k)).pipe((0, f.U)((ee, B) => M(C, ee, k, B))),
                  v
                )
              )
          : ("number" == typeof M && (v = M), (F) => F.lift(new S(b, v)));
      }
      class S {
        constructor(M, v = Number.POSITIVE_INFINITY) {
          (this.project = M), (this.concurrent = v);
        }
        call(M, v) {
          return v.subscribe(new T(M, this.project, this.concurrent));
        }
      }
      class T extends V.Ds {
        constructor(M, v, F = Number.POSITIVE_INFINITY) {
          super(M),
            (this.project = v),
            (this.concurrent = F),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(M) {
          this.active < this.concurrent
            ? this._tryNext(M)
            : this.buffer.push(M);
        }
        _tryNext(M) {
          let v;
          const F = this.index++;
          try {
            v = this.project(M, F);
          } catch (C) {
            return void this.destination.error(C);
          }
          this.active++, this._innerSub(v);
        }
        _innerSub(M) {
          const v = new V.IY(this),
            F = this.destination;
          F.add(v);
          const C = (0, V.ft)(M, v);
          C !== v && F.add(C);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(M) {
          this.destination.next(M);
        }
        notifyComplete() {
          const M = this.buffer;
          this.active--,
            M.length > 0
              ? this._next(M.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
    },
    7770: (R, I, y) => {
      y.d(I, { QV: () => V, ht: () => S });
      var f = y(3489),
        L = y(9312);
      function V(O, b = 0) {
        return function (v) {
          return v.lift(new H(O, b));
        };
      }
      class H {
        constructor(b, M = 0) {
          (this.scheduler = b), (this.delay = M);
        }
        call(b, M) {
          return M.subscribe(new S(b, this.scheduler, this.delay));
        }
      }
      class S extends f.L {
        constructor(b, M, v = 0) {
          super(b), (this.scheduler = M), (this.delay = v);
        }
        static dispatch(b) {
          const { notification: M, destination: v } = b;
          M.observe(v), this.unsubscribe();
        }
        scheduleMessage(b) {
          this.destination.add(
            this.scheduler.schedule(
              S.dispatch,
              this.delay,
              new T(b, this.destination)
            )
          );
        }
        _next(b) {
          this.scheduleMessage(L.P.createNext(b));
        }
        _error(b) {
          this.scheduleMessage(L.P.createError(b)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(L.P.createComplete()), this.unsubscribe();
        }
      }
      class T {
        constructor(b, M) {
          (this.notification = b), (this.destination = M);
        }
      }
    },
    2014: (R, I, y) => {
      y.d(I, { R: () => L });
      var f = y(3489);
      function L(S, T) {
        let O = !1;
        return (
          arguments.length >= 2 && (O = !0),
          function (M) {
            return M.lift(new V(S, T, O));
          }
        );
      }
      class V {
        constructor(T, O, b = !1) {
          (this.accumulator = T), (this.seed = O), (this.hasSeed = b);
        }
        call(T, O) {
          return O.subscribe(
            new H(T, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class H extends f.L {
        constructor(T, O, b, M) {
          super(T),
            (this.accumulator = O),
            (this._seed = b),
            (this.hasSeed = M),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(T) {
          (this.hasSeed = !0), (this._seed = T);
        }
        _next(T) {
          if (this.hasSeed) return this._tryNext(T);
          (this.seed = T), this.destination.next(T);
        }
        _tryNext(T) {
          const O = this.index++;
          let b;
          try {
            b = this.accumulator(this.seed, T, O);
          } catch (M) {
            this.destination.error(M);
          }
          (this.seed = b), this.destination.next(b);
        }
      }
    },
    6606: (R, I, y) => {
      y.d(I, { B: () => Z });
      var f = y(8929),
        L = y(2916),
        V = y(2654),
        H = y(3489);
      function S() {
        return function (G) {
          return G.lift(new T(G));
        };
      }
      class T {
        constructor(G) {
          this.connectable = G;
        }
        call(G, J) {
          const { connectable: ue } = this;
          ue._refCount++;
          const Te = new O(G, ue),
            Re = J.subscribe(Te);
          return Te.closed || (Te.connection = ue.connect()), Re;
        }
      }
      class O extends H.L {
        constructor(G, J) {
          super(G), (this.connectable = J);
        }
        _unsubscribe() {
          const { connectable: G } = this;
          if (!G) return void (this.connection = null);
          this.connectable = null;
          const J = G._refCount;
          if (J <= 0) return void (this.connection = null);
          if (((G._refCount = J - 1), J > 1))
            return void (this.connection = null);
          const { connection: ue } = this,
            Te = G._connection;
          (this.connection = null),
            Te && (!ue || Te === ue) && Te.unsubscribe();
        }
      }
      class b extends L.y {
        constructor(G, J) {
          super(),
            (this.source = G),
            (this.subjectFactory = J),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(G) {
          return this.getSubject().subscribe(G);
        }
        getSubject() {
          const G = this._subject;
          return (
            (!G || G.isStopped) && (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let G = this._connection;
          return (
            G ||
              ((this._isComplete = !1),
              (G = this._connection = new V.w()),
              G.add(this.source.subscribe(new v(this.getSubject(), this))),
              G.closed && ((this._connection = null), (G = V.w.EMPTY))),
            G
          );
        }
        refCount() {
          return S()(this);
        }
      }
      const M = (() => {
        const W = b.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: W._subscribe },
          _isComplete: { value: W._isComplete, writable: !0 },
          getSubject: { value: W.getSubject },
          connect: { value: W.connect },
          refCount: { value: W.refCount },
        };
      })();
      class v extends f.Yc {
        constructor(G, J) {
          super(G), (this.connectable = J);
        }
        _error(G) {
          this._unsubscribe(), super._error(G);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const G = this.connectable;
          if (G) {
            this.connectable = null;
            const J = G._connection;
            (G._refCount = 0),
              (G._subject = null),
              (G._connection = null),
              J && J.unsubscribe();
          }
        }
      }
      class ee {
        constructor(G, J) {
          (this.subjectFactory = G), (this.selector = J);
        }
        call(G, J) {
          const { selector: ue } = this,
            Te = this.subjectFactory(),
            Re = ue(Te).subscribe(G);
          return Re.add(J.subscribe(Te)), Re;
        }
      }
      function B() {
        return new f.xQ();
      }
      function Z() {
        return (W) =>
          S()(
            (function k(W, G) {
              return function (ue) {
                let Te;
                if (
                  ((Te =
                    "function" == typeof W
                      ? W
                      : function () {
                          return W;
                        }),
                  "function" == typeof G)
                )
                  return ue.lift(new ee(Te, G));
                const Re = Object.create(ue, M);
                return (Re.source = ue), (Re.subjectFactory = Te), Re;
              };
            })(B)(W)
          );
      }
    },
    1307: (R, I, y) => {
      y.d(I, { T: () => L });
      var f = y(3489);
      function L(S) {
        return (T) => T.lift(new V(S));
      }
      class V {
        constructor(T) {
          this.total = T;
        }
        call(T, O) {
          return O.subscribe(new H(T, this.total));
        }
      }
      class H extends f.L {
        constructor(T, O) {
          super(T), (this.total = O), (this.count = 0);
        }
        _next(T) {
          ++this.count > this.total && this.destination.next(T);
        }
      }
    },
    7545: (R, I, y) => {
      y.d(I, { w: () => H });
      var f = y(4850),
        L = y(5254),
        V = y(1177);
      function H(O, b) {
        return "function" == typeof b
          ? (M) =>
              M.pipe(
                H((v, F) =>
                  (0, L.D)(O(v, F)).pipe((0, f.U)((C, k) => b(v, C, F, k)))
                )
              )
          : (M) => M.lift(new S(O));
      }
      class S {
        constructor(b) {
          this.project = b;
        }
        call(b, M) {
          return M.subscribe(new T(b, this.project));
        }
      }
      class T extends V.Ds {
        constructor(b, M) {
          super(b), (this.project = M), (this.index = 0);
        }
        _next(b) {
          let M;
          const v = this.index++;
          try {
            M = this.project(b, v);
          } catch (F) {
            return void this.destination.error(F);
          }
          this._innerSub(M);
        }
        _innerSub(b) {
          const M = this.innerSubscription;
          M && M.unsubscribe();
          const v = new V.IY(this),
            F = this.destination;
          F.add(v),
            (this.innerSubscription = (0, V.ft)(b, v)),
            this.innerSubscription !== v && F.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: b } = this;
          (!b || b.closed) && super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(b) {
          this.destination.next(b);
        }
      }
    },
    5632: (R, I, y) => {
      y.d(I, { q: () => S });
      var f = y(3489);
      const V = (() => {
        function b() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (b.prototype = Object.create(Error.prototype)), b;
      })();
      var H = y(8896);
      function S(b) {
        return (M) => (0 === b ? (0, H.c)() : M.lift(new T(b)));
      }
      class T {
        constructor(M) {
          if (((this.total = M), this.total < 0)) throw new V();
        }
        call(M, v) {
          return v.subscribe(new O(M, this.total));
        }
      }
      class O extends f.L {
        constructor(M, v) {
          super(M), (this.total = v), (this.count = 0);
        }
        _next(M) {
          const v = this.total,
            F = ++this.count;
          F <= v &&
            (this.destination.next(M),
            F === v && (this.destination.complete(), this.unsubscribe()));
        }
      }
    },
    7625: (R, I, y) => {
      y.d(I, { R: () => L });
      var f = y(1177);
      function L(S) {
        return (T) => T.lift(new V(S));
      }
      class V {
        constructor(T) {
          this.notifier = T;
        }
        call(T, O) {
          const b = new H(T),
            M = (0, f.ft)(this.notifier, new f.IY(b));
          return M && !b.seenValue ? (b.add(M), O.subscribe(b)) : b;
        }
      }
      class H extends f.Ds {
        constructor(T) {
          super(T), (this.seenValue = !1);
        }
        notifyNext() {
          (this.seenValue = !0), this.complete();
        }
        notifyComplete() {}
      }
    },
    6227: (R, I, y) => {
      y.d(I, { V: () => v });
      var f = y(353);
      const V = (() => {
        function F() {
          return (
            Error.call(this),
            (this.message = "Timeout has occurred"),
            (this.name = "TimeoutError"),
            this
          );
        }
        return (F.prototype = Object.create(Error.prototype)), F;
      })();
      var H = y(2697),
        S = y(1177);
      class O {
        constructor(C, k, ee, B) {
          (this.waitFor = C),
            (this.absoluteTimeout = k),
            (this.withObservable = ee),
            (this.scheduler = B);
        }
        call(C, k) {
          return k.subscribe(
            new b(
              C,
              this.absoluteTimeout,
              this.waitFor,
              this.withObservable,
              this.scheduler
            )
          );
        }
      }
      class b extends S.Ds {
        constructor(C, k, ee, B, Z) {
          super(C),
            (this.absoluteTimeout = k),
            (this.waitFor = ee),
            (this.withObservable = B),
            (this.scheduler = Z),
            this.scheduleTimeout();
        }
        static dispatchTimeout(C) {
          const { withObservable: k } = C;
          C._unsubscribeAndRecycle(), C.add((0, S.ft)(k, new S.IY(C)));
        }
        scheduleTimeout() {
          const { action: C } = this;
          C
            ? (this.action = C.schedule(this, this.waitFor))
            : this.add(
                (this.action = this.scheduler.schedule(
                  b.dispatchTimeout,
                  this.waitFor,
                  this
                ))
              );
        }
        _next(C) {
          this.absoluteTimeout || this.scheduleTimeout(), super._next(C);
        }
        _unsubscribe() {
          (this.action = void 0),
            (this.scheduler = null),
            (this.withObservable = null);
        }
      }
      var M = y(1737);
      function v(F, C = f.P) {
        return (function T(F, C, k = f.P) {
          return (ee) => {
            let B = (0, H.J)(F),
              Z = B ? +F - k.now() : Math.abs(F);
            return ee.lift(new O(Z, B, C, k));
          };
        })(F, (0, M._)(new V()), C);
      }
    },
    5407: (R, I, y) => {
      y.d(I, { M: () => O });
      var f = y(3489);
      class L extends f.L {
        notifyNext(F, C, k, ee, B) {
          this.destination.next(C);
        }
        notifyError(F, C) {
          this.destination.error(F);
        }
        notifyComplete(F) {
          this.destination.complete();
        }
      }
      class V extends f.L {
        constructor(F, C, k) {
          super(),
            (this.parent = F),
            (this.outerValue = C),
            (this.outerIndex = k),
            (this.index = 0);
        }
        _next(F) {
          this.parent.notifyNext(
            this.outerValue,
            F,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(F) {
          this.parent.notifyError(F, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      var H = y(9249),
        S = y(2916);
      function T(v, F, C, k, ee = new V(v, C, k)) {
        if (!ee.closed)
          return F instanceof S.y ? F.subscribe(ee) : (0, H.s)(F)(ee);
      }
      function O(...v) {
        return (F) => {
          let C;
          return (
            "function" == typeof v[v.length - 1] && (C = v.pop()),
            F.lift(new b(v, C))
          );
        };
      }
      class b {
        constructor(F, C) {
          (this.observables = F), (this.project = C);
        }
        call(F, C) {
          return C.subscribe(new M(F, this.observables, this.project));
        }
      }
      class M extends L {
        constructor(F, C, k) {
          super(F),
            (this.observables = C),
            (this.project = k),
            (this.toRespond = []);
          const ee = C.length;
          this.values = new Array(ee);
          for (let B = 0; B < ee; B++) this.toRespond.push(B);
          for (let B = 0; B < ee; B++) this.add(T(this, C[B], void 0, B));
        }
        notifyNext(F, C, k) {
          this.values[k] = C;
          const ee = this.toRespond;
          if (ee.length > 0) {
            const B = ee.indexOf(k);
            -1 !== B && ee.splice(B, 1);
          }
        }
        notifyComplete() {}
        _next(F) {
          if (0 === this.toRespond.length) {
            const C = [F, ...this.values];
            this.project ? this._tryProject(C) : this.destination.next(C);
          }
        }
        _tryProject(F) {
          let C;
          try {
            C = this.project.apply(this, F);
          } catch (k) {
            return void this.destination.error(k);
          }
          this.destination.next(C);
        }
      }
    },
    6454: (R, I, y) => {
      y.d(I, { r: () => V });
      var f = y(2916),
        L = y(2654);
      function V(H, S) {
        return new f.y((T) => {
          const O = new L.w();
          let b = 0;
          return (
            O.add(
              S.schedule(function () {
                b !== H.length
                  ? (T.next(H[b++]), T.closed || O.add(this.schedule()))
                  : T.complete();
              })
            ),
            O
          );
        });
      }
    },
    6686: (R, I, y) => {
      y.d(I, { o: () => V });
      var f = y(2654);
      class L extends f.w {
        constructor(S, T) {
          super();
        }
        schedule(S, T = 0) {
          return this;
        }
      }
      class V extends L {
        constructor(S, T) {
          super(S, T),
            (this.scheduler = S),
            (this.work = T),
            (this.pending = !1);
        }
        schedule(S, T = 0) {
          if (this.closed) return this;
          this.state = S;
          const O = this.id,
            b = this.scheduler;
          return (
            null != O && (this.id = this.recycleAsyncId(b, O, T)),
            (this.pending = !0),
            (this.delay = T),
            (this.id = this.id || this.requestAsyncId(b, this.id, T)),
            this
          );
        }
        requestAsyncId(S, T, O = 0) {
          return setInterval(S.flush.bind(S, this), O);
        }
        recycleAsyncId(S, T, O = 0) {
          if (null !== O && this.delay === O && !1 === this.pending) return T;
          clearInterval(T);
        }
        execute(S, T) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const O = this._execute(S, T);
          if (O) return O;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(S, T) {
          let b,
            O = !1;
          try {
            this.work(S);
          } catch (M) {
            (O = !0), (b = (!!M && M) || new Error(M));
          }
          if (O) return this.unsubscribe(), b;
        }
        _unsubscribe() {
          const S = this.id,
            T = this.scheduler,
            O = T.actions,
            b = O.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== b && O.splice(b, 1),
            null != S && (this.id = this.recycleAsyncId(T, S, null)),
            (this.delay = null);
        }
      }
    },
    2268: (R, I, y) => {
      y.d(I, { v: () => L });
      let f = (() => {
        class V {
          constructor(S, T = V.now) {
            (this.SchedulerAction = S), (this.now = T);
          }
          schedule(S, T = 0, O) {
            return new this.SchedulerAction(this, S).schedule(O, T);
          }
        }
        return (V.now = () => Date.now()), V;
      })();
      class L extends f {
        constructor(H, S = f.now) {
          super(H, () =>
            L.delegate && L.delegate !== this ? L.delegate.now() : S()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(H, S = 0, T) {
          return L.delegate && L.delegate !== this
            ? L.delegate.schedule(H, S, T)
            : super.schedule(H, S, T);
        }
        flush(H) {
          const { actions: S } = this;
          if (this.active) return void S.push(H);
          let T;
          this.active = !0;
          do {
            if ((T = H.execute(H.state, H.delay))) break;
          } while ((H = S.shift()));
          if (((this.active = !1), T)) {
            for (; (H = S.shift()); ) H.unsubscribe();
            throw T;
          }
        }
      }
    },
    353: (R, I, y) => {
      y.d(I, { P: () => H });
      var f = y(6686);
      const H = new (y(2268).v)(f.o);
    },
    341: (R, I, y) => {
      y.d(I, { c: () => T, N: () => S });
      var f = y(6686),
        V = y(2268);
      const S = new (class H extends V.v {})(
          class L extends f.o {
            constructor(b, M) {
              super(b, M), (this.scheduler = b), (this.work = M);
            }
            schedule(b, M = 0) {
              return M > 0
                ? super.schedule(b, M)
                : ((this.delay = M),
                  (this.state = b),
                  this.scheduler.flush(this),
                  this);
            }
            execute(b, M) {
              return M > 0 || this.closed
                ? super.execute(b, M)
                : this._execute(b, M);
            }
            requestAsyncId(b, M, v = 0) {
              return (null !== v && v > 0) || (null === v && this.delay > 0)
                ? super.requestAsyncId(b, M, v)
                : b.flush(this);
            }
          }
        ),
        T = S;
    },
    5430: (R, I, y) => {
      y.d(I, { hZ: () => L });
      const L = (function f() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      })();
    },
    3821: (R, I, y) => {
      y.d(I, { L: () => f });
      const f =
        ("function" == typeof Symbol && Symbol.observable) || "@@observable";
    },
    7668: (R, I, y) => {
      y.d(I, { b: () => f });
      const f =
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random();
    },
    5279: (R, I, y) => {
      y.d(I, { N: () => L });
      const L = (() => {
        function V() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (V.prototype = Object.create(Error.prototype)), V;
      })();
    },
    2782: (R, I, y) => {
      function f(L) {
        setTimeout(() => {
          throw L;
        }, 0);
      }
      y.d(I, { z: () => f });
    },
    5379: (R, I, y) => {
      function f(L) {
        return L;
      }
      y.d(I, { y: () => f });
    },
    6688: (R, I, y) => {
      y.d(I, { k: () => f });
      const f = Array.isArray || ((L) => L && "number" == typeof L.length);
    },
    8515: (R, I, y) => {
      y.d(I, { z: () => f });
      const f = (L) =>
        L && "number" == typeof L.length && "function" != typeof L;
    },
    2697: (R, I, y) => {
      function f(L) {
        return L instanceof Date && !isNaN(+L);
      }
      y.d(I, { J: () => f });
    },
    7043: (R, I, y) => {
      function f(L) {
        return "function" == typeof L;
      }
      y.d(I, { m: () => f });
    },
    7830: (R, I, y) => {
      function f(L) {
        return null !== L && "object" == typeof L;
      }
      y.d(I, { K: () => f });
    },
    8955: (R, I, y) => {
      function f(L) {
        return (
          !!L && "function" != typeof L.subscribe && "function" == typeof L.then
        );
      }
      y.d(I, { t: () => f });
    },
    2866: (R, I, y) => {
      function f(L) {
        return L && "function" == typeof L.schedule;
      }
      y.d(I, { K: () => f });
    },
    9249: (R, I, y) => {
      y.d(I, { s: () => F });
      var f = y(3650),
        L = y(2782),
        H = y(5430),
        T = y(3821),
        b = y(8515),
        M = y(8955),
        v = y(7830);
      const F = (C) => {
        if (C && "function" == typeof C[T.L])
          return ((C) => (k) => {
            const ee = C[T.L]();
            if ("function" != typeof ee.subscribe)
              throw new TypeError(
                "Provided object does not correctly implement Symbol.observable"
              );
            return ee.subscribe(k);
          })(C);
        if ((0, b.z)(C)) return (0, f.V)(C);
        if ((0, M.t)(C))
          return ((C) => (k) => (
            C.then(
              (ee) => {
                k.closed || (k.next(ee), k.complete());
              },
              (ee) => k.error(ee)
            ).then(null, L.z),
            k
          ))(C);
        if (C && "function" == typeof C[H.hZ])
          return ((C) => (k) => {
            const ee = C[H.hZ]();
            for (;;) {
              let B;
              try {
                B = ee.next();
              } catch (Z) {
                return k.error(Z), k;
              }
              if (B.done) {
                k.complete();
                break;
              }
              if ((k.next(B.value), k.closed)) break;
            }
            return (
              "function" == typeof ee.return &&
                k.add(() => {
                  ee.return && ee.return();
                }),
              k
            );
          })(C);
        {
          const ee = `You provided ${
            (0, v.K)(C) ? "an invalid object" : `'${C}'`
          } where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`;
          throw new TypeError(ee);
        }
      };
    },
    3650: (R, I, y) => {
      y.d(I, { V: () => f });
      const f = (L) => (V) => {
        for (let H = 0, S = L.length; H < S && !V.closed; H++) V.next(L[H]);
        V.complete();
      };
    },
    5e3: (R, I, y) => {
      y.d(I, {
        AFp: () => km,
        ip1: () => Hd,
        CZH: () => Ko,
        hGG: () => gC,
        sBO: () => Wb,
        _Vd: () => fa,
        EJc: () => Vm,
        SBq: () => ha,
        qLn: () => Er,
        tBr: () => jr,
        OlP: () => nt,
        zs3: () => gn,
        ZZ4: () => rc,
        aQg: () => sc,
        soG: () => ec,
        h0i: () => Go,
        R0b: () => en,
        FiY: () => dn,
        Lbi: () => jm,
        g9A: () => Bm,
        Qsj: () => dv,
        FYo: () => Xg,
        JOm: () => pn,
        PiD: () => ao,
        tp0: () => mr,
        Rgc: () => ya,
        dDg: () => Gm,
        GfV: () => em,
        s_b: () => qu,
        ifc: () => ke,
        eFA: () => Km,
        G48: () => Gb,
        X6Q: () => $b,
        _c5: () => uC,
        VLi: () => Nb,
        zSh: () => ql,
        wAp: () => De,
        vHH: () => B,
        cg1: () => Dd,
        kL8: () => wg,
        dqk: () => Le,
        sIi: () => sa,
        QGY: () => ld,
        F4k: () => Pp,
        RDi: () => Mf,
        AaK: () => b,
        TTD: () => os,
        xp6: () => lh,
        Xpm: () => er,
        lG2: () => Ns,
        Yz7: () => Xe,
        cJS: () => nn,
        oAB: () => ns,
        Yjl: () => Ls,
        Y36: () => ia,
        _UZ: () => Sp,
        qZA: () => cd,
        TgZ: () => ud,
        n5z: () => ls,
        LFG: () => Dt,
        $8M: () => Ei,
        NdJ: () => dd,
        ALo: () => dm,
        lcZ: () => fm,
        _uU: () => ig,
        Oqu: () => gd,
        AsE: () => yd,
        lnq: () => _d,
      });
      var f = y(8929),
        L = y(2654),
        V = y(2916),
        H = y(7138),
        S = y(6606);
      function T(e) {
        for (let t in e) if (e[t] === T) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function b(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(b).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function M(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const v = T({ __forward_ref__: T });
      function F(e) {
        return (
          (e.__forward_ref__ = F),
          (e.toString = function () {
            return b(this());
          }),
          e
        );
      }
      function C(e) {
        return k(e) ? e() : e;
      }
      function k(e) {
        return (
          "function" == typeof e &&
          e.hasOwnProperty(v) &&
          e.__forward_ref__ === F
        );
      }
      class B extends Error {
        constructor(t, n) {
          super(
            (function Z(e, t) {
              return `NG0${Math.abs(e)}${t ? ": " + t : ""}`;
            })(t, n)
          ),
            (this.code = t);
        }
      }
      function W(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function G(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : W(e);
      }
      function Re(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new B(-201, `No provider for ${G(e)} found${n}`);
      }
      function vt(e, t) {
        null == e &&
          (function Ve(e, t, n, r) {
            throw new Error(
              `ASSERTION ERROR: ${e}` +
                (null == r ? "" : ` [Expected=> ${n} ${r} ${t} <=Actual]`)
            );
          })(t, e, null, "!=");
      }
      function Xe(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function nn(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function mt(e) {
        return rn(e, xn) || rn(e, Xr);
      }
      function rn(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function Zo(e) {
        return e && (e.hasOwnProperty(Tr) || e.hasOwnProperty(Ir))
          ? e[Tr]
          : null;
      }
      const xn = T({ ɵprov: T }),
        Tr = T({ ɵinj: T }),
        Xr = T({ ngInjectableDef: T }),
        Ir = T({ ngInjectorDef: T });
      var we = (() => (
        ((we = we || {})[(we.Default = 0)] = "Default"),
        (we[(we.Host = 1)] = "Host"),
        (we[(we.Self = 2)] = "Self"),
        (we[(we.SkipSelf = 4)] = "SkipSelf"),
        (we[(we.Optional = 8)] = "Optional"),
        we
      ))();
      let es;
      function Vt(e) {
        const t = es;
        return (es = e), t;
      }
      function Qn(e, t, n) {
        const r = mt(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & we.Optional
          ? null
          : void 0 !== t
          ? t
          : void Re(b(e), "Injector");
      }
      function Ut(e) {
        return { toString: e }.toString();
      }
      var St = (() => (
          ((St = St || {})[(St.OnPush = 0)] = "OnPush"),
          (St[(St.Default = 1)] = "Default"),
          St
        ))(),
        ke = (() => {
          return (
            ((e = ke || (ke = {}))[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            ke
          );
          var e;
        })();
      const me = "undefined" != typeof globalThis && globalThis,
        Me = "undefined" != typeof window && window,
        Ps =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Le = me || ("undefined" != typeof global && global) || Me || Ps,
        Pn = {},
        Ee = [],
        Or = T({ ɵcmp: T }),
        Be = T({ ɵdir: T }),
        ts = T({ ɵpipe: T }),
        Fn = T({ ɵmod: T }),
        Nt = T({ ɵfac: T }),
        sn = T({ __NG_ELEMENT_ID__: T });
      let qo = 0;
      function er(e) {
        return Ut(() => {
          const n = {},
            r = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: n,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === St.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || Ee,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || ke.Emulated,
              id: "c",
              styles: e.styles || Ee,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            s = e.directives,
            i = e.features,
            c = e.pipes;
          return (
            (r.id += qo++),
            (r.inputs = xr(e.inputs, n)),
            (r.outputs = xr(e.outputs)),
            i && i.forEach((d) => d(r)),
            (r.directiveDefs = s
              ? () => ("function" == typeof s ? s() : s).map(tr)
              : null),
            (r.pipeDefs = c
              ? () => ("function" == typeof c ? c() : c).map(Rn)
              : null),
            r
          );
        });
      }
      function tr(e) {
        return (
          at(e) ||
          (function yn(e) {
            return e[Be] || null;
          })(e)
        );
      }
      function Rn(e) {
        return (function on(e) {
          return e[ts] || null;
        })(e);
      }
      const Rs = {};
      function ns(e) {
        return Ut(() => {
          const t = {
            type: e.type,
            bootstrap: e.bootstrap || Ee,
            declarations: e.declarations || Ee,
            imports: e.imports || Ee,
            exports: e.exports || Ee,
            transitiveCompileScopes: null,
            schemas: e.schemas || null,
            id: e.id || null,
          };
          return null != e.id && (Rs[e.id] = e.type), t;
        });
      }
      function xr(e, t) {
        if (null == e) return Pn;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              t && (t[s] = i);
          }
        return n;
      }
      const Ns = er;
      function Ls(e) {
        return {
          type: e.type,
          name: e.name,
          factory: null,
          pure: !1 !== e.pure,
          onDestroy: e.type.prototype.ngOnDestroy || null,
        };
      }
      function at(e) {
        return e[Or] || null;
      }
      function _t(e, t) {
        const n = e[Fn] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${b(e)} does not have '\u0275mod' property.`);
        return n;
      }
      const N = 20;
      function Y(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Q(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function xe(e) {
        return 0 != (8 & e.flags);
      }
      function ot(e) {
        return 2 == (2 & e.flags);
      }
      function Ge(e) {
        return 1 == (1 & e.flags);
      }
      function qe(e) {
        return null !== e.template;
      }
      function We(e) {
        return 0 != (512 & e[2]);
      }
      function ir(e, t) {
        return e.hasOwnProperty(Nt) ? e[Nt] : null;
      }
      class ac {
        constructor(t, n, r) {
          (this.previousValue = t),
            (this.currentValue = n),
            (this.firstChange = r);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function os() {
        return ks;
      }
      function ks(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = wf), uc;
      }
      function uc() {
        const e = ei(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Pn) e.previous = t;
          else for (let r in t) n[r] = t[r];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function wf(e, t, n, r) {
        const s =
            ei(e) ||
            (function cc(e, t) {
              return (e[ar] = t);
            })(e, { previous: Pn, current: null }),
          i = s.current || (s.current = {}),
          c = s.previous,
          d = this.declaredInputs[n],
          h = c[d];
        (i[d] = new ac(h && h.currentValue, t, c === Pn)), (e[r] = t);
      }
      os.ngInherit = !0;
      const ar = "__ngSimpleChanges__";
      function ei(e) {
        return e[ar] || null;
      }
      let Ta;
      function Mf(e) {
        Ta = e;
      }
      function et(e) {
        return !!e.listen;
      }
      const Aa = {
        createRenderer: (e, t) =>
          (function Ia() {
            return void 0 !== Ta
              ? Ta
              : "undefined" != typeof document
              ? document
              : void 0;
          })(),
      };
      function it(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function $t(e, t) {
        return it(t[e.index]);
      }
      function Lt(e, t) {
        const n = t[e];
        return Y(n) ? n : n[0];
      }
      function is(e) {
        return 128 == (128 & e[2]);
      }
      function Jt(e, t) {
        return null == t ? null : e[t];
      }
      function as(e) {
        e[18] = 0;
      }
      function js(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const ve = {
        lFrame: wc(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function oi() {
        return ve.bindingsEnabled;
      }
      function K() {
        return ve.lFrame.lView;
      }
      function Ne() {
        return ve.lFrame.tView;
      }
      function rt() {
        let e = ii();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function ii() {
        return ve.lFrame.currentTNode;
      }
      function Gt(e, t) {
        const n = ve.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function us() {
        return ve.lFrame.isParent;
      }
      function Hs() {
        return ve.isInCheckNoChangesMode;
      }
      function $s(e) {
        ve.isInCheckNoChangesMode = e;
      }
      function Dn() {
        return ve.lFrame.bindingIndex;
      }
      function En(e) {
        const t = ve.lFrame,
          n = t.bindingIndex;
        return (t.bindingIndex = t.bindingIndex + e), n;
      }
      function Ec(e, t) {
        const n = ve.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), ui(t);
      }
      function ui(e) {
        ve.lFrame.currentDirectiveIndex = e;
      }
      function li(e) {
        ve.lFrame.currentQueryIndex = e;
      }
      function di(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function bc(e, t, n) {
        if (n & we.SkipSelf) {
          let s = t,
            i = e;
          for (
            ;
            !((s = s.parent),
            null !== s ||
              n & we.Host ||
              ((s = di(i)), null === s || ((i = i[15]), 10 & s.type)));

          );
          if (null === s) return !1;
          (t = s), (e = i);
        }
        const r = (ve.lFrame = Cc());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Gs(e) {
        const t = Cc(),
          n = e[1];
        (ve.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Cc() {
        const e = ve.lFrame,
          t = null === e ? null : e.child;
        return null === t ? wc(e) : t;
      }
      function wc(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function La() {
        const e = ve.lFrame;
        return (
          (ve.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const ka = La;
      function Ws() {
        const e = La();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function wt() {
        return ve.lFrame.selectedIndex;
      }
      function At(e) {
        ve.lFrame.selectedIndex = e;
      }
      function zs(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const i = e.data[n].type.prototype,
            {
              ngAfterContentInit: c,
              ngAfterContentChecked: d,
              ngAfterViewInit: h,
              ngAfterViewChecked: g,
              ngOnDestroy: m,
            } = i;
          c && (e.contentHooks || (e.contentHooks = [])).push(-n, c),
            d &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, d),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, d)),
            h && (e.viewHooks || (e.viewHooks = [])).push(-n, h),
            g &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, g),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, g)),
            null != m && (e.destroyHooks || (e.destroyHooks = [])).push(n, m);
        }
      }
      function hi(e, t, n) {
        Tc(e, t, 3, n);
      }
      function Ks(e, t, n, r) {
        (3 & e[2]) === n && Tc(e, t, n, r);
      }
      function ja(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function Tc(e, t, n, r) {
        const i = null != r ? r : -1,
          c = t.length - 1;
        let d = 0;
        for (let h = void 0 !== r ? 65535 & e[18] : 0; h < c; h++)
          if ("number" == typeof t[h + 1]) {
            if (((d = t[h]), null != r && d >= r)) break;
          } else
            t[h] < 0 && (e[18] += 65536),
              (d < i || -1 == i) &&
                (Pf(e, n, t, h), (e[18] = (4294901760 & e[18]) + h + 2)),
              h++;
      }
      function Pf(e, t, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          d = e[s ? -n[r] : n[r]];
        if (s) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(d);
            } finally {
            }
          }
        } else
          try {
            i.call(d);
          } finally {
          }
      }
      class Ys {
        constructor(t, n, r) {
          (this.factory = t),
            (this.resolving = !1),
            (this.canSeeViewProviders = n),
            (this.injectImpl = r);
        }
      }
      function pi(e, t, n) {
        const r = et(e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const c = n[s++],
              d = n[s++],
              h = n[s++];
            r ? e.setAttribute(t, d, h, c) : t.setAttributeNS(c, d, h);
          } else {
            const c = i,
              d = n[++s];
            qs(c)
              ? r && e.setProperty(t, c, d)
              : r
              ? e.setAttribute(t, c, d)
              : t.setAttribute(c, d),
              s++;
          }
        }
        return s;
      }
      function te(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function qs(e) {
        return 64 === e.charCodeAt(0);
      }
      function lr(e, t) {
        if (null !== t && 0 !== t.length)
          if (null === e || 0 === e.length) e = t.slice();
          else {
            let n = -1;
            for (let r = 0; r < t.length; r++) {
              const s = t[r];
              "number" == typeof s
                ? (n = s)
                : 0 === n ||
                  gi(e, n, s, null, -1 === n || 2 === n ? t[++r] : null);
            }
          }
        return e;
      }
      function gi(e, t, n, r, s) {
        let i = 0,
          c = e.length;
        if (-1 === t) c = -1;
        else
          for (; i < e.length; ) {
            const d = e[i++];
            if ("number" == typeof d) {
              if (d === t) {
                c = -1;
                break;
              }
              if (d > t) {
                c = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const d = e[i];
          if ("number" == typeof d) break;
          if (d === n) {
            if (null === r) return void (null !== s && (e[i + 1] = s));
            if (r === e[i + 1]) return void (e[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== c && (e.splice(c, 0, t), (i = c + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== s && e.splice(i++, 0, s);
      }
      function Un(e) {
        return -1 !== e;
      }
      function Fr(e) {
        return 32767 & e;
      }
      function Rr(e, t) {
        let n = (function Ic(e) {
            return e >> 16;
          })(e),
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let dr = !0;
      function Js(e) {
        const t = dr;
        return (dr = e), t;
      }
      let Ha = 0;
      function Nr(e, t) {
        const n = mi(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          Qs(r.data, e),
          Qs(t, null),
          Qs(r.blueprint, null));
        const s = Xs(e, t),
          i = e.injectorIndex;
        if (Un(s)) {
          const c = Fr(s),
            d = Rr(s, t),
            h = d[1].data;
          for (let g = 0; g < 8; g++) t[i + g] = d[c + g] | h[c + g];
        }
        return (t[i + 8] = s), i;
      }
      function Qs(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function mi(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function Xs(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          s = t;
        for (; null !== s; ) {
          const i = s[1],
            c = i.type;
          if (((r = 2 === c ? i.declTNode : 1 === c ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function eo(e, t, n) {
        !(function ln(e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(sn) && (r = n[sn]),
            null == r && (r = n[sn] = Ha++);
          const s = 255 & r;
          t.data[e + (s >> 5)] |= 1 << s;
        })(e, t, n);
      }
      function Ga(e, t, n) {
        if (n & we.Optional) return e;
        Re(t, "NodeInjector");
      }
      function yi(e, t, n, r) {
        if (
          (n & we.Optional && void 0 === r && (r = null),
          0 == (n & (we.Self | we.Host)))
        ) {
          const s = e[9],
            i = Vt(void 0);
          try {
            return s ? s.get(t, r, n & we.Optional) : Qn(t, r, n & we.Optional);
          } finally {
            Vt(i);
          }
        }
        return Ga(r, t, n);
      }
      function _i(e, t, n, r = we.Default, s) {
        if (null !== e) {
          const i = (function Sc(e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(sn) ? e[sn] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : Wa) : t;
          })(n);
          if ("function" == typeof i) {
            if (!bc(t, e, r)) return r & we.Host ? Ga(s, n, r) : yi(t, n, r, s);
            try {
              const c = i(r);
              if (null != c || r & we.Optional) return c;
              Re(n);
            } finally {
              ka();
            }
          } else if ("number" == typeof i) {
            let c = null,
              d = mi(e, t),
              h = -1,
              g = r & we.Host ? t[16][6] : null;
            for (
              (-1 === d || r & we.SkipSelf) &&
              ((h = -1 === d ? Xs(e, t) : t[d + 8]),
              -1 !== h && Di(r, !1)
                ? ((c = t[1]), (d = Fr(h)), (t = Rr(h, t)))
                : (d = -1));
              -1 !== d;

            ) {
              const m = t[1];
              if (za(i, d, m.data)) {
                const _ = Ac(d, t, n, c, r, g);
                if (_ !== to) return _;
              }
              (h = t[d + 8]),
                -1 !== h && Di(r, t[1].data[d + 8] === g) && za(i, d, t)
                  ? ((c = m), (d = Fr(h)), (t = Rr(h, t)))
                  : (d = -1);
            }
          }
        }
        return yi(t, n, r, s);
      }
      const to = {};
      function Wa() {
        return new fr(rt(), K());
      }
      function Ac(e, t, n, r, s, i) {
        const c = t[1],
          d = c.data[e + 8],
          m = (function no(e, t, n, r, s) {
            const i = e.providerIndexes,
              c = t.data,
              d = 1048575 & i,
              h = e.directiveStart,
              m = i >> 20,
              w = s ? d + m : e.directiveEnd;
            for (let P = r ? d : d + m; P < w; P++) {
              const $ = c[P];
              if ((P < h && n === $) || (P >= h && $.type === n)) return P;
            }
            if (s) {
              const P = c[h];
              if (P && qe(P) && P.type === n) return h;
            }
            return null;
          })(
            d,
            c,
            n,
            null == r ? ot(d) && dr : r != c && 0 != (3 & d.type),
            s & we.Host && i === d
          );
        return null !== m ? cs(t, c, m, d) : to;
      }
      function cs(e, t, n, r) {
        let s = e[n];
        const i = t.data;
        if (
          (function Ff(e) {
            return e instanceof Ys;
          })(s)
        ) {
          const c = s;
          c.resolving &&
            (function J(e, t) {
              const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
              throw new B(
                -200,
                `Circular dependency in DI detected for ${e}${n}`
              );
            })(G(i[n]));
          const d = Js(c.canSeeViewProviders);
          c.resolving = !0;
          const h = c.injectImpl ? Vt(c.injectImpl) : null;
          bc(e, r, we.Default);
          try {
            (s = e[n] = c.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function xf(e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const c = ks(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, c),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, c);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== h && Vt(h), Js(d), (c.resolving = !1), ka();
          }
        }
        return s;
      }
      function za(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Di(e, t) {
        return !(e & we.Self || (e & we.Host && t));
      }
      class fr {
        constructor(t, n) {
          (this._tNode = t), (this._lView = n);
        }
        get(t, n, r) {
          return _i(this._tNode, this._lView, t, r, n);
        }
      }
      function ls(e) {
        return Ut(() => {
          const t = e.prototype.constructor,
            n = t[Nt] || ro(t),
            r = Object.prototype;
          let s = Object.getPrototypeOf(e.prototype).constructor;
          for (; s && s !== r; ) {
            const i = s[Nt] || ro(s);
            if (i && i !== n) return i;
            s = Object.getPrototypeOf(s);
          }
          return (i) => new i();
        });
      }
      function ro(e) {
        return k(e)
          ? () => {
              const t = ro(C(e));
              return t && t();
            }
          : ir(e);
      }
      function Ei(e) {
        return (function $a(e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const r = n.length;
            let s = 0;
            for (; s < r; ) {
              const i = n[s];
              if (te(i)) break;
              if (0 === i) s += 2;
              else if ("number" == typeof i)
                for (s++; s < r && "string" == typeof n[s]; ) s++;
              else {
                if (i === t) return n[s + 1];
                s += 2;
              }
            }
          }
          return null;
        })(rt(), e);
      }
      const vn = "__parameters__";
      function Lr(e, t, n) {
        return Ut(() => {
          const r = (function so(e) {
            return function (...n) {
              if (e) {
                const r = e(...n);
                for (const s in r) this[s] = r[s];
              }
            };
          })(t);
          function s(...i) {
            if (this instanceof s) return r.apply(this, i), this;
            const c = new s(...i);
            return (d.annotation = c), d;
            function d(h, g, m) {
              const _ = h.hasOwnProperty(vn)
                ? h[vn]
                : Object.defineProperty(h, vn, { value: [] })[vn];
              for (; _.length <= m; ) _.push(null);
              return (_[m] = _[m] || []).push(c), h;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      class nt {
        constructor(t, n) {
          (this._desc = t),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof n
              ? (this.__NG_ELEMENT_ID__ = n)
              : void 0 !== n &&
                (this.ɵprov = Xe({
                  token: this,
                  providedIn: n.providedIn || "root",
                  factory: n.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      function zt(e, t) {
        e.forEach((n) => (Array.isArray(n) ? zt(n, t) : t(n)));
      }
      function bi(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function hr(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      const ms = {},
        Mi = "__NG_DI_FLAG__",
        io = "ngTempTokenPath",
        Je = /\n/gm,
        Ti = "__source",
        kc = T({ provide: String, useValue: T });
      let Cn;
      function Bc(e) {
        const t = Cn;
        return (Cn = e), t;
      }
      function tu(e, t = we.Default) {
        if (void 0 === Cn) throw new B(203, "");
        return null === Cn
          ? Qn(e, void 0, t)
          : Cn.get(e, t & we.Optional ? null : void 0, t);
      }
      function Dt(e, t = we.Default) {
        return (
          (function yt() {
            return es;
          })() || tu
        )(C(e), t);
      }
      function Br(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = C(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length) throw new B(900, "");
            let s,
              i = we.Default;
            for (let c = 0; c < r.length; c++) {
              const d = r[c],
                h = Ai(d);
              "number" == typeof h
                ? -1 === h
                  ? (s = d.token)
                  : (i |= h)
                : (s = d);
            }
            t.push(Dt(s, i));
          } else t.push(Dt(r));
        }
        return t;
      }
      function wn(e, t) {
        return (e[Mi] = t), (e.prototype[Mi] = t), e;
      }
      function Ai(e) {
        return e[Mi];
      }
      const jr = wn(
          Lr("Inject", (e) => ({ token: e })),
          -1
        ),
        dn = wn(Lr("Optional"), 8),
        ao = wn(Lr("Self"), 2),
        mr = wn(Lr("SkipSelf"), 4),
        $i = "__ngContext__";
      function Tt(e, t) {
        e[$i] = t;
      }
      function Gi(e) {
        const t = (function Dr(e) {
          return e[$i] || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function Wi(e) {
        return e.ngOriginalError;
      }
      function hl(e, ...t) {
        e.error(...t);
      }
      class Er {
        constructor() {
          this._console = console;
        }
        handleError(t) {
          const n = this._findOriginalError(t),
            r = (function fl(e) {
              return (e && e.ngErrorLogger) || hl;
            })(t);
          r(this._console, "ERROR", t),
            n && r(this._console, "ORIGINAL ERROR", n);
        }
        _findOriginalError(t) {
          let n = t && Wi(t);
          for (; n && Wi(n); ) n = Wi(n);
          return n || null;
        }
      }
      const zi = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Le))();
      function Kt(e) {
        return e instanceof Function ? e() : e;
      }
      var pn = (() => (
        ((pn = pn || {})[(pn.Important = 1)] = "Important"),
        (pn[(pn.DashCase = 2)] = "DashCase"),
        pn
      ))();
      function bo(e, t) {
        return undefined(e, t);
      }
      function Zr(e) {
        const t = e[3];
        return Q(t) ? t[3] : t;
      }
      function Zi(e) {
        return Tu(e[13]);
      }
      function qi(e) {
        return Tu(e[4]);
      }
      function Tu(e) {
        for (; null !== e && !Q(e); ) e = e[4];
        return e;
      }
      function qr(e, t, n, r, s) {
        if (null != r) {
          let i,
            c = !1;
          Q(r) ? (i = r) : Y(r) && ((c = !0), (r = r[0]));
          const d = it(r);
          0 === e && null !== n
            ? null == s
              ? o(t, n, d)
              : u(t, n, d, s || null, !0)
            : 1 === e && null !== n
            ? u(t, n, d, s || null, !0)
            : 2 === e
            ? (function he(e, t, n) {
                const r = D(e, t);
                r &&
                  (function p(e, t, n, r) {
                    et(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, d, c)
            : 3 === e && t.destroyNode(d),
            null != i &&
              (function Ce(e, t, n, r, s) {
                const i = n[7];
                i !== it(n) && qr(t, e, r, i, s);
                for (let d = 10; d < n.length; d++) {
                  const h = n[d];
                  se(h[1], h, e, t, r, i);
                }
              })(t, e, i, n, s);
        }
      }
      function Qi(e, t, n) {
        return et(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function Xi(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          s = t[3];
        1024 & t[2] && ((t[2] &= -1025), js(s, -1)), n.splice(r, 1);
      }
      function ea(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const s = r[17];
          null !== s && s !== e && Xi(s, r), t > 0 && (e[n - 1][4] = r[4]);
          const i = hr(e, 10 + t);
          !(function bl(e, t) {
            se(e, t, t[11], 2, null, null), (t[0] = null), (t[6] = null);
          })(r[1], r);
          const c = i[19];
          null !== c && c.detachView(i[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        return r;
      }
      function xu(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          et(n) && n.destroyNode && se(e, t, n, 3, null, null),
            (function Ou(e) {
              let t = e[13];
              if (!t) return Co(e[1], e);
              for (; t; ) {
                let n = null;
                if (Y(t)) n = t[13];
                else {
                  const r = t[10];
                  r && (n = r);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Y(t) && Co(t[1], t), (t = t[3]);
                  null === t && (t = e), Y(t) && Co(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Co(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function Il(e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const s = t[n[r]];
                  if (!(s instanceof Ys)) {
                    const i = n[r + 1];
                    if (Array.isArray(i))
                      for (let c = 0; c < i.length; c += 2) {
                        const d = s[i[c]],
                          h = i[c + 1];
                        try {
                          h.call(d);
                        } finally {
                        }
                      }
                    else
                      try {
                        i.call(s);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function Tl(e, t) {
              const n = e.cleanup,
                r = t[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const c = n[i + 1],
                      d = "function" == typeof c ? c(t) : it(t[c]),
                      h = r[(s = n[i + 2])],
                      g = n[i + 3];
                    "boolean" == typeof g
                      ? d.removeEventListener(n[i], h, g)
                      : g >= 0
                      ? r[(s = g)]()
                      : r[(s = -g)].unsubscribe(),
                      (i += 2);
                  } else {
                    const c = r[(s = n[i + 1])];
                    n[i].call(c);
                  }
              if (null !== r) {
                for (let i = s + 1; i < r.length; i++) r[i]();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && et(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Q(t[3])) {
            n !== t[3] && Xi(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function Pu(e, t, n) {
        return (function a(e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const s = e.data[r.directiveStart].encapsulation;
            if (s === ke.None || s === ke.Emulated) return null;
          }
          return $t(r, n);
        })(e, t.parent, n);
      }
      function u(e, t, n, r, s) {
        et(e) ? e.insertBefore(t, n, r, s) : t.insertBefore(n, r, s);
      }
      function o(e, t, n) {
        et(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function l(e, t, n, r, s) {
        null !== r ? u(e, t, n, r, s) : o(e, t, n);
      }
      function D(e, t) {
        return et(e) ? e.parentNode(t) : t.parentNode;
      }
      let le = function q(e, t, n) {
        return 40 & e.type ? $t(e, n) : null;
      };
      function Pe(e, t, n, r) {
        const s = Pu(e, r, t),
          i = t[11],
          d = (function U(e, t, n) {
            return le(e, t, n);
          })(r.parent || t[6], r, t);
        if (null != s)
          if (Array.isArray(n))
            for (let h = 0; h < n.length; h++) l(i, s, n[h], d, !1);
          else l(i, s, n, d, !1);
      }
      function ae(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return $t(t, e);
          if (4 & n) return pt(-1, e[t.index]);
          if (8 & n) {
            const r = t.child;
            if (null !== r) return ae(e, r);
            {
              const s = e[t.index];
              return Q(s) ? pt(-1, s) : it(s);
            }
          }
          if (32 & n) return bo(t, e)() || it(e[t.index]);
          {
            const r = be(e, t);
            return null !== r
              ? Array.isArray(r)
                ? r[0]
                : ae(Zr(e[16]), r)
              : ae(e, t.next);
          }
        }
        return null;
      }
      function be(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function pt(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const r = t[n],
            s = r[1].firstChild;
          if (null !== s) return ae(r, s);
        }
        return t[7];
      }
      function re(e, t, n, r, s, i, c) {
        for (; null != n; ) {
          const d = r[n.index],
            h = n.type;
          if (
            (c && 0 === t && (d && Tt(it(d), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & h) re(e, t, n.child, r, s, i, !1), qr(t, e, s, d, i);
            else if (32 & h) {
              const g = bo(n, r);
              let m;
              for (; (m = g()); ) qr(t, e, s, m, i);
              qr(t, e, s, d, i);
            } else 16 & h ? de(e, t, r, n, s, i) : qr(t, e, s, d, i);
          n = c ? n.projectionNext : n.next;
        }
      }
      function se(e, t, n, r, s, i) {
        re(n, r, e.firstChild, t, s, i, !1);
      }
      function de(e, t, n, r, s, i) {
        const c = n[16],
          h = c[6].projection[r.projection];
        if (Array.isArray(h))
          for (let g = 0; g < h.length; g++) qr(t, e, s, h[g], i);
        else re(e, t, h, c[3], s, i, !0);
      }
      function ct(e, t, n) {
        et(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Bt(e, t, n) {
        et(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function zn(e, t, n) {
        let r = e.length;
        for (;;) {
          const s = e.indexOf(t, n);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const i = t.length;
            if (s + i === r || e.charCodeAt(s + i) <= 32) return s;
          }
          n = s + 1;
        }
      }
      const ih = "ng-template";
      function my(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let s = e[r++];
          if (n && "class" === s) {
            if (((s = e[r]), -1 !== zn(s.toLowerCase(), t, 0))) return !0;
          } else if (1 === s) {
            for (; r < e.length && "string" == typeof (s = e[r++]); )
              if (s.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function ah(e) {
        return 4 === e.type && e.value !== ih;
      }
      function yy(e, t, n) {
        return t === (4 !== e.type || n ? e.value : ih);
      }
      function _y(e, t, n) {
        let r = 4;
        const s = e.attrs || [],
          i = (function vy(e) {
            for (let t = 0; t < e.length; t++) if (te(e[t])) return t;
            return e.length;
          })(s);
        let c = !1;
        for (let d = 0; d < t.length; d++) {
          const h = t[d];
          if ("number" != typeof h) {
            if (!c)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== h && !yy(e, h, n)) || ("" === h && 1 === t.length))
                ) {
                  if (Mn(r)) return !1;
                  c = !0;
                }
              } else {
                const g = 8 & r ? h : t[++d];
                if (8 & r && null !== e.attrs) {
                  if (!my(e.attrs, g, n)) {
                    if (Mn(r)) return !1;
                    c = !0;
                  }
                  continue;
                }
                const _ = Dy(8 & r ? "class" : h, s, ah(e), n);
                if (-1 === _) {
                  if (Mn(r)) return !1;
                  c = !0;
                  continue;
                }
                if ("" !== g) {
                  let w;
                  w = _ > i ? "" : s[_ + 1].toLowerCase();
                  const P = 8 & r ? w : null;
                  if ((P && -1 !== zn(P, g, 0)) || (2 & r && g !== w)) {
                    if (Mn(r)) return !1;
                    c = !0;
                  }
                }
              }
          } else {
            if (!c && !Mn(r) && !Mn(h)) return !1;
            if (c && Mn(h)) continue;
            (c = !1), (r = h | (1 & r));
          }
        }
        return Mn(r) || c;
      }
      function Mn(e) {
        return 0 == (1 & e);
      }
      function Dy(e, t, n, r) {
        if (null === t) return -1;
        let s = 0;
        if (r || !n) {
          let i = !1;
          for (; s < t.length; ) {
            const c = t[s];
            if (c === e) return s;
            if (3 === c || 6 === c) i = !0;
            else {
              if (1 === c || 2 === c) {
                let d = t[++s];
                for (; "string" == typeof d; ) d = t[++s];
                continue;
              }
              if (4 === c) break;
              if (0 === c) {
                s += 4;
                continue;
              }
            }
            s += i ? 1 : 2;
          }
          return -1;
        }
        return (function by(e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function uh(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (_y(e, t[r], n)) return !0;
        return !1;
      }
      function ch(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function wy(e) {
        let t = e[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < e.length; ) {
          let c = e[n];
          if ("string" == typeof c)
            if (2 & r) {
              const d = e[++n];
              s += "[" + c + (d.length > 0 ? '="' + d + '"' : "") + "]";
            } else 8 & r ? (s += "." + c) : 4 & r && (s += " " + c);
          else
            "" !== s && !Mn(c) && ((t += ch(i, s)), (s = "")),
              (r = c),
              (i = i || !Mn(r));
          n++;
        }
        return "" !== s && (t += ch(i, s)), t;
      }
      const Se = {};
      function lh(e) {
        dh(Ne(), K(), wt() + e, Hs());
      }
      function dh(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const i = e.preOrderCheckHooks;
            null !== i && hi(t, i, n);
          } else {
            const i = e.preOrderHooks;
            null !== i && Ks(t, i, 0, n);
          }
        At(n);
      }
      function bh(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const c = e.data[i];
              li(s), c.contentQueries(2, t[i], i);
            }
          }
      }
      function ta(e, t, n, r, s, i, c, d, h, g) {
        const m = t.blueprint.slice();
        return (
          (m[0] = s),
          (m[2] = 140 | r),
          as(m),
          (m[3] = m[15] = e),
          (m[8] = n),
          (m[10] = c || (e && e[10])),
          (m[11] = d || (e && e[11])),
          (m[12] = h || (e && e[12]) || null),
          (m[9] = g || (e && e[9]) || null),
          (m[6] = i),
          (m[16] = 2 == t.type ? e[16] : m),
          m
        );
      }
      function wo(e, t, n, r, s) {
        let i = e.data[t];
        if (null === i)
          (i = (function jl(e, t, n, r, s) {
            const i = ii(),
              c = us(),
              h = (e.data[t] = (function Hy(e, t, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, c ? i : i && i.parent, n, t, r, s));
            return (
              null === e.firstChild && (e.firstChild = h),
              null !== i &&
                (c
                  ? null == i.child && null !== h.parent && (i.child = h)
                  : null === i.next && (i.next = h)),
              h
            );
          })(e, t, n, r, s)),
            (function Dc() {
              return ve.lFrame.inI18n;
            })() && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const c = (function Us() {
            const e = ve.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === c ? -1 : c.injectorIndex;
        }
        return Gt(i, !0), i;
      }
      function Mo(e, t, n, r) {
        if (0 === n) return -1;
        const s = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return s;
      }
      function na(e, t, n) {
        Gs(t);
        try {
          const r = e.viewQuery;
          null !== r && Yl(1, r, n);
          const s = e.template;
          null !== s && Ch(e, t, s, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && bh(e, t),
            e.staticViewQueries && Yl(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function jy(e, t) {
              for (let n = 0; n < t.length; n++) i_(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (
            (e.firstCreatePass &&
              ((e.incompleteFirstPass = !0), (e.firstCreatePass = !1)),
            r)
          );
        } finally {
          (t[2] &= -5), Ws();
        }
      }
      function To(e, t, n, r) {
        const s = t[2];
        if (256 == (256 & s)) return;
        Gs(t);
        const i = Hs();
        try {
          as(t),
            (function Fa(e) {
              return (ve.lFrame.bindingIndex = e);
            })(e.bindingStartIndex),
            null !== n && Ch(e, t, n, 2, r);
          const c = 3 == (3 & s);
          if (!i)
            if (c) {
              const g = e.preOrderCheckHooks;
              null !== g && hi(t, g, null);
            } else {
              const g = e.preOrderHooks;
              null !== g && Ks(t, g, 0, null), ja(t, 0);
            }
          if (
            ((function s_(e) {
              for (let t = Zi(e); null !== t; t = qi(t)) {
                if (!t[2]) continue;
                const n = t[9];
                for (let r = 0; r < n.length; r++) {
                  const s = n[r],
                    i = s[3];
                  0 == (1024 & s[2]) && js(i, 1), (s[2] |= 1024);
                }
              }
            })(t),
            (function r_(e) {
              for (let t = Zi(e); null !== t; t = qi(t))
                for (let n = 10; n < t.length; n++) {
                  const r = t[n],
                    s = r[1];
                  is(r) && To(s, r, s.template, r[8]);
                }
            })(t),
            null !== e.contentQueries && bh(e, t),
            !i)
          )
            if (c) {
              const g = e.contentCheckHooks;
              null !== g && hi(t, g);
            } else {
              const g = e.contentHooks;
              null !== g && Ks(t, g, 1), ja(t, 1);
            }
          !(function ky(e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let r = 0; r < n.length; r++) {
                  const s = n[r];
                  if (s < 0) At(~s);
                  else {
                    const i = s,
                      c = n[++r],
                      d = n[++r];
                    Ec(c, i), d(2, t[i]);
                  }
                }
              } finally {
                At(-1);
              }
          })(e, t);
          const d = e.components;
          null !== d &&
            (function By(e, t) {
              for (let n = 0; n < t.length; n++) o_(e, t[n]);
            })(t, d);
          const h = e.viewQuery;
          if ((null !== h && Yl(2, h, r), !i))
            if (c) {
              const g = e.viewCheckHooks;
              null !== g && hi(t, g);
            } else {
              const g = e.viewHooks;
              null !== g && Ks(t, g, 2), ja(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            i || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), js(t[3], -1));
        } finally {
          Ws();
        }
      }
      function Vy(e, t, n, r) {
        const s = t[10],
          i = !Hs(),
          c = (function Oa(e) {
            return 4 == (4 & e[2]);
          })(t);
        try {
          i && !c && s.begin && s.begin(), c && na(e, t, r), To(e, t, n, r);
        } finally {
          i && !c && s.end && s.end();
        }
      }
      function Ch(e, t, n, r, s) {
        const i = wt(),
          c = 2 & r;
        try {
          At(-1), c && t.length > N && dh(e, t, N, Hs()), n(r, s);
        } finally {
          At(i);
        }
      }
      function Mh(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Lu(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Lu(e, t, n, r, s, i, c, d, h, g) {
        const m = N + r,
          _ = m + s,
          w = (function Uy(e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : Se);
            return n;
          })(m, _),
          P = "function" == typeof g ? g() : g;
        return (w[1] = {
          type: e,
          blueprint: w,
          template: n,
          queries: null,
          viewQuery: d,
          declTNode: t,
          data: w.slice().fill(null, m),
          bindingStartIndex: m,
          expandoStartIndex: _,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof c ? c() : c,
          firstChild: null,
          schemas: h,
          consts: P,
          incompleteFirstPass: !1,
        });
      }
      function Sh(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const s = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, s)
              : (n[r] = [t, s]);
          }
        return n;
      }
      function xh(e, t, n, r, s, i) {
        const c = i.hostBindings;
        if (c) {
          let d = e.hostBindingOpCodes;
          null === d && (d = e.hostBindingOpCodes = []);
          const h = ~t.index;
          (function Yy(e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(d) != h && d.push(h),
            d.push(r, s, c);
        }
      }
      function Ph(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Fh(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Xy(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          qe(t) && (n[""] = e);
        }
      }
      function Rh(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Nh(e, t, n, r, s) {
        e.data[r] = s;
        const i = s.factory || (s.factory = ir(s.type)),
          c = new Ys(i, qe(s), null);
        (e.blueprint[r] = c),
          (n[r] = c),
          xh(e, t, 0, r, Mo(e, n, s.hostVars, Se), s);
      }
      function e_(e, t, n) {
        const r = $t(t, e),
          s = Mh(n),
          i = e[10],
          c = ku(
            e,
            ta(
              e,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = c;
      }
      function t_(e, t, n, r, s, i) {
        const c = i[t];
        if (null !== c) {
          const d = r.setInput;
          for (let h = 0; h < c.length; ) {
            const g = c[h++],
              m = c[h++],
              _ = c[h++];
            null !== d ? r.setInput(n, _, g, m) : (n[m] = _);
          }
        }
      }
      function n_(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const s = t[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              e.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, e[s], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function o_(e, t) {
        const n = Lt(t, e);
        if (is(n)) {
          const r = n[1];
          80 & n[2] ? To(r, n, r.template, n[8]) : n[5] > 0 && Gl(n);
        }
      }
      function Gl(e) {
        for (let r = Zi(e); null !== r; r = qi(r))
          for (let s = 10; s < r.length; s++) {
            const i = r[s];
            if (1024 & i[2]) {
              const c = i[1];
              To(c, i, c.template, i[8]);
            } else i[5] > 0 && Gl(i);
          }
        const n = e[1].components;
        if (null !== n)
          for (let r = 0; r < n.length; r++) {
            const s = Lt(n[r], e);
            is(s) && s[5] > 0 && Gl(s);
          }
      }
      function i_(e, t) {
        const n = Lt(t, e),
          r = n[1];
        (function a_(e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          na(r, n, n[8]);
      }
      function ku(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Wl(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = Zr(e);
          if (We(e) && !t) return e;
          e = t;
        }
        return null;
      }
      function Kl(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          To(e, t, e.template, n);
        } catch (s) {
          throw (Uh(t, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function kh(e) {
        !(function zl(e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = Gi(n),
              s = r[1];
            Vy(s, r, s.template, n);
          }
        })(e[8]);
      }
      function Yl(e, t, n) {
        li(0), t(e, n);
      }
      const d_ = (() => Promise.resolve(null))();
      function Bh(e) {
        return e[7] || (e[7] = []);
      }
      function jh(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Uh(e, t) {
        const n = e[9],
          r = n ? n.get(Er, null) : null;
        r && r.handleError(t);
      }
      function Cr(e, t, n) {
        const r = (function jn(e, t) {
          return it(t[e]);
        })(t, e);
        !(function Au(e, t, n) {
          et(e) ? e.setValue(t, n) : (t.textContent = n);
        })(e[11], r, n);
      }
      function Bu(e, t, n) {
        let r = n ? e.styles : null,
          s = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let c = 0; c < t.length; c++) {
            const d = t[c];
            "number" == typeof d
              ? (i = d)
              : 1 == i
              ? (s = M(s, d))
              : 2 == i && (r = M(r, d + ": " + t[++c] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      const Zl = new nt("INJECTOR", -1);
      class $h {
        get(t, n = ms) {
          if (n === ms) {
            const r = new Error(`NullInjectorError: No provider for ${b(t)}!`);
            throw ((r.name = "NullInjectorError"), r);
          }
          return n;
        }
      }
      const ql = new nt("Set Injector scope."),
        ra = {},
        p_ = {};
      let Jl;
      function Gh() {
        return void 0 === Jl && (Jl = new $h()), Jl;
      }
      function Wh(e, t = null, n = null, r) {
        const s = zh(e, t, n, r);
        return s._resolveInjectorDefTypes(), s;
      }
      function zh(e, t = null, n = null, r) {
        return new g_(e, n, t || Gh(), r);
      }
      class g_ {
        constructor(t, n, r, s = null) {
          (this.parent = r),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const i = [];
          n && zt(n, (d) => this.processProvider(d, t, n)),
            zt([t], (d) => this.processInjectorType(d, [], i)),
            this.records.set(Zl, Io(void 0, this));
          const c = this.records.get(ql);
          (this.scope = null != c ? c.value : null),
            (this.source = s || ("object" == typeof t ? null : b(t)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((t) => t.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(t, n = ms, r = we.Default) {
          this.assertNotDestroyed();
          const s = Bc(this),
            i = Vt(void 0);
          try {
            if (!(r & we.SkipSelf)) {
              let d = this.records.get(t);
              if (void 0 === d) {
                const h =
                  (function C_(e) {
                    return (
                      "function" == typeof e ||
                      ("object" == typeof e && e instanceof nt)
                    );
                  })(t) && mt(t);
                (d = h && this.injectableDefInScope(h) ? Io(Ql(t), ra) : null),
                  this.records.set(t, d);
              }
              if (null != d) return this.hydrate(t, d);
            }
            return (r & we.Self ? Gh() : this.parent).get(
              t,
              (n = r & we.Optional && n === ms ? null : n)
            );
          } catch (c) {
            if ("NullInjectorError" === c.name) {
              if (((c[io] = c[io] || []).unshift(b(t)), s)) throw c;
              return (function Si(e, t, n, r) {
                const s = e[io];
                throw (
                  (t[Ti] && s.unshift(t[Ti]),
                  (e.message = (function Pt(e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let s = b(t);
                    if (Array.isArray(t)) s = t.map(b).join(" -> ");
                    else if ("object" == typeof t) {
                      let i = [];
                      for (let c in t)
                        if (t.hasOwnProperty(c)) {
                          let d = t[c];
                          i.push(
                            c +
                              ":" +
                              ("string" == typeof d ? JSON.stringify(d) : b(d))
                          );
                        }
                      s = `{${i.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(
                      Je,
                      "\n  "
                    )}`;
                  })("\n" + e.message, s, n, r)),
                  (e.ngTokenPath = s),
                  (e[io] = null),
                  e)
                );
              })(c, t, "R3InjectorError", this.source);
            }
            throw c;
          } finally {
            Vt(i), Bc(s);
          }
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((t) => this.get(t));
        }
        toString() {
          const t = [];
          return (
            this.records.forEach((r, s) => t.push(b(s))),
            `R3Injector[${t.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed) throw new B(205, "");
        }
        processInjectorType(t, n, r) {
          if (!(t = C(t))) return !1;
          let s = Zo(t);
          const i = (null == s && t.ngModule) || void 0,
            c = void 0 === i ? t : i,
            d = -1 !== r.indexOf(c);
          if ((void 0 !== i && (s = Zo(i)), null == s)) return !1;
          if (null != s.imports && !d) {
            let m;
            r.push(c);
            try {
              zt(s.imports, (_) => {
                this.processInjectorType(_, n, r) &&
                  (void 0 === m && (m = []), m.push(_));
              });
            } finally {
            }
            if (void 0 !== m)
              for (let _ = 0; _ < m.length; _++) {
                const { ngModule: w, providers: P } = m[_];
                zt(P, ($) => this.processProvider($, w, P || Ee));
              }
          }
          this.injectorDefTypes.add(c);
          const h = ir(c) || (() => new c());
          this.records.set(c, Io(h, ra));
          const g = s.providers;
          if (null != g && !d) {
            const m = t;
            zt(g, (_) => this.processProvider(_, m, g));
          }
          return void 0 !== i && void 0 !== t.providers;
        }
        processProvider(t, n, r) {
          let s = Ao((t = C(t))) ? t : C(t && t.provide);
          const i = (function y_(e, t, n) {
            return Yh(e)
              ? Io(void 0, e.useValue)
              : Io(
                  (function Kh(e, t, n) {
                    let r;
                    if (Ao(e)) {
                      const s = C(e);
                      return ir(s) || Ql(s);
                    }
                    if (Yh(e)) r = () => C(e.useValue);
                    else if (
                      (function D_(e) {
                        return !(!e || !e.useFactory);
                      })(e)
                    )
                      r = () => e.useFactory(...Br(e.deps || []));
                    else if (
                      (function __(e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      r = () => Dt(C(e.useExisting));
                    else {
                      const s = C(e && (e.useClass || e.provide));
                      if (
                        !(function v_(e) {
                          return !!e.deps;
                        })(e)
                      )
                        return ir(s) || Ql(s);
                      r = () => new s(...Br(e.deps));
                    }
                    return r;
                  })(e),
                  ra
                );
          })(t);
          if (Ao(t) || !0 !== t.multi) this.records.get(s);
          else {
            let c = this.records.get(s);
            c ||
              ((c = Io(void 0, ra, !0)),
              (c.factory = () => Br(c.multi)),
              this.records.set(s, c)),
              (s = t),
              c.multi.push(t);
          }
          this.records.set(s, i);
        }
        hydrate(t, n) {
          return (
            n.value === ra && ((n.value = p_), (n.value = n.factory())),
            "object" == typeof n.value &&
              n.value &&
              (function b_(e) {
                return (
                  null !== e &&
                  "object" == typeof e &&
                  "function" == typeof e.ngOnDestroy
                );
              })(n.value) &&
              this.onDestroy.add(n.value),
            n.value
          );
        }
        injectableDefInScope(t) {
          if (!t.providedIn) return !1;
          const n = C(t.providedIn);
          return "string" == typeof n
            ? "any" === n || n === this.scope
            : this.injectorDefTypes.has(n);
        }
      }
      function Ql(e) {
        const t = mt(e),
          n = null !== t ? t.factory : ir(e);
        if (null !== n) return n;
        if (e instanceof nt) throw new B(204, "");
        if (e instanceof Function)
          return (function m_(e) {
            const t = e.length;
            if (t > 0)
              throw (
                ((function pr(e, t) {
                  const n = [];
                  for (let r = 0; r < e; r++) n.push(t);
                  return n;
                })(t, "?"),
                new B(204, ""))
              );
            const n = (function Os(e) {
              const t = e && (e[xn] || e[Xr]);
              if (t) {
                const n = (function xs(e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new B(204, "");
      }
      function Io(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function Yh(e) {
        return null !== e && "object" == typeof e && kc in e;
      }
      function Ao(e) {
        return "function" == typeof e;
      }
      let gn = (() => {
        class e {
          static create(n, r) {
            var s;
            if (Array.isArray(n)) return Wh({ name: "" }, r, n, "");
            {
              const i = null !== (s = n.name) && void 0 !== s ? s : "";
              return Wh({ name: i }, n.parent, n.providers, i);
            }
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = ms),
          (e.NULL = new $h()),
          (e.ɵprov = Xe({
            token: e,
            providedIn: "any",
            factory: () => Dt(Zl),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function x_(e, t) {
        zs(Gi(e)[1], rt());
      }
      let ju = null;
      function So() {
        if (!ju) {
          const e = Le.Symbol;
          if (e && e.iterator) ju = e.iterator;
          else {
            const t = Object.getOwnPropertyNames(Map.prototype);
            for (let n = 0; n < t.length; ++n) {
              const r = t[n];
              "entries" !== r &&
                "size" !== r &&
                Map.prototype[r] === Map.prototype.entries &&
                (ju = r);
            }
          }
        }
        return ju;
      }
      function sa(e) {
        return (
          !!nd(e) && (Array.isArray(e) || (!(e instanceof Map) && So() in e))
        );
      }
      function nd(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function Ft(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function Cs(e, t, n, r) {
        const s = Ft(e, t, n);
        return Ft(e, t + 1, r) || s;
      }
      function xo(e, t, n, r) {
        return Ft(
          e,
          (function cr() {
            return ve.lFrame.bindingIndex++;
          })(),
          n
        )
          ? t + W(n) + r
          : Se;
      }
      function Fo(e, t, n, r, s, i, c, d) {
        const g = (function Vu(e, t, n, r, s) {
          const i = Cs(e, t, n, r);
          return Ft(e, t + 2, s) || i;
        })(e, Dn(), n, s, c);
        return En(3), g ? t + W(n) + r + W(s) + i + W(c) + d : Se;
      }
      function ia(e, t = we.Default) {
        const n = K();
        return null === n ? Dt(e, t) : _i(rt(), n, C(e), t);
      }
      function ad(e, t, n, r, s) {
        const c = s ? "class" : "style";
        !(function Hh(e, t, n, r, s) {
          for (let i = 0; i < n.length; ) {
            const c = n[i++],
              d = n[i++],
              h = t[c],
              g = e.data[c];
            null !== g.setInput ? g.setInput(h, s, r, d) : (h[d] = s);
          }
        })(e, n, t.inputs[c], c, r);
      }
      function ud(e, t, n, r) {
        const s = K(),
          i = Ne(),
          c = N + e,
          d = s[11],
          h = (s[c] = Qi(
            d,
            t,
            (function Of() {
              return ve.lFrame.currentNamespace;
            })()
          )),
          g = i.firstCreatePass
            ? (function fD(e, t, n, r, s, i, c) {
                const d = t.consts,
                  g = wo(t, e, 2, s, Jt(d, i));
                return (
                  (function Hl(e, t, n, r) {
                    let s = !1;
                    if (oi()) {
                      const i = (function Jy(e, t, n) {
                          const r = e.directiveRegistry;
                          let s = null;
                          if (r)
                            for (let i = 0; i < r.length; i++) {
                              const c = r[i];
                              uh(n, c.selectors, !1) &&
                                (s || (s = []),
                                eo(Nr(n, t), e, c.type),
                                qe(c) ? (Fh(e, n), s.unshift(c)) : s.push(c));
                            }
                          return s;
                        })(e, t, n),
                        c = null === r ? null : { "": -1 };
                      if (null !== i) {
                        (s = !0), Rh(n, e.data.length, i.length);
                        for (let m = 0; m < i.length; m++) {
                          const _ = i[m];
                          _.providersResolver && _.providersResolver(_);
                        }
                        let d = !1,
                          h = !1,
                          g = Mo(e, t, i.length, null);
                        for (let m = 0; m < i.length; m++) {
                          const _ = i[m];
                          (n.mergedAttrs = lr(n.mergedAttrs, _.hostAttrs)),
                            Nh(e, n, t, g, _),
                            Xy(g, _, c),
                            null !== _.contentQueries && (n.flags |= 8),
                            (null !== _.hostBindings ||
                              null !== _.hostAttrs ||
                              0 !== _.hostVars) &&
                              (n.flags |= 128);
                          const w = _.type.prototype;
                          !d &&
                            (w.ngOnChanges || w.ngOnInit || w.ngDoCheck) &&
                            ((e.preOrderHooks || (e.preOrderHooks = [])).push(
                              n.index
                            ),
                            (d = !0)),
                            !h &&
                              (w.ngOnChanges || w.ngDoCheck) &&
                              ((
                                e.preOrderCheckHooks ||
                                (e.preOrderCheckHooks = [])
                              ).push(n.index),
                              (h = !0)),
                            g++;
                        }
                        !(function $y(e, t) {
                          const r = t.directiveEnd,
                            s = e.data,
                            i = t.attrs,
                            c = [];
                          let d = null,
                            h = null;
                          for (let g = t.directiveStart; g < r; g++) {
                            const m = s[g],
                              _ = m.inputs,
                              w = null === i || ah(t) ? null : n_(_, i);
                            c.push(w),
                              (d = Sh(_, g, d)),
                              (h = Sh(m.outputs, g, h));
                          }
                          null !== d &&
                            (d.hasOwnProperty("class") && (t.flags |= 16),
                            d.hasOwnProperty("style") && (t.flags |= 32)),
                            (t.initialInputs = c),
                            (t.inputs = d),
                            (t.outputs = h);
                        })(e, n);
                      }
                      c &&
                        (function Qy(e, t, n) {
                          if (t) {
                            const r = (e.localNames = []);
                            for (let s = 0; s < t.length; s += 2) {
                              const i = n[t[s + 1]];
                              if (null == i)
                                throw new B(
                                  -301,
                                  `Export of name '${t[s + 1]}' not found!`
                                );
                              r.push(t[s], i);
                            }
                          }
                        })(n, r, c);
                    }
                    return (n.mergedAttrs = lr(n.mergedAttrs, n.attrs)), s;
                  })(t, n, g, Jt(d, c)),
                  null !== g.attrs && Bu(g, g.attrs, !1),
                  null !== g.mergedAttrs && Bu(g, g.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, g),
                  g
                );
              })(c, i, s, 0, t, n, r)
            : i.data[c];
        Gt(g, !0);
        const m = g.mergedAttrs;
        null !== m && pi(d, h, m);
        const _ = g.classes;
        null !== _ && Bt(d, h, _);
        const w = g.styles;
        null !== w && ct(d, h, w),
          64 != (64 & g.flags) && Pe(i, s, h, g),
          0 ===
            (function xa() {
              return ve.lFrame.elementDepthCount;
            })() && Tt(h, s),
          (function ri() {
            ve.lFrame.elementDepthCount++;
          })(),
          Ge(g) &&
            ((function Vl(e, t, n) {
              !oi() ||
                ((function Zy(e, t, n, r) {
                  const s = n.directiveStart,
                    i = n.directiveEnd;
                  e.firstCreatePass || Nr(n, t), Tt(r, t);
                  const c = n.initialInputs;
                  for (let d = s; d < i; d++) {
                    const h = e.data[d],
                      g = qe(h);
                    g && e_(t, n, h);
                    const m = cs(t, e, d, n);
                    Tt(m, t),
                      null !== c && t_(0, d - s, m, h, 0, c),
                      g && (Lt(n.index, t)[8] = m);
                  }
                })(e, t, n, $t(n, t)),
                128 == (128 & n.flags) &&
                  (function qy(e, t, n) {
                    const r = n.directiveStart,
                      s = n.directiveEnd,
                      c = n.index,
                      d = (function vc() {
                        return ve.lFrame.currentDirectiveIndex;
                      })();
                    try {
                      At(c);
                      for (let h = r; h < s; h++) {
                        const g = e.data[h],
                          m = t[h];
                        ui(h),
                          (null !== g.hostBindings ||
                            0 !== g.hostVars ||
                            null !== g.hostAttrs) &&
                            Ph(g, m);
                      }
                    } finally {
                      At(-1), ui(d);
                    }
                  })(e, t, n));
            })(i, s, g),
            (function wh(e, t, n) {
              if (xe(t)) {
                const s = t.directiveEnd;
                for (let i = t.directiveStart; i < s; i++) {
                  const c = e.data[i];
                  c.contentQueries && c.contentQueries(1, n[i], i);
                }
              }
            })(i, g, s)),
          null !== r &&
            (function Ul(e, t, n = $t) {
              const r = t.localNames;
              if (null !== r) {
                let s = t.index + 1;
                for (let i = 0; i < r.length; i += 2) {
                  const c = r[i + 1],
                    d = -1 === c ? n(t, e) : e[c];
                  e[s++] = d;
                }
              }
            })(s, g);
      }
      function cd() {
        let e = rt();
        us()
          ? (function ai() {
              ve.lFrame.isParent = !1;
            })()
          : ((e = e.parent), Gt(e, !1));
        const t = e;
        !(function si() {
          ve.lFrame.elementDepthCount--;
        })();
        const n = Ne();
        n.firstCreatePass && (zs(n, e), xe(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function Nf(e) {
              return 0 != (16 & e.flags);
            })(t) &&
            ad(n, t, K(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function Lf(e) {
              return 0 != (32 & e.flags);
            })(t) &&
            ad(n, t, K(), t.stylesWithoutHost, !1);
      }
      function Sp(e, t, n, r) {
        ud(e, t, n, r), cd();
      }
      function ld(e) {
        return !!e && "function" == typeof e.then;
      }
      function Pp(e) {
        return !!e && "function" == typeof e.subscribe;
      }
      const mD = Pp;
      function dd(e, t, n, r) {
        const s = K(),
          i = Ne(),
          c = rt();
        return (
          (function Rp(e, t, n, r, s, i, c, d) {
            const h = Ge(r),
              m = e.firstCreatePass && jh(e),
              _ = t[8],
              w = Bh(t);
            let P = !0;
            if (3 & r.type || d) {
              const oe = $t(r, t),
                ce = d ? d(oe) : oe,
                z = w.length,
                ge = d ? (Fe) => d(it(Fe[r.index])) : r.index;
              if (et(n)) {
                let Fe = null;
                if (
                  (!d &&
                    h &&
                    (Fe = (function yD(e, t, n, r) {
                      const s = e.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const c = s[i];
                          if (c === n && s[i + 1] === r) {
                            const d = t[7],
                              h = s[i + 2];
                            return d.length > h ? d[h] : null;
                          }
                          "string" == typeof c && (i += 2);
                        }
                      return null;
                    })(e, t, s, r.index)),
                  null !== Fe)
                )
                  ((Fe.__ngLastListenerFn__ || Fe).__ngNextListenerFn__ = i),
                    (Fe.__ngLastListenerFn__ = i),
                    (P = !1);
                else {
                  i = fd(r, t, _, i, !1);
                  const $e = n.listen(ce, s, i);
                  w.push(i, $e), m && m.push(s, ge, z, z + 1);
                }
              } else
                (i = fd(r, t, _, i, !0)),
                  ce.addEventListener(s, i, c),
                  w.push(i),
                  m && m.push(s, ge, z, c);
            } else i = fd(r, t, _, i, !1);
            const $ = r.outputs;
            let X;
            if (P && null !== $ && (X = $[s])) {
              const oe = X.length;
              if (oe)
                for (let ce = 0; ce < oe; ce += 2) {
                  const tn = t[X[ce]][X[ce + 1]].subscribe(i),
                    Ts = w.length;
                  w.push(i, tn), m && m.push(s, r.index, Ts, -(Ts + 1));
                }
            }
          })(i, s, s[11], c, e, t, !!n, r),
          dd
        );
      }
      function Np(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return Uh(e, s), !1;
        }
      }
      function fd(e, t, n, r, s) {
        return function i(c) {
          if (c === Function) return r;
          const d = 2 & e.flags ? Lt(e.index, t) : t;
          0 == (32 & t[2]) && Wl(d);
          let h = Np(t, 0, r, c),
            g = i.__ngNextListenerFn__;
          for (; g; ) (h = Np(t, 0, g, c) && h), (g = g.__ngNextListenerFn__);
          return s && !1 === h && (c.preventDefault(), (c.returnValue = !1)), h;
        };
      }
      function ig(e, t = "") {
        const n = K(),
          r = Ne(),
          s = e + N,
          i = r.firstCreatePass ? wo(r, s, 1, t, null) : r.data[s],
          c = (n[s] = (function Ji(e, t) {
            return et(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        Pe(r, n, c, i), Gt(i, !1);
      }
      function gd(e) {
        return md("", e, ""), gd;
      }
      function md(e, t, n) {
        const r = K(),
          s = xo(r, e, t, n);
        return s !== Se && Cr(r, wt(), s), md;
      }
      function yd(e, t, n, r, s) {
        const i = K(),
          c = (function Po(e, t, n, r, s, i) {
            const d = Cs(e, Dn(), n, s);
            return En(2), d ? t + W(n) + r + W(s) + i : Se;
          })(i, e, t, n, r, s);
        return c !== Se && Cr(i, wt(), c), yd;
      }
      function _d(e, t, n, r, s, i, c) {
        const d = K(),
          h = Fo(d, e, t, n, r, s, i, c);
        return h !== Se && Cr(d, wt(), h), _d;
      }
      const ws = void 0;
      var oE = [
        "en",
        [["a", "p"], ["AM", "PM"], ws],
        [["AM", "PM"], ws, ws],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        ws,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        ws,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", ws, "{1} 'at' {0}", ws],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function sE(e) {
          const n = Math.floor(Math.abs(e)),
            r = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === n && 0 === r ? 1 : 5;
        },
      ];
      let Uo = {};
      function Dd(e) {
        const t = (function iE(e) {
          return e.toLowerCase().replace(/_/g, "-");
        })(e);
        let n = Mg(t);
        if (n) return n;
        const r = t.split("-")[0];
        if (((n = Mg(r)), n)) return n;
        if ("en" === r) return oE;
        throw new Error(`Missing locale data for the locale "${e}".`);
      }
      function wg(e) {
        return Dd(e)[De.PluralCase];
      }
      function Mg(e) {
        return (
          e in Uo ||
            (Uo[e] =
              Le.ng &&
              Le.ng.common &&
              Le.ng.common.locales &&
              Le.ng.common.locales[e]),
          Uo[e]
        );
      }
      var De = (() => (
        ((De = De || {})[(De.LocaleId = 0)] = "LocaleId"),
        (De[(De.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
        (De[(De.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
        (De[(De.DaysFormat = 3)] = "DaysFormat"),
        (De[(De.DaysStandalone = 4)] = "DaysStandalone"),
        (De[(De.MonthsFormat = 5)] = "MonthsFormat"),
        (De[(De.MonthsStandalone = 6)] = "MonthsStandalone"),
        (De[(De.Eras = 7)] = "Eras"),
        (De[(De.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
        (De[(De.WeekendRange = 9)] = "WeekendRange"),
        (De[(De.DateFormat = 10)] = "DateFormat"),
        (De[(De.TimeFormat = 11)] = "TimeFormat"),
        (De[(De.DateTimeFormat = 12)] = "DateTimeFormat"),
        (De[(De.NumberSymbols = 13)] = "NumberSymbols"),
        (De[(De.NumberFormats = 14)] = "NumberFormats"),
        (De[(De.CurrencyCode = 15)] = "CurrencyCode"),
        (De[(De.CurrencySymbol = 16)] = "CurrencySymbol"),
        (De[(De.CurrencyName = 17)] = "CurrencyName"),
        (De[(De.Currencies = 18)] = "Currencies"),
        (De[(De.Directionality = 19)] = "Directionality"),
        (De[(De.PluralCase = 20)] = "PluralCase"),
        (De[(De.ExtraData = 21)] = "ExtraData"),
        De
      ))();
      const $u = "en-US";
      let Tg = $u;
      class Jg {}
      class uv {
        resolveComponentFactory(t) {
          throw (function av(e) {
            const t = Error(
              `No component factory found for ${b(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(t);
        }
      }
      let fa = (() => {
        class e {}
        return (e.NULL = new uv()), e;
      })();
      function cv() {
        return $o(rt(), K());
      }
      function $o(e, t) {
        return new ha($t(e, t));
      }
      let ha = (() => {
        class e {
          constructor(n) {
            this.nativeElement = n;
          }
        }
        return (e.__NG_ELEMENT_ID__ = cv), e;
      })();
      class Xg {}
      let dv = (() => {
          class e {}
          return (
            (e.__NG_ELEMENT_ID__ = () =>
              (function hv() {
                const e = K(),
                  n = Lt(rt().index, e);
                return (function fv(e) {
                  return e[11];
                })(Y(n) ? n : e);
              })()),
            e
          );
        })(),
        pv = (() => {
          class e {}
          return (
            (e.ɵprov = Xe({
              token: e,
              providedIn: "root",
              factory: () => null,
            })),
            e
          );
        })();
      class em {
        constructor(t) {
          (this.full = t),
            (this.major = t.split(".")[0]),
            (this.minor = t.split(".")[1]),
            (this.patch = t.split(".").slice(2).join("."));
        }
      }
      const gv = new em("13.1.3"),
        Td = {};
      function Yu(e, t, n, r, s = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(it(i)), Q(i)))
            for (let d = 10; d < i.length; d++) {
              const h = i[d],
                g = h[1].firstChild;
              null !== g && Yu(h[1], h, g, r);
            }
          const c = n.type;
          if (8 & c) Yu(e, t, n.child, r);
          else if (32 & c) {
            const d = bo(n, t);
            let h;
            for (; (h = d()); ) r.push(h);
          } else if (16 & c) {
            const d = be(t, n);
            if (Array.isArray(d)) r.push(...d);
            else {
              const h = Zr(t[16]);
              Yu(h[1], h, d, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class pa {
        constructor(t, n) {
          (this._lView = t),
            (this._cdRefInjectingView = n),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const t = this._lView,
            n = t[1];
          return Yu(n, t, n.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        set context(t) {
          this._lView[8] = t;
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const t = this._lView[3];
            if (Q(t)) {
              const n = t[8],
                r = n ? n.indexOf(this) : -1;
              r > -1 && (ea(t, r), hr(n, r));
            }
            this._attachedToViewContainer = !1;
          }
          xu(this._lView[1], this._lView);
        }
        onDestroy(t) {
          !(function Ah(e, t, n, r) {
            const s = Bh(t);
            null === n
              ? s.push(r)
              : (s.push(n), e.firstCreatePass && jh(e).push(r, s.length - 1));
          })(this._lView[1], this._lView, null, t);
        }
        markForCheck() {
          Wl(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Kl(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function c_(e, t, n) {
            $s(!0);
            try {
              Kl(e, t, n);
            } finally {
              $s(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef) throw new B(902, "");
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          (this._appRef = null),
            (function Cl(e, t) {
              se(e, t, t[11], 2, null, null);
            })(this._lView[1], this._lView);
        }
        attachToAppRef(t) {
          if (this._attachedToViewContainer) throw new B(902, "");
          this._appRef = t;
        }
      }
      class mv extends pa {
        constructor(t) {
          super(t), (this._view = t);
        }
        detectChanges() {
          kh(this._view);
        }
        checkNoChanges() {
          !(function l_(e) {
            $s(!0);
            try {
              kh(e);
            } finally {
              $s(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      class tm extends fa {
        constructor(t) {
          super(), (this.ngModule = t);
        }
        resolveComponentFactory(t) {
          const n = at(t);
          return new Id(n, this.ngModule);
        }
      }
      function nm(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const _v = new nt("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => zi,
      });
      class Id extends Jg {
        constructor(t, n) {
          super(),
            (this.componentDef = t),
            (this.ngModule = n),
            (this.componentType = t.type),
            (this.selector = (function My(e) {
              return e.map(wy).join(",");
            })(t.selectors)),
            (this.ngContentSelectors = t.ngContentSelectors
              ? t.ngContentSelectors
              : []),
            (this.isBoundToModule = !!n);
        }
        get inputs() {
          return nm(this.componentDef.inputs);
        }
        get outputs() {
          return nm(this.componentDef.outputs);
        }
        create(t, n, r, s) {
          const i = (s = s || this.ngModule)
              ? (function Dv(e, t) {
                  return {
                    get: (n, r, s) => {
                      const i = e.get(n, Td, s);
                      return i !== Td || r === Td ? i : t.get(n, r, s);
                    },
                  };
                })(t, s.injector)
              : t,
            c = i.get(Xg, Aa),
            d = i.get(pv, null),
            h = c.createRenderer(null, this.componentDef),
            g = this.componentDef.selectors[0][0] || "div",
            m = r
              ? (function Ih(e, t, n) {
                  if (et(e)) return e.selectRootElement(t, n === ke.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(h, r, this.componentDef.encapsulation)
              : Qi(
                  c.createRenderer(null, this.componentDef),
                  g,
                  (function yv(e) {
                    const t = e.toLowerCase();
                    return "svg" === t
                      ? "http://www.w3.org/2000/svg"
                      : "math" === t
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(g)
                ),
            _ = this.componentDef.onPush ? 576 : 528,
            w = (function op(e, t) {
              return {
                components: [],
                scheduler: e || zi,
                clean: d_,
                playerHandler: t || null,
                flags: 0,
              };
            })(),
            P = Lu(0, null, null, 1, 0, null, null, null, null, null),
            $ = ta(null, P, w, _, null, null, c, h, d, i);
          let X, oe;
          Gs($);
          try {
            const ce = (function rp(e, t, n, r, s, i) {
              const c = n[1];
              n[20] = e;
              const h = wo(c, 20, 2, "#host", null),
                g = (h.mergedAttrs = t.hostAttrs);
              null !== g &&
                (Bu(h, g, !0),
                null !== e &&
                  (pi(s, e, g),
                  null !== h.classes && Bt(s, e, h.classes),
                  null !== h.styles && ct(s, e, h.styles)));
              const m = r.createRenderer(e, t),
                _ = ta(
                  n,
                  Mh(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  h,
                  r,
                  m,
                  i || null,
                  null
                );
              return (
                c.firstCreatePass &&
                  (eo(Nr(h, n), c, t.type), Fh(c, h), Rh(h, n.length, 1)),
                ku(n, _),
                (n[20] = _)
              );
            })(m, this.componentDef, $, c, h);
            if (m)
              if (r) pi(h, m, ["ng-version", gv.full]);
              else {
                const { attrs: z, classes: ge } = (function Ty(e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Mn(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                z && pi(h, m, z), ge && ge.length > 0 && Bt(h, m, ge.join(" "));
              }
            if (
              ((oe = (function ni(e, t) {
                return e.data[t];
              })(P, N)),
              void 0 !== n)
            ) {
              const z = (oe.projection = []);
              for (let ge = 0; ge < this.ngContentSelectors.length; ge++) {
                const Fe = n[ge];
                z.push(null != Fe ? Array.from(Fe) : null);
              }
            }
            (X = (function sp(e, t, n, r, s) {
              const i = n[1],
                c = (function Ky(e, t, n) {
                  const r = rt();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Nh(e, r, t, Mo(e, t, 1, null), n));
                  const s = cs(t, e, r.directiveStart, r);
                  Tt(s, t);
                  const i = $t(r, t);
                  return i && Tt(i, t), s;
                })(i, n, t);
              if (
                (r.components.push(c),
                (e[8] = c),
                s && s.forEach((h) => h(c, t)),
                t.contentQueries)
              ) {
                const h = rt();
                t.contentQueries(1, c, h.directiveStart);
              }
              const d = rt();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (At(d.index),
                  xh(n[1], d, 0, d.directiveStart, d.directiveEnd, t),
                  Ph(t, c)),
                c
              );
            })(ce, this.componentDef, $, w, [x_])),
              na(P, $, null);
          } finally {
            Ws();
          }
          return new vv(this.componentType, X, $o(oe, $), $, oe);
        }
      }
      class vv extends class iv {} {
        constructor(t, n, r, s, i) {
          super(),
            (this.location = r),
            (this._rootLView = s),
            (this._tNode = i),
            (this.instance = n),
            (this.hostView = this.changeDetectorRef = new mv(s)),
            (this.componentType = t);
        }
        get injector() {
          return new fr(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(t) {
          this.hostView.onDestroy(t);
        }
      }
      class Go {}
      const Wo = new Map();
      class om extends Go {
        constructor(t, n) {
          super(),
            (this._parent = n),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new tm(this));
          const r = _t(t);
          (this._bootstrapComponents = Kt(r.bootstrap)),
            (this._r3Injector = zh(
              t,
              n,
              [
                { provide: Go, useValue: this },
                { provide: fa, useValue: this.componentFactoryResolver },
              ],
              b(t)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(t));
        }
        get(t, n = gn.THROW_IF_NOT_FOUND, r = we.Default) {
          return t === gn || t === Go || t === Zl
            ? this
            : this._r3Injector.get(t, n, r);
        }
        destroy() {
          const t = this._r3Injector;
          !t.destroyed && t.destroy(),
            this.destroyCbs.forEach((n) => n()),
            (this.destroyCbs = null);
        }
        onDestroy(t) {
          this.destroyCbs.push(t);
        }
      }
      class Ad extends class Cv {} {
        constructor(t) {
          super(),
            (this.moduleType = t),
            null !== _t(t) &&
              (function wv(e) {
                const t = new Set();
                !(function n(r) {
                  const s = _t(r, !0),
                    i = s.id;
                  null !== i &&
                    ((function rm(e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${b(
                            t
                          )} vs ${b(t.name)}`
                        );
                    })(i, Wo.get(i), r),
                    Wo.set(i, r));
                  const c = Kt(s.imports);
                  for (const d of c) t.has(d) || (t.add(d), n(d));
                })(e);
              })(t);
        }
        create(t) {
          return new om(this.moduleType, t);
        }
      }
      function im(e, t, n, r, s, i) {
        const c = t + n;
        return Ft(e, c, s)
          ? (function Yn(e, t, n) {
              return (e[t] = n);
            })(e, c + 1, i ? r.call(i, s) : r(s))
          : (function ga(e, t) {
              const n = e[t];
              return n === Se ? void 0 : n;
            })(e, c + 1);
      }
      function dm(e, t) {
        const n = Ne();
        let r;
        const s = e + N;
        n.firstCreatePass
          ? ((r = (function Nv(e, t) {
              if (t)
                for (let n = t.length - 1; n >= 0; n--) {
                  const r = t[n];
                  if (e === r.name) return r;
                }
            })(t, n.pipeRegistry)),
            (n.data[s] = r),
            r.onDestroy &&
              (n.destroyHooks || (n.destroyHooks = [])).push(s, r.onDestroy))
          : (r = n.data[s]);
        const i = r.factory || (r.factory = ir(r.type)),
          c = Vt(ia);
        try {
          const d = Js(!1),
            h = i();
          return (
            Js(d),
            (function G_(e, t, n, r) {
              n >= e.data.length &&
                ((e.data[n] = null), (e.blueprint[n] = null)),
                (t[n] = r);
            })(n, K(), s, h),
            h
          );
        } finally {
          Vt(c);
        }
      }
      function fm(e, t, n) {
        const r = e + N,
          s = K(),
          i = (function ur(e, t) {
            return e[t];
          })(s, r);
        return (function ma(e, t) {
          return e[1].data[t].pure;
        })(s, r)
          ? im(
              s,
              (function Ct() {
                const e = ve.lFrame;
                let t = e.bindingRootIndex;
                return (
                  -1 === t &&
                    (t = e.bindingRootIndex = e.tView.bindingStartIndex),
                  t
                );
              })(),
              t,
              i.transform,
              n,
              i
            )
          : i.transform(n);
      }
      function Sd(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const wr = class Vv extends f.xQ {
        constructor(t = !1) {
          super(), (this.__isAsync = t);
        }
        emit(t) {
          super.next(t);
        }
        subscribe(t, n, r) {
          var s, i, c;
          let d = t,
            h = n || (() => null),
            g = r;
          if (t && "object" == typeof t) {
            const _ = t;
            (d = null === (s = _.next) || void 0 === s ? void 0 : s.bind(_)),
              (h = null === (i = _.error) || void 0 === i ? void 0 : i.bind(_)),
              (g =
                null === (c = _.complete) || void 0 === c ? void 0 : c.bind(_));
          }
          this.__isAsync && ((h = Sd(h)), d && (d = Sd(d)), g && (g = Sd(g)));
          const m = super.subscribe({ next: d, error: h, complete: g });
          return t instanceof L.w && t.add(m), m;
        }
      };
      Symbol;
      let ya = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Gv), e;
      })();
      const Hv = ya,
        $v = class extends Hv {
          constructor(t, n, r) {
            super(),
              (this._declarationLView = t),
              (this._declarationTContainer = n),
              (this.elementRef = r);
          }
          createEmbeddedView(t) {
            const n = this._declarationTContainer.tViews,
              r = ta(
                this._declarationLView,
                n,
                t,
                16,
                null,
                n.declTNode,
                null,
                null,
                null,
                null
              );
            r[17] = this._declarationLView[this._declarationTContainer.index];
            const i = this._declarationLView[19];
            return (
              null !== i && (r[19] = i.createEmbeddedView(n)),
              na(n, r, t),
              new pa(r)
            );
          }
        };
      function Gv() {
        return (function Zu(e, t) {
          return 4 & e.type ? new $v(t, e, $o(e, t)) : null;
        })(rt(), K());
      }
      let qu = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Wv), e;
      })();
      function Wv() {
        return (function gm(e, t) {
          let n;
          const r = t[e.index];
          if (Q(r)) n = r;
          else {
            let s;
            if (8 & e.type) s = it(r);
            else {
              const i = t[11];
              s = i.createComment("");
              const c = $t(e, t);
              u(
                i,
                D(i, c),
                s,
                (function A(e, t) {
                  return et(e) ? e.nextSibling(t) : t.nextSibling;
                })(i, c),
                !1
              );
            }
            (t[e.index] = n =
              (function Lh(e, t, n, r) {
                return new Array(e, !0, !1, t, null, 0, r, n, null, null);
              })(r, t, s, e)),
              ku(t, n);
          }
          return new hm(n, e, t);
        })(rt(), K());
      }
      const zv = qu,
        hm = class extends zv {
          constructor(t, n, r) {
            super(),
              (this._lContainer = t),
              (this._hostTNode = n),
              (this._hostLView = r);
          }
          get element() {
            return $o(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new fr(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const t = Xs(this._hostTNode, this._hostLView);
            if (Un(t)) {
              const n = Rr(t, this._hostLView),
                r = Fr(t);
              return new fr(n[1].data[r + 8], n);
            }
            return new fr(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(t) {
            const n = pm(this._lContainer);
            return (null !== n && n[t]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(t, n, r) {
            const s = t.createEmbeddedView(n || {});
            return this.insert(s, r), s;
          }
          createComponent(t, n, r, s, i) {
            const c =
              t &&
              !(function ps(e) {
                return "function" == typeof e;
              })(t);
            let d;
            if (c) d = n;
            else {
              const _ = n || {};
              (d = _.index),
                (r = _.injector),
                (s = _.projectableNodes),
                (i = _.ngModuleRef);
            }
            const h = c ? t : new Id(at(t)),
              g = r || this.parentInjector;
            if (!i && null == h.ngModule && g) {
              const _ = g.get(Go, null);
              _ && (i = _);
            }
            const m = h.create(g, s, void 0, i);
            return this.insert(m.hostView, d), m;
          }
          insert(t, n) {
            const r = t._lView,
              s = r[1];
            if (
              (function pc(e) {
                return Q(e[3]);
              })(r)
            ) {
              const m = this.indexOf(t);
              if (-1 !== m) this.detach(m);
              else {
                const _ = r[3],
                  w = new hm(_, _[6], _[3]);
                w.detach(w.indexOf(t));
              }
            }
            const i = this._adjustIndex(n),
              c = this._lContainer;
            !(function wl(e, t, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[s]), bi(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const c = t[17];
              null !== c &&
                n !== c &&
                (function Ml(e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(c, t);
              const d = t[19];
              null !== d && d.insertView(e), (t[2] |= 128);
            })(s, r, c, i);
            const d = pt(i, c),
              h = r[11],
              g = D(h, c[7]);
            return (
              null !== g &&
                (function Su(e, t, n, r, s, i) {
                  (r[0] = s), (r[6] = t), se(e, r, n, 1, s, i);
                })(s, c[6], h, r, g, d),
              t.attachToViewContainerRef(),
              bi(xd(c), i, t),
              t
            );
          }
          move(t, n) {
            return this.insert(t, n);
          }
          indexOf(t) {
            const n = pm(this._lContainer);
            return null !== n ? n.indexOf(t) : -1;
          }
          remove(t) {
            const n = this._adjustIndex(t, -1),
              r = ea(this._lContainer, n);
            r && (hr(xd(this._lContainer), n), xu(r[1], r));
          }
          detach(t) {
            const n = this._adjustIndex(t, -1),
              r = ea(this._lContainer, n);
            return r && null != hr(xd(this._lContainer), n) ? new pa(r) : null;
          }
          _adjustIndex(t, n = 0) {
            return null == t ? this.length + n : t;
          }
        };
      function pm(e) {
        return e[8];
      }
      function xd(e) {
        return e[8] || (e[8] = []);
      }
      function Xu(...e) {}
      const Hd = new nt("Application Initializer");
      let Ko = (() => {
        class e {
          constructor(n) {
            (this.appInits = n),
              (this.resolve = Xu),
              (this.reject = Xu),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((r, s) => {
                (this.resolve = r), (this.reject = s);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const n = [],
              r = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let s = 0; s < this.appInits.length; s++) {
                const i = this.appInits[s]();
                if (ld(i)) n.push(i);
                else if (mD(i)) {
                  const c = new Promise((d, h) => {
                    i.subscribe({ complete: d, error: h });
                  });
                  n.push(c);
                }
              }
            Promise.all(n)
              .then(() => {
                r();
              })
              .catch((s) => {
                this.reject(s);
              }),
              0 === n.length && r(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(Hd, 8));
          }),
          (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const km = new nt("AppId"),
        Cb = {
          provide: km,
          useFactory: function bb() {
            return `${$d()}${$d()}${$d()}`;
          },
          deps: [],
        };
      function $d() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const Bm = new nt("Platform Initializer"),
        jm = new nt("Platform ID"),
        wb = new nt("appBootstrapListener");
      let Mb = (() => {
        class e {
          log(n) {
            console.log(n);
          }
          warn(n) {
            console.warn(n);
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const ec = new nt("LocaleId"),
        Vm = new nt("DefaultCurrencyCode");
      class Tb {
        constructor(t, n) {
          (this.ngModuleFactory = t), (this.componentFactories = n);
        }
      }
      let Um = (() => {
        class e {
          compileModuleSync(n) {
            return new Ad(n);
          }
          compileModuleAsync(n) {
            return Promise.resolve(this.compileModuleSync(n));
          }
          compileModuleAndAllComponentsSync(n) {
            const r = this.compileModuleSync(n),
              i = Kt(_t(n).declarations).reduce((c, d) => {
                const h = at(d);
                return h && c.push(new Id(h)), c;
              }, []);
            return new Tb(r, i);
          }
          compileModuleAndAllComponentsAsync(n) {
            return Promise.resolve(this.compileModuleAndAllComponentsSync(n));
          }
          clearCache() {}
          clearCacheFor(n) {}
          getModuleId(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)();
          }),
          (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ab = (() => Promise.resolve(0))();
      function Gd(e) {
        "undefined" == typeof Zone
          ? Ab.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class en {
        constructor({
          enableLongStackTrace: t = !1,
          shouldCoalesceEventChangeDetection: n = !1,
          shouldCoalesceRunChangeDetection: r = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new wr(!1)),
            (this.onMicrotaskEmpty = new wr(!1)),
            (this.onStable = new wr(!1)),
            (this.onError = new wr(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched();
          const s = this;
          (s._nesting = 0),
            (s._outer = s._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (s._inner = s._inner.fork(new Zone.TaskTrackingZoneSpec())),
            t &&
              Zone.longStackTraceZoneSpec &&
              (s._inner = s._inner.fork(Zone.longStackTraceZoneSpec)),
            (s.shouldCoalesceEventChangeDetection = !r && n),
            (s.shouldCoalesceRunChangeDetection = r),
            (s.lastRequestAnimationFrameId = -1),
            (s.nativeRequestAnimationFrame = (function Sb() {
              let e = Le.requestAnimationFrame,
                t = Le.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function Pb(e) {
              const t = () => {
                !(function xb(e) {
                  e.isCheckStableRunning ||
                    -1 !== e.lastRequestAnimationFrameId ||
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Le, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                zd(e),
                                (e.isCheckStableRunning = !0),
                                Wd(e),
                                (e.isCheckStableRunning = !1);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    zd(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, c, d) => {
                  try {
                    return Hm(e), n.invokeTask(s, i, c, d);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      $m(e);
                  }
                },
                onInvoke: (n, r, s, i, c, d, h) => {
                  try {
                    return Hm(e), n.invoke(s, i, c, d, h);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), $m(e);
                  }
                },
                onHasTask: (n, r, s, i) => {
                  n.hasTask(s, i),
                    r === s &&
                      ("microTask" == i.change
                        ? ((e._hasPendingMicrotasks = i.microTask),
                          zd(e),
                          Wd(e))
                        : "macroTask" == i.change &&
                          (e.hasPendingMacrotasks = i.macroTask));
                },
                onHandleError: (n, r, s, i) => (
                  n.handleError(s, i),
                  e.runOutsideAngular(() => e.onError.emit(i)),
                  !1
                ),
              });
            })(s);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!en.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (en.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(t, n, r) {
          return this._inner.run(t, n, r);
        }
        runTask(t, n, r, s) {
          const i = this._inner,
            c = i.scheduleEventTask("NgZoneEvent: " + s, t, Ob, Xu, Xu);
          try {
            return i.runTask(c, n, r);
          } finally {
            i.cancelTask(c);
          }
        }
        runGuarded(t, n, r) {
          return this._inner.runGuarded(t, n, r);
        }
        runOutsideAngular(t) {
          return this._outer.run(t);
        }
      }
      const Ob = {};
      function Wd(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function zd(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function Hm(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function $m(e) {
        e._nesting--, Wd(e);
      }
      class Fb {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new wr()),
            (this.onMicrotaskEmpty = new wr()),
            (this.onStable = new wr()),
            (this.onError = new wr());
        }
        run(t, n, r) {
          return t.apply(n, r);
        }
        runGuarded(t, n, r) {
          return t.apply(n, r);
        }
        runOutsideAngular(t) {
          return t();
        }
        runTask(t, n, r, s) {
          return t.apply(n, r);
        }
      }
      let Gm = (() => {
          class e {
            constructor(n) {
              (this._ngZone = n),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                n.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      en.assertNotInAngularZone(),
                        Gd(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                Gd(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let n = this._callbacks.pop();
                    clearTimeout(n.timeoutId), n.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let n = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (r) =>
                    !r.updateCb ||
                    !r.updateCb(n) ||
                    (clearTimeout(r.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((n) => ({
                    source: n.source,
                    creationLocation: n.creationLocation,
                    data: n.data,
                  }))
                : [];
            }
            addCallback(n, r, s) {
              let i = -1;
              r &&
                r > 0 &&
                (i = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (c) => c.timeoutId !== i
                  )),
                    n(this._didWork, this.getPendingTasks());
                }, r)),
                this._callbacks.push({ doneCb: n, timeoutId: i, updateCb: s });
            }
            whenStable(n, r, s) {
              if (s && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?'
                );
              this.addCallback(n, r, s), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(n, r, s) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)(Dt(en));
            }),
            (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Wm = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), Kd.addToWindow(this);
            }
            registerApplication(n, r) {
              this._applications.set(n, r);
            }
            unregisterApplication(n) {
              this._applications.delete(n);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(n) {
              return this._applications.get(n) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(n, r = !0) {
              return Kd.findTestabilityInTree(this, n, r);
            }
          }
          return (
            (e.ɵfac = function (n) {
              return new (n || e)();
            }),
            (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class Rb {
        addToWindow(t) {}
        findTestabilityInTree(t, n, r) {
          return null;
        }
      }
      function Nb(e) {
        Kd = e;
      }
      let On,
        Kd = new Rb();
      const zm = new nt("AllowMultipleToken");
      function Km(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new nt(r);
        return (i = []) => {
          let c = Ym();
          if (!c || c.injector.get(zm, !1))
            if (e) e(n.concat(i).concat({ provide: s, useValue: !0 }));
            else {
              const d = n
                .concat(i)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ql, useValue: "platform" }
                );
              !(function Bb(e) {
                if (On && !On.destroyed && !On.injector.get(zm, !1))
                  throw new B(400, "");
                On = e.get(Zm);
                const t = e.get(Bm, null);
                t && t.forEach((n) => n());
              })(gn.create({ providers: d, name: r }));
            }
          return (function jb(e) {
            const t = Ym();
            if (!t) throw new B(401, "");
            return t;
          })();
        };
      }
      function Ym() {
        return On && !On.destroyed ? On : null;
      }
      let Zm = (() => {
        class e {
          constructor(n) {
            (this._injector = n),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(n, r) {
            const d = (function Vb(e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new Fb()
                      : ("zone.js" === e ? void 0 : e) ||
                        new en({
                          enableLongStackTrace: !1,
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(r ? r.ngZone : void 0, {
                ngZoneEventCoalescing: (r && r.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (r && r.ngZoneRunCoalescing) || !1,
              }),
              h = [{ provide: en, useValue: d }];
            return d.run(() => {
              const g = gn.create({
                  providers: h,
                  parent: this.injector,
                  name: n.moduleType.name,
                }),
                m = n.create(g),
                _ = m.injector.get(Er, null);
              if (!_) throw new B(402, "");
              return (
                d.runOutsideAngular(() => {
                  const w = d.onError.subscribe({
                    next: (P) => {
                      _.handleError(P);
                    },
                  });
                  m.onDestroy(() => {
                    Yd(this._modules, m), w.unsubscribe();
                  });
                }),
                (function Ub(e, t, n) {
                  try {
                    const r = n();
                    return ld(r)
                      ? r.catch((s) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(s)), s)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(_, d, () => {
                  const w = m.injector.get(Ko);
                  return (
                    w.runInitializers(),
                    w.donePromise.then(
                      () => (
                        (function lE(e) {
                          vt(e, "Expected localeId to be defined"),
                            "string" == typeof e &&
                              (Tg = e.toLowerCase().replace(/_/g, "-"));
                        })(m.injector.get(ec, $u) || $u),
                        this._moduleDoBootstrap(m),
                        m
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(n, r = []) {
            const s = qm({}, r);
            return (function Lb(e, t, n) {
              const r = new Ad(n);
              return Promise.resolve(r);
            })(0, 0, n).then((i) => this.bootstrapModuleFactory(i, s));
          }
          _moduleDoBootstrap(n) {
            const r = n.injector.get(tc);
            if (n._bootstrapComponents.length > 0)
              n._bootstrapComponents.forEach((s) => r.bootstrap(s));
            else {
              if (!n.instance.ngDoBootstrap) throw new B(403, "");
              n.instance.ngDoBootstrap(r);
            }
            this._modules.push(n);
          }
          onDestroy(n) {
            this._destroyListeners.push(n);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed) throw new B(404, "");
            this._modules.slice().forEach((n) => n.destroy()),
              this._destroyListeners.forEach((n) => n()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(gn));
          }),
          (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function qm(e, t) {
        return Array.isArray(t)
          ? t.reduce(qm, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let tc = (() => {
        class e {
          constructor(n, r, s, i, c) {
            (this._zone = n),
              (this._injector = r),
              (this._exceptionHandler = s),
              (this._componentFactoryResolver = i),
              (this._initStatus = c),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const d = new V.y((g) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    g.next(this._stable), g.complete();
                  });
              }),
              h = new V.y((g) => {
                let m;
                this._zone.runOutsideAngular(() => {
                  m = this._zone.onStable.subscribe(() => {
                    en.assertNotInAngularZone(),
                      Gd(() => {
                        !this._stable &&
                          !this._zone.hasPendingMacrotasks &&
                          !this._zone.hasPendingMicrotasks &&
                          ((this._stable = !0), g.next(!0));
                      });
                  });
                });
                const _ = this._zone.onUnstable.subscribe(() => {
                  en.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        g.next(!1);
                      }));
                });
                return () => {
                  m.unsubscribe(), _.unsubscribe();
                };
              });
            this.isStable = (0, H.T)(d, h.pipe((0, S.B)()));
          }
          bootstrap(n, r) {
            if (!this._initStatus.done) throw new B(405, "");
            let s;
            (s =
              n instanceof Jg
                ? n
                : this._componentFactoryResolver.resolveComponentFactory(n)),
              this.componentTypes.push(s.componentType);
            const i = (function kb(e) {
                return e.isBoundToModule;
              })(s)
                ? void 0
                : this._injector.get(Go),
              d = s.create(gn.NULL, [], r || s.selector, i),
              h = d.location.nativeElement,
              g = d.injector.get(Gm, null),
              m = g && d.injector.get(Wm);
            return (
              g && m && m.registerApplication(h, g),
              d.onDestroy(() => {
                this.detachView(d.hostView),
                  Yd(this.components, d),
                  m && m.unregisterApplication(h);
              }),
              this._loadComponent(d),
              d
            );
          }
          tick() {
            if (this._runningTick) throw new B(101, "");
            try {
              this._runningTick = !0;
              for (let n of this._views) n.detectChanges();
            } catch (n) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(n)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(n) {
            const r = n;
            this._views.push(r), r.attachToAppRef(this);
          }
          detachView(n) {
            const r = n;
            Yd(this._views, r), r.detachFromAppRef();
          }
          _loadComponent(n) {
            this.attachView(n.hostView),
              this.tick(),
              this.components.push(n),
              this._injector
                .get(wb, [])
                .concat(this._bootstrapListeners)
                .forEach((s) => s(n));
          }
          ngOnDestroy() {
            this._views.slice().forEach((n) => n.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(en), Dt(gn), Dt(Er), Dt(fa), Dt(Ko));
          }),
          (e.ɵprov = Xe({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Yd(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      let Qm = !0,
        Xm = !1;
      function $b() {
        return (Xm = !0), Qm;
      }
      function Gb() {
        if (Xm)
          throw new Error("Cannot enable prod mode after platform setup.");
        Qm = !1;
      }
      let Wb = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = zb), e;
      })();
      function zb(e) {
        return (function Kb(e, t, n) {
          if (ot(e) && !n) {
            const r = Lt(e.index, t);
            return new pa(r, r);
          }
          return 47 & e.type ? new pa(t[16], t) : null;
        })(rt(), K(), 16 == (16 & e));
      }
      class oy {
        constructor() {}
        supports(t) {
          return sa(t);
        }
        create(t) {
          return new Xb(t);
        }
      }
      const Qb = (e, t) => t;
      class Xb {
        constructor(t) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = t || Qb);
        }
        forEachItem(t) {
          let n;
          for (n = this._itHead; null !== n; n = n._next) t(n);
        }
        forEachOperation(t) {
          let n = this._itHead,
            r = this._removalsHead,
            s = 0,
            i = null;
          for (; n || r; ) {
            const c = !r || (n && n.currentIndex < ay(r, s, i)) ? n : r,
              d = ay(c, s, i),
              h = c.currentIndex;
            if (c === r) s--, (r = r._nextRemoved);
            else if (((n = n._next), null == c.previousIndex)) s++;
            else {
              i || (i = []);
              const g = d - s,
                m = h - s;
              if (g != m) {
                for (let w = 0; w < g; w++) {
                  const P = w < i.length ? i[w] : (i[w] = 0),
                    $ = P + w;
                  m <= $ && $ < g && (i[w] = P + 1);
                }
                i[c.previousIndex] = m - g;
              }
            }
            d !== h && t(c, d, h);
          }
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachMovedItem(t) {
          let n;
          for (n = this._movesHead; null !== n; n = n._nextMoved) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        forEachIdentityChange(t) {
          let n;
          for (
            n = this._identityChangesHead;
            null !== n;
            n = n._nextIdentityChange
          )
            t(n);
        }
        diff(t) {
          if ((null == t && (t = []), !sa(t))) throw new B(900, "");
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let s,
            i,
            c,
            n = this._itHead,
            r = !1;
          if (Array.isArray(t)) {
            this.length = t.length;
            for (let d = 0; d < this.length; d++)
              (i = t[d]),
                (c = this._trackByFn(d, i)),
                null !== n && Object.is(n.trackById, c)
                  ? (r && (n = this._verifyReinsertion(n, i, c, d)),
                    Object.is(n.item, i) || this._addIdentityChange(n, i))
                  : ((n = this._mismatch(n, i, c, d)), (r = !0)),
                (n = n._next);
          } else
            (s = 0),
              (function U_(e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[So()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(t, (d) => {
                (c = this._trackByFn(s, d)),
                  null !== n && Object.is(n.trackById, c)
                    ? (r && (n = this._verifyReinsertion(n, d, c, s)),
                      Object.is(n.item, d) || this._addIdentityChange(n, d))
                    : ((n = this._mismatch(n, d, c, s)), (r = !0)),
                  (n = n._next),
                  s++;
              }),
              (this.length = s);
          return this._truncate(n), (this.collection = t), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              t = this._previousItHead = this._itHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._additionsHead; null !== t; t = t._nextAdded)
              t.previousIndex = t.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                t = this._movesHead;
              null !== t;
              t = t._nextMoved
            )
              t.previousIndex = t.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(t, n, r, s) {
          let i;
          return (
            null === t ? (i = this._itTail) : ((i = t._prev), this._remove(t)),
            null !==
            (t =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(r, null))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._reinsertAfter(t, i, s))
              : null !==
                (t =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(r, s))
              ? (Object.is(t.item, n) || this._addIdentityChange(t, n),
                this._moveAfter(t, i, s))
              : (t = this._addAfter(new eC(n, r), i, s)),
            t
          );
        }
        _verifyReinsertion(t, n, r, s) {
          let i =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(r, null);
          return (
            null !== i
              ? (t = this._reinsertAfter(i, t._prev, s))
              : t.currentIndex != s &&
                ((t.currentIndex = s), this._addToMoves(t, s)),
            t
          );
        }
        _truncate(t) {
          for (; null !== t; ) {
            const n = t._next;
            this._addToRemovals(this._unlink(t)), (t = n);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(t, n, r) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
          const s = t._prevRemoved,
            i = t._nextRemoved;
          return (
            null === s ? (this._removalsHead = i) : (s._nextRemoved = i),
            null === i ? (this._removalsTail = s) : (i._prevRemoved = s),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _moveAfter(t, n, r) {
          return (
            this._unlink(t),
            this._insertAfter(t, n, r),
            this._addToMoves(t, r),
            t
          );
        }
        _addAfter(t, n, r) {
          return (
            this._insertAfter(t, n, r),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = t)
                : (this._additionsTail._nextAdded = t)),
            t
          );
        }
        _insertAfter(t, n, r) {
          const s = null === n ? this._itHead : n._next;
          return (
            (t._next = s),
            (t._prev = n),
            null === s ? (this._itTail = t) : (s._prev = t),
            null === n ? (this._itHead = t) : (n._next = t),
            null === this._linkedRecords && (this._linkedRecords = new iy()),
            this._linkedRecords.put(t),
            (t.currentIndex = r),
            t
          );
        }
        _remove(t) {
          return this._addToRemovals(this._unlink(t));
        }
        _unlink(t) {
          null !== this._linkedRecords && this._linkedRecords.remove(t);
          const n = t._prev,
            r = t._next;
          return (
            null === n ? (this._itHead = r) : (n._next = r),
            null === r ? (this._itTail = n) : (r._prev = n),
            t
          );
        }
        _addToMoves(t, n) {
          return (
            t.previousIndex === n ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = t)
                  : (this._movesTail._nextMoved = t)),
            t
          );
        }
        _addToRemovals(t) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new iy()),
            this._unlinkedRecords.put(t),
            (t.currentIndex = null),
            (t._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = t),
                (t._prevRemoved = null))
              : ((t._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = t)),
            t
          );
        }
        _addIdentityChange(t, n) {
          return (
            (t.item = n),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = t)
                : (this._identityChangesTail._nextIdentityChange = t)),
            t
          );
        }
      }
      class eC {
        constructor(t, n) {
          (this.item = t),
            (this.trackById = n),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class tC {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(t) {
          null === this._head
            ? ((this._head = this._tail = t),
              (t._nextDup = null),
              (t._prevDup = null))
            : ((this._tail._nextDup = t),
              (t._prevDup = this._tail),
              (t._nextDup = null),
              (this._tail = t));
        }
        get(t, n) {
          let r;
          for (r = this._head; null !== r; r = r._nextDup)
            if (
              (null === n || n <= r.currentIndex) &&
              Object.is(r.trackById, t)
            )
              return r;
          return null;
        }
        remove(t) {
          const n = t._prevDup,
            r = t._nextDup;
          return (
            null === n ? (this._head = r) : (n._nextDup = r),
            null === r ? (this._tail = n) : (r._prevDup = n),
            null === this._head
          );
        }
      }
      class iy {
        constructor() {
          this.map = new Map();
        }
        put(t) {
          const n = t.trackById;
          let r = this.map.get(n);
          r || ((r = new tC()), this.map.set(n, r)), r.add(t);
        }
        get(t, n) {
          const s = this.map.get(t);
          return s ? s.get(t, n) : null;
        }
        remove(t) {
          const n = t.trackById;
          return this.map.get(n).remove(t) && this.map.delete(n), t;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function ay(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class uy {
        constructor() {}
        supports(t) {
          return t instanceof Map || nd(t);
        }
        create() {
          return new nC();
        }
      }
      class nC {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(t) {
          let n;
          for (n = this._mapHead; null !== n; n = n._next) t(n);
        }
        forEachPreviousItem(t) {
          let n;
          for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n);
        }
        forEachChangedItem(t) {
          let n;
          for (n = this._changesHead; null !== n; n = n._nextChanged) t(n);
        }
        forEachAddedItem(t) {
          let n;
          for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n);
        }
        forEachRemovedItem(t) {
          let n;
          for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n);
        }
        diff(t) {
          if (t) {
            if (!(t instanceof Map || nd(t))) throw new B(900, "");
          } else t = new Map();
          return this.check(t) ? this : null;
        }
        onDestroy() {}
        check(t) {
          this._reset();
          let n = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(t, (r, s) => {
              if (n && n.key === s)
                this._maybeAddToChanges(n, r),
                  (this._appendAfter = n),
                  (n = n._next);
              else {
                const i = this._getOrCreateRecordForKey(s, r);
                n = this._insertBeforeOrAppend(n, i);
              }
            }),
            n)
          ) {
            n._prev && (n._prev._next = null), (this._removalsHead = n);
            for (let r = n; null !== r; r = r._nextRemoved)
              r === this._mapHead && (this._mapHead = null),
                this._records.delete(r.key),
                (r._nextRemoved = r._next),
                (r.previousValue = r.currentValue),
                (r.currentValue = null),
                (r._prev = null),
                (r._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(t, n) {
          if (t) {
            const r = t._prev;
            return (
              (n._next = t),
              (n._prev = r),
              (t._prev = n),
              r && (r._next = n),
              t === this._mapHead && (this._mapHead = n),
              (this._appendAfter = t),
              t
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = n), (n._prev = this._appendAfter))
              : (this._mapHead = n),
            (this._appendAfter = n),
            null
          );
        }
        _getOrCreateRecordForKey(t, n) {
          if (this._records.has(t)) {
            const s = this._records.get(t);
            this._maybeAddToChanges(s, n);
            const i = s._prev,
              c = s._next;
            return (
              i && (i._next = c),
              c && (c._prev = i),
              (s._next = null),
              (s._prev = null),
              s
            );
          }
          const r = new rC(t);
          return (
            this._records.set(t, r),
            (r.currentValue = n),
            this._addToAdditions(r),
            r
          );
        }
        _reset() {
          if (this.isDirty) {
            let t;
            for (
              this._previousMapHead = this._mapHead, t = this._previousMapHead;
              null !== t;
              t = t._next
            )
              t._nextPrevious = t._next;
            for (t = this._changesHead; null !== t; t = t._nextChanged)
              t.previousValue = t.currentValue;
            for (t = this._additionsHead; null != t; t = t._nextAdded)
              t.previousValue = t.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(t, n) {
          Object.is(n, t.currentValue) ||
            ((t.previousValue = t.currentValue),
            (t.currentValue = n),
            this._addToChanges(t));
        }
        _addToAdditions(t) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = t)
            : ((this._additionsTail._nextAdded = t), (this._additionsTail = t));
        }
        _addToChanges(t) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = t)
            : ((this._changesTail._nextChanged = t), (this._changesTail = t));
        }
        _forEach(t, n) {
          t instanceof Map
            ? t.forEach(n)
            : Object.keys(t).forEach((r) => n(t[r], r));
        }
      }
      class rC {
        constructor(t) {
          (this.key = t),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function cy() {
        return new rc([new oy()]);
      }
      let rc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (null != r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || cy()),
              deps: [[e, new mr(), new dn()]],
            };
          }
          find(n) {
            const r = this.factories.find((s) => s.supports(n));
            if (null != r) return r;
            throw new B(901, "");
          }
        }
        return (e.ɵprov = Xe({ token: e, providedIn: "root", factory: cy })), e;
      })();
      function ly() {
        return new sc([new uy()]);
      }
      let sc = (() => {
        class e {
          constructor(n) {
            this.factories = n;
          }
          static create(n, r) {
            if (r) {
              const s = r.factories.slice();
              n = n.concat(s);
            }
            return new e(n);
          }
          static extend(n) {
            return {
              provide: e,
              useFactory: (r) => e.create(n, r || ly()),
              deps: [[e, new mr(), new dn()]],
            };
          }
          find(n) {
            const r = this.factories.find((i) => i.supports(n));
            if (r) return r;
            throw new B(901, "");
          }
        }
        return (e.ɵprov = Xe({ token: e, providedIn: "root", factory: ly })), e;
      })();
      const sC = [new uy()],
        iC = new rc([new oy()]),
        aC = new sc(sC),
        uC = Km(null, "core", [
          { provide: jm, useValue: "unknown" },
          { provide: Zm, deps: [gn] },
          { provide: Wm, deps: [] },
          { provide: Mb, deps: [] },
        ]),
        hC = [
          { provide: tc, useClass: tc, deps: [en, gn, Er, fa, Ko] },
          {
            provide: _v,
            deps: [en],
            useFactory: function pC(e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (n) {
                  t.push(n);
                }
              );
            },
          },
          { provide: Ko, useClass: Ko, deps: [[new dn(), Hd]] },
          { provide: Um, useClass: Um, deps: [] },
          Cb,
          {
            provide: rc,
            useFactory: function cC() {
              return iC;
            },
            deps: [],
          },
          {
            provide: sc,
            useFactory: function lC() {
              return aC;
            },
            deps: [],
          },
          {
            provide: ec,
            useFactory: function dC(e) {
              return (
                e ||
                (function fC() {
                  return (
                    ("undefined" != typeof $localize && $localize.locale) || $u
                  );
                })()
              );
            },
            deps: [[new jr(ec), new dn(), new mr()]],
          },
          { provide: Vm, useValue: "USD" },
        ];
      let gC = (() => {
        class e {
          constructor(n) {}
        }
        return (
          (e.ɵfac = function (n) {
            return new (n || e)(Dt(tc));
          }),
          (e.ɵmod = ns({ type: e })),
          (e.ɵinj = nn({ providers: hC })),
          e
        );
      })();
    },
    9565: (
      __unused_webpack___webpack_module__,
      __webpack_exports__,
      __webpack_require__
    ) => {
      __webpack_require__.d(__webpack_exports__, {
        FT: () => StoreDevtoolsModule,
      });
      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5e3),
        _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5234),
        rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8896),
        rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2916),
        rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1086),
        rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7138),
        rxjs__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(341),
        rxjs__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(839),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6606),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2198),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4850),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1406),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6227),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(13),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ =
          __webpack_require__(7221),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ =
          __webpack_require__(5632),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ =
          __webpack_require__(7625),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ =
          __webpack_require__(7545),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ =
          __webpack_require__(1307),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ =
          __webpack_require__(7770),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_20__ =
          __webpack_require__(5407),
        rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ =
          __webpack_require__(2014);
      class StoreDevtoolsConfig {
        constructor() {
          this.maxAge = !1;
        }
      }
      const STORE_DEVTOOLS_CONFIG =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Options"
          ),
        INITIAL_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Initial Config"
        );
      function noMonitor() {
        return null;
      }
      const DEFAULT_NAME = "NgRx Store DevTools";
      function createConfig(R) {
        const I = {
            maxAge: !1,
            monitor: noMonitor,
            actionSanitizer: void 0,
            stateSanitizer: void 0,
            name: DEFAULT_NAME,
            serialize: !1,
            logOnly: !1,
            autoPause: !1,
            features: {
              pause: !0,
              lock: !0,
              persist: !0,
              export: !0,
              import: "custom",
              jump: !0,
              skip: !0,
              reorder: !0,
              dispatch: !0,
              test: !0,
            },
          },
          y = "function" == typeof R ? R() : R,
          V = Object.assign(
            {},
            I,
            {
              features:
                y.features ||
                (!!y.logOnly && { pause: !0, export: !0, test: !0 }) ||
                I.features,
            },
            y
          );
        if (V.maxAge && V.maxAge < 2)
          throw new Error(
            `Devtools 'maxAge' cannot be less than 2, got ${V.maxAge}`
          );
        return V;
      }
      const PERFORM_ACTION = "PERFORM_ACTION",
        REFRESH = "REFRESH",
        RESET = "RESET",
        ROLLBACK = "ROLLBACK",
        COMMIT = "COMMIT",
        SWEEP = "SWEEP",
        TOGGLE_ACTION = "TOGGLE_ACTION",
        SET_ACTIONS_ACTIVE = "SET_ACTIONS_ACTIVE",
        JUMP_TO_STATE = "JUMP_TO_STATE",
        JUMP_TO_ACTION = "JUMP_TO_ACTION",
        IMPORT_STATE = "IMPORT_STATE",
        LOCK_CHANGES = "LOCK_CHANGES",
        PAUSE_RECORDING = "PAUSE_RECORDING";
      class PerformAction {
        constructor(I, y) {
          if (
            ((this.action = I),
            (this.timestamp = y),
            (this.type = PERFORM_ACTION),
            void 0 === I.type)
          )
            throw new Error(
              'Actions may not have an undefined "type" property. Have you misspelled a constant?'
            );
        }
      }
      class Refresh {
        constructor() {
          this.type = REFRESH;
        }
      }
      class Reset {
        constructor(I) {
          (this.timestamp = I), (this.type = RESET);
        }
      }
      class Rollback {
        constructor(I) {
          (this.timestamp = I), (this.type = ROLLBACK);
        }
      }
      class Commit {
        constructor(I) {
          (this.timestamp = I), (this.type = COMMIT);
        }
      }
      class Sweep {
        constructor() {
          this.type = SWEEP;
        }
      }
      class ToggleAction {
        constructor(I) {
          (this.id = I), (this.type = TOGGLE_ACTION);
        }
      }
      class SetActionsActive {
        constructor(I, y, f = !0) {
          (this.start = I),
            (this.end = y),
            (this.active = f),
            (this.type = SET_ACTIONS_ACTIVE);
        }
      }
      class JumpToState {
        constructor(I) {
          (this.index = I), (this.type = JUMP_TO_STATE);
        }
      }
      class JumpToAction {
        constructor(I) {
          (this.actionId = I), (this.type = JUMP_TO_ACTION);
        }
      }
      class ImportState {
        constructor(I) {
          (this.nextLiftedState = I), (this.type = IMPORT_STATE);
        }
      }
      class LockChanges {
        constructor(I) {
          (this.status = I), (this.type = LOCK_CHANGES);
        }
      }
      class PauseRecording {
        constructor(I) {
          (this.status = I), (this.type = PAUSE_RECORDING);
        }
      }
      function difference(R, I) {
        return R.filter((y) => I.indexOf(y) < 0);
      }
      function unliftState(R) {
        const { computedStates: I, currentStateIndex: y } = R;
        if (y >= I.length) {
          const { state: L } = I[I.length - 1];
          return L;
        }
        const { state: f } = I[y];
        return f;
      }
      function unliftAction(R) {
        return R.actionsById[R.nextActionId - 1];
      }
      function liftAction(R) {
        return new PerformAction(R, +Date.now());
      }
      function sanitizeActions(R, I) {
        return Object.keys(I).reduce((y, f) => {
          const L = Number(f);
          return (y[L] = sanitizeAction(R, I[L], L)), y;
        }, {});
      }
      function sanitizeAction(R, I, y) {
        return Object.assign(Object.assign({}, I), { action: R(I.action, y) });
      }
      function sanitizeStates(R, I) {
        return I.map((y, f) => ({
          state: sanitizeState(R, y.state, f),
          error: y.error,
        }));
      }
      function sanitizeState(R, I, y) {
        return R(I, y);
      }
      function shouldFilterActions(R) {
        return R.predicate || R.actionsSafelist || R.actionsBlocklist;
      }
      function filterLiftedState(R, I, y, f) {
        const L = [],
          V = {},
          H = [];
        return (
          R.stagedActionIds.forEach((S, T) => {
            const O = R.actionsById[S];
            !O ||
              (T && isActionFiltered(R.computedStates[T], O, I, y, f)) ||
              ((V[S] = O), L.push(S), H.push(R.computedStates[T]));
          }),
          Object.assign(Object.assign({}, R), {
            stagedActionIds: L,
            actionsById: V,
            computedStates: H,
          })
        );
      }
      function isActionFiltered(R, I, y, f, L) {
        const V = y && !y(R, I.action),
          H =
            f && !I.action.type.match(f.map((T) => escapeRegExp(T)).join("|")),
          S = L && I.action.type.match(L.map((T) => escapeRegExp(T)).join("|"));
        return V || H || S;
      }
      function escapeRegExp(R) {
        return R.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
      const INIT_ACTION = { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg },
        RECOMPUTE = "@ngrx/store-devtools/recompute",
        RECOMPUTE_ACTION = { type: RECOMPUTE };
      function computeNextEntry(R, I, y, f, L) {
        if (f)
          return { state: y, error: "Interrupted by an error up the chain" };
        let H,
          V = y;
        try {
          V = R(y, I);
        } catch (S) {
          (H = S.toString()), L.handleError(S);
        }
        return { state: V, error: H };
      }
      function recomputeStates(R, I, y, f, L, V, H, S, T) {
        if (I >= R.length && R.length === V.length) return R;
        const O = R.slice(0, I),
          b = V.length - (T ? 1 : 0);
        for (let M = I; M < b; M++) {
          const v = V[M],
            F = L[v].action,
            C = O[M - 1],
            k = C ? C.state : f,
            ee = C ? C.error : void 0,
            Z = H.indexOf(v) > -1 ? C : computeNextEntry(y, F, k, ee, S);
          O.push(Z);
        }
        return T && O.push(R[R.length - 1]), O;
      }
      function liftInitialState(R, I) {
        return {
          monitorState: I(void 0, {}),
          nextActionId: 1,
          actionsById: { 0: liftAction(INIT_ACTION) },
          stagedActionIds: [0],
          skippedActionIds: [],
          committedState: R,
          currentStateIndex: 0,
          computedStates: [],
          isLocked: !1,
          isPaused: !1,
        };
      }
      function liftReducerWith(R, I, y, f, L = {}) {
        return (V) => (H, S) => {
          let {
            monitorState: T,
            actionsById: O,
            nextActionId: b,
            stagedActionIds: M,
            skippedActionIds: v,
            committedState: F,
            currentStateIndex: C,
            computedStates: k,
            isLocked: ee,
            isPaused: B,
          } = H || I;
          function Z(J) {
            let ue = J,
              Te = M.slice(1, ue + 1);
            for (let Re = 0; Re < Te.length; Re++) {
              if (k[Re + 1].error) {
                (ue = Re), (Te = M.slice(1, ue + 1));
                break;
              }
              delete O[Te[Re]];
            }
            (v = v.filter((Re) => -1 === Te.indexOf(Re))),
              (M = [0, ...M.slice(ue + 1)]),
              (F = k[ue].state),
              (k = k.slice(ue)),
              (C = C > ue ? C - ue : 0);
          }
          function W() {
            (O = { 0: liftAction(INIT_ACTION) }),
              (b = 1),
              (M = [0]),
              (v = []),
              (F = k[C].state),
              (C = 0),
              (k = []);
          }
          H || (O = Object.create(O));
          let G = 0;
          switch (S.type) {
            case LOCK_CHANGES:
              (ee = S.status), (G = 1 / 0);
              break;
            case PAUSE_RECORDING:
              (B = S.status),
                B
                  ? ((M = [...M, b]),
                    (O[b] = new PerformAction(
                      { type: "@ngrx/devtools/pause" },
                      +Date.now()
                    )),
                    b++,
                    (G = M.length - 1),
                    (k = k.concat(k[k.length - 1])),
                    C === M.length - 2 && C++,
                    (G = 1 / 0))
                  : W();
              break;
            case RESET:
              (O = { 0: liftAction(INIT_ACTION) }),
                (b = 1),
                (M = [0]),
                (v = []),
                (F = R),
                (C = 0),
                (k = []);
              break;
            case COMMIT:
              W();
              break;
            case ROLLBACK:
              (O = { 0: liftAction(INIT_ACTION) }),
                (b = 1),
                (M = [0]),
                (v = []),
                (C = 0),
                (k = []);
              break;
            case TOGGLE_ACTION: {
              const { id: J } = S;
              (v =
                -1 === v.indexOf(J) ? [J, ...v] : v.filter((Te) => Te !== J)),
                (G = M.indexOf(J));
              break;
            }
            case SET_ACTIONS_ACTIVE: {
              const { start: J, end: ue, active: Te } = S,
                Re = [];
              for (let ze = J; ze < ue; ze++) Re.push(ze);
              (v = Te ? difference(v, Re) : [...v, ...Re]), (G = M.indexOf(J));
              break;
            }
            case JUMP_TO_STATE:
              (C = S.index), (G = 1 / 0);
              break;
            case JUMP_TO_ACTION: {
              const J = M.indexOf(S.actionId);
              -1 !== J && (C = J), (G = 1 / 0);
              break;
            }
            case SWEEP:
              (M = difference(M, v)), (v = []), (C = Math.min(C, M.length - 1));
              break;
            case PERFORM_ACTION: {
              if (ee) return H || I;
              if (
                B ||
                (H &&
                  isActionFiltered(
                    H.computedStates[C],
                    S,
                    L.predicate,
                    L.actionsSafelist,
                    L.actionsBlocklist
                  ))
              ) {
                const ue = k[k.length - 1];
                (k = [
                  ...k.slice(0, -1),
                  computeNextEntry(V, S.action, ue.state, ue.error, y),
                ]),
                  (G = 1 / 0);
                break;
              }
              L.maxAge && M.length === L.maxAge && Z(1),
                C === M.length - 1 && C++;
              const J = b++;
              (O[J] = S), (M = [...M, J]), (G = M.length - 1);
              break;
            }
            case IMPORT_STATE:
              ({
                monitorState: T,
                actionsById: O,
                nextActionId: b,
                stagedActionIds: M,
                skippedActionIds: v,
                committedState: F,
                currentStateIndex: C,
                computedStates: k,
                isLocked: ee,
                isPaused: B,
              } = S.nextLiftedState);
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.qg:
              (G = 0),
                L.maxAge &&
                  M.length > L.maxAge &&
                  ((k = recomputeStates(k, G, V, F, O, M, v, y, B)),
                  Z(M.length - L.maxAge),
                  (G = 1 / 0));
              break;
            case _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb:
              if (k.filter((ue) => ue.error).length > 0)
                (G = 0),
                  L.maxAge &&
                    M.length > L.maxAge &&
                    ((k = recomputeStates(k, G, V, F, O, M, v, y, B)),
                    Z(M.length - L.maxAge),
                    (G = 1 / 0));
              else {
                if (!B && !ee) {
                  C === M.length - 1 && C++;
                  const ue = b++;
                  (O[ue] = new PerformAction(S, +Date.now())),
                    (M = [...M, ue]),
                    (G = M.length - 1),
                    (k = recomputeStates(k, G, V, F, O, M, v, y, B));
                }
                (k = k.map((ue) =>
                  Object.assign(Object.assign({}, ue), {
                    state: V(ue.state, RECOMPUTE_ACTION),
                  })
                )),
                  (C = M.length - 1),
                  L.maxAge && M.length > L.maxAge && Z(M.length - L.maxAge),
                  (G = 1 / 0);
              }
              break;
            default:
              G = 1 / 0;
          }
          return (
            (k = recomputeStates(k, G, V, F, O, M, v, y, B)),
            (T = f(T, S)),
            {
              monitorState: T,
              actionsById: O,
              nextActionId: b,
              stagedActionIds: M,
              skippedActionIds: v,
              committedState: F,
              currentStateIndex: C,
              computedStates: k,
              isLocked: ee,
              isPaused: B,
            }
          );
        };
      }
      let DevtoolsDispatcher = (() => {
        class R extends _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO {}
        return (
          (R.ɵfac = (function () {
            let I;
            return function (f) {
              return (
                I || (I = _angular_core__WEBPACK_IMPORTED_MODULE_0__.n5z(R))
              )(f || R);
            };
          })()),
          (R.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
            token: R,
            factory: R.ɵfac,
          })),
          R
        );
      })();
      const ExtensionActionTypes = {
          START: "START",
          DISPATCH: "DISPATCH",
          STOP: "STOP",
          ACTION: "ACTION",
        },
        REDUX_DEVTOOLS_EXTENSION =
          new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
            "@ngrx/store-devtools Redux Devtools Extension"
          );
      let DevtoolsExtension = (() => {
          class DevtoolsExtension {
            constructor(R, I, y) {
              (this.config = I),
                (this.dispatcher = y),
                (this.devtoolsExtension = R),
                this.createActionStreams();
            }
            notify(R, I) {
              if (this.devtoolsExtension)
                if (R.type === PERFORM_ACTION) {
                  if (I.isLocked || I.isPaused) return;
                  const y = unliftState(I);
                  if (
                    shouldFilterActions(this.config) &&
                    isActionFiltered(
                      y,
                      R,
                      this.config.predicate,
                      this.config.actionsSafelist,
                      this.config.actionsBlocklist
                    )
                  )
                    return;
                  const f = this.config.stateSanitizer
                      ? sanitizeState(
                          this.config.stateSanitizer,
                          y,
                          I.currentStateIndex
                        )
                      : y,
                    L = this.config.actionSanitizer
                      ? sanitizeAction(
                          this.config.actionSanitizer,
                          R,
                          I.nextActionId
                        )
                      : R;
                  this.sendToReduxDevtools(() =>
                    this.extensionConnection.send(L, f)
                  );
                } else {
                  const y = Object.assign(Object.assign({}, I), {
                    stagedActionIds: I.stagedActionIds,
                    actionsById: this.config.actionSanitizer
                      ? sanitizeActions(
                          this.config.actionSanitizer,
                          I.actionsById
                        )
                      : I.actionsById,
                    computedStates: this.config.stateSanitizer
                      ? sanitizeStates(
                          this.config.stateSanitizer,
                          I.computedStates
                        )
                      : I.computedStates,
                  });
                  this.sendToReduxDevtools(() =>
                    this.devtoolsExtension.send(
                      null,
                      y,
                      this.getExtensionConfig(this.config)
                    )
                  );
                }
            }
            createChangesObservable() {
              return this.devtoolsExtension
                ? new rxjs__WEBPACK_IMPORTED_MODULE_3__.y((R) => {
                    const I = this.devtoolsExtension.connect(
                      this.getExtensionConfig(this.config)
                    );
                    return (
                      (this.extensionConnection = I),
                      I.init(),
                      I.subscribe((y) => R.next(y)),
                      I.unsubscribe
                    );
                  })
                : rxjs__WEBPACK_IMPORTED_MODULE_2__.E;
            }
            createActionStreams() {
              const R = this.createChangesObservable().pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.B)()
                ),
                I = R.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (S) => S.type === ExtensionActionTypes.START
                  )
                ),
                y = R.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (S) => S.type === ExtensionActionTypes.STOP
                  )
                ),
                f = R.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (S) => S.type === ExtensionActionTypes.DISPATCH
                  ),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((S) =>
                    this.unwrapAction(S.payload)
                  ),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.b)((S) =>
                    S.type === IMPORT_STATE
                      ? this.dispatcher.pipe(
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                            (T) =>
                              T.type ===
                              _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.wb
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.V)(
                            1e3
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.b)(
                            1e3
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                            () => S
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.K)(
                            () => (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(S)
                          ),
                          (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.q)(1)
                        )
                      : (0, rxjs__WEBPACK_IMPORTED_MODULE_11__.of)(S)
                  )
                ),
                V = R.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.h)(
                    (S) => S.type === ExtensionActionTypes.ACTION
                  ),
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)((S) =>
                    this.unwrapAction(S.payload)
                  )
                ).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y)),
                H = f.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y)
                );
              (this.start$ = I.pipe(
                (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.R)(y)
              )),
                (this.actions$ = this.start$.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => V)
                )),
                (this.liftedActions$ = this.start$.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.w)(() => H)
                ));
            }
            unwrapAction(action) {
              return "string" == typeof action ? eval(`(${action})`) : action;
            }
            getExtensionConfig(R) {
              var I;
              const y = {
                name: R.name,
                features: R.features,
                serialize: R.serialize,
                autoPause: null !== (I = R.autoPause) && void 0 !== I && I,
              };
              return !1 !== R.maxAge && (y.maxAge = R.maxAge), y;
            }
            sendToReduxDevtools(R) {
              try {
                R();
              } catch (I) {
                console.warn(
                  "@ngrx/store-devtools: something went wrong inside the redux devtools",
                  I
                );
              }
            }
          }
          return (
            (DevtoolsExtension.ɵfac = function R(I) {
              return new (I || DevtoolsExtension)(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  REDUX_DEVTOOLS_EXTENSION
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  STORE_DEVTOOLS_CONFIG
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsDispatcher
                )
              );
            }),
            (DevtoolsExtension.ɵprov =
              _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
                token: DevtoolsExtension,
                factory: DevtoolsExtension.ɵfac,
              })),
            DevtoolsExtension
          );
        })(),
        StoreDevtools = (() => {
          class R {
            constructor(y, f, L, V, H, S, T, O) {
              const b = liftInitialState(T, O.monitor),
                M = liftReducerWith(T, b, S, O.monitor, O),
                v = (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                  (0, rxjs__WEBPACK_IMPORTED_MODULE_15__.T)(
                    f
                      .asObservable()
                      .pipe(
                        (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.T)(1)
                      ),
                    V.actions$
                  ).pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                      liftAction
                    )
                  ),
                  y,
                  V.liftedActions$
                ).pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.QV)(
                    rxjs__WEBPACK_IMPORTED_MODULE_18__.N
                  )
                ),
                F = L.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(M)
                ),
                C = new rxjs__WEBPACK_IMPORTED_MODULE_19__.t(1),
                k = v
                  .pipe(
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_20__.M)(F),
                    (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.R)(
                      ({ state: W }, [G, J]) => {
                        let ue = J(W, G);
                        return (
                          G.type !== PERFORM_ACTION &&
                            shouldFilterActions(O) &&
                            (ue = filterLiftedState(
                              ue,
                              O.predicate,
                              O.actionsSafelist,
                              O.actionsBlocklist
                            )),
                          V.notify(G, ue),
                          { state: ue, action: G }
                        );
                      },
                      { state: b, action: null }
                    )
                  )
                  .subscribe(({ state: W, action: G }) => {
                    C.next(W), G.type === PERFORM_ACTION && H.next(G.action);
                  }),
                ee = V.start$.subscribe(() => {
                  this.refresh();
                }),
                B = C.asObservable(),
                Z = B.pipe(
                  (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.U)(
                    unliftState
                  )
                );
              (this.extensionStartSubscription = ee),
                (this.stateSubscription = k),
                (this.dispatcher = y),
                (this.liftedState = B),
                (this.state = Z);
            }
            dispatch(y) {
              this.dispatcher.next(y);
            }
            next(y) {
              this.dispatcher.next(y);
            }
            error(y) {}
            complete() {}
            performAction(y) {
              this.dispatch(new PerformAction(y, +Date.now()));
            }
            refresh() {
              this.dispatch(new Refresh());
            }
            reset() {
              this.dispatch(new Reset(+Date.now()));
            }
            rollback() {
              this.dispatch(new Rollback(+Date.now()));
            }
            commit() {
              this.dispatch(new Commit(+Date.now()));
            }
            sweep() {
              this.dispatch(new Sweep());
            }
            toggleAction(y) {
              this.dispatch(new ToggleAction(y));
            }
            jumpToAction(y) {
              this.dispatch(new JumpToAction(y));
            }
            jumpToState(y) {
              this.dispatch(new JumpToState(y));
            }
            importState(y) {
              this.dispatch(new ImportState(y));
            }
            lockChanges(y) {
              this.dispatch(new LockChanges(y));
            }
            pauseRecording(y) {
              this.dispatch(new PauseRecording(y));
            }
          }
          return (
            (R.ɵfac = function (y) {
              return new (y || R)(
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsDispatcher
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.UO
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.n$
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  DevtoolsExtension
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y$
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _angular_core__WEBPACK_IMPORTED_MODULE_0__.qLn
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.Y6
                ),
                _angular_core__WEBPACK_IMPORTED_MODULE_0__.LFG(
                  STORE_DEVTOOLS_CONFIG
                )
              );
            }),
            (R.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__.Yz7({
              token: R,
              factory: R.ɵfac,
            })),
            R
          );
        })();
      const IS_EXTENSION_OR_MONITOR_PRESENT =
        new _angular_core__WEBPACK_IMPORTED_MODULE_0__.OlP(
          "@ngrx/store-devtools Is Devtools Extension or Monitor Present"
        );
      function createIsExtensionOrMonitorPresent(R, I) {
        return Boolean(R) || I.monitor !== noMonitor;
      }
      function createReduxDevtoolsExtension() {
        const R = "__REDUX_DEVTOOLS_EXTENSION__";
        return "object" == typeof window && void 0 !== window[R]
          ? window[R]
          : null;
      }
      function createStateObservable(R) {
        return R.state;
      }
      let StoreDevtoolsModule = (() => {
        class R {
          static instrument(y = {}) {
            return {
              ngModule: R,
              providers: [
                DevtoolsExtension,
                DevtoolsDispatcher,
                StoreDevtools,
                { provide: INITIAL_OPTIONS, useValue: y },
                {
                  provide: IS_EXTENSION_OR_MONITOR_PRESENT,
                  deps: [REDUX_DEVTOOLS_EXTENSION, STORE_DEVTOOLS_CONFIG],
                  useFactory: createIsExtensionOrMonitorPresent,
                },
                {
                  provide: REDUX_DEVTOOLS_EXTENSION,
                  useFactory: createReduxDevtoolsExtension,
                },
                {
                  provide: STORE_DEVTOOLS_CONFIG,
                  deps: [INITIAL_OPTIONS],
                  useFactory: createConfig,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.FR,
                  deps: [StoreDevtools],
                  useFactory: createStateObservable,
                },
                {
                  provide: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__.mK,
                  useExisting: DevtoolsDispatcher,
                },
              ],
            };
          }
        }
        return (
          (R.ɵfac = function (y) {
            return new (y || R)();
          }),
          (R.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__.oAB({
            type: R,
          })),
          (R.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__.cJS({})),
          R
        );
      })();
    },
    5234: (R, I, y) => {
      y.d(I, {
        UO: () => Jn,
        qg: () => ze,
        Y6: () => Ze,
        mK: () => we,
        n$: () => Ir,
        Y$: () => Qn,
        FR: () => Ut,
        yh: () => ke,
        CK: () => _n,
        Aw: () => Nn,
        cr: () => He,
        wb: () => es,
        qC: () => xn,
        PH: () => J,
        ZF: () => at,
        Lq: () => or,
        P1: () => xr,
        on: () => Bn,
        Ky: () => ue,
        Ys: () => Me,
      });
      var f = y(5e3),
        L = y(8929),
        V = y(5279);
      class H extends L.xQ {
        constructor(N) {
          super(), (this._value = N);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(N) {
          const x = super._subscribe(N);
          return x && !x.closed && N.next(this._value), x;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new V.N();
          return this._value;
        }
        next(N) {
          super.next((this._value = N));
        }
      }
      var S = y(2916),
        T = y(341),
        O = y(4850),
        v = y(3489);
      class C {
        constructor(N, x) {
          (this.compare = N), (this.keySelector = x);
        }
        call(N, x) {
          return x.subscribe(new k(N, this.compare, this.keySelector));
        }
      }
      class k extends v.L {
        constructor(N, x, j) {
          super(N),
            (this.keySelector = j),
            (this.hasKey = !1),
            "function" == typeof x && (this.compare = x);
        }
        compare(N, x) {
          return N === x;
        }
        _next(N) {
          let x;
          try {
            const { keySelector: Y } = this;
            x = Y ? Y(N) : N;
          } catch (Y) {
            return this.destination.error(Y);
          }
          let j = !1;
          if (this.hasKey)
            try {
              const { compare: Y } = this;
              j = Y(this.key, x);
            } catch (Y) {
              return this.destination.error(Y);
            }
          else this.hasKey = !0;
          j || ((this.key = x), this.destination.next(N));
        }
      }
      var ee = y(7770),
        B = y(5407),
        Z = y(2014);
      const W = {};
      function J(E, N) {
        if (((W[E] = (W[E] || 0) + 1), "function" == typeof N))
          return Re(E, (...j) =>
            Object.assign(Object.assign({}, N(...j)), { type: E })
          );
        switch (N ? N._as : "empty") {
          case "empty":
            return Re(E, () => ({ type: E }));
          case "props":
            return Re(E, (j) =>
              Object.assign(Object.assign({}, j), { type: E })
            );
          default:
            throw new Error("Unexpected config.");
        }
      }
      function ue() {
        return { _as: "props", _p: void 0 };
      }
      function Re(E, N) {
        return Object.defineProperty(N, "type", { value: E, writable: !1 });
      }
      const ze = "@ngrx/store/init";
      let Jn = (() => {
        class E extends H {
          constructor() {
            super({ type: ze });
          }
          next(x) {
            if ("function" == typeof x)
              throw new TypeError(
                "\n        Dispatch expected an object, instead it received a function.\n        If you're using the createAction function, make sure to invoke the function\n        before dispatching the action. For example, someAction should be someAction()."
              );
            if (void 0 === x) throw new TypeError("Actions must be objects");
            if (void 0 === x.type)
              throw new TypeError("Actions must have a type property");
            super.next(x);
          }
          complete() {}
          ngOnDestroy() {
            super.complete();
          }
        }
        return (
          (E.ɵfac = function (x) {
            return new (x || E)();
          }),
          (E.ɵprov = f.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      const Da = [Jn],
        Is = new f.OlP("@ngrx/store Internal Root Guard"),
        Ke = new f.OlP("@ngrx/store Internal Initial State"),
        Ze = new f.OlP("@ngrx/store Initial State"),
        Qe = new f.OlP("@ngrx/store Reducer Factory"),
        Oe = new f.OlP("@ngrx/store Internal Reducer Factory Provider"),
        Ye = new f.OlP("@ngrx/store Initial Reducers"),
        fe = new f.OlP("@ngrx/store Internal Initial Reducers"),
        Ea = new f.OlP("@ngrx/store Store Features"),
        As = new f.OlP("@ngrx/store Internal Store Reducers"),
        Ss = new f.OlP("@ngrx/store Internal Feature Reducers"),
        vt = new f.OlP("@ngrx/store Internal Feature Configs"),
        Ve = new f.OlP("@ngrx/store Internal Store Features"),
        Yo = new f.OlP("@ngrx/store Internal Feature Reducers Token"),
        va = new f.OlP("@ngrx/store Feature Reducers"),
        ba = new f.OlP("@ngrx/store User Provided Meta Reducers"),
        Xe = new f.OlP("@ngrx/store Meta Reducers"),
        Mr = new f.OlP("@ngrx/store Internal Resolved Meta Reducers"),
        nn = new f.OlP("@ngrx/store User Runtime Checks Config"),
        mt = new f.OlP("@ngrx/store Internal User Runtime Checks Config"),
        rn = new f.OlP("@ngrx/store Internal Runtime Checks"),
        Os = new f.OlP("@ngrx/store Check if Action types are unique");
      function xs(E, N = {}) {
        const x = Object.keys(E),
          j = {};
        for (let Q = 0; Q < x.length; Q++) {
          const xe = x[Q];
          "function" == typeof E[xe] && (j[xe] = E[xe]);
        }
        const Y = Object.keys(j);
        return function (xe, ot) {
          xe = void 0 === xe ? N : xe;
          let Ge = !1;
          const qe = {};
          for (let We = 0; We < Y.length; We++) {
            const Ht = Y[We],
              xt = xe[Ht],
              Jo = (0, j[Ht])(xt, ot);
            (qe[Ht] = Jo), (Ge = Ge || Jo !== xt);
          }
          return Ge ? qe : xe;
        };
      }
      function xn(...E) {
        return function (N) {
          if (0 === E.length) return N;
          const x = E[E.length - 1];
          return E.slice(0, -1).reduceRight((Y, Q) => Q(Y), x(N));
        };
      }
      function Tr(E, N) {
        return (
          Array.isArray(N) && N.length > 0 && (E = xn.apply(null, [...N, E])),
          (x, j) => {
            const Y = E(x);
            return (Q, xe) => Y((Q = void 0 === Q ? j : Q), xe);
          }
        );
      }
      class Ir extends S.y {}
      class we extends Jn {}
      const es = "@ngrx/store/update-reducers";
      let yt = (() => {
        class E extends H {
          constructor(x, j, Y, Q) {
            super(Q(Y, j)),
              (this.dispatcher = x),
              (this.initialState = j),
              (this.reducers = Y),
              (this.reducerFactory = Q);
          }
          get currentReducers() {
            return this.reducers;
          }
          addFeature(x) {
            this.addFeatures([x]);
          }
          addFeatures(x) {
            const j = x.reduce(
              (
                Y,
                {
                  reducers: Q,
                  reducerFactory: xe,
                  metaReducers: ot,
                  initialState: Ge,
                  key: qe,
                }
              ) => {
                const We =
                  "function" == typeof Q
                    ? (function Xr(E) {
                        const N =
                          Array.isArray(E) && E.length > 0
                            ? xn(...E)
                            : (x) => x;
                        return (x, j) => (
                          (x = N(x)), (Y, Q) => x((Y = void 0 === Y ? j : Y), Q)
                        );
                      })(ot)(Q, Ge)
                    : Tr(xe, ot)(Q, Ge);
                return (Y[qe] = We), Y;
              },
              {}
            );
            this.addReducers(j);
          }
          removeFeature(x) {
            this.removeFeatures([x]);
          }
          removeFeatures(x) {
            this.removeReducers(x.map((j) => j.key));
          }
          addReducer(x, j) {
            this.addReducers({ [x]: j });
          }
          addReducers(x) {
            (this.reducers = Object.assign(
              Object.assign({}, this.reducers),
              x
            )),
              this.updateReducers(Object.keys(x));
          }
          removeReducer(x) {
            this.removeReducers([x]);
          }
          removeReducers(x) {
            x.forEach((j) => {
              this.reducers = (function Zo(E, N) {
                return Object.keys(E)
                  .filter((x) => x !== N)
                  .reduce((x, j) => Object.assign(x, { [j]: E[j] }), {});
              })(this.reducers, j);
            }),
              this.updateReducers(x);
          }
          updateReducers(x) {
            this.next(this.reducerFactory(this.reducers, this.initialState)),
              this.dispatcher.next({ type: es, features: x });
          }
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (E.ɵfac = function (x) {
            return new (x || E)(f.LFG(we), f.LFG(Ze), f.LFG(Ye), f.LFG(Qe));
          }),
          (E.ɵprov = f.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      const Vt = [
        yt,
        { provide: Ir, useExisting: yt },
        { provide: we, useExisting: Jn },
      ];
      let Qn = (() => {
        class E extends L.xQ {
          ngOnDestroy() {
            this.complete();
          }
        }
        return (
          (E.ɵfac = (function () {
            let N;
            return function (j) {
              return (N || (N = f.n5z(E)))(j || E);
            };
          })()),
          (E.ɵprov = f.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      const Ca = [Qn];
      class Ut extends S.y {}
      let St = (() => {
        class E extends H {
          constructor(x, j, Y, Q) {
            super(Q);
            const qe = x
              .pipe((0, ee.QV)(T.N))
              .pipe((0, B.M)(j))
              .pipe((0, Z.R)(Ar, { state: Q }));
            this.stateSubscription = qe.subscribe(
              ({ state: We, action: Ht }) => {
                this.next(We), Y.next(Ht);
              }
            );
          }
          ngOnDestroy() {
            this.stateSubscription.unsubscribe(), this.complete();
          }
        }
        return (
          (E.INIT = ze),
          (E.ɵfac = function (x) {
            return new (x || E)(f.LFG(Jn), f.LFG(Ir), f.LFG(Qn), f.LFG(Ze));
          }),
          (E.ɵprov = f.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      function Ar(E = { state: void 0 }, [N, x]) {
        const { state: j } = E;
        return { state: x(j, N), action: N };
      }
      const wa = [St, { provide: Ut, useExisting: St }];
      let ke = (() => {
        class E extends S.y {
          constructor(x, j, Y) {
            super(),
              (this.actionsObserver = j),
              (this.reducerManager = Y),
              (this.source = x);
          }
          select(x, ...j) {
            return Me.call(null, x, ...j)(this);
          }
          lift(x) {
            const j = new E(this, this.actionsObserver, this.reducerManager);
            return (j.operator = x), j;
          }
          dispatch(x) {
            this.actionsObserver.next(x);
          }
          next(x) {
            this.actionsObserver.next(x);
          }
          error(x) {
            this.actionsObserver.error(x);
          }
          complete() {
            this.actionsObserver.complete();
          }
          addReducer(x, j) {
            this.reducerManager.addReducer(x, j);
          }
          removeReducer(x) {
            this.reducerManager.removeReducer(x);
          }
        }
        return (
          (E.ɵfac = function (x) {
            return new (x || E)(f.LFG(Ut), f.LFG(Jn), f.LFG(yt));
          }),
          (E.ɵprov = f.Yz7({ token: E, factory: E.ɵfac })),
          E
        );
      })();
      const me = [ke];
      function Me(E, N, ...x) {
        return function (Y) {
          let Q;
          if ("string" == typeof E) {
            const xe = [N, ...x].filter(Boolean);
            Q = Y.pipe(
              (function b(...E) {
                const N = E.length;
                if (0 === N)
                  throw new Error("list of properties cannot be empty.");
                return (x) =>
                  (0, O.U)(
                    (function M(E, N) {
                      return (j) => {
                        let Y = j;
                        for (let Q = 0; Q < N; Q++) {
                          const xe = null != Y ? Y[E[Q]] : void 0;
                          if (void 0 === xe) return;
                          Y = xe;
                        }
                        return Y;
                      };
                    })(E, N)
                  )(x);
              })(E, ...xe)
            );
          } else {
            if ("function" != typeof E)
              throw new TypeError(
                `Unexpected type '${typeof E}' in select operator, expected 'string' or 'function'`
              );
            Q = Y.pipe((0, O.U)((xe) => E(xe, N)));
          }
          return Q.pipe(
            (function F(E, N) {
              return (x) => x.lift(new C(E, N));
            })()
          );
        };
      }
      const Xn = "https://ngrx.io/guide/store/configuration/runtime-checks";
      function Le(E) {
        return void 0 === E;
      }
      function Sr(E) {
        return null === E;
      }
      function Rt(E) {
        return Array.isArray(E);
      }
      function Be(E) {
        return "object" == typeof E && null !== E;
      }
      function Nt(E) {
        return "function" == typeof E;
      }
      function Rn(E, N) {
        return E === N;
      }
      function Rs(E, N, x) {
        for (let j = 0; j < E.length; j++) if (!x(E[j], N[j])) return !0;
        return !1;
      }
      function rs(E, N = Rn, x = Rn) {
        let Q,
          j = null,
          Y = null;
        return {
          memoized: function qe() {
            if (void 0 !== Q) return Q.result;
            if (!j) return (Y = E.apply(null, arguments)), (j = arguments), Y;
            if (!Rs(arguments, j, N)) return Y;
            const We = E.apply(null, arguments);
            return (j = arguments), x(Y, We) ? Y : ((Y = We), We);
          },
          reset: function xe() {
            (j = null), (Y = null);
          },
          setResult: function ot(We) {
            Q = { result: We };
          },
          clearResult: function Ge() {
            Q = void 0;
          },
        };
      }
      function xr(...E) {
        return (function Ls(E, N = { stateFn: Ns }) {
          return function (...x) {
            let j = x;
            if (Array.isArray(j[0])) {
              const [We, ...Ht] = j;
              j = [...We, ...Ht];
            }
            const Y = j.slice(0, j.length - 1),
              Q = j[j.length - 1],
              xe = Y.filter(
                (We) => We.release && "function" == typeof We.release
              ),
              ot = E(function (...We) {
                return Q.apply(null, We);
              }),
              Ge = rs(function (We, Ht) {
                return N.stateFn.apply(null, [We, Y, Ht, ot]);
              });
            return Object.assign(Ge.memoized, {
              release: function qe() {
                Ge.reset(), ot.reset(), xe.forEach((We) => We.release());
              },
              projector: ot.memoized,
              setResult: Ge.setResult,
              clearResult: Ge.clearResult,
            });
          };
        })(rs)(...E);
      }
      function Ns(E, N, x, j) {
        if (void 0 === x) {
          const Q = N.map((xe) => xe(E));
          return j.memoized.apply(null, Q);
        }
        const Y = N.map((Q) => Q(E, x));
        return j.memoized.apply(null, [...Y, x]);
      }
      function at(E) {
        return xr(
          (N) => {
            const x = N[E];
            return (
              (0, f.X6Q)() &&
                !(E in N) &&
                console.warn(
                  `@ngrx/store: The feature name "${E}" does not exist in the state, therefore createFeatureSelector cannot access it.  Be sure it is imported in a loaded module using StoreModule.forRoot('${E}', ...) or StoreModule.forFeature('${E}', ...).  If the default state is intended to be undefined, as is the case with router state, this development-only warning message can be ignored.`
                ),
              x
            );
          },
          (N) => N
        );
      }
      function nr(E) {
        Object.freeze(E);
        const N = Nt(E);
        return (
          Object.getOwnPropertyNames(E).forEach((x) => {
            if (
              !x.startsWith("\u0275") &&
              (function qo(E, N) {
                return Object.prototype.hasOwnProperty.call(E, N);
              })(E, x) &&
              (!N || ("caller" !== x && "callee" !== x && "arguments" !== x))
            ) {
              const j = E[x];
              (Be(j) || Nt(j)) && !Object.isFrozen(j) && nr(j);
            }
          }),
          E
        );
      }
      function un(E, N = []) {
        return (Le(E) || Sr(E)) && 0 === N.length
          ? { path: ["root"], value: E }
          : Object.keys(E).reduce((j, Y) => {
              if (j) return j;
              const Q = E[Y];
              return (function sn(E) {
                return Nt(E) && E.hasOwnProperty("\u0275cmp");
              })(Q)
                ? j
                : !(
                    Le(Q) ||
                    Sr(Q) ||
                    (function Or(E) {
                      return "number" == typeof E;
                    })(Q) ||
                    (function Ee(E) {
                      return "boolean" == typeof E;
                    })(Q) ||
                    (function Pn(E) {
                      return "string" == typeof E;
                    })(Q) ||
                    Rt(Q)
                  ) &&
                    ((function Fn(E) {
                      if (
                        !(function ts(E) {
                          return Be(E) && !Rt(E);
                        })(E)
                      )
                        return !1;
                      const N = Object.getPrototypeOf(E);
                      return N === Object.prototype || null === N;
                    })(Q)
                      ? un(Q, [...N, Y])
                      : { path: [...N, Y], value: Q });
            }, !1);
      }
      function Yt(E, N) {
        if (!1 === E) return;
        const x = E.path.join("."),
          j = new Error(
            `Detected unserializable ${N} at "${x}". ${Xn}#strict${N}serializability`
          );
        throw ((j.value = E.value), (j.unserializablePath = x), j);
      }
      function ss(E) {
        return (0, f.X6Q)()
          ? Object.assign(
              {
                strictStateSerializability: !1,
                strictActionSerializability: !1,
                strictStateImmutability: !0,
                strictActionImmutability: !0,
                strictActionWithinNgZone: !1,
                strictActionTypeUniqueness: !1,
              },
              E
            )
          : {
              strictStateSerializability: !1,
              strictActionSerializability: !1,
              strictStateImmutability: !1,
              strictActionImmutability: !1,
              strictActionWithinNgZone: !1,
              strictActionTypeUniqueness: !1,
            };
      }
      function Ot({
        strictActionSerializability: E,
        strictStateSerializability: N,
      }) {
        return (x) =>
          E || N
            ? (function rr(E, N) {
                return function (x, j) {
                  N.action(j) && Yt(un(j), "action");
                  const Y = E(x, j);
                  return N.state() && Yt(un(Y), "state"), Y;
                };
              })(x, { action: (j) => E && !Ie(j), state: () => N })
            : x;
      }
      function ie({ strictActionImmutability: E, strictStateImmutability: N }) {
        return (x) =>
          E || N
            ? (function an(E, N) {
                return function (x, j) {
                  const Y = N.action(j) ? nr(j) : j,
                    Q = E(x, Y);
                  return N.state() ? nr(Q) : Q;
                };
              })(x, { action: (j) => E && !Ie(j), state: () => N })
            : x;
      }
      function Ie(E) {
        return E.type.startsWith("@ngrx");
      }
      function Ue({ strictActionWithinNgZone: E }) {
        return (N) =>
          E
            ? (function gt(E, N) {
                return function (x, j) {
                  if (N.action(j) && !f.R0b.isInAngularZone())
                    throw new Error(
                      `Action '${j.type}' running outside NgZone. ${Xn}#strictactionwithinngzone`
                    );
                  return E(x, j);
                };
              })(N, { action: (x) => E && !Ie(x) })
            : N;
      }
      function It(E) {
        return [
          { provide: mt, useValue: E },
          { provide: nn, useFactory: ut, deps: [mt] },
          { provide: rn, deps: [nn], useFactory: ss },
          { provide: Xe, multi: !0, deps: [rn], useFactory: ie },
          { provide: Xe, multi: !0, deps: [rn], useFactory: Ot },
          { provide: Xe, multi: !0, deps: [rn], useFactory: Ue },
        ];
      }
      function cn() {
        return [{ provide: Os, multi: !0, deps: [rn], useFactory: Zt }];
      }
      function ut(E) {
        return E;
      }
      function Zt(E) {
        if (!E.strictActionTypeUniqueness) return;
        const N = Object.entries(W)
          .filter(([, x]) => x > 1)
          .map(([x]) => x);
        if (N.length)
          throw new Error(
            `Action types are registered more than once, ${N.map(
              (x) => `"${x}"`
            ).join(", ")}. ${Xn}#strictactiontypeuniqueness`
          );
      }
      let He = (() => {
          class E {
            constructor(x, j, Y, Q, xe, ot) {}
          }
          return (
            (E.ɵfac = function (x) {
              return new (x || E)(
                f.LFG(Jn),
                f.LFG(Ir),
                f.LFG(Qn),
                f.LFG(ke),
                f.LFG(Is, 8),
                f.LFG(Os, 8)
              );
            }),
            (E.ɵmod = f.oAB({ type: E })),
            (E.ɵinj = f.cJS({})),
            E
          );
        })(),
        _n = (() => {
          class E {
            constructor(x, j, Y, Q, xe) {
              (this.features = x),
                (this.featureReducers = j),
                (this.reducerManager = Y);
              const ot = x.map((Ge, qe) => {
                const Ht = j.shift()[qe];
                return Object.assign(Object.assign({}, Ge), {
                  reducers: Ht,
                  initialState: Pr(Ge.initialState),
                });
              });
              Y.addFeatures(ot);
            }
            ngOnDestroy() {
              this.reducerManager.removeFeatures(this.features);
            }
          }
          return (
            (E.ɵfac = function (x) {
              return new (x || E)(
                f.LFG(Ve),
                f.LFG(va),
                f.LFG(yt),
                f.LFG(He),
                f.LFG(Os, 8)
              );
            }),
            (E.ɵmod = f.oAB({ type: E })),
            (E.ɵinj = f.cJS({})),
            E
          );
        })(),
        Nn = (() => {
          class E {
            static forRoot(x, j = {}) {
              return {
                ngModule: He,
                providers: [
                  {
                    provide: Is,
                    useFactory: bt,
                    deps: [[ke, new f.FiY(), new f.tp0()]],
                  },
                  { provide: Ke, useValue: j.initialState },
                  { provide: Ze, useFactory: Pr, deps: [Ke] },
                  { provide: fe, useValue: x },
                  { provide: As, useExisting: x instanceof f.OlP ? x : fe },
                  {
                    provide: Ye,
                    deps: [f.zs3, fe, [new f.tBr(As)]],
                    useFactory: Ae,
                  },
                  {
                    provide: ba,
                    useValue: j.metaReducers ? j.metaReducers : [],
                  },
                  { provide: Mr, deps: [Xe, ba], useFactory: kn },
                  {
                    provide: Oe,
                    useValue: j.reducerFactory ? j.reducerFactory : xs,
                  },
                  { provide: Qe, deps: [Oe, Mr], useFactory: Tr },
                  Da,
                  Vt,
                  Ca,
                  wa,
                  me,
                  It(j.runtimeChecks),
                  cn(),
                ],
              };
            }
            static forFeature(x, j, Y = {}) {
              return {
                ngModule: _n,
                providers: [
                  {
                    provide: vt,
                    multi: !0,
                    useValue: x instanceof Object ? {} : Y,
                  },
                  {
                    provide: Ea,
                    multi: !0,
                    useValue: {
                      key: x instanceof Object ? x.name : x,
                      reducerFactory:
                        Y instanceof f.OlP || !Y.reducerFactory
                          ? xs
                          : Y.reducerFactory,
                      metaReducers:
                        Y instanceof f.OlP || !Y.metaReducers
                          ? []
                          : Y.metaReducers,
                      initialState:
                        Y instanceof f.OlP || !Y.initialState
                          ? void 0
                          : Y.initialState,
                    },
                  },
                  { provide: Ve, deps: [f.zs3, vt, Ea], useFactory: sr },
                  {
                    provide: Ss,
                    multi: !0,
                    useValue: x instanceof Object ? x.reducer : j,
                  },
                  {
                    provide: Yo,
                    multi: !0,
                    useExisting: j instanceof f.OlP ? j : Ss,
                  },
                  {
                    provide: va,
                    multi: !0,
                    deps: [f.zs3, Ss, [new f.tBr(Yo)]],
                    useFactory: Ln,
                  },
                  cn(),
                ],
              };
            }
          }
          return (
            (E.ɵfac = function (x) {
              return new (x || E)();
            }),
            (E.ɵmod = f.oAB({ type: E })),
            (E.ɵinj = f.cJS({})),
            E
          );
        })();
      function Ae(E, N) {
        return N instanceof f.OlP ? E.get(N) : N;
      }
      function sr(E, N, x) {
        return x.map((j, Y) => {
          if (N[Y] instanceof f.OlP) {
            const Q = E.get(N[Y]);
            return {
              key: j.key,
              reducerFactory: Q.reducerFactory ? Q.reducerFactory : xs,
              metaReducers: Q.metaReducers ? Q.metaReducers : [],
              initialState: Q.initialState,
            };
          }
          return j;
        });
      }
      function Ln(E, N) {
        return N.map((j) => (j instanceof f.OlP ? E.get(j) : j));
      }
      function Pr(E) {
        return "function" == typeof E ? E() : E;
      }
      function kn(E, N) {
        return E.concat(N);
      }
      function bt(E) {
        if (E)
          throw new TypeError(
            "StoreModule.forRoot() called twice. Feature modules should use StoreModule.forFeature() instead."
          );
        return "guarded";
      }
      function Bn(...E) {
        return { reducer: E.pop(), types: E.map((j) => j.type) };
      }
      function or(E, ...N) {
        const x = new Map();
        for (const j of N)
          for (const Y of j.types) {
            const Q = x.get(Y);
            x.set(Y, Q ? (ot, Ge) => j.reducer(Q(ot, Ge), Ge) : j.reducer);
          }
        return function (j = E, Y) {
          const Q = x.get(Y.type);
          return Q ? Q(j, Y) : j;
        };
      }
    },
  },
  (R) => {
    R((R.s = 3717));
  },
]);
