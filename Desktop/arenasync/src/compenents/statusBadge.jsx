export function StatusBadge(props) {
    let color;
    if (props.status === "On Going") {
        color = "green";
    } else if (props.status === "Upcoming") {
        color = "blue";
    } else {
        color = "orange";
    }

 return (
    <p id="badge" style={{ backgroundColor: color }}>
      {props.status}
    </p>
  );
}