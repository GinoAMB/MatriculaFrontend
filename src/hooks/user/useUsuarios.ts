import { useEffect, useState, useCallback } from "react";
import { obtenerUsuarios } from "@/api/service/usuario/usuario.service";
import type { Usuario, UsuarioFiltros } from "@/type/user/user.type";

export const useUsuarios = (filtros: UsuarioFiltros) => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [totalElements, setTotalElements] = useState(0);

  const cargarUsuarios = useCallback(async () => {
    try {
      setLoading(true);

      const data = await obtenerUsuarios(filtros);

      setUsuarios(data.content);
      setTotalPages(data.totalPages);
      setTotalElements(data.totalElements);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setLoading(false);
    }
  }, [filtros.page, filtros.size, filtros.search, filtros.rol, filtros.estado]);

  useEffect(() => {
    cargarUsuarios();
  }, [cargarUsuarios]);

  return {
    usuarios,
    loading,
    totalPages,
    totalElements,
    recargar: cargarUsuarios,
  };
};