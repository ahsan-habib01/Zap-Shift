const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div className="w-14 h-14 rounded-full border-4 border-gray-200"></div>

        {/* Animated ring */}
        <div className="absolute w-14 h-14 rounded-full border-4 border-teal-500 border-t-transparent animate-spin"></div>

        {/* Dot inside */}
        <div className="absolute w-3 h-3 bg-teal-600 rounded-full animate-ping"></div>
      </div>
    </div>
  );
};

export default Loading;
