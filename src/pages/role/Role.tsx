import { useState } from "react";

import RoleHeader from "./components/RoleHeader";
import RoleList from "./components/RoleList";
import CreateRoleModal from "./modals/CreateRoleModal";
import EditRoleModal from "./modals/EditRoleModal";
import Pagination from "@/components/Pagination";
import Loader from "@/components/Loader";
import ErrorState from "@/components/ErrorState";

import { useRoles } from "@/hooks/role/useRoles";
import { useUpdateRole } from "@/hooks/role/useUpdateRole";
import { useCreateRole } from "@/hooks/role/useCreateRole";

import type { Role } from "@/type/role/rol.type";

import { showSuccess, showError } from "@/utils/toast";

export default function RolePage() {

    const { roles, loading, error, recargar } = useRoles();
    const { actualizarRol, loading: updating } = useUpdateRole();
    const { crearRol, loading: creating } = useCreateRole();

    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

    const handleCreateRole = async (data: { name: string }) => {

        try {

            const response = await crearRol({
                nombre: data.name,
            });

            if (response) {

                await recargar();

                showSuccess("Rol creado correctamente");

                setIsRoleModalOpen(false);
            }

        } catch (error) {

           if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al crear el rol");
            }
        }
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    const handleEditRole = (role: Role) => {
        setSelectedRole(role);
        setIsEditModalOpen(true);
    };

    const handleUpdateRole = async (updatedRole: Role) => {

        try {

            const response = await actualizarRol({
                idRol: updatedRole.idRol,
                nombre: updatedRole.nombre,
            });

            if (response) {

                await recargar();

                showSuccess("Rol actualizado correctamente");

                setIsEditModalOpen(false);
            }

        } catch (error) {

            if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al actualizar el rol");
            }
        }
    };

    const [currentPage, setCurrentPage] = useState(1);

    const itemsPerPage = 10;

    const totalPages = Math.ceil(roles.length / itemsPerPage);

    const paginatedRoles = roles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    // Error
    if (error) {
        return (
            <ErrorState
                message={error}
                onRetry={recargar}
            />
        );
    }

    return (
        <div className="flex flex-col gap-3">

            <RoleHeader
                title="Gestión de Roles"
                subtitle="Define y administra los niveles de acceso para el personal de la institución."
                onNewRole={() => setIsRoleModalOpen(true)}
            />

            {loading ? (
                <Loader />
            ) : (
                <RoleList
                    role={paginatedRoles}
                    onEdit={handleEditRole}
                />
            )}

            {!loading && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    totalItems={roles.length}
                    itemsPerPage={itemsPerPage}
                    onPageChange={setCurrentPage}
                />
            )}

            <CreateRoleModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                onCreate={handleCreateRole}
                loading={creating}
            />

            <EditRoleModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                role={selectedRole}
                onUpdate={handleUpdateRole}
                loading={updating}
            />

        </div>
    );
}