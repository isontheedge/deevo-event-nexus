
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, Star, User, Calendar, Music, Building } from "lucide-react";
import { useState } from "react";

const Reviews = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const reviews = [
    {
      id: 1,
      author: "João Silva",
      target: "The Electric Band",
      targetType: "Artista",
      rating: 5,
      comment: "Show incrível! A banda estava em perfeita sintonia e o público adorou.",
      date: "2024-05-15",
      event: "Festival de Rock 2024"
    },
    {
      id: 2,
      author: "Maria Santos",
      target: "Casa do Rock",
      targetType: "Casa de Show",
      rating: 4,
      comment: "Ótima estrutura e som de qualidade. Apenas o bar poderia ter mais opções.",
      date: "2024-05-14",
      event: "Show de Rock Nacional"
    },
    {
      id: 3,
      author: "Pedro Oliveira",
      target: "Festival de Rock 2024",
      targetType: "Evento",
      rating: 5,
      comment: "Evento excepcional! Organização perfeita e lineup incrível.",
      date: "2024-05-16",
      event: "Festival de Rock 2024"
    },
    {
      id: 4,
      author: "Ana Costa",
      target: "Maria Jazz",
      targetType: "Artista",
      rating: 4,
      comment: "Voz maravilhosa e repertório bem escolhido. Recomendo!",
      date: "2024-05-12",
      event: "Noite do Jazz"
    }
  ];

  const getTargetTypeBadgeColor = (type: string) => {
    switch (type) {
      case "Artista": return "bg-purple-100 text-purple-800";
      case "Casa de Show": return "bg-blue-100 text-blue-800";
      case "Evento": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getTargetTypeIcon = (type: string) => {
    switch (type) {
      case "Artista": return Music;
      case "Casa de Show": return Building;
      case "Evento": return Calendar;
      default: return User;
    }
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <AdminLayout 
      title="Gerenciar Avaliações" 
      subtitle="Controle de avaliações de usuários para artistas, eventos e casas de show"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar avaliações..."
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

        {/* Reviews List */}
        <div className="space-y-4">
          {reviews.map((review) => {
            const TargetIcon = getTargetTypeIcon(review.targetType);
            return (
              <div key={review.id} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-gray-100 rounded-full">
                      <User className="w-5 h-5 text-gray-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{review.author}</h3>
                      <p className="text-sm text-gray-600">
                        {new Date(review.date).toLocaleDateString('pt-BR')}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm font-medium text-gray-700">{review.rating}/5</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <TargetIcon className="w-4 h-4 text-gray-600" />
                    <span className="font-medium text-gray-900">{review.target}</span>
                    <Badge className={getTargetTypeBadgeColor(review.targetType)}>
                      {review.targetType}
                    </Badge>
                  </div>
                  <p className="text-gray-700">{review.comment}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Evento: {review.event}</span>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Moderar
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Remover
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

export default Reviews;
