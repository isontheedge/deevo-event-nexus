
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Edit, Trash2, Calendar, DollarSign } from "lucide-react";
import { useState } from "react";

const Tickets = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const tickets = [
    {
      id: 1,
      name: "Ingresso VIP - Festival de Rock 2024",
      event: "Festival de Rock 2024",
      type: "Pago",
      price: "R$ 150,00",
      available: 150,
      sold: 100,
      total: 250,
      period: "15 Mai - 15 Jun 2024",
      status: "Ativo"
    },
    {
      id: 2,
      name: "Entrada Gratuita - Noite do Jazz",
      event: "Noite do Jazz",
      type: "Gratuito",
      price: "Gratuito",
      available: 45,
      sold: 155,
      total: 200,
      period: "10 Mai - 20 Jun 2024",
      status: "Ativo"
    },
    {
      id: 3,
      name: "Pista - Show Acústico",
      event: "Show Acústico",
      type: "Pago",
      price: "R$ 80,00",
      available: 105,
      sold: 45,
      total: 150,
      period: "12 Mai - 25 Jun 2024",
      status: "Ativo"
    },
    {
      id: 4,
      name: "Early Bird - Electronic Festival",
      event: "Electronic Music Festival",
      type: "Pago",
      price: "R$ 200,00",
      available: 0,
      sold: 500,
      total: 500,
      period: "01 Mar - 01 Mai 2024",
      status: "Esgotado"
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Esgotado": return "bg-red-100 text-red-800";
      case "Expirado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Pago": return "bg-blue-100 text-blue-800";
      case "Gratuito": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const calculateProgress = (sold: number, total: number) => {
    return (sold / total) * 100;
  };

  return (
    <AdminLayout 
      title="Gerenciar Ingressos" 
      subtitle="Controle de vendas, preços e disponibilidade de ingressos"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar ingressos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Plus className="w-4 h-4 mr-2" />
              Novo Ingresso
            </Button>
          </div>
        </div>

        {/* Tickets Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{ticket.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{ticket.event}</p>
                    <div className="flex gap-2">
                      <Badge className={getTypeBadgeColor(ticket.type)}>
                        {ticket.type}
                      </Badge>
                      <Badge className={getStatusBadgeColor(ticket.status)}>
                        {ticket.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="flex items-center text-sm text-gray-600 mb-1">
                      <DollarSign className="w-4 h-4 mr-1" />
                      Preço
                    </div>
                    <p className="text-lg font-semibold text-gray-900">{ticket.price}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1">Disponível</p>
                    <p className="text-lg font-semibold text-gray-900">{ticket.available}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Vendidos: {ticket.sold}</span>
                    <span>Total: {ticket.total}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full"
                      style={{ width: `${calculateProgress(ticket.sold, ticket.total)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">
                    {calculateProgress(ticket.sold, ticket.total).toFixed(1)}% vendidos
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    Período: {ticket.period}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Edit className="w-4 h-4 mr-2" />
                    Editar
                  </Button>
                  <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Tickets;
