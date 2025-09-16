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
          <Button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center" onClick={() => alert('Getting new contracts!')}>
            <svg aria-hidden="true" role="status" className="inline w-4 h-4 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
            </svg>
            Refresh Operations List
          </Button>          
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