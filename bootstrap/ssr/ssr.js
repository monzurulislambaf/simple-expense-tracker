import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderList } from "vue/server-renderer";
import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, useSSRContext, createSSRApp, h } from "vue";
import { Link, useForm, createInertiaApp } from "@inertiajs/vue3";
import createServer from "@inertiajs/vue3/server";
import { renderToString } from "@vue/server-renderer";
import { ZiggyVue } from "ziggy-js";
const _sfc_main$6 = {
  __name: "MainLayout",
  __ssrInlineRender: true,
  setup(__props) {
    const theme = ref("light");
    onMounted(() => {
      const saved = localStorage.getItem("theme");
      if (saved) theme.value = saved;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: "min-h-screen bg-base-100",
        "data-theme": theme.value
      }, _attrs))}><div class="navbar bg-base-200"><div class="flex-1">`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/expenses",
        class: "btn btn-ghost text-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`ExpenseTracker`);
          } else {
            return [
              createTextVNode("ExpenseTracker")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex-none"><div class="dropdown dropdown-end"><div tabindex="0" class="btn btn-ghost btn-circle"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM13 5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4h-4a4 4 0 01-4-4V5a2 2 0 012-2h4z"></path></svg></div><ul tabindex="0" class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"><li><a>Light</a></li><li><a>Dark</a></li><li><a>Cupcake</a></li><li><a>Corporate</a></li></ul></div></div></div><main class="p-4">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main></div>`);
    };
  }
};
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Layouts/MainLayout.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>About page</h1></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/About.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$5
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$4 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "Contact",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Contact page</h1></div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Contact.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$4
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$3 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "Create",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      title: "",
      amount: "",
      date: "",
      description: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-lg mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Add New Expense</h1><form class="space-y-4"><div><label class="label"><span class="label-text">Title</span></label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="input input-bordered w-full" required>`);
      if (unref(form).errors.title) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Amount ($)</span></label><input${ssrRenderAttr("value", unref(form).amount)} type="number" step="0.01" class="input input-bordered w-full" required>`);
      if (unref(form).errors.amount) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.amount)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Date</span></label><input${ssrRenderAttr("value", unref(form).date)} type="date" class="input input-bordered w-full" required>`);
      if (unref(form).errors.date) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.date)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Description (Optional)</span></label><textarea class="textarea textarea-bordered w-full" rows="3">${ssrInterpolate(unref(form).description)}</textarea></div><div class="flex gap-2"><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Save Expense </button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/expenses",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Create.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$3
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$2 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "Edit",
  __ssrInlineRender: true,
  props: {
    expense: Object
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      title: props.expense.title,
      amount: props.expense.amount,
      date: props.expense.date,
      description: props.expense.description
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-lg mx-auto" }, _attrs))}><h1 class="text-2xl font-bold mb-6">Edit Expense</h1><form class="space-y-4"><div><label class="label"><span class="label-text">Title</span></label><input${ssrRenderAttr("value", unref(form).title)} type="text" class="input input-bordered w-full" required>`);
      if (unref(form).errors.title) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.title)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Amount ($)</span></label><input${ssrRenderAttr("value", unref(form).amount)} type="number" step="0.01" class="input input-bordered w-full" required>`);
      if (unref(form).errors.amount) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.amount)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Date</span></label><input${ssrRenderAttr("value", unref(form).date)} type="date" class="input input-bordered w-full" required>`);
      if (unref(form).errors.date) {
        _push(`<div class="text-red-500 text-sm mt-1">${ssrInterpolate(unref(form).errors.date)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label class="label"><span class="label-text">Description (Optional)</span></label><textarea class="textarea textarea-bordered w-full" rows="3">${ssrInterpolate(unref(form).description)}</textarea></div><div class="flex gap-2"><button type="submit" class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Update Expense </button>`);
      _push(ssrRenderComponent(unref(Link), {
        href: "/expenses",
        class: "btn"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Cancel`);
          } else {
            return [
              createTextVNode("Cancel")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></form></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Edit.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$2
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main$1 = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "Index",
  __ssrInlineRender: true,
  props: {
    expenses: Array,
    total: Number
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "p-6 max-w-4xl mx-auto" }, _attrs))}><div class="flex justify-between items-center mb-6"><h1 class="text-2xl font-bold">Expense Tracker</h1>`);
      _push(ssrRenderComponent(unref(Link), {
        href: _ctx.route("expenses.create"),
        class: "btn btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Add Expense `);
          } else {
            return [
              createTextVNode(" Add Expense ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (_ctx.$page.props.flash.success) {
        _push(`<div class="alert alert-success mb-4 shadow-lg">${ssrInterpolate(_ctx.$page.props.flash.success)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="stats shadow mb-6"><div class="stat"><div class="stat-title">Total Expenses</div><div class="stat-value text-green-600">$${ssrInterpolate(__props.total.toFixed(2))}</div></div></div><div class="overflow-x-auto"><table class="table table-zebra w-full"><thead><tr><th>Title</th><th>Amount</th><th>Date</th><th>Description</th><th>Actions</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.expenses, (expense) => {
        _push(`<tr><td>${ssrInterpolate(expense.title)}</td><td class="text-red-600 font-semibold">$${ssrInterpolate(expense.amount)}</td><td>${ssrInterpolate(new Date(expense.date).toLocaleDateString())}</td><td>${ssrInterpolate(expense.description || "—")}</td><td class="space-x-2">`);
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("expenses.edit", expense.id),
          class: "btn btn-xs btn-outline"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Edit `);
            } else {
              return [
                createTextVNode(" Edit ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`<button class="btn btn-xs btn-error"> Delete </button></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Expenses/Index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main$1
}, Symbol.toStringTag, { value: "Module" }));
const _sfc_main = /* @__PURE__ */ Object.assign({ layout: _sfc_main$6 }, {
  __name: "Home",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><h1>Home Page</h1></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Home.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __vite_glob_0_5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: _sfc_main
}, Symbol.toStringTag, { value: "Module" }));
createServer(
  (page) => createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/About.vue": __vite_glob_0_0, "./Pages/Contact.vue": __vite_glob_0_1, "./Pages/Expenses/Create.vue": __vite_glob_0_2, "./Pages/Expenses/Edit.vue": __vite_glob_0_3, "./Pages/Expenses/Index.vue": __vite_glob_0_4, "./Pages/Home.vue": __vite_glob_0_5 });
      return pages[`./Pages/${name}.vue`];
    },
    setup({ App, props, plugin }) {
      return createSSRApp({
        render: () => h(App, props)
      }).use(plugin).use(ZiggyVue, {
        ...page.props.ziggy,
        location: new URL(page.props.ziggy.location)
      });
    }
  })
);
