function ErrorMessage({ message }) {
  return (
    <div
      role="alert"
      className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700"
    >
      <span aria-hidden="true"></span>
      <p>{message}</p>
    </div>
  );
}

export default ErrorMessage;
