var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  BaseButton: () => BaseButton,
  Form: () => Form,
  Input: () => Input
});
module.exports = __toCommonJS(index_exports);

// src/components/BaseButton/BaseButton.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var BaseButton = ({ children, onClick, variant = "primary" }) => {
  const style = {
    padding: "10px 16px",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", { onClick, style, children });
};

// src/components/Form/Form.tsx
var import_react = require("react");

// src/components/Input/Input.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
var Input = ({ label, value, onChange, placeholder }) => {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    label && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("label", { children: label }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      "input",
      {
        type: "text",
        value,
        onChange,
        placeholder,
        style: {
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 4
        }
      }
    )
  ] });
};

// src/components/Form/Form.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
var Form = () => {
  const [name, setName] = (0, import_react.useState)("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Input, { label: "Name", value: name, onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BaseButton, { variant: "primary", children: "Submit" })
  ] });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  BaseButton,
  Form,
  Input
});
