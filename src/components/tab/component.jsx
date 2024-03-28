export const Tab = ({ title, isActive, onClick }) => {
  return (
    <button
      style={{ marginRight: '10px' }}
      onClick={onClick}
      disabled={isActive}
    >
      {title}
    </button>
  );
};
