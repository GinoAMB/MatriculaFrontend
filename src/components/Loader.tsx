type LoaderProps = {
    size?: number;
};

export default function Loader({
    size = 45,
}: LoaderProps) {
    return (
        <div className="flex items-center justify-center py-10">
            <div
                className="border-[5px] border-gray-200 border-t-blue-600 rounded-full animate-spin"
                style={{
                    width: `${size}px`,
                    height: `${size}px`,
                }}
            />
        </div>
    );
}