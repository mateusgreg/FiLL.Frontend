import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { CheckCircle2, Circle, Clock } from 'lucide-react';
import vehicleImage from '@/assets/car.png';

interface VehicleTransferModalSuccess2Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

interface TransferStep {
  id: string;
  title: string;
  description: string;
  timestamp?: string;
  status: 'completed' | 'active' | 'pending';
}

interface User {
  name: string;
  avatar?: string;
  fallback: string;
}

const transferSteps: TransferStep[] = [
  {
    id: '1',
    title: 'Financing Contract Approving',
    description: 'The seller sign with the bank institution.',
    timestamp: '2025-09-15T10:00:00Z',
    status: 'completed',
  },
  {
    id: '2',
    title: 'Sale Communication',
    description: 'The seller and buyer formalize the sale communication.',
    timestamp: '2025-09-15T14:30:00Z',
    status: 'completed',
  },
  {
    id: '3',
    title: 'Vehicle Payment',
    description: 'Payment processing via Stellar.',
    status: 'active',
  },
  {
    id: '4',
    title: 'Ready for Inspection',
    description: 'Vehicle inspection scheduling and completion.',
    status: 'pending',
  },
];

const fromUser: User = {
  name: 'Daiana Baldwin',
  avatar: '/avatar-woman.png',
  fallback: 'DB',
};

const toUser: User = {
  name: 'Fred Wu',
  avatar: '/avatar-man.webp',
  fallback: 'FW',
};

const StepIcon: React.FC<{ status: TransferStep['status'] }> = ({ status }) => {
  switch (status) {
    case 'completed':
      return <CheckCircle2 className="h-6 w-6 text-progress-completed" />;
    case 'active':
      return <Circle className="h-6 w-6 text-progress-active spinner border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />;
    case 'pending':
      return <Circle className="h-6 w-6 text-progress-inactive" />;
    default:
      return <Circle className="h-6 w-6 text-progress-inactive" />;
  }
};

const ProgressStep: React.FC<{ step: TransferStep; isLast: boolean }> = ({
  step,
  isLast,
}) => {
  const getStepStyles = () => {
    switch (step.status) {
      case 'completed':
        return 'text-progress-completed';
      case 'active':
        return 'text-progress-active';
      case 'pending':
        return 'text-progress-inactive-foreground';
      default:
        return 'text-progress-inactive-foreground';
    }
  };

  const getConnectorStyles = () => {
    switch (step.status) {
      case 'completed':
        return 'border-progress-completed';
      case 'active':
        return 'border-progress-active';
      case 'pending':
        return 'border-progress-inactive';
      default:
        return 'border-progress-inactive';
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col items-center mr-4">
        <StepIcon status={step.status} />
        {!isLast && (
          <div
            className={`w-px h-12 mt-2 border-l-2 ${getConnectorStyles()}`}
          />
        )}
      </div>
      <div className="flex-1 pb-8">
        <h3
          className={`font-semibold text-base mb-1 ${getStepStyles()}`}
        >
          {step.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {step.description} {step.id == '3' && (<a href='https://stellar.expert/explorer/testnet/tx/2438295883616256' target="_blank" className='underline'>View on Stellar Expert</a>)}
        </p>
        <p>
          <span className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
            <Clock className="h-3 w-3" />
            {step.timestamp != null ? new Date(step.timestamp).toLocaleString(): 'Pending...'}
          </span>
        </p>
      </div>
    </div>
  );
};

export const VehicleTransferModalSuccess2: React.FC<VehicleTransferModalSuccess2Props> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="sr-only">Vehicle Transfer Progress</DialogTitle>
          </div>
        </DialogHeader>

        <div className="px-6">
          {/* Vehicle Image Section */}
          <div className="relative flex justify-center items-center">
            <div>
              <img
                src={vehicleImage}
                alt="Mitsubishi Lancer Evolution 2014"
                className="w-80 h-80 object-contain"
              />
            </div>
          </div>

          {/* Vehicle Info */}
          <div className="mb-6">
            <h2 className="text-xl font-bold text-foreground mb-2">
              Mitsubishi Lancer Evolution (2014)
            </h2>
            <p className="text-muted-foreground text-sm">
              Vehicle transfer underway. Monitor each milestone below.
            </p>
          </div>

          {/* Transfer Users */}
          <div className="flex items-center gap-3 mb-8">
            <span className="text-sm text-muted-foreground">By</span>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={fromUser.avatar} />
                <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                  {fromUser.fallback}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{fromUser.name}</span>
            </div>
            <span className="text-sm text-muted-foreground">to</span>
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src={toUser.avatar} />
                <AvatarFallback className="text-xs bg-secondary text-secondary-foreground">
                  {toUser.fallback}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{toUser.name}</span>
            </div>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pb-6">
          <div className="space-y-0">
            {transferSteps.map((step, index) => (
              <ProgressStep
                key={step.id}
                step={step}
                isLast={index === transferSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default VehicleTransferModalSuccess2;