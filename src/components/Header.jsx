function Header({ completedCount, incompleteCount }) {
  return (
    <div className="header">
      <div>
        <h3>Wed Jan 21 2026</h3>
        <h4>6:57 AM</h4>
        <h5>3 Active Task</h5>
      </div>
      <h3>Incomplete Tasks ({incompleteCount})</h3>
      <h3>Complete Task ({completedCount})</h3>
    </div>
  );
}

export default Header;
