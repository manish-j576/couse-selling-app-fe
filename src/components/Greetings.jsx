export function Greetings(){
    function getGreeting() {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    }
    const greetings = getGreeting();
    return (
      <div className="w-full p-2 bg-linear-to-r from-blue-900/80 to-blue-600/70 items-center">
        <h2 className="text-3xl">{greetings} !</h2>
      </div>
    );
}