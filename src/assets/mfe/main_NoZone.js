import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/main.js");// src/main.ts
import { platformBrowser } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_platform-browser.js?v=f59f256b";

// src/app/app-module.ts
import { NgModule as NgModule2, provideBrowserGlobalErrorListeners } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
import { BrowserModule } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_platform-browser.js?v=f59f256b";
import { createCustomElement } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_elements.js?v=f59f256b";

// src/app/app-routing-module.ts
import { NgModule } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
import { RouterModule } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_router.js?v=f59f256b";
import * as i0 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
import * as i1 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_router.js?v=f59f256b";
var routes = [];
var AppRoutingModule = class _AppRoutingModule {
  static \u0275fac = function AppRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ i0.\u0275\u0275defineNgModule({ type: _AppRoutingModule });
  static \u0275inj = /* @__PURE__ */ i0.\u0275\u0275defineInjector({ imports: [RouterModule.forRoot(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(AppRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forRoot(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/app.ts
import { Component, signal, ApplicationRef, inject, computed, ChangeDetectorRef } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
import { Validators } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_forms.js?v=f59f256b";
import * as i02 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
import * as i12 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_forms.js?v=f59f256b";
import * as i2 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_common.js?v=f59f256b";
import * as i3 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_router.js?v=f59f256b";
function App_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i02.\u0275\u0275getCurrentView();
    i02.\u0275\u0275elementStart(0, "form", 5);
    i02.\u0275\u0275listener("ngSubmit", function App_Conditional_17_Template_form_ngSubmit_0_listener() {
      i02.\u0275\u0275restoreView(_r1);
      const ctx_r1 = i02.\u0275\u0275nextContext();
      return i02.\u0275\u0275resetView(ctx_r1.onSubmit());
    });
    i02.\u0275\u0275elementStart(1, "div")(2, "label");
    i02.\u0275\u0275text(3, "First Name:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(4, "input", 6);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "div")(6, "label");
    i02.\u0275\u0275text(7, "Last Name:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(8, "input", 7);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(9, "div")(10, "label");
    i02.\u0275\u0275text(11, "Date of Birth:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275element(12, "input", 8);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(13, "div")(14, "label");
    i02.\u0275\u0275text(15, "Gender:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(16, "select", 9)(17, "option", 10);
    i02.\u0275\u0275text(18, "Male");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(19, "option", 11);
    i02.\u0275\u0275text(20, "Female");
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275elementStart(21, "div")(22, "label");
    i02.\u0275\u0275text(23, "Options:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(24, "select", 12)(25, "option", 13);
    i02.\u0275\u0275text(26, "Option 1");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(27, "option", 14);
    i02.\u0275\u0275text(28, "Option 2");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(29, "option", 15);
    i02.\u0275\u0275text(30, "Option 3");
    i02.\u0275\u0275elementEnd()()();
    i02.\u0275\u0275elementStart(31, "button", 16);
    i02.\u0275\u0275text(32, "Save");
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275property("formGroup", ctx_r1.form);
    i02.\u0275\u0275advance(31);
    i02.\u0275\u0275property("disabled", ctx_r1.form.invalid);
  }
}
function App_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 4)(1, "p")(2, "strong");
    i02.\u0275\u0275text(3, "First Name:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275text(4);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(5, "p")(6, "strong");
    i02.\u0275\u0275text(7, "Last Name:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275text(8);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(9, "p")(10, "strong");
    i02.\u0275\u0275text(11, "DOB:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275text(12);
    i02.\u0275\u0275pipe(13, "date");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(14, "p")(15, "strong");
    i02.\u0275\u0275text(16, "Gender:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275text(17);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(18, "p")(19, "strong");
    i02.\u0275\u0275text(20, "Options:");
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275text(21);
    i02.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = i02.\u0275\u0275nextContext();
    i02.\u0275\u0275advance(4);
    i02.\u0275\u0275textInterpolate1(" ", ctx_r1.displayData().firstName);
    i02.\u0275\u0275advance(4);
    i02.\u0275\u0275textInterpolate1(" ", ctx_r1.displayData().lastName);
    i02.\u0275\u0275advance(4);
    i02.\u0275\u0275textInterpolate1(" ", i02.\u0275\u0275pipeBind2(13, 5, ctx_r1.displayData().dob, "dd-MM-yyyy"));
    i02.\u0275\u0275advance(5);
    i02.\u0275\u0275textInterpolate1(" ", ctx_r1.displayData().gender);
    i02.\u0275\u0275advance(4);
    i02.\u0275\u0275textInterpolate1(" ", ctx_r1.displayData().options);
  }
}
var App = class _App {
  fb;
  title = "mobile-mfe-app";
  cdr = inject(ChangeDetectorRef);
  message = signal("", ...ngDevMode ? [{ debugName: "message" }] : []);
  time = signal("", ...ngDevMode ? [{ debugName: "time" }] : []);
  from = signal("", ...ngDevMode ? [{ debugName: "from" }] : []);
  appRef = inject(ApplicationRef);
  ngOnInit() {
    window.addEventListener("message", (event) => {
      if (event.data && event.data.from === "host") {
        this.message.set(event.data.text);
        this.time.set(event.data.Time);
        this.from.set(event.data.from);
        this.appRef.tick();
      }
    });
  }
  sendToHost() {
    window.parent.postMessage({ from: "MFE", text: "Hello from MFE!", date: Date.now() }, "*");
    const message = { from: "MFE", text: "Hello from MFE!", date: Date.now() };
    const webkit = window.webkit;
    if (webkit?.messageHandlers?.mfeToHost) {
      webkit.messageHandlers.mfeToHost.postMessage(JSON.stringify(message));
      console.log("\u2705 Message sent to iOS");
    } else {
      console.error("\u274C webkit.messageHandlers not available");
    }
  }
  // Track edit mode
  isEditMode = signal(false, ...ngDevMode ? [{ debugName: "isEditMode" }] : []);
  displayData = computed(() => this.userData(), ...ngDevMode ? [{ debugName: "displayData" }] : []);
  // Initial data
  userData = signal({
    firstName: "Kumar",
    lastName: "Shan",
    dob: "1990-01-01",
    gender: "Male",
    options: "Option 1"
  }, ...ngDevMode ? [{ debugName: "userData" }] : []);
  form;
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      firstName: [this.userData().firstName, Validators.required],
      lastName: [this.userData().lastName, Validators.required],
      dob: [this.userData().dob, Validators.required],
      gender: [this.userData().gender, Validators.required],
      options: [this.userData().options]
    });
  }
  toggleEditMode() {
    this.isEditMode.update((v) => !v);
    console.log("Edit mode:", this.isEditMode());
    this.cdr.detectChanges();
  }
  onSubmit() {
    if (this.form.valid) {
      this.userData.set(this.form.value);
      this.isEditMode.set(false);
      this.cdr.detectChanges();
    }
  }
  static \u0275fac = function App_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _App)(i02.\u0275\u0275directiveInject(i12.FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _App, selectors: [["app-root"]], standalone: false, decls: 19, vars: 8, consts: [[2, "border", "1px solid gray", "padding", "10px"], [3, "click"], [1, "container"], [3, "formGroup"], [1, "view"], [3, "ngSubmit", "formGroup"], ["formControlName", "firstName"], ["formControlName", "lastName"], ["type", "date", "formControlName", "dob"], ["formControlName", "gender"], ["value", "Male"], ["value", "Female"], ["formControlName", "options"], ["value", "Option 1"], ["value", "Option 2"], ["value", "Option 3"], ["type", "submit", 3, "disabled"]], template: function App_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "div", 0)(1, "h3");
      i02.\u0275\u0275text(2, "MFE Component");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(3, "p");
      i02.\u0275\u0275text(4);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(5, "p");
      i02.\u0275\u0275text(6);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(7, "p");
      i02.\u0275\u0275text(8);
      i02.\u0275\u0275pipe(9, "date");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(10, "button", 1);
      i02.\u0275\u0275listener("click", function App_Template_button_click_10_listener() {
        return ctx.sendToHost();
      });
      i02.\u0275\u0275text(11, "Send Hello to Host");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(12, "div", 2)(13, "h2");
      i02.\u0275\u0275text(14, "User Profile");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(15, "button", 1);
      i02.\u0275\u0275listener("click", function App_Template_button_click_15_listener() {
        return ctx.toggleEditMode();
      });
      i02.\u0275\u0275text(16);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275conditionalCreate(17, App_Conditional_17_Template, 33, 2, "form", 3)(18, App_Conditional_18_Template, 22, 8, "div", 4);
      i02.\u0275\u0275elementEnd();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(4);
      i02.\u0275\u0275textInterpolate1("Received From : ", ctx.from());
      i02.\u0275\u0275advance(2);
      i02.\u0275\u0275textInterpolate1("Received Message: ", ctx.message());
      i02.\u0275\u0275advance(2);
      i02.\u0275\u0275textInterpolate1("Received Time: ", i02.\u0275\u0275pipeBind2(9, 5, ctx.time(), "dd-MM-yyyy HH:mm:ss a"));
      i02.\u0275\u0275advance(8);
      i02.\u0275\u0275textInterpolate1(" ", ctx.isEditMode() ? "Cancel" : "Edit", " ");
      i02.\u0275\u0275advance();
      i02.\u0275\u0275conditional(ctx.isEditMode() ? 17 : 18);
    }
  }, dependencies: [i2.NgClass, i2.NgComponentOutlet, i2.NgForOf, i2.NgIf, i2.NgTemplateOutlet, i2.NgStyle, i2.NgSwitch, i2.NgSwitchCase, i2.NgSwitchDefault, i2.NgPlural, i2.NgPluralCase, i3.RouterOutlet, i3.RouterLink, i3.RouterLinkActive, i3.\u0275EmptyOutletComponent, i12.\u0275NgNoValidate, i12.NgSelectOption, i12.\u0275NgSelectMultipleOption, i12.DefaultValueAccessor, i12.NumberValueAccessor, i12.RangeValueAccessor, i12.CheckboxControlValueAccessor, i12.SelectControlValueAccessor, i12.SelectMultipleControlValueAccessor, i12.RadioControlValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.RequiredValidator, i12.MinLengthValidator, i12.MaxLengthValidator, i12.PatternValidator, i12.CheckboxRequiredValidator, i12.EmailValidator, i12.MinValidator, i12.MaxValidator, i12.FormControlDirective, i12.FormGroupDirective, i12.FormControlName, i12.FormGroupName, i12.FormArrayName, i2.AsyncPipe, i2.UpperCasePipe, i2.LowerCasePipe, i2.JsonPipe, i2.SlicePipe, i2.DecimalPipe, i2.PercentPipe, i2.TitleCasePipe, i2.CurrencyPipe, i2.DatePipe, i2.I18nPluralPipe, i2.I18nSelectPipe, i2.KeyValuePipe], styles: ["\n\n.container[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: auto;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}\ndiv[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\ninput[_ngcontent-%COMP%], \nselect[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 5px;\n  border-radius: 6px;\n  border: 1px solid #999;\n}\nbutton[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  padding: 6px 12px;\n}\n/*# sourceMappingURL=app.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(App, [{
    type: Component,
    args: [{ selector: "app-root", standalone: false, template: `<div style="border:1px solid gray; padding:10px;">
      <h3>MFE Component</h3>
      <p>Received From : {{ from() }}</p>
      <p>Received Message: {{ message() }}</p>
      <p>Received Time: {{ time() | date:'dd-MM-yyyy HH:mm:ss a' }}</p>
      <button (click)="sendToHost()">Send Hello to Host</button>
    </div>

<div class="container">
  <h2>User Profile</h2>
  <button (click)="toggleEditMode()">
    {{ isEditMode() ? 'Cancel' : 'Edit' }}
  </button>
  
  <!-- \u{1F539} Edit Mode -->
  @if (isEditMode()) {
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <div>
        <label>First Name:</label>
        <input formControlName="firstName" />
      </div>
      <div>
        <label>Last Name:</label>
        <input formControlName="lastName" />
      </div>
      <div>
        <label>Date of Birth:</label>
        <input type="date" formControlName="dob" />
      </div>
      <div>
        <label>Gender:</label>
        <select formControlName="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Options:</label>
        <select formControlName="options">
          <option value="Option 1">Option 1</option>
          <option value="Option 2">Option 2</option>
          <option value="Option 3">Option 3</option>
        </select>
      </div>
      <button type="submit" [disabled]="form.invalid">Save</button>
    </form>
  } @else {
    <!-- \u{1F539} View Mode -->
    <div class="view">
      <p><strong>First Name:</strong> {{ displayData().firstName }}</p>
      <p><strong>Last Name:</strong> {{ displayData().lastName }}</p>
      <p><strong>DOB:</strong> {{ displayData().dob | date:'dd-MM-yyyy' }}</p>
      <p><strong>Gender:</strong> {{ displayData().gender }}</p>
      <p><strong>Options:</strong> {{ displayData().options }}</p>
    </div>
  }
</div>`, styles: ["/* src/app/app.scss */\n.container {\n  max-width: 400px;\n  margin: auto;\n  padding: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}\ndiv {\n  margin-bottom: 10px;\n}\ninput,\nselect {\n  width: 100%;\n  padding: 5px;\n  border-radius: 6px;\n  border: 1px solid #999;\n}\nbutton {\n  margin-top: 10px;\n  padding: 6px 12px;\n}\n/*# sourceMappingURL=app.css.map */\n"] }]
  }], () => [{ type: i12.FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(App, { className: "App", filePath: "src/app/app.ts", lineNumber: 10 });
})();
(() => {
  const id = "src%2Fapp%2Fapp.ts%40App";
  function App_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(App, m.default, [i02, i2, i3, i12], [Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && App_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && App_HmrLoad(d.timestamp)));
})();

// src/app/app-module.ts
import { ReactiveFormsModule } from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_forms.js?v=f59f256b";
import * as i03 from "/@fs/Users/kumarshan/Personal/Angular/Angular Mobile MFE/mobile-mfe-app/.angular/cache/20.3.6/mobile-mfe-app/vite/deps/@angular_core.js?v=f59f256b";
var AppModule = class _AppModule {
  injector;
  constructor(injector) {
    this.injector = injector;
  }
  ngDoBootstrap() {
    const el = createCustomElement(App, { injector: this.injector });
    customElements.define("mfe-widget", el);
  }
  static \u0275fac = function AppModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AppModule)(i03.\u0275\u0275inject(i03.Injector));
  };
  static \u0275mod = /* @__PURE__ */ i03.\u0275\u0275defineNgModule({ type: _AppModule });
  static \u0275inj = /* @__PURE__ */ i03.\u0275\u0275defineInjector({ providers: [
    provideBrowserGlobalErrorListeners()
  ], imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(AppModule, [{
    type: NgModule2,
    args: [{
      declarations: [
        App
      ],
      imports: [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule
      ],
      providers: [
        provideBrowserGlobalErrorListeners()
      ],
      bootstrap: []
    }]
  }], () => [{ type: i03.Injector }], null);
})();

// src/main.ts
platformBrowser().bootstrapModule(AppModule, {
  ngZone: "noop"
}).catch((err) => console.error(err));


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9tYWluLnRzIiwic3JjL2FwcC9hcHAtbW9kdWxlLnRzIiwic3JjL2FwcC9hcHAtcm91dGluZy1tb2R1bGUudHMiLCJzcmMvYXBwL2FwcC50cyIsInNyYy9hcHAvYXBwLmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBBcHBNb2R1bGUgfSBmcm9tICcuL2FwcC9hcHAtbW9kdWxlJztcblxucGxhdGZvcm1Ccm93c2VyKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSwge1xuICBuZ1pvbmU6ICdub29wJ1xufSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpO1xuIiwiaW1wb3J0IHsgTmdNb2R1bGUsIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMsIERvQm9vdHN0cmFwLCBJbmplY3RvciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRWxlbWVudCB9IGZyb20gJ0Bhbmd1bGFyL2VsZW1lbnRzJztcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLW1vZHVsZSc7XG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5ATmdNb2R1bGUoe1xuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgQXBwUm91dGluZ01vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHByb3ZpZGVCcm93c2VyR2xvYmFsRXJyb3JMaXN0ZW5lcnMoKVxuICBdLFxuICBib290c3RyYXA6IFtdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSBpbXBsZW1lbnRzIERvQm9vdHN0cmFwIHsgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yKSB7fVxuXG4gIG5nRG9Cb290c3RyYXAoKSB7XG4gICAgY29uc3QgZWwgPSBjcmVhdGVDdXN0b21FbGVtZW50KEFwcCwgeyBpbmplY3RvcjogdGhpcy5pbmplY3RvciB9KTtcbiAgICBjdXN0b21FbGVtZW50cy5kZWZpbmUoJ21mZS13aWRnZXQnLCBlbCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW107XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwUm91dGluZ01vZHVsZSB7IH1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgc2lnbmFsLCBBcHBsaWNhdGlvblJlZiwgaW5qZWN0LCBjb21wdXRlZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZvcm1CdWlsZGVyLCBGb3JtR3JvdXAsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2FwcC5odG1sJyxcbiAgc3RhbmRhbG9uZTogZmFsc2UsXG4gIHN0eWxlVXJsOiAnLi9hcHAuc2Nzcydcbn0pXG5leHBvcnQgY2xhc3MgQXBwIHtcbiAgcHJvdGVjdGVkIHRpdGxlID0gJ21vYmlsZS1tZmUtYXBwJztcbiAgcHJpdmF0ZSBjZHIgPSBpbmplY3QoQ2hhbmdlRGV0ZWN0b3JSZWYpO1xuXG4gbWVzc2FnZSA9IHNpZ25hbCgnJyk7XG4gIHRpbWUgPSBzaWduYWw8YW55PignJyk7XG4gIGZyb20gPSBzaWduYWwoJycpO1xuXG4gIHByaXZhdGUgYXBwUmVmID0gaW5qZWN0KEFwcGxpY2F0aW9uUmVmKTtcblxuICBuZ09uSW5pdCgpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4ge1xuICAgICAgaWYgKGV2ZW50LmRhdGEgJiYgZXZlbnQuZGF0YS5mcm9tID09PSAnaG9zdCcpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlLnNldChldmVudC5kYXRhLnRleHQpO1xuICAgICAgICB0aGlzLnRpbWUuc2V0KGV2ZW50LmRhdGEuVGltZSk7XG4gICAgICAgIHRoaXMuZnJvbS5zZXQoZXZlbnQuZGF0YS5mcm9tKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gZm9yIHRoZSB3aG9sZSBhcHBcbiAgICAgIHRoaXMuYXBwUmVmLnRpY2soKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRUb0hvc3QoKSB7XG4gIHdpbmRvdy5wYXJlbnQucG9zdE1lc3NhZ2UoeyBmcm9tOiAnTUZFJywgdGV4dDogJ0hlbGxvIGZyb20gTUZFIScsIGRhdGU6IERhdGUubm93KCkgIH0sICcqJyk7XG4gIGNvbnN0IG1lc3NhZ2UgPSB7IGZyb206ICdNRkUnLCB0ZXh0OiAnSGVsbG8gZnJvbSBNRkUhJywgZGF0ZTogRGF0ZS5ub3coKSB9O1xuICBcbiAgY29uc3Qgd2Via2l0ID0gKHdpbmRvdyBhcyBhbnkpLndlYmtpdDtcbiAgaWYgKHdlYmtpdD8ubWVzc2FnZUhhbmRsZXJzPy5tZmVUb0hvc3QpIHtcbiAgICB3ZWJraXQubWVzc2FnZUhhbmRsZXJzLm1mZVRvSG9zdC5wb3N0TWVzc2FnZShKU09OLnN0cmluZ2lmeShtZXNzYWdlKSk7XG4gICAgY29uc29sZS5sb2coJ+KchSBNZXNzYWdlIHNlbnQgdG8gaU9TJyk7XG4gIH0gZWxzZSB7XG4gICAgY29uc29sZS5lcnJvcign4p2MIHdlYmtpdC5tZXNzYWdlSGFuZGxlcnMgbm90IGF2YWlsYWJsZScpO1xuICB9XG59XG5cbiAvLyBUcmFjayBlZGl0IG1vZGVcbiAgaXNFZGl0TW9kZSA9IHNpZ25hbChmYWxzZSk7XG4gIGRpc3BsYXlEYXRhID0gY29tcHV0ZWQoKCkgPT4gdGhpcy51c2VyRGF0YSgpKTtcblxuICAvLyBJbml0aWFsIGRhdGFcbiAgdXNlckRhdGEgPSBzaWduYWwoe1xuICAgIGZpcnN0TmFtZTogJ0t1bWFyJyxcbiAgICBsYXN0TmFtZTogJ1NoYW4nLFxuICAgIGRvYjogJzE5OTAtMDEtMDEnLFxuICAgIGdlbmRlcjogJ01hbGUnLFxuICAgIG9wdGlvbnM6ICdPcHRpb24gMSdcbiAgfSk7XG5cbiAgZm9ybTogRm9ybUdyb3VwO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZmI6IEZvcm1CdWlsZGVyKSB7XG4gICAgdGhpcy5mb3JtID0gdGhpcy5mYi5ncm91cCh7XG4gICAgICBmaXJzdE5hbWU6IFt0aGlzLnVzZXJEYXRhKCkuZmlyc3ROYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGxhc3ROYW1lOiBbdGhpcy51c2VyRGF0YSgpLmxhc3ROYW1lLCBWYWxpZGF0b3JzLnJlcXVpcmVkXSxcbiAgICAgIGRvYjogW3RoaXMudXNlckRhdGEoKS5kb2IsIFZhbGlkYXRvcnMucmVxdWlyZWRdLFxuICAgICAgZ2VuZGVyOiBbdGhpcy51c2VyRGF0YSgpLmdlbmRlciwgVmFsaWRhdG9ycy5yZXF1aXJlZF0sXG4gICAgICBvcHRpb25zOiBbdGhpcy51c2VyRGF0YSgpLm9wdGlvbnNdXG4gICAgfSk7XG4gIH1cblxuICB0b2dnbGVFZGl0TW9kZSgpIHtcbiAgICAvLyDinIUgVG9nZ2xlIHRoZSB2YWx1ZVxuICAgIHRoaXMuaXNFZGl0TW9kZS51cGRhdGUodiA9PiAhdik7XG4gICAgY29uc29sZS5sb2coJ0VkaXQgbW9kZTonLCB0aGlzLmlzRWRpdE1vZGUoKSk7XG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25TdWJtaXQoKSB7XG4gICAgaWYgKHRoaXMuZm9ybS52YWxpZCkge1xuICAgICAgLy8gVXBkYXRlIHNpZ25hbCBkYXRhXG4gICAgICB0aGlzLnVzZXJEYXRhLnNldCh0aGlzLmZvcm0udmFsdWUpO1xuICAgICAgLy8gU3dpdGNoIGJhY2sgdG8gdmlldyBtb2RlXG4gICAgICB0aGlzLmlzRWRpdE1vZGUuc2V0KGZhbHNlKTtcbiAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cbn1cbiIsIjxkaXYgc3R5bGU9XCJib3JkZXI6MXB4IHNvbGlkIGdyYXk7IHBhZGRpbmc6MTBweDtcIj5cbiAgICAgIDxoMz5NRkUgQ29tcG9uZW50PC9oMz5cbiAgICAgIDxwPlJlY2VpdmVkIEZyb20gOiB7eyBmcm9tKCkgfX08L3A+XG4gICAgICA8cD5SZWNlaXZlZCBNZXNzYWdlOiB7eyBtZXNzYWdlKCkgfX08L3A+XG4gICAgICA8cD5SZWNlaXZlZCBUaW1lOiB7eyB0aW1lKCkgfCBkYXRlOidkZC1NTS15eXl5IEhIOm1tOnNzIGEnIH19PC9wPlxuICAgICAgPGJ1dHRvbiAoY2xpY2spPVwic2VuZFRvSG9zdCgpXCI+U2VuZCBIZWxsbyB0byBIb3N0PC9idXR0b24+XG4gICAgPC9kaXY+XG5cbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgPGgyPlVzZXIgUHJvZmlsZTwvaDI+XG4gIDxidXR0b24gKGNsaWNrKT1cInRvZ2dsZUVkaXRNb2RlKClcIj5cbiAgICB7eyBpc0VkaXRNb2RlKCkgPyAnQ2FuY2VsJyA6ICdFZGl0JyB9fVxuICA8L2J1dHRvbj5cbiAgXG4gIDwhLS0g8J+UuSBFZGl0IE1vZGUgLS0+XG4gIEBpZiAoaXNFZGl0TW9kZSgpKSB7XG4gICAgPGZvcm0gW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cIm9uU3VibWl0KClcIj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5GaXJzdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJmaXJzdE5hbWVcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+TGFzdCBOYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJsYXN0TmFtZVwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5EYXRlIG9mIEJpcnRoOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGZvcm1Db250cm9sTmFtZT1cImRvYlwiIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxsYWJlbD5HZW5kZXI6PC9sYWJlbD5cbiAgICAgICAgPHNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJnZW5kZXJcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiTWFsZVwiPk1hbGU8L29wdGlvbj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiRmVtYWxlXCI+RmVtYWxlPC9vcHRpb24+XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgICA8bGFiZWw+T3B0aW9uczo8L2xhYmVsPlxuICAgICAgICA8c2VsZWN0IGZvcm1Db250cm9sTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiT3B0aW9uIDFcIj5PcHRpb24gMTwvb3B0aW9uPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJPcHRpb24gMlwiPk9wdGlvbiAyPC9vcHRpb24+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIk9wdGlvbiAzXCI+T3B0aW9uIDM8L29wdGlvbj5cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIFtkaXNhYmxlZF09XCJmb3JtLmludmFsaWRcIj5TYXZlPC9idXR0b24+XG4gICAgPC9mb3JtPlxuICB9IEBlbHNlIHtcbiAgICA8IS0tIPCflLkgVmlldyBNb2RlIC0tPlxuICAgIDxkaXYgY2xhc3M9XCJ2aWV3XCI+XG4gICAgICA8cD48c3Ryb25nPkZpcnN0IE5hbWU6PC9zdHJvbmc+IHt7IGRpc3BsYXlEYXRhKCkuZmlyc3ROYW1lIH19PC9wPlxuICAgICAgPHA+PHN0cm9uZz5MYXN0IE5hbWU6PC9zdHJvbmc+IHt7IGRpc3BsYXlEYXRhKCkubGFzdE5hbWUgfX08L3A+XG4gICAgICA8cD48c3Ryb25nPkRPQjo8L3N0cm9uZz4ge3sgZGlzcGxheURhdGEoKS5kb2IgfCBkYXRlOidkZC1NTS15eXl5JyB9fTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+R2VuZGVyOjwvc3Ryb25nPiB7eyBkaXNwbGF5RGF0YSgpLmdlbmRlciB9fTwvcD5cbiAgICAgIDxwPjxzdHJvbmc+T3B0aW9uczo8L3N0cm9uZz4ge3sgZGlzcGxheURhdGEoKS5vcHRpb25zIH19PC9wPlxuICAgIDwvZGl2PlxuICB9XG48L2Rpdj4iXSwibWFwcGluZ3MiOiI7QUFBQSxTQUFTLHVCQUF1Qjs7O0FDQWhDLFNBQVMsWUFBQUEsV0FBVSwwQ0FBaUU7QUFDcEYsU0FBUyxxQkFBcUI7QUFDOUIsU0FBUywyQkFBMkI7OztBQ0ZwQyxTQUFTLGdCQUFnQjtBQUN6QixTQUFTLG9CQUE0Qjs7O0FBRXJDLElBQU0sU0FBaUIsQ0FBQTtBQU1qQixJQUFPLG1CQUFQLE1BQU8sa0JBQWdCOztxQ0FBaEIsbUJBQWdCO0VBQUE7MkVBQWhCLGtCQUFnQixDQUFBOytFQUhqQixhQUFhLFFBQVEsTUFBTSxHQUMzQixZQUFZLEVBQUEsQ0FBQTs7OytFQUVYLGtCQUFnQixDQUFBO1VBSjVCO1dBQVM7TUFDUixTQUFTLENBQUMsYUFBYSxRQUFRLE1BQU0sQ0FBQztNQUN0QyxTQUFTLENBQUMsWUFB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QUFBLEtBQUEsQ0FBQTtBQUNBLE1BQUEsd0JBQUEsQ0FBQTtBQUFBLE1BQUEsaUNBQUEsc0JBQUEsSUFBQSxRQUFBLENBQUE7QUFDQSxNQUFBLHdCQUFBLENBQUE7QUFBQSxNQUFBLGlDQUFBLG1CQUFBLDBCQUFBLEdBQUEsR0FBQSxJQUFBLEtBQUEsR0FBQSx1QkFBQSxDQUFBO0FBT0wsTUFBQSx3QkFBQSxDQUFBO0FBQUEsTUFBQSxpQ0FBQSxLQUFBLElBQUEsV0FBQSxJQUFBLFdBQUEsUUFBQSxHQUFBO0FBSUYsTUFBQSx3QkFBQTtBQUFBLE1BQUEsNEJBQUEsSUFBQSxXQUFBLElBQUEsS0FBQSxFQUFBOzs7OztnRkROVyxLQUFHLENBQUE7VUFOZjt1QkFDVyxZQUFVLFlBRVIsT0FBSyxVQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztTQUFBLFFBQUEsQ0FBQSw2WEFBQSxFQUFBLENBQUE7Ozs7aUZBR04sS0FBRyxFQUFBLFdBQUEsT0FBQSxVQUFBLGtCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzsrREFBSCxLQUFHLEVBQUEsU0FBQSxDQUFBQyxLQUFBLElBQUEsSUFBQUMsR0FBQSxHQUFBLENBQUEsU0FBQSxHQUFBLGFBQUEsRUFBQSxDQUFBO0VBQUE7QUFBQSxHQUFBLE9BQUEsY0FBQSxlQUFBLGNBQUEsWUFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxZQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FGSmhCLFNBQVMsMkJBQTJCOztBQWdCOUIsSUFBTyxZQUFQLE1BQU8sV0FBUztFQUNBO0VBQXBCLFlBQW9CLFVBQWtCO0FBQWxCLFNBQUEsV0FBQTtFQUFxQjtFQUV6QyxnQkFBYTtBQUNYLFVBQU0sS0FBSyxvQkFBb0IsS0FBSyxFQUFFLFVBQVUsS0FBSyxTQUFRLENBQUU7QUFDL0QsbUJBQWUsT0FBTyxjQUFjLEVBQUU7RUFDeEM7O3FDQU5XLFlBQVMsdUJBQUEsWUFBQSxDQUFBO0VBQUE7NEVBQVQsV0FBUyxDQUFBO2lGQUxUO0lBQ1QsbUNBQWtDO0tBQ25DLFNBQUE7SUFOQztJQUNBO0lBQ0E7RUFBbUIsRUFBQSxDQUFBOzs7Z0ZBT1YsV0FBUyxDQUFBO1VBZHJCQztXQUFTO01BQ1IsY0FBYztRQUNaOztNQUVGLFNBQVM7UUFDUDtRQUNBO1FBQ0E7O01BRUYsV0FBVztRQUNULG1DQUFrQzs7TUFFcEMsV0FBVyxDQUFBO0tBQ1o7Ozs7O0FEakJELGdCQUFlLEVBQUcsZ0JBQWdCLFdBQVc7RUFDM0MsUUFBUTtDQUNULEVBQ0UsTUFBTSxTQUFPLFFBQVEsTUFBTSxHQUFHLENBQUM7IiwibmFtZXMiOlsiTmdNb2R1bGUiLCJpMCIsImkxIiwiTmdNb2R1bGUiXX0=
