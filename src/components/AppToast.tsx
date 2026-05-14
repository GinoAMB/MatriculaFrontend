import { Toaster } from "sonner";

export default function AppToast() {
    return (
        <Toaster
            position="top-right"
            richColors
            closeButton
            duration={3000}
        />
    );
}