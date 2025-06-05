
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Key, Eye, EyeOff, Copy, Edit, Trash2 } from "lucide-react";
import { useState } from "react";

const ApiKeys = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleKeys, setVisibleKeys] = useState<{ [key: number]: boolean }>({});

  const apiKeys = [
    {
      id: 1,
      name: "Sistema de Pagamentos",
      key: "sk_live_123456789abcdefghijklmnop",
      createdAt: "2024-05-01",
      lastUsed: "2024-05-15",
      status: "Ativo"
    },
    {
      id: 2,
      name: "Serviço de Email",
      key: "key_email_987654321zyxwvutsrqpo",
      createdAt: "2024-04-15",
      lastUsed: "2024-05-14",
      status: "Ativo"
    },
    {
      id: 3,
      name: "API de Mapas",
      key: "pk_maps_abcdef123456789ghijklmn",
      createdAt: "2024-04-01",
      lastUsed: "2024-05-10",
      status: "Ativo"
    },
    {
      id: 4,
      name: "Integração SMS",
      key: "sms_key_xyz789abc123def456ghi",
      createdAt: "2024-03-20",
      lastUsed: "2024-04-28",
      status: "Inativo"
    }
  ];

  const toggleKeyVisibility = (id: number) => {
    setVisibleKeys(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const maskKey = (key: string) => {
    if (key.length <= 8) return key;
    return key.substring(0, 4) + "..." + key.substring(key.length - 4);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    // You could add a toast notification here
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case "Ativo": return "bg-green-100 text-green-800";
      case "Inativo": return "bg-red-100 text-red-800";
      case "Expirado": return "bg-yellow-100 text-yellow-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <AdminLayout 
      title="Chaves de API" 
      subtitle="Gerenciamento de chaves de API privadas e integrações externas"
    >
      <div className="p-6">
        {/* Header Actions */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Buscar chaves de API..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <Button size="sm" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            <Plus className="w-4 h-4 mr-2" />
            Nova Chave de API
          </Button>
        </div>

        {/* Security Notice */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex items-start gap-3">
            <Key className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h3 className="font-medium text-yellow-800 mb-1">Importante - Segurança</h3>
              <p className="text-sm text-yellow-700">
                Mantenha suas chaves de API seguras. Nunca compartilhe essas informações e rotacione-as regularmente.
                As chaves são criptografadas e apenas usuários autorizados podem visualizá-las.
              </p>
            </div>
          </div>
        </div>

        {/* API Keys Table */}
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left p-4 font-medium text-gray-900">Nome</th>
                  <th className="text-left p-4 font-medium text-gray-900">Chave</th>
                  <th className="text-left p-4 font-medium text-gray-900">Status</th>
                  <th className="text-left p-4 font-medium text-gray-900">Criada em</th>
                  <th className="text-left p-4 font-medium text-gray-900">Último Uso</th>
                  <th className="text-left p-4 font-medium text-gray-900">Ações</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {apiKeys.map((apiKey) => (
                  <tr key={apiKey.id} className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <Key className="w-4 h-4 text-gray-400" />
                        <span className="font-medium text-gray-900">{apiKey.name}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono">
                          {visibleKeys[apiKey.id] ? apiKey.key : maskKey(apiKey.key)}
                        </code>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => toggleKeyVisibility(apiKey.id)}
                          className="p-1"
                        >
                          {visibleKeys[apiKey.id] ? (
                            <EyeOff className="w-4 h-4" />
                          ) : (
                            <Eye className="w-4 h-4" />
                          )}
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => copyToClipboard(apiKey.key)}
                          className="p-1"
                        >
                          <Copy className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={getStatusBadgeColor(apiKey.status)}>
                        {apiKey.status}
                      </Badge>
                    </td>
                    <td className="p-4 text-gray-600">
                      {new Date(apiKey.createdAt).toLocaleDateString('pt-BR')}
                    </td>
                    <td className="p-4 text-gray-600">
                      {new Date(apiKey.lastUsed).toLocaleDateString('pt-BR')}
                    </td>
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

        {/* API Key Guidelines */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Diretrizes para Chaves de API</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Boas Práticas</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Rotacione chaves regularmente</li>
                <li>• Use chaves específicas para cada serviço</li>
                <li>• Monitore o uso das chaves</li>
                <li>• Revogue chaves não utilizadas</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Segurança</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Nunca compartilhe chaves em repositórios públicos</li>
                <li>• Use variáveis de ambiente em produção</li>
                <li>• Implemente logs de auditoria</li>
                <li>• Configure alertas para uso suspeito</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default ApiKeys;
