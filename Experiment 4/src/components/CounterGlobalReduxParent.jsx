import { useDispatch, useSelector } from "react-redux";

export default function CounterReduxParent(props) {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div
      style={{
        backgroundColor: "#efe6da", // 🤎 warm beige
        borderLeft: "6px solid #7c3aed", // 💜 subtle lavender accent
        borderRadius: "16px",
        padding: "20px",
        marginBottom: "20px",
        boxShadow: "0 10px 22px rgba(0,0,0,0.08)",
        textAlign: "center",
      }}
    >
      <h3 style={{ marginBottom: "16px", color: "#3b0764" }}>
        {props.cno} : Global State (Redux) Count: {count}
      </h3>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{
          padding: "8px 20px",
          marginRight: "10px",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#7c3aed",
          color: "white",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Increase
      </button>

      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        style={{
          padding: "8px 20px",
          borderRadius: "10px",
          border: "1px solid #7c3aed",
          backgroundColor: "#f5f3ff",
          color: "#5b21b6",
          fontWeight: "600",
          cursor: "pointer",
        }}
      >
        Decrease
      </button>
    </div>
  );
}
