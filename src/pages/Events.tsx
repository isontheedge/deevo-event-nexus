
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Edit, Trash2, MapPin, Calendar } from "lucide-react";
import { useState } from "react";

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const events = [
    {
      id: 1,
      name: "Festival de Rock 2024",
      description: "O maior festival de rock da região",
      location: "São Paulo, SP",
      startDate: "2024-06-15",
      endDate: "2024-06-17",
      status: "Ativo",
      organizer: "João Silva",
      ticketsSold: 1250,
      capacity: 2000
    },
    {
      id: 2,
      name: "Noite do Jazz",
      description: "Uma noite especial com os melhores do jazz nacional",
      location: "Rio de Janeiro, RJ",
      startDate: "2024-06-20",
      endDate: "2024-06-20",
      status: "Em Andamento",
      organizer: "Casa do Jazz",
      ticketsSold: 180,
      capacity: 200
    },
    {
      id: 3,
      name: "Show Acústico",
      description: "Apresentação intimista com grandes sucessos",
      location: "Belo Horizonte, MG",
      startDate: "2024-06-25",
      endDate: "2024-06-25",
      status: "Planejado",
      organizer: "Maria Santos",
      ticketsSold: 45,
      capacity: 150
    },
    {
      id: 4,
      name: "Electronic Music Festival",
      description: "Festival de música eletrônica com DJs internacionais",
      location: "Florianópolis, SC",
      startDate: "2024-07-10",
      endDate: "2024-07-12",
      status: "Encerrado",
      organizer: "Pedro Oliveira",
      ticketsSold: 3500,
      capacity: 3500
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Em Andamento": return "bg-blue-100 text-blue-800";
      case "Planejado": return "bg-yellow-100 text-yellow-800";
      case "Encerrado": return "bg-gray-100 text-gray-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Gerenciar Eventos" 
      subtitle="Controle completo de eventos musicais, palcos e programação"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar eventos..."
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
              Novo Evento
            </Button>
          </div>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {events.map((event) => (
            <div key={event.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.name}</h3>
                    <p className="text-gray-600 text-sm mb-3">{event.description}</p>
                  </div>
                  <Badge className={getStatusBadgeColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    {event.startDate === event.endDate 
                      ? new Date(event.startDate).toLocaleDateString('pt-BR')
                      : `${new Date(event.startDate).toLocaleDateString('pt-BR')} - ${new Date(event.endDate).toLocaleDateString('pt-BR')}`
                    }
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Ingressos Vendidos</p>
                    <p className="text-lg font-semibold text-gray-900">{event.ticketsSold}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Capacidade</p>
                    <p className="text-lg font-semibold text-gray-900">{event.capacity}</p>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-1">Organizador</p>
                  <p className="text-sm font-medium text-gray-900">{event.organizer}</p>
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

export default Events;
