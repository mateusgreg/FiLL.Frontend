import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Eye, Edit3 } from "lucide-react";
import StatusBadge from "./StatusBadge";
import React, { useState } from "react";
import VehicleTransferModal from "./VehicleTransferModal";
import carIcon from "../assets/car-icon.png";
import stellarIcon from "../assets/stellar-icon.png";

interface Transaction {
  id: string;
  vehicleId: string;
  status: "in-progress" | "completed" | "failed";
  seller: {
    name: string;
    avatar: string;
  };
  buyer: {
    name: string;
    avatar: string;
  };
}

const mockTransactions: Transaction[] = [
  {
    id: "1",
    vehicleId: "CAR-8379",
    status: "in-progress",
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  },
  {
    id: "2", 
    vehicleId: "CAR-8379",
    status: "failed",
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  },
  {
    id: "3",
    vehicleId: "CAR-8379", 
    status: "completed",
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  },
  {
    id: "4",
    vehicleId: "CAR-8379",
    status: "completed", 
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  },
  {
    id: "5",
    vehicleId: "CAR-8379",
    status: "failed",
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  },
  {
    id: "6",
    vehicleId: "CAR-8379",
    status: "in-progress",
    seller: { name: "Daiana Baldwin", avatar: "/avatar-woman.png" },
    buyer: { name: "Fred Wu", avatar: "/avatar-man.webp" }
  }
];

const VehicleOperations = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-card rounded-lg border shadow-sm">
      <div className="p-6 border-b">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-card-foreground float-left">Operations</h2>
            <Badge variant="secondary" className="text-left ml-2 px-3 py-2">
              240 transfers
            </Badge>
            <p className="text-muted-foreground text-sm mt-1">
              Keep track of vendor and their security ratings.
            </p>
          </div>
          
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b bg-muted/30">
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">ID</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Status</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Seller</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Buyer</th>
              <th className="text-left p-4 text-sm font-medium text-muted-foreground">Actions</th>
            </tr>
          </thead>
          <tbody>
            {mockTransactions.map((transaction) => (
              <tr key={transaction.id} className="border-b hover:bg-muted/20 transition-colors">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={carIcon} alt="Car" className="w-12 h-12" />
                    <span className="font-medium text-card-foreground">{transaction.vehicleId}</span>
                  </div>
                </td>
                <td className="p-4">
                  <StatusBadge status={transaction.status} />
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={transaction.seller.avatar} />
                      <AvatarFallback className="text-xs">
                        {transaction.seller.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">{transaction.seller.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Avatar className="w-6 h-6">
                      <AvatarImage src={transaction.buyer.avatar} />
                      <AvatarFallback className="text-xs">
                        {transaction.buyer.name.charAt(0)}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm text-card-foreground">{transaction.buyer.name}</span>
                  </div>
                </td>
                <td className="p-4">
                  <div className="flex items-center gap-2">
                    <Button variant="ghost" size="sm" className="h-8 px-3 py-2 border border-gray-300 rounded" onClick={handleOpenModal}>
                      Details
                    </Button>
                    <Button variant="ghost" size="sm" className="h-8 w-10 px-1 py-2 border border-gray-300 rounded" onClick={() => alert('View on Chain button clicked!')} >
                      <img src={stellarIcon} alt="View on Chain" className="w-5 h-4 cursor-pointer" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <VehicleTransferModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title="Operation Details"
        >
          <p>Here are the details about the operation.</p>
        </VehicleTransferModal>
      </div>
    </div>
  );
};

export default VehicleOperations;