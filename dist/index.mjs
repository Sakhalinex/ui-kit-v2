// src/components/BaseButton/BaseButton.tsx
import { jsx } from "react/jsx-runtime";
var BaseButton = ({ children, onClick, variant = "primary" }) => {
  const style = {
    padding: "10px 16px",
    backgroundColor: variant === "primary" ? "#007bff" : "#6c757d",
    color: "#fff",
    border: "none",
    borderRadius: 4,
    cursor: "pointer"
  };
  return /* @__PURE__ */ jsx("button", { onClick, style, children });
};

// src/components/Form/Form.tsx
import { useState } from "react";

// src/components/Input/Input.tsx
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var Input = ({ label, value, onChange, placeholder }) => {
  return /* @__PURE__ */ jsxs("div", { style: { display: "flex", flexDirection: "column", gap: 4 }, children: [
    label && /* @__PURE__ */ jsx2("label", { children: label }),
    /* @__PURE__ */ jsx2(
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
import { jsx as jsx3, jsxs as jsxs2 } from "react/jsx-runtime";
var Form = () => {
  const [name, setName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: ${name}`);
  };
  return /* @__PURE__ */ jsxs2("form", { onSubmit: handleSubmit, style: { display: "flex", flexDirection: "column", gap: 12 }, children: [
    /* @__PURE__ */ jsx3(Input, { label: "Name", value: name, onChange: (e) => setName(e.target.value) }),
    /* @__PURE__ */ jsx3(BaseButton, { variant: "primary", children: "Submit" })
  ] });
};
export {
  BaseButton,
  Form,
  Input
};
