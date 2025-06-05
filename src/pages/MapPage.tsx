
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Search, Filter, Calendar, Users, Music } from "lucide-react";
import { useState } from "react";

const MapPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mapEvents = [
    {
      id: 1,
      name: "Festival de Rock 2024",
      location: "São Paulo, SP",
      coordinates: "-23.5505, -46.6333",
      date: "15-17 Jun 2024",
      attendees: 2000,
      status: "Ativo"
    },
    {
      id: 2,
      name: "Noite do Jazz",
      location: "Rio de Janeiro, RJ",
      coordinates: "-22.9068, -43.1729",
      date: "20 Jun 2024",
      attendees: 200,
      status: "Em Andamento"
    },
    {
      id: 3,
      name: "Show Acústico",
      location: "Belo Horizonte, MG",
      coordinates: "-19.9167, -43.9345",
      date: "25 Jun 2024",
      attendees: 150,
      status: "Planejado"
    }
  ];

  const venues = [
    {
      id: 1,
      name: "Casa do Rock",
      location: "São Paulo, SP",
      coordinates: "-23.5505, -46.6333",
      capacity: 500,
      type: "Casa de Show"
    },
    {
      id: 2,
      name: "Jazz Club Rio",
      location: "Rio de Janeiro, RJ",
      coordinates: "-22.9068, -43.1729",
      capacity: 200,
      type: "Casa de Show"
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Em Andamento": return "bg-blue-100 text-blue-800";
      case "Planejado": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Módulo de Mapa" 
      subtitle="Visualização geográfica de eventos, casas de show e usuários"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar localizações..."
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
              <MapPin className="w-4 h-4 mr-2" />
              Visualizar Mapa
            </Button>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg border-2 border-dashed border-gray-300 h-96 flex items-center justify-center mb-6">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Mapa Interativo</h3>
            <p className="text-gray-500">Integração com serviço de mapas será implementada aqui</p>
            <p className="text-sm text-gray-400 mt-2">Mostrará eventos, casas de show e localização de usuários</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Events on Map */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Eventos no Mapa
            </h3>
            <div className="space-y-3">
              {mapEvents.map((event) => (
                <div key={event.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{event.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-gray-500 mt-1">
                      <span>{event.date}</span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {event.attendees}
                      </span>
                    </div>
                  </div>
                  <Badge className={getStatusBadgeColor(event.status)}>
                    {event.status}
                  </Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Venues on Map */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <Music className="w-5 h-5 mr-2" />
              Casas de Show
            </h3>
            <div className="space-y-3">
              {venues.map((venue) => (
                <div key={venue.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900">{venue.name}</h4>
                    <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
                      <MapPin className="w-4 h-4" />
                      <span>{venue.location}</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      Capacidade: {venue.capacity} pessoas
                    </div>
                  </div>
                  <Badge className="bg-blue-100 text-blue-800">
                    {venue.type}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Map Features */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Funcionalidades do Mapa</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-purple-50 rounded-lg">
              <h4 className="font-medium text-purple-900 mb-2">Localização de Eventos</h4>
              <p className="text-sm text-purple-700">Visualize todos os eventos ativos e futuros no mapa com filtros por data e tipo.</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-lg">
              <h4 className="font-medium text-blue-900 mb-2">Casas de Show</h4>
              <p className="text-sm text-blue-700">Encontre casas de show, suas capacidades e eventos programados.</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg">
              <h4 className="font-medium text-green-900 mb-2">Usuários Próximos</h4>
              <p className="text-sm text-green-700">Conecte usuários que estão na mesma região ou evento.</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default MapPage;
