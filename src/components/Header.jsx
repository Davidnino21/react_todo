function Header({ completedCount, incompleteCount }) {
  const today = new Date();
  const dateSection = today.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  const timeSection = today.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <div className="header">
      <div>
        <h3>{dateSection}</h3>
        <h4>{timeSection}</h4>
        <h5>3 Active Task</h5>
      </div>
      <h3>Incomplete Tasks ({incompleteCount})</h3>
      <h3>Complete Task ({completedCount})</h3>
    </div>
  );
}

export default Header;
