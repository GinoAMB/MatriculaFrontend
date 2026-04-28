import { useState } from "react";
import RoleHeader from "./components/RoleHeader";
import RoleList from "./components/RoleList";
import CreateRoleModal from "./modals/CreateRoleModal";
import EditRoleModal from "./modals/EditRoleModal";
import Pagination from "@/components/Pagination";

export default function RolePage() {
    type Role = {
        id: number;
        name: string;
    };
    const roles: Role[] = [
        { id: 1, name: "Admin" },
        { id: 2, name: "Docente" },
        { id: 3, name: "Estudiante" },
        { id: 4, name: "Coordinador" },
        { id: 5, name: "Secretaria" },
    ];

    const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);

    const handleCreateRole = (data: any) => {
        console.log("Rol creado:", data);
    };

    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [selectedRole, setSelectedRole] = useState<Role | null>(null);

    const handleEditRole = (role: Role) => {
        setSelectedRole(role);
        setIsEditModalOpen(true);
    };

    const handleUpdateRole = (updatedRole: Role) => {
        console.log("Rol actualizado:", updatedRole);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(roles.length / itemsPerPage);

    const paginatedRoles = roles.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );
    return (
        <div className="flex flex-col gap-3">
            <RoleHeader
                title="Gestión de Roles"
                subtitle="Define y administra los niveles de acceso para el personal de la institución."
                onNewRole={() => setIsRoleModalOpen(true)}
            />
            <RoleList
                role={paginatedRoles}
                onEdit={handleEditRole}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={roles.length}
                itemsPerPage={itemsPerPage}
                onPageChange={setCurrentPage}
            />
            <CreateRoleModal
                isOpen={isRoleModalOpen}
                onClose={() => setIsRoleModalOpen(false)}
                onCreate={handleCreateRole}
            />

            <EditRoleModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                role={selectedRole}
                onUpdate={handleUpdateRole}
            />

        </div>
    );
}