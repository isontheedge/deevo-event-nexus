
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const users = [
    { 
      id: 1, 
      name: "João Silva", 
      email: "joao@email.com", 
      role: "Usuário comum", 
      status: "Ativo",
      createdAt: "15 Mai 2024"
    },
    { 
      id: 2, 
      name: "Maria Santos", 
      email: "maria@email.com", 
      role: "Artista", 
      status: "Ativo",
      createdAt: "10 Mai 2024"
    },
    { 
      id: 3, 
      name: "Casa do Rock", 
      email: "contato@casadorock.com", 
      role: "Casa de show", 
      status: "Ativo",
      createdAt: "08 Mai 2024"
    },
    { 
      id: 4, 
      name: "Pedro Oliveira", 
      email: "pedro@email.com", 
      role: "Organizador de evento", 
      status: "Pendente",
      createdAt: "12 Mai 2024"
    },
  ];

  const getRoleBadgeColor = (role: string) => {
    switch (role) {
      case "Artista": return "bg-purple-100 text-purple-800";
      case "Casa de show": return "bg-blue-100 text-blue-800";
      case "Organizador de evento": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Pendente": return "bg-yellow-100 text-yellow-800";
      case "Inativo": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Gerenciar Usuários" 
      subtitle="Controle de usuários, artistas, casas de show e organizadores"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar usuários..."
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
              Novo Usuário
            </Button>
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Nome</th>
                  <th className="text-left p-4 font-medium text-gray-900">Email</th>
                  <th className="text-left p-4 font-medium text-gray-900">Tipo</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Criado em</th>
                  <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="p-4 text-gray-600">{user.email}</td>
                    <td className="p-4">
                      <Badge className={getRoleBadgeColor(user.role)}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusBadgeColor(user.status)}>
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">{user.createdAt}</td>
                    <td className="p-4">
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Users;
