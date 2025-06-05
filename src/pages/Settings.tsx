
import { AdminLayout } from "@/components/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Settings2, User, Bell, Shield, Database, Mail } from "lucide-react";

const Settings = () => {
  return (
    <AdminLayout 
      title="Configurações" 
      subtitle="Configurações gerais do sistema e preferências administrativas"
    >
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* System Settings */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Settings2 className="w-5 h-5 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-900">Sistema</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Nome da Aplicação
                </label>
                <Input defaultValue="Deevo" />
              </div>
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  URL Base
                </label>
                <Input defaultValue="https://deevo.com.br" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Modo de Manutenção</p>
                  <p className="text-xs text-gray-500">Desativa o acesso público temporariamente</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* User Management */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <User className="w-5 h-5 text-blue-600" />
              <h3 className="text-lg font-semibold text-gray-900">Usuários</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Registro Público</p>
                  <p className="text-xs text-gray-500">Permite novos usuários se cadastrarem</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Verificação de Email</p>
                  <p className="text-xs text-gray-500">Obrigatória para novos usuários</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Aprovação Manual de Artistas</p>
                  <p className="text-xs text-gray-500">Admin deve aprovar perfis de artistas</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Bell className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-900">Notificações</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Email para Novos Eventos</p>
                  <p className="text-xs text-gray-500">Notificar admin sobre novos eventos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Alertas de Sistema</p>
                  <p className="text-xs text-gray-500">Erros e problemas técnicos</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Relatórios Semanais</p>
                  <p className="text-xs text-gray-500">Resumo semanal por email</p>
                </div>
                <Switch />
              </div>
            </div>
          </div>

          {/* Security */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-5 h-5 text-red-600" />
              <h3 className="text-lg font-semibold text-gray-900">Segurança</h3>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Sessão Expira em (minutos)
                </label>
                <Input type="number" defaultValue="60" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Autenticação de Dois Fatores</p>
                  <p className="text-xs text-gray-500">Obrigatória para administradores</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-700">Log de Atividades</p>
                  <p className="text-xs text-gray-500">Registrar todas as ações do admin</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </div>
        </div>

        {/* Integration Status */}
        <div className="mt-6 bg-white rounded-lg border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-4">
            <Database className="w-5 h-5 text-indigo-600" />
            <h3 className="text-lg font-semibold text-gray-900">Status das Integrações</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-green-900">Banco de Dados</p>
                <Badge className="bg-green-100 text-green-800">Conectado</Badge>
              </div>
              <p className="text-sm text-green-700">PostgreSQL funcionando normalmente</p>
            </div>
            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-yellow-900">Serviço de Email</p>
                <Badge className="bg-yellow-100 text-yellow-800">Limitado</Badge>
              </div>
              <p className="text-sm text-yellow-700">Rate limit atingido - 85% da cota</p>
            </div>
            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between mb-2">
                <p className="font-medium text-green-900">API de Pagamentos</p>
                <Badge className="bg-green-100 text-green-800">Conectado</Badge>
              </div>
              <p className="text-sm text-green-700">Stripe funcionando normalmente</p>
            </div>
          </div>
        </div>

        {/* Save Settings */}
        <div className="mt-6 flex justify-end">
          <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
            Salvar Configurações
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
