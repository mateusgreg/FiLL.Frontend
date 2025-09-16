interface MetricCardProps {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
}

const MetricCard = ({ title, value, icon, className }: MetricCardProps) => {
  return (
    <div className={`bg-card rounded-lg p-6 shadow-metric border ${className}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium mb-2">{title}</p>
          <p className="text-3xl font-bold text-card-foreground">{value}</p>
        </div>
        {icon && (
          <div className="text-muted-foreground opacity-100">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default MetricCard;