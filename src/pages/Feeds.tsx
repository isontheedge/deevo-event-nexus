
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Image, Video, MessageSquare, User, Calendar, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const Feeds = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const feeds = [
    {
      id: 1,
      author: "João Silva",
      event: "Festival de Rock 2024",
      type: "Texto",
      content: "O show está começando! A energia está incrível aqui no palco principal!",
      timestamp: "2024-05-15 20:30",
      status: "Ativo"
    },
    {
      id: 2,
      author: "Maria Santos",
      event: "Festival de Rock 2024",
      type: "Imagem",
      content: "Foto da multidão durante o show principal",
      timestamp: "2024-05-15 21:15",
      status: "Ativo"
    },
    {
      id: 3,
      author: "Pedro Oliveira",
      event: "Noite do Jazz",
      type: "Vídeo",
      content: "Solo de saxofone épico no palco principal",
      timestamp: "2024-05-14 22:45",
      status: "Ativo"
    },
    {
      id: 4,
      author: "Ana Costa",
      event: "Festival de Rock 2024",
      type: "Texto",
      content: "Que apresentação incrível da banda The Electric! 🎸🔥",
      timestamp: "2024-05-15 23:00",
      status: "Moderação"
    },
    {
      id: 5,
      author: "Carlos Lima",
      event: "Show Acústico",
      type: "Imagem",
      content: "Vista do palco durante a apresentação acústica",
      timestamp: "2024-05-12 19:30",
      status: "Ativo"
    }
  ];

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Texto": return "bg-blue-100 text-blue-800";
      case "Imagem": return "bg-green-100 text-green-800";
      case "Vídeo": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Moderação": return "bg-yellow-100 text-yellow-800";
      case "Removido": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Texto": return MessageSquare;
      case "Imagem": return Image;
      case "Vídeo": return Video;
      default: return MessageSquare;
    }
  };

  return (
    <AdminLayout 
      title="Gerenciar Feed Ao Vivo" 
      subtitle="Controle de posts em tempo real durante eventos"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar posts do feed..."
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
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-4">
          {feeds.map((feed) => {
            const TypeIcon = getTypeIcon(feed.type);
            return (
              <div key={feed.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{feed.author}</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{feed.event}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge className={getStatusBadgeColor(feed.status)}>
                      {feed.status}
                    </Badge>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <TypeIcon className="w-4 h-4 text-gray-600" />
                    <Badge className={getTypeBadgeColor(feed.type)}>
                      {feed.type}
                    </Badge>
                    <span className="text-sm text-gray-500">{feed.timestamp}</span>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    {feed.type === "Imagem" || feed.type === "Vídeo" ? (
                      <div className="space-y-2">
                        <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
                          <TypeIcon className="w-8 h-8 text-gray-400" />
                        </div>
                        <p className="text-gray-700 text-sm">{feed.content}</p>
                      </div>
                    ) : (
                      <p className="text-gray-700">{feed.content}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600">
                    Publicado em {new Date(feed.timestamp).toLocaleString('pt-BR')}
                  </div>
                  <div className="flex gap-2">
                    {feed.status === "Moderação" && (
                      <Button variant="outline" size="sm" className="text-green-600 hover:text-green-700">
                        Aprovar
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </AdminLayout>
  );
};

export default Feeds;
