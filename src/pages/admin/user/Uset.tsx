import UserHeader from "./components/UserHeader";
import UserFilters from "./components/UserFilters";
import UserList from "./components/UserList";
import Pagination from "@/components/Pagination";
import { useState } from "react";

export default function User() {
    type User = {
        id: number;
        name: string;
        email: string;
        role: string;
        status: "Activo" | "Inactivo";
    };

    const users: User[] = [
        { id: 1, name: "Juan Pérez", email: "juan@email.com", role: "Admin", status: "Activo" },
        { id: 2, name: "María López", email: "maria@email.com", role: "Docente", status: "Inactivo" },
        { id: 3, name: "Carlos Ramírez", email: "carlos@email.com", role: "Admin", status: "Activo" },
        { id: 4, name: "Ana Torres", email: "ana@email.com", role: "Docente", status: "Activo" },
        { id: 5, name: "Luis García", email: "luis@email.com", role: "Docente", status: "Inactivo" },
        { id: 6, name: "Sofía Herrera", email: "sofia@email.com", role: "Admin", status: "Activo" },
        { id: 7, name: "Diego Flores", email: "diego@email.com", role: "Docente", status: "Activo" },
        { id: 8, name: "Lucía Castro", email: "lucia@email.com", role: "Docente", status: "Inactivo" },
        { id: 9, name: "Pedro Sánchez", email: "pedro@email.com", role: "Admin", status: "Activo" },
        { id: 10, name: "Valeria Rojas", email: "valeria@email.com", role: "Docente", status: "Activo" },
        { id: 11, name: "Jorge Mendoza", email: "jorge@email.com", role: "Admin", status: "Inactivo" },
        { id: 12, name: "Camila Navarro", email: "camila@email.com", role: "Docente", status: "Activo" },
        { id: 13, name: "Andrés Vega", email: "andres@email.com", role: "Docente", status: "Activo" },
        { id: 14, name: "Paula Ortiz", email: "paula@email.com", role: "Admin", status: "Inactivo" },
        { id: 15, name: "Fernando Ruiz", email: "fernando@email.com", role: "Docente", status: "Activo" },
        { id: 16, name: "Daniela Paredes", email: "daniela@email.com", role: "Admin", status: "Activo" },
        { id: 17, name: "Miguel Chávez", email: "miguel@email.com", role: "Docente", status: "Inactivo" },
        { id: 18, name: "Renata Silva", email: "renata@email.com", role: "Docente", status: "Activo" },
        { id: 19, name: "Ricardo León", email: "ricardo@email.com", role: "Admin", status: "Activo" },
        { id: 20, name: "Elena Vargas", email: "elena@email.com", role: "Docente", status: "Activo" },
    ];

    const handleSearch = (filters: {
        search: string;
        role: string;
        status: string;
    }) => {
        console.log("Filtros:", filters);
    };

    const handleEdit = (user: any) => {
        console.log("Editar:", user);
    };

    const handleToggleStatus = (user: any) => {
        console.log("Cambiar estado:", user);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const totalPages = Math.ceil(users.length / itemsPerPage);

    const paginatedUsers = users.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="flex flex-col gap-3">
            <UserHeader
                title="Gestión de Usuarios"
                subtitle="Administra el personal académico, administrativo y los roles de acceso para la IE 33280 San Bartolo."
            />

            <UserFilters onSearch={handleSearch} />


            <UserList
                users={paginatedUsers}
                onEdit={handleEdit}
                onToggleStatus={handleToggleStatus}
            />

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={users.length}   
                itemsPerPage={itemsPerPage}  
                onPageChange={setCurrentPage}
            />

        </div>
    );
}