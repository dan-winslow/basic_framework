import { jsxs as i, jsx as a, Fragment as X } from "react/jsx-runtime";
import { useState as w, createContext as Z, useContext as a1, useRef as I, useEffect as p, Children as s1 } from "react";
import { Link as e1 } from "react-router-dom";
const c1 = ({ type: s, message: e, dismissible: c }) => {
  const [t, r] = w(!0);
  return t && /* @__PURE__ */ i("div", { className: `alert alert-${s} flex justify-between items-center`, children: [
    /* @__PURE__ */ a("span", { children: e }),
    c && /* @__PURE__ */ a("button", { className: "btn btn-sm btn-clear alert-close", onClick: () => r(!1), "aria-label": "Close Alert", children: /* @__PURE__ */ a(z, { name: "close" }) })
  ] });
}, _1 = ({ dismissible: s, alerts: e }) => {
  const [c, t] = w(!0);
  return c && /* @__PURE__ */ i("div", { className: "alert-list", children: [
    /* @__PURE__ */ a("h2", { children: "Alert List" }),
    s && /* @__PURE__ */ a("button", { className: "btn btn-danger btn-outline mb-md", onClick: () => t(!1), "aria-label": "Close Alert", children: "Dismiss All" }),
    e.map((r, n) => /* @__PURE__ */ a(c1, { type: r.type, message: r.message, dismissible: r.dismissible }, n))
  ] });
}, t1 = ({ children: s, className: e = "" }) => /* @__PURE__ */ a("div", { className: `card-header ${e}`, children: s }), r1 = ({ children: s, className: e = "" }) => /* @__PURE__ */ a("div", { className: `card-body ${e}`, children: s }), n1 = ({ children: s, className: e = "" }) => /* @__PURE__ */ a("div", { className: `card-footer ${e}`, children: s }), l1 = ({ children: s, className: e = "" }) => /* @__PURE__ */ a("h3", { className: `card-title ${e}`, children: s }), o1 = ({ children: s, className: e = "" }) => /* @__PURE__ */ a("p", { className: `card-description ${e}`, children: s }), Y1 = ({ cardContent: s, cardTitle: e, cardDescription: c, cardFooter: t, className: r = "" }) => /* @__PURE__ */ i("div", { className: `card text-card-foreground flex flex-col gap-6 rounded-xl border ${r}`, children: [
  /* @__PURE__ */ i(t1, { children: [
    /* @__PURE__ */ a(l1, { children: e }),
    /* @__PURE__ */ a(o1, { children: c })
  ] }),
  /* @__PURE__ */ a(r1, { className: "text-center", children: s }),
  /* @__PURE__ */ a(n1, { children: t })
] }), _ = Z(null), N = () => {
  const s = a1(_);
  if (!s)
    throw new Error("useCarousel must be used within a <Carousel />");
  return s;
}, J1 = (s = !1) => {
  const [e, c] = w(s);
  return { isOpen: e, open: () => c(!0), close: () => c(!1), toggle: () => c((d) => !d) };
}, i1 = ({
  children: s,
  className: e = ""
}) => {
  const { currentIndex: c, slidesPerView: t, gap: r } = N(), n = `calc((100% - ${r * (t - 1)}px) / ${t})`, d = `calc(-${c} * (${n} + ${r}px))`;
  return /* @__PURE__ */ a("div", { className: `carousel-viewport ${e}`, children: /* @__PURE__ */ a(
    "div",
    {
      className: "carousel-track",
      style: {
        transform: `translateX(${d})`,
        gap: `${r}px`
      },
      children: s
    }
  ) });
}, d1 = ({ children: s, className: e = "" }) => {
  const { slidesPerView: c, gap: t } = N();
  return /* @__PURE__ */ a(
    "div",
    {
      "data-carousel-item": !0,
      className: `carousel-item ${e}`,
      role: "group",
      "aria-roledescription": "slide",
      style: {
        flex: `0 0 calc((100% - ${t * (c - 1)}px) / ${c})`
      },
      children: s
    }
  );
}, v1 = ({
  className: s = "",
  style: e,
  ...c
}) => {
  const { scrollPrev: t, canScrollPrev: r } = N();
  return /* @__PURE__ */ a(
    "button",
    {
      className: `carousel-btn carousel-btn-prev btn btn-secondary ${s}`,
      onClick: t,
      disabled: !r,
      "aria-label": "Previous slide",
      style: { ...e },
      ...c,
      children: /* @__PURE__ */ a(z, { name: "chevron-down", style: { transform: "rotate(90deg)" } })
    }
  );
}, h1 = ({
  className: s = "",
  style: e,
  ...c
}) => {
  const { scrollNext: t, canScrollNext: r } = N();
  return /* @__PURE__ */ a(
    "button",
    {
      className: `carousel-btn carousel-btn-next btn btn-secondary ${s}`,
      onClick: t,
      disabled: !r,
      "aria-label": "Next slide",
      style: { ...e },
      ...c,
      children: /* @__PURE__ */ a(z, { name: "chevron-up", style: { transform: "rotate(90deg)" } })
    }
  );
}, Q1 = ({
  children: s,
  className: e = "",
  style: c,
  slidesPerView: t = 1,
  gap: r = 16,
  autoPlay: n = !1,
  autoPlayInterval: d = 5e3,
  showNavigation: l = !0
}) => {
  const [o, m] = w(0), [h, b] = w(0), y = I(null), u = I(null), g = Math.max(0, h - t), f = o > 0, x = o < g, M = () => {
    m((v) => Math.max(0, v - 1));
  }, H = () => {
    m((v) => Math.min(g, v + 1));
  }, Y = (v) => {
    m(Math.max(0, Math.min(g, v)));
  };
  p(() => {
    if (y.current) {
      const v = y.current.querySelectorAll("[data-carousel-item]");
      b(v.length);
    }
  }), p(() => {
    if (n && h > t)
      return u.current = setInterval(() => {
        m((v) => v >= g ? 0 : v + 1);
      }, d), () => {
        u.current && clearInterval(u.current);
      };
  }, [n, d, g, h, t]);
  const J = (v) => {
    v.key === "ArrowLeft" ? (v.preventDefault(), M()) : v.key === "ArrowRight" && (v.preventDefault(), H());
  }, Q = s1.map(s, (v) => /* @__PURE__ */ a(d1, { children: v }));
  return /* @__PURE__ */ a(
    _.Provider,
    {
      value: {
        currentIndex: o,
        totalSlides: h,
        slidesPerView: t,
        gap: r,
        scrollPrev: M,
        scrollNext: H,
        canScrollPrev: f,
        canScrollNext: x,
        goToSlide: Y
      },
      children: /* @__PURE__ */ i(
        "div",
        {
          ref: y,
          className: `carousel ${e}`,
          style: { "--carousel-gap": `${r}px`, ...c },
          role: "region",
          "aria-roledescription": "carousel",
          onKeyDown: J,
          tabIndex: 0,
          children: [
            /* @__PURE__ */ a(i1, { children: Q }),
            l && /* @__PURE__ */ i(X, { children: [
              /* @__PURE__ */ a(v1, {}),
              /* @__PURE__ */ a(h1, {})
            ] })
          ]
        }
      )
    }
  );
}, Z1 = ({ isOpen: s, onClose: e, title: c, children: t, footer: r }) => s ? /* @__PURE__ */ a("div", { className: "modal-overlay", onClick: e, children: /* @__PURE__ */ i("div", { className: "modal", onClick: (n) => n.stopPropagation(), children: [
  /* @__PURE__ */ i("div", { className: "modal-header", children: [
    /* @__PURE__ */ a("h3", { className: "mb-0", children: c }),
    /* @__PURE__ */ a("button", { className: "btn btn-secondary btn-sm", onClick: e, children: "✕" })
  ] }),
  /* @__PURE__ */ a("div", { className: "modal-body", children: t }),
  r && /* @__PURE__ */ a("div", { className: "modal-footer", children: r })
] }) }) : null, a0 = ({ items: s, allowMultiple: e = !1, defaultOpen: c = [] }) => {
  const [t, r] = w(c), n = (l) => {
    r(
      e ? (o) => o.includes(l) ? o.filter((m) => m !== l) : [...o, l] : (o) => o.includes(l) ? [] : [l]
    );
  }, d = (l) => t.includes(l);
  return /* @__PURE__ */ a("div", { className: "accordion", children: s.map((l) => /* @__PURE__ */ i("div", { className: `accordion-item ${d(l.id) ? "open" : ""}`, children: [
    /* @__PURE__ */ i(
      "button",
      {
        className: "accordion-trigger",
        onClick: () => n(l.id),
        "aria-expanded": d(l.id),
        children: [
          /* @__PURE__ */ a("span", { className: "accordion-title", children: l.title }),
          /* @__PURE__ */ a("span", { className: "accordion-icon", children: /* @__PURE__ */ a(z, { name: d(l.id) ? "minus" : "add" }) })
        ]
      }
    ),
    /* @__PURE__ */ a("div", { className: `accordion-content ${d(l.id) ? "open" : ""}`, children: /* @__PURE__ */ a("div", { className: "accordion-body", children: l.content }) })
  ] }, l.id)) });
}, m1 = ({ children: s, onClose: e, showCloseButton: c = !0 }) => /* @__PURE__ */ i("div", { className: "drawer-header", children: [
  /* @__PURE__ */ a("div", { className: "drawer-header-content", children: s }),
  c && e && /* @__PURE__ */ a("button", { className: "drawer-close-btn", onClick: e, "aria-label": "Close drawer", children: /* @__PURE__ */ a(z, { name: "close" }) })
] }), w1 = ({ children: s }) => /* @__PURE__ */ a("div", { className: "drawer-body", children: s }), g1 = ({ children: s }) => /* @__PURE__ */ a("div", { className: "drawer-footer", children: s }), s0 = ({
  isOpen: s,
  onClose: e,
  position: c = "left",
  children: t,
  showOverlay: r = !0,
  closeOnOverlayClick: n = !0,
  width: d,
  height: l,
  header: o,
  footer: m
}) => {
  const [h, b] = w(!1), [y, u] = w(!1);
  if (p(() => {
    if (s)
      b(!0), requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          u(!0);
        });
      });
    else {
      u(!1);
      const x = setTimeout(() => {
        b(!1);
      }, 300);
      return () => clearTimeout(x);
    }
  }, [s]), p(() => {
    const x = (M) => {
      M.key === "Escape" && s && e();
    };
    return document.addEventListener("keydown", x), () => document.removeEventListener("keydown", x);
  }, [s, e]), p(() => (s ? document.body.style.overflow = "hidden" : document.body.style.overflow = "", () => {
    document.body.style.overflow = "";
  }), [s]), !h) return null;
  const g = () => {
    n && e();
  }, f = {};
  return d && (c === "left" || c === "right") && (f.width = d), l && (c === "top" || c === "bottom") && (f.height = l), /* @__PURE__ */ i("div", { className: `drawer-container ${y ? "drawer-active" : ""}`, children: [
    r && /* @__PURE__ */ a("div", { className: "drawer-overlay", onClick: g }),
    /* @__PURE__ */ a(
      "div",
      {
        className: `drawer drawer-${c}`,
        style: f,
        children: /* @__PURE__ */ i("div", { className: "drawer-content", children: [
          o && /* @__PURE__ */ a(m1, { onClose: e, children: o }),
          /* @__PURE__ */ a(w1, { children: t }),
          m && /* @__PURE__ */ a(g1, { children: m })
        ] })
      }
    )
  ] });
}, p1 = ({ isOpen: s }) => /* @__PURE__ */ i("div", { className: `hamburger-icon ${s ? "hamburger-open" : ""}`, children: [
  /* @__PURE__ */ a("span", { className: "hamburger-line" }),
  /* @__PURE__ */ a("span", { className: "hamburger-line" }),
  /* @__PURE__ */ a("span", { className: "hamburger-line" })
] }), k = ({ label: s, onClick: e }) => /* @__PURE__ */ a("div", { className: "dropdown-item", onClick: e, children: s }), u1 = ({ topItems: s, bottomItems: e }) => /* @__PURE__ */ i("div", { className: "dropdown-item-list", children: [
  /* @__PURE__ */ a("div", { className: "dropdown-item-list-top", children: s.map((c, t) => /* @__PURE__ */ a(k, { label: c.label, onClick: c.onClick }, t)) }),
  e && /* @__PURE__ */ i(X, { children: [
    /* @__PURE__ */ a("div", { className: "dropdown-divider" }),
    /* @__PURE__ */ a("div", { className: "dropdown-item-list-bottom", children: e.map((c, t) => /* @__PURE__ */ a(k, { label: c.label, onClick: c.onClick }, t)) })
  ] })
] }), e0 = ({ trigger: s, topItems: e, bottomItems: c, useHamburger: t = !1 }) => {
  const [r, n] = w(!1), d = I(null);
  return p(() => {
    const o = (m) => {
      d.current && !d.current.contains(m.target) && n(!1);
    };
    return document.addEventListener("mousedown", o), () => document.removeEventListener("mousedown", o);
  }, []), /* @__PURE__ */ i("div", { className: "dropdown", ref: d, children: [
    /* @__PURE__ */ a("div", { className: "dropdown-trigger", onClick: () => n(!r), children: t ? /* @__PURE__ */ a(p1, { isOpen: r }) : s }),
    r && /* @__PURE__ */ a("div", { className: "dropdown-menu", children: /* @__PURE__ */ a(u1, { topItems: e, bottomItems: c }) })
  ] });
}, x1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-home"><path class="primary" d="M9 22H5a1 1 0 0 1-1-1V11l8-8 8 8v10a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-4a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v4a1 1 0 0 1-1 1zm3-9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path class="secondary" d="M12.01 4.42l-8.3 8.3a1 1 0 1 1-1.42-1.41l9.02-9.02a1 1 0 0 1 1.41 0l8.99 9.02a1 1 0 0 1-1.42 1.41l-8.28-8.3z"/></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-dashboard"><path class="secondary" d="M3 11h2a1 1 0 0 1 0 2H3v-2zm3.34-6.07l1.42 1.41a1 1 0 0 1-1.42 1.42L4.93 6.34l1.41-1.41zM13 3v2a1 1 0 0 1-2 0V3h2zm6.07 3.34l-1.41 1.42a1 1 0 1 1-1.42-1.42l1.42-1.41 1.41 1.41zM21 13h-2a1 1 0 0 1 0-2h2v2z"/><path class="primary" d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm-6.93-6h13.86a8 8 0 1 0-13.86 0z"/><path class="secondary" d="M11 14.27V9a1 1 0 0 1 2 0v5.27a2 2 0 1 1-2 0z"/></svg>', A = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user-group"><path class="primary" d="M12 13a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1 1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3zM7 9a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm10 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/><path class="secondary" d="M12 13a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm-3 1h6a3 3 0 0 1 3 3v3a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a3 3 0 0 1 3-3z"/></svg>', B = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-notification"><circle cx="12" cy="19" r="3" class="secondary"/><path class="primary" d="M10.02 4.28L10 4a2 2 0 1 1 3.98.28A7 7 0 0 1 19 11v5a1 1 0 0 0 1 1 1 1 0 0 1 0 2H4a1 1 0 0 1 0-2 1 1 0 0 0 1-1v-5a7 7 0 0 1 5.02-6.72z"/></svg>', y1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-mail"><path class="primary" d="M22 8.62V18a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.62l9.55 4.77a1 1 0 0 0 .9 0L22 8.62z"/><path class="secondary" d="M12 11.38l-10-5V6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v.38l-10 5z"/></svg>', f1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-user"><path class="primary" d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z"/><path class="secondary" d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"/></svg>', V = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-chat"><path class="primary" d="M2 15V5c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v15a1 1 0 0 1-1.7.7L16.58 17H4a2 2 0 0 1-2-2z"/><path class="secondary" d="M6 7h12a1 1 0 0 1 0 2H6a1 1 0 1 1 0-2zm0 4h8a1 1 0 0 1 0 2H6a1 1 0 0 1 0-2z"/></svg>', L = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-cog"><path class="primary" d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"/><circle cx="12" cy="12" r="2" class="secondary"/></svg>', $ = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-menu"><path class="secondary" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/></svg>', S = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-close"><path class="secondary" fill-rule="evenodd" d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"/></svg>', z1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-cheveron-down"><path class="secondary" fill-rule="evenodd" d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"/></svg>', b1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-cheveron-up"><path class="secondary" fill-rule="evenodd" d="M8.7 13.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 0 1 1.4 0l4 4a1 1 0 0 1-1.4 1.4L12 10.42l-3.3 3.3z"/></svg>', M1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-check"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"/></svg>', D = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-information"><path class="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/><path class="secondary" d="M11 12a1 1 0 0 1 0-2h2a1 1 0 0 1 .96 1.27L12.33 17H13a1 1 0 0 1 0 2h-2a1 1 0 0 1-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-important"><path class="primary" d="M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z"/><path class="secondary" d="M12 18a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm1-5.9c-.13 1.2-1.88 1.2-2 0l-.5-5a1 1 0 0 1 1-1.1h1a1 1 0 0 1 1 1.1l-.5 5z"/></svg>', N1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-search"><circle cx="10" cy="10" r="7" class="primary"/><path class="secondary" d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1-.44-1.14l-1.1-1.1a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"/></svg>', E = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-add"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"/></svg>', P = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-remove"><path class="secondary" fill-rule="evenodd" d="M17 11a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h10z"/></svg>', q = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-edit"><path class="primary" d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"/><rect width="20" height="2" x="2" y="20" class="secondary" rx="1"/></svg>', F = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-trash"><path class="primary" d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"/><path class="secondary" d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"/></svg>', I1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-star"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M9.53 16.93a1 1 0 0 1-1.45-1.05l.47-2.76-2-1.95a1 1 0 0 1 .55-1.7l2.77-.4 1.23-2.51a1 1 0 0 1 1.8 0l1.23 2.5 2.77.4a1 1 0 0 1 .55 1.71l-2 1.95.47 2.76a1 1 0 0 1-1.45 1.05L12 15.63l-2.47 1.3z"/></svg>', H1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-heart"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M12.88 8.88a3 3 0 1 1 4.24 4.24l-4.41 4.42a1 1 0 0 1-1.42 0l-4.41-4.42a3 3 0 1 1 4.24-4.24l.88.88.88-.88z"/></svg>', k1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-refresh"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M8.52 7.11a5.98 5.98 0 0 1 8.98 2.5 1 1 0 1 1-1.83.8 4 4 0 0 0-5.7-1.86l.74.74A1 1 0 0 1 10 11H7a1 1 0 0 1-1-1V7a1 1 0 0 1 1.7-.7l.82.81zm5.51 8.34l-.74-.74A1 1 0 0 1 14 13h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1.7.7l-.82-.81A5.98 5.98 0 0 1 6.5 14.4a1 1 0 1 1 1.83-.8 4 4 0 0 0 5.7 1.85z"/></svg>', R = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-external-window"><path class="primary" d="M12 8a1 1 0 0 1-1 1H5v10h10v-6a1 1 0 0 1 2 0v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9c0-1.1.9-2 2-2h6a1 1 0 0 1 1 1z"/><path class="secondary" d="M19 6.41L8.7 16.71a1 1 0 1 1-1.4-1.42L17.58 5H14a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0V6.41z"/></svg>', C1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-link"><path class="secondary" d="M19.48 13.03l-.02-.03a1 1 0 1 1 1.75-.98A6 6 0 0 1 16 21h-4a6 6 0 1 1 0-12h1a1 1 0 0 1 0 2h-1a4 4 0 1 0 0 8h4a4 4 0 0 0 3.48-5.97z"/><path class="primary" d="M4.52 10.97l.02.03a1 1 0 1 1-1.75.98A6 6 0 0 1 8 3h4a6 6 0 1 1 0 12h-1a1 1 0 0 1 0-2h1a4 4 0 1 0 0-8H8a4 4 0 0 0-3.48 5.97z"/></svg>', A1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-globe"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M2.05 11A10 10 0 0 1 15 2.46V6a2 2 0 0 1-2 2h-1v1a2 2 0 0 1-1 1.73V12h2a2 2 0 0 1 2 2v1h2a2 2 0 0 1 2 2v2.14A9.97 9.97 0 0 1 12 22v-4h-1a2 2 0 0 1-2-2v-2a2 2 0 0 1-2-2v-1H2.05z"/></svg>', B1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-lock"><g><path class="secondary" d="M12 10v3a2 2 0 0 0-1 3.73V18a1 1 0 0 0 1 1v3H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h7z"/><path class="primary" d="M12 19a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 12 13v-3h3V7a3 3 0 0 0-6 0v3H7V7a5 5 0 1 1 10 0v3h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7v-3z"/></g></svg>', O = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-lock-open"><g><path class="secondary" d="M12 19v3H5a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h7v3a2 2 0 0 0-1 3.73V18a1 1 0 0 0 1 1z"/><path class="primary" d="M12 19a1 1 0 0 0 1-1v-1.27A2 2 0 0 0 12 13v-3h7a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-7v-3zm5-12a1 1 0 0 1-2 0 3 3 0 0 0-6 0v3H7V7a5 5 0 1 1 10 0z"/></g></svg>', V1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-key"><path class="primary" d="M8.23 10.77a7.01 7.01 0 1 1 5 5L11 18H9v2H7v2.03H2V17l6.23-6.23zM17 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path class="secondary" d="M6.2 18.7a1 1 0 1 1-1.4-1.4l4-4a1 1 0 1 1 1.4 1.4l-4 4z"/></svg>', j = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-photo"><path class="primary" d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm9 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/><path class="secondary" d="M15.3 12.3a1 1 0 0 1 1.4 0l2 2a1 1 0 0 1 .3.7v3a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1v-3a1 1 0 0 1 .3-.7l4-4a1 1 0 0 1 1.4 0l3.3 3.29 1.3-1.3z"/></svg>', L1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-camera"><path class="primary" d="M6.59 6l2.7-2.7A1 1 0 0 1 10 3h4a1 1 0 0 1 .7.3L17.42 6H20a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h2.59zM19 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-7 8a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"/><path class="secondary" d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>', $1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-play"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z"/></svg>', S1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-pause"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M9 8h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1zm5 0h1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/></svg>', D1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-stop"><circle cx="12" cy="12" r="10" class="primary"/><rect width="7" height="7" x="8.5" y="8.5" class="secondary" rx="1"/></svg>', T1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-calendar"><path class="primary" d="M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2zm0 5v10h14V9H5z"/><path class="secondary" d="M7 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1zm10 0a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1z"/></svg>', K = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-time"><circle cx="12" cy="12" r="10" class="primary"/><path class="secondary" d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"/></svg>', U = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-document"><path class="primary" d="M6 2h6v6c0 1.1.9 2 2 2h6v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2z"/><polygon class="secondary" points="14 2 20 8 14 8"/></svg>', E1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-folder"><g><path class="primary" d="M22 10H2V6c0-1.1.9-2 2-2h7l2 2h7a2 2 0 0 1 2 2v2z"/><rect width="20" height="12" x="2" y="8" class="secondary" rx="2"/></g></svg>', P1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-archive"><g><path class="secondary" d="M20.77 5a2 2 0 0 1-.02.22l-1.55 14A2 2 0 0 1 17.2 21H6.79a2 2 0 0 1-1.99-1.78l-1.55-14L3.23 5h17.54z"/><path class="primary" d="M10.59 14l-2.3-2.3a1 1 0 0 1 1.42-1.4L12 12.58l2.3-2.3a1 1 0 0 1 1.4 1.42L13.42 14l2.3 2.3a1 1 0 0 1-1.42 1.4L12 15.42l-2.3 2.3a1 1 0 1 1-1.4-1.42L10.58 14zM4 3h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5c0-1.1.9-2 2-2z"/></g></svg>', q1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-print"><path class="secondary" d="M5 8h14a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5c0-1.1.9-2 2-2zm1 2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2H6z"/><path class="primary" d="M6 14h12v6a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-6zm0-6V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4H6z"/></svg>', F1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-send"><g fill="none" transform="translate(1 2)"><path class="secondary" d="M12 1v15.97l-1 1.12-8.6 1.82a1 1 0 0 1-1.3-1.36l9-18A.99.99 0 0 1 11 0l1 1z"/><path class="primary" d="M11 0c.36 0 .71.18.9.55l9 18a1 1 0 0 1-1.3 1.36L11 18.1V0z"/></g></svg>', G = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-dots-horizontal"><path class="secondary" fill-rule="evenodd" d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>', W = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-dots-vertical"><path class="secondary" fill-rule="evenodd" d="M12 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg>', R1 = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="icon-interface"><path class="primary" d="M4 2h16a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2zm0 4v11h16V6H4z"/><path class="secondary" d="M17.96 16.54l3.75 3.75a1 1 0 0 1-1.42 1.42l-3.75-3.75-.57 2.28a1 1 0 0 1-1.9.11l-3-8a1 1 0 0 1 1.28-1.29l8 3a1 1 0 0 1-.1 1.91l-2.3.57z"/></svg>', O1 = {
  home: x1,
  dashboard: C,
  "user-group": A,
  users: A,
  notification: B,
  bell: B,
  mail: y1,
  user: f1,
  chat: V,
  "message-square": V,
  cog: L,
  settings: L,
  menu: $,
  "panel-left": $,
  close: S,
  x: S,
  "chevron-down": z1,
  "chevron-up": b1,
  check: M1,
  information: D,
  info: D,
  important: T,
  warning: T,
  search: N1,
  add: E,
  plus: E,
  remove: P,
  minus: P,
  edit: q,
  pencil: q,
  trash: F,
  delete: F,
  star: I1,
  heart: H1,
  refresh: k1,
  "external-window": R,
  "external-link": R,
  link: C1,
  globe: A1,
  lock: B1,
  "lock-open": O,
  unlock: O,
  key: V1,
  photo: j,
  image: j,
  camera: L1,
  play: $1,
  pause: S1,
  stop: D1,
  calendar: T1,
  time: K,
  clock: K,
  document: U,
  file: U,
  folder: E1,
  archive: P1,
  print: q1,
  send: F1,
  "dots-horizontal": G,
  "more-horizontal": G,
  "dots-vertical": W,
  "more-vertical": W,
  interface: R1,
  "layout-dashboard": C
}, z = ({ name: s, size: e = 24, className: c = "", style: t = {}, color: r }) => {
  const n = O1[s];
  if (!n)
    return console.warn(`Icon "${s}" not found`), null;
  const o = new DOMParser().parseFromString(n, "image/svg+xml").querySelector("svg");
  if (!o) return null;
  o.setAttribute("width", String(e)), o.setAttribute("height", String(e)), r ? (o.querySelectorAll("path, circle, rect, polygon, .primary, .secondary").forEach((h) => {
    (!h.getAttribute("fill") || h.getAttribute("fill") !== "none") && (h.style.fill = "currentColor");
  }), o.style.color = r) : o.querySelectorAll("path, circle, rect, polygon, .primary, .secondary").forEach((h) => {
    (!h.getAttribute("fill") || h.getAttribute("fill") !== "none") && h.setAttribute("fill", "currentColor");
  });
  const m = {
    display: "inline-block",
    verticalAlign: "middle",
    flexShrink: 0,
    height: e,
    width: e,
    color: r,
    ...t
  };
  return /* @__PURE__ */ a(
    "span",
    {
      className: `icon ${c}`.trim(),
      style: m,
      dangerouslySetInnerHTML: { __html: o.outerHTML },
      "aria-hidden": "true"
    }
  );
}, j1 = () => {
  const [s, e] = w(!1);
  return p(() => {
    localStorage.getItem("theme") === "dark" && (e(!0), document.documentElement.classList.add("theme-dark"));
  }, []), /* @__PURE__ */ i("label", { className: "switch", children: [
    /* @__PURE__ */ a(
      "input",
      {
        type: "checkbox",
        checked: s,
        onChange: () => {
          const t = !s;
          e(t), t ? (document.documentElement.classList.add("theme-dark"), localStorage.setItem("theme", "dark")) : (document.documentElement.classList.remove("theme-dark"), localStorage.setItem("theme", "light"));
        }
      }
    ),
    /* @__PURE__ */ a("span", { className: "switch-slider" })
  ] });
}, c0 = ({ tabs: s }) => {
  var t, r;
  const [e, c] = w((t = s[0]) == null ? void 0 : t.id);
  return /* @__PURE__ */ i("div", { children: [
    /* @__PURE__ */ a("div", { className: "tabs", children: /* @__PURE__ */ a("ul", { className: "tabs-list", children: s.map((n) => /* @__PURE__ */ a(
      "li",
      {
        className: `tab ${e === n.id ? "active" : ""}`,
        onClick: () => c(n.id),
        children: n.label
      },
      n.id
    )) }) }),
    /* @__PURE__ */ a("div", { className: "tab-content", children: (r = s.find((n) => n.id === e)) == null ? void 0 : r.content })
  ] });
}, K1 = ({ link: s, isActive: e }) => /* @__PURE__ */ a("li", { className: `nav-item nav-link${e ? " active" : ""}`, children: s }), U1 = ({ navItems: s, currentPage: e }) => /* @__PURE__ */ a("ul", { className: "nav-list", children: s.map((c) => /* @__PURE__ */ a(e1, { to: `/${c}`, children: /* @__PURE__ */ a(K1, { link: c, isActive: !e || e === c }) }, c)) }), t0 = ({ currentPage: s, borderBottom: e }) => /* @__PURE__ */ a("nav", { className: `nav${e ? " border-b" : ""}`, children: /* @__PURE__ */ a("div", { className: "container", children: /* @__PURE__ */ i("div", { className: "flex items-center justify-between flex-wrap gap-md", children: [
  /* @__PURE__ */ i("div", { className: "flex items-center gap-md lg:gap-lg flex-wrap", children: [
    /* @__PURE__ */ a("h2", { className: "mb-0 text-lg md:text-2xl", children: "Yo Mamma's House" }),
    /* @__PURE__ */ a(U1, { navItems: ["components", "layouts"], currentPage: s })
  ] }),
  /* @__PURE__ */ i("div", { className: "flex items-center gap-md", children: [
    /* @__PURE__ */ a("span", { className: "text-sm text-secondary hidden sm:inline", children: "Theme" }),
    /* @__PURE__ */ a(j1, {})
  ] })
] }) }) });
export {
  a0 as Accordion,
  c1 as Alert,
  _1 as AlertList,
  Y1 as Card,
  Q1 as Carousel,
  s0 as Drawer,
  e0 as Dropdown,
  z as Icon,
  Z1 as Modal,
  t0 as Navbar,
  c0 as Tabs,
  j1 as ThemeToggle,
  N as useCarousel,
  J1 as useDrawer
};
//# sourceMappingURL=index.js.map
