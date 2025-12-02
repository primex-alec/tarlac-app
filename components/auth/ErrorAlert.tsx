type ErrorAlertProps = {
  message: string;
};

export function ErrorAlert({ message }: ErrorAlertProps) {
  return (
    <div
      role="alert"
      className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700"
    >
      {message}
    </div>
  );
}
