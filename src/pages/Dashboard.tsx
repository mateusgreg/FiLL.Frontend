import { useState, useEffect } from "react";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import VehicleOperations from "../components/VehicleOperations";
import carIcon from "../assets/car-icon.png";
import timerIcon from "../assets/timer-icon.png";
import failIcon from "../assets/failed-transfer-icon.png";

const Dashboard = () => {
  const [timer, setTimer] = useState({ hours: 38, minutes: 43, seconds: 17 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        let { hours, minutes, seconds } = prev;
        seconds++;
        
        if (seconds >= 60) {
          seconds = 0;
          minutes++;
          
          if (minutes >= 60) {
            minutes = 0;
            hours++;
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (time: number) => time.toString().padStart(2, '0');

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Verified. Triggered. Settled.
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Our solution turns the vehicle sale confirmation into instant, audit-ready settlement. A secure oracle ingests 
            Dealer's attestation (via Stripe) and, once validated, a smart contract holds funds in escrow and automatically 
            triggers a P2X payout—no manual reconciliation.
          </p>
        </div>

        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <MetricCard
            title="Transfered Vehicles"
            value="50"
            icon={<img src={carIcon} alt="Car" className="w-32 h-32" />}
          />
          
          <MetricCard
            title="Transfer Time"
            value={`${formatTime(timer.hours)}:${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`}
            icon={<img src={timerIcon} alt="Timer" className="w-32 h-32" />}
          />
          
          <MetricCard
            title="Failed Transfers"
            value="20"
            icon={<img src={failIcon} alt="Timer" className="w-36 h-36" />}
          />
        </div>

        {/* Operations Table */}
        <VehicleOperations />
      </main>
    </div>
  );
};

export default Dashboard;