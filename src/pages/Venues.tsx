
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Edit, Trash2, MapPin, Star, Menu } from "lucide-react";
import { useState } from "react";

const Venues = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const venues = [
    {
      id: 1,
      name: "Casa do Rock",
      location: "São Paulo, SP - Rua Augusta, 123",
      rating: 4.5,
      eventsCount: 45,
      photosCount: 28,
      menuItems: 15,
      status: "Ativo",
      capacity: 500
    },
    {
      id: 2,
      name: "Jazz Club Rio",
      location: "Rio de Janeiro, RJ - Ipanema, 456",
      rating: 4.8,
      eventsCount: 32,
      photosCount: 45,
      menuItems: 22,
      status: "Ativo",
      capacity: 200
    },
    {
      id: 3,
      name: "Electronic Arena",
      location: "Florianópolis, SC - Centro, 789",
      rating: 4.3,
      eventsCount: 18,
      photosCount: 52,
      menuItems: 8,
      status: "Manutenção",
      capacity: 1000
    },
    {
      id: 4,
      name: "Acoustic Lounge",
      location: "Belo Horizonte, MG - Savassi, 321",
      rating: 4.7,
      eventsCount: 28,
      photosCount: 35,
      menuItems: 30,
      status: "Ativo",
      capacity: 150
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Manutenção": return "bg-yellow-100 text-yellow-800";
      case "Inativo": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Gerenciar Casas de Show" 
      subtitle="Controle de venues, cardápios, fotos e localização"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar casas de show..."
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
              Nova Casa de Show
            </Button>
          </div>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {venues.map((venue) => (
            <div key={venue.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{venue.name}</h3>
                    <div className="flex items-center text-sm text-gray-600 mb-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {venue.location}
                    </div>
                  </div>
                  <Badge className={getStatusBadgeColor(venue.status)}>
                    {venue.status}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Capacidade</p>
                    <p className="text-lg font-semibold text-gray-900">{venue.capacity}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Avaliação</p>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      <p className="text-lg font-semibold text-gray-900">{venue.rating}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{venue.eventsCount}</p>
                    <p className="text-xs text-gray-600">Eventos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{venue.photosCount}</p>
                    <p className="text-xs text-gray-600">Fotos</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-semibold text-gray-900">{venue.menuItems}</p>
                    <p className="text-xs text-gray-600">Cardápio</p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Menu className="w-4 h-4 mr-2" />
                    Cardápio
                  </Button>
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

export default Venues;
