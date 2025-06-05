
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Edit, Trash2, Star, Music, DollarSign } from "lucide-react";
import { useState } from "react";

const Artists = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const artists = [
    {
      id: 1,
      name: "The Electric Band",
      genre: "Rock",
      socialMedia: "@theelectricband",
      musicLinks: "spotify.com/theelectricband",
      minFee: "R$ 5.000",
      rating: 4.8,
      eventsCount: 15,
      status: "Verificado"
    },
    {
      id: 2,
      name: "Maria Jazz",
      genre: "Jazz",
      socialMedia: "@mariajazz",
      musicLinks: "youtube.com/mariajazz",
      minFee: "R$ 3.000",
      rating: 4.9,
      eventsCount: 8,
      status: "Verificado"
    },
    {
      id: 3,
      name: "DJ Thunder",
      genre: "Eletrônica",
      socialMedia: "@djthunder",
      musicLinks: "soundcloud.com/djthunder",
      minFee: "R$ 8.000",
      rating: 4.6,
      eventsCount: 25,
      status: "Pendente"
    },
    {
      id: 4,
      name: "Acoustic Soul",
      genre: "MPB",
      socialMedia: "@acousticsoul",
      musicLinks: "deezer.com/acousticsoul",
      minFee: "R$ 2.500",
      rating: 4.7,
      eventsCount: 12,
      status: "Verificado"
    }
  ];

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Verificado": return "bg-green-100 text-green-800";
      case "Pendente": return "bg-yellow-100 text-yellow-800";
      case "Rejeitado": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getGenreBadgeColor = (genre: string) => {
    switch (genre) {
      case "Rock": return "bg-red-100 text-red-800";
      case "Jazz": return "bg-blue-100 text-blue-800";
      case "Eletrônica": return "bg-purple-100 text-purple-800";
      case "MPB": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Gerenciar Artistas" 
      subtitle="Controle de artistas, agenda, cachês e avaliações"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar artistas..."
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
              Novo Artista
            </Button>
          </div>
        </div>

        {/* Artists Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{artist.name}</h3>
                    <Badge className={getGenreBadgeColor(artist.genre)}>
                      {artist.genre}
                    </Badge>
                  </div>
                  <Badge className={getStatusBadgeColor(artist.status)}>
                    {artist.status}
                  </Badge>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Music className="w-4 h-4 mr-2" />
                    {artist.socialMedia}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    Cachê mínimo: {artist.minFee}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Star className="w-4 h-4 mr-2 fill-yellow-400 text-yellow-400" />
                    {artist.rating} ({artist.eventsCount} eventos)
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-gray-600 mb-1">Links de Música</p>
                  <p className="text-sm text-blue-600 hover:text-blue-700 cursor-pointer truncate">
                    {artist.musicLinks}
                  </p>
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

export default Artists;
