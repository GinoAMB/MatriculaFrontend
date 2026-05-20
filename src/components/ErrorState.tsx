import { TbFaceIdError } from "react-icons/tb";
import { FiRefreshCw } from "react-icons/fi";

type Props = {
    message?: string;
    onRetry?: () => void;
};

export default function ErrorState({
    message = "No pudimos cargar la información solicitada.",
    onRetry,
}: Props) {

    return (

        <div className="w-full flex items-center justify-center py-12 px-4">

            <div
                className="
                    w-full max-w-lg
                    bg-gradient-to-br from-red-50 to-white
                    border border-red-100
                    rounded-3xl
                    p-8
                    shadow-sm
                    relative
                    overflow-hidden
                "
            >

                {/* Decoración */}
                <div
                    className="
                        absolute -top-10 -right-10
                        w-32 h-32
                        bg-red-100
                        rounded-full
                        opacity-40
                    "
                />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center gap-5">

                    {/* Icon */}
                    <div
                        className="
                            w-20 h-20
                            rounded-2xl
                            bg-white
                            border border-red-100
                            flex items-center justify-center
                            shadow-sm
                        "
                    >

                        <TbFaceIdError className="text-5xl text-red-500" />

                    </div>

                    {/* Text */}
                    <div className="space-y-1">

                        <h2 className="text-xl font-semibold text-gray-800">
                            Algo salió mal
                        </h2>

                        <p className="text-sm text-gray-500 leading-relaxed">
                            {message}
                        </p>

                    </div>

                    {/* Action */}
                    {onRetry && (

                        <button
                            onClick={onRetry}
                            className="
                                inline-flex items-center gap-2
                                bg-red-500 hover:bg-red-600
                                text-white
                                text-sm font-medium
                                px-5 py-2.5
                                rounded-xl
                                transition-all duration-200
                                shadow-sm hover:shadow-md
                            "
                        >

                            <FiRefreshCw className="text-base" />

                            Intentar nuevamente

                        </button>

                    )}

                </div>

            </div>

        </div>
    );
}