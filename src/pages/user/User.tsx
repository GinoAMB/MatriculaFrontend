import { useCallback, useState } from "react";
import UserHeader from "./components/UserHeader";
import UserFilters from "./components/UserFilters";
import UserList from "./components/UserList";
import Pagination from "@/components/Pagination";
import CreateUserModal from "./modals/CreateUserModal";
import EditUserModal from "./modals/EditUserModal";
import Loader from "@/components/Loader";

import { useRoles } from "@/hooks/role/useRoles";
import { useUsuarios } from "@/hooks/user/useUsuarios";
import { useCreateUsuario } from "@/hooks/user/useCreateUsuario";
import { useChangeStatusUsuario } from "@/hooks/user/useChangeStatusUsuario";
import { useUpdateUser } from "@/hooks/user/useUpdateUser";

import type { Usuario, UsuarioFiltros } from "@/type/user/user.type";

import { showSuccess, showError } from "@/utils/toast";
import ErrorState from "@/components/ErrorState";

export default function User() {
    const [filtros, setFiltros] = useState<UsuarioFiltros>({
        page: 0,
        size: 10,
    });

    const { usuarios, loading, totalPages, totalElements, recargar, error } =
        useUsuarios(filtros);

    const { roles, loading: loadingRoles } = useRoles();

    const {
        createUser,
        loading: loadingCreate,
    } = useCreateUsuario();

    const {
        changeStatus,
        loading: loadingStatus,
    } = useChangeStatusUsuario();

    const {
        updateUser,
        loading: loadingUpdate,
    } = useUpdateUser();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const [selectedUser, setSelectedUser] = useState<Usuario | null>(null);

    const handleSearch = useCallback((filters: {
        search: string;
        role: string;
        status: string;
    }) => {
        const nuevoFiltro: UsuarioFiltros = {
            page: 0,
            size: 10,
            search: filters.search.trim() || undefined,
            rol: filters.role || undefined,
            estado:
                filters.status === ""
                    ? undefined
                    : filters.status === "activo",
        };

        setFiltros((prev) => {
            const same =
                prev.page === nuevoFiltro.page &&
                prev.size === nuevoFiltro.size &&
                prev.search === nuevoFiltro.search &&
                prev.rol === nuevoFiltro.rol &&
                prev.estado === nuevoFiltro.estado;

            return same ? prev : nuevoFiltro;
        });
    }, []);

    const handlePageChange = useCallback((page: number) => {
        setFiltros((prev) => {
            const nuevaPagina = page - 1;

            if (prev.page === nuevaPagina) return prev;

            return {
                ...prev,
                page: nuevaPagina,
            };
        });
    }, []);

    const handleToggleStatus = async (user: Usuario) => {
        try {
            await changeStatus(user.idUsuario);

            await recargar();

            const nuevoEstado = user.estado
                ? "desactivado"
                : "activado";

            showSuccess(
                `Usuario ${nuevoEstado} correctamente`
            );
        } catch (error) {
            showError("No se pudo cambiar el estado");
        }
    };

    const handleCreateUser = async (data: {
        name: string;
        lastname: string;
        email: string;
        password: string;
        role: string;
    }) => {
        try {
            await createUser({
                nombre: data.name,
                apellidos: data.lastname,
                correo: data.email,
                password: data.password,
                idRol: Number(data.role),
            });

            await recargar();

            showSuccess("Usuario creado correctamente");

            setIsModalOpen(false);
        } catch (error) {

            if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al crear el usuario");
            }
        }
    };

    const handleEdit = (user: Usuario) => {
        setSelectedUser(user);
        setIsEditModalOpen(true);
    };

    const handleUpdateUser = async (data: any) => {
        try {

            const payload = {
                nombre: data.nombre,
                apellidos: data.apellidos,
                correo: data.correo,
                idRol: Number(data.idRol),
                password: data.password,
                estado: data.estado,
            };

            await updateUser(data.idUsuario, payload);

            await recargar();

            showSuccess("Usuario actualizado correctamente");

            setIsEditModalOpen(false);

        } catch (error) {

            if (error instanceof Error) {
                showError(error.message);
            } else {
                showError("Error al actualizar el usuario");
            }
        }
    };

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
            <UserHeader
                title="Gestión de usuarios"
                subtitle="Administre el personal académico, administrativo y los roles de acceso."
                onNewUser={() => setIsModalOpen(true)}
            />

            <UserFilters
                onSearch={handleSearch}
                roles={roles}
                loadingRoles={loadingRoles}
            />

            {loading ? (
                <Loader />
            ) : (
                <UserList
                    users={usuarios}
                    onEdit={handleEdit}
                    onToggleStatus={handleToggleStatus}
                    loadingStatus={loadingStatus}
                />
            )}

            <Pagination
                currentPage={(filtros.page ?? 0) + 1}
                totalPages={totalPages}
                totalItems={totalElements}
                itemsPerPage={filtros.size ?? 10}
                onPageChange={handlePageChange}
            />

            <CreateUserModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onCreate={handleCreateUser}
                roles={roles}
                loadingRoles={loadingRoles}
                loading={loadingCreate}
            />

            <EditUserModal
                isOpen={isEditModalOpen}
                onClose={() => setIsEditModalOpen(false)}
                user={selectedUser}
                onUpdate={handleUpdateUser}
                loading={loadingUpdate}
                roles={roles}
                loadingRoles={loadingRoles}
            />
        </div>
    );
}