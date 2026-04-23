import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi2";
import { PiLeaf } from "react-icons/pi";
import ColegioFondo from "../../assets/ie-88320-san-bartolo.jpg";
import { useValidation } from "@/hooks/password-recovery/useValidation";
import { useUpdatePassword } from "@/hooks/password-recovery/useUpdatePassword";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {
  const [params] = useSearchParams();
  const token = params.get("token");
  const navigate = useNavigate();


  const { validateToken, loading, error } = useValidation();
  const { updatePassword, loading: updating, error: updateError, message, success } = useUpdatePassword();

  const [valid, setValid] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [formError, setFormError] = useState<string | null>(null);

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }, [success, navigate]);

  useEffect(() => {
  if (!token) return;
  validateToken(token).then((res) => {
    setValid(res);
  });
}, [token]);

  if (!token) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">Token no proporcionado</p>
      </div>
    );
  }

  if (loading) {
    return <p className="text-center mt-10">Validando enlace...</p>;
  }

  if (!loading && !valid) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500">
          {error || "El enlace es inválido o ha expirado"}
        </p>
      </div>
    );
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      setFormError("Todos los campos son obligatorios");
      return;
    }

    if (password !== confirmPassword) {
      setFormError("Las contraseñas no coinciden");
      return;
    }

    setFormError(null);

    if (token) {
      await updatePassword(token, password);
    }
  };
  return (
    <div className="min-h-screen flex bg-neutral">

      <div className="hidden md:flex md:w-3/5 relative">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ColegioFondo})` }}
        />
        <div className="absolute inset-0 bg-primary-transparent6" />
      </div>

      <div className="w-full md:w-2/5 flex items-center justify-center px-4">
        <div className="w-full max-w-md flex flex-col gap-5">

          <h2 className="text-xl font-bold">Nueva contraseña</h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">

            <div className="relative">
              <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Nueva contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border px-10 py-2 w-full rounded-md"
              />
              <PiLeaf className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            <div className="relative">
              <HiLockClosed className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="password"
                placeholder="Confirmar contraseña"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="border px-10 py-2 w-full rounded-md"
              />
              <PiLeaf className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300" />
            </div>

            <button
              type="submit"
              disabled={updating}
              className="btn-primary text-sm"
            >
              {updating ? "Actualizando..." : "Cambiar contraseña"}
            </button>
            {formError && (
              <p className="text-red-500 text-sm">{formError}</p>
            )}

            {updateError && (
              <p className="text-red-500 text-sm">{updateError}</p>
            )}

            {success && (
              <p className="text-green-600 text-sm">{message}</p>
            )}
          </form>

        </div>
      </div>
    </div>
  );
}