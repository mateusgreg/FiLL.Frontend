type StatusType = "in-progress" | "completed" | "failed";

interface StatusBadgeProps {
  status: StatusType;
}

const StatusBadge = ({ status }: StatusBadgeProps) => {
  const statusConfig = {
    "in-progress": {
      label: "In progress",
      className: "bg-status-progress-bg text-status-progress border-status-progress/20"
    },
    "completed": {
      label: "Completed", 
      className: "bg-status-success-bg text-status-success border-status-success/20"
    },
    "failed": {
      label: "Failed",
      className: "bg-status-error-bg text-status-error border-status-error/20"
    }
  };

  const config = statusConfig[status];

  return (
    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${config.className}`}>
      {config.label}
    </span>
  );
};

export default StatusBadge;