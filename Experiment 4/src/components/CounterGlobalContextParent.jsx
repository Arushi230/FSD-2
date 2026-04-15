import { useContext } from "react";
import { CounterContext } from "./context/CounterGlobalContextAPI";

export default function CounterContextParent(props) {
  const { count, setCount } = useContext(CounterContext);

  return (
    <div
      style={{
        backgroundColor: "#fff0f0", // 🌸 soft coral background
        borderLeft: "6px solid #20c997", // 💚 teal accent
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "16px", color: "#c1121f" }}>
        {props.cno} : Global State (ContextAPI) Count: {count}
      </h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "8px 20px",
          marginRight: "10px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#20c997", // 💚 teal button
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Increase
      </button>

      <button
        onClick={() => setCount(count - 1)}
        style={{
          padding: "8px 20px",
          borderRadius: "10px",
          border: "1px solid #20c997",
          backgroundColor: "#e6fffa", // 🌿 soft teal background
          color: "#1b4332",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </div>
  );
}
